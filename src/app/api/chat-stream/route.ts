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
      return new Response(JSON.stringify({ success: false, error: "Invalid JSON body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const parsed = bodySchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid request", details: parsed.error.issues }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { message, history, sessionId } = parsed.data;
    const sid = sessionId || newSessionId();

    type LlmMsg = { role: "system" | "user" | "assistant"; content: string };
    const messages: LlmMsg[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...((history ?? []).map((m) => ({ role: m.role, content: m.content })) as LlmMsg[]),
      { role: "user", content: message },
    ];

    // Persist user message (non-blocking)
    db.chatMessage
      .create({ data: { sessionId: sid, role: "user", content: message } })
      .catch(() => null);

    const encoder = new TextEncoder();
    let fullReply = "";

    const stream = new ReadableStream({
      async start(controller) {
        // Send the sessionId first so the client can track it
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "session", sessionId: sid })}\n\n`)
        );

        try {
          const { getZai, ZAI_MODEL } = await import("@/lib/zai");
          const zai = await getZai();
          const llmStream: any = await zai.chat.completions.create({
            model: ZAI_MODEL,
            messages,
            stream: true,
          });

          // The SDK returns a ReadableStream when stream:true
          if (llmStream && typeof llmStream.getReader === "function") {
            const reader = llmStream.getReader();
            const decoder = new TextDecoder();
            let buffer = "";

            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              buffer += decoder.decode(value, { stream: true });

              // Process complete SSE lines (data: ... \n)
              const lines = buffer.split("\n");
              buffer = lines.pop() || "";

              for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || !trimmed.startsWith("data:")) continue;
                const payload = trimmed.slice(5).trim();
                if (payload === "[DONE]") continue;
                try {
                  const json = JSON.parse(payload);
                  const delta = json?.choices?.[0]?.delta?.content || "";
                  if (delta) {
                    fullReply += delta;
                    controller.enqueue(
                      encoder.encode(
                        `data: ${JSON.stringify({ type: "delta", content: delta })}\n\n`
                      )
                    );
                  }
                } catch {
                  // Non-JSON chunk; skip
                }
              }
            }
            // Flush any remaining buffer
            if (buffer.trim().startsWith("data:")) {
              const payload = buffer.trim().slice(5).trim();
              if (payload && payload !== "[DONE]") {
                try {
                  const json = JSON.parse(payload);
                  const delta = json?.choices?.[0]?.delta?.content || "";
                  if (delta) {
                    fullReply += delta;
                    controller.enqueue(
                      encoder.encode(
                        `data: ${JSON.stringify({ type: "delta", content: delta })}\n\n`
                      )
                    );
                  }
                } catch {
                  /* ignore */
                }
              }
            }
          } else {
            // Fallback: non-stream response (object)
            const reply =
              llmStream?.choices?.[0]?.message?.content?.trim() ||
              llmStream?.message?.content?.trim() ||
              "I'm not sure how to answer that right now. Please call us on +233 20 397 0216 or use the contact form.";
            fullReply = reply;
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ type: "delta", content: reply })}\n\n`)
            );
          }
        } catch (llmErr) {
          console.error("[chat/stream] LLM error:", llmErr);
          const fallback =
            "I'm having trouble connecting right now. Please call us on +233 20 397 0216 or use the contact form.";
          fullReply = fallback;
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: "delta", content: fallback })}\n\n`)
          );
        }

        // Persist the full assistant reply
        db.chatMessage
          .create({ data: { sessionId: sid, role: "assistant", content: fullReply } })
          .catch(() => null);

        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "done" })}\n\n`)
        );
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    console.error("[chat/stream POST] error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
