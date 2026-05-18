import { Briefcase, Check, GraduationCap, type PortfolioIcon } from './icons';
import { cn } from '../lib/utils';

type ExperienceEntry = {
  type: 'work' | 'education';
  title: string;
  company: string;
  period: string;
  description: string[];
  badge?: string;
};

const experiences: ExperienceEntry[] = [
  {
    type: 'work',
    title: 'Developer Trainee (Graduate)',
    company: 'CodeTribe Academy · mLab Southern Africa',
    period: 'Jul 2025 - Mar 2026',
    badge: 'Latest role',
    description: [
      'Completed full-stack developer training with production-style deliverables',
      'Shipped solutions in Agile/Scrum teams with peer review and iteration',
      'React, TypeScript, PostgreSQL, Supabase, and modern deployment tooling',
    ],
  },
  {
    type: 'education',
    title: 'Computer Science Diploma',
    company: 'Tshwane University of Technology (TUT)',
    period: '2022 - 2025',
    description: [
      'Software development, algorithms, and database systems',
      'Full-stack university projects across web and mobile',
      'Java, SQL, and software engineering fundamentals',
    ],
  },
];

const iconByType: Record<ExperienceEntry['type'], PortfolioIcon> = {
  work: Briefcase,
  education: GraduationCap,
};

function TimelineConnector({ isLast }: { isLast: boolean }) {
  if (isLast) return null;

  return (
    <div
      className="absolute left-4 top-10 w-px -translate-x-1/2 bg-gradient-to-b from-zinc-800 via-zinc-400 to-zinc-200 sm:left-5"
      style={{ height: 'calc(100% - 1.25rem)' }}
      aria-hidden
    />
  );
}

function ExperienceItem({ exp, isLast }: { exp: ExperienceEntry; isLast: boolean }) {
  const Icon = iconByType[exp.type];

  return (
    <li className="relative list-none pb-10 last:pb-0 sm:pb-12">
      <TimelineConnector isLast={isLast} />

      <div className="relative flex gap-5 sm:gap-6">
        <div
          className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-900 text-white shadow-md shadow-zinc-900/20 sm:h-10 sm:w-10"
          aria-hidden
        >
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
        </div>

        <article
          className={cn(
            'group relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-zinc-300 bg-white p-5 shadow-md shadow-zinc-200/50 sm:p-6',
            'transition-[border-color,box-shadow,background-color] duration-500',
            'hover:border-zinc-300 hover:shadow-lg'
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/25"
          />

          <header className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {exp.badge && (
                  <span className="inline-flex items-center rounded-md bg-zinc-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {exp.badge}
                  </span>
                )}
                <span
                  className={cn(
                    'inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                    exp.type === 'work'
                      ? 'bg-zinc-100 text-zinc-700'
                      : 'bg-zinc-100 text-zinc-600'
                  )}
                >
                  {exp.type === 'work' ? 'Work' : 'Education'}
                </span>
              </div>

              <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">
                {exp.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-600">{exp.company}</p>
            </div>

            <time
              dateTime={exp.period}
              className="shrink-0 text-xs font-semibold tabular-nums text-zinc-500 sm:pt-1 sm:text-right sm:text-sm"
            >
              {exp.period}
            </time>
          </header>

          <ul className="relative mt-5 space-y-2.5 border-t border-zinc-100 pt-5">
            {exp.description.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </li>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        <div className="mb-10 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">
            Career
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-xl text-zinc-600">
            Training and education that shaped how I build and ship software.
          </p>
        </div>

        <ol className="relative">
          <div
            className="pointer-events-none absolute bottom-8 left-4 top-8 w-px -translate-x-1/2 bg-zinc-200 sm:left-5"
            aria-hidden
          />

          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.title}
              exp={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
