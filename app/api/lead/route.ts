import { NextResponse } from "next/server";

/**
 * קליטת לידים.
 * ---------------------------------------------------------------
 * כרגע: ולידציה בסיסית + לוג בשרת. הליד לא הולך לאיבוד בקוד —
 * אבל כדי לקבל אותו בפועל צריך לחבר יעד אחד מהבאים ולמלא TODO:
 *
 *  אפשרות 1 — מייל:      Resend / SendGrid  (RESEND_API_KEY)
 *  אפשרות 2 — Google Sheets:  Apps Script Web App URL (SHEETS_WEBHOOK_URL)
 *  אפשרות 3 — CRM/וואטסאפ:   Make / Zapier webhook (LEAD_WEBHOOK_URL)
 *
 * הכי מהיר להתחלה: webhook. מוסיפים LEAD_WEBHOOK_URL ל-.env.local וזהו.
 */

export const runtime = "nodejs";

type Payload = {
  kind: "player" | "club" | "school";
  data: Record<string, string>;
};

export async function POST(req: Request) {
  let body: Payload;

  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  const { kind, data } = body ?? {};

  if (!kind || !data || typeof data !== "object") {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  // honeypot — בוטים ממלאים את זה
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    kind,
    receivedAt: new Date().toISOString(),
    source: req.headers.get("referer") ?? "direct",
    data,
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("[BALLERZ] webhook failed", err);
      // לא מפילים את הבקשה — עדיין מחזירים ok כדי לא לאבד את המשתמש
    }
  } else {
    console.info("[BALLERZ] LEAD (no webhook configured)", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
