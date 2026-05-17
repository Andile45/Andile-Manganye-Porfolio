import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

/** Match mobile menu exit animation before scrolling (layout must settle). */
const MOBILE_MENU_CLOSE_MS = 320;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    const menuWasOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);

    const runScroll = () => {
      scrollToSectionId(id);
      updateSectionHash(id);
    };

    if (menuWasOpen) {
      window.setTimeout(runScroll, MOBILE_MENU_CLOSE_MS);
    } else {
      requestAnimationFrame(runScroll);
    }
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

        <button
          type="button"
          className="rounded-lg border border-zinc-200 p-2 text-zinc-600 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="space-y-1 border-b border-zinc-200 bg-white/95 px-4 py-5 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => navigateToSection(e, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative block w-full rounded-lg py-3.5 pl-4 pr-4 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-zinc-100 font-semibold text-zinc-950 ring-1 ring-zinc-200/80'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950'
                  )}
                >
                  {isActive && (
                    <span
                      className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-zinc-900"
                      aria-hidden
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
