/**
 * PROOF — THE WORK SHOWS
 * ---------------------------------------------------------------
 * חשוב: אין כאן נתונים אמיתיים ואין המלצות מומצאות.
 * זה שלד מוכן. ברגע שיש חומר אמיתי — ממלאים ומעלים `published: true`.
 */

export type ProofKind =
  | "case-study"
  | "game-transfer"
  | "coach"
  | "parent"
  | "video"
  | "before-after";

export type ProofItem = {
  id: string;
  kind: ProofKind;
  kindEn: string;
  /** מה צריך להיכנס לכאן — מוצג כהנחיה בזמן שאין תוכן */
  brief: string;
  mediaSlot: string;
  published: boolean;
  /** שדות שימולאו בעתיד */
  title?: string;
  body?: string;
  attribution?: string;
  media?: string;
};

export const proofItems: ProofItem[] = [
  {
    id: "p1",
    kind: "case-study",
    kindEn: "PLAYER CASE STUDY",
    brief: "שחקן אחד, נקודת פתיחה, תכנית עבודה, מה השתנה בתוך עונה.",
    mediaSlot: "PORTRAIT · B/W · 4:5",
    published: true, // כוסה ב-data/testimonials.ts
  },
  {
    id: "p2",
    kind: "game-transfer",
    kindEn: "GAME TRANSFER",
    brief: "קליפ אימון לצד אותו פתרון במשחק אמיתי. הוכחה להעברה.",
    mediaSlot: "SPLIT VIDEO · TRAINING / GAME · 16:9",
    published: false,
  },
  {
    id: "p3",
    kind: "coach",
    kindEn: "COACH TESTIMONIAL",
    brief: "מאמן קבוצה שמספר מה הוא רואה אצל שחקן שמגיע ל-BALLERZ.",
    mediaSlot: "QUOTE + NAME + CLUB",
    published: true, // כוסה ב-data/testimonials.ts
  },
  {
    id: "p4",
    kind: "parent",
    kindEn: "PARENT MESSAGE",
    brief: "הודעה אמיתית מהורה. צילום מסך או ציטוט מאושר.",
    mediaSlot: "MESSAGE SCREENSHOT · 1:1",
    published: true, // כוסה ב-data/testimonials.ts
  },
  {
    id: "p5",
    kind: "video",
    kindEn: "VIDEO TESTIMONIAL",
    brief: "שחקן מדבר 20 שניות על מה השתנה אצלו.",
    mediaSlot: "VERTICAL VIDEO · 9:16",
    published: false,
  },
  {
    id: "p6",
    kind: "before-after",
    kindEn: "BEFORE / AFTER",
    brief: "אותה סיטואציה, הפרש של חודשים. בלי גרפיקה מוגזמת.",
    mediaSlot: "TWO CLIPS · SAME ANGLE · 4:5",
    published: false,
  },
];

export const proofCopy = {
  headlineEn: "THE WORK SHOWS.",
  subEn: "FROM WORKOUT TO GAME.",
  bodyHe:
    "אנחנו לא מפרסמים המלצות לפני שיש עבודה מאחוריהן. החומר הזה ייכנס לכאן מתוך העונה הראשונה — קייסים אמיתיים, קליפים מהמשחק, ודברים שנאמרו על ידי אנשים אמיתיים.",
  noteHe: "בבנייה — עונה 1",
};
