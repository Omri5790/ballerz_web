/**
 * הגדרות טפסים — שחקנים ומועדונים.
 * שינוי שדה כאן משנה את הטופס. אין צורך לגעת בקומפוננטה.
 */

export type FieldType = "text" | "tel" | "email" | "number" | "select" | "textarea";

export type FormField = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  span?: 1 | 2; // רוחב בגריד
  autoComplete?: string;
};

export const positions = [
  "רכז",
  "גארד קולע",
  "פורוורד קטן",
  "פורוורד גדול",
  "סנטר",
  "עדיין לא מוגדר",
];

export const improvementGoals = [
  "כדרור ושליטה בכדור",
  "1V1 והתמודדות מול מגן",
  "סיומות",
  "קליעה",
  "עבודת רגליים",
  "קבלת החלטות",
  "ביטחון במשחק",
  "כללי — פיתוח מלא",
];

export const playerFormFields: FormField[] = [
  { name: "playerName", label: "שם השחקן", type: "text", required: true, autoComplete: "name" },
  { name: "age", label: "גיל", type: "number", required: true },
  { name: "city", label: "עיר", type: "text", required: true, autoComplete: "address-level2" },
  { name: "club", label: "מועדון", type: "text", required: true, placeholder: "המועדון שבו השחקן משחק" },
  { name: "team", label: "קבוצה", type: "text", placeholder: "לדוגמה: ילדים א׳" },
  { name: "yearsPlaying", label: "שנות ניסיון", type: "number", required: true },
  { name: "position", label: "עמדה", type: "select", options: positions },
  { name: "goal", label: "מה היית רוצה לשפר?", type: "select", options: improvementGoals, span: 2 },
  { name: "center", label: "מרכז מועדף", type: "select", options: [], span: 2 }, // options מוזרקות מ-data/centers
  { name: "playerPhone", label: "טלפון שחקן", type: "tel", autoComplete: "tel" },
  { name: "parentName", label: "שם הורה", type: "text", required: true },
  { name: "parentPhone", label: "טלפון הורה", type: "tel", required: true, autoComplete: "tel" },
  { name: "notes", label: "הערות", type: "textarea", span: 2 },
];

export const schoolRoles = [
  "מנהל/ת בית ספר",
  "סגן/ית מנהל/ת",
  "יועץ/ת חינוכי/ת",
  "רכז/ת חינוך חברתי",
  "רכז/ת הכלה והשתלבות",
  "מורה לחינוך גופני",
  "אחר",
];

export const schoolGoals = [
  "חוסן מנטלי וויסות רגשי",
  "הכלה ושילוב תלמידים מתקשים",
  "מוטיבציה ותחושת מסוגלות",
  "אקלים חברתי ושייכות",
  "צמצום פערים",
  "עדיין בבירור",
];

export const schoolFormFields: FormField[] = [
  { name: "contactName", label: "שם", type: "text", required: true, autoComplete: "name" },
  { name: "role", label: "תפקיד", type: "select", options: schoolRoles, required: true },
  { name: "schoolName", label: "שם בית הספר", type: "text", required: true, span: 2 },
  { name: "city", label: "יישוב", type: "text", required: true },
  { name: "grades", label: "שכבות רלוונטיות", type: "text", placeholder: "לדוגמה: ד׳–ו׳" },
  { name: "students", label: "מספר תלמידים משוער", type: "text", placeholder: "לדוגמה: קבוצה אחת של 15" },
  { name: "basket", label: "מאיזה סל תקציבי", type: "text", placeholder: "הכלה והשתלבות / חברתי־ערכי / עדיין לא ידוע" },
  { name: "goal", label: "מה הייתם רוצים להשיג?", type: "select", options: schoolGoals, span: 2 },
  { name: "phone", label: "טלפון", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "מייל", type: "email", autoComplete: "email" },
  { name: "notes", label: "הערות", type: "textarea", span: 2 },
];

export const clubFormFields: FormField[] = [
  { name: "contactName", label: "שם", type: "text", required: true, autoComplete: "name" },
  { name: "role", label: "תפקיד", type: "text", required: true, placeholder: "מנהל מקצועי / מנכ״ל / יו״ר" },
  { name: "clubName", label: "שם המועדון", type: "text", required: true, span: 2 },
  { name: "city", label: "עיר", type: "text", required: true },
  { name: "phone", label: "טלפון", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "מייל", type: "email", required: true, autoComplete: "email" },
  { name: "scale", label: "מספר קבוצות / שחקנים", type: "text", placeholder: "לדוגמה: 8 קבוצות, כ-140 שחקנים" },
  { name: "goal", label: "מה הייתם רוצים לבנות?", type: "textarea", required: true, span: 2 },
  { name: "notes", label: "הערות", type: "textarea", span: 2 },
];
