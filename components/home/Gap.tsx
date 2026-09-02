import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { PlayDiagram } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export default function Gap() {
  return (
    <Section id="gap" index="02" label="THE GAP" meta="WHY BALLERZ EXISTS" className="relative">
      <PlayDiagram
        className="pointer-events-none absolute -top-6 end-0 hidden h-64 w-auto text-asphalt/20 lg:block"
      />

      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <h2 className="display t-h1 md:col-span-7" data-reveal>
          TEAM PRACTICE
          <br />
          BUILDS THE TEAM.
          <br />
          <span className="text-flare">WE BUILD THE PLAYER.</span>
        </h2>

        <div className="body-he space-y-4 text-bone/75 md:col-span-5 md:pt-3" data-reveal style={delay(120)}>
          <p className="lead">אימון קבוצתי נועד לבנות קבוצה.</p>
          <p>אבל לכל שחקן יש יכולות, צרכים ומטרות שונות.</p>
          <p>
            BALLERZ יוצרת את שכבת הפיתוח האישית שבין האימון הקבוצתי לבין השחקן שהוא רוצה
            להפוך להיות.
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-16" data-reveal style={delay(140)}>
        <MediaSlot
          slot="PLAYER ATTACKING A DEFENDER · B/W · 16:9"
          src="/media/gap-drive.jpg"
          alt="שחקן תוקף מגן באימון BALLERZ"
          index="G1"
          ratio="21/9"
          sizes="100vw"
        />
      </div>

      {/* דיאגרמת השכבה */}
      <div className="mt-16 md:mt-24" data-reveal style={delay(180)}>
        <LayerBand
          en="TEAM PRACTICE"
          he="בונה את הקבוצה. יכולת אישית מקבלת מה שנשאר מהזמן."
          index="A"
        />

        <div className="relative my-px">
          <div className="tape flex flex-col gap-2 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
            <div className="flex items-center gap-4">
              <span className="spec text-ink/60">B</span>
              <span className="display display-wide text-[1.4rem] leading-none text-ink md:text-[2rem]">
                BALLERZ — PLAYER DEVELOPMENT LAYER
              </span>
            </div>
            <span className="body-he text-sm text-ink/80">
              השכבה שחסרה. אימון, יישום, תחרות ומעקב.
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
        <span className="display display-wide text-[1.4rem] leading-none text-bone/85 md:text-[2rem]">
          {en}
        </span>
      </div>
      <span className="body-he text-sm text-asphalt-2">{he}</span>
    </div>
  );
}
