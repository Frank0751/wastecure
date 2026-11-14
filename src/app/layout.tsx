import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/lib/site-data";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Chatbot } from "@/components/site/chatbot";
import { PickupWizardHost } from "@/components/site/pickup-wizard-host";
import { AdminDashboardHost } from "@/components/site/admin-dashboard-host";
import { PrivacyDialogHost } from "@/components/site/privacy-dialog-host";
import { TermsDialogHost } from "@/components/site/terms-dialog-host";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const description =
  "WasteCure is a Ghanaian waste management company based in Kumasi. Waste collection, recyclables sorting, cleaning services and waste management consultancy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "WasteCure | Waste Management Specialists in Ghana",
    template: "%s | WasteCure",
  },
  description,
  icons: { icon: SITE.logo, apple: SITE.logo },
  openGraph: {
    title: "WasteCure | Waste Management Specialists in Ghana",
    description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_GH",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#10241a" },
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.legalName,
  description,
  url: SITE.url,
  logo: `${SITE.url}${SITE.logo}`,
  telephone: [SITE.phoneIntl, SITE.phoneIntl2],
  email: SITE.email,
  foundingDate: String(SITE.founded),
  areaServed: { "@type": "Country", name: "Ghana" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Aseda House, Adum",
    addressLocality: "Kumasi",
    addressRegion: "Ashanti Region",
    addressCountry: "GH",
  },
  openingHours: "Mo-Sa 08:00-17:00",
  sameAs: [SITE.instagram, SITE.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} bg-background text-foreground antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" richColors closeButton />
          <Chatbot />
          <PickupWizardHost />
          <AdminDashboardHost />
          <PrivacyDialogHost />
          <TermsDialogHost />
        </ThemeProvider>
      </body>
    </html>
  );
}
