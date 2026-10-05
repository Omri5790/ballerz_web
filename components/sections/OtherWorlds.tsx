import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

const worlds = [
  {
    eyebrow: "FOR SCHOOLS",
    titleEn: "RESILIENCE THROUGH BASKETBALL",
    titleHe: "תכנית לבתי ספר",
    body: "חוסן מנטלי, ויסות עצמי והכלה — דרך כדורסל. רשומים במאגר גפ״ן.",
    href: cta.schools.href,
    label: cta.schools.label,
  },
  {
    eyebrow: "FOR CLUBS",
    titleEn: "PLAYER DEVELOPMENT FOR YOUR CLUB",
    titleHe: "מועדונים ואגודות",
    body: "שכבת Player Development מקצועית למועדון — צוות, שיטה, תכנית ותפעול.",
    href: cta.clubs.href,
    label: "לעמוד המועדונים",
  },
];

/**
 * רצועה דקה בתחתית הדף — שני העולמות הנוספים של BALLERZ.
 * יושבת אחרי ה-CTA כדי לא לפצל את תשומת הלב של השחקן.
 */
export default function OtherWorlds() {
  return (
    <section className="relative overflow-hidden border-t border-asphalt/35 bg-ink-2 py-16 md:py-20">
      <div className="chainlink absolute inset-0 opacity-20" aria-hidden />

      <Container className="relative">
        <div className="flex items-center gap-4 pb-8">
          <span className="h-2 w-2 bg-flare" aria-hidden />
          <span className="spec text-asphalt-2">ALSO FROM BALLERZ</span>
          <span className="h-px flex-1 bg-asphalt/35" aria-hidden />
          <span className="spec spec-sm hidden text-asphalt-2 md:inline">
            SCHOOLS · CLUBS
          </span>
        </div>

        <ul className="grid gap-px bg-asphalt/30 md:grid-cols-2">
          {worlds.map((w, i) => (
            <li key={w.eyebrow}>
              <Link
                href={w.href}
                className="group flex h-full flex-col justify-between gap-6 bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink md:p-9"
                data-reveal
                style={delay(80 * i)}
              >
                <span>
                  <span className="spec block text-flare">{w.eyebrow}</span>
                  <span className="display t-h3 mt-5 block text-bone transition-colors duration-500 group-hover:text-flare">
                    {w.titleEn}
                  </span>
                  <span className="display-he mt-3 block text-[1.05rem] text-bone/85">
                    {w.titleHe}
                  </span>
                  <span className="body-he mt-2 block max-w-md text-[0.93rem] text-asphalt-2">
                    {w.body}
                  </span>
                </span>
                <span className="inline-flex items-center gap-4 border-b border-asphalt/45 pb-3 text-sm font-medium text-bone transition-colors duration-500 group-hover:border-flare group-hover:text-flare">
                  {w.label}
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
          ))}
        </ul>
      </Container>
    </section>
  );
}
