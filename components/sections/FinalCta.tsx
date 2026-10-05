import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { cta, site, whatsappLink } from "@/data/site";
import { combine } from "@/data/combine";
import { centers } from "@/data/centers";
import { delay } from "@/lib/cn";

export default function FinalCta() {
  const wa = whatsappLink("היי, הגעתי מהאתר של BALLERZ ואני רוצה לשמוע על התכנית 🏀");

  return (
    <section id="ready" className="relative overflow-hidden bg-ink pt-20 md:pt-28">
      <div className="grid-lab-lg absolute inset-0 opacity-70" aria-hidden />

      <Container className="relative">
        <div className="flex items-center gap-4 pb-8">
          <span className="h-2 w-2 bg-flare" aria-hidden />
          <span className="spec text-asphalt-2">NEXT STEP</span>
          <span className="h-px flex-1 bg-asphalt/35" aria-hidden />
          <span className="spec spec-sm hidden text-asphalt-2 md:inline">
            {centers.map((c) => c.cityEn).join(" · ")}
          </span>
        </div>

        <h2 className="display t-h1 max-w-4xl" data-reveal>
          READY FOR THE
          <br />
          NEXT LEVEL<span className="text-flare">?</span>
        </h2>
        <p className="display-he t-h2-he mt-5 max-w-2xl text-bone" data-reveal style={delay(100)}>
          רוצה לדעת מה השלב הבא שלך?
        </p>
        <p className="body-he mt-4 max-w-xl text-bone/70" data-reveal style={delay(160)}>
          מתחילים ב-Combine: יום אחד של מדידה ואבחון, ואחריו תמונה ברורה של מה לעבוד עליו.
        </p>
      </Container>

      <div className="relative mt-12 grid gap-px bg-asphalt/35 md:mt-16 md:grid-cols-2">
        {/* ראשי */}
        <Link
          href={cta.combine.href}
          className="group relative flex min-h-[17rem] flex-col justify-between overflow-hidden bg-flare p-8 text-ink md:min-h-[21rem] md:p-12"
          data-reveal
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-[left] scale-x-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
          />
          <span className="relative z-10">
            <span className="spec block text-ink/60 transition-colors duration-500 group-hover:text-flare">
              STEP 01 · THE COMBINE
            </span>
            <span className="display t-h2 mt-6 block text-ink transition-colors duration-500 group-hover:text-bone">
              GET YOUR
              <br />
              BASELINE
            </span>
            <span className="body-he mt-4 block max-w-sm text-[0.95rem] text-ink/75 transition-colors duration-500 group-hover:text-bone/75">
              מדידות, בדיקות Skill, פרופיל שחקן ומשחק. יוצאים עם Player Map.
            </span>
            <span className="spec mt-4 block text-ink/60 transition-colors duration-500 group-hover:text-flare">
              {combine.date} · {combine.location}
            </span>
          </span>
          <span className="relative z-10 mt-8 inline-flex items-center gap-4 border-b border-ink/30 pb-3 text-sm font-medium text-ink transition-colors duration-500 group-hover:border-flare group-hover:text-flare">
            {cta.combine.label}
            <Arrow />
          </span>
        </Link>

        {/* משני */}
        <div className="relative grid bg-ink-2">
          <Link
            href={cta.join.href}
            className="group relative flex flex-col justify-between overflow-hidden border-b border-asphalt/35 p-8 md:p-12"
            data-reveal
            style={delay(100)}
          >
            <span className="relative z-10">
              <span className="spec block text-asphalt-2">JOIN THE PROGRAM</span>
              <span className="display t-h3 mt-4 block text-bone transition-colors duration-500 group-hover:text-flare">
                השארת פרטים
              </span>
              <span className="body-he mt-3 block max-w-sm text-[0.93rem] text-bone/65">
                נחזור אליכם בוואטסאפ עם כל הפרטים על המרכז, התכנית והחברות.
              </span>
            </span>
            <span className="relative z-10 mt-6 inline-flex items-center gap-4 text-sm text-flare">
              לטופס הקצר
              <Arrow />
            </span>
          </Link>

          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex flex-col justify-between overflow-hidden p-8 md:p-12"
              data-reveal
              style={delay(160)}
            >
              <span className="relative z-10">
                <span className="spec block text-asphalt-2">TALK TO US</span>
                <span className="display t-h3 mt-4 block text-bone transition-colors duration-500 group-hover:text-flare">
                  {cta.talk.label}
                </span>
                <span className="body-he mt-3 block max-w-sm text-[0.93rem] text-bone/65">
                  יש שאלה לפני שנרשמים? כתבו לנו בוואטסאפ.
                </span>
              </span>
              <span className="relative z-10 mt-6 inline-flex items-center gap-4 text-sm text-flare">
                וואטסאפ ישיר
                <Arrow />
              </span>
            </a>
          )}
          {!wa && site.contact.email && (
            <a
              href={`mailto:${site.contact.email}`}
              className="group relative flex flex-col justify-between p-8 md:p-12"
            >
              <span className="spec text-asphalt-2">TALK TO US</span>
              <span className="display t-h3 mt-4 text-bone">{cta.talk.label}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-2.5 w-6 shrink-0 transition-transform duration-500 group-hover:-translate-x-2"
    >
      <path d="M24 6H1M7 1L1 6l6 5" />
    </svg>
  );
}
