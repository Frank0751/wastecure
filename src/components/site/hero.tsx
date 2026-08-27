"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REAL_PHOTOS, SITE } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";
import { ParticleBackground } from "@/components/site/particle-background";
import { InstagramIcon, LinkedinIcon } from "@/components/site/brand-icons";

const MARQUEE_TAGS = [
  "Households",
  "Businesses",
  "Institutions",
  "Local Authorities",
  "Schools",
  "Churches",
  "Markets",
];

export function Hero() {
  const { t } = useLang();
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen flex items-center"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={REAL_PHOTOS.duskSweep}
          alt="WasteCure field team cleaning a road in the Ashanti Region"
          className="size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/95 via-forest-800/85 to-forest-900/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(76,175,80,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Decorative floating shapes */}
      <motion.div
        aria-hidden
        className="absolute right-[6%] top-[18%] size-24 rounded-full bg-leaf-500/20 blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[8%] bottom-[18%] size-32 rounded-full bg-amber-earth/15 blur-2xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated particle background */}
      <ParticleBackground count={18} />

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance"
          >
            {t("hero.title1")}{" "}
            <span className="bg-gradient-to-r from-leaf-400 via-leaf-500 to-amber-earth bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-forest-100/90 leading-relaxed"
          >
            WasteCure is reducing waste pollution across{" "}
            <span className="text-white font-semibold">
              Ghana
            </span>{" "}
            by providing advanced waste solutions for sustainable waste
            management - building a cleaner, greener environment one
            community at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="/services">
                {t("cta.ourServices")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
            >
              <Link href="/contact">{t("cta.contactUs")}</Link>
            </Button>
          </motion.div>

          {/* Floating stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-3 justify-center"
          >
            {[
              { label: t("hero.founded"), value: "2021" },
              { label: t("hero.serviceArea"), value: "Ghana" },
              { label: t("hero.coreServices"), value: "4 Lines" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md px-4 py-3"
              >
                <span className="text-xl md:text-2xl font-bold text-leaf-400">
                  {chip.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-forest-100/80">
                  {chip.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WasteCure on Instagram"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-forest-100/80 backdrop-blur-sm transition hover:border-leaf-400/50 hover:bg-white/10 hover:text-white"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WasteCure on LinkedIn"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-forest-100/80 backdrop-blur-sm transition hover:border-leaf-400/50 hover:bg-white/10 hover:text-white"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
          </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-forest-900/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-hidden px-4 py-3">
          <span className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-leaf-400">
            <MapPin className="size-3.5" />
            {t("hero.serving")}
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-6">
              {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
                <span
                  key={`${tag}-${i}`}
                  className="flex items-center gap-2 text-sm text-forest-100/85"
                >
                  <span className="size-1.5 rounded-full bg-leaf-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute right-4 md:right-8 bottom-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-forest-100/70 rotate-90 origin-center mt-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full border border-white/30 p-1"
        >
          <ChevronDown className="size-4 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
