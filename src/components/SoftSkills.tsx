import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  GraduationCap,
  Lightbulb,
  ScanEye,
  type LucideIcon,
} from 'lucide-react';
import { liftInteraction } from '../lib/motion-presets';
import { cn } from '../lib/utils';

type SoftSkill = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const softSkills: SoftSkill[] = [
  {
    name: 'AI Integration',
    description: 'Building AI-powered features using Claude, OpenAI and modern LLM APIs',
    icon: Brain,
  },
  {
    name: 'Problem Solving',
    description: 'Debugging, optimising and finding pragmatic solutions under pressure',
    icon: Lightbulb,
  },
  {
    name: 'Self-Taught Mindset',
    description:
      'Proactive learner at CodeTribe — driven by initiative and curiosity, not only coursework',
    icon: GraduationCap,
  },
  {
    name: 'Attention to Detail',
    description:
      'Polished UIs and careful implementation — spacing, types, and edge cases matter',
    icon: ScanEye,
  },
  {
    name: 'Clean Code Advocate',
    description:
      'Readable, maintainable code — clear naming, structure, and thoughtful reviews',
    icon: Code2,
  },
];

const spring = { type: 'spring' as const, stiffness: 380, damping: 26 };

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="section-padding overflow-x-hidden">
      <motion.div
        className="mx-auto w-full min-w-0 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">
            How I Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Soft Skills
          </h2>
          <p className="mt-3 max-w-xl text-zinc-600">
            The mindset and habits behind reliable delivery — beyond the tech stack.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.li
                key={skill.name}
                className={cn(
                  'lg:col-span-2',
                  index === 3 && 'lg:col-start-2',
                  index === 4 && 'lg:col-start-4'
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <motion.article
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-6',
                    'shadow-sm shadow-zinc-200/50 transition-[border-color,box-shadow,background-color] duration-500',
                    'hover:border-zinc-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-300/35'
                  )}
                  {...liftInteraction}
                  transition={spring}
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/20"
                  />
                  <span
                    className={cn(
                      'relative flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800',
                      'shadow-sm transition-all duration-300 group-hover:border-zinc-300 group-hover:shadow-md'
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="relative mt-4 text-lg font-semibold text-zinc-950">
                    {skill.name}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-zinc-600">
                    {skill.description}
                  </p>
                </motion.article>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default SoftSkills;
