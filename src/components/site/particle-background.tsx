"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Floating particle background for the hero. Renders animated dots
 * that drift slowly upward, giving a subtle "leaves/particles in air"
 * effect. Respects prefers-reduced-motion via Framer Motion.
 */
export function ParticleBackground({ count = 18 }: { count?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // % across
      y: Math.random() * 100, // % down
      size: 2 + Math.random() * 6, // px
      duration: 8 + Math.random() * 12, // s
      delay: Math.random() * 6, // s
      drift: (Math.random() - 0.5) * 40, // px horizontal drift
      opacity: 0.15 + Math.random() * 0.25,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-leaf-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, p.drift, 0],
            opacity: [p.opacity, p.opacity * 0.4, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
