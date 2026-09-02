import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Ticker from "@/components/ui/Ticker";
import MediaSlot from "@/components/ui/MediaSlot";
import LeadForm from "@/components/forms/LeadForm";
import { schoolFormFields } from "@/data/forms";
import Testimonials from "@/components/sections/Testimonials";
import {
  gefen,
  perceptionGap,
  mentalTools,
  inclusion,
  evidence,
  evidenceLimit,
  programSpec,
  schoolSteps,
} from "@/data/schools";
import { MarkX } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "לבתי ספר — חוסן מנטלי דרך כדורסל",
  description:
    "תכנית BALLERZ לבתי ספר: כלים לוויסות עצמי, התמודדות עם כישלון ומסוגלות — דרך כדורסל. רשומים במאגר התוכניות והמענים של משרד החינוך, ניתן לרכישה מסלי גפ״ן כולל סל הכלה והשתלבות.",
  alternates: { canonical: "/schools" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "BALLERZ — תכנית חוסן מנטלי דרך כדורסל",
  description:
    "תכנית שנתית לבתי ספר המאמנת ויסות עצמי, התמודדות עם כישלון, מסוגלות ושייכות באמצעות אימון כדורסל בקבוצות קטנות.",
  provider: { "@type": "Organization", name: "BALLERZ" },
  inLanguage: "he",
};

export default function SchoolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="FOR SCHOOLS"
        meta="MINISTRY OF EDUCATION REGISTERED"
        titleEn={
          <>
            THE BALL IS THE TOOL.
            <br />
            <span className="text-flare">THE CHILD IS THE PROGRAM.</span>
          </>
        }
        lead="נראה ככדורסל. עובד כתכנית חוסן. BALLERZ מאמנת ויסות עצמי, התמודדות עם כישלון ותחושת מסוגלות — דרך סיטואציות שקורות במגרש ולא דרך הרצאה בכיתה."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#school-contact" variant="flare" size="lg">
            לתאם שיחה
          </Button>
          <Button href="#evidence" variant="bone" size="lg">
            מה המחקר מראה
          </Button>
        </div>
      </PageHero>

      <Ticker
        items={[
          "SELF-REGULATION",
          "FAILURE TOLERANCE",
          "BELONGING",
          "SELF-EFFICACY",
          "RESILIENCE",
        ]}
        tone="flare"
      />

      {/* 01 — מה רואים מול מה שקורה */}
      <Section index="01" label="THE MISREAD" meta="WHAT IT LOOKS LIKE VS WHAT IT DOES" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h1 md:col-span-6" data-reveal>
            IT LOOKS LIKE
            <br />
            BASKETBALL<span className="text-flare">.</span>
          </h2>
          <div className="body-he space-y-4 text-bone/75 md:col-span-6 md:pt-3" data-reveal style={delay(120)}>
            <p className="lead text-bone">
              ילד שמפסיד 1V1 מול חבר, מול קהל של עשרה ילדים, ואז חוזר לתור ומנסה שוב —
              עושה בדיוק את מה שאנחנו מנסים ללמד אותו בכיתה.
            </p>
            <p>
              רק שכאן הוא עושה את זה ארבעים פעם באימון, בגוף, בלי שאף אחד מסביר לו שזה
              שיעור בחוסן.
            </p>
          </div>
        </div>

        <ul className="mt-14 md:mt-20">
          {perceptionGap.map((p, i) => (
            <li key={p.seen} data-reveal style={delay(70 * i)}>
              <div className="grid gap-4 border-t border-asphalt/30 py-6 last:border-b md:grid-cols-12 md:items-center md:gap-8">
                <div className="flex items-start gap-3 md:col-span-5">
                  <MarkX className="mt-1 h-3.5 w-3.5 shrink-0 text-asphalt" />
                  <div>
                    <span className="spec spec-sm block text-asphalt">WHAT IT LOOKS LIKE</span>
                    <p className="body-he mt-1 text-[0.95rem] text-bone/45">{p.seen}</p>
                  </div>
                </div>

                <div className="hidden md:col-span-1 md:block" aria-hidden>
                  <svg
                    viewBox="0 0 24 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-2.5 w-6 text-flare"
                  >
                    <path d="M24 6H1M7 1L1 6l6 5" />
                  </svg>
                </div>

                <div className="flex items-start gap-3 md:col-span-6">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-flare" aria-hidden />
                  <div>
                    <span className="spec spec-sm block text-flare">WHAT IT ACTUALLY DOES</span>
                    <p className="body-he mt-1 text-[0.98rem] text-bone">{p.actual}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 02 — סל הכלים המנטלי */}
      <Section index="02" label="THE MENTAL TOOLKIT" meta="08 TOOLS" tone="bone">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h1 text-ink md:col-span-7" data-reveal>
            WE DON&apos;T TALK
            <br />
            ABOUT RESILIENCE.
            <br />
            <span className="text-flare">WE TRAIN IT.</span>
          </h2>
          <p className="body-he lead text-ink/75 md:col-span-5 md:pt-3" data-reveal style={delay(120)}>
            כל כלי ברשימה הזו מתאמן דרך סיטואציה מתוכננת באימון — לא דרך שיחה. זה ההבדל
            בין ילד שיודע להגיד ״צריך להתמיד״ לבין ילד שהתמיד.
          </p>
        </div>

        <ul className="mt-14">
          {mentalTools.map((t, i) => (
            <li key={t.index} data-reveal style={delay(45 * i)}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 border-b border-ink/12 py-6 transition-colors duration-500 hover:bg-ink md:grid-cols-[3.5rem_minmax(0,18rem)_1fr] md:gap-x-8 md:px-3">
                <span className="spec text-flare">{t.index}</span>
                <div>
                  <h3 className="display display-wide text-[1.4rem] leading-none text-ink transition-colors duration-500 group-hover:text-bone md:text-[1.7rem]">
                    {t.en}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-ink/60 transition-colors duration-500 group-hover:text-flare">
                    {t.he}
                  </p>
                </div>
                <p className="body-he col-span-2 max-w-2xl text-[0.95rem] text-ink/65 transition-colors duration-500 group-hover:text-bone/75 md:col-span-1">
                  {t.how}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 03 — הכלה והשתלבות */}
      <Section index="03" label="INCLUSION" meta="הכלה והשתלבות" tone="ink2">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <h2 className="display t-h1" data-reveal>
              A DIFFERENT
              <br />
              CHANNEL<span className="text-flare">.</span>
            </h2>
            <p className="body-he lead mt-6 max-w-xl text-bone/85" data-reveal style={delay(120)}>
              {inclusion.lead}
            </p>
          </div>
          <div className="md:col-span-5" data-reveal style={delay(160)}>
            <MediaSlot
              slot="SMALL GROUP · COACH WITH ONE PLAYER · 4:5"
              src="/media/club-coach.jpg"
              alt="מאמן BALLERZ עובד אישית עם תלמיד"
              index="S1"
              ratio="4/5"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        <ul className="mt-14 grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-3">
          {inclusion.points.map((p, i) => (
            <li
              key={p.en}
              className="group bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink"
              data-reveal
              style={delay(55 * i)}
            >
              <span className="spec text-flare">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-8 text-[1.25rem] leading-[0.95] text-bone md:text-[1.5rem]">
                {p.en}
              </h3>
              <p className="mt-2 text-sm font-medium text-asphalt-2">{p.he}</p>
              <p className="body-he mt-3 text-sm text-bone/65">{p.body}</p>
            </li>
          ))}
        </ul>

        {/* גבול מקצועי */}
        <div className="mt-12 border border-flare/60 bg-ink p-7 md:p-8" data-reveal>
          <span className="spec text-flare">SCOPE OF PRACTICE</span>
          <p className="body-he mt-3 max-w-3xl text-[0.98rem] text-bone/85">
            {inclusion.boundary}
          </p>
        </div>
      </Section>

      {/* 04 — מה המחקר מראה */}
      <Section id="evidence" index="04" label="THE EVIDENCE" meta="PEER REVIEWED" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h1 md:col-span-6" data-reveal>
            WHAT THE
            <br />
            RESEARCH SHOWS<span className="text-flare">.</span>
          </h2>
          <p className="body-he text-bone/70 md:col-span-6 md:pt-3" data-reveal style={delay(120)}>
            אנחנו לא מצטטים מחקר כדי להרשים. אנחנו מצטטים אותו כדי שתדעו בדיוק מה מבוסס
            ומה לא — ותוכלו לבדוק בעצמכן.
          </p>
        </div>

        <ul className="mt-12 grid gap-px bg-asphalt/30 md:grid-cols-2">
          {evidence.map((e, i) => (
            <li key={e.url} className="bg-ink-2 p-7 md:p-9" data-reveal style={delay(80 * i)}>
              <span className="spec text-flare">FINDING {String(i + 1).padStart(2, "0")}</span>
              <p className="body-he mt-6 text-[1.02rem] leading-relaxed text-bone">
                {e.claimHe}
              </p>
              <div className="mt-6 border-t border-asphalt/30 pt-4">
                <p className="body-he text-sm text-asphalt-2">{e.sourceHe}</p>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="spec spec-sm link-flare mt-2 inline-block text-bone/70"
                >
                  {e.sourceEn}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 border border-asphalt/45 p-7 md:p-8" data-reveal>
          <span className="spec text-asphalt-2">WHAT WE DON&apos;T CLAIM</span>
          <p className="body-he mt-3 max-w-3xl text-[0.98rem] text-bone/75">{evidenceLimit}</p>
        </div>
      </Section>

      {/* 05 — המלצות */}
      <Section index="05" label="WHAT PARENTS SAY" meta="REAL MESSAGES" tone="ink2">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h1 md:col-span-6" data-reveal>
            NOT OUR WORDS<span className="text-flare">.</span>
          </h2>
          <p className="body-he text-bone/70 md:col-span-6 md:pt-3" data-reveal style={delay(120)}>
            אלה הודעות שנשלחו אלינו על ידי הורים ואנשי מקצוע. לא ניסחנו אותן, ולא נכתוב
            לעולם ציטוט בשם מישהו אחר. כשיהיו לנו המלצות מצוות חינוכי — הן ייכנסו לכאן
            באותה דרך.
          </p>
        </div>

        <div className="mt-12">
          <Testimonials audience="schools" />
        </div>
      </Section>

      {/* 06 — איך זה פועל בבית הספר */}
      <Section index="06" label="HOW IT RUNS" meta="PROGRAM SPEC" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <h2 className="display t-h2" data-reveal>
              HOW IT RUNS
              <br />
              IN YOUR SCHOOL<span className="text-flare">.</span>
            </h2>
            <p className="body-he mt-6 max-w-sm text-bone/70" data-reveal style={delay(120)}>
              אנחנו מגיעים עם צוות, ציוד ותכנית. בית הספר מספק אולם או מגרש ואת התלמידים.
            </p>

            <ol className="mt-10" data-reveal style={delay(180)}>
              {schoolSteps.map((s, i) => (
                <li
                  key={s.en}
                  className="flex gap-5 border-b border-asphalt/25 py-4 last:border-0"
                >
                  <span className="spec shrink-0 text-flare">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="display display-wide text-[1.05rem] leading-none text-bone">
                      {s.en}
                    </p>
                    <p className="body-he mt-1.5 text-sm text-bone/65">{s.he}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <dl className="grid gap-px self-start bg-asphalt/30 sm:grid-cols-2 md:col-span-7">
            {programSpec.map((s, i) => (
              <div key={s.label} className="bg-ink-2 p-6" data-reveal style={delay(40 * i)}>
                <dt className="spec spec-sm text-asphalt-2">{s.label}</dt>
                <dd className="body-he mt-2 text-[0.98rem] text-bone">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 07 — גפ״ן */}
      {gefen.listed && (
        <Section index="07" label="PROCUREMENT" meta="גפ״ן" tone="bone">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <h2 className="display t-h1 text-ink" data-reveal>
                REGISTERED.
                <br />
                <span className="text-flare">FUNDABLE.</span>
              </h2>
              <div className="body-he mt-6 max-w-xl space-y-4 text-ink/75" data-reveal style={delay(120)}>
                <p className="lead text-ink">
                  BALLERZ רשומה במאגר התוכניות והמענים החינוכיים של משרד החינוך.
                </p>
                <p>
                  המשמעות המעשית: זו תכנית שמותר להכניס לבית ספר — תכניות שאינן רשומות
                  במאגר לא ניתנות לשילוב במוסדות חינוך — ואפשר לרכוש אותה מתקציבי גפ״ן,
                  בהתאם לשיקול הדעת שלכן ולכללי הסל.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2" data-reveal style={delay(180)}>
                {gefen.baskets.map((b) => (
                  <span
                    key={b}
                    className="border border-ink/25 px-4 py-2.5 text-[0.85rem] text-ink/80"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-5" data-reveal style={delay(160)}>
              <div className="border border-ink/20 bg-ink p-7">
                <div className="flex items-center justify-between border-b border-asphalt/35 pb-3">
                  <span className="spec spec-sm text-asphalt-2">REGISTRY</span>
                  <span className="spec spec-sm text-flare">MOE</span>
                </div>
                <dl className="mt-4 space-y-3">
                  {[
                    ["ספק", gefen.providerName],
                    ["תכנית", gefen.programName],
                    ["מספר במאגר", gefen.programNumber],
                    ["מסלול", gefen.track],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4">
                      <dt className="body-he text-sm text-asphalt-2">{k}</dt>
                      <span aria-hidden className="h-px flex-1 bg-asphalt/25" />
                      <dd className="body-he text-sm text-bone">
                        {v || <span className="text-asphalt/70">—</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="body-he mt-4 text-xs text-ink/45">
                הרישום במאגר מעיד על עמידה בתנאי הסף להכללה, ואינו המלצה של משרד החינוך על
                התכנית. הבחירה בתכנית נתונה לשיקול דעת מנהל/ת המוסד.
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* 08 — טופס */}
      <Section id="school-contact" index="08" label="TALK TO US" meta="SCHOOL LEAD" tone="ink2">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="display t-h2" data-reveal>
              LET&apos;S TALK ABOUT
              <br />
              YOUR STUDENTS<span className="text-flare">.</span>
            </h2>
            <p className="body-he mt-5 max-w-xl text-bone/70" data-reveal style={delay(100)}>
              השאירו פרטים ונחזור אליכן. בשיחה הראשונה נבין מי התלמידים, מה המטרה ומאיזה
              סל — ורק אחר כך נדבר על מבנה.
            </p>

            <div className="mt-10">
              <LeadForm
                kind="school"
                fields={schoolFormFields}
                submitLabel="לתאם שיחה"
                successTitle="GOT IT."
                successBody="קיבלנו את הפרטים. נחזור אליכן לתיאום שיחה ראשונה."
              />
            </div>
          </div>

          <aside className="md:col-span-5" data-reveal style={delay(140)}>
            <MediaSlot
              slot="STUDENT WRITING TRAINING NOTES · 4:5"
              src="/media/intent-notes.jpg"
              alt="תלמיד רושם הערות באימון"
              index="S2"
              ratio="4/5"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="mt-px border border-asphalt/40 bg-ink p-7">
              <span className="spec text-asphalt-2">GOOD TO KNOW</span>
              <ul className="mt-4 space-y-3">
                {[
                  "אין התחייבות בשלב הזה.",
                  "אפשר להתחיל מקבוצה אחת ולבחון.",
                  "אנחנו מגיעים עם ציוד וצוות.",
                ].map((t) => (
                  <li key={t} className="flex items-baseline gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 bg-flare" aria-hidden />
                    <span className="body-he text-sm text-bone/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
