import { Analytics } from '@vercel/analytics/react';
import CustomCursor from './components/CustomCursor';
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

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-zinc-700 antialiased">
      <CustomCursor />
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
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
