import Link from "next/link";
import { site } from "@/data/site";
import { footerNav } from "@/data/nav";
import { centers } from "@/data/centers";
import { Container } from "@/components/ui/Section";
import { MeasureBar } from "@/components/ui/CourtArt";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-2 pt-20 md:pt-28">
      <div className="grid-lab-lg absolute inset-0 opacity-60" aria-hidden />

      <Container className="relative">
        <div className="grid gap-12 border-b border-asphalt/30 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="spec text-flare">{site.tagline}</p>
            <p className="body-he mt-4 max-w-sm text-sm text-asphalt-2">
              {site.taglineHe}
            </p>
            <MeasureBar className="mt-8 max-w-[240px] text-asphalt/70" />
          </div>

          <nav className="md:col-span-3" aria-label="ניווט תחתון">
            <p className="spec spec-sm text-asphalt-2">NAVIGATE</p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-flare text-sm text-bone/80 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="spec spec-sm text-asphalt-2">CENTERS</p>
            <ul className="mt-5 space-y-3">
              {centers.map((c) => (
                <li key={c.id} className="text-sm text-bone/80">
                  <span className="spec spec-sm block text-asphalt-2">{c.cityEn}</span>
                  {c.city}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="spec spec-sm text-asphalt-2">CONTACT</p>
            <ul className="mt-5 space-y-3 text-sm text-bone/80">
              {site.contact.email && (
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="link-flare break-all"
                    dir="ltr"
                  >
                    {site.contact.email}
                  </a>
                </li>
              )}
              {site.contact.phone && (
                <li>
                  <a href={`tel:${site.contact.phone}`} className="link-flare" dir="ltr">
                    {site.contact.phone}
                  </a>
                </li>
              )}
              {site.contact.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${site.contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-flare"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {site.social.instagram && (
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-flare"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="spec spec-sm text-asphalt-2">
            © {year} {site.name} · ALL RIGHTS RESERVED
          </p>
          <p className="spec spec-sm text-asphalt-2">BUILT WITH INTENT · EST {site.since}</p>
        </div>
      </Container>

      {/* לוגוטייפ ענק חתוך — חתימת המותג */}
      <div className="relative select-none overflow-hidden" aria-hidden>
        <Logo className="mx-auto block h-[16vw] translate-y-[16%] text-bone/[0.06]" />
      </div>
    </footer>
  );
}
