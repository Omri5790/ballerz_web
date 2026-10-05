import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Ticker from "@/components/ui/Ticker";
import Program from "@/components/home/Program";
import Develop from "@/components/home/Develop";
import SystemLoop from "@/components/home/SystemLoop";
import Freedom from "@/components/home/Freedom";
import Standard from "@/components/home/Standard";
import FinalCta from "@/components/sections/FinalCta";
import { methodChapters, entryRequirement } from "@/data/method";
import { cta } from "@/data/site";
import { PlayDiagram } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "התכנית המקצועית — פיתוח שחקני כדורסל",
  description:
    "התכנית המקצועית של BALLERZ: קליעה, סיומות ו-1 על 1 ויצירת יתרון, לצד תכנית עבודה עצמאית ומעקב שבועי. שיטה כתובה לפיתוח שחקני כדורסל — לא אוסף תרגילים.",
  alternates: { canonical: "/method" },
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="THE PROGRAM"
        meta="03 CORE AREAS · 08 CHAPTERS"
        titleEn={
          <>
            THE BALLERZ
            <br />
            PROGRAM<span className="text-flare">.</span>
          </>
        }
        lead="תכנית היא לא רשימת תרגילים. היא סדר עבודה: על מה עובדים, באיזה סדר, איך בודקים שזה עובד, ומה קורה כשזה לא."
      >
        <Button href={cta.combine.href} variant="flare" size="lg">
          {cta.combine.label}
        </Button>
      </PageHero>

      <Ticker
        items={["A SYSTEM", "NOT A COLLECTION OF DRILLS", "TRANSFER OVER REPS", "DO THE WORK"]}
        tone="flare"
      />

      {/* תחומי הליבה + עבודה עצמאית + מעקב */}
      <Program index="01" showCta={false} />

      {/* 09 תחומי פיתוח */}
      <Develop index="02" />

      {/* הלולאה */}
      <SystemLoop index="03" />

      {/* 08 פרקים */}
      <Section index="04" label="CHAPTERS" meta="THE WRITTEN METHOD" tone="ink">
        <div className="relative">
          <PlayDiagram className="pointer-events-none absolute -top-10 end-0 hidden h-56 w-auto text-asphalt/18 lg:block" />

          <ol className="relative">
            {methodChapters.map((c, i) => (
              <li key={c.index} data-reveal style={delay(40 * i)}>
                <article className="grid gap-6 border-t border-asphalt/30 py-10 last:border-b md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <span className="spec text-flare">{c.index}</span>
                    <h2 className="display t-h3 mt-3 leading-none text-bone">{c.en}</h2>
                    <p className="label-he mt-2 text-asphalt-2">{c.he}</p>
                  </div>

                  <div className="md:col-span-8">
                    <p className="body-he lead text-bone/85">{c.lead}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-baseline gap-3">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-flare" aria-hidden />
                          <span className="body-he text-sm text-bone/65">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* חופש ויצירתיות */}
      <Freedom index="05" />

      {/* תרבות עבודה */}
      <Standard index="06" />

      {/* רמת כניסה */}
      <Section index="07" label="ENTRY STANDARD" meta="WHO THIS IS FOR" tone="bone">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h2 text-ink md:col-span-6" data-reveal>
            WHO BALLERZ
            <br />
            IS FOR<span className="text-flare">.</span>
          </h2>
          <div className="body-he space-y-4 text-ink/75 md:col-span-6" data-reveal style={delay(120)}>
            <p className="lead text-ink">{entryRequirement.body}</p>
            <p>
              המשמעות: BALLERZ לא מחליפה את הקבוצה — היא נבנית מעליה. שחקן שמגיע אלינו כבר
              מתאמן, כבר משחק, וכבר מכיר את הדרישות של מסגרת קבוצתית.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4" data-reveal>
          <Button href={cta.combine.href} variant="flare" size="lg">
            {cta.combine.label}
          </Button>
          <Button href={cta.centers.href} variant="ink" size="lg">
            {cta.centers.label}
          </Button>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
