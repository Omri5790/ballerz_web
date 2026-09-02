/**
 * גרפיקת מגרש — נכסים ויזואליים מקוריים של BALLERZ.
 * הכל SVG inline: אפס בקשות רשת, אפס תלויות, מתכוונן לכל גודל.
 */

/** חצי מגרש — קווי מגרש נקיים לשימוש כרקע */
export function HalfCourt({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 500 470"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="1" y="1" width="498" height="468" />
      <path d="M110 1v190h280V1" />
      <circle cx="250" cy="191" r="60" />
      <circle cx="250" cy="47" r="9" />
      <path d="M250 38V1" />
      <path d="M210 12h80" strokeWidth="2.4" />
      <path d="M30 1v130a220 220 0 0 0 440 0V1" />
      <circle cx="250" cy="469" r="60" />
    </svg>
  );
}

/** דיאגרמת אימון — X / O / מסלול תנועה. משמש כטקסטורת רקע. */
export function PlayDiagram({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 220"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      {/* offense O */}
      <circle cx="60" cy="170" r="10" />
      <circle cx="250" cy="150" r="10" />
      {/* defense X */}
      <path d="M112 96l18 18M130 96l-18 18" />
      <path d="M212 56l18 18M230 56l-18 18" />
      {/* drive path */}
      <path d="M70 162C110 140 130 120 150 96" strokeDasharray="5 6" />
      {/* pass */}
      <path d="M160 92l78 48" strokeDasharray="2 7" />
      {/* cut arrow */}
      <path d="M150 96l-6 12 14-2z" fill="currentColor" stroke="none" />
      {/* screen */}
      <path d="M244 140h22" strokeWidth="2.6" />
    </svg>
  );
}

/** סימון X בודד */
export function MarkX({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

/** לוגוטייפ BALLERZ — טיפוגרפי, נבנה כ-SVG כדי לשמור על עקביות */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-display)",
        fontVariationSettings: '"wdth" 74',
        fontWeight: 900,
        letterSpacing: "-0.01em",
        display: "inline-block",
        direction: "ltr",
      }}
    >
      BALLERZ
    </span>
  );
}

/** סרגל מדידה — performance lab */
export function MeasureBar({ className }: { className?: string }) {
  const ticks = Array.from({ length: 41 });
  return (
    <div aria-hidden className={className}>
      <div className="flex h-4 w-full items-end gap-px">
        {ticks.map((_, i) => (
          <span
            key={i}
            className="min-w-0 flex-1 bg-current"
            style={{ height: i % 10 === 0 ? "100%" : i % 5 === 0 ? "60%" : "34%", opacity: i % 10 === 0 ? 0.9 : 0.4 }}
          />
        ))}
      </div>
    </div>
  );
}
