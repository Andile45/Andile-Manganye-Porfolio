import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from './icons';
import PrimaryButton from './ui/PrimaryButton';
import { secondaryButton } from '../lib/button-styles';
import { handleSectionNavClick } from '../lib/scroll';
import { cn } from '../lib/utils';

const headlineEase = [0.22, 1, 0.36, 1] as const;

const PROFILE_IMAGE = '/Andile-Manganye-Image.jpg';

const ROLE = 'Full-Stack Engineer';
const HEADLINE_1 = 'Architecting robust backends. ';
const HEADLINE_2 = 'Crafting intuitive UIs.';
const BIO =
  "I'm Andile Manganye, a full-stack engineer building scalable web and mobile applications.";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="section-padding relative flex min-h-0 items-center overflow-x-hidden pt-36 sm:pt-40 lg:min-h-[85vh] lg:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-zinc-400/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-zinc-400/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="w-full min-w-0 text-center lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-700">{ROLE}</p>
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl md:text-5xl lg:text-7xl">
            {reduceMotion ? (
              <>
                {HEADLINE_1}
                <span className="bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
                  {HEADLINE_2}
                </span>
              </>
            ) : (
              <>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: headlineEase, delay: 0.06 }}
                >
                  {HEADLINE_1}
                </motion.span>
                <motion.span
                  className="inline-block bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: headlineEase, delay: 0.2 }}
                >
                  {HEADLINE_2}
                </motion.span>
              </>
            )}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">{BIO}</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <PrimaryButton
              href="#projects"
              onClick={(e) => handleSectionNavClick(e, 'projects')}
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </PrimaryButton>
            <a
              href="#contact"
              className={cn(secondaryButton, 'px-8 py-[14px] text-base')}
              onClick={(e) => handleSectionNavClick(e, 'contact')}
            >
              Schedule a call
            </a>
          </div>
        </div>

        <div className="relative mt-6 flex w-full shrink-0 justify-center sm:mt-8 lg:mt-0 lg:justify-end">
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-400/30 via-transparent to-zinc-500/20 blur-2xl"
          />
          <div
            className={cn(
              'relative aspect-[4/5] w-[min(100%,220px)] overflow-hidden rounded-2xl sm:w-[280px]',
              'border border-zinc-200 bg-zinc-50 p-1 shadow-2xl shadow-zinc-200/80',
              'lg:aspect-square lg:w-full lg:max-w-md lg:rounded-3xl'
            )}
          >
            <img
              src={PROFILE_IMAGE}
              alt="Andile Manganye, full-stack developer"
              width={560}
              height={700}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full rounded-[0.85rem] object-cover object-top lg:rounded-[1.35rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
