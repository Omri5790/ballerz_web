import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  /** ההנחיה לצילום — מוצגת כל עוד אין קובץ. זה גם ה-brief שלך לצלם. */
  slot: string;
  src?: string | null;
  alt?: string;
  index?: string;
  ratio?: "4/5" | "3/4" | "1/1" | "16/9" | "9/16" | "21/9";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * מסגרת מדיה.
 * יש קובץ → תמונה מותאמת (next/image, lazy כברירת מחדל).
 * אין קובץ → placeholder מעוצב שמתפקד כבריף צילום. לא נראה שבור.
 */
export default function MediaSlot({
  slot,
  src,
  alt,
  index,
  ratio = "4/5",
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: Props) {
  return (
    <figure
      className={cn(
        "relative w-full overflow-hidden bg-ink-2",
        className,
      )}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="asphalt absolute inset-0">
          <div className="grid-lab absolute inset-0 opacity-50" />
          {/* crosshair */}
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full text-asphalt/45"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="bracket absolute inset-3" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <span className="spec text-flare">{index ? `IMG_${index}` : "IMG"}</span>
            <span className="spec spec-sm max-w-[85%] leading-relaxed text-asphalt-2">
              {slot}
            </span>
          </div>
        </div>
      )}
    </figure>
  );
}
