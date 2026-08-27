import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WasteCure | Waste Management Specialists in Ghana",
    short_name: "WasteCure",
    description:
      "WasteCure is a Ghanaian waste management company based in Kumasi, serving clients across Ghana. Waste collection, recycling, cleaning services, and waste management consultancy.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1B5E3F",
    icons: [
      {
        src: "/wastecure-logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/wastecure-logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
      {
        src: "/wastecure-logo.jpg",
        sizes: "any",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
    categories: ["environment", "business", "productivity"],
    lang: "en-GH",
  };
}
