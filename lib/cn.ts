export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** מחזיר משתנה CSS להשהיית reveal */
export function delay(ms: number): React.CSSProperties {
  return { ["--reveal-delay" as string]: `${ms}ms` };
}
