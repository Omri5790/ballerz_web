# BALLERZ — Player Development System

אתר תדמית ולידים ל-BALLERZ. בנוי ב-Next.js 16 (App Router), TypeScript ו-Tailwind CSS v4.
עברית מלאה עם RTL, כותרות באנגלית, mobile-first.

---

## הרצה מקומית

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # בדיקת production
npm run start
```

Node 20+ נדרש.ץ

---

## מבנה

```
app/                 עמודים (App Router)
  page.tsx           דף הבית — 12 סקשנים
  clubs/             /clubs  + /clubs/contact
  method/            /method
  centers/           /centers
  join/              /join
  about/             /about — מאחורי המערכת + המייסד
  api/lead/          קליטת לידים משני הטפסים
components/
  layout/            Header, Footer, PageHero
  ui/                Section, Button, MediaSlot, Ticker, CourtArt, Grain, RevealEngine
  home/              סקשנים של דף הבית
  sections/          סקשנים משותפים (Centers, ReadyToBuild)
  forms/             LeadForm
data/                כל התוכן המשתנה  ← כאן עורכים
public/fonts/        פונטים מותקנים מקומית (לא Google Fonts)
public/media/        תמונות ווידאו של המותג
```

---

## עריכת תוכן — בלי לגעת בקומפוננטות

| מה לשנות | קובץ |
| --- | --- |
| שם דומיין, מייל, טלפון, אינסטגרם, וידאו הירו | `data/site.ts` |
| מרכזים (הוספה / סטטוס / גילאים / יום אימון) | `data/centers.ts` |
| תוכן למועדונים, מודולים, מודלי שיתוף פעולה | `data/clubs.ts` |
| הלולאה, תחומי פיתוח, מה שחקן מקבל, ערכים | `data/system.ts` |
| פרקי השיטה, רמת כניסה | `data/method.ts` |
| המייסד — ביו, תחומי מומחיות, תמונה | `data/founder.ts` |
| שדות הטפסים | `data/forms.ts` |
| הוכחות / המלצות (כשיהיו) | `data/proof.ts` |
| תפריט | `data/nav.ts` |

### הוספת מרכז חדש

```ts
// data/centers.ts
{
  id: "jerusalem",
  city: "ירושלים",
  cityEn: "JERUSALEM",
  status: "soon",          // "open" | "soon" | "waitlist"
  statusLabel: "הרשמה בקרוב",
  location: "שם האולם",
  ages: "כיתות ד׳–ט׳",
  trainingDay: "יום שלישי",
}
```

זה הכל. המרכז יופיע בדף הבית, בעמוד /centers, בפוטר ובתפריט "מרכז מועדף" בטופס.

---

## מדיה

כל הצילומים באתר עברו טיפול אחיד: שחור-לבן, העלאת קונטרסט, קרופ ליחס הנדרש.
זו החלטת עיצוב — הכתום הוא הצבע היחיד באתר, וכך 27 תמונות משלושה אולמות שונים
נראות כמו מערכת אחת.

הקבצים נמצאים ב-`public/media/`. להחלפת תמונה: לשמור קובץ באותו שם ובאותו יחס.
להוספת חדשה: להעלות ל-`public/media/` ולעדכן את הנתיב בקובץ ה-data המתאים
(`image` ב-`skillAreas`, `portrait` ב-`founder`, `heroVideo`/`heroImage` ב-`site`).

עדיין חסר: **וידאו Hero**. ברגע שיהיה — לשים ב-`public/media/hero.mp4`
ולעדכן `heroVideo` ב-`data/site.ts`. התמונה הנוכחית תהפוך אוטומטית ל-poster.

ראו `public/media/README.md` לבריף המלא.

---

## קליטת לידים — וואטסאפ

הזרימה: ממלאים טופס → נלחץ CTA → נפתח וואטסאפ עם הודעה מוכנה
ובה כל הפרטים שמולאו → ההודעה נשלחת למספר שמוגדר ב-`data/site.ts`.

```ts
// data/site.ts
contact: {
  whatsapp: "9725XXXXXXX",  // בינלאומי, ספרות בלבד, בלי + ובלי 0 מוביל
}
```

0501234567 → 972501234567

**כל עוד השדה ריק** — הטופס עדיין עובד, אבל לא נפתח וואטסאפ.

במקביל כל שליחה נרשמת גם בשרת (`app/api/lead/route.ts`), כך שאפשר
בהמשך לחבר גיבוי אוטומטי (Make / Zapier / Google Sheets):

```bash
# .env.local
LEAD_WEBHOOK_URL=https://hook.eu2.make.com/xxxxx
```

---

## פריסה

מומלץ Vercel:

1. להעלות את הריפו ל-GitHub
2. Import ב-Vercel
3. להגדיר `LEAD_WEBHOOK_URL` ב-Environment Variables
4. לחבר דומיין ולעדכן `site.url` ב-`data/site.ts`

---

## החלטות טכניות

- **אפס תלויות מיותרות** — רק next/react. האנימציות, הגרפיקה והטיקרים נכתבו ידנית.
- **פונטים מקומיים** — Archivo (כותרות), Heebo (עברית), JetBrains Mono (spec).
  אין בקשה ל-Google Fonts: טעינה מהירה יותר ופרטיות.
- **Server Components כברירת מחדל** — רק ה-Header, הטפסים ומנוע האנימציה הם client.
- **מנוע אנימציה אחד** (`RevealEngine`) שמטפל בכל האתר דרך `data-reveal` / `data-reveal-line`,
  עם כיבוד `prefers-reduced-motion`.
- **גרפיקת מגרש** — SVG inline, בלי תמונות: מגרש, דיאגרמות X/O, סרגלי מדידה.
