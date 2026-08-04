"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_STRUCTURE, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { LanguageToggle } from "@/components/site/language-toggle";
import { useUIStore } from "@/lib/ui-store";

type NavItem = (typeof NAV_STRUCTURE)[number];

function isActive(pathname: string, href: string): boolean {
  // Strip hash + query for route match
  const cleanPath = href.split("#")[0].split("?")[0];
  if (cleanPath === "/") return pathname === "/";
  return pathname === cleanPath || pathname.startsWith(cleanPath + "/");
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const openPickupWizard = useUIStore((s) => s.openPickupWizard);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileOpenChange = (open: boolean) => {
    setMobileOpen(open);
    if (!open) setOpenGroup(null);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="WasteCure home"
        >
          <div className="relative size-10 md:size-12 overflow-hidden rounded-full ring-2 ring-primary/20 shadow-sm group-hover:ring-primary/40 transition">
            <img
              src={SITE.logo}
              alt="WasteCure logo"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
              Waste<span className="text-primary">Cure</span>
            </span>
            <span className="hidden sm:block text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Curing Waste. Healing the Planet.
            </span>
          </div>
        </Link>

        {/* Desktop nav with dropdowns */}
        <nav
          className="hidden xl:flex items-center gap-0.5"
          aria-label="Primary navigation"
        >
          {NAV_STRUCTURE.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              active={isActive(pathname, item.href)}
            />
          ))}
        </nav>

        {/* Right side: utility controls + CTA */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="hidden xl:inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <LanguageToggle />
          <ThemeToggle />

          <span
            aria-hidden
            className="mx-1 hidden sm:block h-6 w-px bg-border"
          />

          <Button
            size="sm"
            className="hidden sm:inline-flex whitespace-nowrap"
            onClick={openPickupWizard}
          >
            Request Pickup
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={handleMobileOpenChange}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[400px] p-0 overflow-y-auto">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-2.5 border-b border-border px-5 py-5">
                  <div className="flex items-center gap-2.5">
                    <div className="size-10 overflow-hidden rounded-full ring-2 ring-primary/20">
                      <img
                        src={SITE.logo}
                        alt="WasteCure logo"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-bold">
                        Waste<span className="text-primary">Cure</span>
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Healing the Planet
                      </span>
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="size-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav
                  className="flex flex-col gap-1 px-3 py-4"
                  aria-label="Mobile navigation"
                >
                  {NAV_STRUCTURE.map((item, i) => {
                    const hasChildren =
                      "children" in item && item.children && item.children.length > 0;
                    const itemActive = isActive(pathname, item.href);
                    const groupOpen = openGroup === item.label;

                    return (
                      <div key={item.label}>
                        {hasChildren ? (
                          <>
                            <button
                              onClick={() =>
                                setOpenGroup(groupOpen ? null : item.label)
                              }
                              className={cn(
                                "flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors",
                                itemActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
                              )}
                              aria-expanded={groupOpen}
                            >
                              <span className="flex items-center gap-3">
                                <span className="text-xs font-mono text-primary/60">
                                  0{i + 1}
                                </span>
                                {item.label}
                              </span>
                              <ChevronDown
                                className={cn(
                                  "size-4 transition-transform",
                                  groupOpen && "rotate-180"
                                )}
                              />
                            </button>
                            <AnimatePresence initial={false}>
                              {groupOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden pl-6"
                                >
                                  <SheetClose asChild>
                                    <Link
                                      href={item.href}
                                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-foreground/75 hover:bg-muted hover:text-foreground"
                                    >
                                      Overview
                                    </Link>
                                  </SheetClose>
                                  {item.children!.map((child) => (
                                    <SheetClose asChild key={child.href}>
                                      <Link
                                        href={child.href}
                                        className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-foreground/75 hover:bg-muted hover:text-foreground"
                                      >
                                        {child.label}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium transition-colors",
                                itemActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
                              )}
                            >
                              <span className="text-xs font-mono text-primary/60">
                                0{i + 1}
                              </span>
                              {item.label}
                            </Link>
                          </SheetClose>
                        )}
                      </div>
                    );
                  })}
                </nav>
                <div className="mt-auto border-t border-border p-4 space-y-3">
                  <SheetClose asChild>
                    <Button
                      className="w-full"
                      onClick={() => {
                        setMobileOpen(false);
                        openPickupWizard();
                      }}
                    >
                      Request Pickup
                    </Button>
                  </SheetClose>
                  <a
                    href={`tel:${SITE.phoneIntl}`}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Phone className="size-4" />
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  const hasChildren =
    "children" in item && item.children && item.children.length > 0;
  const [open, setOpen] = useState(false);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          "relative px-2.5 py-2 text-sm font-medium rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 whitespace-nowrap",
          active
            ? "text-primary"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
        )}
      >
        {item.label}
        {active && (
          <motion.span
            layoutId="activeNav"
            className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 px-2.5 py-2 text-sm font-medium rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 whitespace-nowrap",
          active
            ? "text-primary"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
        )}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform",
            open && "rotate-180"
          )}
        />
      </Link>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-2 min-w-[230px]"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg ring-1 ring-black/5 py-1.5">
              <Link
                href={item.href}
                className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/60 hover:text-primary transition-colors outline-none focus-visible:bg-muted/60"
              >
                Overview
              </Link>
              <div className="my-1 h-px bg-border" />
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted/60 hover:text-primary transition-colors outline-none focus-visible:bg-muted/60"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
