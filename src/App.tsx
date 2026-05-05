import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

function PortfolioPage() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © 2026 Harsh Dubey. Software Engineer.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<PortfolioPage />} path="*" />
    </Routes>
  );
}
