import Link from "next/link";
import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { founder } from "@/data/founder";
import { delay } from "@/lib/cn";

/** סקשן קצר בכוונה. עמרי הוא שכבת credibility — לא הגיבור. */
export default function FounderStrip() {
  return (
    <Section id="founder" index="12" label="BEHIND THE SYSTEM" meta="CREDIBILITY" tone="ink">
      <div className="grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3" data-reveal>
          <MediaSlot
            slot="FOUNDER PORTRAIT · B/W · ON COURT · 3:4"
            src={founder.portrait}
            alt={founder.nameHe}
            index="F1"
            ratio="3/4"
            sizes="(max-width: 768px) 100vw, 22vw"
          />
        </div>

        <div className="md:col-span-9 md:pt-2" data-reveal style={delay(120)}>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h2 className="display text-[2rem] leading-none text-bone md:text-[2.8rem]">
              {founder.nameEn}
            </h2>
            <span className="spec text-flare">{founder.role}</span>
          </div>
          <p className="body-he mt-1 text-sm text-asphalt-2">{founder.nameHe}</p>

          <p className="body-he mt-6 max-w-2xl text-[1.02rem] text-bone/80">
            {founder.statement}
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-asphalt/30 pt-6">
            {founder.credentials.map((c) => (
              <li key={c.en} className="flex items-baseline gap-2">
                <span className="h-1.5 w-1.5 shrink-0 bg-flare" aria-hidden />
                <span className="spec spec-sm text-bone/80">{c.en}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {founder.expertise.map((e) => (
              <li
                key={e.en}
                className="border border-asphalt/40 px-3 py-2 text-[0.78rem] text-asphalt-2"
              >
                {e.he}
              </li>
            ))}
          </ul>

          <Link href="/about" className="link-flare mt-8 inline-block text-sm text-bone">
            עוד על BALLERZ ועל מי שבנה אותה
          </Link>
        </div>
      </div>
    </Section>
  );
}
