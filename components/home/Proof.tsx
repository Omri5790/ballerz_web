import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
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
          הודעות אמיתיות מהורים וממאמנים. לא כתבנו אף מילה בשמם.
        </p>
      </div>

      <div className="mt-10 md:mt-12" data-reveal style={delay(120)}>
        <MediaSlot
          slot="HUDDLE AFTER A SESSION · B/W · 21:9"
          src="/media/standard-huddle.jpg"
          alt="קבוצת BALLERZ בסוף אימון"
          index="PF1"
          ratio="21/9"
          sizes="100vw"
        />
      </div>

      <div className="mt-10 md:mt-14">
        <Testimonials audience="players" />
      </div>
    </Section>
  );
}
