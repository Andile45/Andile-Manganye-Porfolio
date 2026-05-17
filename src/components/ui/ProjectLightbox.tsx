import { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectGalleryImage } from '../../lib/project-images';
import { cn } from '../../lib/utils';

export type ProjectLightboxState = {
  title: string;
  images: ProjectGalleryImage[];
  index: number;
};

type ProjectLightboxProps = {
  state: ProjectLightboxState | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ProjectLightbox({ state, onClose, onIndexChange }: ProjectLightboxProps) {
  const open = state !== null;
  const images = state?.images ?? [];
  const index = state?.index ?? 0;
  const current = images[index];
  const hasMultiple = images.length > 1;

  const goPrev = useCallback(() => {
    if (!hasMultiple) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [hasMultiple, index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (!hasMultiple) return;
    onIndexChange((index + 1) % images.length);
  }, [hasMultiple, index, images.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {open && current && state && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${state.title} screenshots`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            aria-label="Close gallery"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 flex w-full max-w-5xl flex-col gap-4"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={current.src}
              className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900 shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {current.label && (
                <span className="absolute left-4 top-4 z-10 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-800 shadow-sm">
                  {current.label}
                </span>
              )}
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[min(78vh,720px)] w-full object-contain"
              />
            </motion.div>

            <motion.div
              key={`${state.title}-meta`}
              className="flex flex-wrap items-center justify-between gap-3 px-1"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <motion.div
                key={`${state.title}-caption`}
                className="min-w-0 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-sm font-semibold text-white">{state.title}</p>
                <p className="mt-0.5 text-xs text-zinc-400">{current.alt}</p>
              </motion.div>

              <div className="flex items-center gap-2">
                {hasMultiple && (
                  <>
                    <span className="text-xs font-medium tabular-nums text-zinc-400">
                      {index + 1} / {images.length}
                    </span>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="rounded-lg border border-zinc-600 bg-zinc-800/80 p-2 text-white transition-colors hover:bg-zinc-700"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="rounded-lg border border-zinc-600 bg-zinc-800/80 p-2 text-white transition-colors hover:bg-zinc-700"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-zinc-600 bg-zinc-800/80 p-2 text-white transition-colors hover:bg-zinc-700"
                  aria-label="Close gallery"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>

            {hasMultiple && (
              <div className="flex justify-center gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => onIndexChange(i)}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-300',
                      i === index ? 'w-6 bg-white' : 'w-1.5 bg-zinc-500 hover:bg-zinc-400'
                    )}
                    aria-label={`Go to image ${i + 1}`}
                    aria-current={i === index ? 'true' : undefined}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
