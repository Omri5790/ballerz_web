import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { membership, personalAddOn } from "@/data/offer";
import { cta } from "@/data/site";
import { MeasureBar } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export default function Membership({ index = "11" }: { index?: string }) {
  return (
    <Section id="membership" index={index} label="MEMBERSHIP" meta="ONE PLAN" tone="bone">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <h2 className="display t-h2 text-ink" data-reveal>
            BALLERZ
            <br />
            ANNUAL
            <br />
            <span className="text-flare">MEMBERSHIP.</span>
          </h2>
          <p className="display-he t-h2-he mt-5 text-ink" data-reveal style={delay(90)}>
            {membership.titleHe}
          </p>
          <p className="body-he mt-5 max-w-sm text-ink/70" data-reveal style={delay(140)}>
            {membership.lead}
          </p>
          <MeasureBar className="mt-8 max-w-[240px] text-ink/25" />
        </div>

        <div className="md:col-span-7" data-reveal style={delay(140)}>
          <div className="border border-ink bg-ink p-7 text-bone md:p-10">
            <div className="flex flex-col gap-1 border-b border-asphalt/35 pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <span className="spec text-flare">{membership.titleEn}</span>
              <span className="label-he text-asphalt-2">{membership.terms}</span>
            </div>

            <div className="mt-7">
              <span className="spec text-asphalt-2">INCLUDED</span>
              <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
                {membership.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-baseline gap-3 border-b border-asphalt/22 py-3"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-flare" aria-hidden />
                    <span className="body-he text-[0.92rem] text-bone/85">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="body-he mt-7 border-s-2 border-flare ps-4 text-[0.95rem] text-bone/85">
              {membership.priceNote}
            </p>
            <p className="body-he mt-3 text-sm text-asphalt-2">{membership.note}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={cta.joinMembership.href} variant="flare" size="lg">
                {cta.joinMembership.label}
              </Button>
              <Button href={cta.combine.href} variant="bone" size="lg">
                {cta.combine.label}
              </Button>
            </div>
          </div>

          {personalAddOn.enabled && (
            <div className="mt-px border border-ink/20 bg-bone-2 p-7 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <span className="spec text-flare">{personalAddOn.titleEn}</span>
                <span className="label-he text-ink/50">ADD-ON</span>
              </div>
              <p className="display-he mt-3 text-[1.1rem] text-ink">{personalAddOn.lead}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {personalAddOn.items.map((it) => (
                  <li
                    key={it.en}
                    className="border border-ink/20 px-3 py-2 text-[0.82rem] text-ink/75"
                  >
                    {it.he}
                  </li>
                ))}
              </ul>
              <p className="body-he mt-5 text-sm text-ink/50">{personalAddOn.note}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
