import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import LeadForm from "@/components/forms/LeadForm";
import { playerFormFields } from "@/data/forms";
import { centers } from "@/data/centers";
import { playerValue } from "@/data/system";
import { entryRequirement } from "@/data/method";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "הצטרפות — שחקנים והורים",
  description:
    "השאירו פרטים והצטרפו לאחד ממרכזי BALLERZ: אימון Player Development שבועי, קבוצות קטנות, תכנית שנתית וטורניר חודשי.",
  alternates: { canonical: "/join" },
};

export default function JoinPage() {
  // הזרקת רשימת המרכזים לשדה "מרכז מועדף" — נשלטת מ-data/centers.ts
  const fields = playerFormFields.map((f) =>
    f.name === "center"
      ? { ...f, options: [...centers.map((c) => `${c.city}`), "עדיין לא בטוח/ה"] }
      : f,
  );

  return (
    <>
      <PageHero
        eyebrow="JOIN"
        meta="NO PAYMENT ON THIS PAGE"
        titleEn={
          <>
            BUILD
            <br />
            YOUR GAME<span className="text-flare">.</span>
          </>
        }
        lead="משאירים פרטים, ואנחנו חוזרים עם כל המידע על המרכז הרלוונטי — ימי אימון, קבוצות גיל ואיך התהליך עובד."
      />

      <Section index="01" label="PLAYER REGISTRATION" meta="LEAD FORM" tone="ink">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <LeadForm
              kind="player"
              fields={fields}
              submitLabel="השאירו פרטים"
              successTitle="WE GOT IT."
              successBody="קיבלנו את הפרטים. נחזור אליכם עם המידע המלא על המרכז והשלב הבא."
            />
          </div>

          <aside className="md:col-span-5">
            <div className="border border-flare bg-ink-2 p-7" data-reveal style={delay(120)}>
              <h2 className="spec text-flare">{entryRequirement.titleEn}</h2>
              <p className="body-he mt-3 text-sm text-bone/80">{entryRequirement.body}</p>
            </div>

            <div className="mt-px border border-asphalt/40 bg-ink-2 p-7" data-reveal style={delay(180)}>
              <h2 className="spec text-asphalt-2">WHAT YOU GET</h2>
              <ul className="mt-5">
                {playerValue.map((v, i) => (
                  <li
                    key={v.en}
                    className="flex items-baseline gap-4 border-b border-asphalt/22 py-3 last:border-0"
                  >
                    <span className="spec spec-sm shrink-0 text-flare">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="body-he text-sm text-bone/80">{v.he}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="body-he mt-6 text-sm text-asphalt-2">
              אין תשלום ואין התחייבות בשלב הזה. הטופס נועד כדי שנוכל לחזור אליכם עם מידע
              מדויק.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
