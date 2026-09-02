import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Ticker from "@/components/ui/Ticker";
import MediaSlot from "@/components/ui/MediaSlot";
import {
  clubModules,
  clubProvides,
  clubGets,
  partnershipModels,
  clubNotNeeded,
} from "@/data/clubs";
import { cta } from "@/data/site";
import { MarkX } from "@/components/ui/CourtArt";
import Testimonials from "@/components/sections/Testimonials";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "למועדונים — שכבת Player Development מוכנה",
  description:
    "BALLERZ מאפשרת למועדון כדורסל להוסיף שכבת פיתוח שחקנים מקצועית — צוות מאמנים, מתודולוגיה, תכנית שנתית ותפעול מלא — בלי להקים מחלקה חדשה.",
  alternates: { canonical: "/clubs" },
};

export default function ClubsPage() {
  return (
    <>
      <PageHero
        eyebrow="FOR CLUBS"
        meta="PARTNERSHIP"
        titleEn={
          <>
            BUILD A PLAYER
            <br />
            DEVELOPMENT SYSTEM.
            <br />
            <span className="text-flare">WITHOUT BUILDING IT YOURSELF.</span>
          </>
        }
        lead="המועדון בונה קבוצות, ליגה, תרבות ומסגרת. BALLERZ בונה את שכבת הפיתוח האישי שיושבת מעל זה — ומפעילה אותה מקצה לקצה."
      >
        <Button href={cta.clubsTalk.href} variant="flare" size="lg">
          {cta.clubsTalk.label}
        </Button>
      </PageHero>

      <Ticker
        items={["PLAYER DEVELOPMENT", "ONE STANDARD", "COACHING TEAM", "YEARLY PROGRAM", "OPERATIONS"]}
        tone="flare"
      />

      {/* 01 — THE GAP */}
      <Section index="01" label="THE GAP" meta="WHERE CLUBS RUN OUT OF ROOM" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h2 md:col-span-6" data-reveal>
            TEAM PRACTICE CAN&apos;T CARRY
            <br />
            EVERY PLAYER&apos;S DEVELOPMENT<span className="text-flare">.</span>
          </h2>
          <div className="body-he space-y-4 text-bone/75 md:col-span-6" data-reveal style={delay(120)}>
            <p className="lead text-bone">
              אימון קבוצתי חייב לשרת את הקבוצה. זה הייעוד שלו.
            </p>
            <p>
              אבל בתוך אותה קבוצה יש שחקן שצריך לעבוד על כדרור, שחקן שצריך לעבוד על סיומות,
              ושחקן שהיכולת שלו כבר לא מתפתחת מהמסגרת הקיימת.
            </p>
            <p className="text-asphalt-2">
              התוצאה: שחקנים מחפשים מענה אישי מחוץ למועדון — או לא מקבלים אותו בכלל.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-asphalt/30 pt-10">
          <p className="spec text-asphalt-2">WHAT A CLUB WOULD OTHERWISE HAVE TO BUILD</p>
          <ul className="mt-6 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {clubNotNeeded.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-asphalt/20 py-3"
                data-reveal
                style={delay(50 * i)}
              >
                <MarkX className="h-3.5 w-3.5 shrink-0 text-flare" />
                <span className="body-he text-[0.95rem] text-bone/55 line-through decoration-asphalt/60">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 02 — THE SOLUTION */}
      <Section index="02" label="THE SOLUTION" meta="ONE LAYER, FULLY OPERATED" tone="bone">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <h2 className="display t-h1 text-ink" data-reveal>
              WE ADD THE LAYER.
              <br />
              YOU KEEP THE CLUB<span className="text-flare">.</span>
            </h2>
            <p className="body-he lead mt-6 max-w-xl text-ink/75" data-reveal style={delay(120)}>
              BALLERZ מוסיפה למועדון שכבת Player Development מקצועית — עם צוות מאמנים
              שהוכשר לשיטה, תכנית שנתית, מתודולוגיה כתובה ותפעול מלא.
            </p>
            <p className="body-he mt-4 max-w-xl text-ink/60" data-reveal style={delay(180)}>
              המועדון לא מנהל את זה. המועדון מקבל את זה.
            </p>

            <div className="mt-10 flex flex-wrap gap-4" data-reveal>
              <Button href={cta.clubsTalk.href} variant="flare" size="lg">
                {cta.clubsTalk.label}
              </Button>
            </div>
          </div>

          <div className="md:col-span-5" data-reveal style={delay(160)}>
            <MediaSlot
              slot="COACH CORRECTING DETAIL · B/W · 4:5"
              src="/media/club-coach.jpg"
              alt="מאמן BALLERZ מתקן פרט טכני לשחקן"
              index="C1"
              ratio="4/5"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* 03 — WHAT BALLERZ PROVIDES */}
      <Section index="03" label="WHAT BALLERZ PROVIDES" meta="06 COMPONENTS" tone="ink2">
        <h2 className="display t-h2 max-w-3xl" data-reveal>
          WHAT WE BRING TO THE CLUB<span className="text-flare">.</span>
        </h2>

        <ul className="mt-12 grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-3">
          {clubProvides.map((p, i) => (
            <li
              key={p.en}
              className="group bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink"
              data-reveal
              style={delay(55 * i)}
            >
              <span className="spec text-flare">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-8 text-[1.35rem] leading-none text-bone md:text-[1.6rem]">
                {p.en}
              </h3>
              <p className="body-he mt-2 text-sm text-bone/60">{p.he}</p>
            </li>
          ))}
        </ul>

        {/* מודולים תפעוליים */}
        <div className="mt-16">
          <div className="flex items-baseline justify-between border-b border-asphalt/35 pb-4">
            <span className="spec text-bone">OPERATING MODULES</span>
            <span className="spec spec-sm text-asphalt-2">07</span>
          </div>
          <ul>
            {clubModules.map((m, i) => (
              <li key={m.index} data-reveal style={delay(40 * i)}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-b border-asphalt/20 py-5 md:grid-cols-[3rem_16rem_1fr] md:gap-x-8">
                  <span className="spec text-flare">{m.index}</span>
                  <h3 className="display display-wide text-[1.15rem] leading-none text-bone md:text-[1.35rem]">
                    {m.titleEn}
                  </h3>
                  <p className="body-he col-span-2 text-sm text-bone/60 md:col-span-1">
                    {m.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 04 — WHAT THE CLUB GETS */}
      <Section index="04" label="WHAT THE CLUB GETS" meta="RETURN" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h1 md:col-span-6" data-reveal>
            WHAT THE CLUB
            <br />
            GETS BACK<span className="text-flare">.</span>
          </h2>
          <p className="body-he text-bone/70 md:col-span-6 md:pt-3" data-reveal style={delay(120)}>
            שכבת פיתוח שחקנים היא לא רק ערך מקצועי. היא גם כלי שימור, ערך מוסף לשחקנים
            קיימים, וסיבה נוספת להורים לבחור במועדון שלכם.
          </p>
        </div>

        <ul className="mt-12">
          {clubGets.map((g, i) => (
            <li key={g.en} data-reveal style={delay(60 * i)}>
              <div className="group flex items-baseline gap-5 border-b border-asphalt/30 py-6 first:border-t first:border-asphalt/30 md:gap-10">
                <span className="spec w-8 shrink-0 text-asphalt-2 transition-colors duration-500 group-hover:text-flare">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display t-h3 w-[48%] shrink-0 leading-none text-bone transition-colors duration-500 group-hover:text-flare md:w-[40%]">
                  {g.en}
                </h3>
                <p className="body-he text-sm text-bone/65">{g.he}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* המלצות */}
      <Section index="05" label="WHAT THEY SAY" meta="REAL MESSAGES" tone="ink">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h2 md:col-span-6" data-reveal>
            PEOPLE WHO KNOW
            <br />
            THE GAME<span className="text-flare">.</span>
          </h2>
          <p className="body-he text-bone/70 md:col-span-6 md:pt-3" data-reveal style={delay(120)}>
            הודעות אמיתיות ממאמנים, מובילי מחנות והורים. אנחנו לא מנסחים המלצות בשם
            אנשים.
          </p>
        </div>
        <div className="mt-12">
          <Testimonials audience="clubs" />
        </div>
      </Section>

      {/* 06 — HOW WE WORK TOGETHER */}
      <Section index="06" label="HOW WE CAN WORK TOGETHER" meta="03 MODELS" tone="ink2">
        <h2 className="display t-h2 max-w-3xl" data-reveal>
          THREE WAYS TO RUN IT<span className="text-flare">.</span>
        </h2>
        <p className="body-he mt-5 max-w-xl text-bone/70" data-reveal style={delay(100)}>
          המבנה נקבע לפי המועדון — הגודל, המבנה המקצועי והמטרות. לא כל מועדון צריך את
          אותו הסכם.
        </p>

        <ul className="mt-12 grid gap-px bg-asphalt/30 md:grid-cols-3">
          {partnershipModels.map((m, i) => (
            <li
              key={m.index}
              className="group flex flex-col justify-between bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink md:p-9"
              data-reveal
              style={delay(80 * i)}
            >
              <div>
                <span className="spec text-flare">MODEL {m.index}</span>
                <h3 className="display mt-8 text-[1.4rem] leading-[0.95] text-bone md:text-[1.75rem]">
                  {m.titleEn}
                </h3>
                <p className="mt-3 text-sm font-medium text-asphalt-2">{m.titleHe}</p>
                <p className="body-he mt-4 text-sm text-bone/65">{m.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 border border-asphalt/40 bg-ink p-8 md:p-12" data-reveal>
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <span className="spec text-flare">NEXT STEP</span>
              <h3 className="display t-h2 mt-4 text-bone">
                LET&apos;S TALK ABOUT YOUR CLUB<span className="text-flare">.</span>
              </h3>
              <p className="body-he mt-4 max-w-xl text-bone/70">
                שיחה ראשונה של 20 דקות: מה קיים אצלכם היום, מה חסר, ואיך מרכז BALLERZ
                יכול להיראות במועדון שלכם.
              </p>
            </div>
            <div className="md:col-span-4 md:text-end">
              <Button href={cta.clubsTalk.href} variant="flare" size="lg">
                {cta.clubsTalk.label}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
