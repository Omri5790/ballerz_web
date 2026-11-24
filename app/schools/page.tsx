import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Ticker from "@/components/ui/Ticker";
import MediaSlot from "@/components/ui/MediaSlot";
import LeadForm from "@/components/forms/LeadForm";
import Testimonials from "@/components/sections/Testimonials";
import ElementsGrid from "@/components/sections/ElementsGrid";
import { schoolFormFields } from "@/data/forms";
import { elements, elementsCopy } from "@/data/elements";
import { publishedArticles } from "@/data/articles";
import {
  gefen,
  gefenCopy,
  activeGefenOptions,
  perceptionGap,
  inclusion,
  evidence,
  evidenceLimit,
  programSpec,
  schoolSteps,
} from "@/data/schools";
import { MarkX } from "@/components/ui/CourtArt";
import { cn, delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "ELEMENTS — תכנית חינוכית לבתי ספר",
  description:
    "ELEMENTS היא השיטה שלפיה BALLERZ עובדת בבתי ספר: קשב, אומץ, קשיחות, תקשורת, התמדה, הרגלים ויצירתיות — שבע יכולות שמתאמנות דרך כדורסל. רשומים במאגר התוכניות של משרד החינוך וניתן לרכישה מסלי גפ״ן.",
  alternates: { canonical: "/schools" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "BALLERZ ELEMENTS — תכנית חינוכית לבתי ספר",
  description:
    "תכנית שנתית לבתי ספר המאמנת שבעה אלמנטים — קשב, אומץ, קשיחות, תקשורת, התמדה, הרגלים ויצירתיות — באמצעות אימון כדורסל בקבוצות קטנות.",
  provider: { "@type": "Organization", name: "BALLERZ" },
  teaches: elements.map((e) => e.he),
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
        eyebrow="ELEMENTS · FOR SCHOOLS"
        image="/media/standard-huddle.jpg"
        meta={gefen.listed ? "GEFEN · MOE DATABASE" : "FOR SCHOOLS"}
        titleEn={
          <>
            TRAIN THE
            <br />
            ELEMENTS<span className="text-flare">.</span>
          </>
        }
        lead="ELEMENTS היא השיטה שלפיה BALLERZ עובדת בבתי ספר. שבע יכולות שמתאמנות דרך כדורסל — קשב, אומץ, קשיחות, תקשורת, התמדה, הרגלים ויצירתיות."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#school-contact" variant="flare" size="lg">
            דברו איתנו
          </Button>
          <Button href="#gefen" variant="bone" size="lg">
            האפשרויות בגפ״ן
          </Button>
        </div>
      </PageHero>

      <Ticker items={elements.map((e) => e.en)} tone="flare" />

      {/* 01 — מה רואים מבחוץ */}
      <Section index="01" label="THE MISREAD" meta="WHAT IT LOOKS LIKE VS WHAT IT DOES" tone="ink">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h2 md:col-span-6" data-reveal>
            IT LOOKS LIKE
            <br />
            BASKETBALL<span className="text-flare">.</span>
          </h2>
          <p className="body-he lead text-bone/75 md:col-span-6 md:pt-3" data-reveal style={delay(120)}>
            וזה באמת כדורסל. אבל מה שמתאמן שם הוא לא הכדרור — אלא מה שהילד עושה
            בשנייה שאחרי שהוא מאבד אותו.
          </p>
        </div>

        <ul className="mt-12 grid gap-px bg-asphalt/30 sm:grid-cols-2">
          {perceptionGap.map((g, i) => (
            <li key={g.seen} className="bg-ink-2 p-6 md:p-7" data-reveal style={delay(60 * i)}>
              <div className="flex items-baseline gap-3">
                <MarkX className="h-3.5 w-3.5 shrink-0 text-asphalt-2" />
                <span className="body-he text-[0.95rem] text-asphalt-2 line-through decoration-asphalt/50">
                  {g.seen}
                </span>
              </div>
              <p className="body-he mt-4 border-s-2 border-flare ps-4 text-[0.98rem] leading-relaxed text-bone/90">
                {g.actual}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* רצועת תמונה — שוברת את הקיר בין המיסריד לאלמנטים */}
      <div className="bg-ink">
        <MediaSlot
          slot="SCHOOL GROUP · B/W · 21:9"
          src="/media/centers-group.jpg"
          alt="קבוצה באימון BALLERZ"
          index="S0"
          ratio="21/9"
          sizes="100vw"
        />
      </div>

      {/* 02 — האלמנטים */}
      <Section
        id="elements"
        index="02"
        label="THE ELEMENTS"
        meta={String(elements.length).padStart(2, "0") + " TRAINABLE ABILITIES"}
        tone="bone"
      >
        <div className="grid gap-6 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <h2 className="display t-h1 text-ink" data-reveal>
              {elementsCopy.en}
              <span className="text-flare">.</span>
            </h2>
          </div>
          <p
            className="body-he lead text-ink/80 md:col-span-6 md:pt-4"
            data-reveal
            style={delay(120)}
          >
            {elementsCopy.lead}
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          <ElementsGrid />
        </div>

        <p className="body-he mt-7 text-sm text-ink/50" data-reveal>
          {elementsCopy.note}
        </p>
      </Section>

      {/* 03 — מה שהמחקר מראה */}
      <Section id="evidence" index="03" label="THE EVIDENCE" meta="PEER REVIEWED" tone="ink">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h2 md:col-span-5" data-reveal>
            WHAT THE
            <br />
            RESEARCH SHOWS<span className="text-flare">.</span>
          </h2>
          <p className="body-he lead text-bone/75 md:col-span-7 md:pt-3" data-reveal style={delay(120)}>
            אנחנו לא מצטטים מחקר כדי להרשים. אנחנו מצטטים אותו כדי שתדעו בדיוק מה
            מבוסס ומה לא.
          </p>
        </div>

        <ul className="mt-12 grid gap-px bg-asphalt/30 lg:grid-cols-2">
          {evidence.map((e, i) => (
            <li key={e.url} className="bg-ink-2 p-7 md:p-9" data-reveal style={delay(80 * i)}>
              <span className="spec spec-sm text-flare">{e.sourceHe}</span>
              <p className="body-he mt-4 text-[1rem] leading-[1.8] text-bone/90">{e.claimHe}</p>
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer noopener"
                className="link-flare mt-5 inline-block text-[0.82rem] text-asphalt-2"
                dir="ltr"
              >
                {e.sourceEn}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-px border border-flare/60 p-7 md:p-9" data-reveal>
          <span className="spec text-flare">WHAT IT DOESN&apos;T SHOW</span>
          <p className="body-he mt-4 max-w-3xl text-[0.98rem] leading-[1.8] text-bone/85">
            {evidenceLimit}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4" data-reveal>
          <Button href="/schools/articles" variant="bone" size="lg">
            לכל הכתבות המבוססות־מחקר
          </Button>
        </div>
      </Section>

      {/* רצועת תמונה */}
      <div className="bg-ink px-5 pb-14 md:px-8 md:pb-20" data-reveal>
        <div className="mx-auto max-w-[1400px]">
          <MediaSlot
            slot="1V1 UNDER PRESSURE · B/W · 21:9"
            src="/media/play-finish.jpg"
            alt="שחקן מסיים מעל מגן באימון אחד על אחד"
            index="SB1"
            ratio="21/9"
            sizes="100vw"
          />
          <p className="body-he mt-4 max-w-2xl border-s-2 border-flare ps-4 text-sm text-asphalt-2">
            אחד על אחד הוא הסיטואציה שבה קשב, אומץ ויצירתיות נמדדים באותה שנייה.
          </p>
        </div>
      </div>

      {/* 04 — הכלה */}
      <Section index="04" label="INCLUSION" meta="A DIFFERENT CHANNEL" tone="ink2">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <h2 className="display t-h2" data-reveal>
              A DIFFERENT
              <br />
              CHANNEL<span className="text-flare">.</span>
            </h2>
            <p className="body-he lead mt-5 text-bone/85" data-reveal style={delay(100)}>
              {inclusion.lead}
            </p>
          </div>
          <div className="md:col-span-6" data-reveal style={delay(140)}>
            <MediaSlot
              slot="SMALL GROUP · SCHOOL HALL · B/W · 16:9"
              src="/media/player-group.jpg"
              alt="קבוצה קטנה באימון"
              index="S1"
              ratio="16/9"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>
        </div>

        <ul className="mt-12 grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-3">
          {inclusion.points.map((p, i) => (
            <li key={p.en} className="bg-ink-2 p-6 md:p-7" data-reveal style={delay(50 * i)}>
              <span className="spec text-flare">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-6 text-[1.15rem] leading-[0.95] text-bone md:text-[1.3rem]">
                {p.en}
              </h3>
              <p className="label-he mt-2 text-bone/85">{p.he}</p>
              <p className="body-he mt-2 text-sm text-asphalt-2">{p.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-s-2 border-flare bg-ink p-6 md:p-7" data-reveal>
          <span className="spec text-asphalt-2">THE BOUNDARY</span>
          <p className="body-he mt-3 max-w-3xl text-[0.98rem] leading-[1.8] text-bone/85">
            {inclusion.boundary}
          </p>
        </div>
      </Section>

      <div className="bg-ink-2 px-5 pb-14 md:px-8 md:pb-20" data-reveal>
        <div className="mx-auto grid max-w-[1400px] gap-px bg-asphalt/30 sm:grid-cols-3">
          <MediaSlot slot="HANDLE UNDER PRESSURE · B/W · 1:1" src="/media/play-handle.jpg" alt="שחקן מכדרר מול מגן" index="SC1" ratio="1/1" sizes="(max-width: 640px) 100vw, 32vw" />
          <MediaSlot slot="SHOT · B/W · 1:1" src="/media/play-shot.jpg" alt="שחקן בקליעה" index="SC2" ratio="1/1" sizes="(max-width: 640px) 100vw, 32vw" />
          <MediaSlot slot="COACHING · B/W · 1:1" src="/media/coach-teaching.jpg" alt="מאמן מסביר לשחקן" index="SC3" ratio="1/1" sizes="(max-width: 640px) 100vw, 32vw" />
        </div>
      </div>

      {/* 05 — מה אומרים */}
      <Section index="05" label="WHAT THEY SAY" meta="REAL MESSAGES" tone="ink">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h2 md:col-span-6" data-reveal>
            REAL MESSAGES<span className="text-flare">.</span>
          </h2>
          <p className="body-he text-bone/70 md:col-span-6 md:pt-3" data-reveal style={delay(120)}>
            הודעות אמיתיות מהורים ומאנשי מקצוע. לא כתבנו אף מילה בשמם, ולא פרסמנו
            המלצה שלא נאמרה.
          </p>
        </div>
        <div className="mt-12">
          <Testimonials audience="schools" />
        </div>
      </Section>

      {/* רצועת תמונה */}
      <div className="bg-ink px-5 pb-14 md:px-8 md:pb-20" data-reveal>
        <div className="mx-auto max-w-[1400px]">
          <MediaSlot
            slot="SMALL GROUP · B/W · 21:9"
            src="/media/player-group.jpg"
            alt="קבוצה קטנה באימון BALLERZ"
            index="SB2"
            ratio="21/9"
            sizes="100vw"
          />
          <p className="body-he mt-4 max-w-2xl border-s-2 border-flare ps-4 text-sm text-asphalt-2">
            קבוצה קטנה. כל ילד מגיע לכדור, וכל ילד נדרש לדבר.
          </p>
        </div>
      </div>

      {/* 06 — גפ״ן */}
      <Section id="gefen" index="06" label="PROCUREMENT" meta="GEFEN · MOE DATABASE" tone="bone">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <h2 className="display t-h2 text-ink" data-reveal>
              BUY IT FROM
              <br />
              YOUR BASKET<span className="text-flare">.</span>
            </h2>
            <p className="display-he t-h2-he mt-4 text-ink" data-reveal style={delay(90)}>
              {gefenCopy.he}
            </p>
          </div>
          <div className="body-he space-y-4 text-ink/75 md:col-span-7 md:pt-3" data-reveal style={delay(140)}>
            <p className="lead text-ink">{gefenCopy.lead}</p>
            <p>{gefenCopy.body}</p>
            <p className="text-ink/55">{gefenCopy.note}</p>
          </div>
        </div>

        {/* פרטי הרישום — מנהלת צריכה את המספר כדי לרכוש */}
        {gefen.listed && (
          <dl
            className="mt-12 flex flex-wrap gap-px border border-ink/20 bg-ink/15"
            data-reveal
          >
            {[
              { label: "PROVIDER", value: gefen.providerName },
              { label: "PROGRAM", value: gefen.programName },
              { label: "PROGRAM NO.", value: gefen.programNumber },
              { label: "TRACK", value: gefen.track },
            ].map((f) => {
              const missing = !f.value;
              return (
                <div key={f.label} className="min-w-[10rem] flex-1 bg-bone p-5 md:p-6">
                  <dt className="spec spec-sm text-ink/45">{f.label}</dt>
                  <dd
                    className={
                      missing
                        ? "spec mt-2.5 text-flare"
                        : "display-he mt-2.5 text-[1.05rem] text-ink"
                    }
                  >
                    {missing ? "[TO BE FILLED]" : f.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        )}

        {/* האפשרויות */}
        <ul
          className={cn(
            "mt-12 grid gap-px bg-ink/15 md:mt-16",
            activeGefenOptions.length > 1 && "lg:grid-cols-2",
          )}
        >
          {activeGefenOptions.map((o, i) => (
            <li key={o.id} className="bg-bone-2 p-7 md:p-9" data-reveal style={delay(80 * i)}>
              <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-4">
                <span className="spec text-flare">{o.index}</span>
                <span className="label-he text-ink/50">{o.baskets.length} סלים</span>
              </div>
              <h3 className="display t-h3 mt-5 leading-none text-ink">{o.en}</h3>
              <p className="display-he mt-3 text-[1.1rem] text-ink">{o.he}</p>
              <p className="body-he mt-3 text-[0.98rem] leading-[1.8] text-ink/75">{o.lead}</p>
              <p className="body-he mt-3 text-[0.92rem] leading-[1.8] text-ink/55">{o.forWho}</p>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/15 pt-5">
                {o.spec.map((s) => (
                  <div key={s.label}>
                    <dt className="spec spec-sm text-ink/45">{s.label}</dt>
                    <dd className="body-he mt-1.5 text-sm text-ink/80">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {o.baskets.map((b) => (
                  <li key={b} className="border border-ink/20 px-3 py-1.5 text-[0.78rem] text-ink/70">
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4" data-reveal>
          <Button href="#school-contact" variant="flare" size="lg">
            דברו איתנו על התכנית
          </Button>
        </div>
      </Section>

      {/* 07 — איך זה מופעל */}
      <Section index="07" label="HOW IT RUNS" meta="PROGRAM SPEC" tone="ink">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <h2 className="display t-h2" data-reveal>
              THE SPEC<span className="text-flare">.</span>
            </h2>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
              {programSpec.map((s, i) => (
                <div key={s.label} data-reveal style={delay(40 * i)}>
                  <dt className="spec spec-sm text-asphalt-2">{s.label}</dt>
                  <dd className="body-he mt-1.5 text-sm text-bone/85">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-6">
            <h2 className="display t-h2" data-reveal>
              THE PROCESS<span className="text-flare">.</span>
            </h2>
            <ol className="mt-8">
              {schoolSteps.map((s, i) => (
                <li key={s.en} data-reveal style={delay(60 * i)}>
                  <div className="flex items-baseline gap-5 border-b border-asphalt/30 py-5 first:border-t first:border-asphalt/30">
                    <span className="spec w-7 shrink-0 text-flare">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="display display-wide text-[1.05rem] leading-none text-bone">
                        {s.en}
                      </h3>
                      <p className="body-he mt-2 text-[0.93rem] text-bone/70">{s.he}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* רצועת תמונה */}
      <div className="bg-ink px-5 pb-14 md:px-8 md:pb-20" data-reveal>
        <div className="mx-auto max-w-[1400px]">
          <MediaSlot
            slot="TRAINING NOTES · B/W · 21:9"
            src="/media/intent-notes.jpg"
            alt="רישומי אימון של BALLERZ"
            index="SB3"
            ratio="21/9"
            sizes="100vw"
          />
          <p className="body-he mt-4 max-w-2xl border-s-2 border-flare ps-4 text-sm text-asphalt-2">
            התכנית כתובה מראש: מה עובדים, באיזה סדר, ומה נרשם בסוף כל מפגש.
          </p>
        </div>
      </div>

      {/* 08 — כתבות */}
      {publishedArticles.length > 0 && (
        <Section index="08" label="ARTICLES" meta="EVERY NUMBER HAS A SOURCE" tone="ink2">
          <div className="grid gap-8 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <h2 className="display t-h2" data-reveal>
                WHAT THE
                <br />
                RESEARCH SAYS<span className="text-flare">.</span>
              </h2>
              <p className="display-he t-h2-he mt-4 text-bone" data-reveal style={delay(90)}>
                כתבות לצוות החינוכי
              </p>
              <p className="body-he mt-5 max-w-sm text-bone/70" data-reveal style={delay(140)}>
                האלמנטים, אחד-אחד, מול מה שהמחקר באמת מראה — ומול מה שהוא לא מראה.
              </p>
              <Button href="/schools/articles" variant="bone" size="lg" className="mt-8">
                לכל הכתבות
              </Button>
            </div>

            <ul className="md:col-span-7">
              {publishedArticles.slice(0, 3).map((a, i) => (
                <li key={a.slug} data-reveal style={delay(70 * i)}>
                  <Link
                    href={"/schools/articles/" + a.slug}
                    className="group flex flex-col gap-2 border-b border-asphalt/30 py-6 first:border-t first:border-asphalt/30"
                  >
                    <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <span className="display text-[1.15rem] leading-none text-bone transition-colors duration-500 group-hover:text-flare md:text-[1.35rem]">
                        {a.titleEn}
                      </span>
                      <span className="spec spec-sm text-asphalt-2">
                        {a.readingMinutes} MIN
                      </span>
                    </span>
                    <span className="display-he text-[1.02rem] text-bone/90">{a.titleHe}</span>
                    <span className="body-he text-sm text-asphalt-2">{a.takeaway}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <div className="bg-ink px-5 pb-14 md:px-8 md:pb-20" data-reveal>
        <div className="mx-auto max-w-[1400px]">
          <MediaSlot slot="PULL-UP OVER A REACH · B/W · 21:9" src="/media/play-contest.jpg" alt="שחקן קולע מעל יד של מגן" index="SB4" ratio="21/9" sizes="100vw" />
        </div>
      </div>

      {/* 09 — יצירת קשר */}
      <Section id="school-contact" index="09" label="TALK TO US" meta="SCHOOL LEAD" tone="ink">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <h2 className="display t-h2" data-reveal>
              TWENTY
              <br />
              MINUTES<span className="text-flare">.</span>
            </h2>
            <p className="body-he lead mt-5 max-w-xl text-bone/80" data-reveal style={delay(100)}>
              שיחה קצרה כדי להבין מי התלמידים, מה המטרה ומאיזה סל. בלי התחייבות, וגם
              בלי להבטיח שזה מתאים לכל בית ספר.
            </p>

            <div className="mt-10">
              <LeadForm
                kind="school"
                fields={schoolFormFields}
                submitLabel="בואו נדבר"
                successTitle="WE GOT IT."
                successBody="קיבלנו את הפרטים. נחזור אליכם לתיאום שיחה קצרה."
              />
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="border border-flare bg-ink-2 p-7" data-reveal style={delay(120)}>
              <h3 className="spec text-flare">THE ELEMENTS</h3>
              <ul className="mt-5">
                {elements.map((el) => (
                  <li
                    key={el.index}
                    className="flex items-baseline justify-between gap-4 border-b border-asphalt/22 py-3 last:border-0"
                  >
                    <span className="display display-wide text-[0.95rem] leading-none text-bone">
                      {el.en}
                    </span>
                    <span className="body-he text-sm text-asphalt-2">{el.he}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mt-px border border-asphalt/40 bg-ink-2 p-7"
              data-reveal
              style={delay(180)}
            >
              <h3 className="spec text-asphalt-2">WHAT WE DON&apos;T PROMISE</h3>
              <p className="body-he mt-3 text-sm leading-[1.8] text-bone/80">
                {evidenceLimit}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
