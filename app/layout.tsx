import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Grain from "@/components/ui/Grain";
import RevealEngine from "@/components/ui/RevealEngine";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "פיתוח שחקני כדורסל",
    "אימון כדורסל אישי",
    "Player Development",
    "BALLERZ",
    "אימון יכולת כדורסל",
    "מועדוני כדורסל",
  ],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BALLERZ — Build Your Game" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* preload לפונטים הקריטיים — מונע קפיצת טיפוגרפיה בטעינה */}
        <link
          rel="preload"
          href="/fonts/archivo-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/heebo-var-hebrew.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-ink text-bone antialiased">
        <Grain />
        <RevealEngine />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
