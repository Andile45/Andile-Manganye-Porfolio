/** Pixel offset for fixed header (matches section scroll-margin-top in index.css). */
function getHeaderScrollOffset(): number {
  const rem =
    parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  return window.matchMedia('(min-width: 1024px)').matches ? rem * 7 : rem * 6.5;
}

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';
}

/** Top document Y for a section, honoring scroll-margin-top. */
export function getSectionScrollTop(element: HTMLElement): number {
  const style = window.getComputedStyle(element);
  const scrollMargin = parseFloat(style.scrollMarginTop);
  const offset =
    Number.isFinite(scrollMargin) && scrollMargin > 0
      ? scrollMargin
      : getHeaderScrollOffset();

  return element.getBoundingClientRect().top + window.scrollY - offset;
}

/** Scroll to a portfolio section by id, accounting for the fixed header. */
export function scrollToSectionId(id: string, behavior?: ScrollBehavior) {
  const scrollBehavior = behavior ?? getScrollBehavior();

  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  const top = Math.max(0, getSectionScrollTop(element));
  window.scrollTo({ top, behavior: scrollBehavior });
}

export function updateSectionHash(id: string) {
  window.history.replaceState(null, '', id === 'home' ? '/' : `#${id}`);
}

/** Use on in-page hash links so mobile scroll matches the fixed header offset. */
export function handleSectionNavClick(
  e: { preventDefault: () => void },
  id: string
) {
  e.preventDefault();
  scrollToSectionId(id);
  updateSectionHash(id);
}
