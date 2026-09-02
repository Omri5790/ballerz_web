import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { intentPillars } from "@/data/system";
import { PlayDiagram, MeasureBar } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export default function Intent() {
  return (
    <Section id="intent" index="11" label="BUILT WITH INTENT" meta="METHOD · DETAIL · RESEARCH" tone="ink2">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <h2 className="display t-h1" data-reveal>
            BUILT WITH
            <br />
            INTENT<span className="text-flare">.</span>
          </h2>
          <p className="body-he mt-6 max-w-sm text-bone/70" data-reveal style={delay(120)}>
            BALLERZ אינה אוסף אקראי של תרגילים. כל תוכן באימון קיים מסיבה, יושב בתוך
            בלוק עבודה, ונמדד לפי שאלה אחת: האם זה עובר למשחק.
          </p>

          {/* פאנל דיאגרמה */}
          <div className="mt-10" data-reveal style={delay(160)}>
            <MediaSlot
              slot="TRAINING NOTES · PLAYER LOG · 4:5"
              src="/media/intent-notes.jpg"
              alt="שחקן רושם הערות אימון"
              index="I1"
              ratio="4/5"
              sizes="(max-width: 768px) 100vw, 32vw"
            />
          </div>

          <div className="mt-px border border-asphalt/40 bg-ink p-5" data-reveal style={delay(200)}>
            <div className="flex items-center justify-between border-b border-asphalt/30 pb-3">
              <span className="spec spec-sm text-asphalt-2">TRAINING DESIGN</span>
              <span className="spec spec-sm text-flare">FIG. 01</span>
            </div>
            <PlayDiagram className="mt-4 h-auto w-full text-asphalt-2" />
            <MeasureBar className="mt-4 text-asphalt/60" />
          </div>
        </div>

        <ul className="grid gap-px self-start bg-asphalt/30 sm:grid-cols-2 md:col-span-7">
          {intentPillars.map((p, i) => (
            <li
              key={p.en}
              className="group bg-ink-2 p-6 transition-colors duration-500 hover:bg-ink md:p-8"
              data-reveal
              style={delay(60 * i)}
            >
              <div className="flex items-baseline justify-between">
                <span className="spec text-flare">{String(i + 1).padStart(2, "0")}</span>
                <span className="spec spec-sm text-asphalt-2">{p.spec}</span>
              </div>
              <h3 className="display mt-8 text-[1.25rem] leading-[0.95] text-bone md:text-[1.55rem]">
                {p.en}
              </h3>
              <p className="body-he mt-2 text-sm text-bone/60">{p.he}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
