"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Leaf,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_STRUCTURE, SERVICES, SITE } from "@/lib/site-data";
import { useUIStore } from "@/lib/ui-store";
import { useLang } from "@/lib/i18n";
import { InstagramIcon, LinkedinIcon } from "@/components/site/brand-icons";

export function Footer() {
  const openAdmin = useUIStore((s) => s.openAdmin);
  const { t } = useLang();

  // Flatten NAV_STRUCTURE to top-level links for the quick links column
  const quickLinks = NAV_STRUCTURE.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  return (
    <footer className="mt-auto relative overflow-hidden bg-forest-900 text-forest-100">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern opacity-10"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: 4 columns */}
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4 md:py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="size-10 overflow-hidden rounded-full ring-2 ring-leaf-500/30">
                <img
                  src={SITE.logo}
                  alt="WasteCure logo"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">
                  Waste<span className="text-leaf-400">Cure</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-forest-100/60">
                  {SITE.tagline}
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-forest-100/75 leading-relaxed max-w-xs">
              A Ghanaian waste management company providing waste collection,
              recycling, cleaning services and consultancy across the Ashanti
              Region.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WasteCure on Instagram"
                className="flex size-9 items-center justify-center overflow-hidden rounded-lg transition hover:scale-105 hover:opacity-90"
              >
                <InstagramIcon className="size-full" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WasteCure on LinkedIn"
                className="flex size-9 items-center justify-center overflow-hidden rounded-lg transition hover:scale-105 hover:opacity-90"
              >
                <LinkedinIcon className="size-full" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-forest-100/70 hover:text-leaf-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.servicesTitle")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-forest-100/70 hover:text-leaf-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.contactTitle")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  className="flex items-start gap-2.5 text-sm text-forest-100/70 hover:text-leaf-400 transition-colors"
                >
                  <Phone className="size-4 mt-0.5 text-leaf-400/80 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneIntl2}`}
                  className="flex items-start gap-2.5 text-sm text-forest-100/70 hover:text-leaf-400 transition-colors"
                >
                  <Phone className="size-4 mt-0.5 text-leaf-400/80 shrink-0" />
                  {SITE.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 text-sm text-forest-100/70 hover:text-leaf-400 transition-colors break-all"
                >
                  <Mail className="size-4 mt-0.5 text-leaf-400/80 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-forest-100/70">
                <MapPin className="size-4 mt-0.5 text-leaf-400/80 shrink-0" />
                {SITE.location}
              </li>
            </ul>
            <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2 text-xs text-forest-100/70">
                <Leaf className="size-3.5 text-leaf-400" />
                {SITE.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-forest-100/70">
              &copy; {new Date().getFullYear()} {SITE.legalName}.{" "}
              {t("footer.rights")}
            </p>
            <div className="mt-1 flex items-center justify-center sm:justify-start gap-3 text-xs text-forest-100/50 flex-wrap">
              <span>{t("footer.builtWithCare")}</span>
              <span className="text-forest-100/30">·</span>
              <button
                onClick={() => useUIStore.getState().openPrivacy()}
                className="hover:text-leaf-400 transition-colors underline-offset-2 hover:underline"
              >
                {t("common.privacy")}
              </button>
              <span className="text-forest-100/30">·</span>
              <button
                onClick={() => useUIStore.getState().openTerms()}
                className="hover:text-leaf-400 transition-colors underline-offset-2 hover:underline"
              >
                {t("common.terms")}
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={openAdmin}
              className="text-forest-100/50 hover:text-leaf-400 hover:bg-white/5"
            >
              <LayoutDashboard className="size-3.5" />
              {t("cta.staff")}
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/15 bg-white/5 text-forest-100 hover:bg-white/10 hover:text-white"
            >
              <Link href="/">
                <ArrowUp className="size-4" />
                {t("cta.backToTop")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
