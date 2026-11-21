"use client";

import Link from "next/link";
import { NAV_STRUCTURE, SERVICES, SITE } from "@/lib/site-data";
import { useUIStore } from "@/lib/ui-store";
import { InstagramIcon, LinkedinIcon } from "@/components/site/brand-icons";

const linkClass = "text-sm text-white/70 transition-colors hover:text-white";

export function Footer() {
  const openAdmin = useUIStore((s) => s.openAdmin);
  const openPrivacy = useUIStore((s) => s.openPrivacy);
  const openTerms = useUIStore((s) => s.openTerms);

  return (
    <footer className="mt-auto bg-forest-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4 md:py-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src={SITE.logo}
                alt=""
                className="size-10 rounded-full object-cover"
              />
              <span className="text-lg font-bold">WasteCure</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Waste collection, recycling, cleaning services and consultancy.
              Based in Kumasi, working across Ghana.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WasteCure on Instagram"
                className="size-9 overflow-hidden rounded-lg transition-opacity hover:opacity-85"
              >
                <InstagramIcon className="size-full" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WasteCure on LinkedIn"
                className="size-9 overflow-hidden rounded-lg transition-opacity hover:opacity-85"
              >
                <LinkedinIcon className="size-full" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold">Site</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_STRUCTURE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`tel:${SITE.phoneIntl}`} className={linkClass}>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneIntl2}`} className={linkClass}>
                  {SITE.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={`${linkClass} break-all`}>
                  {SITE.email}
                </a>
              </li>
              <li className="text-sm leading-relaxed text-white/70">
                {SITE.location}
              </li>
              <li className="text-sm text-white/70">{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}
            <span className="mx-2 text-white/30">·</span>
            Site by{" "}
            <a
              href="https://koombei.com"
              target="_blank"
              rel="noopener"
              className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              KoomBei
            </a>
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button onClick={openPrivacy} className="transition-colors hover:text-white">
              Privacy
            </button>
            <button onClick={openTerms} className="transition-colors hover:text-white">
              Terms
            </button>
            <button onClick={openAdmin} className="transition-colors hover:text-white">
              Staff sign-in
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
