"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/nav";
import { cta } from "@/data/site";
import { centers } from "@/data/centers";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="mx-auto flex h-16 w-full max-w-[1480px] items-center justify-between gap-4 px-5 md:h-20 md:px-10 lg:px-16">
          <Link href="/" className="flex items-baseline gap-3" aria-label="BALLERZ — דף הבית">
            <Logo className="h-5 text-bone md:h-6" />
            <span className="spec spec-sm hidden text-flare sm:inline">PDS</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="ניווט ראשי">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && !item.href.includes("#") && pathname.startsWith(item.href));
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
            {/* CTA קבוע — ה-CTA המרכזי בתקופת ההשקה */}
            <Link
              href={cta.combine.href}
              className="group relative hidden items-center gap-3 overflow-hidden border border-flare bg-flare px-5 py-3 text-[0.82rem] font-medium leading-none text-ink transition-colors duration-500 hover:text-bone sm:inline-flex"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-[left] scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <span className="relative z-10">{cta.combine.label}</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
              className="flex h-11 w-11 items-center justify-center border border-asphalt/45 text-bone lg:hidden"
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
          "fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink transition-[opacity,visibility] duration-400 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="grid-lab absolute inset-0 opacity-40" aria-hidden />

        <nav className="relative mt-20 flex flex-col px-5" aria-label="ניווט מובייל">
          {primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="group flex items-baseline justify-between gap-3 border-b border-asphalt/30 py-4"
            >
              <span className="display text-[1.5rem] leading-none text-bone group-hover:text-flare">
                {item.labelEn}
              </span>
              <span className="flex items-baseline gap-3">
                <span className="text-sm text-asphalt-2">{item.label}</span>
                <span className="spec spec-sm text-flare">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
            </Link>
          ))}

          <p className="spec mt-7 text-asphalt-2">
            {centers.map((c) => c.cityEn).join(" · ")}
          </p>
        </nav>

        {/* CTA תחתון — רוחב מלא */}
        <div className="relative mt-8 flex flex-col gap-px bg-asphalt/30 p-px">
          <Link href={cta.combine.href} onClick={close} className="bg-flare px-5 py-6 text-center">
            <span className="spec block text-ink/70">STEP 01 · REGISTER</span>
            <span className="display-he mt-1.5 block text-[1.15rem] text-ink">
              {cta.combine.label}
            </span>
          </Link>
          <div className="grid grid-cols-2 gap-px bg-asphalt/30">
            <Link href={cta.centers.href} onClick={close} className="bg-ink px-4 py-5 text-center">
              <span className="spec block text-asphalt-2">CENTERS</span>
              <span className="mt-1 block text-sm text-bone">מרכזי האימון</span>
            </Link>
            <Link href={cta.join.href} onClick={close} className="bg-ink px-4 py-5 text-center">
              <span className="spec block text-asphalt-2">JOIN</span>
              <span className="mt-1 block text-sm text-bone">{cta.join.label}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
