import { HeroSection } from './components/HeroSection';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <div className="mt-24 mx-auto px-6 py-4 text-slate-200 container">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
