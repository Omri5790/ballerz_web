import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Gap from "@/components/home/Gap";
import ForClubs from "@/components/home/ForClubs";
import SystemLoop from "@/components/home/SystemLoop";
import Develop from "@/components/home/Develop";
import Freedom from "@/components/home/Freedom";
import Standard from "@/components/home/Standard";
import Centers from "@/components/sections/Centers";
import Players from "@/components/home/Players";
import Proof from "@/components/home/Proof";
import Intent from "@/components/home/Intent";
import FounderStrip from "@/components/home/FounderStrip";
import ReadyToBuild from "@/components/sections/ReadyToBuild";
import SchoolsStrip from "@/components/sections/SchoolsStrip";
import Ticker from "@/components/ui/Ticker";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const tickerA = [
  "BUILD YOUR GAME",
  "PUT IN THE WORK",
  "PLAYER DEVELOPMENT SYSTEM",
  "THE WORK SHOWS",
  "ONE SYSTEM · ONE STANDARD",
];

const tickerB = [
  "TRAIN",
  "APPLY",
  "COMPETE",
  "TRACK",
  "REPEAT",
  "BUILT WITH INTENT",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: site.name,
  alternateName: "בלרז",
  url: site.url,
  description: site.description,
  sport: "Basketball",
  areaServed: "IL",
  email: site.contact.email || undefined,
  sameAs: [site.social.instagram].filter(Boolean),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Ticker items={tickerA} tone="flare" />
      <Gap />
      <ForClubs />
      <SchoolsStrip />
      <SystemLoop />
      <Develop />
      <Freedom />
      <Standard />
      <Centers index="08" />
      <Players />
      <Proof />
      <Intent />
      <FounderStrip />
      <Ticker items={tickerB} tone="ink" reverse />
      <ReadyToBuild />
    </>
  );
}
