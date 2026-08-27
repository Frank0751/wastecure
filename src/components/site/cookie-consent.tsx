"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "wastecure-cookie-consent";

/**
 * GDPR-style cookie consent banner. Shows once on first visit (and
 * stays dismissed once the user accepts). Stored in localStorage.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let shouldShow = true;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) shouldShow = false;
    } catch {
      // localStorage may be unavailable; show the banner
    }
    if (!shouldShow) return;
    // Small delay so it doesn't clash with the hero entrance
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ accepted: true, at: new Date().toISOString() })
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  const dismiss = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ accepted: true, at: new Date().toISOString() })
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed bottom-5 left-5 z-50 w-[calc(100%-2.5rem)] max-w-sm"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-2xl ring-1 ring-black/5">
            {/* Accent strip */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-leaf-500 via-leaf-400 to-amber-earth"
            />
            <button
              onClick={dismiss}
              aria-label="Dismiss cookie notice"
              className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition"
            >
              <X className="size-3.5" />
            </button>

            <div className="flex items-start gap-3">
              <Cookie className="size-5 shrink-0 mt-0.5 text-primary" />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-foreground">
                  We value your privacy
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  WasteCure uses essential cookies to run this website and
                  improve your experience. We do not sell your data. See our{" "}
                  <a
                    href="#contact"
                    className="font-medium text-primary underline-offset-2 hover:underline"
                  >
                    contact
                  </a>{" "}
                  for any data questions.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Button size="sm" className="flex-1" onClick={accept}>
                <Check className="size-3.5" />
                Accept
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={dismiss}
              >
                Essential only
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
