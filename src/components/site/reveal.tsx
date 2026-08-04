"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  id?: string;
};

/**
 * Lightweight client-side reveal wrapper for use inside server components.
 * Animates children in on scroll using framer-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  className,
  id,
}: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
