import Experience from './components/Experience';
import Footer from './components/Footer';
import { HeroSection } from './components/HeroSection';
import Logos from './components/Logos';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <div className="mt-24 mx-auto px-6 py-4 text-slate-200 container">
        <Navbar />
        <HeroSection />
        <Logos />
        <Skills />
        <Experience />
        <Projects />
        <Portfolio />
        <Footer />
      </div>
    </main>
  );
}
