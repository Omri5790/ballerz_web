import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import LeadForm from "@/components/forms/LeadForm";
import { clubFormFields } from "@/data/forms";
import { site } from "@/data/site";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "דברו איתנו על פתיחת מרכז",
  description:
    "מנהלי מועדונים ואגודות — השאירו פרטים ונחזור אליכם לשיחה על הקמת מרכז Player Development של BALLERZ.",
  alternates: { canonical: "/clubs/contact" },
};

const steps = [
  { en: "FIRST CALL", he: "שיחה של 20 דקות — מה קיים היום ומה חסר." },
  { en: "FIT & MODEL", he: "בחירת מודל עבודה שמתאים למבנה המועדון." },
  { en: "PLAN", he: "מתווה הפעלה: קבוצות, לו״ז, צוות ותכנית שנתית." },
];

export default function ClubContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CLUB CONTACT"
        meta="NO PRICING ONLINE"
        titleEn={
          <>
            LET&apos;S TALK
            <br />
            ABOUT YOUR CLUB<span className="text-flare">.</span>
          </>
        }
        lead="השאירו פרטים ונחזור אליכם. בשיחה הראשונה נבין מה המועדון צריך — ורק אחר כך נדבר על מבנה."
      />

      <Section index="01" label="CLUB LEAD" meta="FOR CLUB MANAGEMENT" tone="ink">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <LeadForm
              kind="club"
              fields={clubFormFields}
              submitLabel="בואו נדבר"
              successTitle="GOT IT."
              successBody="קיבלנו את הפרטים. נחזור אליכם עם הצעה לשיחה ראשונה."
            />
          </div>

          <aside className="md:col-span-5">
            <div className="border border-asphalt/40 bg-ink-2 p-7" data-reveal style={delay(120)}>
              <h2 className="spec text-flare">HOW IT STARTS</h2>
              <ol className="mt-6">
                {steps.map((s, i) => (
                  <li
                    key={s.en}
                    className="flex gap-5 border-b border-asphalt/25 py-5 last:border-0 last:pb-0"
                  >
                    <span className="spec shrink-0 text-asphalt-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="display display-wide text-[1.05rem] leading-none text-bone">
                        {s.en}
                      </p>
                      <p className="body-he mt-2 text-sm text-bone/65">{s.he}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {(site.contact.email || site.contact.phone || site.contact.whatsapp) && (
              <div className="mt-px border border-asphalt/40 bg-ink-2 p-7" data-reveal style={delay(200)}>
                <h2 className="spec text-asphalt-2">DIRECT</h2>
                <ul className="mt-4 space-y-2 text-sm text-bone/80">
                  {site.contact.email && (
                    <li>
                      <a href={`mailto:${site.contact.email}`} className="link-flare" dir="ltr">
                        {site.contact.email}
                      </a>
                    </li>
                  )}
                  {site.contact.whatsapp && (
                    <li>
                      <a
                        href={`https://wa.me/${site.contact.whatsapp}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-flare"
                      >
                        WhatsApp
                      </a>
                    </li>
                  )}
                  {site.contact.phone && (
                    <li>
                      <a href={`tel:${site.contact.phone}`} className="link-flare" dir="ltr">
                        {site.contact.phone}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
