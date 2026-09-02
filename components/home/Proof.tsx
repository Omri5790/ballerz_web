import Section from "@/components/ui/Section";
import Testimonials from "@/components/sections/Testimonials";
import { proofItems, proofCopy } from "@/data/proof";
import { testimonialsFor } from "@/data/testimonials";
import { delay } from "@/lib/cn";

export default function Proof() {
  const quotes = testimonialsFor("players");
  const reserved = proofItems.filter((p) => !p.published);

  return (
    <Section id="proof" index="10" label="PROOF" meta="REAL MESSAGES" tone="ink">
      <div className="grid gap-8 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h1" data-reveal>
            THE WORK SHOWS<span className="text-flare">.</span>
          </h2>
          <p
            className="display display-wide mt-2 text-[1.1rem] text-asphalt-2 md:text-[1.5rem]"
            data-reveal
            style={delay(100)}
          >
            {proofCopy.subEn}
          </p>
        </div>
        <p className="body-he text-bone/70 md:col-span-5 md:pt-3" data-reveal style={delay(160)}>
          כל מה שכתוב כאן נאמר על ידי הורים ומאמנים אמיתיים, בהודעות אמיתיות. לא כתבנו
          אף מילה בשמם.
        </p>
      </div>

      <div className="mt-12 md:mt-16">
        <Testimonials audience="players" />
      </div>

      {/* מה שעוד לא נכנס — שלד מוכן, בלי המצאות */}
      {reserved.length > 0 && (
        <div className="mt-14 border-t border-asphalt/30 pt-8" data-reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="spec text-asphalt-2">STILL BUILDING</span>
            <span className="spec spec-sm text-asphalt/70">
              {String(quotes.length).padStart(2, "0")} PUBLISHED
            </span>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {reserved.map((p) => (
              <li key={p.id} className="flex items-baseline gap-3">
                <span className="h-1.5 w-1.5 shrink-0 bg-asphalt" aria-hidden />
                <span className="spec spec-sm text-asphalt/80">{p.kindEn}</span>
              </li>
            ))}
          </ul>
          <p className="body-he mt-4 max-w-xl text-sm text-asphalt-2">
            הקטגוריות האלה ימולאו מתוך העונה — קליפים, השוואות לפני ואחרי ווידאו של
            שחקנים. לא נכניס לשם דבר שלא קרה.
          </p>
        </div>
      )}
    </Section>
  );
}
