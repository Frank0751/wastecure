import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";
import { SITE } from "@/lib/site-data";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Chatbot } from "@/components/site/chatbot";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { BackToTop } from "@/components/site/back-to-top";
import { PickupWizardHost } from "@/components/site/pickup-wizard-host";
import { AdminDashboardHost } from "@/components/site/admin-dashboard-host";
import { PrivacyDialogHost } from "@/components/site/privacy-dialog-host";
import { TermsDialogHost } from "@/components/site/terms-dialog-host";
import { CookieConsent } from "@/components/site/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wastecure.org"),
  title: {
    default:
      "WasteCure | Waste Management Specialists in Ghana",
    template: "%s | WasteCure",
  },
  description:
    "WasteCure is a Ghanaian waste management company based in Kumasi, serving clients across Ghana. We provide waste collection, recyclables sorting, cleaning services, and waste management consultancy for a cleaner, greener future.",
  keywords: [
    "WasteCure",
    "waste management Ghana",
    "waste management Ashanti Region",
    "plastic recycling Kumasi",
    "waste collection Kumasi",
    "cleaning services Kumasi",
    "waste collection Ghana",
    "recycling Ghana",
    "waste collection",
    "sustainability Ghana",
    "environmental services",
    "community cleanup",
  ],
  authors: [{ name: "WasteCure Limited" }],
  creator: "WasteCure Limited",
  publisher: "WasteCure Limited",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/wastecure-logo.jpg",
    apple: "/wastecure-logo.jpg",
  },
  openGraph: {
    title: "WasteCure | Waste Management Specialists in Ghana",
    description:
      "Reducing waste pollution across Ghana through responsible collection, recycling, cleaning services and community education. Based in Kumasi.",
    url: "https://wastecure.org",
    siteName: "WasteCure",
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: "WasteCure - Waste Management Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WasteCure | Waste Management Specialists in Ghana",
    description:
      "Reducing waste pollution across Ghana through responsible collection, recycling, cleaning services and community education.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://wastecure.org",
  },
};

// JSON-LD structured data for SEO (LocalBusiness schema)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://wastecure.org/#business",
  name: "WasteCure Limited Company",
  description:
    "Ghanaian waste management company providing waste collection, recyclables sorting, cleaning services, and waste management consultancy across Ghana.",
  url: "https://wastecure.org",
  telephone: SITE.phoneIntl,
  email: SITE.email,
  foundingDate: "2021",
  areaServed: {
    "@type": "Country",
    name: "Ghana",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Aseda House, Adum",
    addressLocality: "Kumasi",
    addressRegion: "Ashanti Region",
    addressCountry: "GH",
  },
  openingHours: "Mo-Sa 08:00-17:00",
  knowsAbout: [
    "Waste collection",
    "Recyclables collection and sorting",
    "Cleaning services",
    "Waste management consultancy",
    "Community engagement and education",
  ],
  sameAs: [SITE.instagram, SITE.linkedin],
};

// JSON-LD WebSite schema
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://wastecure.org/#website",
  url: "https://wastecure.org",
  name: "WasteCure",
  publisher: { "@id": "https://wastecure.org/#business" },
  inLanguage: "en-GH",
};

// JSON-LD BreadcrumbList for the main site sections
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://wastecure.org/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://wastecure.org/about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Services",
      item: "https://wastecure.org/services",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Sustainability",
      item: "https://wastecure.org/sustainability",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://wastecure.org/contact",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex min-h-screen flex-col bg-background">
              <ScrollProgress />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Sonner position="top-right" richColors closeButton />
            <Chatbot />
            <BackToTop />
            <PickupWizardHost />
            <AdminDashboardHost />
            <PrivacyDialogHost />
            <TermsDialogHost />
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
