import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none bg-glow-home transform-gpu" />

      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
