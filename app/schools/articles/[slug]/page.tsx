import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section, { Container } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ArticleBody from "@/components/sections/ArticleBody";
import { HalfCourt } from "@/components/ui/CourtArt";
import { publishedArticles, articleBySlug } from "@/data/articles";
import { site } from "@/data/site";
import { delay } from "@/lib/cn";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) return {};

  return {
    title: a.titleHe,
    description: a.dek,
    alternates: { canonical: "/schools/articles/" + a.slug },
    openGraph: {
      type: "article",
      title: a.titleHe + " — " + site.name,
      description: a.dek,
      url: site.url + "/schools/articles/" + a.slug,
      publishedTime: a.date,
    },
  };
}

/** 2026-11-21 → 21.11.2026 */
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return d + "." + m + "." + y;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) notFound();

  const others = publishedArticles.filter((x) => x.slug !== a.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.titleHe,
    description: a.dek,
    inLanguage: "he",
    datePublished: a.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: site.url + "/schools/articles/" + a.slug,
    citation: a.sources.map((s) => s.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------- כותרת ---------- */}
      <header className="relative overflow-hidden bg-ink pb-16 pt-32 md:pb-20 md:pt-44">
        <div className="absolute inset-0" aria-hidden>
          {a.heroImage ? (
            <>
              <Image
                src={a.heroImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-45"
              />
              <div className="grid-lab absolute inset-0 opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
            </>
          ) : (
            <>
              <div className="asphalt absolute inset-0" />
              <div className="grid-lab absolute inset-0 opacity-35" />
              <HalfCourt className="absolute -top-1/3 end-[-14%] h-[190%] w-auto text-asphalt/18" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
            </>
          )}
        </div>

        <Container className="relative">
          <div className="flex flex-wrap items-center gap-4 pb-8">
            <span className="h-2 w-2 bg-flare" aria-hidden />
            <Link href="/schools/articles" className="spec text-flare link-flare">
              ARTICLES
            </Link>
            <span className="h-px flex-1 bg-asphalt/40" aria-hidden />
            <span className="spec spec-sm text-asphalt-2">
              {a.topicEn} · {a.readingMinutes} MIN · {formatDate(a.date)}
            </span>
          </div>

          <h1 className="display t-h1 max-w-5xl" data-reveal>
            {a.titleEn}
          </h1>
          <p className="display-he t-h2-he mt-6 max-w-3xl text-bone" data-reveal style={delay(100)}>
            {a.titleHe}
          </p>
          <p
            className="body-he lead mt-6 max-w-2xl text-bone/75"
            data-reveal
            style={delay(160)}
          >
            {a.dek}
          </p>
        </Container>
      </header>

      {/* ---------- גוף הכתבה ---------- */}
      <Section tone="bone" full className="py-14 md:py-20">
        <Container>
          <ArticleBody body={a.body} />
        </Container>
      </Section>

      {/* ---------- מקורות ---------- */}
      <Section
        index="—"
        label="SOURCES"
        meta={String(a.sources.length).padStart(2, "0") + " REFERENCES"}
        tone="ink2"
      >
        <div className="mx-auto max-w-3xl">
          <p className="body-he text-sm text-asphalt-2" data-reveal>
            כל נתון בכתבה מגיע מאחד המקורות הבאים. לא הוספנו מספר בלי מקור, ולא ניסחנו
            טענה חזקה יותר ממה שהמחקר מראה.
          </p>
          <ol className="mt-7">
            {a.sources.map((s, i) => (
              <li
                key={s.url}
                className="flex items-baseline gap-4 border-b border-asphalt/25 py-4 first:border-t"
                data-reveal
                style={delay(30 * i)}
              >
                <span className="spec spec-sm w-7 shrink-0 text-flare">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-flare text-[0.92rem] leading-relaxed text-bone/80"
                >
                  {s.text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ---------- המשך ---------- */}
      <Section index="—" label="NEXT" meta="MORE FROM BALLERZ" tone="ink">
        <div className="grid gap-px bg-asphalt/30 md:grid-cols-2">
          {others.map((o, i) => (
            <Link
              key={o.slug}
              href={"/schools/articles/" + o.slug}
              className="group flex flex-col justify-between gap-6 bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 md:p-9"
              data-reveal
              style={delay(80 * i)}
            >
              <span>
                <span className="spec block text-flare">{o.topicEn}</span>
                <span className="display t-h3 mt-4 block text-bone transition-colors duration-500 group-hover:text-flare">
                  {o.titleEn}
                </span>
                <span className="display-he mt-3 block text-[1.05rem] text-bone/85">
                  {o.titleHe}
                </span>
              </span>
              <span className="inline-flex items-center gap-4 border-b border-asphalt/45 pb-3 text-sm text-bone transition-colors duration-500 group-hover:border-flare group-hover:text-flare">
                לכתבה
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
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4" data-reveal>
          <Button href="/schools#school-contact" variant="flare" size="lg">
            דברו איתנו על התכנית
          </Button>
          <Button href="/schools/articles" variant="bone" size="lg">
            לכל הכתבות
          </Button>
        </div>
      </Section>
    </>
  );
}
