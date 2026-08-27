import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const SYSTEM_PROMPT = `You are the WasteCure virtual assistant. WasteCure is a Ghanaian waste management company based in Kumasi, Ashanti Region, founded in 2021.

About WasteCure:
- Mission: To provide advanced waste solutions with the required expertise, technical and managerial competencies, and resources to support our clients achieve their waste management goals.
- Services: (1) Waste collection - door-to-door and drop-off; (2) Recyclables collection & sorting - PET, HDPE, LDPE; (3) Cleaning services for schools, corporate offices, and residence/real estate facilities; (4) Waste management consultancy for institutions and communities.
- Also does community engagement/education and clean-ups.
- Contact: phone +233 20 397 0216, email wastecureltd@gmail.com, Instagram @wastecureghana, LinkedIn company/wastecure.
- Service area: Ghana (based in Kumasi, Ashanti Region). Currently active in the Afigya Kwabre South district, expanding nationwide.

Your role:
- Answer questions about WasteCure's services, pricing approach, service area, how to request pickup, how to partner, how communities/schools can get involved.
- Be friendly, concise, practical and Ghana-context-aware. Use simple English.
- If someone wants to request pickup or book consultancy, encourage them to use the contact form on the page (section #contact) or call +233 20 397 0216.
- If you don't know something specific (exact pricing, real-time availability), be honest and direct them to contact the team.
- Keep replies under 120 words unless the user asks for detail.
- Never invent facts about WasteCure that aren't in this prompt.`;

const bodySchema = z.object({
  message: z.string().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(2000),
      })
    )
    .max(20)
    .optional(),
  sessionId: z.string().max(80).optional(),
});

function newSessionId() {
  return `s-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }
    const parsed = bodySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid request", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { message, history, sessionId } = parsed.data;
    const sid = sessionId || newSessionId();

    // Build message list for the LLM
    type LlmMsg = { role: "system" | "user" | "assistant"; content: string };
    const messages: LlmMsg[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history ?? []).map((m) => ({
        role: m.role,
        content: m.content,
      })) as LlmMsg[],
      { role: "user", content: message },
    ];

    // Try to persist the user message (non-blocking)
    const persistUser = db.chatMessage
      .create({ data: { sessionId: sid, role: "user", content: message } })
      .catch(() => null);

    let reply: string;
    try {
      const { getZai, ZAI_MODEL } = await import("@/lib/zai");
      const zai = await getZai();
      const completion: any = await zai.chat.completions.create({
        model: ZAI_MODEL,
        messages,
      });
      reply =
        completion?.choices?.[0]?.message?.content?.trim() ||
        completion?.message?.content?.trim() ||
        "I'm not sure how to answer that right now. Please call us on +233 20 397 0216 or use the contact form.";
    } catch (llmErr) {
      console.error("[chat] LLM error:", llmErr);
      reply =
        "I'm having trouble connecting to my knowledge service right now. Please call us on +233 20 397 0216 or send a message through the contact form and we'll respond within 1–2 business days.";
    }

    // Persist assistant reply
    await persistUser;
    await db.chatMessage
      .create({ data: { sessionId: sid, role: "assistant", content: reply } })
      .catch(() => null);

    return NextResponse.json({
      success: true,
      reply,
      sessionId: sid,
    });
  } catch (err) {
    console.error("[chat POST] error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Server error",
        reply:
          "I'm having trouble responding right now. Please call WasteCure on +233 20 397 0216 or use the contact form.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const items = await db.chatMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ success: true, items });
  } catch (err) {
    console.error("[chat GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
