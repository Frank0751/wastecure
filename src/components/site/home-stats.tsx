"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/site-data";
import { CountUp } from "@/components/site/count-up";

/**
 * Stats strip with count-up animation for the home page.
 */
export function HomeStats() {
  return (
    <section className="relative bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 py-16 md:py-20 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-20 -right-20 size-72 rounded-full bg-leaf-500/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-leaf-400">
                <CountUp value={stat.value} suffix={"suffix" in stat ? stat.suffix : ""} />
              </div>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-white/75">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
