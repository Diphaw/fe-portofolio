import Header from "@/components/header";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import TechStack from "@/components/sections/technologies";

export default function MainContent() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black">
      <div className="fixed inset-0 z-0 pointer-events-none bg-glow-main transform-gpu" />

      <div className="relative z-10">
        <Header />
        <div className="space-y-20 pb-20 pt-24">
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
    </div>
  );
}
