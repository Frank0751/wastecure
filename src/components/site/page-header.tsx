"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Reusable page header used at the top of every internal page.
 * Full-width background image with overlay + heading + optional subtitle.
 * No kicker label, no icon badge.
 */
export function PageHeader({
  title,
  subtitle,
  image,
  align = "center",
  className,
}: PageHeaderProps) {
  const hasImage = Boolean(image);
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden flex flex-col justify-center min-h-screen",
        hasImage ? "text-white" : "bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 text-white",
        "pt-24 md:pt-28 pb-16 md:pb-20",
        className
      )}
    >
      {hasImage && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 -z-10 size-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-900/92 via-forest-800/85 to-forest-900/92" />
          <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />
        </>
      )}
      {!hasImage && (
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" aria-hidden />
      )}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={cn(
            "max-w-5xl",
            align === "center" ? "mx-auto text-center" : "text-left"
          )}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-none">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed text-balance">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
