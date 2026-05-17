import { motion, useInView } from 'framer-motion';
import { Briefcase, Check, GraduationCap, type LucideIcon } from 'lucide-react';
import { useRef } from 'react';
import { liftInteraction } from '../lib/motion-presets';
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
    company: 'CodeTribe Academy Â· mLab Southern Africa',
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

const iconByType: Record<ExperienceEntry['type'], LucideIcon> = {
  work: Briefcase,
  education: GraduationCap,
};

const spring = { type: 'spring' as const, stiffness: 380, damping: 26 };

function TimelineConnector({ active, isLast }: { active: boolean; isLast: boolean }) {
  if (isLast) return null;

  return (
    <motion.div
      className={cn(
        'absolute left-4 top-10 w-px -translate-x-1/2 sm:left-5',
        active
          ? 'bg-gradient-to-b from-zinc-800 via-zinc-400 to-zinc-200'
          : 'bg-zinc-200'
      )}
      style={{ height: 'calc(100% - 1.25rem)' }}
      initial={{ scaleY: 0 }}
      animate={active ? { scaleY: 1 } : { scaleY: 0 }}
      transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    />
  );
}

function ExperienceItem({
  exp,
  index,
  isLast,
}: {
  exp: ExperienceEntry;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const Icon = iconByType[exp.type];

  return (
    <motion.li
      ref={ref}
      className="relative list-none pb-10 last:pb-0 sm:pb-12"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <TimelineConnector active={isInView} isLast={isLast} />

      <motion.div
        className="relative flex gap-5 sm:gap-6"
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 + 0.05 }}
      >
        <motion.div
          className={cn(
            'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 sm:h-10 sm:w-10',
            isInView
              ? 'border-zinc-900 bg-zinc-900 text-white shadow-md shadow-zinc-900/20'
              : 'border-zinc-300 bg-white text-zinc-500'
          )}
          initial={{ scale: 0.6 }}
          animate={isInView ? { scale: 1 } : { scale: 0.85 }}
          transition={spring}
          aria-hidden
        >
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
        </motion.div>

        <motion.article
          className={cn(
            'group relative min-w-0 flex-1 overflow-hidden rounded-2xl border p-5 transition-[border-color,box-shadow,background-color] duration-500 sm:p-6',
            isInView
              ? 'border-zinc-300 bg-white shadow-md shadow-zinc-200/50'
              : 'border-zinc-200 bg-zinc-50'
          )}
          {...liftInteraction}
          transition={spring}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/25"
          />

          <header className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <motion.div
              className="min-w-0 flex-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.08 + 0.15 }}
            >
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
            </motion.div>

            <motion.time
              dateTime={exp.period}
              className="shrink-0 text-xs font-semibold tabular-nums text-zinc-500 sm:pt-1 sm:text-right sm:text-sm"
              initial={{ opacity: 0, x: 8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.08 + 0.2 }}
            >
              {exp.period}
            </motion.time>
          </header>

          <ul className="relative mt-5 space-y-2.5 border-t border-zinc-100 pt-5">
            {exp.description.map((item, i) => (
              <motion.li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-zinc-600"
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.08 + 0.22 + i * 0.05 }}
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </motion.div>
    </motion.li>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="section-padding overflow-x-hidden">
      <motion.div
        className="mx-auto w-full min-w-0 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
          <motion.div
            className="pointer-events-none absolute bottom-8 left-4 top-8 w-px -translate-x-1/2 bg-zinc-200 sm:left-5"
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
          />

          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.title}
              exp={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </ol>
      </motion.div>
    </section>
  );
};

export default Experience;
