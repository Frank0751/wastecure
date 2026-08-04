"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "tw", label: "Twi", short: "TW" },
];

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center rounded-full border border-border bg-background/80 p-0.5 backdrop-blur-sm">
      <Globe className="mx-1.5 size-3.5 text-muted-foreground" />
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-label={`Switch to ${l.label}`}
          title={l.label}
          className={cn(
            "rounded-full px-2 py-0.5 text-[11px] font-bold transition-colors",
            lang === l.code
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
