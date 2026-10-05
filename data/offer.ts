/**
 * ההצעה — מה מקבלים בחברות
 * ---------------------------------------------------------------
 * ⚠️ מחירים לא מוצגים באתר במכוון. המחיר נמסר בשיחה אישית.
 * אם בעתיד תרצה להציג מחיר — להוסיף שדה כאן ולהציג אותו ב-Membership.tsx.
 */

export type OfferItem = {
  index: string;
  en: string;
  he: string;
  line: string;
};

export const offerStack: OfferItem[] = [
  {
    index: "01",
    en: "PLAYER MAP + ENTRY ASSESSMENT",
    he: "Player Map ואבחון פתיחה",
    line: "איפה אתה היום, מה הפער, ומה הפוקוס הראשון.",
  },
  {
    index: "02",
    en: "WEEKLY PLAYER DEVELOPMENT SESSION",
    he: "אימון Player Development שבועי",
    line: "קבוצה קטנה, פוקוס אחד, הרבה נגיעות.",
  },
  {
    index: "03",
    en: "INDEPENDENT WORK PLAN",
    he: "תכנית עבודה עצמאית",
    line: "מה לעשות בין האימונים — כתוב, לא בעל פה.",
  },
  {
    index: "04",
    en: "WEEKLY TRACKING",
    he: "מעקב שבועי",
    line: "עבודה, נוכחות וביצוע — נמדדים ונראים.",
  },
  {
    index: "05",
    en: "MEASUREMENTS & PROGRESS REVIEW",
    he: "מדידות והערכת התקדמות",
    line: "נקודות בדיקה במהלך השנה, מול ה-Baseline.",
  },
  {
    index: "06",
    en: "MONTHLY TOURNAMENT",
    he: "טורניר חודשי",
    line: "תחרות קבועה מול שחקני BALLERZ. חלק מהחברות.",
  },
  {
    index: "07",
    en: "BALLERZ COMMUNITY",
    he: "קהילת BALLERZ",
    line: "קבוצה של שחקנים שהנורמה שלהם היא לעבוד.",
  },
  {
    index: "08",
    en: "20% OFF BALLERZ CAMPS",
    he: "20% הנחה על מחנות BALLERZ",
    line: "לכל חברי התכנית, לאורך כל השנה.",
  },
];

export const membership = {
  titleEn: "BALLERZ ANNUAL MEMBERSHIP",
  titleHe: "חברות שנתית",
  terms: "שנה שלמה · תכנית אחת",

  lead: "תכנית אחת, שנה שלמה. בלי חבילות, בלי שדרוגים ובלי להוציא חלקים מהתהליך ולמכור אותם בנפרד.",

  includes: [
    "אימון Player Development שבועי",
    "Player Map ואבחון פתיחה",
    "תכנית עבודה עצמאית",
    "מעקב שבועי",
    "מדידות והערכת התקדמות",
    "טורניר חודשי",
    "קהילת BALLERZ",
    "20% הנחה על מחנות BALLERZ",
  ],

  /** המחיר לא מוצג באתר — נמסר בשיחה */
  priceNote: "את המחיר והתנאים נעבור יחד בשיחה, אחרי שנבין מה מתאים לשחקן.",
  note: "אין תשלום באתר. משאירים פרטים, מדברים, ואז נרשמים.",
};

/** Add-on — מוצג רק אם enabled */
export const personalAddOn = {
  enabled: true,
  titleEn: "BALLERZ PERSONAL",
  titleHe: "עבודה אישית",
  lead: "Add-on למי שרוצה ללכת צעד אחד קדימה.",
  items: [
    { en: "GAME VIDEO ANALYSIS", he: "ניתוח משחק בווידאו" },
    { en: "1-ON-1 CALL", he: "שיחה אישית" },
    { en: "CUSTOM PLAN", he: "תכנית מותאמת" },
    { en: "PERSONAL TRACKING", he: "מעקב אישי" },
  ],
  note: "הפרטים בשיחה.",
};
