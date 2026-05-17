import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { useStreamingText } from '../../hooks/useStreamingText';

type StreamingTextProps = {
  text: string;
  active: boolean;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  as?: 'span' | 'p';
};

export function StreamingText({
  text,
  active,
  speed,
  delay,
  className,
  cursorClassName,
  showCursor = true,
  as: Tag = 'span',
}: StreamingTextProps) {
  const { displayed, isStreaming } = useStreamingText(text, { active, speed, delay });

  return (
    <Tag className={className} aria-label={text}>
      {displayed}
      {showCursor && isStreaming && (
        <span
          className={cn('ml-0.5 inline-block w-[2px] animate-pulse bg-current', cursorClassName)}
          aria-hidden
        >
          |
        </span>
      )}
    </Tag>
  );
}

type StreamingCursorProps = {
  visible: boolean;
  className?: string;
};

export function StreamingCursor({ visible, className }: StreamingCursorProps) {
  if (!visible) return null;
  return (
    <span
      className={cn('ml-0.5 inline-block animate-pulse font-normal text-zinc-400', className)}
      aria-hidden
    >
      |
    </span>
  );
}

type StreamingLineProps = {
  active: boolean;
  speed?: number;
  delay?: number;
  className?: string;
  children: (state: { displayed: string; isComplete: boolean; isStreaming: boolean }) => ReactNode;
  text: string;
};

/** Renders streamed text via a render prop (for split styling). */
export function StreamingLine({
  text,
  active,
  speed,
  delay,
  className,
  children,
}: StreamingLineProps) {
  const state = useStreamingText(text, { active, speed, delay });
  return <span className={className}>{children(state)}</span>;
}
