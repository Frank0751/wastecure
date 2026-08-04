"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A slim progress bar fixed to the very top of the viewport that fills
 * as the user scrolls down the page.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-leaf-500 via-leaf-400 to-amber-earth"
    />
  );
}
