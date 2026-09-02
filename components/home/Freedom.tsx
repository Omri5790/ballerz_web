import Section, { Container, SectionIndex } from "@/components/ui/Section";
import { freedomPrinciples } from "@/data/system";
import { HalfCourt } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export default function Freedom() {
  return (
    <Section id="freedom" full tone="ink2" className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      <HalfCourt
        className="pointer-events-none absolute -top-1/4 end-[-12%] h-[150%] w-auto text-asphalt/15"
      />

      <Container className="relative">
        <SectionIndex index="06" label="FREEDOM" meta="BRAND CORE" />

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="display t-h1" data-reveal>
              BUILD YOUR GAME<span className="text-flare">.</span>
            </h2>
            <p className="mt-1" data-reveal style={delay(160)} aria-hidden>
              <span className="display t-h1 inline-block text-asphalt/55 line-through decoration-flare/70 decoration-[3px]">
                COPY THE GAME.
              </span>
            </p>
            <p className="sr-only">אנחנו לא מלמדים להעתיק את המשחק אלא לבנות משחק אישי.</p>
          </div>

          <div className="body-he space-y-4 text-bone/75 md:col-span-5 md:pt-4" data-reveal style={delay(220)}>
            <p className="lead text-bone">אין דרך אחת נכונה לשחק.</p>
            <p>
              אנחנו מלמדים כלים, עקרונות ופתרונות — כדי שהשחקן יוכל לפתח משחק שמתאים לו,
              לגוף שלו ולדרך שבה הוא רואה את המגרש.
            </p>
            <p className="text-asphalt-2">
              המבחן הוא לא כמה תרגילים הוא מכיר. המבחן הוא מה הוא עושה כשמישהו עומד מולו.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {freedomPrinciples.map((p, i) => (
            <li
              key={p.en}
              className="group relative bg-ink-2 p-6 transition-colors duration-500 hover:bg-flare md:p-8"
              data-reveal
              style={delay(70 * i)}
            >
              <span className="spec text-flare transition-colors duration-500 group-hover:text-ink/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-6 text-[1.3rem] leading-[0.95] text-bone transition-colors duration-500 group-hover:text-ink md:text-[1.6rem]">
                {p.en}
              </h3>
              <p className="body-he mt-2 text-sm text-bone/60 transition-colors duration-500 group-hover:text-ink/75">
                {p.he}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
