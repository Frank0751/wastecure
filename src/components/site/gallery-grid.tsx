"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Photo } from "@/components/site/photo";
import { GALLERY_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", ...Array.from(new Set(GALLERY_ITEMS.map((i) => i.category)))];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shown =
    filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter);
  const current = openIndex === null ? null : shown[openIndex];

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + shown.length) % shown.length)),
    [shown.length]
  );

  // Arrow keys move between photos while the viewer is open.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, step]);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos by category">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shown.map((item, i) => (
          <li key={item.photo} className="mb-4 break-inside-avoid">
            <button
              onClick={() => setOpenIndex(i)}
              className="group block w-full overflow-hidden rounded-xl bg-muted text-left"
              aria-label={`View photo: ${item.caption}`}
            >
              <Photo
                id={item.photo}
                alt={item.caption}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
            <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
          </li>
        ))}
      </ul>

      <Dialog open={current !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-[min(96vw,72rem)] gap-0 border-0 bg-black p-0 sm:max-w-[min(96vw,72rem)]"
        >
          {current && (
            <figure className="relative">
              <Photo
                key={current.photo}
                id={current.photo}
                alt={current.caption}
                sizes="96vw"
                priority
                className="mx-auto max-h-[82svh] w-auto object-contain"
              />
              <figcaption className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-white/80">
                <DialogTitle className="text-sm font-normal text-white/80">
                  {current.caption}
                </DialogTitle>
                <span className="shrink-0 tabular-nums">
                  {openIndex! + 1} / {shown.length}
                </span>
              </figcaption>
              <button
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <X className="size-5" />
              </button>
              <button
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <ChevronRight className="size-5" />
              </button>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
