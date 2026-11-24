import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import MediaSlot from "@/components/ui/MediaSlot";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { publishedArticles } from "@/data/articles";
import { site } from "@/data/site";
import { delay } from "@/lib/cn";

export const metadata: Metadata = {
  title: "כתבות — חינוך, חוסן וכדורסל",
  description:
    "כתבות של BALLERZ למנהלות, יועצות ורכזות: קשב, אומץ, התמדה והרגלים — מה המחקר באמת מראה, ומה הוא לא מראה. כל נתון עם מקור.",
  alternates: { canonical: "/schools/articles" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "BALLERZ — כתבות לבתי ספר",
  inLanguage: "he",
  url: site.url + "/schools/articles",
  publisher: { "@type": "Organization", name: site.name },
};

export default function ArticlesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="ARTICLES"
        image="/media/intent-notes.jpg"
        meta="EVERY NUMBER HAS A SOURCE"
        titleEn={
          <>
            WHAT THE
            <br />
            RESEARCH SAYS<span className="text-flare">.</span>
          </>
        }
        lead="כתבות על החיבור בין כדורסל לחינוך — קשב, אומץ, התמדה והרגלים. כל נתון מגיע ממחקר עם קישור, ובכל כתבה יש גם מה שהמחקר לא מראה."
      >
        <Button href="/schools" variant="bone" size="lg">
          לעמוד בתי הספר
        </Button>
      </PageHero>

      <Section
        index="01"
        label="ALL ARTICLES"
        meta={String(publishedArticles.length).padStart(2, "0") + " PUBLISHED"}
        tone="ink"
      >
        <ul>
          {publishedArticles.map((a, i) => (
            <li key={a.slug} data-reveal style={delay(80 * i)}>
              <Link
                href={"/schools/articles/" + a.slug}
                className="group grid gap-5 border-t border-asphalt/35 py-9 last:border-b md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-3">
                  <MediaSlot
                    slot={a.topicEn + " · B/W · 4:5"}
                    src={a.heroImage}
                    alt={a.titleHe}
                    index={String(i + 1).padStart(2, "0")}
                    ratio="4/5"
                    sizes="(max-width: 768px) 100vw, 22vw"
                  />
                </div>

                <div className="md:col-span-3">
                  <span className="spec text-flare">{a.topicEn}</span>
                  <h2 className="display t-h3 mt-3 leading-none text-bone transition-colors duration-500 group-hover:text-flare">
                    {a.titleEn}
                  </h2>
                  <p className="spec spec-sm mt-4 text-asphalt-2">
                    {a.readingMinutes} MIN READ
                  </p>
                </div>

                <div className="md:col-span-6">
                  <h3 className="display-he text-[1.25rem] text-bone md:text-[1.5rem]">
                    {a.titleHe}
                  </h3>
                  <p className="body-he mt-3 max-w-2xl text-[0.98rem] leading-[1.8] text-bone/70">
                    {a.dek}
                  </p>
                  <p className="body-he mt-4 border-s-2 border-flare ps-4 text-sm text-asphalt-2">
                    {a.takeaway}
                  </p>
                  <span className="link-flare mt-5 inline-block text-sm font-medium text-flare">
                    לכתבה המלאה ←
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="body-he mt-10 max-w-2xl text-sm text-asphalt-2" data-reveal>
          הכתבות נכתבות למנהלות, יועצות ורכזות חינוך חברתי. אם יש נושא שהייתם רוצים
          שנכתוב עליו —{" "}
          <Link href="/schools#school-contact" className="link-flare text-bone">
            כתבו לנו
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
