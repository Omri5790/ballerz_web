/**
 * BALLERZ — GLOBAL SITE CONFIG
 * ---------------------------------------------------------------
 * כל מה שמשתנה ברמת המותג נמצא כאן. אל תערוך קומפוננטות.
 * שדות שמסומנים ב-TODO צריכים ערך אמיתי לפני עלייה לאוויר.
 */

export const site = {
  name: "BALLERZ",
  tagline: "PLAYER DEVELOPMENT SYSTEM",
  taglineHe: "מערכת מקצועית לפיתוח שחקני כדורסל",

  /** דומיין production — משמש ל-SEO, sitemap, canonical ו-OpenGraph */
  url: "https://ballerz-basketball.co.il",

  description:
    "BALLERZ היא מערכת לפיתוח שחקני כדורסל. אימון Player Development שבועי, תכנית שנתית, טורניר חודשי ומתודולוגיה אחת — לשחקנים ולמועדונים.",

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

export const cta = {
  clubs: { label: "למועדונים", href: "/clubs" },
  clubsTalk: { label: "דברו איתנו על פתיחת מרכז", href: "/clubs/contact" },
  clubsShort: { label: "דברו איתנו", href: "/clubs/contact" },
  players: { label: "לשחקנים ולהורים", href: "/join" },
  join: { label: "השאירו פרטים", href: "/join" },
} as const;
