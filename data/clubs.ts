/**
 * תוכן עמוד המועדונים + סקשן המועדונים בעמוד הבית
 */

export type Module = {
  index: string;
  titleEn: string;
  titleHe: string;
  body: string;
};

/** מה BALLERZ מפעילה עבור המועדון */
export const clubModules: Module[] = [
  {
    index: "01",
    titleEn: "COACHING TEAM",
    titleHe: "צוות מאמנים",
    body: "מאמנים שהוכשרו לעבוד לפי שיטת BALLERZ. לא מאמן בודד — צוות עם סטנדרט אחיד.",
  },
  {
    index: "02",
    titleEn: "YEARLY PROGRAM",
    titleHe: "תכנית שנתית",
    body: "תכנית עבודה מלאה לעונה, מחולקת לבלוקים, עם מטרות ברורות לכל תקופה.",
  },
  {
    index: "03",
    titleEn: "DEVELOPMENT METHOD",
    titleHe: "מתודולוגיית פיתוח",
    body: "שיטה כתובה לפיתוח שחקן — עקרונות, תכני אימון, קריטריונים והתקדמות לאורך זמן.",
  },
  {
    index: "04",
    titleEn: "OPERATIONS",
    titleHe: "תפעול",
    body: "רישום, קבוצות, לו״ז, תקשורת מול הורים, טורניר חודשי. המועדון לא מנהל את זה.",
  },
  {
    index: "05",
    titleEn: "PLAYER EXPERIENCE",
    titleHe: "חוויית שחקן",
    body: "קבוצות קטנות, ביגוד, תחרות, תרבות עבודה. השחקן מרגיש שהוא חלק ממשהו מקצועי.",
  },
  {
    index: "06",
    titleEn: "ADDITIONAL REVENUE",
    titleHe: "הכנסה נוספת",
    body: "שכבת פעילות נוספת שפועלת לצד המועדון ומייצרת ערך כלכלי.",
  },
  {
    index: "07",
    titleEn: "PLAYER RETENTION",
    titleHe: "שימור שחקנים",
    body: "שחקן שמתפתח נשאר. מסלול פיתוח אישי הוא סיבה להישאר במועדון.",
  },
];

/** מה המועדון לא צריך לעשות — הפריים של ה-GAP */
export const clubNotNeeded: string[] = [
  "לגייס צוות מאפס",
  "לבנות מתודולוגיה",
  "לכתוב תכנית שנתית",
  "לנהל רישום ותפעול",
  "להקים תשתית מקצועית חדשה",
  "להפעיל את כל המערכת לבד",
];

/** מה BALLERZ מספקת — עמוד /clubs סעיף 03 */
export const clubProvides: { en: string; he: string }[] = [
  { en: "COACHES", he: "צוות מאמנים מוכשר" },
  { en: "METHOD", he: "מתודולוגיה כתובה" },
  { en: "YEARLY PROGRAM", he: "תכנית שנתית" },
  { en: "OPERATIONS", he: "תפעול מלא" },
  { en: "PLAYER EXPERIENCE", he: "חוויית שחקן" },
  { en: "TRAINING STANDARD", he: "סטנדרט אימון אחיד" },
];

/** מה המועדון מקבל — עמוד /clubs סעיף 04 */
export const clubGets: { en: string; he: string }[] = [
  { en: "PLAYER DEVELOPMENT", he: "שכבת פיתוח שחקנים" },
  { en: "ADDED VALUE", he: "ערך נוסף לשחקני המועדון" },
  { en: "PLAYER RETENTION", he: "כלי לשימור שחקנים" },
  { en: "ADDITIONAL REVENUE", he: "הכנסה נוספת" },
  { en: "PROFESSIONAL SYSTEM", he: "מערכת מקצועית מוכנה" },
  { en: "NO NEW DEPARTMENT", he: "בלי להקים מחלקה חדשה" },
];

/** מודלים לשיתוף פעולה — עמוד /clubs סעיף 05 */
export const partnershipModels: Module[] = [
  {
    index: "A",
    titleEn: "INDEPENDENT CENTER",
    titleHe: "מרכז עצמאי בשיתוף מועדון",
    body: "BALLERZ מפעילה מרכז שפועל לצד המועדון, עם הפניה הדדית ותיאום מקצועי.",
  },
  {
    index: "B",
    titleEn: "CLUB CENTER",
    titleHe: "מרכז Player Development עבור המועדון",
    body: "המרכז פועל תחת המועדון. BALLERZ מביאה צוות, שיטה, תכנית ותפעול.",
  },
  {
    index: "C",
    titleEn: "PROFESSIONAL PARTNER",
    titleHe: "שותף מקצועי למערכת קיימת",
    body: "למועדון שכבר מפעיל פיתוח שחקנים — BALLERZ נכנסת כשכבת מתודולוגיה והכשרת מאמנים.",
  },
];
