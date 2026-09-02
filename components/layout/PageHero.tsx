import { Container } from "@/components/ui/Section";
import { HalfCourt } from "@/components/ui/CourtArt";
import { delay } from "@/lib/cn";

type Props = {
  eyebrow: string;
  titleEn: React.ReactNode;
  lead?: string;
  meta?: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, titleEn, lead, meta, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 md:pb-24 md:pt-44">
      <div className="absolute inset-0" aria-hidden>
        <div className="asphalt absolute inset-0" />
        <div className="grid-lab absolute inset-0 opacity-35" />
        <HalfCourt className="absolute -top-1/3 end-[-14%] h-[190%] w-auto text-asphalt/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
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
