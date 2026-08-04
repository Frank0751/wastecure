import ZAI from "z-ai-web-dev-sdk";

/**
 * Returns a configured ZAI client.
 *
 * In development, the SDK reads from a `.z-ai-config` file in the project
 * root or home directory.
 *
 * In production (e.g. Vercel), the config file is not available, so we
 * construct the client from environment variables instead:
 *   - ZAI_API_KEY  (required)
 *   - ZAI_BASE_URL (optional, defaults to the standard endpoint)
 *
 * Falls back to `ZAI.create()` (which reads the config file) if env vars
 * are not set.
 */
let _instance: ZAI | null = null;

export async function getZai(): Promise<ZAI> {
  if (_instance) return _instance;

  const apiKey = process.env.ZAI_API_KEY;
  const baseUrl = process.env.ZAI_BASE_URL || "https://api.chatglm.cn";

  if (apiKey) {
    _instance = new ZAI({
      apiKey,
      baseUrl,
      chatId: "",
      userId: "",
      token: "",
    });
  } else {
    // Fallback: read from .z-ai-config file (local dev)
    _instance = await ZAI.create();
  }

  return _instance;
}
