import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  index?: string;
  label?: string;
  /** טקסט קטן שמופיע בקצה הנגדי של שורת הכותרת */
  meta?: string;
  tone?: "ink" | "ink2" | "bone";
  className?: string;
  full?: boolean;
  children: React.ReactNode;
};

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1480px] px-5 md:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
}

/** שורת אינדקס — ה-DNA החוזר של האתר */
export function SectionIndex({
  index,
  label,
  meta,
  invert,
}: {
  index?: string;
  label?: string;
  meta?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 pb-8 md:pb-12",
        invert ? "text-ink/60" : "text-asphalt-2",
      )}
    >
      <span className="inline-block h-2 w-2 shrink-0 bg-flare" aria-hidden />
      {index && (
        <span className={cn("spec", invert ? "text-ink" : "text-bone")}>{index}</span>
      )}
      {label && <span className="spec">{label}</span>}
      <span
        aria-hidden
        className={cn(
          "h-px flex-1",
          invert ? "bg-ink/20" : "bg-asphalt/40",
        )}
      />
      {meta && <span className="spec spec-sm hidden md:inline">{meta}</span>}
    </div>
  );
}

export default function Section({
  id,
  index,
  label,
  meta,
  tone = "ink",
  className,
  full = false,
  children,
}: SectionProps) {
  const toneClass =
    tone === "bone"
      ? "bg-bone text-ink"
      : tone === "ink2"
        ? "bg-ink-2 text-bone"
        : "bg-ink text-bone";

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", toneClass, className)}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-px",
          tone === "bone" ? "bg-ink/15" : "bg-asphalt/35",
        )}
      />
      {full ? (
        children
      ) : (
        <Container className="py-20 md:py-28 lg:py-36">
          {(index || label) && (
            <SectionIndex
              index={index}
              label={label}
              meta={meta}
              invert={tone === "bone"}
            />
          )}
          {children}
        </Container>
      )}
    </section>
  );
}
