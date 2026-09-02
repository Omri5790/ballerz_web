/**
 * FOUNDER — עמרי ליברטי
 * שים לב: הוא שכבת credibility, לא הגיבור של האתר.
 */

export const founder = {
  nameHe: "עמרי ליברטי",
  nameEn: "OMRI LIBERTY",
  role: "Founder & Head of Player Development",
  roleHe: "מייסד ואחראי פיתוח שחקנים",

  /** תמונה — שים קובץ ב-public/media ועדכן. null = מוצג placeholder מעוצב */
  portrait: "/media/founder-coaching.jpg" as string | null,
  /** תמונה משנית לעמוד /about */
  portraitAlt: "/media/founder-portrait.jpg" as string | null,

  /** משפט אחד שמסביר למה BALLERZ קיימת */
  statement:
    "BALLERZ נבנתה כי אימון קבוצתי לא יכול לתת מענה אישי לכל שחקן — ואימון יכולת בודד לא יוצר תהליך. באמצע חסרה מערכת.",

  credentials: [
    { en: "BASKETBALL COACH", he: "מאמן כדורסל" },
    { en: "DATA SCIENCE GRADUATE", he: "בוגר מדעי הנתונים" },
    { en: "BASKETBALL R&D", he: "מחקר ופיתוח בכדורסל" },
  ],

  expertise: [
    { en: "BALL HANDLING", he: "כדרור" },
    { en: "PLAYER CREATIVITY", he: "יצירתיות שחקן" },
    { en: "SKILL DEVELOPMENT", he: "פיתוח יכולת" },
    { en: "BASKETBALL DATA", he: "נתונים בכדורסל" },
    { en: "TRAINING SYSTEMS", he: "מערכות אימון" },
  ],

  /** עמוד /about — פסקאות קצרות. TODO: לדייק את הפרטים הביוגרפיים */
  bio: [
    "עמרי ליברטי הוא מאמן כדורסל ובוגר מדעי הנתונים. שני העולמות האלה נפגשים בדרך שבה BALLERZ בונה אימון: החלטות שמבוססות על מה שבאמת קורה במשחק, ולא על הרגל.",
    "העיסוק המרכזי שלו הוא פיתוח יכולת אישית — כדרור, עבודת רגליים, 1V1 ויצירתיות — והדרך שבה יכולת עוברת מהאימון אל המשחק.",
    "BALLERZ היא התוצאה: מערכת שאפשר להפעיל ביותר ממקום אחד, עם יותר ממאמן אחד, בלי שהסטנדרט ישתנה.",
  ],

  /** למה בנינו את המערכת ככה — נקודות קצרות לעמוד /about */
  principles: [
    {
      en: "SYSTEM OVER PERSON",
      he: "מערכת לפני אדם",
      body: "BALLERZ בנויה כדי לפעול בכמה ערים, בכמה מועדונים, עם כמה מאמנים — באותו סטנדרט.",
    },
    {
      en: "TOOLS OVER TEMPLATES",
      he: "כלים לפני תבניות",
      body: "אנחנו לא מייצרים שחקנים זהים. אנחנו נותנים כלים שכל שחקן בונה מהם משחק משלו.",
    },
    {
      en: "TRANSFER OVER DRILLS",
      he: "העברה לפני תרגילים",
      body: "תרגיל שנראה טוב באימון ולא עובד במשחק — לא נכנס לתכנית.",
    },
  ],
} as const;
