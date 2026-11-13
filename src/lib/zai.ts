// Minimal client for Z.ai's OpenAI-compatible chat endpoint.
// glm-4.5-flash is on the free tier; paid models return HTTP 429 on an
// unfunded account.

const BASE_URL = process.env.ZAI_BASE_URL || "https://api.z.ai/api/paas/v4";
const MODEL = process.env.ZAI_MODEL || "glm-4.5-flash";

export type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

/** Starts a streamed completion and returns the raw SSE response. */
export async function streamChat(messages: ChatMessage[]): Promise<Response> {
  const apiKey = process.env.ZAI_API_KEY;
  if (!apiKey) throw new Error("ZAI_API_KEY is not configured");

  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      stream: true,
      thinking: { type: "disabled" },
    }),
  });

  if (!res.ok || !res.body) {
    throw new Error(`Z.ai request failed: ${res.status} ${await res.text()}`);
  }
  return res;
}
