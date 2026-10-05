import Link from "next/link";
import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { openingTraining as ot } from "@/data/combine";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

export default function OpeningTraining({ index = "07" }: { index?: string }) {
  return (
    <Section id="opening" index={index} label="OPENING TRAINING" meta="SEASON START" tone="ink">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-6">
          <h2 className="display t-h1" data-reveal>
            THE WORK
            <br />
            STARTS <span className="text-flare">HERE.</span>
          </h2>
          <p className="display-he t-h2-he mt-5 text-bone" data-reveal style={delay(100)}>
            {ot.lead}
          </p>
          <p className="body-he mt-4 max-w-lg text-bone/70" data-reveal style={delay(160)}>
            {ot.body}
          </p>

          <dl
            className="mt-9 grid gap-px border border-asphalt/40 bg-asphalt/30 sm:grid-cols-3"
            data-reveal
            style={delay(200)}
          >
            <Cell label="DATE" value={ot.date} />
            <Cell label="CENTER" value={ot.center} />
            <Cell label="TIME" value={ot.time} />
          </dl>

          <div className="mt-9 flex flex-wrap gap-4" data-reveal style={delay(240)}>
            <Link
              href={cta.join.href}
              className="group relative inline-flex items-center justify-between gap-6 overflow-hidden border border-flare bg-flare px-7 py-5 text-[0.95rem] font-medium text-ink transition-colors duration-500 hover:text-bone"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-[left] scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <span className="relative z-10">הצטרפות לקבוצה</span>
              <svg
                aria-hidden
                viewBox="0 0 24 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="relative z-10 h-2.5 w-6 transition-transform duration-500 group-hover:-translate-x-1.5"
              >
                <path d="M24 6H1M7 1L1 6l6 5" />
              </svg>
            </Link>
            <Link href={cta.combine.href} className="link-flare self-center text-sm text-bone">
              קודם ה-Combine ←
            </Link>
          </div>
        </div>

        <div className="md:col-span-6" data-reveal style={delay(140)}>
          <MediaSlot
            slot={ot.mediaSlot}
            src={ot.image}
            alt="אימון הפתיחה של BALLERZ"
            index="OT1"
            ratio="4/5"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
      </div>
    </Section>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  const isPlaceholder = value.startsWith("[");
  return (
    <div className="bg-ink-2 p-5 md:p-6">
      <dt className="spec spec-sm text-asphalt-2">{label}</dt>
      <dd
        className={
          isPlaceholder
            ? "spec mt-2.5 text-flare"
            : "display-he mt-2.5 text-[1.15rem] leading-tight text-bone"
        }
      >
        {value}
      </dd>
    </div>
  );
}
