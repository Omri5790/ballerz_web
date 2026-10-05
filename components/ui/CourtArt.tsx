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

/**
 * עמדת מדידה — Combine.
 * מוט מדידה עם שנתות, משטח קפיצה וכדור. קו נקי בשפה של BALLERZ,
 * בלי מיתוג של אף גוף אחר ובלי צילום חיצוני.
 */
export function CombineRig({ className }: { className?: string }) {
  const ticks = Array.from({ length: 17 });
  return (
    <svg
      aria-hidden
      viewBox="0 0 420 300"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.3"
    >
      {/* רצפה */}
      <path d="M8 262h404" strokeWidth="1.6" />
      <path d="M8 272h404" opacity="0.35" />

      {/* משטח הקפיצה */}
      <path d="M232 262v-16h126v16z" />
      <path d="M248 254h94" opacity="0.5" />

      {/* בסיס המוט */}
      <path d="M140 262v-22h78v22z" />
      <path d="M152 251h54" opacity="0.5" />

      {/* המוט */}
      <path d="M179 240V26" strokeWidth="2.2" />

      {/* שנתות מדידה */}
      {ticks.map((_, i) => {
        const y = 36 + i * 12;
        const long = i % 4 === 0;
        return (
          <path
            key={i}
            d={`M179 ${y}h${long ? 26 : 14}`}
            opacity={long ? 0.95 : 0.45}
            strokeWidth={long ? 1.6 : 1}
          />
        );
      })}

      {/* סמן ההישג */}
      <path d="M179 60h44" stroke="currentColor" strokeWidth="2.6" />
      <path d="M223 54l12 6-12 6z" fill="currentColor" stroke="none" />

      {/* כדור */}
      <circle cx="96" cy="243" r="19" />
      <path d="M77 243h38M96 224v38" opacity="0.55" />
      <path d="M83 230c9 8 9 18 0 26M109 230c-9 8-9 18 0 26" opacity="0.55" />

      {/* חצובה / מצלמה */}
      <path d="M330 262l22-96M374 262l-22-96M352 166v-14" opacity="0.6" />
      <path d="M338 142h28v12h-28z" opacity="0.6" />

      {/* קווי מדידה */}
      <path d="M296 262V60" strokeDasharray="3 6" opacity="0.4" />
      <path d="M288 60h16M288 262h16" opacity="0.4" />
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
