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

      {/* 08 פרקים — אקורדיון, כדי שהעמוד לא ייראה כמו קיר טקסט */}
      <Section index="04" label="CHAPTERS" meta="THE WRITTEN METHOD" tone="ink">
        <div className="relative">
          <PlayDiagram className="pointer-events-none absolute -top-10 end-0 hidden h-56 w-auto text-asphalt/18 lg:block" />

          <div className="relative grid gap-8 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-4">
              <h2 className="display t-h2" data-reveal>
                THE WRITTEN
                <br />
                METHOD<span className="text-flare">.</span>
              </h2>
              <p className="body-he mt-5 text-sm text-asphalt-2" data-reveal style={delay(100)}>
                שמונה פרקים. לוחצים על פרק כדי לפתוח אותו.
              </p>
            </div>

            <div className="md:col-span-8">
              {methodChapters.map((c, i) => (
                <details
                  key={c.index}
                  className="faq-item group border-b border-asphalt/30 first:border-t first:border-asphalt/30"
                  data-reveal
                  style={delay(30 * i)}
                >
                  <summary className="flex items-center gap-4 py-5 md:gap-6">
                    <span className="spec shrink-0 text-asphalt-2 transition-colors group-open:text-flare">
                      {c.index}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="display display-wide block text-[1.05rem] leading-none text-bone transition-colors group-hover:text-flare md:text-[1.25rem]">
                        {c.en}
                      </span>
                      <span className="label-he mt-1.5 block text-asphalt-2">{c.he}</span>
                    </span>
                    <span
                      aria-hidden
                      className="relative h-6 w-6 shrink-0 border border-asphalt/45 text-flare"
                    >
                      <span className="absolute inset-x-[25%] top-1/2 h-px -translate-y-1/2 bg-current" />
                      <span className="faq-bar-v absolute inset-y-[25%] start-1/2 w-px bg-current" />
                    </span>
                  </summary>

                  <div className="pb-7 pe-2 ps-[2.6rem] md:ps-[3.4rem]">
                    <p className="body-he text-[0.98rem] leading-[1.8] text-bone/85">{c.lead}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {c.points.map((pt) => (
                        <li key={pt} className="flex items-baseline gap-3">
                          <span className="mt-1.5 h-1 w-1 shrink-0 bg-flare" aria-hidden />
                          <span className="body-he text-[0.88rem] leading-[1.7] text-bone/65">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
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
