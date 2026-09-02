import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import ReadyToBuild from "@/components/sections/ReadyToBuild";
import Ticker from "@/components/ui/Ticker";
import { founder } from "@/data/founder";
import { MeasureBar } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "מי אנחנו — מאחורי המערכת",
  description:
    "BALLERZ נבנתה כמערכת לפיתוח שחקני כדורסל. עמרי ליברטי — מייסד ואחראי פיתוח שחקנים: מאמן כדורסל, בוגר מדעי הנתונים ועוסק במחקר ופיתוח בכדורסל.",
  alternates: { canonical: "/about" },
};

const scale = [
  { en: "MANY CITIES", he: "BALLERZ יכולה לפעול בכמה ערים במקביל." },
  { en: "MANY CLUBS", he: "BALLERZ יכולה לעבוד עם כמה מועדונים." },
  { en: "MANY COACHES", he: "BALLERZ יכולה להיות מופעלת על ידי כמה מאמנים." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        meta="SYSTEM FIRST"
        titleEn={
          <>
            BEHIND
            <br />
            THE SYSTEM<span className="text-flare">.</span>
          </>
        }
        lead="BALLERZ לא נבנתה סביב מאמן אחד. היא נבנתה כמערכת — כדי שהיא תוכל לפעול ביותר ממקום אחד, עם יותר ממאמן אחד, באותו סטנדרט."
      />

      {/* 01 — למה */}
      <Section index="01" label="WHY IT EXISTS" meta="ORIGIN" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h2 md:col-span-5" data-reveal>
            THE MISSING
            <br />
            LAYER<span className="text-flare">.</span>
          </h2>
          <div className="body-he space-y-5 text-bone/80 md:col-span-7" data-reveal style={delay(120)}>
            <p className="lead text-bone">{founder.statement}</p>
            <p className="text-bone/65">
              אימון קבוצתי בונה קבוצה. אימון יכולת בודד נותן שיפור נקודתי. מה שחסר הוא
              תהליך: תכנית, חזרתיות, תחרות, ומעקב לאורך עונה.
            </p>
          </div>
        </div>
      </Section>

      <Ticker
        items={["SYSTEM OVER PERSON", "TOOLS OVER TEMPLATES", "TRANSFER OVER DRILLS"]}
        tone="ink"
        reverse
      />

      {/* 02 — המייסד */}
      <Section index="02" label="FOUNDER" meta="CREDIBILITY LAYER" tone="bone">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4" data-reveal>
            <MediaSlot
              slot="FOUNDER PORTRAIT · B/W · ON COURT · 4:5"
              src={founder.portrait}
              alt={founder.nameHe}
              index="F1"
              ratio="4/5"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            <div className="mt-px">
              <MediaSlot
                slot="FOUNDER · SECOND FRAME · 3:4"
                src={founder.portraitAlt}
                alt={founder.nameHe}
                index="F2"
                ratio="4/5"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
            <div className="mt-px border border-ink/15 p-5">
              <span className="spec spec-sm text-ink/45">ROLE</span>
              <p className="mt-2 text-sm text-ink/80">{founder.roleHe}</p>
              <MeasureBar className="mt-5 text-ink/25" />
            </div>
          </div>

          <div className="md:col-span-8" data-reveal style={delay(140)}>
            <h2 className="display t-h1 text-ink">{founder.nameEn}</h2>
            <p className="spec mt-3 text-flare">{founder.role}</p>
            <p className="body-he mt-1 text-sm text-ink/55">{founder.nameHe}</p>

            <div className="body-he mt-8 max-w-2xl space-y-4 text-ink/75">
              {founder.bio.map((p, i) => (
                <p key={i} className={i === 0 ? "lead text-ink" : undefined}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-10 border-t border-ink/15 pt-8 sm:grid-cols-2">
              <div>
                <span className="spec spec-sm text-ink/45">BACKGROUND</span>
                <ul className="mt-4 space-y-3">
                  {founder.credentials.map((c) => (
                    <li key={c.en} className="flex items-baseline gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-flare" aria-hidden />
                      <span>
                        <span className="spec spec-sm block text-ink/45">{c.en}</span>
                        <span className="body-he text-sm text-ink/80">{c.he}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="spec spec-sm text-ink/45">AREAS OF EXPERTISE</span>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {founder.expertise.map((e) => (
                    <li
                      key={e.en}
                      className="border border-ink/20 px-3 py-2 text-[0.78rem] text-ink/70"
                    >
                      {e.he}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-ink">
        <MediaSlot
          slot="COACHING THE STANDARD · B/W · 16:9"
          src="/media/standard-huddle.jpg"
          alt="מאמן BALLERZ עם קבוצת שחקנים"
          index="A1"
          ratio="21/9"
          sizes="100vw"
        />
      </div>

      {/* 03 — עקרונות */}
      <Section index="03" label="HOW WE THINK" meta="03 PRINCIPLES" tone="ink2">
        <h2 className="display t-h2 max-w-3xl" data-reveal>
          THE RULES WE BUILT IT ON<span className="text-flare">.</span>
        </h2>

        <ul className="mt-12 grid gap-px bg-asphalt/30 md:grid-cols-3">
          {founder.principles.map((p, i) => (
            <li
              key={p.en}
              className="group bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink md:p-9"
              data-reveal
              style={delay(80 * i)}
            >
              <span className="spec text-flare">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-8 text-[1.35rem] leading-[0.95] text-bone md:text-[1.7rem]">
                {p.en}
              </h3>
              <p className="mt-3 text-sm font-medium text-asphalt-2">{p.he}</p>
              <p className="body-he mt-4 text-sm text-bone/65">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 04 — מערכת לפני אדם */}
      <Section index="04" label="SCALE" meta="BRAND HIERARCHY" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h1 md:col-span-6" data-reveal>
            BALLERZ IS
            <br />
            THE SYSTEM<span className="text-flare">.</span>
          </h2>
          <p className="body-he text-bone/70 md:col-span-6 md:pt-3" data-reveal style={delay(120)}>
            הגיבור של המערכת הזאת הוא לא מאמן, ולא מועדון מסוים. הוא השיטה, השחקנים,
            והתרבות שנבנית סביבם. זו הסיבה שהכל כתוב, מוגדר וניתן להעברה.
          </p>
        </div>

        <ul className="mt-12 grid gap-px bg-asphalt/30 md:grid-cols-3">
          {scale.map((s, i) => (
            <li key={s.en} className="bg-ink-2 p-7" data-reveal style={delay(70 * i)}>
              <span className="spec text-asphalt-2">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-6 text-[1.3rem] leading-none text-bone">{s.en}</h3>
              <p className="body-he mt-3 text-sm text-bone/65">{s.he}</p>
            </li>
          ))}
        </ul>
      </Section>

      <ReadyToBuild />
    </>
  );
}
