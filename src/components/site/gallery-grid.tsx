"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(GALLERY_ITEMS.map((i) => i.category))),
];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === filter);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
          <Camera className="size-3.5" />
          Filter
        </span>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
              filter === c
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item, i) => (
          <motion.figure
            key={item.src + item.caption}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full object-cover"
              loading="lazy"
            />
            <figcaption className="flex items-center justify-between gap-2 p-3">
              <span className="text-sm text-foreground/80">{item.caption}</span>
              <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {item.category}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center text-muted-foreground">
          No photos in this category yet.
        </div>
      )}
    </>
  );
}
