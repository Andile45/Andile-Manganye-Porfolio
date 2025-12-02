import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <footer className="py-10 px-4 text-center bg-white dark:bg-gray-950 border-t-2 border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            © {new Date().getFullYear()} Andile Manganye. Built with{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span>
            {' + '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">TypeScript</span>
            {' + '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">TailwindCSS</span>
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
