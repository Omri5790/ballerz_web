"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/nav";
import { cta } from "@/data/site";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[80] focus:m-3 focus:bg-flare focus:px-4 focus:py-2 focus:text-ink"
      >
        דילוג לתוכן הראשי
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-asphalt/35 bg-ink/95 backdrop-blur-[2px]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1480px] items-center justify-between px-5 md:h-20 md:px-10 lg:px-16">
          <Link href="/" className="flex items-baseline gap-3" aria-label="BALLERZ — דף הבית">
            <Logo className="h-5 text-bone md:h-6" />
            <span className="spec spec-sm hidden text-flare sm:inline">PDS</span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="ניווט ראשי">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex flex-col items-center gap-0.5 text-sm font-medium transition-colors",
                    active ? "text-flare" : "text-bone/85 hover:text-bone",
                  )}
                >
                  <span className="spec spec-sm text-asphalt-2 transition-colors group-hover:text-flare">
                    {item.labelEn}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={cta.join.href}
              className="hidden border border-flare bg-flare px-5 py-3 text-[0.82rem] font-medium leading-none text-ink transition-colors duration-300 hover:bg-transparent hover:text-flare sm:inline-block"
            >
              {cta.join.label}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
              className="flex h-11 w-11 items-center justify-center border border-asphalt/45 text-bone md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300",
                    open && "top-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300",
                    open && "bottom-1.5 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* תפריט מובייל */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-ink transition-[opacity,visibility] duration-400 md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="grid-lab absolute inset-0 opacity-40" aria-hidden />
        <nav className="relative mt-24 flex flex-col px-5" aria-label="ניווט מובייל">
          {primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-baseline justify-between border-b border-asphalt/30 py-5"
            >
              <span className="display t-h3 text-bone group-hover:text-flare">
                {item.labelEn}
              </span>
              <span className="text-sm text-asphalt-2">{item.label}</span>
              <span className="spec spec-sm text-flare">{String(i + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </nav>

        <div className="relative grid grid-cols-2 gap-px bg-asphalt/30 p-px">
          <Link href={cta.clubs.href} className="bg-ink px-5 py-6 text-center">
            <span className="spec block text-asphalt-2">FOR CLUBS</span>
            <span className="mt-1 block text-sm text-bone">{cta.clubs.label}</span>
          </Link>
          <Link href={cta.players.href} className="bg-flare px-5 py-6 text-center">
            <span className="spec block text-ink/70">FOR PLAYERS</span>
            <span className="mt-1 block text-sm font-medium text-ink">
              {cta.players.label}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
