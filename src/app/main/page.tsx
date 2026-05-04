import Header from "@/components/header";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import TechStack from "@/components/sections/technologies";

export default function MainContent() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-green-500/10 blur-[120px] dark:bg-green-500/20" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/10" />
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/15" />
      </div>

      <div className="relative z-10 space-y-20 pb-20">
        <Header />
        <section id="technologies" className="scroll-mt-24">
          <TechStack />
        </section>
        <section id="experience" className="scroll-mt-24">
          <Experiences />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </div>
    </div>
  );
}
