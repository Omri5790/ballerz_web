/**
 * מרכזי BALLERZ
 * ---------------------------------------------------------------
 * להוספת מרכז חדש: להוסיף אובייקט למערך. זה הכל.
 * active: false  → המרכז לא מוצג באתר אבל נשאר בקוד (לא מוחקים היסטוריה)
 * status: "open" | "soon" | "waitlist"
 *
 * ⚠️ כל מה שכתוב [PLACEHOLDER] צריך ערך אמיתי לפני קמפיין.
 */

export type CenterStatus = "open" | "soon" | "waitlist";

export type Center = {
  id: string;
  active: boolean;
  city: string; // עברית
  cityEn: string; // אנגלית — מוצג ב-display type
  status: CenterStatus;
  statusLabel: string;
  location: string; // אולם / אזור
  ages: string;
  level: string;
  trainingDay: string;
  trainingTime: string;
  note?: string;
};

export const centerStatusMeta: Record<
  CenterStatus,
  { label: string; tone: "flare" | "bone" | "asphalt" }
> = {
  open: { label: "רישום פתוח", tone: "flare" },
  soon: { label: "הרשמה בקרוב", tone: "bone" },
  waitlist: { label: "רשימת המתנה", tone: "asphalt" },
};

const allCenters: Center[] = [
  {
    id: "modiin",
    active: true,
    city: "מודיעין",
    cityEn: "MODI'IN",
    status: "open",
    statusLabel: "רישום פתוח",
    location: "[MODIIN VENUE]", // TODO: שם האולם המדויק
    ages: "כיתה ז׳ ומעלה",
    level: "שחקנים שמשחקים בקבוצה",
    trainingDay: "[TRAINING DAY]", // TODO
    trainingTime: "[TIME]", // TODO
  },
  {
    id: "jerusalem",
    active: true,
    city: "ירושלים",
    cityEn: "JERUSALEM",
    status: "open",
    statusLabel: "רישום פתוח",
    location: "[JERUSALEM VENUE]", // TODO: שם האולם המדויק
    ages: "כיתה ז׳ ומעלה",
    level: "שחקנים שמשחקים בקבוצה",
    trainingDay: "[TRAINING DAY]", // TODO
    trainingTime: "[TIME]", // TODO
  },
  {
    /**
     * מבשרת ציון — לא נמחק. היה מתוכנן בגרסה הקודמת.
     * להפעלה: active: true + מילוי הפרטים.
     */
    id: "mevaseret",
    active: false,
    city: "מבשרת ציון",
    cityEn: "MEVASERET",
    status: "soon",
    statusLabel: "הרשמה בקרוב",
    location: "[MEVASERET VENUE]",
    ages: "כיתה ז׳ ומעלה",
    level: "שחקנים שמשחקים בקבוצה",
    trainingDay: "[TRAINING DAY]",
    trainingTime: "[TIME]",
  },
];

/** מה שמוצג באתר */
export const centers: Center[] = allCenters.filter((c) => c.active);

/** הכל, כולל מרכזים שמכובים — לשימוש פנימי */
export const centersAll = allCenters;

/** ערים שבאמת על השולחן. אל תוסיף עיר בלי כיסוי אמיתי. */
export const expansionCities: string[] = ["[NEXT CITY]"];
