import { cn } from "@/lib/cn";

type Props = {
  items: string[];
  className?: string;
  tone?: "ink" | "bone" | "flare";
  fast?: boolean;
  reverse?: boolean;
};

export default function Ticker({
  items,
  className,
  tone = "ink",
  fast,
  reverse,
}: Props) {
  const doubled = [...items, ...items];

  const toneClass =
    tone === "flare"
      ? "bg-flare text-ink border-y border-ink/20"
      : tone === "bone"
        ? "bg-bone text-ink border-y border-ink/15"
        : "bg-ink text-bone border-y border-asphalt/35";

  return (
    <div
      aria-hidden
      className={cn("relative overflow-hidden py-3.5", toneClass, className)}
    >
      <div
        className={cn(
          "ticker-track",
          fast && "ticker-track--fast",
          reverse && "ticker-track--rev",
        )}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="display display-wide text-[0.95rem] md:text-[1.15rem] whitespace-nowrap px-5 md:px-7">
              {item}
            </span>
            <span
              className={cn(
                "h-1.5 w-1.5 rotate-45",
                tone === "flare" ? "bg-ink" : "bg-flare",
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
