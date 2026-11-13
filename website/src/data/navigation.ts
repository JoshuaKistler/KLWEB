export interface NavLink {
  href: string;
  label: string;
}

export const mainNav: NavLink[] = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/projekte', label: 'Projekte' },
  { href: '/ueber-uns', label: 'Über uns' },
];

export const contactLink: NavLink = { href: '/kontakt', label: 'Kontakt' };

export const legalNav: NavLink[] = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
];

export function isCurrent(pathname: string, href: string): boolean {
  const normalize = (path: string) => path.replace(/\/+$/, '') || '/';
  return normalize(pathname) === normalize(href);
}
