/**
 * BALLERZ — GLOBAL SITE CONFIG
 * ---------------------------------------------------------------
 * כל מה שמשתנה ברמת המותג נמצא כאן. אל תערוך קומפוננטות.
 * שדות שמסומנים ב-TODO צריכים ערך אמיתי לפני עלייה לאוויר.
 */

export const site = {
  name: "BALLERZ",
  tagline: "PLAYER DEVELOPMENT",
  taglineHe: "מערכת לפיתוח שחקני כדורסל",

  /** המסר המרכזי של המותג */
  claimEn: "DON'T JUST TRAIN MORE. KNOW WHAT TO WORK ON.",
  claimHe: "אל תתאמן יותר. תדע על מה לעבוד.",

  /** דומיין production — משמש ל-SEO, sitemap, canonical ו-OpenGraph */
  url: "https://www.ballerz-basketball.co.il",

  description:
    "BALLERZ היא תכנית פיתוח שחקנים לכדורסלנים מכיתה ז׳ ומעלה: אימון שבועי, תכנית עבודה עצמאית, מעקב ומדידה וקהילה. מרכזים בירושלים ובמודיעין.",

  contact: {
    email: "omrilib65@gmail.com", // אפשר להחליף ל-info@ballerz-basketball.co.il כשתגדיר תיבה בדומיין
    phone: "", // TODO: להציג טלפון באתר? אם כן — למלא. ריק = לא מוצג
    /** מספר וואטסאפ בפורמט בינלאומי, ספרות בלבד, בלי + ובלי 0 מוביל */
    whatsapp: "972525092905",
  },

  social: {
    instagram: "https://www.instagram.com/ballerz_israel/",
    youtube: "",
    tiktok: "",
  },

  /**
   * רקע ה-HERO.
   * heroVideo גובר על heroImage. כשאין וידאו — התמונה משמשת רקע.
   * להעלות וידאו: לשים קובץ ב-public/media ולעדכן כאן.
   */
  heroVideo: null as string | null, // לדוגמה: "/media/hero.mp4"
  heroImage: "/media/hero.jpg" as string | null,

  /** שנת הקמה — מוצגת בפוטר וב-spec strips */
  since: "2022",
} as const;

/**
 * מתגי תוכן — מה פעיל באתר.
 * clubs: false מקפיא את עולם המועדונים — הקישורים נעלמים מהניווט ומהאתר,
 * העמודים יוצאים מה-sitemap ומסומנים noindex, והקוד נשאר במקומו.
 * להחזרה: לשנות ל-true. זה הכל.
 */
export const features = {
  clubs: false,
  /**
   * ה-Combine כבוי: האירוע של 17.10 כבר עבר.
   * להפעלה מחדש: combine: true + עדכון התאריך, המיקום והשעה ב-data/combine.ts.
   * הדגל מכבה את עמוד /combine, את הסקשן בדף הבית, את הניווט ואת ה-sitemap,
   * ומחליף את כל ה-CTA הראשיים ל״השארת פרטים״.
   */
  combine: false,
} as const;

/**
 * שלב הכניסה לתכנית. כל הקופי שמתאר ״איך מתחילים״ נשען על זה,
 * כדי שהחלפת features.combine תשנה את כל האתר במקום אחד.
 */
export const entry = features.combine
  ? {
      stepEn: "STEP 01 · THE COMBINE",
      titleEn: ["GET YOUR", "BASELINE"] as const,
      body: "מדידות, בדיקות Skill, פרופיל שחקן ומשחק. יוצאים עם Player Map.",
      lead: "מתחילים ב-Combine: יום אחד של מדידה ואבחון, ואחריו תמונה ברורה של מה לעבוד עליו.",
      short: "רוצים להצטרף לתכנית? מתחילים ב-Combine — יום אחד של מדידה ואבחון.",
      whatsapp: "היי, אני רוצה להירשם ל-BALLERZ PLAYER COMBINE 🏀",
      question: "היי, יש לי שאלה לגבי ה-Combine של BALLERZ",
    }
  : {
      stepEn: "STEP 01 · GET IN TOUCH",
      titleEn: ["START", "THE PROCESS"] as const,
      body: "משאירים פרטים, מדברים בוואטסאפ, ומשבצים אימון ניסיון במרכז הקרוב.",
      lead: "משאירים פרטים ואנחנו חוזרים אליכם בוואטסאפ עם כל המידע על המרכז, התכנית והחברות.",
      short: "רוצים להצטרף לתכנית? משאירים פרטים ואנחנו חוזרים אליכם בוואטסאפ.",
      whatsapp: "היי, אני רוצה להצטרף ל-BALLERZ 🏀",
      question: "היי, יש לי שאלה לגבי התכנית של BALLERZ",
    };

/**
 * CTA מרכזיים.
 * combine = ה-CTA הראשי בתקופת ההשקה. מופיע בהדר, בהירו ובסוף כל עמוד.
 */
export const cta = {
  /** ה-CTA הראשי. מתחלף אוטומטית לפי features.combine. */
  combine: features.combine
    ? { label: "להרשמה ל-Combine", href: "/combine#register" }
    : { label: "להרשמה למרכז", href: "/join" },
  combineShort: features.combine
    ? { label: "להרשמה ל-Combine", href: "/combine#register" }
    : { label: "השארת פרטים", href: "/join" },
  centers: { label: "לצפייה במרכזי האימון", href: "/centers" },
  join: { label: "השארת פרטים", href: "/join" },
  joinMembership: { label: "אני רוצה להצטרף", href: "/join" },
  talk: { label: "דברו איתנו", href: "/join#talk" },
  program: { label: "לתכנית המקצועית", href: "/method" },
  clubs: { label: "למועדונים", href: "/clubs" },
  clubsTalk: { label: "דברו איתנו על פתיחת מרכז", href: "/clubs/contact" },
  clubsShort: { label: "דברו איתנו", href: "/clubs/contact" },
  schools: { label: "לעמוד בתי הספר", href: "/schools" },
  players: { label: "לשחקנים ולהורים", href: "/join" },
} as const;

/** קישור וואטסאפ ישיר — לשימוש ב-CTA משניים */
export function whatsappLink(message?: string) {
  if (!site.contact.whatsapp) return null;
  const text = message ?? "היי, הגעתי מהאתר של BALLERZ ואני רוצה לשמוע עוד 🏀";
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}
