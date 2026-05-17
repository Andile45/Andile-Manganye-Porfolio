import type { ComponentType } from 'react';
import { useCanHover } from '../hooks/useCanHover';
import { cn } from '../lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

type ContactLinkCardProps = {
  label: string;
  value: string;
  href: string;
  description: string;
  hint: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
  className?: string;
};

export function ContactLinkCard({
  label,
  value,
  href,
  description,
  hint,
  icon: Icon,
  external = false,
  className,
}: ContactLinkCardProps) {
  const canHover = useCanHover();

  const card = (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group flex flex-col items-center rounded-2xl border border-zinc-200',
        'bg-zinc-50 p-6 backdrop-blur-md transition-colors hover:border-zinc-400',
        className
      )}
    >
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-zinc-200">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold text-zinc-950">{label}</span>
      <span className="mt-1 text-xs text-zinc-500">{value}</span>
    </a>
  );

  if (!canHover) {
    return card;
  }

  return (
    <HoverCard openDelay={200} closeDelay={120}>
      <HoverCardTrigger asChild>{card}</HoverCardTrigger>
      <HoverCardContent side="top" className="w-64 text-center">
        <p className="text-sm font-semibold text-zinc-950">{label}</p>
        <p className="mt-1 text-xs leading-relaxed text-zinc-600">{description}</p>
        <p className="mt-2 text-[11px] font-medium text-zinc-500">{hint}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
