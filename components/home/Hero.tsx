import Link from "next/link";
import Image from "next/image";
import { site, cta } from "@/data/site";
import { Container } from "@/components/ui/Section";
import { HalfCourt } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pb-8 pt-28 md:pb-10">
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
              className="drift object-cover opacity-70"
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_20%,rgba(17,17,17,0.85)_100%)]" />
      </div>

      {/* ---------- שורת spec עליונה ---------- */}
      <Container className="pointer-events-none absolute inset-x-0 top-20 hidden md:top-24 md:block">
        <div className="flex items-center gap-4 text-asphalt-2">
          <span className="spec spec-sm">EST {site.since}</span>
          <span className="h-px w-16 bg-asphalt/50" />
          <span className="spec spec-sm">ISRAEL</span>
          <span className="h-px flex-1 bg-asphalt/30" />
          <span className="spec spec-sm">FOR PLAYERS · FOR CLUBS</span>
        </div>
      </Container>

      {/* ---------- תוכן ---------- */}
      <Container className="relative">
        <div className="flex items-center gap-3" data-reveal style={delay(60)}>
          <span className="h-2 w-2 bg-flare" aria-hidden />
          <span className="spec text-flare">{site.tagline}</span>
        </div>

        <h1 className="mt-5 md:mt-7">
          <span data-reveal-line style={delay(120)}>
            <span className="display t-mega text-bone">BUILD</span>
          </span>
          <span data-reveal-line style={delay(260)}>
            <span className="display t-mega text-bone">
              YOUR GAME<span className="text-flare">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-8 grid gap-8 border-t border-asphalt/40 pt-7 md:mt-12 md:grid-cols-12 md:items-end">
          <p
            className="body-he max-w-md text-[0.98rem] leading-relaxed text-bone/75 md:col-span-5 md:text-base"
            data-reveal
            style={delay(420)}
          >
            {site.taglineHe}
            <span className="mt-2 block text-asphalt-2">
              אימון שבועי, תכנית שנתית, תחרות חודשית ומתודולוגיה אחת — לשחקנים ולמועדונים.
            </span>
          </p>

          <div
            className="flex w-full flex-col gap-px bg-asphalt/40 sm:w-fit sm:flex-row md:col-span-7 md:ms-auto"
            data-reveal
            style={delay(540)}
          >
            <Link
              href={cta.clubs.href}
              className="group relative flex min-w-[220px] items-center justify-between gap-6 overflow-hidden bg-ink-2 px-6 py-5 transition-colors"
            >
              <span className="relative z-10">
                <span className="spec block text-asphalt-2 transition-colors group-hover:text-ink/60">
                  FOR CLUBS
                </span>
                <span className="mt-1.5 block text-[0.95rem] text-bone transition-colors group-hover:text-ink">
                  {cta.clubs.label}
                </span>
              </span>
              <span
                aria-hidden
                className="absolute inset-0 origin-[left] scale-x-0 bg-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <Arrow />
            </Link>

            <Link
              href={cta.players.href}
              className="group relative flex min-w-[220px] items-center justify-between gap-6 overflow-hidden bg-flare px-6 py-5"
            >
              <span className="relative z-10">
                <span className="spec block text-ink/60 transition-colors group-hover:text-asphalt-2">
                  FOR PLAYERS &amp; PARENTS
                </span>
                <span className="mt-1.5 block text-[0.95rem] font-medium text-ink transition-colors group-hover:text-bone">
                  {cta.players.label}
                </span>
              </span>
              <span
                aria-hidden
                className="absolute inset-0 origin-[left] scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <Arrow onFlare />
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
