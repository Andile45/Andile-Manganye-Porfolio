import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from './icons';
import PrimaryButton from './ui/PrimaryButton';
import { secondaryButton } from '../lib/button-styles';
import { subtleScaleInteraction } from '../lib/motion-presets';
import { handleSectionNavClick } from '../lib/scroll';
import { cn } from '../lib/utils';

const PROFILE_IMAGE = '/Andile-Manganye-Image.jpg';

const ROLE = 'Full-Stack Engineer';
const HEADLINE_1 = 'Architecting robust backends. ';
const HEADLINE_2 = 'Crafting intuitive UIs.';
const BIO =
  "I'm Andile Manganye, a full-stack engineer building scalable web and mobile applications.";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const motionInitial = reduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <section
      id="home"
      className="section-padding relative flex min-h-0 items-center overflow-x-hidden pt-32 sm:pt-36 lg:min-h-[85vh] lg:pt-40"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-zinc-400/20 blur-[120px]"
        animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-zinc-400/10 blur-[100px]"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16"
        initial={motionInitial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="w-full min-w-0 text-center lg:text-left"
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-700">{ROLE}</p>
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl md:text-5xl lg:text-7xl">
            {HEADLINE_1}
            <span className="bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
              {HEADLINE_2}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">{BIO}</p>
          <motion.div
            className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
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
              Let&apos;s Connect
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex w-full shrink-0 justify-center lg:justify-end"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-400/30 via-transparent to-zinc-500/20 blur-2xl"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className={cn(
              'relative aspect-[4/5] w-[min(100%,220px)] overflow-hidden rounded-2xl sm:w-[280px]',
              'border border-zinc-200 bg-zinc-50 p-1 shadow-2xl shadow-zinc-200/80',
              'lg:aspect-square lg:w-full lg:max-w-md lg:rounded-3xl'
            )}
            {...subtleScaleInteraction}
            transition={{ type: 'spring', stiffness: 300 }}
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
