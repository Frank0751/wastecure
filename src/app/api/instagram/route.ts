import { NextResponse } from "next/server";

// Curated Instagram-style posts for @wastecureghana.
// In production, this would fetch live posts from the Instagram Graph API
// (requires a business account + access token). For now we serve a cached
// curated set drawn from the same image library used across the site.
const POSTS = [
  {
    id: "ig-1",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ed27ac528ab6.jpg",
    caption: "Plastic collection in progress. Every bottle counts.",
    likes: 124,
    comments: 8,
    date: "2024-06-15",
  },
  {
    id: "ig-2",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/da365a4d04ab.jpg",
    caption: "Community cleanup drive in Kwabre East. Thank you to all our volunteers!",
    likes: 218,
    comments: 24,
    date: "2024-06-10",
  },
  {
    id: "ig-3",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad81ff272121.jpg",
    caption: "School visit day! Teaching the next generation about recycling.",
    likes: 187,
    comments: 15,
    date: "2024-06-05",
  },
  {
    id: "ig-4",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/116ba7601984.jpg",
    caption: "Sorted PET bottles, ready for the recycler. From waste to value.",
    likes: 96,
    comments: 6,
    date: "2024-05-28",
  },
  {
    id: "ig-5",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/61ded60d9b3b.jpg",
    caption: "Cleaning day at a partner school. Tidy compounds, healthier classrooms!",
    likes: 142,
    comments: 11,
    date: "2024-05-20",
  },
  {
    id: "ig-6",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5db89e00db29.jpg",
    caption: "Plastic pollution is real - but together we can cure it. Join us.",
    likes: 305,
    comments: 32,
    date: "2024-05-12",
  },
];

// Cache for 10 minutes to avoid refetching on every request
let cache: { data: typeof POSTS; at: number } | null = null;
const CACHE_TTL = 10 * 60 * 1000;

export async function GET() {
  try {
    if (!cache || Date.now() - cache.at > CACHE_TTL) {
      cache = { data: POSTS, at: Date.now() };
    }
    return NextResponse.json({
      success: true,
      handle: "wastecureghana",
      url: "https://www.instagram.com/wastecureghana/",
      count: cache.data.length,
      items: cache.data,
    });
  } catch (err) {
    console.error("[instagram GET] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
