import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

export default function ReadyToBuild() {
  return (
    <section id="ready" className="relative overflow-hidden bg-ink pt-20 md:pt-28">
      <div className="grid-lab-lg absolute inset-0 opacity-70" aria-hidden />

      <Container className="relative">
        <div className="flex items-center gap-4 pb-8">
          <span className="h-2 w-2 bg-flare" aria-hidden />
          <span className="spec text-asphalt-2">READY TO BUILD?</span>
          <span className="h-px flex-1 bg-asphalt/35" aria-hidden />
        </div>

        <h2 className="display t-h1 max-w-4xl" data-reveal>
          ONE SYSTEM.
          <br />
          THREE WAYS IN<span className="text-flare">.</span>
        </h2>
      </Container>

      <div className="relative mt-12 grid gap-px bg-asphalt/35 md:mt-16 md:grid-cols-3">
        <Path
          eyebrow="FOR CLUBS"
          title="BUILD THE SYSTEM"
          body="רוצים להקים שכבת Player Development במועדון — בלי להקים מחלקה חדשה?"
          href={cta.clubsTalk.href}
          label={cta.clubsShort.label}
          tone="ink"
        />
        <Path
          eyebrow="FOR SCHOOLS"
          title="BUILD RESILIENCE"
          body="רוצות תכנית חוסן מנטלי לתלמידים — דרך כדורסל, מסל גפ״ן?"
          href="/schools"
          label="לעמוד בתי הספר"
          tone="ink"
        />
        <Path
          eyebrow="FOR PLAYERS & PARENTS"
          title="BUILD YOUR GAME"
          body="רוצים להצטרף לאחד ממרכזי BALLERZ ולהתחיל תהליך פיתוח אישי?"
          href={cta.join.href}
          label={cta.join.label}
          tone="flare"
        />
      </div>
    </section>
  );
}

function Path({
  eyebrow,
  title,
  body,
  href,
  label,
  tone,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  label: string;
  tone: "ink" | "flare";
}) {
  const isFlare = tone === "flare";
  return (
    <Link
      href={href}
      className={`group relative flex min-h-[19rem] flex-col justify-between overflow-hidden p-8 md:min-h-[24rem] md:p-12 ${
        isFlare ? "bg-flare text-ink" : "bg-ink-2 text-bone"
      }`}
      data-reveal
      style={delay(isFlare ? 140 : 60)}
    >
      <span
        aria-hidden
        className={`absolute inset-0 origin-[left] scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 ${
          isFlare ? "bg-ink" : "bg-bone"
        }`}
      />
      <span className="relative z-10">
        <span
          className={`spec block transition-colors duration-500 ${
            isFlare
              ? "text-ink/60 group-hover:text-flare"
              : "text-asphalt-2 group-hover:text-ink/55"
          }`}
        >
          {eyebrow}
        </span>
        <span
          className={`display t-h2 mt-6 block transition-colors duration-500 ${
            isFlare ? "text-ink group-hover:text-bone" : "text-bone group-hover:text-ink"
          }`}
        >
          {title}
        </span>
        <span
          className={`body-he mt-4 block max-w-sm text-[0.95rem] transition-colors duration-500 ${
            isFlare
              ? "text-ink/75 group-hover:text-bone/75"
              : "text-bone/70 group-hover:text-ink/70"
          }`}
        >
          {body}
        </span>
      </span>

      <span
        className={`relative z-10 mt-10 inline-flex items-center gap-4 border-b pb-3 text-sm font-medium transition-colors duration-500 ${
          isFlare
            ? "border-ink/30 text-ink group-hover:border-flare group-hover:text-flare"
            : "border-asphalt/45 text-bone group-hover:border-flare group-hover:text-ink"
        }`}
      >
        {label}
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
  );
}
