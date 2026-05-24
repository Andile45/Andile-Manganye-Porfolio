import React, { useRef, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';
import { primaryButton, secondaryButton } from '../../lib/button-styles';

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

export function MagneticButton({
  children,
  href,
  download,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  disabled = false,
}: MagneticButtonProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: ReactMouseEvent) => {
    const el = anchorRef.current ?? buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = cn(
    'relative z-10',
    variant === 'primary' ? primaryButton : secondaryButton,
    className
  );

  const hoverTransition =
    variant === 'primary'
      ? { duration: 0.12, ease: 'easeOut' as const }
      : { type: 'spring' as const, stiffness: 400, damping: 22 };

  const interactionProps = {
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    whileHover: disabled ? undefined : { scale: 1.02 },
    whileTap: disabled ? undefined : { scale: 0.98 },
    transition: hoverTransition,
    className: baseStyles,
  };

  const wrapperClass = cn('inline-flex', className?.includes('w-full') && 'w-full');

  if (href) {
    return (
      <motion.div className={wrapperClass} style={{ x: springX, y: springY }}>
        <motion.a ref={anchorRef} href={href} download={download} {...interactionProps}>
          {children}
        </motion.a>
      </motion.div>
    );
  }

  return (
    <motion.div className={wrapperClass} style={{ x: springX, y: springY }}>
      <motion.button
        ref={buttonRef}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...interactionProps}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
