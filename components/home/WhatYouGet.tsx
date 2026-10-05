import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import Button from "@/components/ui/Button";
import { offerStack } from "@/data/offer";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

export default function WhatYouGet() {
  return (
    <Section
      id="what-you-get"
      index="08"
      label="WHAT YOU GET"
      meta={`${String(offerStack.length).padStart(2, "0")} ITEMS`}
      tone="bone"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h1 text-ink" data-reveal>
            MORE THAN
            <br />
            ONE MORE PRACTICE<span className="text-flare">.</span>
          </h2>
          <p className="display-he t-h2-he mt-5 text-ink" data-reveal style={delay(100)}>
            מה מקבלים כחברי BALLERZ
          </p>

          <ol className="mt-10">
            {offerStack.map((v, i) => (
              <li
                key={v.index}
                className="group border-b border-ink/12 py-5 first:border-t first:border-ink/12"
                data-reveal
                style={delay(50 * i)}
              >
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="spec w-7 shrink-0 text-flare">{v.index}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="display-he text-[1.05rem] text-ink md:text-[1.2rem]">
                        {v.he}
                      </h3>
                      <span className="spec spec-sm hidden shrink-0 text-ink/35 sm:block">
                        {v.en}
                      </span>
                    </div>
                    <p className="body-he mt-1.5 text-[0.92rem] text-ink/60">{v.line}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-wrap gap-4" data-reveal>
            <Button href={cta.combine.href} variant="flare" size="lg">
              {cta.combine.label}
            </Button>
            <Button href="#membership" variant="ink" size="lg">
              מה כוללת החברות
            </Button>
          </div>
        </div>

        <div className="md:col-span-5" data-reveal style={delay(180)}>
          <MediaSlot
            slot="PLAYER PORTRAIT · B/W · DIRECT LOOK · 4:5"
            src="/media/player-portrait.jpg"
            alt="שחקן BALLERZ באימון"
            index="P1"
            ratio="4/5"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="mt-px grid grid-cols-2 gap-px bg-ink/15">
            <MediaSlot
              slot="SMALL GROUP TRAINING · 1:1"
              src="/media/player-group.jpg"
              alt="אימון בקבוצה קטנה"
              index="P2"
              ratio="1/1"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
            <MediaSlot
              slot="PLAYERS WAITING FOR REPS · 1:1"
              src="/media/player-reps.jpg"
              alt="שחקנים ממתינים לתור באימון"
              index="P3"
              ratio="1/1"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>

          <div className="mt-6 border border-ink/20 bg-ink p-6" data-reveal style={delay(220)}>
            <span className="spec text-flare">ENTRY STANDARD</span>
            <p className="body-he mt-3 text-[0.95rem] text-bone/80">
              התכנית מיועדת לשחקנים מכיתה ז׳ ומעלה שמשחקים כדורסל באופן קבוע במסגרת
              קבוצתית. זו אינה מסגרת כדורסל ראשונה.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
