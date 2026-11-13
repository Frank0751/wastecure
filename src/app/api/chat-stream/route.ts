import { z } from "zod";
import { db } from "@/lib/db";
import { SITE } from "@/lib/site-data";
import { streamChat, type ChatMessage } from "@/lib/zai";

const SYSTEM_PROMPT = `You are the WasteCure website assistant. WasteCure is a Ghanaian waste management company based in Kumasi, Ashanti Region, founded in 2021.

About WasteCure:
- Mission: To provide advanced waste solutions with the required expertise, technical and managerial competencies, and resources to support our clients achieve their waste management goals.
- Services: (1) Waste collection, door-to-door and drop-off; (2) Recyclables collection and sorting (PET, HDPE, LDPE); (3) Cleaning services for schools, corporate offices, and residential and real estate facilities; (4) Waste management consultancy for institutions and communities.
- Also runs community clean-ups and education.
- Contact: phone ${SITE.phone} or ${SITE.phone2}, email ${SITE.email}, Instagram @wastecureghana.
- Office: ${SITE.location}. Hours: ${SITE.hours}.
- Service area: Ghana. Currently active in the Afigya Kwabre South district and expanding.

Your role:
- Answer questions about services, the service area, how to request a pickup, and how to partner with WasteCure.
- Be friendly, concise and practical. Use simple English.
- To request a pickup or book a service, point people to the contact form or the phone numbers.
- You do not know prices or availability. Say so and direct the person to the team.
- Keep replies under 120 words unless asked for detail.
- Never invent facts about WasteCure that are not in this prompt.`;

const FALLBACK = `I can't answer right now. Please call us on ${SITE.phone} or use the contact form.`;

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
  return `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function saveMessage(sessionId: string, role: string, content: string) {
  // Transcripts are a convenience for staff; never fail a chat over them.
  db.chatMessage.create({ data: { sessionId, role, content } }).catch(() => null);
}

export async function POST(req: Request) {
  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return Response.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }

  const { message, history, sessionId } = parsed.data;
  const sid = sessionId || newSessionId();
  const messages: ChatMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...(history ?? []),
    { role: "user", content: message },
  ];
  saveMessage(sid, "user", message);

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: object) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
      let reply = "";

      send({ type: "session", sessionId: sid });
      try {
        const upstream = await streamChat(messages);
        const reader = upstream.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const payload = line.trim().replace(/^data:\s*/, "");
            if (!payload || payload === "[DONE]" || payload === line.trim()) continue;
            try {
              const delta = JSON.parse(payload)?.choices?.[0]?.delta?.content;
              if (delta) {
                reply += delta;
                send({ type: "delta", content: delta });
              }
            } catch {
              // Partial or non-JSON line; the next chunk completes it.
            }
          }
        }
      } catch (err) {
        console.error("[chat-stream] upstream error:", err);
      }

      if (!reply.trim()) {
        reply = FALLBACK;
        send({ type: "delta", content: reply });
      }
      saveMessage(sid, "assistant", reply);
      send({ type: "done" });
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
    },
  });
}
