import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { notifyStaff } from "@/lib/notify";

const schema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(6).max(40),
  email: z.string().email().max(160).optional().nullable(),
  address: z.string().min(4).max(300),
  location: z.string().min(2).max(160),
  wasteType: z.string().min(2).max(60),
  volume: z.string().max(40).optional().nullable(),
  preferredDate: z.string().max(60).optional().nullable(),
  notes: z.string().max(2000).optional().nullable(),
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
    const pickup = await db.pickupRequest.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email ?? null,
        address: data.address,
        location: data.location,
        wasteType: data.wasteType,
        volume: data.volume ?? null,
        preferredDate: data.preferredDate ?? null,
        notes: data.notes ?? null,
      },
    });

    // Fire-and-forget notification to staff
    notifyStaff("pickup", {
      id: pickup.id,
      name: data.name,
      phone: data.phone,
      email: data.email ?? "",
      address: data.address,
      location: data.location,
      wasteType: data.wasteType,
      volume: data.volume ?? "",
      preferredDate: data.preferredDate ?? "",
      notes: data.notes ?? "",
    });

    return NextResponse.json(
      { success: true, id: pickup.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[pickup POST] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const items = await db.pickupRequest.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ success: true, items });
  } catch (err) {
    console.error("[pickup GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
