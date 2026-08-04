import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WasteCure | Sustainable Waste Collection & Recycling in Ghana",
    short_name: "WasteCure",
    description:
      "WasteCure is a Ghanaian waste management and recycling company in Kwabre East Municipality, Kumasi. Plastic waste collection, recycling, community education, and waste management consultancy.",
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
