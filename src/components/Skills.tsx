import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import {
  SiCss,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiRender,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { NetBeansIcon } from './icons/NetBeansIcon';
import { nudgeInteraction } from '../lib/motion-presets';
import { cn } from '../lib/utils';

type Skill = {
  name: string;
  role: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: 'React', role: 'Library', icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', role: 'Framework', icon: SiReact, color: '#61DAFB' },
  { name: 'HTML', role: 'Markup', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', role: 'Styling', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', role: 'Language', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', role: 'Styling', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'TypeScript', role: 'Language', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', role: 'Runtime', icon: SiNodedotjs, color: '#339933' },
  { name: 'Expo', role: 'Platform', icon: SiExpo, color: '#000020' },
  { name: 'Supabase', role: 'BaaS', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Firebase', role: 'BaaS', icon: SiFirebase, color: '#FFCA28' },
  { name: 'PostgreSQL', role: 'Database', icon: SiPostgresql, color: '#4169E1' },
  { name: 'SQL', role: 'Database', icon: SiMysql, color: '#4479A1' },
  { name: 'Java', role: 'Language', icon: FaJava, color: '#007396' },
  { name: 'Figma', role: 'Design', icon: SiFigma, color: '#F24E1E' },
  { name: 'GitHub', role: 'Version Control', icon: SiGithub, color: '#181717' },
  { name: 'Vercel', role: 'Deployment', icon: SiVercel, color: '#000000' },
  { name: 'Railway', role: 'Deployment', icon: SiRailway, color: '#0B0D0E' },
  { name: 'Render', role: 'Deployment', icon: SiRender, color: '#000000' },
  { name: 'Shadcn', role: 'UI Library', icon: SiShadcnui, color: '#000000' },
  { name: 'VS Code', role: 'Editor', icon: VscVscode, color: '#007ACC' },
  { name: 'NetBeans', role: 'Editor', icon: NetBeansIcon, color: '#1B6AC6' },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...skills, ...skills];

  return (
    <motion.div
      className={cn(
        'flex w-max gap-3 sm:gap-4',
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      )}
    >
      {items.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={`${skill.name}-${i}`}
            className={cn(
              'flex shrink-0 cursor-default items-center gap-2.5 rounded-xl border border-dashed border-zinc-200',
              'bg-white px-3 py-2.5 shadow-sm transition-colors duration-300 sm:gap-3 sm:px-4 sm:py-3',
              'hover:border-zinc-400 hover:bg-zinc-50/80 hover:shadow-md hover:shadow-zinc-200/50',
              'active:border-zinc-400 active:bg-zinc-50/80'
            )}
            {...nudgeInteraction}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-50 sm:h-9 sm:w-9"
              aria-hidden
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: skill.color }} />
            </span>
            <div className="whitespace-nowrap">
              <p className="text-xs font-semibold text-zinc-950 sm:text-sm">{skill.name}</p>
              <p className="text-[10px] text-zinc-400 sm:text-xs">{skill.role}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding overflow-x-hidden">
      <motion.div
        className="mx-auto w-full min-w-0 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">
            Tech Stack
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-xl text-zinc-600">
            Tools and frameworks I use to ship production-ready products.
          </p>
        </div>

        <motion.div
          className="marquee-pause relative touch-pan-y space-y-3 sm:space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16 md:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16 md:w-24"
            aria-hidden
          />

          <div className="overflow-hidden py-2">
            <MarqueeRow />
          </div>
          <div className="overflow-hidden py-2">
            <MarqueeRow reverse />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
