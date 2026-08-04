"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Truck,
  MapPin,
  Recycle,
  User,
  Check,
  ChevronRight,
  ChevronLeft,
  Loader2,
  CheckCircle2,
  Calendar,
  Phone,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Step = 0 | 1 | 2 | 3;

const WASTE_OPTIONS = [
  { value: "Plastic (PET)", icon: Recycle, desc: "Bottles, containers, jugs" },
  { value: "Plastic (HDPE/LDPE)", icon: Recycle, desc: "Bags, film, packaging" },
  { value: "Mixed recyclables", icon: Recycle, desc: "Plastic + metal + paper" },
  { value: "Organic waste", icon: Recycle, desc: "Food, garden, compostable" },
  { value: "General waste", icon: Recycle, desc: "Non-recyclable for disposal" },
];

const VOLUME_OPTIONS = [
  { value: "small", label: "Small", desc: "A few bags / under 20 kg" },
  { value: "medium", label: "Medium", desc: "Several sacks / 20–80 kg" },
  { value: "large", label: "Large", desc: "Bulk / over 80 kg" },
];

const STEPS = [
  { title: "Location", icon: MapPin },
  { title: "Waste", icon: Recycle },
  { title: "Contact", icon: User },
];

export function PickupWizard({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [step, setStep] = useState<Step>(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // form state
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [wasteType, setWasteType] = useState("");
  const [volume, setVolume] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const reset = () => {
    setStep(0);
    setDone(false);
    setAddress("");
    setLocation("");
    setWasteType("");
    setVolume("");
    setPreferredDate("");
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
  };

  const close = (v: boolean) => {
    onOpenChange(v);
    if (!v) {
      // small delay so the dialog close animation isn't interrupted by reset
      setTimeout(reset, 200);
    }
  };

  const canNext = () => {
    if (step === 0) return address.trim().length > 3 && location.trim().length > 1;
    if (step === 1) return wasteType.length > 0;
    if (step === 2) return name.trim().length > 1 && phone.trim().length >= 9;
    return false;
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/pickup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          address,
          location,
          wasteType,
          volume: volume || undefined,
          preferredDate: preferredDate || undefined,
          notes: notes || undefined,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      toast.success("Pickup scheduled!", {
        description: "We've received your request and will call to confirm.",
      });
    } catch {
      toast.error("Could not submit request", {
        description: "Please try again or call us on 0540652347.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-h-[92vh] overflow-y-auto p-0 sm:max-w-[560px]">
        <div className="flex flex-col">
          {/* Header with gradient */}
          <div className="bg-gradient-to-br from-forest-700 to-forest-900 p-6 text-white">
            <div className="flex items-center gap-3">
              <Truck className="size-5 text-leaf-400" />
              <div>
                <DialogTitle className="text-lg font-bold leading-tight">
                  Schedule a Pickup
                </DialogTitle>
                <DialogDescription className="text-forest-100/80 text-xs">
                  Three quick steps - takes under a minute.
                </DialogDescription>
              </div>
            </div>

            {/* Progress stepper (hidden on success screen) */}
            {!done && (
              <div className="mt-5 flex items-center gap-2">
                {STEPS.map((s, i) => {
                  const Icon = s.icon;
                  const active = step === i;
                  const complete = step > i;
                  return (
                    <div key={s.title} className="flex flex-1 items-center gap-2">
                      <div className="flex flex-col items-center gap-1.5">
                        <div
                          className={cn(
                            "flex size-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-all",
                            complete && "border-leaf-400 bg-leaf-500 text-white",
                            active &&
                              "border-leaf-400 bg-leaf-500/20 text-leaf-400",
                            !active &&
                              !complete &&
                              "border-white/30 text-white/50"
                          )}
                        >
                          {complete ? (
                            <Check className="size-4" />
                          ) : (
                            <Icon className="size-4" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-[10px] font-medium uppercase tracking-wider transition-colors",
                            active || complete ? "text-leaf-400" : "text-white/50"
                          )}
                        >
                          {s.title}
                        </span>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div
                          className={cn(
                            "h-0.5 flex-1 rounded-full transition-colors",
                            complete ? "bg-leaf-400" : "bg-white/20"
                          )}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Body */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="size-16 text-leaf-500" />
                  </motion.div>
                  <h3 className="mt-5 text-xl font-bold">Pickup requested!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you, {name.split(" ")[0]}. We&apos;ve received your
                    pickup request and will call you on{" "}
                    <span className="font-semibold text-foreground">{phone}</span>{" "}
                    shortly to confirm the time.
                  </p>
                  <div className="mt-5 w-full rounded-xl border border-border bg-muted/40 p-4 text-left text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Reference</span>
                      <span className="font-mono font-semibold text-primary">
                        WC-{Date.now().toString().slice(-6)}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-muted-foreground">Waste type</span>
                      <span className="font-medium">{wasteType}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-muted-foreground">Pickup at</span>
                      <span className="font-medium">{location}</span>
                    </div>
                  </div>
                  <Button className="mt-6 w-full" onClick={() => close(false)}>
                    Done
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step 0: Location */}
                  {step === 0 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Where should we collect?
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Tell us the pickup address and area.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="w-address">
                          Pickup address <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <Home className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="w-address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="House / landmark, street name"
                            className="pl-9"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="w-location">
                          Area / Town <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="w-location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="e.g. Mamponteng, Kwabre East"
                            className="pl-9"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="w-date">Preferred date (optional)</Label>
                        <div className="relative">
                          <Calendar className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="w-date"
                            type="date"
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            className="pl-9"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Waste */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          What are we collecting?
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Pick the waste type and approximate volume.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label>
                          Waste type <span className="text-destructive">*</span>
                        </Label>
                        <div className="grid gap-2">
                          {WASTE_OPTIONS.map((w) => {
                            const Icon = w.icon;
                            const active = wasteType === w.value;
                            return (
                              <button
                                key={w.value}
                                type="button"
                                onClick={() => setWasteType(w.value)}
                                className={cn(
                                  "flex items-center gap-3 rounded-xl border p-3 text-left transition-all",
                                  active
                                    ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                                    : "border-border hover:border-primary/40 hover:bg-muted/40"
                                )}
                              >
                                <div
                                  className={cn(
                                    "flex size-9 items-center justify-center rounded-lg",
                                    active
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted text-muted-foreground"
                                  )}
                                >
                                  <Icon className="size-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium">
                                    {w.value}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {w.desc}
                                  </div>
                                </div>
                                {active && (
                                  <Check className="size-4 text-primary shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Approximate volume</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {VOLUME_OPTIONS.map((v) => {
                            const active = volume === v.value;
                            return (
                              <button
                                key={v.value}
                                type="button"
                                onClick={() => setVolume(v.value)}
                                className={cn(
                                  "rounded-xl border p-3 text-center transition-all",
                                  active
                                    ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                                    : "border-border hover:border-primary/40 hover:bg-muted/40"
                                )}
                              >
                                <div className="text-sm font-semibold">
                                  {v.label}
                                </div>
                                <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                                  {v.desc}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          How do we reach you?
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          We&apos;ll call to confirm your pickup time.
                        </p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="w-name">
                            Full name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="w-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="w-phone">
                            Phone <span className="text-destructive">*</span>
                          </Label>
                          <div className="relative">
                            <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="w-phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="0540XXXXXX"
                              className="pl-9"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="w-email">Email (optional)</Label>
                        <Input
                          id="w-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="w-notes">Notes (optional)</Label>
                        <textarea
                          id="w-notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows={3}
                          placeholder="Gate code, landmarks, anything we should know"
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer nav (hidden on success) */}
            {!done && (
              <div className="mt-6 flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => (step === 0 ? close(false) : setStep((step - 1) as Step))}
                  disabled={submitting}
                >
                  <ChevronLeft className="size-4" />
                  {step === 0 ? "Cancel" : "Back"}
                </Button>
                {step < 2 ? (
                  <Button
                    type="button"
                    onClick={() => setStep((step + 1) as Step)}
                    disabled={!canNext()}
                  >
                    Continue
                    <ChevronRight className="size-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={submit}
                    disabled={!canNext() || submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Check className="size-4" />
                        Confirm pickup
                      </>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
