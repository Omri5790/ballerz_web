import { testimonialsFor, type Audience } from "@/data/testimonials";
import { cn, delay } from "@/lib/cn";

type Props = {
  audience: Audience;
  tone?: "ink" | "ink2" | "bone";
  limit?: number;
};

/**
 * המלצות בפריסת עמודות (CSS columns) — מסתדרת יפה בכל כמות פריטים,
 * בלי חורים בגריד וכשהציטוטים באורכים שונים.
 */
export default function Testimonials({ audience, tone = "ink2", limit }: Props) {
  const all = testimonialsFor(audience);
  const items = limit ? all.slice(0, limit) : all;
  if (items.length === 0) return null;

  const invert = tone === "bone";

  return (
    <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
      {items.map((t, i) => (
        <figure
          key={t.id}
          className={cn(
            "mb-5 break-inside-avoid border p-6 md:p-7",
            invert ? "border-ink/15 bg-bone" : "border-asphalt/35 bg-ink-2",
          )}
          data-reveal
          style={delay(55 * i)}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="spec text-flare">{t.kindEn}</span>
            <span
              aria-hidden
              className={cn(
                "display text-[2rem] leading-[0.5]",
                invert ? "text-ink/15" : "text-bone/15",
              )}
            >
              &ldquo;
            </span>
          </div>

          <blockquote
            className={cn(
              "body-he mt-5 leading-relaxed",
              t.feature ? "text-[1.05rem]" : "text-[0.96rem]",
              invert ? "text-ink" : "text-bone",
            )}
          >
            {t.quote}
          </blockquote>

          <figcaption
            className={cn(
              "mt-6 flex flex-wrap items-baseline gap-x-3 border-t pt-4",
              invert ? "border-ink/15" : "border-asphalt/30",
            )}
          >
            <span className={cn("text-sm font-medium", invert ? "text-ink" : "text-bone")}>
              {t.name}
            </span>
            <span className={cn("body-he text-sm", invert ? "text-ink/50" : "text-asphalt-2")}>
              {t.role}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
