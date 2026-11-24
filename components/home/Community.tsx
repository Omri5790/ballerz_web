import Link from "next/link";
import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import { community } from "@/data/community";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

/**
 * COMMUNITY — רצועה, לא Section מלא.
 * התמונה נושאת את המסר; שש הכתובות מתחתיה הן רשימה סרוקה, לא פסקאות.
 * (הגרסה הקודמת הייתה Section מלא עם כרטיסים — יותר מדי גלילה על אותו תוכן.)
 */
export default function Community({ index = "08" }: { index?: string }) {
  return (
    <Section
      id="community"
      index={index}
      label="COMMUNITY"
      meta="THE STANDARD AROUND YOU"
      tone="ink2"
    >
      <div className="relative" data-reveal>
        <MediaSlot
          slot={community.mediaSlot}
          src={community.image}
          alt="קהילת BALLERZ"
          index="CM1"
          ratio="21/9"
          sizes="100vw"
        />

        {/* הכותרת יושבת על התמונה — חוסך בלוק טקסט נפרד */}
        <div className="pointer-events-none mt-6 flex items-end md:absolute md:inset-0 md:mt-0 md:bg-gradient-to-t md:from-ink md:via-ink/35 md:to-transparent md:p-10">
          <div>
            <h2 className="display t-h3 md:t-h2">
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
            <p className="display-he mt-2.5 text-[1rem] text-bone/90 md:mt-3 md:text-[1.25rem]">
              {community.titleHe}
            </p>
          </div>
        </div>
      </div>

      {/* שש כתובות — בלי פסקאות */}
      <ul className="mt-px grid gap-px bg-asphalt/30 sm:grid-cols-2 lg:grid-cols-3">
        {community.pillars.map((p, i) => (
          <li
            key={p.en}
            className="group flex items-baseline gap-4 bg-ink-2 px-5 py-4 transition-colors duration-500 hover:bg-flare md:px-6 md:py-5"
            data-reveal
            style={delay(40 * i)}
          >
            <span className="spec spec-sm shrink-0 text-flare transition-colors duration-500 group-hover:text-ink/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4">
              <span className="display-he text-[1rem] text-bone transition-colors duration-500 group-hover:text-ink">
                {p.he}
              </span>
              <span className="spec spec-sm text-asphalt-2 transition-colors duration-500 group-hover:text-ink/60">
                {p.en}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3" data-reveal>
        <p className="body-he text-sm text-asphalt-2">{community.body}</p>
        <Link href={cta.combine.href} className="link-flare text-sm font-medium text-flare">
          {cta.combine.label} ←
        </Link>
      </div>
    </Section>
  );
}
