import Link from "next/link";
import Image from "next/image";
import { site, cta } from "@/data/site";
import { centers } from "@/data/centers";
import { Container } from "@/components/ui/Section";
import { HalfCourt } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pb-8 pt-28 md:pb-12">
      {/* ---------- רקע ---------- */}
      <div className="absolute inset-0" aria-hidden>
        {site.heroVideo ? (
          <video
            className="h-full w-full object-cover opacity-65"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={site.heroImage ?? undefined}
          >
            <source src={site.heroVideo} type="video/mp4" />
          </video>
        ) : site.heroImage ? (
          <div className="absolute inset-0">
            <Image
              src={site.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="drift object-cover opacity-[0.55]"
            />
            <div className="grid-lab absolute inset-0 opacity-25 mix-blend-overlay" />
          </div>
        ) : (
          <div className="asphalt absolute inset-0">
            <div className="drift absolute inset-0">
              <div className="grid-lab absolute inset-0 opacity-45" />
              <HalfCourt className="absolute start-[-18%] top-1/2 h-[135%] w-auto -translate-y-1/2 text-asphalt/25 md:start-[-6%]" />
              <div className="chainlink absolute inset-y-0 end-0 w-1/3 opacity-40" />
            </div>
          </div>
        )}
        {/* vignette + קריאות */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_15%,rgba(17,17,17,0.9)_100%)]" />
      </div>

      {/* ---------- שורת spec עליונה ---------- */}
      <Container className="pointer-events-none absolute inset-x-0 top-20 hidden md:top-24 md:block">
        <div className="flex items-center gap-4 text-asphalt-2">
          <span className="spec spec-sm">EST {site.since}</span>
          <span className="h-px w-12 bg-asphalt/50" />
          <span className="spec spec-sm">GRADE 7 &amp; UP</span>
          <span className="h-px flex-1 bg-asphalt/30" />
          <span className="spec spec-sm">
            {centers.map((c) => c.cityEn).join(" · ")}
          </span>
        </div>
      </Container>

      {/* ---------- תוכן ---------- */}
      <Container className="relative">
        <div className="flex items-center gap-3" data-reveal style={delay(60)}>
          <span className="h-2 w-2 bg-flare" aria-hidden />
          <span className="spec text-flare">PLAYER DEVELOPMENT SYSTEM</span>
        </div>

        {/* המסר המרכזי — בעברית, כי זו השפה שמוכרת */}
        <h1 className="mt-5 md:mt-7">
          <span className="display-he t-mega-he block text-bone" data-reveal style={delay(120)}>
            אל תתאמן יותר.
          </span>
          <span className="display-he t-mega-he block text-flare" data-reveal style={delay(240)}>
            תדע על מה לעבוד.
          </span>
        </h1>

        <p className="mt-5 md:mt-7" data-reveal style={delay(360)}>
          <span className="display display-wide inline-block text-[0.95rem] leading-[1.15] text-asphalt-2 sm:text-[1.2rem] md:text-[1.6rem]">
            KNOW WHERE YOU ARE. KNOW WHAT COMES NEXT.
          </span>
        </p>

        <div className="mt-8 grid gap-7 border-t border-asphalt/40 pt-7 md:mt-11 md:gap-10 lg:grid-cols-12 lg:items-end">
          <p
            className="body-he max-w-xl text-[0.98rem] leading-relaxed text-bone/80 md:text-base lg:col-span-6"
            data-reveal
            style={delay(440)}
          >
            BALLERZ היא תכנית פיתוח שחקנים לכדורסלנים שרוצים לעלות שלב — אימון מקצועי,
            עבודה עצמאית, מעקב וקהילה.
            <span className="mt-2 block text-asphalt-2">
              מכיתה ז׳ ומעלה · {centers.map((c) => c.city).join(" · ")}
            </span>
          </p>

          {/* CTA — ראשי: Combine. משני: מרכזים */}
          <div
            className="flex w-full flex-col gap-px bg-asphalt/40 sm:w-fit sm:flex-row lg:col-span-6 lg:ms-auto"
            data-reveal
            style={delay(560)}
          >
            <Link
              href={cta.combine.href}
              className="group relative flex min-w-0 items-center justify-between gap-5 overflow-hidden bg-flare px-5 py-5 sm:min-w-[15rem] md:px-6"
            >
              <span className="relative z-10 min-w-0">
                <span className="spec block text-ink/60 transition-colors duration-500 group-hover:text-flare">
                  STEP 01
                </span>
                <span className="mt-1.5 block text-[0.95rem] font-medium text-ink transition-colors duration-500 group-hover:text-bone">
                  {cta.combine.label}
                </span>
              </span>
              <span
                aria-hidden
                className="absolute inset-0 origin-[left] scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <Arrow onFlare />
            </Link>

            <Link
              href={cta.centers.href}
              className="group relative flex min-w-0 items-center justify-between gap-5 overflow-hidden bg-ink-2 px-5 py-5 sm:min-w-[15rem] md:px-6"
            >
              <span className="relative z-10 min-w-0">
                <span className="spec block text-asphalt-2 transition-colors duration-500 group-hover:text-ink/60">
                  CENTERS
                </span>
                <span className="mt-1.5 block text-[0.95rem] text-bone transition-colors duration-500 group-hover:text-ink">
                  {cta.centers.label}
                </span>
              </span>
              <span
                aria-hidden
                className="absolute inset-0 origin-[left] scale-x-0 bg-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <Arrow />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Arrow({ onFlare }: { onFlare?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={`relative z-10 h-2.5 w-6 shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1.5 ${
        onFlare ? "text-ink group-hover:text-bone" : "text-flare"
      }`}
    >
      <path d="M24 6H1M7 1L1 6l6 5" />
    </svg>
  );
}
