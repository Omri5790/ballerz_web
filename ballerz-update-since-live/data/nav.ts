import { features } from "@/data/site";

export type NavItem = {
  label: string;
  labelEn: string;
  href: string;
};

/**
 * ניווט ראשי — עולם השחקנים קודם.
 * מועדונים ירדו לפוטר בלבד: הם קהל B2B ולא חלק ממסלול ההרשמה.
 */
export const primaryNav: NavItem[] = [
  { label: "מרכזים", labelEn: "CENTERS", href: "/centers" },
  { label: "התכנית", labelEn: "PROGRAM", href: "/method" },
  { label: "Combine", labelEn: "COMBINE", href: "/combine" },
  { label: "להורים", labelEn: "PARENTS", href: "/#parents" },
  { label: "בתי ספר", labelEn: "SCHOOLS", href: "/schools" },
  { label: "אודות", labelEn: "ABOUT", href: "/about" },
];

export const footerNav: NavItem[] = [
  { label: "מרכזים", labelEn: "CENTERS", href: "/centers" },
  { label: "התכנית המקצועית", labelEn: "PROGRAM", href: "/method" },
  { label: "Combine", labelEn: "COMBINE", href: "/combine" },
  { label: "קהילה", labelEn: "COMMUNITY", href: "/#community" },
  { label: "להורים", labelEn: "PARENTS", href: "/#parents" },
  { label: "החברות", labelEn: "MEMBERSHIP", href: "/#membership" },
  { label: "שאלות ותשובות", labelEn: "FAQ", href: "/#faq" },
  { label: "הרשמה", labelEn: "JOIN", href: "/join" },
];

/** עולמות נוספים — מופיעים בפוטר בעמודה נפרדת */
const allPartnerNav: NavItem[] = [
  { label: "בתי ספר", labelEn: "SCHOOLS", href: "/schools" },
  { label: "כתבות", labelEn: "ARTICLES", href: "/schools/articles" },
  { label: "מועדונים", labelEn: "CLUBS", href: "/clubs" },
  { label: "צור קשר — מועדונים", labelEn: "CLUB CONTACT", href: "/clubs/contact" },
  { label: "צור קשר — בתי ספר", labelEn: "SCHOOL CONTACT", href: "/schools#school-contact" },
  { label: "אודות", labelEn: "ABOUT", href: "/about" },
];

/** מסונן לפי המתגים ב-data/site.ts — מועדונים מוקפאים כרגע */
export const partnerNav: NavItem[] = allPartnerNav.filter(
  (item) => features.clubs || !item.href.startsWith("/clubs"),
);
