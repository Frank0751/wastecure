import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  adminConfigured,
  checkPassword,
  createSessionToken,
  isAdmin,
} from "@/lib/admin-auth";

// GET: is this browser signed in?  POST: sign in.  DELETE: sign out.

export async function GET() {
  return Response.json({
    authed: await isAdmin(),
    configured: adminConfigured(),
  });
}

export async function POST(req: Request) {
  if (!adminConfigured()) {
    return Response.json(
      { success: false, error: "Staff sign-in is not set up yet." },
      { status: 503 }
    );
  }

  const body = await req.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";

  if (!checkPassword(password)) {
    // Slow down guessing a little; this is not a substitute for a strong password.
    await new Promise((r) => setTimeout(r, 800));
    return Response.json(
      { success: false, error: "Incorrect password." },
      { status: 401 }
    );
  }

  const { token, maxAge } = createSessionToken();
  const store = await cookies();
  store.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge,
  });
  return Response.json({ success: true });
}

export async function DELETE() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  return Response.json({ success: true });
}
