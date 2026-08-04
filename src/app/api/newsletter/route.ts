import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  email: z.string().email().max(160),
  name: z.string().max(120).optional().nullable(),
  source: z.string().max(60).optional().nullable(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email",
          details: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const { email, name, source } = parsed.data;
    const subscriber = await db.newsletterSubscriber.upsert({
      where: { email },
      create: {
        email,
        name: name ?? null,
        source: source ?? "website",
        active: true,
      },
      update: {
        active: true,
        ...(name ? { name } : {}),
      },
    });

    return NextResponse.json(
      {
        success: true,
        id: subscriber.id,
        message: "Subscribed successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[newsletter POST] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.newsletterSubscriber.count({
      where: { active: true },
    });
    return NextResponse.json({ success: true, count });
  } catch (err) {
    console.error("[newsletter GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
