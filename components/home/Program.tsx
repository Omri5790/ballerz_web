import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import Button from "@/components/ui/Button";
import { coreAreas, programCopy, independentWork, tracking } from "@/data/program";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

export default function Program({
  index = "05",
  showCta = true,
}: {
  index?: string;
  showCta?: boolean;
}) {
  return (
    <Section id="program" index={index} label="THE PROGRAM" meta="03 CORE AREAS" tone="ink">
      <div className="grid gap-8 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display t-h1" data-reveal>
            BUILD THE PLAYER.
            <br />
            <span className="text-flare">NOT JUST THE MOVE.</span>
          </h2>
          <p className="display-he t-h2-he mt-5 text-bone" data-reveal style={delay(100)}>
            {programCopy.headlineHe}
          </p>
        </div>
        <p className="body-he lead text-bone/75 md:col-span-5 md:pt-3" data-reveal style={delay(160)}>
          {programCopy.lead}
        </p>
      </div>

      {/* 3 תחומי הליבה */}
      <div className="mt-12 grid gap-px bg-asphalt/30 md:mt-16 md:grid-cols-3">
        {coreAreas.map((a, i) => (
          <article key={a.index} className="bg-ink-2" data-reveal style={delay(80 * i)}>
            <MediaSlot
              slot={a.imageSlot}
              src={a.image}
              index={a.index}
              ratio="4/5"
              alt={a.he}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="border-t border-asphalt/30 p-6 md:p-7">
              <span className="spec text-flare">{a.index}</span>
              <h3 className="display mt-4 text-[1.4rem] leading-[0.95] text-bone md:text-[1.7rem]">
                {a.en}
              </h3>
              <p className="label-he mt-2 text-bone/85">{a.he}</p>
              <p className="body-he mt-3 text-[0.92rem] text-bone/65">{a.line}</p>

              <ul className="mt-5 space-y-2 border-t border-asphalt/25 pt-4">
                {a.points.map((p) => (
                  <li key={p} className="flex items-baseline gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-flare" aria-hidden />
                    <span className="body-he text-[0.88rem] text-asphalt-2">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="body-he mt-7 text-sm text-asphalt-2" data-reveal>
        {programCopy.note}
      </p>

      {/* עבודה עצמאית + מעקב */}
      <div className="mt-14 grid gap-px bg-asphalt/30 md:mt-20 lg:grid-cols-2">
        {/* INDEPENDENT WORK */}
        <div className="bg-ink-2 p-7 md:p-10" data-reveal>
          <div className="flex items-baseline justify-between gap-4 border-b border-asphalt/30 pb-4">
            <span className="spec text-flare">{independentWork.en}</span>
            <span className="label-he text-asphalt-2">{independentWork.he}</span>
          </div>
          <p className="display-he t-h2-he mt-6 text-bone">{independentWork.lead}</p>
          <p className="body-he mt-4 text-bone/70">{independentWork.body}</p>
          <ul className="mt-7 space-y-3">
            {independentWork.points.map((p, i) => (
              <li key={p} className="flex items-baseline gap-4 border-t border-asphalt/25 pt-3">
                <span className="spec spec-sm shrink-0 text-asphalt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="body-he text-[0.93rem] text-bone/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* TRACKING */}
        <div className="bg-ink-2 p-7 md:p-10" data-reveal style={delay(120)}>
          <div className="flex items-baseline justify-between gap-4 border-b border-asphalt/30 pb-4">
            <span className="spec text-flare">{tracking.en}</span>
            <span className="label-he text-asphalt-2">{tracking.he}</span>
          </div>
          <p className="display-he t-h2-he mt-6 text-bone">{tracking.lead}</p>

          <ul className="mt-7">
            {tracking.metrics.map((m, i) => (
              <li
                key={m.en}
                className="flex items-baseline justify-between gap-4 border-b border-asphalt/25 py-3.5 first:border-t"
              >
                <span className="flex items-baseline gap-3">
                  <span className="spec spec-sm text-flare">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display display-wide text-[1rem] leading-none text-bone">
                    {m.en}
                  </span>
                </span>
                <span className="body-he text-sm text-asphalt-2">{m.he}</span>
              </li>
            ))}
          </ul>

          <p className="label-he mt-6 inline-block border border-flare/50 px-3 py-2 text-flare">
            {tracking.note}
          </p>
        </div>
      </div>

      {showCta && (
        <div className="mt-10 flex flex-wrap gap-4" data-reveal>
          <Button href={cta.combine.href} variant="flare" size="lg">
            {cta.combine.label}
          </Button>
          <Button href={cta.program.href} variant="bone" size="lg">
            כל התכנית המקצועית
          </Button>
        </div>
      )}
    </Section>
  );
}
