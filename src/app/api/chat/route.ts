import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdmin, unauthorized } from "@/lib/admin-auth";

// Chat transcripts for the staff dashboard. The assistant itself is served
// by /api/chat-stream.
export async function GET() {
  if (!(await isAdmin())) return unauthorized();
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
