"use client";

import { useEffect } from "react";

const ATTRS = ["data-reveal", "data-reveal-line"] as const;
const SELECTOR = ATTRS.map((a) => `[${a}]:not([${a}="in"])`).join(", ");

/**
 * מנוע האנימציות של האתר.
 * רץ פעם אחת ב-layout ומטפל בכל אלמנט עם data-reveal / data-reveal-line.
 * כך שאר האתר נשאר Server Components — בלי ספריות אנימציה ובלי JS מיותר.
 */
export default function RevealEngine() {
  useEffect(() => {
    const activate = (el: Element) => {
      for (const attr of ATTRS) {
        if (el.hasAttribute(attr)) el.setAttribute(attr, "in");
      }
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document.querySelectorAll(SELECTOR).forEach(activate);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          activate(entry.target);
          io.unobserve(entry.target);
        }
      },
      // threshold 0 — עובד גם על סקשנים גבוהים מהמסך
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    const observeAll = () =>
      document.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));

    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    // רשת ביטחון: מה שנשאר מוסתר אחרי 3 שניות — מוצג בכל מקרה
    const safety = window.setTimeout(() => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) activate(el);
      });
    }, 3000);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
