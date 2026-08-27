import { NextResponse } from "next/server";
import { GALLERY_ITEMS } from "@/lib/site-data";

export async function GET() {
  try {
    return NextResponse.json({ success: true, items: GALLERY_ITEMS });
  } catch (err) {
    console.error("[gallery GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
