import Header from "@/components/header";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import TechStack from "@/components/sections/technologies";

export default function MainContent() {
  return (
    <div className="bg-white dark:bg-black space-y-20">
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
  );
}
