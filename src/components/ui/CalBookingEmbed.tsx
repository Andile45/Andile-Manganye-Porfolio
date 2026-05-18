import Cal from '@calcom/embed-react';
import { useEffect, useRef, useState } from 'react';

const CAL_LINK = 'andile-manganye-dev/30min';
const CAL_NAMESPACE = 'portfolio-booking';

/** Cal embed: month calendar first, then time slots after a date is chosen. */
const EMBED_CONFIG = {
  theme: 'light',
  layout: 'month_view',
  useSlotsViewOnSmallScreen: 'true',
} as const;

export function CalBookingEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-zinc-200 bg-white"
    >
      {shouldLoad ? (
        <Cal
          namespace={CAL_NAMESPACE}
          calLink={CAL_LINK}
          config={{ ...EMBED_CONFIG }}
          style={{ width: '100%', minHeight: '520px', height: 'auto', overflow: 'auto' }}
        />
      ) : (
        <div
          className="flex min-h-[520px] items-center justify-center text-sm text-zinc-500"
          aria-hidden
        >
          Loading scheduler…
        </div>
      )}
    </div>
  );
}
