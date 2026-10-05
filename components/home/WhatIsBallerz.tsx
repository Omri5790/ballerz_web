import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { PlayDiagram } from "@/components/ui/CourtArt";
import { whatIsBallerz } from "@/data/system";
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

      {/* ממה המערכת מורכבת */}
      <ul className="mt-12 grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
        {whatIsBallerz.parts.map((p, i) => (
          <li
            key={p.en}
            className="group bg-ink-2 p-6 transition-colors duration-500 hover:bg-ink md:p-7"
            data-reveal
            style={delay(50 * i)}
          >
            <span className="spec text-flare">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="display mt-6 text-[1.25rem] leading-[0.95] text-bone md:text-[1.5rem]">
              {p.en}
            </h3>
            <p className="label-he mt-2 text-bone/85">{p.he}</p>
            <p className="body-he mt-1 text-sm text-asphalt-2">{p.line}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 md:mt-16" data-reveal style={delay(140)}>
        <MediaSlot
          slot="PLAYER ATTACKING A DEFENDER · B/W · 21:9"
          src="/media/gap-drive.jpg"
          alt="שחקן תוקף מגן באימון BALLERZ"
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
