import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import Centers from "@/components/sections/Centers";
import ReadyToBuild from "@/components/sections/ReadyToBuild";
import { systemLoop } from "@/data/system";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "מרכזי BALLERZ",
  description:
    "מרכזי BALLERZ — מודיעין ומבשרת ציון. כל מרכז פועל לפי אותה שיטה, אותה תכנית ואותו סטנדרט אימון.",
  alternates: { canonical: "/centers" },
};

const howItWorks = [
  { en: "SAME METHOD", he: "אותה מתודולוגיה בכל מרכז — לא גרסה מקומית." },
  { en: "TRAINED COACHES", he: "מאמנים שהוכשרו לפי שיטת BALLERZ." },
  { en: "SMALL GROUPS", he: "קבוצות קטנות לפי גיל ורמה." },
  { en: "ONE CALENDAR", he: "תכנית שנתית וטורניר חודשי משותף." },
];

export default function CentersPage() {
  return (
    <>
      <PageHero
        eyebrow="CENTERS"
        meta="ONE SYSTEM · MANY CITIES"
        titleEn={
          <>
            FIND YOUR
            <br />
            CENTER<span className="text-flare">.</span>
          </>
        }
        lead="BALLERZ בנויה כדי לפעול ביותר ממקום אחד. משנים את העיר, את האולם ואת הצוות — לא את השיטה."
      />

      <div className="bg-ink">
        <MediaSlot
          slot="BALLERZ COMMUNITY · B/W · 16:9"
          src="/media/centers-group.jpg"
          alt="שחקני BALLERZ באולם"
          index="CT1"
          ratio="21/9"
          sizes="100vw"
        />
      </div>

      <Centers index="01" showHeadline={false} />

      <Section index="02" label="HOW A CENTER WORKS" meta="STANDARD" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h2 md:col-span-5" data-reveal>
            EVERY CENTER
            <br />
            RUNS THE SAME
            <br />
            STANDARD<span className="text-flare">.</span>
          </h2>

          <ul className="md:col-span-7">
            {howItWorks.map((h, i) => (
              <li key={h.en} data-reveal style={delay(70 * i)}>
                <div className="group flex items-baseline gap-6 border-b border-asphalt/30 py-6 first:border-t first:border-asphalt/30">
                  <span className="spec w-8 shrink-0 text-asphalt-2 transition-colors group-hover:text-flare">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display t-h3 w-[45%] shrink-0 leading-none text-bone transition-colors duration-500 group-hover:text-flare">
                    {h.en}
                  </h3>
                  <p className="body-he text-sm text-bone/65">{h.he}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-px bg-asphalt/30 sm:grid-cols-3 lg:grid-cols-5" data-reveal>
          {systemLoop.map((s) => (
            <div key={s.index} className="bg-ink-2 p-5">
              <span className="spec spec-sm text-flare">{s.index}</span>
              <p className="display mt-4 text-[1.15rem] leading-none text-bone">{s.en}</p>
              <p className="spec spec-sm mt-2 text-asphalt-2">{s.spec}</p>
            </div>
          ))}
        </div>
      </Section>

      <ReadyToBuild />
    </>
  );
}
