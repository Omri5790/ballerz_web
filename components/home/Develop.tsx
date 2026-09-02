import Section, { Container, SectionIndex } from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { skillAreas } from "@/data/system";
import { delay } from "@/lib/cn";

export default function Develop() {
  return (
    <Section id="develop" full tone="ink" className="py-20 md:py-28 lg:py-36">
      <Container>
        <SectionIndex index="05" label="WHAT WE DEVELOP" meta="09 AREAS" />
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <h2 className="display t-h1 md:col-span-7" data-reveal>
            BUILD THE PLAYER.
            <br />
            NOT JUST THE MOVE<span className="text-flare">.</span>
          </h2>
          <p className="body-he text-bone/70 md:col-span-5 md:pt-3" data-reveal style={delay(120)}>
            תרגיל בודד לא הופך שחקן. אנחנו עובדים על תחומים שמרכיבים משחק שלם —
            ובודקים כל אחד מהם מול מגן אמיתי.
          </p>
        </div>
      </Container>

      {/* מסילה אופקית */}
      <div className="mt-12 md:mt-16">
        <div className="rail flex snap-x snap-mandatory gap-px overflow-x-auto pb-6 ps-5 md:ps-10 lg:ps-16">
          {skillAreas.map((s, i) => (
            <article
              key={s.index}
              className="group w-[76vw] shrink-0 snap-start bg-ink-2 sm:w-[42vw] lg:w-[24vw] xl:w-[20rem]"
              data-reveal
              style={delay(40 * i)}
            >
              <MediaSlot
                slot={s.imageSlot}
                src={s.image}
                index={s.index}
                ratio="4/5"
                alt={s.he}
                sizes="(max-width: 640px) 76vw, (max-width: 1024px) 42vw, 20rem"
              />
              <div className="border-t border-asphalt/30 p-5">
                <div className="flex items-baseline justify-between">
                  <span className="spec text-flare">{s.index}</span>
                  <span className="spec spec-sm text-asphalt-2">{s.he}</span>
                </div>
                <h3 className="display mt-3 text-[1.35rem] leading-none text-bone transition-colors duration-500 group-hover:text-flare">
                  {s.en}
                </h3>
                <p className="body-he mt-2 text-[0.88rem] text-bone/60">{s.line}</p>
              </div>
            </article>
          ))}
          <div className="w-5 shrink-0 md:w-10 lg:w-16" aria-hidden />
        </div>

        <Container>
          <div className="flex items-center gap-3 text-asphalt-2">
            <span className="spec spec-sm">SCROLL</span>
            <span className="h-px w-10 bg-asphalt/50" aria-hidden />
            <span className="spec spec-sm">09 / 09</span>
          </div>
        </Container>
      </div>
    </Section>
  );
}
