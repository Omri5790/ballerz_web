import MediaSlot from "@/components/ui/MediaSlot";
import type { Block } from "@/data/articles";
import { delay } from "@/lib/cn";

/**
 * מרנדר את גוף הכתבה מתוך בלוקים.
 * התוכן עצמו יושב ב-data/articles.ts — אין כאן טקסט.
 */
export default function ArticleBody({ body }: { body: Block[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      {body.map((b, i) => {
        const d = delay(Math.min(i, 6) * 40);

        switch (b.t) {
          case "lead":
            return (
              <p
                key={i}
                className="body-he lead border-s-2 border-flare ps-5 text-ink/90"
                data-reveal
                style={d}
              >
                {b.text}
              </p>
            );

          case "h2":
            return (
              <div key={i} className="mt-14 md:mt-20" data-reveal style={d}>
                <span className="spec text-flare">{b.en}</span>
                <h2 className="display-he t-h2-he mt-3 text-ink">{b.he}</h2>
                <span
                  aria-hidden
                  className="mt-5 block h-px w-full bg-ink/15"
                />
              </div>
            );

          case "p":
            return (
              <p
                key={i}
                className="body-he mt-6 text-[1.02rem] leading-[1.85] text-ink/80"
                data-reveal
                style={d}
              >
                {b.text}
              </p>
            );

          case "list":
            return (
              <ol key={i} className="mt-8" data-reveal style={d}>
                {b.items.map((item, k) => (
                  <li
                    key={k}
                    className="flex items-baseline gap-4 border-b border-ink/12 py-5 first:border-t first:border-ink/12"
                  >
                    <span className="spec w-7 shrink-0 text-flare">
                      {String(k + 1).padStart(2, "0")}
                    </span>
                    <span className="body-he text-[0.98rem] leading-[1.8] text-ink/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "stat":
            return (
              <figure
                key={i}
                className="mt-10 border border-ink bg-ink p-7 text-bone md:p-9"
                data-reveal
                style={d}
              >
                <span className="display t-h1 block leading-[0.85] text-flare">
                  {b.value}
                </span>
                <figcaption className="body-he mt-5 border-t border-asphalt/35 pt-4 text-[0.98rem] text-bone/90">
                  {b.label}
                  {b.note && (
                    <span className="mt-2 block text-sm text-asphalt-2">{b.note}</span>
                  )}
                </figcaption>
              </figure>
            );

          case "pull":
            return (
              <p
                key={i}
                className="display-he t-h2-he mt-12 text-ink"
                data-reveal
                style={d}
              >
                <span className="text-flare">״</span>
                {b.text}
              </p>
            );

          case "court":
            return (
              <aside
                key={i}
                className="mt-12 border border-ink/20 bg-ink-2 p-7 text-bone md:p-9"
                data-reveal
                style={d}
              >
                <span className="spec text-flare">ON THE COURT</span>
                <h3 className="display-he mt-3 text-[1.15rem] text-bone">{b.title}</h3>
                <p className="body-he mt-4 text-[0.98rem] leading-[1.8] text-bone/80">
                  {b.body}
                </p>
              </aside>
            );

          case "img":
            return (
              <figure key={i} className="mt-12" data-reveal style={d}>
                <MediaSlot
                  slot={b.alt}
                  src={b.src}
                  alt={b.alt}
                  ratio={b.ratio ?? "16/9"}
                  sizes="(max-width: 768px) 100vw, 48rem"
                />
                {b.caption && (
                  <figcaption className="body-he mt-3 border-s-2 border-flare ps-4 text-sm text-ink/60">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "limit":
            return (
              <aside
                key={i}
                className="mt-12 border border-flare/60 p-7 md:p-9"
                data-reveal
                style={d}
              >
                <span className="spec text-flare">WHAT IT DOESN&apos;T SHOW</span>
                <h3 className="display-he mt-3 text-[1.15rem] text-ink">{b.title}</h3>
                <ul className="mt-5">
                  {b.items.map((item, k) => (
                    <li
                      key={k}
                      className="flex items-baseline gap-3 border-b border-ink/12 py-3.5 last:border-0"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 bg-flare" aria-hidden />
                      <span className="body-he text-[0.93rem] leading-[1.75] text-ink/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
            );
        }
      })}
    </div>
  );
}
