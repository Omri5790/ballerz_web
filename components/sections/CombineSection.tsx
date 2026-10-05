import Link from "next/link";
import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { CombineRig, MeasureBar } from "@/components/ui/CourtArt";
import { combine } from "@/data/combine";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

/**
 * ה-Section המרכזי של ההשקה.
 * מופיע בדף הבית וגם בעמוד /combine (שם showCta=false כי הטופס מתחתיו).
 */
export default function CombineSection({
  index = "06",
  showCta = true,
}: {
  index?: string;
  showCta?: boolean;
}) {
  return (
    <Section id="combine" index={index} label="THE COMBINE" meta="ENTRY EVENT" tone="ink2">
      <div className="grid gap-8 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h1" data-reveal>
            BALLERZ
            <br />
            PLAYER
            <br />
            <span className="text-flare">COMBINE.</span>
          </h2>
          <p className="display-he t-h2-he mt-5 text-bone" data-reveal style={delay(100)}>
            {combine.subHe}
          </p>
        </div>

        <div className="body-he space-y-4 text-bone/75 md:col-span-5 md:pt-3" data-reveal style={delay(160)}>
          <p className="lead text-bone">{combine.lead}</p>
          <p>{combine.body}</p>
        </div>
      </div>

      {/* לוח הפרטים */}
      <dl
        className="mt-10 flex flex-wrap gap-px border border-asphalt/40 bg-asphalt/30 md:mt-14"
        data-reveal
        style={delay(120)}
      >
        <DetailCell label="DATE" value={combine.date} />
        <DetailCell label="LOCATION" value={combine.location} />
        <DetailCell label="TIME" value={combine.time} />
        {combine.capacity && <DetailCell label="SPOTS" value={combine.capacity} />}
        {combine.price && <DetailCell label="PRICE" value={combine.price} />}
      </dl>

      {/* התחנות */}
      <div className="mt-12 md:mt-16">
        <div className="flex items-baseline justify-between border-b border-asphalt/35 pb-4">
          <span className="spec text-bone">WHAT HAPPENS ON THE DAY</span>
          <span className="spec spec-sm text-asphalt-2">
            {String(combine.stations.length).padStart(2, "0")} STATIONS
          </span>
        </div>

        <ul className="grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-3">
          {combine.stations.map((s, i) => (
            <li
              key={s.index}
              className="group bg-ink-2 p-6 transition-colors duration-500 hover:bg-ink md:p-7"
              data-reveal
              style={delay(50 * i)}
            >
              <span className="spec text-flare">{s.index}</span>
              <h3 className="display mt-6 text-[1.15rem] leading-[0.95] text-bone md:text-[1.35rem]">
                {s.en}
              </h3>
              <p className="label-he mt-2 text-bone/85">{s.he}</p>
              <p className="body-he mt-1.5 text-sm text-asphalt-2">{s.line}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* הטורניר — מה שגורם לשחקן לרצות להגיע */}
      <div
        className="mt-12 flex flex-col gap-5 border border-flare bg-flare p-6 text-ink md:mt-16 md:flex-row md:items-center md:justify-between md:p-9"
        data-reveal
      >
        <div className="min-w-0">
          <span className="spec text-ink/60">{combine.tournament.en}</span>
          <p className="display-he t-h2-he mt-2 text-ink">{combine.tournament.he}</p>
        </div>
        <p className="body-he max-w-md text-[0.95rem] text-ink/80">
          {combine.tournament.body}
        </p>
      </div>

      {/* הדיאגרמה + המטרה */}
      <div className="mt-px grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7" data-reveal>
          {combine.image ? (
            <MediaSlot
              slot={combine.mediaSlot}
              src={combine.image}
              alt="Combine של BALLERZ"
              index="CB1"
              ratio="16/9"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          ) : (
            <div className="relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden border border-asphalt/40 bg-ink p-6 md:p-8">
              <div className="grid-lab absolute inset-0 opacity-50" aria-hidden />
              <div className="relative flex items-baseline justify-between">
                <span className="spec text-flare">STATION 03 · VERTICAL</span>
                <span className="spec spec-sm text-asphalt-2">FIG. 01</span>
              </div>
              <CombineRig className="relative mx-auto my-6 h-auto w-full max-w-[26rem] text-asphalt-2" />
              <div className="relative flex items-center gap-3">
                <span className="spec spec-sm text-asphalt-2">MEASURED</span>
                <MeasureBar className="min-w-0 flex-1 text-asphalt/60" />
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-5" data-reveal style={delay(120)}>
          <div className="border border-flare bg-ink p-6 md:p-8">
            <span className="spec text-flare">{combine.purpose.en}</span>
            <p className="display-he t-h2-he mt-4 text-bone">{combine.purpose.he}</p>
            <p className="body-he mt-4 text-[0.95rem] text-bone/75">{combine.purpose.body}</p>
          </div>

          <div className="mt-px border border-asphalt/40 bg-ink-2 p-6 md:p-8">
            <span className="spec text-asphalt-2">WHAT YOU LEAVE WITH</span>
            <ul className="mt-4">
              {combine.outcome.map((o, i) => (
                <li
                  key={o}
                  className="flex items-baseline gap-3 border-b border-asphalt/25 py-3 last:border-0"
                >
                  <span className="spec spec-sm shrink-0 text-flare">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="body-he text-sm text-bone/85">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showCta && (
        <div className="mt-12 md:mt-16" data-reveal>
          <Link
            href={cta.combine.href}
            className="group relative flex w-full items-center justify-between gap-6 overflow-hidden border border-flare bg-flare px-6 py-7 md:px-10 md:py-9"
          >
            <span className="relative z-10 min-w-0">
              <span className="spec block text-ink/60 transition-colors duration-500 group-hover:text-flare">
                REGISTER FOR THE BALLERZ COMBINE
              </span>
              <span className="display-he t-h2-he mt-2 block text-ink transition-colors duration-500 group-hover:text-bone">
                {cta.combine.label}
              </span>
            </span>
            <span
              aria-hidden
              className="absolute inset-0 origin-[left] scale-x-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />
            <svg
              aria-hidden
              viewBox="0 0 24 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="relative z-10 h-3 w-8 shrink-0 text-ink transition-all duration-500 group-hover:-translate-x-2 group-hover:text-bone"
            >
              <path d="M24 6H1M7 1L1 6l6 5" />
            </svg>
          </Link>

          {combine.payment.url && (
            <p className="body-he mt-4 text-sm text-asphalt-2">
              כבר נרשמתם?{" "}
              <a
                href={combine.payment.url}
                target="_blank"
                rel="noreferrer noopener"
                className="link-flare text-flare"
              >
                {combine.payment.label}
              </a>
            </p>
          )}
        </div>
      )}
    </Section>
  );
}

function DetailCell({ label, value }: { label: string; value: string }) {
  const isPlaceholder = value.startsWith("[");
  return (
    <div className="min-w-[10rem] flex-1 bg-ink p-6 md:p-7">
      <dt className="spec spec-sm text-asphalt-2">{label}</dt>
      <dd
        className={
          isPlaceholder
            ? "spec mt-3 text-flare"
            : "display-he mt-3 text-[1.25rem] leading-tight text-bone"
        }
      >
        {value}
      </dd>
    </div>
  );
}
