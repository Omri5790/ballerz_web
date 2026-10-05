/**
 * BALLERZ PLAYER COMBINE + OPENING TRAINING
 * ---------------------------------------------------------------
 * ⚠️ כל מה שבסוגריים מרובעים הוא PLACEHOLDER. למלא לפני פרסום.
 * זה המקום היחיד שבו מופיעים התאריכים — שינוי כאן משנה את כל האתר.
 */

export const combine = {
  titleEn: "BALLERZ PLAYER COMBINE",
  titleHe: "ה-Combine של BALLERZ",
  subHe: "בוא להבין איפה אתה נמצא היום ומה השלב הבא שלך.",
  lead: "ה-Combine הוא אירוע האבחון והכניסה של BALLERZ.",
  body:
    "במקום להתחיל מניחוש, מתחילים ממדידה. ביום אחד אנחנו בודקים יכולת, מדדים ואופי משחק — ויוצאים עם נקודת פתיחה ברורה.",

  /**
   * 17.10.2026 נופל ביום שבת — אם התכוונת לתאריך אחר, זה השדה היחיד לשנות.
   */
  date: "שבת, 17.10",
  location: "אולם מנהלת אופק, מודיעין",
  time: "09:00",
  /** מידע נוסף — ריק = לא מוצג */
  price: "", // TODO: האם יש עלות ל-Combine? ריק = לא מוצג
  capacity: "", // TODO: מספר מקומות. ריק = לא מוצג

  purpose: {
    en: "THE POINT IS A BASELINE.",
    he: "המטרה היא ליצור Baseline.",
    body:
      "לא כדי לדרג ילדים ולא כדי לפסול אף אחד. כדי להתחיל מנקודת אמת — ולדעת בעוד חצי שנה מה בדיוק השתנה.",
  },

  stations: [
    {
      index: "01",
      en: "SHOOTING MEASUREMENTS",
      he: "מדידות קליעה",
      line: "אחוזים ממקומות קבועים — נקודת פתיחה מדויקת.",
    },
    {
      index: "02",
      en: "SKILL TESTS",
      he: "בדיקות Skill",
      line: "כדרור, שליטה, עבודת רגליים וסיומות תחת זמן.",
    },
    {
      index: "03",
      en: "ATHLETIC METRICS",
      he: "מדדים אתלטיים",
      line: "מהירות, זריזות וקפיצה.",
    },
    {
      index: "04",
      en: "PLAYER PROFILE",
      he: "פרופיל שחקן",
      line: "חוזקות, פערים ומה הפוקוס הראשון.",
    },
    {
      index: "05",
      en: "ROLE EVALUATION",
      he: "הערכת תפקיד",
      line: "מה התפקיד שבו השחקן משפיע הכי הרבה היום.",
    },
    {
      index: "06",
      en: "TOURNAMENT",
      he: "טורניר עם פרסים",
      line: "סוגרים את היום בתחרות אמיתית. לזוכים יש פרסים.",
    },
  ],

  /** מודגש בנפרד — זה מה שגורם לשחקן לרצות להגיע */
  tournament: {
    en: "WIN SOMETHING.",
    he: "טורניר עם פרסים",
    body: "היום נסגר בטורניר. מי שלוקח אותו — לוקח גם פרסים. כי הכל נבדק מול מגן אמיתי, לא מול קונוס.",
  },

  outcome: [
    "Player Map אישי",
    "נקודת פתיחה מדודה",
    "פוקוס עבודה ראשון",
    "המיקום על ה-Player Path",
  ],

  /**
   * סליקה — תשלום על ה-Combine.
   * ⚠️ כל עוד `url` ריק, שום דבר מזה לא מופיע באתר.
   * להדביק כאן את הקישור מחברת הסליקה (Grow / PayPlus / Tranzila / Bit וכו') והכפתור יופיע.
   */
  payment: {
    url: "https://mrng.to/yy2TjPAjBD",
    label: "לתשלום ולאישור המקום",
    /** הסכום — מוצג ליד הכפתור. ריק = לא מוצג */
    amount: "",
    note: "התשלום סוגר את המקום ב-Combine. אפשר גם לשלם אחרי שנחזור אליכם.",
  },

  mediaSlot: "COMBINE PHOTO · MEASUREMENT / TESTING · B/W · 16:9",
  /** TODO: לצלם Combine אמיתי ולהחליף. null = מוצג placeholder */
  image: null as string | null,
};

export const openingTraining = {
  titleEn: "OPENING TRAINING",
  titleHe: "אימון הפתיחה",
  claimEn: "THE WORK STARTS HERE.",
  lead: "אחרי ה-Combine מתחילים לעבוד.",
  body:
    "אימון הפתיחה הוא המפגש הראשון של קבוצת BALLERZ החדשה. מכאן התכנית נכנסת לשגרה שבועית.",

  /** TODO: למלא תאריך, מרכז ושעה */
  date: "[OPENING TRAINING DATE]",
  center: "[MODIIN / JERUSALEM]",
  time: "[TIME]",

  mediaSlot: "FIRST SESSION · GROUP ON COURT · B/W · 16:9",
  image: "/media/standard-huddle.jpg" as string | null,
};
