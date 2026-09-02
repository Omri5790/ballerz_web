import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { clubModules, clubNotNeeded } from "@/data/clubs";
import { cta } from "@/data/site";
import { MarkX } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export default function ForClubs() {
  return (
    <Section
      id="clubs"
      index="03"
      label="FOR CLUBS"
      meta="PRIORITY AUDIENCE"
      tone="bone"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <h2 className="display t-h1 text-ink md:col-span-7" data-reveal>
          PLAYER DEVELOPMENT.
          <br />
          WITHOUT BUILDING
          <br />
          A NEW DEPARTMENT<span className="text-flare">.</span>
        </h2>

        <div className="body-he space-y-4 text-ink/75 md:col-span-5 md:pt-3" data-reveal style={delay(120)}>
          <p className="lead text-ink">
            מועדון שרוצה להוסיף שכבת פיתוח שחקנים לא צריך להקים אותה מאפס.
          </p>
          <p>
            BALLERZ יכולה להפעיל מרכז Player Development עבור המועדון — עם צוות, שיטה,
            תכנית שנתית ותפעול מלא.
          </p>
        </div>
      </div>

      {/* מה המועדון לא צריך לעשות */}
      <div className="mt-14 border-t border-ink/15 pt-10 md:mt-20" data-reveal>
        <p className="spec text-ink/45">WHAT THE CLUB DOESN&apos;T HAVE TO DO</p>
        <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {clubNotNeeded.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-ink/10 py-3"
              data-reveal
              style={delay(60 * i)}
            >
              <MarkX className="h-3.5 w-3.5 shrink-0 text-flare" />
              <span className="body-he text-[0.95rem] text-ink/45 line-through decoration-ink/25">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 7 מודולים */}
      <div className="mt-16 md:mt-24">
        <div className="flex items-baseline justify-between border-b border-ink/20 pb-4">
          <p className="spec text-ink">THE SYSTEM WE OPERATE</p>
          <p className="spec spec-sm text-ink/45">07 MODULES</p>
        </div>

        <ul>
          {clubModules.map((m, i) => (
            <li key={m.index} data-reveal style={delay(50 * i)}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 border-b border-ink/12 py-6 transition-colors duration-500 hover:bg-ink md:grid-cols-[3.5rem_minmax(0,20rem)_1fr] md:gap-x-8 md:px-3">
                <span className="spec text-flare">{m.index}</span>
                <h3 className="display display-wide text-[1.5rem] leading-none text-ink transition-colors duration-500 group-hover:text-bone md:text-[1.9rem]">
                  {m.titleEn}
                </h3>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-sm font-medium text-ink/70 transition-colors duration-500 group-hover:text-flare">
                    {m.titleHe}
                  </p>
                  <p className="body-he mt-1 max-w-xl text-[0.92rem] text-ink/60 transition-colors duration-500 group-hover:text-bone/70">
                    {m.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4" data-reveal>
        <Button href={cta.clubsTalk.href} variant="flare" size="lg">
          {cta.clubsTalk.label}
        </Button>
        <Button href="/clubs" variant="ink" size="lg">
          לעמוד המועדונים המלא
        </Button>
      </div>
    </Section>
  );
}
