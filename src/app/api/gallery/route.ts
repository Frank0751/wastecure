import { NextResponse } from "next/server";
import { IMAGES } from "@/lib/site-data";

type GalleryItem = { src: string; caption: string; category: string };

function build(): GalleryItem[] {
  return [
    { src: IMAGES.collection[1], caption: "Plastic waste collection site", category: "Collection" },
    { src: IMAGES.community[0], caption: "Community cleanup drive", category: "Community" },
    { src: IMAGES.bottles[0], caption: "Sorted PET bottles ready for recycling", category: "Recycling" },
    { src: IMAGES.education[0], caption: "School education programme", category: "Education" },
    { src: IMAGES.worker[0], caption: "WasteCure field team at work", category: "Team" },
    { src: IMAGES.ghana[0], caption: "Kwabre East municipality, Kumasi", category: "Community" },
    { src: IMAGES.bottles[1], caption: "Plastic recovery at sorting site", category: "Recycling" },
    { src: IMAGES.community[1], caption: "Engaging local communities", category: "Community" },
    { src: IMAGES.collection[3], caption: "Aggregated plastic ready for off-takers", category: "Collection" },
    { src: IMAGES.worker[1], caption: "Cleaning service in progress", category: "Cleaning" },
    { src: IMAGES.education[2], caption: "Children learning about recycling", category: "Education" },
    { src: IMAGES.pollution[2], caption: "Why it matters: plastic pollution", category: "Impact" },
  ];
}

export async function GET() {
  try {
    const items = build();
    return NextResponse.json({ success: true, items });
  } catch (err) {
    console.error("[gallery GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
