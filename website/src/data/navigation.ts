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

const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '');

// Ergänzt interne Pfade um den Astro-`base` (z. B. /KLWEB auf GitHub Pages). Externe und relative Links bleiben unverändert.
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return path === '/' ? `${basePath}/` : `${basePath}${path}`;
}

export function isCurrent(pathname: string, href: string): boolean {
  const normalize = (path: string) => path.replace(/\/+$/, '') || '/';
  return normalize(pathname) === normalize(withBase(href));
}
