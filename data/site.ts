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
 * CTA מרכזיים.
 * combine = ה-CTA הראשי בתקופת ההשקה. מופיע בהדר, בהירו ובסוף כל עמוד.
 */
export const cta = {
  combine: { label: "להרשמה ל-Combine", href: "/combine#register" },
  combineShort: { label: "להרשמה ל-Combine", href: "/combine#register" },
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
