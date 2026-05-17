import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Check, ChevronDown, KeyRound, ZoomIn } from 'lucide-react';
import type { DemoCredential } from '../data/projects';
import { projects, type Project } from '../data/projects';
import { getProjectGalleryImages } from '../lib/project-images';
import { primaryButtonSm } from '../lib/button-styles';
import { liftInteraction } from '../lib/motion-presets';
import { cn } from '../lib/utils';
import {
  ProjectLightbox,
  type ProjectLightboxState,
} from './ui/ProjectLightbox';

const spring = { type: 'spring' as const, stiffness: 380, damping: 26 };
const springSnappy = { type: 'spring' as const, stiffness: 480, damping: 28 };

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: i * 0.07 },
  }),
};

type CardLayout = 'featured' | 'standard' | 'wide';

const layoutByTitle: Record<string, CardLayout> = {
  'Bite X': 'featured',
  'Weather App': 'wide',
};

const projectsGridClass = cn(
  'grid w-full min-w-0 max-w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 transition-opacity duration-300',
  '[@media(hover:hover)]:[&:has(.project-card:hover)_.project-card]:opacity-[0.48]',
  '[@media(hover:hover)]:[&:has(.project-card:hover)_.project-card:hover]:opacity-100',
  '[@media(hover:none)]:[&:has(.project-card:active)_.project-card]:opacity-[0.52]',
  '[@media(hover:none)]:[&:has(.project-card:active)_.project-card:active]:opacity-100'
);

function getLayout(project: Project): CardLayout {
  return layoutByTitle[project.title] ?? 'standard';
}

function ThumbnailBadge({ label }: { label: string }) {
  return (
    <span className="absolute left-2 top-2 z-10 rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-semibold text-zinc-800 shadow-sm">
      {label}
    </span>
  );
}

function ThumbnailButton({
  children,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group/thumb relative block w-full cursor-zoom-in text-left',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500'
      )}
      aria-label={ariaLabel}
    >
      {children}
      <span
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center rounded-[inherit]',
          'bg-zinc-950/0 opacity-0 transition-opacity duration-300',
          'group-hover/thumb:bg-zinc-950/25 group-hover/thumb:opacity-100',
          'group-focus-visible/thumb:bg-zinc-950/25 group-focus-visible/thumb:opacity-100'
        )}
        aria-hidden
      >
        <ZoomIn className="h-7 w-7 text-white drop-shadow-md sm:h-8 sm:w-8" />
      </span>
    </button>
  );
}

function MobileThumbnail({
  src,
  alt,
  label,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <motion.div className={cn('relative mx-auto w-full min-w-0 max-w-[min(100%,200px)]', className)}>
      <ThumbnailButton onClick={onClick} ariaLabel={`View full size: ${alt}`}>
        {label && <ThumbnailBadge label={label} />}
        <motion.div
          className={cn(
            'aspect-[9/19] w-full overflow-hidden rounded-xl',
            'bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100',
            'ring-1 ring-zinc-200/90 shadow-sm',
            'transition-all duration-500 ease-out',
            'group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-zinc-300/40 group-hover:ring-zinc-300'
          )}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={springSnappy}
        >
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain object-top transition-transform duration-700 ease-out group-hover/thumb:scale-[1.02] group-active/thumb:scale-[1.01]"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </ThumbnailButton>
    </motion.div>
  );
}

function DesktopThumbnail({
  src,
  alt,
  label,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <ThumbnailButton onClick={onClick} ariaLabel={`View full size: ${alt}`}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-lg bg-zinc-900 ring-1 ring-zinc-200/80',
          'aspect-video max-h-[220px] sm:max-h-[260px]',
          'transition-shadow duration-500 group-hover:shadow-lg group-hover:shadow-zinc-400/25',
          'md:aspect-auto md:max-h-none',
          className
        )}
      >
        {label && <ThumbnailBadge label={label} />}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover/thumb:scale-[1.03] md:object-left-top"
          loading="lazy"
          decoding="async"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent transition-opacity duration-500 group-hover:from-zinc-950/15"
          aria-hidden
        />
      </div>
    </ThumbnailButton>
  );
}

function ProjectThumbnail({
  project,
  layout,
  onImageClick,
}: {
  project: Project;
  layout: CardLayout;
  onImageClick: (imageIndex: number) => void;
}) {
  const dual = layout === 'featured' && project.secondaryThumbnail;
  const variant = project.thumbnailVariant ?? 'desktop';

  if (dual && project.secondaryThumbnail) {
    return (
      <motion.div
        className="grid min-h-[240px] grid-cols-1 gap-3 sm:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] sm:min-h-[220px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
      >
        <MobileThumbnail
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          label="Mobile"
          className="max-w-[160px] justify-self-center sm:max-w-[180px]"
          onClick={() => onImageClick(0)}
        />
        <DesktopThumbnail
          src={project.secondaryThumbnail.src}
          alt={project.secondaryThumbnail.alt}
          label="CMS"
          className="min-h-[160px] sm:min-h-0 sm:h-full"
          onClick={() => onImageClick(1)}
        />
      </motion.div>
    );
  }

  if (variant === 'mobile') {
    return (
      <MobileThumbnail
        src={project.thumbnail}
        alt={project.thumbnailAlt}
        onClick={() => onImageClick(0)}
        className={layout === 'wide' ? 'max-w-[200px] md:max-w-[220px]' : 'max-w-[190px]'}
      />
    );
  }

  return (
    <DesktopThumbnail
      src={project.thumbnail}
      alt={project.thumbnailAlt}
      onClick={() => onImageClick(0)}
      className={cn(
        layout === 'wide' ? 'h-48 md:h-full md:min-h-[240px]' : 'h-44 sm:h-48'
      )}
    />
  );
}

function StackPills({ stack, max = 6 }: { stack: string[]; max?: number }) {
  const visible = stack.slice(0, max);
  const rest = stack.length - visible.length;

  return (
    <ul className="flex flex-wrap gap-1" aria-label="Tech stack">
      {visible.map((item) => (
        <motion.li
          key={item}
          className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 transition-colors duration-300 hover:bg-zinc-200 hover:text-zinc-800"
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.98, y: 0 }}
          transition={springSnappy}
        >
          {item}
        </motion.li>
      ))}
      {rest > 0 && (
        <li className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-500">
          +{rest}
        </li>
      )}
    </ul>
  );
}

function ProjectLinks({ links }: { links: NonNullable<Project['links']> }) {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {links.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.download ? undefined : '_blank'}
          rel={link.download ? undefined : 'noopener noreferrer'}
          download={link.download || undefined}
          className={cn(
            i === 0 ? primaryButtonSm : '',
            i !== 0 &&
              'inline-flex items-center gap-1 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50'
          )}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96, y: 0 }}
          transition={springSnappy}
        >
          {link.label}
          {!link.download && i !== 0 && (
            <ArrowUpRight
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          )}
        </motion.a>
      ))}
    </motion.div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <motion.ul
      className="grid gap-1 sm:grid-cols-2"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {features.map((feature) => (
        <li key={feature} className="flex gap-1.5 text-[11px] leading-snug text-zinc-600">
          <Check className="mt-0.5 h-3 w-3 shrink-0 text-zinc-400" aria-hidden />
          <span className="line-clamp-2">{feature}</span>
        </li>
      ))}
    </motion.ul>
  );
}

function CredentialRow({ cred }: { cred: DemoCredential }) {
  return (
    <li
      className={cn(
        'rounded-lg border border-zinc-200 bg-white p-3 shadow-sm',
        'transition-colors duration-300 hover:border-zinc-300 hover:shadow-md'
      )}
    >
      <span className="inline-block rounded-md bg-zinc-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
        {cred.role}
      </span>
      <div className="mt-2 space-y-1 font-mono text-xs text-zinc-800 sm:text-sm">
        <p className="break-all">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
            Email
          </span>
          <br />
          {cred.email}
        </p>
        <p>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
            Password
          </span>
          <br />
          <span className="font-semibold text-zinc-950">{cred.password}</span>
        </p>
      </div>
    </li>
  );
}

function DemoCredentials({ credentials }: { credentials: NonNullable<Project['credentials']> }) {
  return (
    <details
      open
      className={cn(
        'group rounded-xl border-2 border-zinc-900/15 bg-gradient-to-br from-zinc-100 to-zinc-50',
        'shadow-md shadow-zinc-300/40 ring-1 ring-zinc-900/5'
      )}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <summary
        className={cn(
          'flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3',
          '[&::-webkit-details-marker]:hidden'
        )}
      >
        <span className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white shadow-sm">
            <KeyRound className="h-4 w-4" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-bold text-zinc-950">CMS demo logins</span>
            <span className="text-xs font-medium text-zinc-600">
              Try the live dashboard — {credentials.length} test accounts
            </span>
          </span>
        </span>
        <ChevronDown className="h-5 w-5 shrink-0 text-zinc-600 transition-transform group-open:rotate-180" />
      </summary>
      <ul className="grid gap-2 border-t border-zinc-200/80 p-3 sm:grid-cols-2 sm:gap-3 sm:p-4 lg:grid-cols-3">
        {credentials.map((cred) => (
          <CredentialRow key={cred.email} cred={cred} />
        ))}
      </ul>
    </details>
  );
}

function CardHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <motion.div
        key={project.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          {project.tagline}
        </p>
        <h3 className="mt-0.5 text-lg font-bold tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-zinc-800 sm:text-xl">
          {project.title}
        </h3>
      </motion.div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpenGallery,
}: {
  project: Project;
  index: number;
  onOpenGallery: (project: Project, imageIndex: number) => void;
}) {
  const layout = getLayout(project);

  const cardClass = cn(
    'project-card group relative w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm',
    'transition-[border-color,box-shadow,opacity] duration-300',
    'hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-300/25',
    'active:border-zinc-300 active:shadow-lg'
  );

  const cardMotion = {
    variants: cardReveal,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, amount: 0.12 },
    custom: index,
    ...liftInteraction,
    transition: spring,
  };

  const thumbnail = (
    <ProjectThumbnail
      project={project}
      layout={layout}
      onImageClick={(imageIndex) => onOpenGallery(project, imageIndex)}
    />
  );

  if (layout === 'wide') {
    return (
      <motion.article className={cn(cardClass, 'md:col-span-2')} {...cardMotion}>
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/35"
          aria-hidden
        />
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="p-3 pb-0 md:w-[38%] md:p-4 md:pr-0"
            whileHover={{ scale: 1.005 }}
            transition={springSnappy}
          >
            {thumbnail}
          </motion.div>
          <div className="flex flex-1 flex-col gap-3 p-4 md:py-4 md:pl-3">
            <CardHeader project={project} />
            <p className="text-sm leading-snug text-zinc-600">{project.description}</p>
            <FeatureList features={project.features} />
            <p className="text-[11px] leading-snug text-zinc-500">
              <span className="font-semibold text-zinc-700">Role — </span>
              {project.role}
            </p>
            <StackPills stack={project.stack} />
            {project.links && <ProjectLinks links={project.links} />}
          </div>
        </div>
      </motion.article>
    );
  }

  if (layout === 'featured') {
    return (
      <motion.article className={cn(cardClass, 'md:col-span-2')} {...cardMotion}>
        <motion.div
          className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/35"
          aria-hidden
        />
        <motion.div className="p-4 pb-0" whileHover={{ scale: 1.005 }} transition={springSnappy}>
          {thumbnail}
        </motion.div>
        <motion.div
          className="space-y-4 p-4 pt-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          <motion.div className="space-y-3" variants={cardReveal}>
            <CardHeader project={project} />
            <p className="text-sm leading-snug text-zinc-600">{project.description}</p>
            <FeatureList features={project.features} />
            <p className="text-[11px] leading-snug text-zinc-500">
              <span className="font-semibold text-zinc-700">Role — </span>
              {project.role}
            </p>
            <StackPills stack={project.stack} max={8} />
            {project.links && <ProjectLinks links={project.links} />}
          </motion.div>
          {project.credentials && (
            <motion.div variants={cardReveal}>
              <DemoCredentials credentials={project.credentials} />
            </motion.div>
          )}
        </motion.div>
      </motion.article>
    );
  }

  return (
    <motion.article className={cardClass} {...cardMotion}>
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/30"
        aria-hidden
      />
      <motion.div
        className={cn(
          'relative flex justify-center p-3 pb-0 transition-colors duration-500',
          project.thumbnailVariant === 'mobile' && 'bg-zinc-50/60 group-hover:bg-zinc-100/80'
        )}
        whileHover={{ scale: 1.005 }}
        transition={springSnappy}
      >
        {thumbnail}
      </motion.div>
      <div className="space-y-2.5 p-4 pt-3">
        <CardHeader project={project} />
        <p className="line-clamp-2 text-xs leading-snug text-zinc-600 sm:text-sm">
          {project.description}
        </p>
        <FeatureList features={project.features} />
        <StackPills stack={project.stack} max={5} />
        {project.links && <ProjectLinks links={project.links} />}
      </div>
    </motion.article>
  );
}

const Projects = () => {
  const [lightbox, setLightbox] = useState<ProjectLightboxState | null>(null);

  const openGallery = (project: Project, imageIndex: number) => {
    setLightbox({
      title: project.title,
      images: getProjectGalleryImages(project),
      index: imageIndex,
    });
  };

  return (
    <section id="projects" className="section-padding overflow-x-hidden">
      <motion.div
        className="mx-auto w-full min-w-0 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-600">
            Full-stack products across mobile, AI, and web. Click a preview to enlarge.
          </p>
        </div>

        <motion.div
          className={projectsGridClass}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpenGallery={openGallery}
            />
          ))}
        </motion.div>
      </motion.div>

      <ProjectLightbox
        state={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={(index) =>
          setLightbox((prev) => (prev ? { ...prev, index } : null))
        }
      />
    </section>
  );
};

export default Projects;
