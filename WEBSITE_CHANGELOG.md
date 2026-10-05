# WEBSITE CHANGELOG — BALLERZ

> שדרוג מאתר תדמית כללי לאתר מכירתי לעולם השחקנים, בלי להחליף את ה-codebase ובלי לבנות עיצוב חדש מאפס.
> ה-stack נשאר: Next.js 16 · TypeScript · Tailwind v4 · אפס dependencies נוספות.
> ה-Audit המלא: `SITE_AUDIT.md`.

---

## 1. מה שינית — תמונת מצב

| | לפני | אחרי |
|---|---|---|
| קהל ראשי בדף הבית | מנהלי מועדונים | שחקנים והורים |
| המסר | BUILD YOUR GAME | **אל תתאמן יותר. תדע על מה לעבוד.** |
| CTA ראשי | "השאירו פרטים" | **להרשמה ל-Combine** (קבוע בהדר, בהירו ובכל סקשן מרכזי) |
| מרכזים | מודיעין + מבשרת, סקשן 08 | **מודיעין + ירושלים, סקשן 02** |
| גילאים | כיתות ד׳–ט׳ | **כיתה ז׳ ומעלה** |
| מחיר | לא מוצג | **לא מוצג — נמסר בשיחה.** הסקשן מציג מה כוללת החברות ומוביל לשיחה |
| טופס | 13 שדות | **7 שדות** |
| עמודים | 8 | **9** (נוסף `/combine`) |

---

## 2. מה הוספתי

### סקשנים חדשים בדף הבית
הסדר החדש, כל אחד עם CTA או צעד הבא ברור:

```
01  HERO                אל תתאמן יותר. תדע על מה לעבוד.      → Combine / מרכזים
02  TRAINING CENTERS    מודיעין + ירושלים                    → הרשמה למרכז
03  WHAT IS BALLERZ     לא עוד אימון. מערכת לפיתוח שחקן.
04  PLAYER PATH         PROVE IT → CONTROL THE GAME          ← חדש
05  THE PROGRAM         קליעה / סיומות / 1 על 1 + עבודה עצמאית + מעקב   ← חדש
06  THE COMBINE         אירוע האבחון                         → CTA ראשי   ← חדש
07  OPENING TRAINING    THE WORK STARTS HERE.                → הצטרפות    ← חדש
08  WHAT YOU GET        Offer stack של 7                     ← נכתב מחדש
09  COMMUNITY           GOOD PLAYERS. BETTER PEOPLE.         ← חדש
10  FOR PARENTS         הילד מתאמן. הוא יודע על מה?           ← חדש
11  MEMBERSHIP          מה כוללת החברות + BALLERZ PERSONAL    ← חדש
12  PROOF               11 המלצות אמיתיות
13  FAQ                 10 שאלות, כולל דקות משחק              ← חדש
14  FOUNDER             קצר
    FINAL CTA           READY FOR THE NEXT LEVEL?            ← חדש
    OTHER WORLDS        בתי ספר + מועדונים                   ← חדש
```

### קבצים חדשים
**Data (כל התוכן המשתנה — לא צריך לפתוח קומפוננטה):**
- `data/playerPath.ts` — 4 הקלאסטרים + הקופי סביבם
- `data/program.ts` — 3 תחומי הליבה, עבודה עצמאית, מעקב
- `data/combine.ts` — **ה-Combine ואימון הפתיחה, כולל כל התאריכים**
- `data/offer.ts` — Offer stack (8 פריטים), תוכן החברות, BALLERZ PERSONAL
- `data/community.ts` — קהילה + סקשן ההורים
- `data/faq.ts` — 10 שאלות ותשובות

**Components:**
- `components/home/PlayerPath.tsx` — סולם, לא כרטיסים
- `components/home/Program.tsx` — תחומי ליבה + עבודה עצמאית + מעקב
- `components/home/WhatIsBallerz.tsx` — מחליף את `Gap`
- `components/home/WhatYouGet.tsx` — מחליף את `Players`
- `components/home/Community.tsx`, `Parents.tsx`, `Membership.tsx`
- `components/sections/CombineSection.tsx` — משמש בדף הבית וב-`/combine`
- `components/sections/OpeningTraining.tsx`
- `components/sections/Faq.tsx` — accordion נטיבי (`<details>`), בלי JS
- `components/sections/RegisterBlock.tsx` — בלוק הרשמה אחד ל-`/combine` ו-`/join`
- `components/sections/FinalCta.tsx`, `OtherWorlds.tsx`

**עמוד חדש:** `/combine` — Hero, פירוט ה-Combine, טופס הרשמה, אימון פתיחה, FAQ.

### תוספות עיצוב
- `.display-he` + `.t-mega-he / .t-h1-he / .t-h2-he` — כותרות עברית אתלטיות (Archivo לא מכיל עברית, אז המסר המרכזי מקבל Heebo 800 בליין-הייט צמוד). זה מה שמאפשר להציג את "אל תתאמן יותר" בגודל Hero.
- `.faq-bar-v` — אנימציית + / − ל-FAQ, CSS בלבד.
- קנה המידה של `.t-h1` הורד מ-`8.2vw` ל-`6.6vw` — מתקן גלישת כותרות בעמודות צרות ב-768px.

---

## 3. מה שונה בקוד הקיים

| קובץ | מה נעשה |
|---|---|
| `data/site.ts` | `url` → `https://www.ballerz-basketball.co.il` · נוספו `claimEn/claimHe` · מפת `cta` חדשה עם `combine` כראשי · `whatsappLink()` |
| `data/centers.ts` | מודיעין + ירושלים פעילים, מבשרת נשמרה כ-`active: false` · נוספו `level`, `trainingTime` · גילאים → כיתה ז׳+ · `expansionCities` צומצם |
| `data/nav.ts` | ניווט שחקנים (מרכזים · התכנית · Combine · להורים · בתי ספר · אודות) + `partnerNav` לפוטר |
| `data/forms.ts` | טופס קצר של 7 שדות; הטופס הארוך נשמר כ-`playerFormFieldsFull` |
| `data/system.ts` | נוסף `whatIsBallerz` · `playerValue` עודכן · הוסרה ההסתייגות "בחבילות מתקדמות" מ-TRACK |
| `data/method.ts` | רמת כניסה → "מכיתה ז׳ ומעלה" |
| `Header.tsx` | CTA קבוע ל-Combine · ניווט חדש · תפריט מובייל עם CTA כתום רוחב מלא · תוקן באג lint (`setState` ב-effect) |
| `Footer.tsx` | שתי עמודות: PLAYERS / SCHOOLS & CLUBS · המסר המרכזי בפוטר |
| `Hero.tsx` | נכתב מחדש — מסר עברי בגודל Hero, שני CTA, ערים וגילאים |
| `Centers.tsx` | נוספו TRAINING DAY / TIME / AGES / VENUE / LEVEL · CTA לכל מרכז · סטטוס "רישום פתוח" |
| `Proof.tsx` | צומצם — הוסרה רשימת "STILL BUILDING" |
| `LeadForm.tsx` + `/api/lead` | נוסף סוג ליד `combine` עם הודעת וואטסאפ משלו · נוסף prop `payment` שמציג כפתור סליקה בפאנל ההצלחה |
| `app/page.tsx` | נבנה מחדש לפי ה-Flow · JSON-LD ל-`SportsActivityLocation` + `FAQPage` |
| `app/method/page.tsx` | "התכנית המקצועית" — נפתח בתחומי הליבה, אחר כך 9 התחומים, הלולאה, 8 הפרקים, חופש, סטנדרט |
| `app/centers/page.tsx` | SEO מקומי · נוסף אימון הפתיחה · CTA ל-Combine |
| `app/join/page.tsx` | טופס קצר · רשימת מרכזים · FAQ |
| `app/layout.tsx` | Title/keywords/OG מעודכנים עם ביטויי החיפוש בעברית |
| `app/sitemap.ts` | נוסף `/combine` בעדיפות גבוהה; סדר עדיפויות שונה לטובת עולם השחקנים |
| `public/og.png` | נוצר מחדש עם המסר החדש |
| `components/home/Develop / SystemLoop / Freedom / Standard / Intent` | קיבלו prop של `index` ועברו לעמודים הפנימיים (`/method`, `/about`) |

### מה נמחק
- `components/home/Gap.tsx` → הוחלף ב-`WhatIsBallerz`
- `components/home/Players.tsx` → הוחלף ב-`WhatYouGet`
- `components/home/ForClubs.tsx` → `/clubs` כבר מכסה את התוכן במלואו
- `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` — נכסי ברירת מחדל של Next שלא היו בשימוש

**לא נמחק כלום מעולם בתי הספר.** `/schools`, `data/schools.ts` ו-`SchoolsStrip` נשארו כפי שהם. מועדונים (`/clubs`, `/clubs/contact`) נשארו במלואם — הם ירדו מהניווט הראשי לרצועה התחתונה ולפוטר, כדי לא לפצל את תשומת הלב של השחקן.

---

## 4. ⚠️ Placeholders שאתה חייב למלא

כל אחד מהם מופיע באתר באותיות כתומות — אי אפשר לפספס אותו. כולם יושבים בקובץ אחד או שניים.

### `data/combine.ts` — ✅ מולא
התאריך, המקום והשעה של ה-Combine נכנסו: **שבת 17.10, אולם מנהלת אופק מודיעין, 09:00.**
שים לב: 17.10.2026 נופל בשבת. אם התכוונת לתאריך אחר — זה שדה אחד (`date`).

| Placeholder | מה למלא |
|---|---|
| `[OPENING TRAINING DATE]` | תאריך אימון הפתיחה |
| `[MODIIN / JERUSALEM]` | באיזה מרכז אימון הפתיחה |
| `[TIME]` (אימון פתיחה) | שעה |
| `capacity` | מספר מקומות ל-Combine. ריק כרגע = לא מוצג |
| `payment.amount` | הסכום שיוצג ליד כפתור הסליקה. ריק = לא מוצג |
| `price` | עלות ה-Combine, אם יש. ריק = לא מוצג |

### `data/centers.ts`
| Placeholder | מה למלא |
|---|---|
| `[MODIIN VENUE]` | שם האולם במודיעין |
| `[JERUSALEM VENUE]` | שם האולם בירושלים |
| `[TRAINING DAY]` ×2 | יום האימון בכל מרכז |
| `[TIME]` ×2 | שעת האימון בכל מרכז |
| `[NEXT CITY]` | העיר הבאה — או למחוק את השורה אם אין |

**הערה על המחיר:** המחיר לא מוצג באתר בכלל. סקשן החברות מציג מה היא כוללת ומסיים ב-"את המחיר והתנאים נעבור יחד בשיחה". גם ב-FAQ יש שאלה ישירה "כמה זה עולה?" עם אותה תשובה — כדי שמי שמחפש מחיר יקבל תשובה ולא יתסכל.

---

## 5. 📷 תמונות שחסרות

האתר משתמש ב-22 התמונות הקיימות. שלוש מסגרות עדיין מחכות לחומר:

| מיקום | מה צריך | הערה |
|---|---|---|
| **COMBINE** (`data/combine.ts` → `image`) | צילום מעמדת מדידה של BALLERZ — שחקן בבדיקה, מוט המדידה, סרט מדידה. 16:9, שחור-לבן | כרגע מוצגת **דיאגרמת עמדת מדידה** מקורית ב-SVG במקום תמונה. היא עומדת בפני עצמה — ברגע שיש צילום מה-17.10, שמים אותו ב-`image` והדיאגרמה מתחלפת אוטומטית |
| **HERO VIDEO** (`data/site.ts` → `heroVideo`) | 15–25 שניות: כדור פוגע ברצפה, עבודת רגליים, מאמן מתקן, 1 על 1, זיעה. בלי מוזיקה, בלי קאטים מהירים | התמונה עובדת, אבל וידאו ישדרג את ההירו משמעותית. קובץ `.mp4` ל-`public/media`, ואז `heroVideo: "/media/hero.mp4"` |
| **OPENING TRAINING** | כרגע משתמש ב-`standard-huddle.jpg`. אחרי האימון הראשון — להחליף בתמונה אמיתית מהאימון | `data/combine.ts` → `openingTraining.image` |

כדאי גם להחליף בהמשך: `community` (תמונת קבוצה אחרי אימון, לא מהאולם הנוכחי) ו-`parents` (מאמן מסביר לשחקן — כרגע `club-coach.jpg`).

---

## 6. 🤔 החלטות עסקיות שעדיין פתוחות

1. **מבשרת ציון.** הוגדרה `active: false` ולא נמחקה. אם המרכז קיים — להפעיל (דגל אחד).
2. **מועדונים.** `/clubs` שלם ועובד, אבל ירד מהניווט הראשי. אם B2B הוא עדיין יעד מרכזי — להחזיר אותו לניווט.
3. **ביגוד BALLERZ.** היה ב-Offer הישן, לא נכלל ב-8 הסעיפים החדשים. אם הוא חלק מהחברות — להוסיף ל-`data/offer.ts`.
4. **BALLERZ PERSONAL.** מוצג כ-Add-on, "הפרטים בשיחה". להחליט אם להשיק עכשיו (`enabled: false` מסתיר).
5. **עלות ה-Combine.** קישור הסליקה מחובר (Morning / חשבונית ירוקה). להחליט אם להציג את הסכום גם באתר — `combine.price` ו-`combine.payment.amount`, שניהם ריקים כרגע.
6. **מספר מקומות ל-Combine.** `combine.capacity` ריק = לא מוצג. מספר מקומות יוצר דחיפות.
7. **אימון הפתיחה.** תאריך, מרכז ושעה עדיין חסרים.
8. **טלפון באתר.** `site.contact.phone` ריק — כרגע הפנייה היא רק דרך וואטסאפ ומייל.
9. **הסכמת המרואיינים.** 11 ההמלצות הן הודעות אמיתיות מאנשים פרטיים. לפני קמפיין — לוודא אישור מכל אחד ואחת. `published: false` מסיר ציטוט מיידית.

---

## 7. QA שבוצע

- **Build:** `npm run build` עובר, `tsc --noEmit` נקי, `eslint` נקי (תוקן באג קיים ב-Header).
- **Responsive:** נסרקו 8 עמודים × 5 רוחבים (**375 · 430** · 768 · 1024 · 1440). **אפס גלישה אופקית, אפס אלמנט שחורג מהמסך.**
- **Console:** אפס שגיאות JS, אפס בקשות 404.
- **נגישות:** `h1` יחיד בכל עמוד · כל שדה טופס עם `label` · כל תמונה עם `alt` · skip-link · FAQ נגיש נטיבית · `prefers-reduced-motion` מכובד.
- **טפסים:** נבדק End-to-End — מילוי, שליחה, פאנל הצלחה, ופתיחת וואטסאפ עם ההודעה המלאה.
- **קישורים:** כל 17 הקישורים הפנימיים מצביעים לנתיב קיים. אפס קישורים שבורים.
- **RTL:** כל הכותרות באנגלית מיושרות נכון, הטקסט בעברית מיושר לימין, מספרים וטלפונים ב-LTR.

---

## 8. מבחן 10 השניות

| צריך להיות ברור | איפה זה נענה |
|---|---|
| מה זה BALLERZ | HERO + סקשן 03 |
| למי זה מיועד | HERO ("מכיתה ז׳ ומעלה") + ENTRY STANDARD + FAQ 01 |
| איפה מתאמנים | HERO (מודיעין · ירושלים) + סקשן 02, שני מסכים מהפתיחה |
| מה השחקן מקבל | סקשן 08 — Offer stack של 7 |
| מה זה Combine | סקשן 06 + עמוד `/combine` ייעודי |
| מתי ה-Combine | HERO → סקשן 06: **שבת 17.10, אולם מנהלת אופק מודיעין, 09:00** |
| מתי האימון הראשון | סקשן 07 — **אחרי שתמלא את התאריך** |
| כמה זה עולה | במכוון לא באתר — סקשן 11 ו-FAQ מסבירים שהמחיר נמסר בשיחה |
| איך נרשמים | CTA קבוע בהדר + 9 נקודות כניסה לאורך הדף + FAQ 10 |

**הכל ברור חוץ מתאריך אימון הפתיחה — שדה אחד ב-`data/combine.ts`.**

---

## 9. העלאה לאוויר

הקוד מוכן. התהליך כמו קודם:
1. להעלות את הקבצים לריפו `Omri5790/ballerz_web` ב-GitHub (או `git push` מהמחשב).
2. Vercel בונה אוטומטית מה-main.
3. לוודא שהדומיין `www.ballerz-basketball.co.il` ירוק ב-Vercel — `site.url` כבר מצביע ל-`www`.
