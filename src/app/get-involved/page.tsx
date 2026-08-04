"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Loader2, ArrowRight, Users, GraduationCap, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/site/page-header";
import { CTASection } from "@/components/site/cta-section";
import { IMAGES } from "@/lib/site-data";

const WAYS_TO_HELP = [
  {
    icon: Users,
    title: "Join a clean-up",
    description:
      "Lend a hand at our community clean-up drives across Kwabre East. Groups and individuals welcome.",
  },
  {
    icon: GraduationCap,
    title: "Host a school talk",
    description:
      "Invite WasteCure to your school or church for an interactive session on plastic waste and recycling.",
  },
  {
    icon: Store,
    title: "Become a drop-off point",
    description:
      "Run a shop, school or church? Host a plastic collection point and help your community recycle.",
  },
];

const ROLES = [
  "Volunteer at clean-ups",
  "Host a collection point",
  "Invite us to my school / church",
  "Partner organisation",
  "Other",
];

export default function GetInvolvedPage() {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !role) {
      toast.error("Please fill in your name, phone and how you'd like to help.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          location: location || undefined,
          role,
          message: message || undefined,
        }),
      });
      if (!res.ok) throw new Error("failed");
      toast.success("Thank you for stepping up!", {
        description: "We'll reach out within 1-2 business days.",
      });
      setName("");
      setPhone("");
      setEmail("");
      setRole("");
      setLocation("");
      setMessage("");
    } catch {
      toast.error("Could not submit", {
        description: "Please try again or call us on 0540652347.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Get Involved"
        subtitle="Lasting change does not happen alone. Whether you have an hour, a shop, or a whole community behind you - there is a role for you in the WasteCure movement."
        image={IMAGES.community[1]}
      />

      {/* Three ways to help - text cards, icons inline (no badge containers) */}
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Three ways you can help
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Every action counts. Pick what works for you - we will support you
              the rest of the way.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {WAYS_TO_HELP.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {w.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer signup form */}
      <section className="relative bg-gradient-to-br from-forest-50/50 via-background to-leaf-50/30 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 md:p-8 shadow-lg"
          >
            <div
              aria-hidden
              className="absolute -top-12 -right-12 size-40 rounded-full bg-leaf-500/15 blur-2xl"
            />
            <div className="relative">
              <h2 className="text-2xl font-bold text-foreground">Sign up to help</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us how you&apos;d like to get involved. We&apos;ll be in touch.
              </p>

              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="g-name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="g-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="g-phone">
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="g-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0540XXXXXX"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="g-email">Email (optional)</Label>
                    <Input
                      id="g-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="g-loc">Area / Town</Label>
                    <Input
                      id="g-loc"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Mamponteng"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label>
                    How would you like to help?{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="g-msg">Message (optional)</Label>
                  <textarea
                    id="g-msg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Tell us about your group, availability, or questions"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      I&apos;m in
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We respect your privacy. Your details are only used to contact
                  you about WasteCure activities.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Questions before you sign up?"
        subtitle="Reach out and we'll be happy to talk through how you can be part of WasteCure."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Read the blog"
        secondaryHref="/blog"
      />
    </>
  );
}
