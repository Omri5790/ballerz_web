/**
 * המלצות אמיתיות
 * ---------------------------------------------------------------
 * כל ציטוט כאן נאמר על ידי אדם אמיתי בהודעת וואטסאפ.
 * הטקסט נוקה מאימוג׳ים ומשגיאות הקלדה בלבד — התוכן לא שונה.
 *
 * ⚠️ פרטיות: מוצגים שם פרטי ותפקיד בלבד, בלי שמות מלאים של הורים
 * ובלי מספרי טלפון. לפני פרסום — לוודא אישור מכל אחד ואחת.
 * שינוי `published: false` מסתיר ציטוט מהאתר מיד.
 *
 * audience — איפה הציטוט מוצג:
 *   "players"  דף הבית (סקשן PROOF)
 *   "clubs"    עמוד /clubs
 *   "schools"  עמוד /schools
 * אפשר לשייך ליותר מקהל אחד.
 */

export type Audience = "players" | "clubs" | "schools";

export type Testimonial = {
  id: string;
  published: boolean;
  audience: Audience[];
  /** תווית קצרה באנגלית — מופיעה מעל הציטוט */
  kindEn: string;
  quote: string;
  name: string;
  role: string;
  /** מדגיש ציטוט כ״ראשי״ בעיצוב */
  feature?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "gilad",
    published: true,
    audience: ["clubs", "players", "schools"],
    kindEn: "PROFESSIONAL REVIEW",
    quote:
      "כמישהו שחי את הענף יותר מ-40 שנה, שיחק כדורסל מקצועי ואימן המון שנים — אומר בביטחה שעומרי איש מקצוע לעילא ולעילא, עם גישה מעולה. הוא באמת אוהב את התחום, כך שאם הוא עובר את הביקורת שלי, תרגישו בטוחים להשאיר את הבנים והבנות איתו.",
    name: "גלעד כהן",
    role: "איש כדורסל, 40 שנה בענף",
    feature: true,
  },
  {
    id: "arnon",
    published: true,
    audience: ["clubs"],
    kindEn: "PARTNER FEEDBACK",
    quote:
      "תודה רבה על כל הערך המוסף שאתה מביא. הדברים ברמה הגבוהה והמקצועית ביותר, בכל האספקטים — כדורסל, טכניקות, שיטות, ערכים ועוד. כל מחנה מתוכנן ומושקע מאוד, ורואים את המסירות שלך.",
    name: "ארנון",
    role: "מוביל מחנה אימונים",
  },
  {
    id: "sarit",
    published: true,
    audience: ["schools", "players"],
    kindEn: "BEYOND BASKETBALL",
    quote:
      "שנה שנייה שהוא נפתח אצלך במחנות. הוא לא סתם התמכר. האישיות שלך והערך המוסף שאתה מכניס מעבר לכדורסל — מצמיחים אותם גם כבני אדם.",
    name: "שרית",
    role: "הורה",
    feature: true,
  },
  {
    id: "merav",
    published: true,
    audience: ["schools", "players"],
    kindEn: "CONFIDENCE",
    quote:
      "רוני נכנסה לפני שבועיים, ואני מרגישה שהיא יוצאת בוגרת יותר, בטוחה יותר בעצמה ועם הרבה מוטיבציה להמשך.",
    name: "מירב",
    role: "אמא לרוני",
  },
  {
    id: "yahel",
    published: true,
    audience: ["schools"],
    kindEn: "EMPOWERMENT",
    quote:
      "מחנה מעצים ומושקע, עם הרבה כלים וערך מוסף. מרגיש שזה תרם לו להמשך הדרך ולחוויה בכלל.",
    name: "יהל",
    role: "הורה",
  },
  {
    id: "viki",
    published: true,
    audience: ["schools"],
    kindEn: "TOOLS THEY KEEP",
    quote:
      "תודה על ההעצמה, החוויה, הכלים והידע שרכשו. ללא ספק ישמשו אותם וילוו אותם.",
    name: "ויקי",
    role: "הורה",
  },
  {
    id: "renana",
    published: true,
    audience: ["players"],
    kindEn: "TRAINING LEVEL",
    quote:
      "הרגיש שהוא לומד הרבה, מקבל אימון ברמה גבוהה ורצינית, ושהחוויה הייתה משמעותית.",
    name: "רננה",
    role: "הורה",
  },
  {
    id: "zach",
    published: true,
    audience: ["players", "clubs"],
    kindEn: "GAME TRANSFER",
    quote:
      "ראיתי את המשחק של רועי עכשיו — ממש השתפר. שליטה בכדור, סיומות וקליעה מבחוץ. זה מה שכתב לי המאמן שלו, וההבדל היחיד מסוף העונה הוא האימונים.",
    name: "זך",
    role: "הורה",
    feature: true,
  },
  {
    id: "chen",
    published: true,
    audience: ["players"],
    kindEn: "IN THE GAME",
    quote:
      "אתמול היה משחק ליהונתן. הוא שיחק מעולה — חדר לסל בלי פחד, סחט עבירות, קלע 13 נקודות, היה בהגנה בטירוף ולקח מלא ריבאונדים.",
    name: "חן",
    role: "אמא ליהונתן",
  },
  {
    id: "coach-release",
    published: true,
    audience: ["players", "clubs"],
    kindEn: "COACH TESTIMONIAL",
    quote:
      "״קח משחק אחד לעשות טעויות״ — זו התוצאה. הרבה עבודה קשה והתמדה, ולאט לאט הוא משתחרר.",
    name: "מאמן קבוצה",
    role: "ליגת נוער",
  },
  {
    id: "eliya",
    published: true,
    audience: ["clubs"],
    kindEn: "NOTICED BY THE CLUB",
    quote: "דניאל לגמרי שומר טוב יותר מתחילת השנה. על מה עבדתם?",
    name: "מאמן קבוצה",
    role: "פנייה ממאמן המועדון",
  },
];

/** שליפה לפי קהל — משמש בעמודים */
export function testimonialsFor(audience: Audience) {
  return testimonials.filter((t) => t.published && t.audience.includes(audience));
}
