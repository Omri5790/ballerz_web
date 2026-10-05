import Section from "@/components/ui/Section";
import LeadForm from "@/components/forms/LeadForm";
import { playerFormFields } from "@/data/forms";
import { centers } from "@/data/centers";
import { playerValue } from "@/data/system";
import { site, whatsappLink } from "@/data/site";
import { delay } from "@/lib/cn";

type Props = {
  kind?: "player" | "combine";
  index?: string;
  label?: string;
  titleEn: React.ReactNode;
  titleHe?: string;
  lead?: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  /** פרטים שמוצגים לצד הטופס (למשל תאריך ומקום ה-Combine) */
  facts?: { label: string; value: string }[];
  /** קישור סליקה — מוצג אחרי שליחת הטופס. בלי url, לא מוצג כלום */
  payment?: { url: string; label: string; amount?: string; note?: string };
};

/**
 * בלוק ההרשמה — טופס קצר + sidebar.
 * משמש גם ב-/combine וגם ב-/join כדי שלא יהיו שני טפסים שונים לתחזק.
 */
export default function RegisterBlock({
  kind = "player",
  index = "01",
  label = "REGISTRATION",
  titleEn,
  titleHe,
  lead,
  submitLabel,
  successTitle,
  successBody,
  facts,
  payment,
}: Props) {
  // הזרקת רשימת המרכזים לשדה "מרכז מועדף" — נשלטת מ-data/centers.ts
  const fields = playerFormFields.map((f) =>
    f.name === "center"
      ? { ...f, options: [...centers.map((c) => c.city), "עדיין לא בטוח/ה"] }
      : f,
  );

  const wa = whatsappLink(
    kind === "combine"
      ? "היי, יש לי שאלה לגבי ה-Combine של BALLERZ"
      : "היי, יש לי שאלה לגבי התכנית של BALLERZ",
  );

  return (
    <Section
      id="register"
      index={index}
      label={label}
      meta={payment?.url ? "07 FIELDS · THEN PAYMENT" : "07 FIELDS · NO PAYMENT"}
      tone="ink"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h2" data-reveal>
            {titleEn}
          </h2>
          {titleHe && (
            <p className="display-he t-h2-he mt-4 text-bone" data-reveal style={delay(90)}>
              {titleHe}
            </p>
          )}
          {lead && (
            <p className="body-he mt-4 max-w-xl text-bone/70" data-reveal style={delay(140)}>
              {lead}
            </p>
          )}

          <div className="mt-10">
            <LeadForm
              kind={kind}
              fields={fields}
              submitLabel={submitLabel}
              successTitle={successTitle}
              successBody={successBody}
              payment={payment}
            />
          </div>
        </div>

        <aside className="md:col-span-5">
          {facts && facts.length > 0 && (
            <dl
              className="grid gap-px border border-flare bg-flare/20"
              data-reveal
              style={delay(100)}
            >
              {facts.map((f) => {
                const isPlaceholder = f.value.startsWith("[");
                return (
                  <div key={f.label} className="bg-ink-2 p-5">
                    <dt className="spec spec-sm text-asphalt-2">{f.label}</dt>
                    <dd
                      className={
                        isPlaceholder
                          ? "spec mt-2 text-flare"
                          : "display-he mt-2 text-[1.1rem] text-bone"
                      }
                    >
                      {f.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          )}

          <div
            className="mt-px border border-asphalt/40 bg-ink-2 p-6 md:p-7"
            data-reveal
            style={delay(160)}
          >
            <h3 className="spec text-asphalt-2">WHAT YOU GET</h3>
            <ul className="mt-4">
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

          <div
            className="mt-px border border-asphalt/40 bg-ink-2 p-6 md:p-7"
            data-reveal
            style={delay(200)}
          >
            <h3 className="spec text-flare">ENTRY STANDARD</h3>
            <p className="body-he mt-3 text-sm text-bone/80">
              מכיתה ז׳ ומעלה, לשחקנים שמשחקים כדורסל באופן קבוע במסגרת קבוצתית. זו אינה
              מסגרת כדורסל ראשונה.
            </p>
          </div>

          {payment?.url ? (
            <div
              className="mt-px border border-flare bg-ink-2 p-6 md:p-7"
              data-reveal
              style={delay(230)}
            >
              <h3 className="spec text-flare">ALREADY REGISTERED?</h3>
              <p className="body-he mt-3 text-sm text-bone/80">{payment.note}</p>
              <a
                href={payment.url}
                target="_blank"
                rel="noreferrer noopener"
                className="link-flare mt-4 inline-flex items-baseline gap-3 text-sm font-medium text-flare"
              >
                {payment.label}
                {payment.amount && <span className="spec">{payment.amount}</span>}
              </a>
            </div>
          ) : (
            <p className="body-he mt-6 text-sm text-asphalt-2">
              אין תשלום ואין התחייבות בשלב הזה. הטופס נועד כדי שנחזור אליכם עם מידע
              מדויק.
            </p>
          )}

          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noreferrer noopener"
              className="link-flare mt-4 inline-block text-sm text-bone"
            >
              יש שאלה? כתבו לנו בוואטסאפ
            </a>
          )}
          {!wa && site.contact.email && (
            <a
              href={`mailto:${site.contact.email}`}
              className="link-flare mt-4 inline-block text-sm text-bone"
            >
              יש שאלה? כתבו לנו במייל
            </a>
          )}
        </aside>
      </div>
    </Section>
  );
}
