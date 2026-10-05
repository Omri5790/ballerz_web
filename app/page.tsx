import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Centers from "@/components/sections/Centers";
import WhatIsBallerz from "@/components/home/WhatIsBallerz";
import PlayerPath from "@/components/home/PlayerPath";
import Program from "@/components/home/Program";
import CombineSection from "@/components/sections/CombineSection";
import OpeningTraining from "@/components/sections/OpeningTraining";
import WhatYouGet from "@/components/home/WhatYouGet";
import Community from "@/components/home/Community";
import Parents from "@/components/home/Parents";
import Membership from "@/components/home/Membership";
import Proof from "@/components/home/Proof";
import Faq from "@/components/sections/Faq";
import FounderStrip from "@/components/home/FounderStrip";
import FinalCta from "@/components/sections/FinalCta";
import OtherWorlds from "@/components/sections/OtherWorlds";
import Ticker from "@/components/ui/Ticker";
import { site } from "@/data/site";
import { centers } from "@/data/centers";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "BALLERZ — אקדמיית כדורסל ופיתוח שחקנים | מודיעין וירושלים",
  description:
    "אל תתאמן יותר — תדע על מה לעבוד. BALLERZ היא תכנית פיתוח שחקני כדורסל מכיתה ז׳ ומעלה: אימון שבועי, עבודה עצמאית, מעקב ומדידה וקהילה. מרכזים במודיעין ובירושלים.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BALLERZ — אל תתאמן יותר. תדע על מה לעבוד.",
    description:
      "תכנית פיתוח שחקני כדורסל מכיתה ז׳ ומעלה. אימון שבועי, עבודה עצמאית, מעקב וקהילה. מודיעין וירושלים.",
    url: site.url,
  },
};

const tickerA = [
  "DON'T JUST TRAIN MORE",
  "KNOW WHAT TO WORK ON",
  "PLAYER DEVELOPMENT",
  "DO THE WORK",
  "BUILD YOUR GAME",
];

const tickerB = [
  "PROVE IT",
  "EARN TRUST",
  "MAKE AN IMPACT",
  "CONTROL THE GAME",
  "THE WORK SHOWS",
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: site.name,
  alternateName: "בולרז",
  url: site.url,
  description: site.description,
  sport: "Basketball",
  areaServed: centers.map((c) => c.city),
  email: site.contact.email || undefined,
  sameAs: [site.social.instagram].filter(Boolean),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 01 */} <Hero />
      <Ticker items={tickerA} tone="flare" />
      {/* 02 */} <Centers index="02" />
      {/* 03 */} <WhatIsBallerz />
      {/* 04 */} <PlayerPath />
      {/* 05 */} <Program />
      {/* 06 */} <CombineSection index="06" />
      {/* 07 */} <OpeningTraining index="07" />
      {/* 08 */} <WhatYouGet />
      {/* 09 */} <Community />
      {/* 10 */} <Parents />
      {/* 11 */} <Membership index="11" />
      {/* 12 */} <Proof index="12" />
      {/* 13 */} <Faq index="13" />
      {/* 14 */} <FounderStrip index="14" />
      <Ticker items={tickerB} tone="ink" reverse />
      <FinalCta />
      <OtherWorlds />
    </>
  );
}
