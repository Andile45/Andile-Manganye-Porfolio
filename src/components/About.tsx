import { GraduationCap, Rocket } from './icons';
import { cn } from '../lib/utils';

const highlights = [
  {
    icon: GraduationCap,
    text: 'Computer Science diploma from Tshwane University of Technology (TUT)',
  },
  {
    icon: Rocket,
    text: 'Graduate of CodeTribe Academy (mLab Southern Africa) — completed developer training July 2025 - March 2026',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-3xl">
        <div
          className={cn(
            'group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10',
            'shadow-md shadow-zinc-300/30',
            'transition-[border-color,box-shadow,background-color] duration-500',
            'hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-300/40'
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/25"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Building products that matter
          </h2>
          <p className="mt-2 text-lg font-medium text-zinc-800">
            Full-Stack Developer · Problem solver · Lifelong learner
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4 text-zinc-600">
                <span
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700',
                    'shadow-sm shadow-zinc-200/60 transition-all duration-300',
                    'group-hover:border-zinc-300 group-hover:shadow-md group-hover:shadow-zinc-200/80'
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="pt-2 text-sm leading-relaxed sm:text-base">{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-zinc-600 sm:text-base">
            I thrive in agile environments where collaboration turns complex ideas into systems
            communities can rely on. Every new framework or challenge is a chance to grow and
            deliver more impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
