import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { notifyStaff } from "@/lib/notify";

const schema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(9).max(40),
  email: z
    .union([z.string().email().max(160), z.literal("")])
    .optional()
    .nullable()
    .transform((v) => (v && v.length > 0 ? v : null)),
  location: z.string().max(200).optional().nullable(),
  role: z.string().min(2).max(160),
  message: z.string().max(4000).optional().nullable(),
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
        { success: false, error: "Validation failed", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Use the Prisma client if the model is available; otherwise fall back
    // to a raw SQL insert (the running dev-server client may be cached and
    // not yet know about the new Volunteer model).
    let id: string;
    if (db.volunteer) {
      const volunteer = await db.volunteer.create({
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email ?? null,
          location: data.location ?? null,
          role: data.role,
          message: data.message ?? null,
        },
      });
      id = volunteer.id;
    } else {
      // Raw fallback
      const row = await db.$executeRaw`INSERT INTO Volunteer (id, name, phone, email, location, role, message, status, createdAt, updatedAt) VALUES (${crypto.randomUUID()}, ${data.name}, ${data.phone}, ${data.email ?? null}, ${data.location ?? null}, ${data.role}, ${data.message ?? null}, 'signed-up', ${new Date().toISOString()}, ${new Date().toISOString()})`;
      id = `raw-${row}`;
    }

    // Fire-and-forget notification to staff
    notifyStaff("volunteer", {
      id,
      name: data.name,
      phone: data.phone,
      email: data.email ?? "",
      location: data.location ?? "",
      role: data.role,
      message: data.message ?? "",
    });

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (err) {
    console.error("[volunteer POST] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (db.volunteer) {
      const items = await db.volunteer.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
      });
      return NextResponse.json({ success: true, items });
    }
    // Raw fallback
    const items = await db.$queryRaw`SELECT * FROM Volunteer ORDER BY datetime(createdAt) DESC LIMIT 50`;
    return NextResponse.json({ success: true, items });
  } catch (err) {
    console.error("[volunteer GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
