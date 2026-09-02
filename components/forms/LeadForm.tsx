"use client";

import { useState } from "react";
import type { FormField } from "@/data/forms";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type Props = {
  kind: "player" | "club" | "school";
  fields: FormField[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
};

/** בונה הודעת וואטסאפ מסודרת מתוך תוכן הטופס */
function buildWhatsappUrl(
  kind: "player" | "club" | "school",
  fields: FormField[],
  data: Record<string, FormDataEntryValue>,
) {
  if (!site.contact.whatsapp) return null;

  const header =
    kind === "player"
      ? "היי, הגעתי מהאתר של BALLERZ ואני רוצה להצטרף למרכז 🏀"
      : kind === "school"
        ? "היי, אני פונה מטעם בית ספר בנוגע לתכנית BALLERZ"
        : "היי, אני פונה מטעם מועדון בנוגע להקמת מרכז BALLERZ";

  const lines = fields
    .map((f) => {
      const v = String(data[f.name] ?? "").trim();
      return v ? `${f.label}: ${v}` : null;
    })
    .filter(Boolean);

  const text = [header, "", ...lines].join("\n");
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

const inputBase =
  "w-full border-b border-asphalt/45 bg-transparent px-0 py-3 text-[0.98rem] text-bone " +
  "placeholder:text-asphalt/70 transition-colors duration-300 " +
  "focus:border-flare focus:outline-none";

export default function LeadForm({
  kind,
  fields,
  submitLabel,
  successTitle,
  successBody,
}: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [waUrl, setWaUrl] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // פותחים וואטסאפ מיד — עדיין בתוך מחוות המשתמש, כדי שחוסם החלונות לא יחסום
    const url = buildWhatsappUrl(kind, fields, data);
    if (url) {
      setWaUrl(url);
      window.open(url, "_blank", "noopener");
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, data }),
      });
      if (!res.ok) throw new Error("request failed");
      setState("done");
      form.reset();
    } catch {
      setErrorMsg("משהו השתבש בשליחה. אפשר לנסות שוב או לפנות אלינו ישירות.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="border border-flare bg-ink-2 p-8 md:p-12" role="status">
        <span className="spec text-flare">RECEIVED</span>
        <h3 className="display t-h2 mt-4 text-bone">{successTitle}</h3>
        <p className="body-he mt-4 max-w-md text-bone/70">{successBody}</p>

        {waUrl && (
          <div className="mt-8 border-t border-asphalt/35 pt-6">
            <p className="body-he text-sm text-asphalt-2">
              נפתח לכם חלון וואטסאפ עם כל הפרטים. אם הוא לא נפתח —
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-4 border border-flare bg-flare px-6 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-transparent hover:text-flare"
            >
              שליחה בוואטסאפ
              <svg
                aria-hidden
                viewBox="0 0 24 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-2.5 w-6"
              >
                <path d="M24 6H1M7 1L1 6l6 5" />
              </svg>
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="w-full">
      {/* מלכודת ספאם */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden
      />

      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={cn(f.span === 2 && "sm:col-span-2")}>
            <label htmlFor={f.name} className="label-he block text-asphalt-2">
              {f.label}
              {f.required && <span className="text-flare"> *</span>}
            </label>

            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                rows={3}
                placeholder={f.placeholder}
                className={cn(inputBase, "mt-2 resize-y")}
              />
            ) : f.type === "select" ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                defaultValue=""
                className={cn(inputBase, "mt-2 [&>option]:bg-ink-2")}
              >
                <option value="" disabled>
                  בחר/י
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                placeholder={f.placeholder}
                autoComplete={f.autoComplete}
                inputMode={f.type === "tel" ? "tel" : f.type === "number" ? "numeric" : undefined}
                dir={f.type === "tel" || f.type === "email" || f.type === "number" ? "ltr" : undefined}
                className={cn(inputBase, "mt-2", (f.type === "tel" || f.type === "email") && "text-start")}
              />
            )}
          </div>
        ))}
      </div>

      {state === "error" && (
        <p className="body-he mt-6 border border-flare/60 px-4 py-3 text-sm text-flare" role="alert">
          {errorMsg}
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={state === "sending"}
          className="group relative inline-flex items-center justify-between gap-8 overflow-hidden border border-flare bg-flare px-7 py-5 text-[0.95rem] font-medium leading-none text-ink transition-colors duration-500 hover:text-bone disabled:opacity-50"
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-[left] scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
          />
          <span className="relative z-10">
            {state === "sending" ? "שולח…" : submitLabel}
          </span>
          <svg
            aria-hidden
            viewBox="0 0 24 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="relative z-10 h-2.5 w-6 transition-transform duration-500 group-hover:-translate-x-1.5"
          >
            <path d="M24 6H1M7 1L1 6l6 5" />
          </svg>
        </button>

        <p className="spec spec-sm max-w-xs text-asphalt-2">
          {site.contact.whatsapp
            ? "NO PAYMENT · SENT VIA WHATSAPP"
            : "NO PAYMENT · NO COMMITMENT"}
        </p>
      </div>
    </form>
  );
}
