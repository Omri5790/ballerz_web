export type NavItem = {
  label: string;
  labelEn: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "השיטה", labelEn: "METHOD", href: "/method" },
  { label: "מועדונים", labelEn: "CLUBS", href: "/clubs" },
  { label: "בתי ספר", labelEn: "SCHOOLS", href: "/schools" },
  { label: "מרכזים", labelEn: "CENTERS", href: "/centers" },
  { label: "מי אנחנו", labelEn: "ABOUT", href: "/about" },
];

export const footerNav: NavItem[] = [
  ...primaryNav,
  { label: "הצטרפות", labelEn: "JOIN", href: "/join" },
  { label: "צור קשר — מועדונים", labelEn: "CLUB CONTACT", href: "/clubs/contact" },
  { label: "צור קשר — בתי ספר", labelEn: "SCHOOL CONTACT", href: "/schools#school-contact" },
];
