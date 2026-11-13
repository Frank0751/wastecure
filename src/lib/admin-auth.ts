import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

// Staff sessions are a signed, httpOnly cookie. The signing key is derived
// from ADMIN_PASSWORD, so changing the password invalidates every session.
// With no ADMIN_PASSWORD configured the dashboard is closed, not open.

export const ADMIN_COOKIE = "wc_admin";
const SESSION_HOURS = 8;

function key(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  return password && password.length >= 8 ? password : null;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function adminConfigured(): boolean {
  return key() !== null;
}

export function checkPassword(candidate: string): boolean {
  const secret = key();
  if (!secret) return false;
  // Compare digests so length differences do not leak through timing.
  return safeEqual(sign(candidate, "wc-login"), sign(secret, "wc-login"));
}

export function createSessionToken(): { token: string; maxAge: number } {
  const secret = key();
  if (!secret) throw new Error("ADMIN_PASSWORD is not configured");
  const maxAge = SESSION_HOURS * 60 * 60;
  const expires = String(Date.now() + maxAge * 1000);
  return { token: `${expires}.${sign(expires, secret)}`, maxAge };
}

function validToken(token: string | undefined): boolean {
  const secret = key();
  if (!secret || !token) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;
  if (!safeEqual(signature, sign(expires, secret))) return false;
  return Number(expires) > Date.now();
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return validToken(store.get(ADMIN_COOKIE)?.value);
}

export function unauthorized(): Response {
  return Response.json(
    { success: false, error: "Staff sign-in required" },
    { status: 401 }
  );
}
