import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from './icons';
import { primaryButtonSm } from '../lib/button-styles';
import { scrollToSectionId, updateSectionHash } from '../lib/scroll';
import { cn } from '../lib/utils';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'soft-skills', label: 'Soft Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const updateActiveSection = useCallback(() => {
    const offset = 120;
    const scrollPos = window.scrollY + offset;
    let current = 'home';

    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (scrollPos >= top) current = item.id;
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      updateActiveSection();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [updateActiveSection]);

  const navigateToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    scrollToSectionId(id);
    updateSectionHash(id);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-zinc-200 bg-white/90 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <motion.a
          href="#home"
          onClick={(e) => navigateToSection(e, 'home')}
          className="text-lg font-bold tracking-tight text-zinc-950"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-zinc-700">A</span>. Manganye
        </motion.a>

        <motion.div className="hidden items-center gap-1 md:flex lg:gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => navigateToSection(e, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors lg:px-4',
                  isActive ? 'text-zinc-950' : 'text-zinc-600 hover:text-zinc-950'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="pointer-events-none absolute inset-0 rounded-lg bg-zinc-100 ring-1 ring-zinc-200/80"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    aria-hidden
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
          <motion.a
            href="#contact"
            onClick={(e) => navigateToSection(e, 'contact')}
            className={cn('ml-1 lg:ml-2', primaryButtonSm)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire me
          </motion.a>
        </motion.div>

        <a
          href="#projects"
          onClick={(e) => navigateToSection(e, 'projects')}
          className={cn('inline-flex items-center gap-1.5 md:hidden', primaryButtonSm)}
        >
          View work
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      </nav>
    </header>
  );
};

export default Header;
