/**
 * מרכזי BALLERZ
 * ---------------------------------------------------------------
 * להוספת מרכז חדש: להוסיף אובייקט למערך. זה הכל.
 * status: "open" | "soon" | "waitlist"
 */

export type CenterStatus = "open" | "soon" | "waitlist";

export type Center = {
  id: string;
  city: string;          // עברית
  cityEn: string;        // אנגלית — מוצג ב-display type
  status: CenterStatus;
  statusLabel: string;
  location: string;      // אולם / אזור
  ages: string;
  trainingDay: string;
  note?: string;
};

export const centerStatusMeta: Record<CenterStatus, { label: string; tone: "flare" | "bone" | "asphalt" }> = {
  open: { label: "רישום פתוח", tone: "flare" },
  soon: { label: "הרשמה בקרוב", tone: "bone" },
  waitlist: { label: "רשימת המתנה", tone: "asphalt" },
};

export const centers: Center[] = [
  {
    id: "modiin",
    city: "מודיעין",
    cityEn: "MODI'IN",
    status: "soon",
    statusLabel: "הרשמה בקרוב",
    location: "מודיעין", // TODO: שם האולם המדויק
    ages: "כיתות ד'–ט'", // TODO: לאשר טווח גילאים
    trainingDay: "יום אימון ייקבע", // TODO
  },
  {
    id: "mevaseret",
    city: "מבשרת ציון",
    cityEn: "MEVASERET",
    status: "soon",
    statusLabel: "הרשמה בקרוב",
    location: "מבשרת ציון", // TODO: שם האולם המדויק
    ages: "כיתות ד'–ט'", // TODO
    trainingDay: "יום אימון ייקבע", // TODO
  },
];

/** ערים שנמצאות על המפה אבל עוד לא נפתחו — מציג את יכולת ההרחבה של המערכת */
export const expansionCities: string[] = [
  "JERUSALEM",
  "TEL AVIV",
  "HAIFA",
  "BEER SHEVA",
  "RAANANA",
  "RISHON LEZION",
];
