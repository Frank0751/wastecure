import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Use raw SQL for reliability (dev server may cache an old Prisma client)
    const items = (await db.$queryRaw`SELECT * FROM "Notification" ORDER BY "createdAt" DESC LIMIT 50`) as Array<{
      id: string;
      type: string;
      refId: string;
      to: string;
      subject: string;
      body: string;
      status: string;
      read: boolean;
      createdAt: string;
    }>;
    return NextResponse.json({ success: true, items });
  } catch (err) {
    console.error("[notifications GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

// Mark a notification as read
export async function PATCH(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body?.id) {
      return NextResponse.json(
        { success: false, error: "Missing id" },
        { status: 400 }
      );
    }
    await db.$executeRaw`UPDATE "Notification" SET "read" = true WHERE id = ${body.id}`;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[notifications PATCH] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
