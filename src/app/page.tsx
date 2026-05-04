import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green-500/10 blur-[120px] dark:bg-green-500/20" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/10" />
      </div>

      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
