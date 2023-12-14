import { HeroSection } from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <div className="mx-auto px-6 py-4 text-slate-200 container">
        <HeroSection />
      </div>
    </main>
  );
}
