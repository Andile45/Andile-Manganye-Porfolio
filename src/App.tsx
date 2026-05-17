import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

const CustomCursor = lazy(() => import('./components/CustomCursor'));
const Analytics = lazy(() =>
  import('@vercel/analytics/react').then((m) => ({ default: m.Analytics }))
);

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-zinc-700 antialiased">
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 px-4 py-10 text-center">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Andile Manganye · Built with{' '}
          <span className="text-zinc-700">React</span>,{' '}
          <span className="text-zinc-700">TypeScript</span> &{' '}
          <span className="text-zinc-700">Tailwind CSS</span>
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          <a href="/llms.txt" className="underline hover:text-zinc-800">
            llms.txt
          </a>
          {' · '}
          <a href="/llms-full.txt" className="underline hover:text-zinc-800">
            Full profile for AI tools
          </a>
        </p>
      </footer>
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
    </div>
  );
}

export default App;
