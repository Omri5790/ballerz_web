import Link from "next/link";
import Section from "@/components/ui/Section";
import { centers, expansionCities, centerStatusMeta } from "@/data/centers";
import { cta } from "@/data/site";
import { cn, delay } from "@/lib/cn";

export default function Centers({
  index = "08",
  showHeadline = true,
}: {
  index?: string;
  showHeadline?: boolean;
}) {
  return (
    <Section id="centers" index={index} label="CENTERS" meta="EXPANDING" tone="ink2">
      {showHeadline && (
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h1 md:col-span-7" data-reveal>
            FIND YOUR
            <br />
            CENTER<span className="text-flare">.</span>
          </h2>
          <p className="body-he text-bone/70 md:col-span-5 md:pt-3" data-reveal style={delay(120)}>
            כל מרכז BALLERZ פועל לפי אותה שיטה, אותה תכנית ואותו סטנדרט. משנים את העיר —
            לא את המערכת.
          </p>
        </div>
      )}

      <ul className="mt-12 md:mt-16">
        {centers.map((c, i) => {
          const meta = centerStatusMeta[c.status];
          return (
            <li key={c.id} data-reveal style={delay(90 * i)}>
              <div className="group grid gap-6 border-t border-asphalt/35 py-8 last:border-b md:grid-cols-12 md:items-center md:gap-8">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "h-2 w-2 shrink-0",
                        meta.tone === "flare" && "bg-flare",
                        meta.tone === "bone" && "bg-bone/70",
                        meta.tone === "asphalt" && "bg-asphalt",
                      )}
                      aria-hidden
                    />
                    <span className="label-he text-asphalt-2">{c.statusLabel}</span>
                  </div>
                  <h3 className="display t-h2 mt-2 leading-none text-bone transition-colors duration-500 group-hover:text-flare">
                    BALLERZ {c.cityEn}
                  </h3>
                  <p className="body-he mt-1 text-sm text-asphalt-2">{c.city}</p>
                </div>

                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 md:col-span-5 md:grid-cols-3">
                  <Spec label="LOCATION" value={c.location} />
                  <Spec label="AGES" value={c.ages} />
                  <Spec label="TRAINING DAY" value={c.trainingDay} />
                </dl>

                <div className="md:col-span-3 md:text-end">
                  <Link
                    href={cta.join.href}
                    className="group/btn inline-flex items-center gap-4 border border-asphalt/45 px-5 py-4 text-sm text-bone transition-colors duration-400 hover:border-flare hover:bg-flare hover:text-ink"
                  >
                    {cta.join.label}
                    <svg
                      aria-hidden
                      viewBox="0 0 24 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-2.5 w-6 transition-transform duration-400 group-hover/btn:-translate-x-1"
                    >
                      <path d="M24 6H1M7 1L1 6l6 5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* הרחבה */}
      <div className="mt-12 border-t border-asphalt/25 pt-8" data-reveal>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <span className="spec text-asphalt-2">NEXT ON THE MAP</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {expansionCities.map((city) => (
              <li key={city} className="spec spec-sm text-asphalt/70">
                {city}
              </li>
            ))}
          </ul>
        </div>
        <p className="body-he mt-4 max-w-xl text-sm text-asphalt-2">
          מנהל מועדון שרוצה מרכז BALLERZ בעיר שלו —{" "}
          <Link href={cta.clubsTalk.href} className="link-flare text-bone">
            דברו איתנו
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="spec spec-sm text-asphalt-2">{label}</dt>
      <dd className="body-he mt-1.5 text-sm text-bone/85">{value}</dd>
    </div>
  );
}
