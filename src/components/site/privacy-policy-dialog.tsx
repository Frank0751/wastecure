"use client";

import { motion } from "framer-motion";
import { Shield, X, Cookie, Database, Mail, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SECTIONS = [
  {
    icon: Database,
    title: "What we collect",
    body: "When you submit a form (contact, pickup request, volunteer signup, or newsletter), we collect the information you provide: your name, phone number, email address, location, and your message. We also log basic chat messages sent to our AI assistant to improve our service.",
  },
  {
    icon: Eye,
    title: "How we use your data",
    body: "We use your information solely to respond to your enquiries, schedule pickups, coordinate volunteer activities, and send you updates if you subscribe to our newsletter. We do not sell, rent, or trade your personal data to third parties.",
  },
  {
    icon: Database,
    title: "Data storage",
    body: "Your data is stored securely in our database. Access is restricted to authorised WasteCure staff through a password-protected dashboard. We retain submission records for as long as needed to provide our services, unless you request deletion.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    body: "This website uses essential cookies and local storage to remember your language and theme preferences, and to save your cookie consent choice. We do not use advertising or tracking cookies. Analytics, if added in future, will be privacy-friendly and opt-in.",
  },
  {
    icon: Mail,
    title: "Your rights",
    body: "You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at wastecureltd@gmail.com or call +233 20 397 0216. We will respond within 30 days.",
  },
];

export function PrivacyPolicyDialog({
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
              <Shield className="size-5 text-leaf-400" />
              <div>
                <DialogTitle className="text-lg font-bold leading-tight">
                  Privacy Policy
                </DialogTitle>
                <DialogDescription className="text-xs text-forest-100/70">
                  How WasteCure collects, uses and protects your data
                </DialogDescription>
              </div>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              aria-label="Close privacy policy"
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
                WasteCure Limited Company is committed to protecting your
                privacy. This policy explains what data we collect, why we
                collect it, and your rights regarding your personal information.
                It applies to all visitors and users of wastecure.org.
              </motion.p>

              {SECTIONS.map((section, i) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-[42px]">
                      {section.body}
                    </p>
                  </motion.div>
                );
              })}

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-medium text-foreground">
                  Contact us about privacy
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Questions about your data? Email{" "}
                  <a
                    href="mailto:wastecureltd@gmail.com"
                    className="font-medium text-primary hover:underline"
                  >
                    wastecureltd@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+233203970216"
                    className="font-medium text-primary hover:underline"
                  >
                    +233 20 397 0216
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
