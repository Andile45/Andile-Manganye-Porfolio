import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';
import type { SVGProps } from 'react';
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Award01Icon,
  Brain01Icon,
  Briefcase01Icon,
  BulbIcon,
  Cancel01Icon,
  ChevronDown as ChevronDownSvg,
  ChevronLeft as ChevronLeftSvg,
  ChevronRight as ChevronRightSvg,
  CodeIcon,
  Download01Icon,
  Github as GithubSvg,
  GraduationCap as GraduationCapSvg,
  Key01Icon,
  Linkedin as LinkedinSvg,
  LinkSquare01Icon,
  Mail01Icon,
  Menu01Icon,
  Rocket01Icon,
  ScanEyeIcon,
  Send as SendSvg,
  Tick01Icon,
  ZoomIn as ZoomInSvg,
} from '@hugeicons/core-free-icons';
import { cn } from '../../lib/utils';

export type { IconSvgElement };

export type IconComponentProps = SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
};

function sizeFromClassName(className?: string, fallback = 20): number {
  const match = className?.match(/\b[hw]-(\d+(?:\.\d+)?)\b/);
  if (!match) return fallback;
  return parseFloat(match[1]) * 4;
}

function createIcon(icon: IconSvgElement, defaultSize = 20) {
  return function Icon({
    className,
    size,
    strokeWidth = 1.75,
    ...props
  }: IconComponentProps) {
    const resolvedSize = size ?? sizeFromClassName(className, defaultSize);

    return (
      <HugeiconsIcon
        icon={icon}
        size={resolvedSize}
        strokeWidth={strokeWidth}
        color="currentColor"
        className={cn('shrink-0', className)}
        {...props}
      />
    );
  };
}

export const ArrowRight = createIcon(ArrowRight01Icon);
export const ArrowUpRight = createIcon(ArrowUpRight01Icon);
export const Award = createIcon(Award01Icon);
export const Brain = createIcon(Brain01Icon);
export const Briefcase = createIcon(Briefcase01Icon);
export const Bulb = createIcon(BulbIcon);
export const Cancel = createIcon(Cancel01Icon);
/** Alias for close / menu toggle (replaces Lucide X). */
export const X = Cancel;
export const Check = createIcon(Tick01Icon);
export const ChevronDown = createIcon(ChevronDownSvg);
export const ChevronLeft = createIcon(ChevronLeftSvg);
export const ChevronRight = createIcon(ChevronRightSvg);
export const Code2 = createIcon(CodeIcon);
export const Download = createIcon(Download01Icon);
export const ExternalLink = createIcon(LinkSquare01Icon);
export const Github = createIcon(GithubSvg);
export const Linkedin = createIcon(LinkedinSvg);
export const GraduationCap = createIcon(GraduationCapSvg);
export const KeyRound = createIcon(Key01Icon);
export const Lightbulb = Bulb;
export const Mail = createIcon(Mail01Icon);
export const Menu = createIcon(Menu01Icon);
export const Rocket = createIcon(Rocket01Icon);
export const ScanEye = createIcon(ScanEyeIcon);
export const Send = createIcon(SendSvg);
export const ZoomIn = createIcon(ZoomInSvg);

export type PortfolioIcon = ReturnType<typeof createIcon>;
