import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { notifyStaff } from "@/lib/notify";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z
    .union([z.string().email().max(160), z.literal("")])
    .optional()
    .nullable()
    .transform((v) => (v && v.length > 0 ? v : null)),
  phone: z.string().max(40).optional().nullable(),
  organisation: z.string().max(160).optional().nullable(),
  service: z.string().max(120).optional().nullable(),
  location: z.string().max(200).optional().nullable(),
  message: z.string().min(5).max(4000),
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
          error: "Validation failed",
          details: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const submission = await db.contactSubmission.create({
      data: {
        name: data.name,
        // Fall back to empty string when no email is provided so the
        // submission succeeds regardless of the client schema version.
        email: (data.email && data.email.length > 0 ? data.email : "") as string,
        phone: data.phone ?? null,
        organisation: data.organisation ?? null,
        service: data.service ?? null,
        location: data.location ?? null,
        message: data.message,
      },
    });

    // Fire-and-forget notification to staff
    notifyStaff("contact", {
      id: submission.id,
      name: data.name,
      email: data.email ?? "",
      phone: data.phone ?? "",
      organisation: data.organisation ?? "",
      service: data.service ?? "",
      location: data.location ?? "",
      message: data.message,
    });

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[contact POST] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const items = await db.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ success: true, items });
  } catch (err) {
    console.error("[contact GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
