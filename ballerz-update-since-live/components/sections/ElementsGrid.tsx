import Link from "next/link";
import MediaSlot from "@/components/ui/MediaSlot";
import { elements } from "@/data/elements";
import { articleBySlug } from "@/data/articles";
import { delay } from "@/lib/cn";

/**
 * שבעת האלמנטים כרשת של כרטיסים.
 * הכרטיס מראה תמונה, שם ומשפט אחד — זה מה שרוב הקוראים יראו.
 * העומק (הגדרה, למה, איך זה מתאמן) נפתח בלחיצה, בלי לעזוב את העמוד.
 */
export default function ElementsGrid() {
  return (
    <ul className="grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
      {elements.map((el, i) => {
        const article = el.articleSlug ? articleBySlug(el.articleSlug) : undefined;
        return (
          <li key={el.index} className="bg-bone" data-reveal style={delay(45 * i)}>
            <article className="flex h-full flex-col">
              <div className="relative">
                <MediaSlot
                  slot={el.en + " · B/W · 4:5"}
                  src={el.image}
                  alt={el.he}
                  index={el.index}
                  ratio="4/5"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                  <span className="spec text-flare">{el.index}</span>
                  <h3 className="display mt-2 text-[1.35rem] leading-none text-bone md:text-[1.5rem]">
                    {el.en}
                  </h3>
                  <p className="display-he mt-1.5 text-[1.05rem] text-bone/90">{el.he}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <p className="body-he text-[0.95rem] leading-[1.7] text-ink/80">{el.card}</p>

                <details className="faq-item mt-4 border-t border-ink/15 pt-3">
                  <summary className="flex items-center justify-between gap-3">
                    <span className="spec spec-sm text-ink/45">HOW IT IS TRAINED</span>
                    <span
                      aria-hidden
                      className="relative h-5 w-5 shrink-0 border border-ink/25 text-flare"
                    >
                      <span className="absolute inset-x-[25%] top-1/2 h-px -translate-y-1/2 bg-current" />
                      <span className="faq-bar-v absolute inset-y-[25%] start-1/2 w-px bg-current" />
                    </span>
                  </summary>

                  <div className="pt-4">
                    <p className="body-he text-[0.9rem] leading-[1.75] text-ink/75">
                      {el.definition}
                    </p>
                    <p className="body-he mt-3 text-[0.88rem] leading-[1.75] text-ink/55">
                      {el.why}
                    </p>

                    <div className="mt-4 border border-ink/15 bg-ink p-4 text-bone">
                      <span className="spec spec-sm text-flare">ON THE COURT</span>
                      <p className="body-he mt-2 text-[0.86rem] leading-[1.7] text-bone/80">
                        {el.how}
                      </p>
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {el.trains.map((t) => (
                        <li
                          key={t}
                          className="border border-ink/20 px-2.5 py-1 text-[0.72rem] text-ink/65"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    {article && (
                      <Link
                        href={"/schools/articles/" + article.slug}
                        className="link-flare mt-4 inline-block text-[0.82rem] font-medium text-flare"
                      >
                        כתבה מלאה ←
                      </Link>
                    )}
                  </div>
                </details>
              </div>
            </article>
          </li>
        );
      })}

      {/* התא השמיני — סוגר את הרשת ומוביל הלאה */}
      <li className="bg-ink" data-reveal style={delay(45 * elements.length)}>
        <Link
          href="/schools/articles"
          className="group flex h-full flex-col justify-between gap-6 p-6 md:p-7"
        >
          <span>
            <span className="spec block text-flare">THE RESEARCH</span>
            <span className="display t-h3 mt-4 block leading-none text-bone transition-colors duration-500 group-hover:text-flare">
              EVERY NUMBER
              <br />
              HAS A SOURCE
            </span>
            <span className="body-he mt-4 block text-[0.92rem] leading-[1.7] text-bone/70">
              כתבות על האלמנטים — מה המחקר מראה, ומה הוא לא.
            </span>
          </span>
          <span className="inline-flex items-center gap-3 border-b border-asphalt/45 pb-3 text-sm text-bone transition-colors duration-500 group-hover:border-flare group-hover:text-flare">
            לכתבות
            <svg
              aria-hidden
              viewBox="0 0 24 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-2.5 w-6 transition-transform duration-500 group-hover:-translate-x-2"
            >
              <path d="M24 6H1M7 1L1 6l6 5" />
            </svg>
          </span>
        </Link>
      </li>
    </ul>
  );
}
