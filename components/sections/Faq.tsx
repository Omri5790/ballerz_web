import Section from "@/components/ui/Section";
import { faq } from "@/data/faq";
import { delay } from "@/lib/cn";

/** FAQ נטיבי עם <details> — נגיש, בלי JS, נפתח גם כש-JS כבוי */
export default function Faq({ index = "13" }: { index?: string }) {
  return (
    <Section id="faq" index={index} label="FAQ" meta="STRAIGHT ANSWERS" tone="ink">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <h2 className="display t-h2" data-reveal>
            QUESTIONS<span className="text-flare">.</span>
          </h2>
          <p className="display-he t-h2-he mt-4 text-bone" data-reveal style={delay(100)}>
            שאלות ותשובות
          </p>
          <p className="body-he mt-5 text-sm text-asphalt-2" data-reveal style={delay(140)}>
            אם משהו לא מופיע כאן — שאלו אותנו בוואטסאפ. נענה ישר.
          </p>
        </div>

        <div className="md:col-span-8">
          {faq.map((item, i) => (
            <details
              key={item.id}
              className="faq-item group border-b border-asphalt/30 first:border-t first:border-asphalt/30"
              open={item.open}
              data-reveal
              style={delay(40 * i)}
            >
              <summary className="flex items-center gap-4 py-5 md:gap-6">
                <span className="spec shrink-0 text-asphalt-2 transition-colors group-open:text-flare">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-he min-w-0 flex-1 text-[1.02rem] text-bone transition-colors group-hover:text-flare md:text-[1.15rem]">
                  {item.q}
                </h3>
                <span
                  aria-hidden
                  className="relative h-6 w-6 shrink-0 border border-asphalt/45 text-flare"
                >
                  <span className="absolute inset-x-[25%] top-1/2 h-px -translate-y-1/2 bg-current" />
                  <span className="faq-bar-v absolute inset-y-[25%] start-1/2 w-px bg-current" />
                </span>
              </summary>
              <div className="body-he space-y-3 pb-7 pe-2 ps-[2.6rem] text-[0.95rem] text-bone/75 md:ps-[3.4rem]">
                {item.a.map((p, pi) => (
                  <p key={pi} className={pi === 0 ? "text-bone/90" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
