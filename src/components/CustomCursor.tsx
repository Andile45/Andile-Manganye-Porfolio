import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';

const INTERACTIVE_SELECTOR =
  'a, button, summary, input, textarea, select, label, [data-cursor="grow"]';

const RING_SIZE = 32;
const DOT_SIZE = 8;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isGrow, setIsGrow] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateEnabled = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };

    updateEnabled();
    finePointer.addEventListener('change', updateEnabled);
    reducedMotion.addEventListener('change', updateEnabled);

    return () => {
      finePointer.removeEventListener('change', updateEnabled);
      reducedMotion.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - RING_SIZE / 2);
      mouseY.set(e.clientY - RING_SIZE / 2);
      dotX.set(e.clientX - DOT_SIZE / 2);
      dotY.set(e.clientY - DOT_SIZE / 2);
    };

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE_SELECTOR)) {
        setIsGrow(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      const related = e.relatedTarget as Element | null;
      if (target.closest(INTERACTIVE_SELECTOR) && !related?.closest(INTERACTIVE_SELECTOR)) {
        setIsGrow(false);
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [enabled, mouseX, mouseY, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: ringX, y: ringY }}
        className={cn(
          'pointer-events-none fixed left-0 top-0 z-[9999]',
          'h-8 w-8 rounded-full border border-zinc-400 mix-blend-difference',
          'transition-[transform,background-color,border-color] duration-150 ease-out',
          isGrow && 'scale-[2.5] border-white/60 bg-white/10'
        )}
        aria-hidden
      />
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-white mix-blend-difference"
        aria-hidden
      />
    </>
  );
}
