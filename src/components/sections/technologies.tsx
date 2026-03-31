import { Card, Flex } from "@radix-ui/themes";
import { FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Technologies() {
  return (
    <section id="technologies" className="w-full bg-white dark:bg-black ">
      <div className="px-20 space-y-5">
        <Flex align="center" gap="4">
          <div className="w-12 h-px bg-green-500"></div>
          <h2 className="font-semibold text-green-500"> Tech Stack </h2>
        </Flex>
        <h1 className="text-black dark:text-white text-3xl font-semibold">
          My Technologies and Tools
        </h1>
      </div>

      <Flex gap="5" wrap="wrap" className="px-20 py-10 w-full">
        <Card className="w-fit ">
          <FaHtml5 size={40} className="text-orange-500" />
          <p className="text-black dark:text-white text-sm md:text-lg">HTML</p>
        </Card>

        <Card className="w-fit">
          <SiTailwindcss size={40} className="text-cyan-400" />
          <p className="text-black dark:text-white text-sm md:text-lg">TailwindCSS</p>
        </Card>

        <Card className="w-fit ">
          <SiTypescript size={40} className="text-blue-500" />
          <p className="text-black dark:text-white text-sm md:text-lg">TypeScript</p>
        </Card>

        <Card className="w-fit ">
          <SiNextdotjs size={40} className="text-black dark:text-white" />
          <p className="text-black dark:text-white text-sm md:text-lg">Next.js</p>
        </Card>
      </Flex>
    </section>
  );
}
