import { ArrowUpRight, Check, ChevronDown, KeyRound } from './icons';
import type { DemoCredential } from '../data/projects';
import { projects, type Project } from '../data/projects';
import { primaryButtonSm } from '../lib/button-styles';
import { cn } from '../lib/utils';

type CardLayout = 'featured' | 'standard' | 'wide';

const layoutByTitle: Record<string, CardLayout> = {
  'Bite X': 'featured',
  'Mabotja Thabo Attorneys Inc.': 'wide',
  'Weather App': 'wide',
};

const projectsGridClass =
  'grid w-full min-w-0 max-w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5';

function getLayout(project: Project): CardLayout {
  return layoutByTitle[project.title] ?? 'standard';
}

function StackPills({ stack, max = 6 }: { stack: string[]; max?: number }) {
  const visible = stack.slice(0, max);
  const rest = stack.length - visible.length;

  return (
    <ul className="flex flex-wrap gap-1" aria-label="Tech stack">
      {visible.map((item) => (
        <li
          key={item}
          className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-200 hover:text-zinc-800"
        >
          {item}
        </li>
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
    <div
      className="flex flex-wrap gap-2"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target={link.download ? undefined : '_blank'}
          rel={link.download ? undefined : 'noopener noreferrer'}
          download={link.download || undefined}
          className={cn(
            'transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0',
            i === 0 ? primaryButtonSm : '',
            i !== 0 &&
              'group/link inline-flex items-center gap-1 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50'
          )}
        >
          {link.label}
          {!link.download && i !== 0 && (
            <ArrowUpRight
              className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden
            />
          )}
        </a>
      ))}
    </div>
  );
}

function FeatureList({
  features,
  className,
}: {
  features: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn('grid gap-1 sm:grid-cols-2', className)}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {features.map((feature) => (
        <li key={feature} className="flex gap-1.5 text-[11px] leading-snug text-zinc-600">
          <Check className="mt-0.5 h-3 w-3 shrink-0 text-zinc-400" aria-hidden />
          <span className="line-clamp-2">{feature}</span>
        </li>
      ))}
    </ul>
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

function ProjectThumbnail({ project }: { project: Project }) {
  if (!project.thumbnail) return null;

  const variant = project.thumbnailVariant ?? 'desktop';
  const isMobile = variant === 'mobile';
  const isMockup = variant === 'mockup';
  const liveHref = project.links?.find((l) => !l.download)?.href;

  const image = (
    <img
      src={project.thumbnail}
      alt={project.thumbnailAlt ?? `${project.title} preview`}
      width={isMobile ? 390 : isMockup ? 480 : 640}
      height={isMobile ? 844 : isMockup ? 480 : 360}
      loading="lazy"
      decoding="async"
      className={cn(
        'w-full',
        isMobile && 'h-full object-cover object-top',
        !isMobile && 'h-auto object-contain'
      )}
    />
  );
  const thumbnailFrame =
    'overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/90';
  const frameClass = cn(
    thumbnailFrame,
    isMobile && 'mx-auto w-full max-w-[200px]',
    isMockup &&
      'mx-auto w-full max-w-[220px] p-2.5 sm:max-w-[260px] sm:p-3 md:max-w-[280px] md:p-3.5',
    !isMobile && !isMockup && 'p-3 sm:p-4'
  );
  const mediaClass = cn(
    'block w-full transition-opacity duration-300',
    isMobile && 'aspect-[9/19]',
    !isMobile && 'h-auto',
    liveHref && 'hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500'
  );

  return (
    <div className={frameClass}>
      {liveHref ? (
        <a
          href={liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className={mediaClass}
          aria-label={`Open live demo: ${project.title}`}
        >
          {image}
        </a>
      ) : (
        <div className={mediaClass}>{image}</div>
      )}
    </div>
  );
}

function CardHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          {project.tagline}
        </p>
        <h3 className="mt-1 text-balance text-lg font-bold leading-snug tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-zinc-800 sm:text-xl">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const layout = getLayout(project);
  const isWide = layout === 'wide' || layout === 'featured';
  const isMockupWide =
    isWide && project.thumbnail && project.thumbnailVariant === 'mockup';

  const cardClass = cn(
    'project-card group relative w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm',
    'transition-[border-color,box-shadow] duration-300',
    'hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-300/25',
    'active:border-zinc-300 active:shadow-lg',
    isWide && 'md:col-span-2'
  );

  return (
    <article className={cardClass}>
      <div
        className={cn(
          'pointer-events-none absolute -right-10 -top-10 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/30',
          isWide ? 'h-32 w-32 -right-12 -top-12 group-hover:bg-zinc-300/35' : 'h-28 w-28'
        )}
        aria-hidden
      />
      {project.thumbnail && (layout === 'wide' || layout === 'featured') ? (
        <>
          <div
            className={cn(
              'flex flex-col md:flex-row md:items-center',
              isMockupWide
                ? 'gap-6 p-5 sm:gap-7 sm:p-6 md:gap-10 md:p-6 lg:gap-12 lg:p-7'
                : 'gap-5 md:gap-8 lg:gap-10'
            )}
          >
            <div
              className={cn(
                'flex w-full items-center justify-center md:shrink-0',
                isMockupWide
                  ? 'md:w-[34%] lg:w-[32%] xl:w-[30%]'
                  : 'px-4 py-4 md:p-6',
                !isMockupWide &&
                  (layout === 'featured'
                    ? 'md:w-[40%] lg:w-[42%]'
                    : 'md:w-[44%] lg:w-[46%]')
              )}
            >
              <ProjectThumbnail project={project} />
            </div>
            <div
              className={cn(
                'relative flex min-w-0 flex-1 flex-col',
                isMockupWide
                  ? 'gap-4 md:gap-5'
                  : 'gap-3 px-4 pb-4 pt-1 md:px-6 md:py-5 md:pt-5'
              )}
            >
              <CardHeader project={project} />
              <p
                className={cn(
                  'text-sm text-zinc-600',
                  isMockupWide ? 'leading-relaxed' : 'leading-snug'
                )}
              >
                {project.description}
              </p>
              <FeatureList
                features={project.features}
                className={isMockupWide ? 'gap-2 sm:gap-x-6 sm:gap-y-2.5' : undefined}
              />
              <p
                className={cn(
                  'text-[11px] text-zinc-500',
                  isMockupWide ? 'leading-relaxed' : 'leading-snug'
                )}
              >
                <span className="font-semibold text-zinc-700">Role — </span>
                {project.role}
              </p>
              <StackPills
                stack={project.stack}
                max={layout === 'featured' ? 8 : 6}
              />
              {project.links && (
                <div className={isMockupWide ? 'pt-1' : undefined}>
                  <ProjectLinks links={project.links} />
                </div>
              )}
            </div>
          </div>
          {layout === 'featured' && project.credentials && (
            <div className="border-t border-zinc-100 p-4 pt-3">
              <DemoCredentials credentials={project.credentials} />
            </div>
          )}
        </>
      ) : (
        <div className="relative space-y-3 p-4">
          {project.thumbnail && (
            <div className="pb-1">
              <ProjectThumbnail project={project} />
            </div>
          )}
          <CardHeader project={project} />
          <p
            className={cn(
              'leading-snug text-zinc-600',
              layout === 'standard' ? 'line-clamp-2 text-xs sm:text-sm' : 'text-sm'
            )}
          >
            {project.description}
          </p>
          <FeatureList features={project.features} />
          {isWide && (
            <p className="text-[11px] leading-snug text-zinc-500">
              <span className="font-semibold text-zinc-700">Role — </span>
              {project.role}
            </p>
          )}
          <StackPills
            stack={project.stack}
            max={layout === 'featured' ? 8 : layout === 'wide' ? 6 : 5}
          />
          {project.links && <ProjectLinks links={project.links} />}
          {layout === 'featured' && project.credentials && (
            <DemoCredentials credentials={project.credentials} />
          )}
        </div>
      )}
    </article>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-600">
            Full-stack products across mobile, AI, and web — live demos and downloads where
            available.
          </p>
        </div>

        <div className={projectsGridClass}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
