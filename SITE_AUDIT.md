# SITE AUDIT — BALLERZ

> נכתב לפני ביצוע השינויים, על בסיס מעבר על כל ה-codebase (94 קבצים, Next.js 16 / TS / Tailwind v4).
> מטרת ה-Audit: להחליט מה נשאר, מה זז, מה נכתב מחדש — ולא לבנות אתר חדש.

---

## WHAT EXISTS

### Stack
- Next.js **16.3.2** (App Router), React 19, TypeScript, Tailwind **v4** (CSS-first `@theme`).
- **אפס dependencies חיצוניות** מעבר ל-next/react. אין framer-motion, אין icon library.
- פונטים self-hosted (`public/fonts/*.woff2`) עם `unicode-range` — Archivo (כותרות), Heebo (עברית), JetBrains (spec).
- RTL מלא: `<html lang="he" dir="rtl">` + logical properties בכל הקומפוננטות (`ps-`, `me-`, `start-`).

### Routes קיימים
| Route | תפקיד | מצב |
|---|---|---|
| `/` | דף בית — 13 סקשנים, מותג-first | קיים, עמוס, לא מכירתי |
| `/clubs` | עמוד Partnership למועדונים | שלם ומושקע |
| `/clubs/contact` | טופס מועדונים | עובד |
| `/schools` | עמוד בתי ספר (8 סקשנים, גפ״ן, חוסן, הכלה, 2 מחקרים) | שלם, הטוב באתר |
| `/method` | THE BALLERZ METHOD — 8 פרקים | קיים, תיאורטי |
| `/centers` | מרכזים | קיים |
| `/join` | טופס שחקנים (13 שדות) | עובד, ארוך מדי |
| `/about` | עמוד עמרי | קיים |
| `/api/lead` | קליטת ליד + webhook אופציונלי | עובד |
| `sitemap.ts`, `robots.ts`, `og.png`, `icon.svg` | SEO בסיסי | קיים |

### Design system (`app/globals.css`)
- Tokens: `ink / ink-2 / ink-3 / bone / bone-2 / asphalt / asphalt-2 / flare`.
- מחלקות טיפוגרפיה: `.display` (Archivo wdth 78), `.display-wide`, `.t-mega/.t-h1…t-h4`, `.spec`, `.spec-sm`, `.label-he`, `.body-he`, `.lead`.
- טקסטורות: `.asphalt`, `.grid-lab`, `.grid-lab-lg`, `.chainlink`, `.rule-court`, `.grain-layer`, `.tape`, `.bracket`.
- מנוע אנימציה אחד: `RevealEngine` + `data-reveal` / `data-reveal-line`. כל האתר נשאר Server Components.

### Data layer (`data/*.ts`)
`site, centers, nav, forms, system, method, clubs, schools, proof, testimonials, founder` — כל התוכן המשתנה כבר מחוץ לקומפוננטות. **זו התשתית הנכונה והיא נשמרת.**

### מדיה
22 תמונות שחור-לבן מעובדות ב-`public/media` (hero, 9 תחומי פיתוח, פורטרטים, קבוצה, מאמן, hudl). `MediaSlot` מציג placeholder-brief כשאין קובץ.

---

## WHAT WORKS

1. **הטיפוגרפיה.** Archivo condensed במשקל 800 על רקע `#111` עם accent כתום בודד — זה ה-DNA. לא נוגעים.
2. **ה-Data layer.** אפשר לשנות מרכז, מחיר או שדה בטופס בלי לפתוח קומפוננטה. בדיוק מה שצריך לאתר שמשתנה כל חודש.
3. **RevealEngine.** פתרון אחד, קל, בלי ספרייה, עובד על כל האתר כולל תוכן שנוסף דינמית.
4. **`MediaSlot`.** Placeholder שלא נראה שבור ומשמש כבריף צילום. מאפשר לשלב תוכן חסר בלי להתבייש.
5. **זרימת הליד לוואטסאפ.** `LeadForm` בונה הודעה מסודרת ופותח `wa.me` בתוך מחוות המשתמש (לא נחסם), ובמקביל שולח ל-`/api/lead`. זה פשוט ועובד — אין CRM לתחזק.
6. **עמוד `/schools`.** היחיד באתר שכבר מדבר לקהל מוגדר עם טיעון, הוכחות (2 מחקרים מצוטטים) וגם הצהרת "מה אנחנו לא מבטיחים". זה הסטנדרט שכל האתר צריך להגיע אליו.
7. **המלצות אמיתיות.** 11 ציטוטים אמיתיים ב-`data/testimonials.ts` עם דגל `published` לכל אחד. לא הומצא דבר.
8. **אפס dependencies.** זמן טעינה וסיכון תחזוקה מינימליים.
9. **נגישות בסיסית.** skip link, `aria-label` לניווטים, label לכל שדה, `h1` יחיד לעמוד, `prefers-reduced-motion`.

---

## WHAT SHOULD STAY

- כל `app/globals.css` — ה-design system כולו.
- `RevealEngine`, `Grain`, `Logo`, `MediaSlot`, `Section`/`Container`/`SectionIndex`, `Button`, `Ticker`, `CourtArt` (HalfCourt / PlayDiagram / MarkX / MeasureBar).
- `LeadForm` + `/api/lead` + מנגנון הוואטסאפ.
- `data/testimonials.ts` + `components/sections/Testimonials.tsx`.
- **כל עולם בתי הספר**: `/schools`, `data/schools.ts`, `SchoolsStrip`.
- `/clubs`, `/clubs/contact`, `data/clubs.ts` — נשמר כעולם שותפויות, אבל יורד בהיררכיה (ראה RESTRUCTURED).
- `/about`, `data/founder.ts`, `FounderStrip` — שכבת credibility קצרה.
- 22 התמונות ב-`public/media`.
- מבנה `data/*` כמקום היחיד לתוכן משתנה.

---

## WHAT IS CONFUSING

1. **מי הלקוח?** דף הבית פותח ב-"BUILD YOUR GAME" (שחקן), ממשיך ל-FOR CLUBS (מנהל מועדון) ואז לבתי ספר, ואז חוזר לשחקנים. מבקר צריך 3 ניסיונות להבין אם האתר מדבר אליו.
2. **ההבטחה מופשטת.** "מערכת לפיתוח שחקני כדורסל" — נכון, אבל לא אומר לשחקן מה הוא מקבל ביום שני בערב. אין "אל תתאמן יותר, תדע על מה לעבוד".
3. **אין מחיר, אין תאריך, אין מקום.** אי אפשר להמיר. שחקן שמשתכנע לא יכול לדעת מתי מתחילים, איפה, וכמה.
4. **`FIND YOUR CENTER` יושב בסקשן 08.** המידע שהכי מחפשים (איפה מתאמנים) נמצא אחרי 7 סקשנים של מניפסט.
5. **TRAIN → APPLY → COMPETE → TRACK → REPEAT** הוא מודל נכון אבל מופשט — הוא מתאר את *המערכת*, לא את *המסע של השחקן*. שחקן לא חושב בלולאה, הוא חושב "אני מחוץ לרוטציה, איך אני נכנס".
6. **ארבעה סקשני פילוסופיה רצופים** (THE SYSTEM / WHAT WE DEVELOP / FREEDOM / THE STANDARD). כולם טובים בנפרד, יחד הם קיר טקסט בלי CTA.
7. **"טורניר חודשי" מוזכר 7 פעמים** ברחבי האתר כמוצר מרכזי — צריך לאשר שזה עדיין המודל (התכנית החדשה מדברת על Combine, עבודה עצמאית ומעקב).
8. **שני CTA מתחרים בכל עמוד** ("למועדונים" / "לשחקנים ולהורים") — זה מפצל את תשומת הלב במקום להוביל לפעולה אחת.
9. **גילאים לא עקביים.** `data/centers.ts` אומר "כיתות ד׳–ט׳", ה-brief החדש אומר מכיתה ז׳ ומעלה.
10. **`/method` ו-`/clubs` חוזרים על אותו תוכן** בנוסחים שונים (מתודולוגיה, תכנית שנתית, בלוקים).
11. **`site.url` בלי `www`** — Vercel הגדיר את ה-www כ-primary עם 308 מה-apex, כך שה-canonical מצביע לכתובת שמפנה מחדש.

---

## WHAT IS MISSING

**חוסרים שחוסמים מכירה:**

| # | חסר | למה זה קריטי |
|---|---|---|
| 01 | **COMBINE** — אירוע האבחון/כניסה | זה ה-CTA המרכזי של ההשקה. אין לו שום נוכחות באתר |
| 02 | **OPENING TRAINING** — תאריך האימון הראשון | "מתי מתחילים" היא השאלה השנייה שכל הורה שואל |
| 03 | **מה כוללת החברות** | כרגע אין שום הסבר על מה קונים. (המחיר עצמו — בהחלטה מאוחרת יותר — נשאר מחוץ לאתר ונמסר בשיחה) |
| 04 | **PLAYER PATH** — PROVE IT → EARN TRUST → MAKE AN IMPACT → CONTROL THE GAME | זה הדבר שהופך "אימון" ל"מפה". החלק החזק ביותר במוצר ואין לו ייצוג |
| 05 | **תחומי הליבה** SHOOTING / FINISHING / 1ON1–ADVANTAGE CREATION | יש 9 תחומים כלליים; אין את 3 תחומי התכנית האמיתיים |
| 06 | **INDEPENDENT WORK + TRACKING** | ההבדל האמיתי מול אימון אישי. לא מוזכר (רק "בחבילות מתקדמות", בהסתייגות) |
| 07 | **FOR PARENTS** — סקשן נפרד להורה | ההורה משלם. כרגע הוא חלק מ"שחקנים והורים" |
| 08 | **COMMUNITY** | Training / Camps / Events / Combines כעולם אחד |
| 09 | **FAQ** | כולל התשובה הישרה על דקות משחק — זו שאלת ההתנגדות המרכזית |
| 10 | **מרכז ירושלים** | ה-brief החדש: ירושלים + מודיעין |
| 11 | **טופס קצר** | הטופס הקיים מבקש 13 שדות בשלב ראשון. יותר מדי |
| 12 | **CTA קבוע בהדר** שמוביל ל-Combine | כרגע ה-CTA בהדר הוא "השאירו פרטים" כללי |
| 13 | **הנחת מחנות (20%)** כחלק מה-offer | מוזכר כ-benefit ב-brief, אין באתר |
| 14 | **BALLERZ PERSONAL** (add-on) | אופציונלי, חסר |
| 15 | **SEO מקומי** | אין "אקדמיית כדורסל מודיעין / ירושלים" בשום title או description |
| 16 | **JSON-LD לאירוע ולמרכזים** | ל-Combine מתאים `SportsEvent`; למרכזים `LocalBusiness`/`Place` |
| 17 | **וידאו hero** | `site.heroVideo = null` — התמונה עובדת, אבל וידאו יעשה הבדל |

---

## WHAT SHOULD BE RESTRUCTURED

### 1. דף הבית — מ-13 סקשני מניפסט ל-Flow מכירתי
סדר חדש, כל סקשן עם תשובה ל-"מה המבקר עושה עכשיו":

```
01  HERO               אל תתאמן יותר. תדע על מה לעבוד.   → Combine / מרכזים
02  TRAINING CENTERS   ירושלים + מודיעין                 → השארת פרטים
03  WHAT IS BALLERZ    לא עוד אימון. מערכת.
04  PLAYER PATH        PROVE IT → CONTROL THE GAME
05  PROFESSIONAL PROGRAM  SHOOTING / FINISHING / 1ON1 + עבודה עצמאית + מעקב
06  COMBINE            אירוע האבחון                      → CTA ראשי
07  OPENING TRAINING   THE WORK STARTS HERE.              → הצטרפות
08  WHAT YOU GET       Offer stack של 7
09  COMMUNITY          GOOD PLAYERS. BETTER PEOPLE.
10  FOR PARENTS        הילד מתאמן. הוא יודע על מה?
11  MEMBERSHIP         מה כוללת החברות השנתית             → אני רוצה להצטרף
12  PROOF              11 המלצות אמיתיות
13  FAQ                כולל התשובה על דקות משחק
14  FOUNDER            קצר
15  FINAL CTA          READY FOR THE NEXT LEVEL?          → Combine
16  OTHER WORLDS       בתי ספר + מועדונים (רצועה דקה)
```

### 2. העלאת המרכזים מסקשן 08 לסקשן 02
"איפה מתאמנים" היא שאלת ההמרה הראשונה. גם: הוספת TIME, LEVEL ו-STATUS לכל כרטיס.

### 3. שני עולמות, לא שלושה קהלים שווים
- **PLAYERS** = דף הבית + `/combine` + `/centers` + `/method` + `/join`.
- **SCHOOLS** = `/schools` (נשאר כמו שהוא).
- **CLUBS** = `/clubs` נשמר במלואו אבל יורד מהניווט הראשי לרצועה תחתונה + פוטר. לא מוחקים עבודה; מורידים אותה מהמסלול של השחקן.

### 4. ניווט
`מרכזים · התכנית · Combine · להורים · בתי ספר · אודות` + **CTA קבוע: להרשמה ל-Combine**.
במובייל: אותו תפריט + CTA כתום רוחב מלא בתחתית התפריט.

### 5. `/method` → "התכנית המקצועית"
8 הפרקים התיאורטיים נשארים, אבל העמוד נפתח ב-3 תחומי הליבה, בעבודה העצמאית ובמעקב — כלומר קודם *מה עושים*, אחר כך *למה*.

### 6. הטופס
13 שדות → **7**: שם שחקן, כיתה, מועדון, שם הורה, טלפון הורה, טלפון שחקן, מרכז מועדף.
`playerFormFields` הארוך נשמר בקוד כ-`playerFormFieldsFull` למקרה שנרצה טופס מורחב אחרי שיחה.

### 7. `TRAIN → APPLY → COMPETE → TRACK → REPEAT`
יורד מדף הבית (נשאר ב-`/method` ו-`/centers`) ומוחלף ב-**PLAYER PATH** — אותה חשיבה, בשפה של השחקן.

---

## WHAT SHOULD BE REMOVED

**מוסר מדף הבית** (הקומפוננטה נשארת בקוד ומשמשת בעמוד הפנימי שלה — אפס קוד מת):
| קומפוננטה | למה יורדת מדף הבית | לאן עוברת |
|---|---|---|
| `ForClubs` | חוטפת את דף הבית לקהל שלא קונה בהשקה | `/clubs` (שם היא כבר מופיעה) |
| `SystemLoop` | מופשט; מוחלף ב-PLAYER PATH | `/method`, `/centers` |
| `Freedom` | סקשן פילוסופיה; המסר נכנס ל-WHAT IS BALLERZ בשורה אחת | `/method` |
| `Standard` | אותו דבר — תרבות עבודה נכנסת ל-COMMUNITY | `/method` |
| `Intent` | "BUILT WITH INTENT" הוא מניפסט, לא שלב במסע | `/about` |
| `SchoolsStrip` | לא נמחק — זז לתחתית הדף, אחרי ה-CTA | סוף דף הבית |

**נמחק באמת:**
- `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` — נכסי ברירת המחדל של `create-next-app`, לא בשימוש.
- `expansionCities` (TEL AVIV / HAIFA / BEER SHEVA…) — "NEXT ON THE MAP" עם 6 ערים שלא נפתחות זו הבטחה שאין מאחוריה כיסוי. מצטמצם לערים שבאמת על השולחן.
- ההסתייגות **"בחבילות מתקדמות"** שחוזרת ליד מעקב/Tracking — במודל החדש המעקב הוא חלק מהחברות, לא תוספת.
- המילה **"חוג"** וכל ניסוח שמרמז על מסגרת ראשונה.
- `heroVideo: null` נשאר, אבל `data/proof.ts` עם 6 קטגוריות "STILL BUILDING" מצטמצם — רשימה של מה שעוד לא עשינו היא לא נכס מכירתי.

---

## החלטות עסקיות שה-brief החדש מחליף — דורשות אישור שלך

| # | ה-brief המקורי | ה-brief החדש | מה עשיתי |
|---|---|---|---|
| 1 | "אין להציג מחירים באתר" | 650 ₪/חודש, חברות שנתית | **נסגר: המחיר לא מוצג באתר.** עמרי החליט שהמחיר נמסר בשיחת מכירה. הסקשן מציג מה כוללת החברות ומוביל לשיחה |
| 2 | מנהלי מועדונים = קהל #1 | הניווט והפאנל בנויים לשחקנים/הורים/בתי ספר | `/clubs` נשמר במלואו, יורד מהניווט הראשי |
| 3 | מרכזים: מודיעין + מבשרת ציון | ירושלים + מודיעין | **מבשרת לא נמחקה** — הוגדרה `active: false` ב-`data/centers.ts`. הפעלה = החלפת דגל אחד |
| 4 | גילאים: כיתות ד׳–ט׳ | מכיתה ז׳ ומעלה | עודכן לכיתה ז׳+. אם יש גם מסלול צעיר — להחזיר ב-data |
| 5 | טורניר חודשי = מוצר מרכזי | Combine + עבודה עצמאית + מעקב | **נסגר: הטורניר הוא חלק מהחברות.** נכנס ל-Offer stack, לקהילה ול-FAQ |

---

## QA שבוצע לפני השינויים
- `npm install` נקי, `npm run build` עובר.
- אין horizontal overflow ב-375 / 430 / 768 / 1440.
- אין console errors, אין 404 על נכסים.
- כל שדה טופס עם `label`, `h1` יחיד לעמוד, skip-link עובד.

**הקו המנחה לכל השינויים:** מוסיפים שכבת מכירה מעל מערכת עיצוב שעובדת. לא מחליפים אותה.
