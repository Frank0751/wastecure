"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Send,
  Truck,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PageHeader } from "@/components/site/page-header";
import { SITE, REAL_PHOTOS } from "@/lib/site-data";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  service: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more (min 10 characters)"),
});

type ContactValues = z.infer<typeof contactSchema>;

const pickupSchema = z.object({
  name: z.string().min(2, "Required"),
  phone: z.string().min(9, "Valid phone required"),
  address: z.string().min(4, "Address required"),
  location: z.string().min(2, "Location required"),
  wasteType: z.string().min(2, "Select waste type"),
  notes: z.string().optional(),
});

type PickupValues = z.infer<typeof pickupSchema>;

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phoneIntl}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.location,
  },
  {
    icon: Clock,
    label: "Hours",
    value: SITE.hours,
  },
];

const SERVICE_OPTIONS = [
  "Waste Collection",
  "Recyclables Collection & Sorting",
  "Cleaning Services",
  "Waste Management Consultancy",
  "Community Engagement / Education",
  "Other",
];

const WASTE_TYPES = ["Plastic", "Mixed", "Organic", "General"];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [pickupOpen, setPickupOpen] = useState(false);
  const [pickupSubmitting, setPickupSubmitting] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organisation: "",
      service: "",
      location: "",
      message: "",
    },
  });

  const pickupForm = useForm<PickupValues>({
    resolver: zodResolver(pickupSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      location: "",
      wasteType: "",
      notes: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Message sent!", {
        description:
          "Thank you for reaching out. Our team will respond within 1-2 business days.",
      });
      form.reset();
    } catch (err) {
      toast.error("Could not send message", {
        description:
          "Something went wrong. Please try again or call us directly on 0540652347.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const onPickupSubmit = async (values: PickupValues) => {
    setPickupSubmitting(true);
    try {
      const res = await fetch("/api/pickup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Pickup requested!", {
        description:
          "We've received your request and will call to confirm shortly.",
      });
      pickupForm.reset();
      setPickupOpen(false);
    } catch (err) {
      toast.error("Could not request pickup", {
        description: "Please try again or call us on 0540652347.",
      });
    } finally {
      setPickupSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Request a pickup, ask about services, or partner with us. We respond within 1-2 business days."
        image={REAL_PHOTOS.marketEngagement}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left: contact details + map */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-lg font-semibold text-foreground">
                  Get in touch
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach us through any of these channels - we&apos;re happy to
                  help with collection, recycling, cleaning or consultancy.
                </p>
                <ul className="mt-6 space-y-4">
                  {CONTACT_DETAILS.map((d) => {
                    const Icon = d.icon;
                    const content = (
                      <div className="flex items-start gap-3.5">
                        <Icon className="size-5 mt-0.5 shrink-0 text-primary" />
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            {d.label}
                          </div>
                          <div className="text-sm font-medium text-foreground">
                            {d.value}
                          </div>
                        </div>
                      </div>
                    );
                    return (
                      <li key={d.label}>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="block rounded-lg p-1 -m-1 hover:bg-muted/50 transition-colors"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="size-4" />
                      Instagram
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={SITE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="size-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Dialog open={pickupOpen} onOpenChange={setPickupOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Truck className="size-4" />
                        Quick Pickup Request
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[480px]">
                      <DialogHeader>
                        <DialogTitle>Quick Pickup Request</DialogTitle>
                        <DialogDescription>
                          Send us the basics and we&apos;ll call to confirm your
                          pickup. For detailed enquiries use the main form.
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={pickupForm.handleSubmit(onPickupSubmit)}
                        className="space-y-3"
                      >
                        <div className="grid gap-1.5">
                          <Label htmlFor="p-name">Name *</Label>
                          <Input
                            id="p-name"
                            {...pickupForm.register("name")}
                            placeholder="Your name"
                          />
                          {pickupForm.formState.errors.name && (
                            <p className="text-xs text-destructive">
                              {pickupForm.formState.errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="grid gap-1.5">
                          <Label htmlFor="p-phone">Phone *</Label>
                          <Input
                            id="p-phone"
                            {...pickupForm.register("phone")}
                            placeholder="0540XXXXXX"
                          />
                          {pickupForm.formState.errors.phone && (
                            <p className="text-xs text-destructive">
                              {pickupForm.formState.errors.phone.message}
                            </p>
                          )}
                        </div>
                        <div className="grid gap-1.5">
                          <Label htmlFor="p-addr">Pickup address *</Label>
                          <Input
                            id="p-addr"
                            {...pickupForm.register("address")}
                            placeholder="House / landmark, street"
                          />
                          {pickupForm.formState.errors.address && (
                            <p className="text-xs text-destructive">
                              {pickupForm.formState.errors.address.message}
                            </p>
                          )}
                        </div>
                        <div className="grid gap-1.5">
                          <Label htmlFor="p-loc">Area / Town *</Label>
                          <Input
                            id="p-loc"
                            {...pickupForm.register("location")}
                            placeholder="e.g. Mamponteng"
                          />
                          {pickupForm.formState.errors.location && (
                            <p className="text-xs text-destructive">
                              {pickupForm.formState.errors.location.message}
                            </p>
                          )}
                        </div>
                        <div className="grid gap-1.5">
                          <Label htmlFor="p-waste">Waste type *</Label>
                          <Select
                            onValueChange={(v) =>
                              pickupForm.setValue("wasteType", v)
                            }
                            value={pickupForm.watch("wasteType")}
                          >
                            <SelectTrigger id="p-waste" className="w-full">
                              <SelectValue placeholder="Select waste type" />
                            </SelectTrigger>
                            <SelectContent>
                              {WASTE_TYPES.map((w) => (
                                <SelectItem key={w} value={w}>
                                  {w}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {pickupForm.formState.errors.wasteType && (
                            <p className="text-xs text-destructive">
                              {pickupForm.formState.errors.wasteType.message}
                            </p>
                          )}
                        </div>
                        <div className="grid gap-1.5">
                          <Label htmlFor="p-notes">Notes (optional)</Label>
                          <Textarea
                            id="p-notes"
                            rows={3}
                            {...pickupForm.register("notes")}
                            placeholder="Volume, preferred date/time, anything else"
                          />
                        </div>
                        <DialogFooter className="mt-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setPickupOpen(false)}
                            disabled={pickupSubmitting}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" disabled={pickupSubmitting}>
                            {pickupSubmitting ? (
                              <>
                                <Loader2 className="size-4 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="size-4" />
                                Request pickup
                              </>
                            )}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title="WasteCure location - Aseda House, Adum, Kumasi"
                    src="https://www.google.com/maps?q=Aseda+House+Adum+Kumasi+Ashanti+Ghana&output=embed"
                    className="size-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: enquiry form */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-lg font-semibold text-foreground">
                  Send an enquiry
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in the form below and we&apos;ll get back to you.
                </p>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-6 space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1.5">
                      <Label htmlFor="c-name">
                        Full name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="c-name"
                        placeholder="Jane Doe"
                        {...form.register("name")}
                      />
                      {form.formState.errors.name && (
                        <p className="text-xs text-destructive">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="c-email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="c-email"
                        type="email"
                        placeholder="jane@example.com"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <p className="text-xs text-destructive">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1.5">
                      <Label htmlFor="c-phone">Phone</Label>
                      <Input
                        id="c-phone"
                        placeholder="0540XXXXXX"
                        {...form.register("phone")}
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="c-org">Organisation (optional)</Label>
                      <Input
                        id="c-org"
                        placeholder="School / business / assembly"
                        {...form.register("organisation")}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1.5">
                      <Label htmlFor="c-service">Service of interest</Label>
                      <Select
                        onValueChange={(v) => form.setValue("service", v)}
                        value={form.watch("service")}
                      >
                        <SelectTrigger id="c-service" className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="c-location">Location / Town</Label>
                      <Input
                        id="c-location"
                        placeholder="e.g. Mamponteng, Kwabre East"
                        {...form.register("location")}
                      />
                    </div>
                  </div>

                  <div className="grid gap-1.5">
                    <Label htmlFor="c-message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="c-message"
                      rows={5}
                      placeholder="Tell us about your needs - what you'd like to recycle, collection frequency, questions about consultancy, etc."
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <p className="text-xs text-destructive">
                        {form.formState.errors.message.message}
                      </p>
                    )}
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
                        <Send className="size-4" />
                        Send enquiry
                      </>
                    )}
                  </Button>

                  <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-leaf-500" />
                    We respond within 1-2 business days. For urgent pickup, call{" "}
                    {SITE.phone}.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
