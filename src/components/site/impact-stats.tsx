"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";
import { STATS } from "@/lib/site-data";
import { CountUp } from "@/components/site/count-up";

/**
 * Dark green impact section with animated count-up stats.
 * Used on the Sustainability page.
 */
export function ImpactStats() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-primary py-20 md:py-28 text-primary-foreground scroll-mt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-20 -right-20 size-72 rounded-full bg-leaf-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 size-72 rounded-full bg-amber-earth/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Numbers that mean a cleaner Ghana
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary-foreground/80">
            Founded in 2021, WasteCure has grown into a four-line waste
            management service - diverting plastic from landfill, one collection
            at a time.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const suffix = "suffix" in stat ? stat.suffix : "";
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold tracking-tight text-leaf-400">
                  <CountUp value={stat.value} suffix={suffix} />
                </div>
                <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-primary-foreground/75">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="grid items-center gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 md:grid-cols-[auto_1fr]">
            <div className="flex size-14 items-center justify-center rounded-xl bg-leaf-500 text-white shadow">
              <Map className="size-7" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Coverage today: Kwabre East Municipality
              </h3>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Door-to-door collection, drop-off points and scheduled pickups
                across the municipality - with a long-term vision to expand
                across the Ashanti Region.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
