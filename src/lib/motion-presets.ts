/** Shared Framer Motion props so tap on mobile mirrors hover on desktop. */
export const liftInteraction = {
  whileHover: { y: -6 },
  whileTap: { y: -3, scale: 0.995 },
} as const;

export const scaleInteraction = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
} as const;

export const subtleScaleInteraction = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.99 },
} as const;

export const nudgeInteraction = {
  whileHover: { y: -4, scale: 1.02 },
  whileTap: { scale: 0.97, y: -2 },
} as const;
