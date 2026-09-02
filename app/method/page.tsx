import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Ticker from "@/components/ui/Ticker";
import { methodChapters, entryRequirement } from "@/data/method";
import { systemLoop } from "@/data/system";
import { cta } from "@/data/site";
import { PlayDiagram } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "THE BALLERZ METHOD — השיטה",
  description:
    "BALLERZ היא מערכת ולא אוסף תרגילים: תפיסה, אימון, פיתוח יכולת, יצירתיות, יישום במשחק, תחרות, אחריות ופיתוח לאורך זמן.",
  alternates: { canonical: "/method" },
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="METHOD"
        meta="08 CHAPTERS"
        titleEn={
          <>
            THE BALLERZ
            <br />
            METHOD<span className="text-flare">.</span>
          </>
        }
        lead="שיטה היא לא רשימת תרגילים. היא סדר עבודה: מה מלמדים, באיזה סדר, איך בודקים שזה עובד, ומה קורה כשזה לא."
      />

      <Ticker
        items={["A SYSTEM", "NOT A COLLECTION OF DRILLS", "TRANSFER OVER REPS", "BUILT WITH INTENT"]}
        tone="flare"
      />

      {/* הלולאה בקצרה */}
      <Section index="00" label="THE LOOP" meta="TRAIN → APPLY → COMPETE → TRACK → REPEAT" tone="ink">
        <ul className="grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-5">
          {systemLoop.map((s, i) => (
            <li
              key={s.index}
              className="group relative bg-ink-2 p-6 transition-colors duration-500 hover:bg-flare"
              data-reveal
              style={delay(60 * i)}
            >
              <span className="spec text-flare transition-colors duration-500 group-hover:text-ink/60">
                {s.index}
              </span>
              <h2 className="display mt-8 text-[1.5rem] leading-none text-bone transition-colors duration-500 group-hover:text-ink">
                {s.en}
              </h2>
              <p className="body-he mt-2 text-sm text-bone/60 transition-colors duration-500 group-hover:text-ink/75">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 08 פרקים */}
      <Section index="01" label="CHAPTERS" meta="THE WRITTEN METHOD" tone="ink2">
        <div className="relative">
          <PlayDiagram className="pointer-events-none absolute -top-10 end-0 hidden h-56 w-auto text-asphalt/18 lg:block" />

          <ol className="relative">
            {methodChapters.map((c, i) => (
              <li key={c.index} data-reveal style={delay(40 * i)}>
                <article className="grid gap-6 border-t border-asphalt/30 py-10 last:border-b md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <span className="spec text-flare">{c.index}</span>
                    <h2 className="display t-h3 mt-3 leading-none text-bone">{c.en}</h2>
                    <p className="body-he mt-1 text-sm text-asphalt-2">{c.he}</p>
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

      {/* רמת כניסה */}
      <Section index="02" label="ENTRY STANDARD" meta="WHO THIS IS FOR" tone="bone">
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
          <Button href={cta.join.href} variant="flare" size="lg">
            {cta.join.label}
          </Button>
          <Button href={cta.clubs.href} variant="ink" size="lg">
            {cta.clubs.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
