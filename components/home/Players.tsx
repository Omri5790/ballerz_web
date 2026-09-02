import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import MediaSlot from "@/components/ui/MediaSlot";
import { playerValue } from "@/data/system";
import { entryRequirement } from "@/data/method";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

export default function Players() {
  return (
    <Section
      id="players"
      index="09"
      label="FOR PLAYERS & PARENTS"
      meta="WHAT YOU GET"
      tone="bone"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h1 text-ink" data-reveal>
            MORE THAN
            <br />
            ONE MORE PRACTICE<span className="text-flare">.</span>
          </h2>

          <p className="body-he lead mt-6 max-w-lg text-ink/75" data-reveal style={delay(120)}>
            שחקן שמצטרף ל-BALLERZ לא נרשם לאימון. הוא נכנס לתהליך עם תכנית, קבוצה קטנה,
            תחרות קבועה וסטנדרט עבודה ברור.
          </p>

          <ul className="mt-10">
            {playerValue.map((v, i) => (
              <li
                key={v.en}
                className="group flex items-baseline gap-5 border-b border-ink/12 py-4 first:border-t first:border-ink/12"
                data-reveal
                style={delay(55 * i)}
              >
                <span className="spec w-7 shrink-0 text-flare">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="body-he flex-1 text-[0.98rem] text-ink/85">{v.he}</span>
                {v.note && (
                  <span className="label-he shrink-0 text-ink/40">{v.note}</span>
                )}
                <span className="spec spec-sm hidden shrink-0 text-ink/30 sm:block">
                  {v.en}
                </span>
              </li>
            ))}
          </ul>

          {/* רמת כניסה */}
          <div
            className="mt-10 border border-ink/20 bg-ink p-6 md:p-7"
            data-reveal
            style={delay(120)}
          >
            <span className="spec text-flare">{entryRequirement.titleEn}</span>
            <p className="body-he mt-3 max-w-2xl text-[0.95rem] text-bone/80">
              {entryRequirement.body}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4" data-reveal>
            <Button href={cta.join.href} variant="flare" size="lg">
              {cta.join.label}
            </Button>
            <Button href="/method" variant="ink" size="lg">
              איך זה עובד
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
            <MediaSlot slot="SMALL GROUP TRAINING · 1:1" src="/media/player-group.jpg" alt="אימון בקבוצה קטנה" index="P2" ratio="1/1" sizes="20vw" />
            <MediaSlot slot="MONTHLY TOURNAMENT · 1:1" src="/media/player-reps.jpg" alt="שחקנים ממתינים לתור באימון" index="P3" ratio="1/1" sizes="20vw" />
          </div>
        </div>
      </div>
    </Section>
  );
}
