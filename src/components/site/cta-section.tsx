"use client";

import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Reusable call-to-action band. Forest gradient background, two CTAs.
 * No kicker label, no icon badge.
 */
export function CTASection({
  title,
  subtitle,
  primaryLabel = "Contact us",
  primaryHref = "/contact",
  secondaryLabel = "Get involved",
  secondaryHref = "/get-involved",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 py-20 md:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-20 right-1/4 size-72 rounded-full bg-leaf-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 left-1/4 size-72 rounded-full bg-amber-earth/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed text-balance max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={secondaryHref}>
                <Leaf className="size-4" />
                {secondaryLabel}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
