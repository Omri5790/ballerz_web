import Section from "@/components/ui/Section";
import { playerPath, playerPathCopy } from "@/data/playerPath";
import { MeasureBar } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

/**
 * PLAYER PATH — סולם, לא כרטיסים.
 * כל שלב רחב יותר מהקודם: המפה נבנית מלמטה למעלה.
 */
export default function PlayerPath() {
  return (
    <Section id="path" index="04" label={playerPathCopy.eyebrow} meta="A MAP — NOT A LABEL" tone="bone">
      <div className="grid gap-8 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h1 text-ink" data-reveal>
            CURRENT LEVEL
            <br />
            <span className="text-flare">→</span> NEXT LEVEL<span className="text-flare">.</span>
          </h2>
          <p className="display-he t-h2-he mt-5 text-ink" data-reveal style={delay(100)}>
            {playerPathCopy.headlineHe}
          </p>
        </div>
        <div className="md:col-span-5 md:pt-3" data-reveal style={delay(160)}>
          <p className="body-he lead text-ink/75">{playerPathCopy.body}</p>
          <MeasureBar className="mt-7 max-w-[260px] text-ink/30" />
        </div>
      </div>

      {/* הסולם */}
      <ol className="mt-12 md:mt-16">
        {playerPath.map((s, i) => {
          // הרוחב גדל עם השלב — הסולם נראה כמו סולם
          const widths = ["sm:w-[76%]", "sm:w-[84%]", "sm:w-[92%]", "sm:w-full"];
          return (
            <li
              key={s.index}
              className={`relative ${widths[i]} ${i > 0 ? "mt-px" : ""}`}
              data-reveal
              style={delay(100 * i)}
            >
              <div className="group grid gap-4 border border-ink/15 bg-bone p-6 transition-colors duration-500 hover:border-ink hover:bg-ink md:grid-cols-12 md:items-center md:gap-8 md:p-7">
                <div className="flex items-baseline gap-4 md:col-span-5">
                  <span className="spec shrink-0 text-flare">{s.index}</span>
                  <div className="min-w-0">
                    <h3 className="display t-h3 leading-none text-ink transition-colors duration-500 group-hover:text-bone">
                      {s.en}
                    </h3>
                    <p className="label-he mt-2 text-flare">{s.he}</p>
                  </div>
                </div>

                <p className="body-he text-[0.95rem] text-ink/70 transition-colors duration-500 group-hover:text-bone/80 md:col-span-4">
                  {s.state}
                </p>

                <p className="body-he border-t border-ink/12 pt-3 text-[0.92rem] text-ink/55 transition-colors duration-500 group-hover:border-bone/20 group-hover:text-bone/60 md:col-span-3 md:border-0 md:border-s md:ps-6 md:pt-0">
                  <span className="spec spec-sm mb-1.5 block text-ink/40 transition-colors group-hover:text-flare">
                    THE WORK
                  </span>
                  {s.focus}
                </p>
              </div>

              {/* חץ בין שלבים */}
              {i < playerPath.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -bottom-px start-8 z-10 block h-px w-10 bg-flare"
                />
              )}
            </li>
          );
        })}
      </ol>

      <p className="body-he mt-8 text-sm text-ink/50" data-reveal>
        {playerPathCopy.note}
      </p>
    </Section>
  );
}
