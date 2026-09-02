import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { delay } from "@/lib/cn";

const points = [
  { en: "MENTAL TOOLS", he: "ויסות עצמי, התמודדות עם כישלון, מסוגלות" },
  { en: "INCLUSION", he: "ערוץ הצלחה לתלמידים שנחסמים בכיתה" },
  { en: "GEFEN REGISTERED", he: "רשומים במאגר משרד החינוך" },
];

/** רצועה קומפקטית בדף הבית — דלת כניסה למנהלות בית ספר */
export default function SchoolsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-asphalt/35 bg-ink-2 py-16 md:py-20">
      <div className="chainlink absolute inset-0 opacity-25" aria-hidden />

      <Container className="relative">
        <div className="flex items-center gap-4 pb-8">
          <span className="h-2 w-2 bg-flare" aria-hidden />
          <span className="spec text-flare">FOR SCHOOLS</span>
          <span className="h-px flex-1 bg-asphalt/35" aria-hidden />
          <span className="spec spec-sm hidden text-asphalt-2 md:inline">
            RESILIENCE THROUGH BASKETBALL
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <h2 className="display t-h2" data-reveal>
              THE BALL IS THE TOOL.
              <br />
              <span className="text-flare">THE CHILD IS THE PROGRAM.</span>
            </h2>
            <p className="body-he mt-5 max-w-lg text-bone/70" data-reveal style={delay(120)}>
              לבתי ספר יש גם מסלול משלהם: תכנית שנתית שמאמנת חוסן מנטלי דרך כדורסל,
              עם דגש על הכלה ועל תלמידים שמתקשים למצוא הצלחה בכיתה.
            </p>
          </div>

          <div className="md:col-span-6">
            <ul className="grid gap-px bg-asphalt/30" data-reveal style={delay(160)}>
              {points.map((p) => (
                <li key={p.en} className="flex flex-wrap items-baseline gap-x-5 gap-y-1 bg-ink-2 px-5 py-4">
                  <span className="display display-wide text-[1.05rem] leading-none text-bone">
                    {p.en}
                  </span>
                  <span className="body-he text-sm text-asphalt-2">{p.he}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/schools"
              className="group mt-6 inline-flex items-center gap-4 border-b border-asphalt/45 pb-3 text-sm font-medium text-bone transition-colors duration-400 hover:border-flare hover:text-flare"
              data-reveal
              style={delay(220)}
            >
              לעמוד בתי הספר
              <svg
                aria-hidden
                viewBox="0 0 24 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-2.5 w-6 transition-transform duration-400 group-hover:-translate-x-2"
              >
                <path d="M24 6H1M7 1L1 6l6 5" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
