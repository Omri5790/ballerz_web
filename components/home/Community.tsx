import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { community } from "@/data/community";
import { delay } from "@/lib/cn";

export default function Community() {
  return (
    <Section id="community" index="09" label="COMMUNITY" meta="THE STANDARD AROUND YOU" tone="ink2">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-6">
          <h2 className="display t-h1" data-reveal>
            {community.claimEn.map((line, i) => (
              <span key={line} className="block">
                {i === community.claimEn.length - 1 ? (
                  <span className="text-flare">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>
          <p className="display-he t-h2-he mt-5 text-bone" data-reveal style={delay(100)}>
            {community.titleHe}
          </p>
          <p className="body-he mt-4 max-w-lg text-bone/75" data-reveal style={delay(160)}>
            {community.body}
          </p>
        </div>

        <div className="md:col-span-6" data-reveal style={delay(140)}>
          <MediaSlot
            slot={community.mediaSlot}
            src={community.image}
            alt="קהילת BALLERZ"
            index="CM1"
            ratio="16/9"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
      </div>

      <ul className="mt-12 grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
        {community.pillars.map((p, i) => (
          <li
            key={p.en}
            className="group bg-ink-2 p-6 transition-colors duration-500 hover:bg-flare"
            data-reveal
            style={delay(60 * i)}
          >
            <span className="spec text-flare transition-colors duration-500 group-hover:text-ink/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display mt-6 text-[1.15rem] leading-[0.95] text-bone transition-colors duration-500 group-hover:text-ink md:text-[1.3rem]">
              {p.en}
            </h3>
            <p className="label-he mt-2 text-bone/85 transition-colors duration-500 group-hover:text-ink">
              {p.he}
            </p>
            <p className="body-he mt-1.5 text-sm text-asphalt-2 transition-colors duration-500 group-hover:text-ink/70">
              {p.line}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
