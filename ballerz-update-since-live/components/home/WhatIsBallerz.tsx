import Link from "next/link";
import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { PlayDiagram } from "@/components/ui/CourtArt";
import { whatIsBallerz } from "@/data/system";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

export default function WhatIsBallerz() {
  return (
    <Section id="what" index="03" label="WHAT IS BALLERZ" meta="THE LAYER THAT WAS MISSING">
      <PlayDiagram className="pointer-events-none absolute -top-6 end-0 hidden h-64 w-auto text-asphalt/20 lg:block" />

      <div className="grid gap-9 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h1" data-reveal>
            {whatIsBallerz.headlineEn[0]}
            <br />
            <span className="text-flare">{whatIsBallerz.headlineEn[1]}</span>
          </h2>
          <p className="display-he t-h2-he mt-5 text-bone" data-reveal style={delay(100)}>
            {whatIsBallerz.headlineHe}
          </p>
        </div>

        <div
          className="body-he space-y-4 text-bone/75 md:col-span-5 md:pt-3"
          data-reveal
          style={delay(160)}
        >
          <p className="lead text-bone">{whatIsBallerz.lead}</p>
          <p>{whatIsBallerz.body}</p>
        </div>
      </div>

      {/* ממה המערכת מורכבת — כרטיסי תמונה, לא כרטיסי טקסט */}
      <ul className="mt-12 grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
        {whatIsBallerz.parts.map((p, i) => (
          <li key={p.en} className="group bg-ink-2" data-reveal style={delay(50 * i)}>
            <div className="relative overflow-hidden">
              <MediaSlot
                slot={`${p.en} · B/W · 4:5`}
                src={p.image}
                alt={p.he}
                index={`S${i + 1}`}
                ratio="4/5"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                className="transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span className="spec text-flare">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-3 text-[1.25rem] leading-[0.95] text-bone md:text-[1.4rem]">
                  {p.en}
                </h3>
                <p className="label-he mt-1.5 text-bone/85">{p.he}</p>
              </div>
            </div>
            <p className="body-he p-5 pt-4 text-sm text-asphalt-2 md:p-6 md:pt-4">{p.line}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 md:mt-16" data-reveal style={delay(140)}>
        <MediaSlot
          slot="CONTESTED SHOT · B/W · 21:9"
          src="/media/play-contest.jpg"
          alt="שחקן קולע מעל יד של מגן"
          index="G1"
          ratio="21/9"
          sizes="100vw"
        />
      </div>

      {/* דיאגרמת השכבה */}
      <div className="mt-14 md:mt-20" data-reveal style={delay(180)}>
        <LayerBand
          en="TEAM PRACTICE"
          he="בונה את הקבוצה. יכולת אישית מקבלת מה שנשאר מהזמן."
          index="A"
        />

        <div className="relative my-px">
          <div className="tape flex flex-col gap-2 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
            <div className="flex items-center gap-4">
              <span className="spec text-ink/60">B</span>
              <span className="display display-wide text-[1.25rem] leading-none text-ink md:text-[2rem]">
                BALLERZ — PLAYER DEVELOPMENT LAYER
              </span>
            </div>
            <span className="body-he text-sm text-ink/80">
              אימון, עבודה עצמאית, מעקב ומדידה.
            </span>
          </div>
        </div>

        <LayerBand
          en="THE PLAYER"
          he="השחקן שהוא רוצה להיות — עם משחק אישי משלו."
          index="C"
        />
      </div>

      {/* הפירוט המלא של התכנית יושב ב-/method — דף הבית לא חוזר עליו */}
      <Link
        href={cta.program.href}
        className="group mt-px flex items-center justify-between gap-6 border border-asphalt/40 bg-ink-2 px-6 py-6 transition-colors duration-500 hover:border-flare hover:bg-ink md:px-8"
        data-reveal
      >
        <span className="min-w-0">
          <span className="spec block text-flare">THE PROGRAM · 08 CHAPTERS</span>
          <span className="display-he mt-2 block text-[1.05rem] text-bone transition-colors duration-500 group-hover:text-flare md:text-[1.25rem]">
            השיטה המלאה — תחומי הליבה, העבודה העצמאית והמעקב
          </span>
        </span>
        <svg
          aria-hidden
          viewBox="0 0 24 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-3 w-8 shrink-0 text-flare transition-transform duration-500 group-hover:-translate-x-2"
        >
          <path d="M24 6H1M7 1L1 6l6 5" />
        </svg>
      </Link>
    </Section>
  );
}

function LayerBand({ en, he, index }: { en: string; he: string; index: string }) {
  return (
    <div className="flex flex-col gap-2 border border-asphalt/40 bg-ink-2 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
      <div className="flex items-center gap-4">
        <span className="spec text-asphalt-2">{index}</span>
        <span className="display display-wide text-[1.25rem] leading-none text-bone/85 md:text-[2rem]">
          {en}
        </span>
      </div>
      <span className="body-he text-sm text-asphalt-2">{he}</span>
    </div>
  );
}
