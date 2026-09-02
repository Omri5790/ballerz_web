/**
 * THE BALLERZ SYSTEM — הלולאה
 * TRAIN → APPLY → COMPETE → TRACK → REPEAT
 */

export type SystemStage = {
  index: string;
  en: string;
  he: string;
  body: string;
  spec: string; // מיקרו־טקסט בסגנון יומן אימון
};

export const systemLoop: SystemStage[] = [
  {
    index: "01",
    en: "TRAIN",
    he: "אימון",
    body: "אימון Player Development שבועי בקבוצה קטנה. עבודה על יכולת, לא על תוצאה.",
    spec: "WEEKLY · SMALL GROUP",
  },
  {
    index: "02",
    en: "APPLY",
    he: "יישום",
    body: "העברת היכולת למצבי משחק. מה שנלמד באימון חייב לעבוד מול מגן.",
    spec: "LIVE · READ & REACT",
  },
  {
    index: "03",
    en: "COMPETE",
    he: "תחרות",
    body: "טורניר חודשי וסיטואציות תחרותיות. לחץ הוא חלק מהתכנית.",
    spec: "MONTHLY · 1V1 / GAMES",
  },
  {
    index: "04",
    en: "TRACK",
    he: "מעקב",
    body: "בחבילות מתקדמות — מעקב אחר ביצוע התכנית ואחריות על התהליך.",
    spec: "ADVANCED PACKAGES",
  },
  {
    index: "05",
    en: "REPEAT",
    he: "חזרה",
    body: "פיתוח שחקן קורה לאורך עונה, לא לאורך אימון. הלולאה היא העניין.",
    spec: "SEASON LONG",
  },
];

/**
 * WHAT WE DEVELOP — תחומי פיתוח
 * imageSlot = הנחיה לצילום. מוצג בתוך מסגרת ה-placeholder עד שיש חומר אמיתי.
 */
export type SkillArea = {
  index: string;
  en: string;
  he: string;
  line: string;
  imageSlot: string;
  image?: string; // נתיב לתמונה ב-public/media — כשקיים, מחליף את ה-placeholder
};

export const skillAreas: SkillArea[] = [
  { index: "01", en: "BALL HANDLING", he: "כדרור", line: "שליטה בכדור בקצב, בלחץ ובשתי הידיים.", imageSlot: "CLOSE-UP · HANDS + BALL · 4:5" , image: "/media/dev-01-ball-handling.jpg" },
  { index: "02", en: "FOOTWORK", he: "עבודת רגליים", line: "בסיס, איזון, שינוי כיוון. הכל מתחיל ברגליים.", imageSlot: "LOW ANGLE · SHOES ON COURT · 4:5" , image: "/media/dev-02-footwork.jpg" },
  { index: "03", en: "1V1", he: "אחד על אחד", line: "לקרוא מגן ולבחור פתרון. לא לשנן תרגיל.", imageSlot: "ATTACKING A DEFENDER · 4:5" , image: "/media/dev-03-1v1.jpg" },
  { index: "04", en: "FINISHING", he: "סיומות", line: "לסיים מזוויות שונות, ביד שנייה, מול גוף.", imageSlot: "FINISH AT THE RIM · 4:5" , image: "/media/dev-04-finishing.jpg" },
  { index: "05", en: "SHOOTING", he: "קליעה", line: "מכניקה, חזרתיות, קליעה מתוך תנועה.", imageSlot: "SHOOTING FORM · SIDE · 4:5" , image: "/media/dev-05-shooting.jpg" },
  { index: "06", en: "PACE", he: "קצב", line: "לשלוט במהירות של המשחק — לא רק לרוץ מהר.", imageSlot: "MOTION BLUR · DRIVE · 4:5" , image: "/media/dev-06-pace.jpg" },
  { index: "07", en: "DECISION MAKING", he: "קבלת החלטות", line: "לראות מוקדם, להחליט מהר, לבצע נכון.", imageSlot: "PLAYER SCANNING FLOOR · 4:5" , image: "/media/dev-07-decision.jpg" },
  { index: "08", en: "CREATIVITY", he: "יצירתיות", line: "לפתח פתרונות אישיים, לא העתקים.", imageSlot: "UNUSUAL ANGLE / SIGNATURE MOVE · 4:5" , image: "/media/dev-08-creativity.jpg" },
  { index: "09", en: "GAME APPLICATION", he: "יישום במשחק", line: "המבחן היחיד: האם זה עובד במשחק.", imageSlot: "IN-GAME ACTION · 4:5" , image: "/media/dev-09-game.jpg" },
];

/** SECTION 09 — מה שחקן מקבל */
export const playerValue: { en: string; he: string; note?: string }[] = [
  { en: "WEEKLY SESSION", he: "אימון Player Development שבועי" },
  { en: "SMALL GROUPS", he: "עבודה בקבוצות קטנות" },
  { en: "YEARLY PROGRAM", he: "תכנית שנתית ולא אימון בודד" },
  { en: "MONTHLY TOURNAMENT", he: "טורניר חודשי" },
  { en: "BALLERZ GEAR", he: "ביגוד BALLERZ" },
  { en: "WORK CULTURE", he: "תרבות עבודה מקצועית" },
  { en: "PERFORMANCE TRACKING", he: "מעקב ביצוע התכנית", note: "בחבילות מתקדמות" },
];

/** SECTION 07 — THE STANDARD */
export const standard: { en: string; he: string }[] = [
  { en: "SHOW UP", he: "להגיע. כל שבוע. גם כשלא מתחשק." },
  { en: "WORK", he: "לעבוד באמת, לא לעבור על התרגיל." },
  { en: "COMPETE", he: "להתמודד מול מישהו, לא מול קונוס." },
  { en: "LEARN", he: "לקבל תיקון ולשנות משהו." },
  { en: "REPEAT", he: "לחזור על זה לאורך עונה שלמה." },
];

/** SECTION 11 — BUILT WITH INTENT */
export const intentPillars: { en: string; he: string; spec: string }[] = [
  { en: "METHOD", he: "שיטה כתובה", spec: "DOC · V1" },
  { en: "DETAIL", he: "עבודה על פרטים", spec: "REP BY REP" },
  { en: "RESEARCH", he: "מחקר וניתוח", spec: "DATA DRIVEN" },
  { en: "TRAINING DESIGN", he: "תכנון אימון", spec: "BLOCK PLAN" },
  { en: "GAME APPLICATION", he: "יישום במשחק", spec: "TRANSFER" },
  { en: "PLAYER DEVELOPMENT", he: "פיתוח לאורך זמן", spec: "SEASON" },
];

/** SECTION 06 — FREEDOM */
export const freedomPrinciples: { en: string; he: string }[] = [
  { en: "CREATIVITY", he: "לפתח פתרונות משלך" },
  { en: "FREEDOM OF EXPRESSION", he: "לשחק בסגנון שמתאים לך" },
  { en: "READ & REACT", he: "לקרוא את המגן ולהגיב" },
  { en: "INDIVIDUAL STYLE", he: "לבנות משחק אישי" },
];
