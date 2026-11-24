import Image from "next/image";
import { Container } from "@/components/ui/Section";
import { HalfCourt } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

type Props = {
  eyebrow: string;
  /** תמונת רקע. בלי ערך — נשארת טקסטורת האספלט */
  image?: string | null;
  titleEn: React.ReactNode;
  lead?: string;
  meta?: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, image, titleEn, lead, meta, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 md:pb-24 md:pt-44">
      <div className="absolute inset-0" aria-hidden>
        {image ? (
          <>
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
            <div className="grid-lab absolute inset-0 opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/45" />
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
        <div className="flex items-center gap-4 pb-8">
          <span className="h-2 w-2 bg-flare" aria-hidden />
          <span className="spec text-flare">{eyebrow}</span>
          <span className="h-px flex-1 bg-asphalt/40" aria-hidden />
          {meta && <span className="spec spec-sm hidden text-asphalt-2 md:inline">{meta}</span>}
        </div>

        <h1 className="display t-h1 max-w-5xl" data-reveal>
          {titleEn}
        </h1>

        {lead && (
          <p
            className="body-he lead mt-8 max-w-2xl text-bone/75"
            data-reveal
            style={delay(140)}
          >
            {lead}
          </p>
        )}

        {children && (
          <div className="mt-10" data-reveal style={delay(220)}>
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
