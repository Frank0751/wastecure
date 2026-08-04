"use client";

import { motion } from "framer-motion";
import { FileText, X, Scale } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SECTIONS = [
  {
    title: "Acceptance of terms",
    body: "By accessing and using the WasteCure website (wastecure.com), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.",
  },
  {
    title: "Our services",
    body: "WasteCure provides plastic waste collection, recyclables sorting, composting, and waste management consultancy services in the Kwabre East Municipality, Kumasi, Ghana. Service availability, scheduling and pricing may vary and are confirmed at the point of booking.",
  },
  {
    title: "User responsibilities",
    body: "You agree to provide accurate information when submitting forms (contact, pickup requests, volunteer signups). You are responsible for ensuring waste is accessible for collection at the agreed time, and for sorting it as reasonably requested by our team.",
  },
  {
    title: "Intellectual property",
    body: "All content on this website - including text, graphics, logos, images, and the WasteCure brand - is the property of WasteCure Limited Company and protected under applicable copyright and trademark laws. You may not reproduce, distribute, or use our content without prior written permission.",
  },
  {
    title: "Service limitations",
    body: "WasteCure strives to provide reliable services but cannot guarantee uninterrupted collection schedules due to factors beyond our control (weather, access, vehicle availability). We will communicate any delays or changes as promptly as possible.",
  },
  {
    title: "Liability",
    body: "WasteCure is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our liability for direct damages is limited to the value of the service provided.",
  },
  {
    title: "Changes to terms",
    body: "We may update these Terms of Service from time to time. Continued use of the website after changes constitutes acceptance of the revised terms. The 'Last updated' date below reflects the most recent revision.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of the Republic of Ghana. Any disputes arising from these terms or the use of our services shall be resolved in the appropriate courts of Ghana.",
  },
];

export function TermsDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-hidden p-0 sm:max-w-2xl">
        <div className="flex h-[80vh] flex-col">
          {/* Header */}
          <div className="relative flex items-center justify-between gap-3 border-b border-border bg-gradient-to-r from-forest-700 to-forest-900 px-6 py-5 text-white">
            <div className="flex items-center gap-3">
              <Scale className="size-5 text-leaf-400" />
              <div>
                <DialogTitle className="text-lg font-bold leading-tight">
                  Terms of Service
                </DialogTitle>
                <DialogDescription className="text-xs text-forest-100/70">
                  The terms governing your use of WasteCure&apos;s website
                </DialogDescription>
              </div>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              aria-label="Close terms"
              className="flex size-8 items-center justify-center rounded-full text-forest-100/80 hover:bg-white/10 transition"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto bg-background p-6">
            <div className="mx-auto max-w-prose space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-muted-foreground leading-relaxed"
              >
                Welcome to WasteCure Limited Company. These Terms of Service
                outline the rules and regulations for using our website and
                services. Please read them carefully.
              </motion.p>

              {SECTIONS.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold">
                      {i + 1}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[38px]">
                    {section.body}
                  </p>
                </motion.div>
              ))}

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <FileText className="size-4 text-primary" />
                  Questions about these terms?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Contact us at{" "}
                  <a
                    href="mailto:edmond.amankwaah@gmail.com"
                    className="font-medium text-primary hover:underline"
                  >
                    edmond.amankwaah@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+233540652347"
                    className="font-medium text-primary hover:underline"
                  >
                    0540652347
                  </a>
                  .
                </p>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Last updated: {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
