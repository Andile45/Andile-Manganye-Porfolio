import type { ComponentType } from 'react';
import { cn } from '../lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

type FooterSocialLinkProps = {
  href: string;
  label: string;
  title: string;
  description: string;
  hint: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
  canHover: boolean;
};

export function FooterSocialLink({
  href,
  label,
  title,
  description,
  hint,
  icon: Icon,
  external = false,
  canHover,
}: FooterSocialLinkProps) {

  const link = (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200',
        'text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500'
      )}
      aria-label={label}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </a>
  );

  if (!canHover) {
    return link;
  }

  return (
    <HoverCard openDelay={200} closeDelay={120}>
      <HoverCardTrigger asChild>{link}</HoverCardTrigger>
      <HoverCardContent side="top" align="center" className="w-56 text-center">
        <p className="text-sm font-semibold text-zinc-950">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-zinc-600">{description}</p>
        <p className="mt-2 text-[11px] font-medium text-zinc-500">{hint}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
