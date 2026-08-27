"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "tw";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.sustainability": "Sustainability",
    "nav.impact": "Impact",
    "nav.area": "Area",
    "nav.tips": "Tips",
    "nav.contact": "Contact",
    "cta.requestPickup": "Request Pickup",
    "cta.ourServices": "Our Services",
    "cta.contactUs": "Contact us",
    "cta.getInvolved": "Get involved",
    "cta.callUs": "Call us",
    "cta.followUs": "Follow us",
    "cta.backToTop": "Back to top",
    "cta.staff": "Staff",
    "cta.schedulePickup": "Schedule a Pickup",
    "hero.badge": "Ghana's Waste Management Solution",
    "hero.title1": "Waste Management",
    "hero.title2": "Specialists",
    "hero.founded": "Founded",
    "hero.serviceArea": "Service Area",
    "hero.coreServices": "Core Services",
    "hero.serving": "Serving",
    "offer.eyebrow": "What We Offer",
    "offer.title": "Advanced waste solutions for cleaner communities",
    "offer.subtitle":
      "We give households, businesses and institutions across the Ashanti Region a real, sustainable option for waste management - backed by education and a recycling-first approach.",
    "services.eyebrow": "Our Services",
    "services.title": "Plastic collection, recycling & advisory",
    "contact.eyebrow": "Contact Us",
    "contact.title": "Let's build a cleaner Ghana together",
    "contact.subtitle":
      "Request a pickup, ask about services, or partner with us. We respond within 1–2 business days.",
    "contact.getInTouch": "Get in touch",
    "contact.sendEnquiry": "Send an enquiry",
    "contact.fullName": "Full name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send enquiry",
    "footer.builtWithCare": "Built with care for a cleaner Ghana.",
    "footer.rights": "All rights reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.servicesTitle": "Services",
    "footer.contactTitle": "Contact",
    "common.learnMore": "Learn more",
    "common.readMore": "Read more",
    "common.privacy": "Privacy",
    "common.terms": "Terms",
  },
  tw: {
    "nav.home": "Fie",
    "nav.about": "Yɛn Ho",
    "nav.services": "Akɔnnwa",
    "nav.sustainability": "Nneɛma a Ɛkɔ So",
    "nav.impact": "Nkɛntɛnsoɔ",
    "nav.area": "Mantam",
    "nav.tips": "Nsɛm",
    "nav.contact": "Frɛ Yɛn",
    "cta.requestPickup": "Srɛ Nneɛma Nnum",
    "cta.ourServices": "Yɛn Akɔnnwa",
    "cta.contactUs": "Frɛ yɛn",
    "cta.getInvolved": "Ka ho",
    "cta.callUs": "Frɛ yɛn telefon so",
    "cta.followUs": "Di yɛn akyi",
    "cta.backToTop": "Kɔ soro",
    "cta.staff": "Adwumayɛfoɔ",
    "cta.schedulePickup": "Hyɛ Nneɛma Nnum Da",
    "hero.badge": "Ghana Plastik Nneɛma Foforɔ",
    "hero.title1": "Nneɛma Nnum Yɛ.",
    "hero.title2": "Asaase Ho Yare.",
    "hero.founded": "Wɔhyɛɛ aseɛ",
    "hero.serviceArea": "Baabi a Yɛsom",
    "hero.coreServices": "Akɔnnwa Titire",
    "hero.serving": "Yɛsom",
    "offer.eyebrow": "Deɛ Yɛde Ma",
    "offer.title": "Baabi a wɔahyɛ da ma plasitik nneɛma",
    "offer.subtitle":
      "Yɛde baabi a wɔahyɛ da ma plasitik nneɛma ma efie, adwumayɛbea, ne adwumayɛfoɔ a wɔwɔ Kwabre East - a wɔde adesua ne nneɛma a wɔsan yɛ foforɔ ka ho.",
    "services.eyebrow": "Yɛn Akɔnnwa",
    "services.title": "Plasitik boaboa ano, nneɛma a wɔsan yɛ foforɔ ne afotu",
    "contact.eyebrow": "Frɛ Yɛn",
    "contact.title": "Yɛnsiesie Ghana a ɛho yɛ fɛ no nom",
    "contact.subtitle":
      "Srɛ nneɛma a wɔde bɛnum, bisaa akɔnnwa ho asɛm, anaasɛ ka yɛn ho. Yɛbua wɔ nnua 1–2 mu.",
    "contact.getInTouch": "Ka yɛn ho",
    "contact.sendEnquiry": "Soma asɛm",
    "contact.fullName": "Edin",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.message": "Nkratoɔ",
    "contact.send": "Soma",
    "footer.builtWithCare": "Yɛyɛɛ no wɔ adwene mu ma Ghana a ɛho yɛ fɛ.",
    "footer.rights": "Hokwan nyinaa yɛ deɛ wɔde sieɛ.",
    "footer.quickLinks": "Nkitahodie Ntɛm",
    "footer.servicesTitle": "Akɔnnwa",
    "footer.contactTitle": "Frɛ Yɛn",
    "common.learnMore": "Sua bio",
    "common.readMore": "Kenkan bio",
    "common.privacy": "Banbɔ",
    "common.terms": "Mmara",
  },
};

const STORAGE_KEY = "wastecure-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with "en" to match SSR. The language is synced from localStorage
  // when the user explicitly toggles (setLang), not via an effect, to avoid
  // hydration mismatch and the set-state-in-effect lint rule.
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = (key: string) => {
    return TRANSLATIONS[lang][key] ?? TRANSLATIONS.en[key] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
