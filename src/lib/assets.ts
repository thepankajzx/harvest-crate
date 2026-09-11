/**
 * Resolves static asset paths correctly across both local dev and GitHub Pages base paths.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${cleanPath}`;
}
