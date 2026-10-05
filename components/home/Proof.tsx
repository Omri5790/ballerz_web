import Section from "@/components/ui/Section";
import Testimonials from "@/components/sections/Testimonials";
import { proofCopy } from "@/data/proof";
import { delay } from "@/lib/cn";

export default function Proof({ index = "12" }: { index?: string }) {
  return (
    <Section id="proof" index={index} label="PROOF" meta="REAL MESSAGES" tone="ink2">
      <div className="grid gap-8 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h1" data-reveal>
            THE WORK SHOWS<span className="text-flare">.</span>
          </h2>
          <p
            className="display display-wide mt-2 text-[1.1rem] text-asphalt-2 md:text-[1.5rem]"
            data-reveal
            style={delay(100)}
          >
            {proofCopy.subEn}
          </p>
        </div>
        <p className="body-he text-bone/70 md:col-span-5 md:pt-3" data-reveal style={delay(160)}>
          כל מה שכתוב כאן נאמר על ידי הורים ומאמנים אמיתיים, בהודעות אמיתיות. לא כתבנו
          אף מילה בשמם.
        </p>
      </div>

      <div className="mt-12 md:mt-16">
        <Testimonials audience="players" />
      </div>
    </Section>
  );
}
