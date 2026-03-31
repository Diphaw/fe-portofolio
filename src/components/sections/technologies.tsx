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

      <Flex gap="5" className="px-20 py-10">
        <Card className="w-40 ">
          <FaHtml5 size={40} className="text-orange-500" />
          <p>HTML</p>
        </Card>

        <Card className="w-40 flex ">
          <SiTailwindcss size={40} className="text-cyan-400" />
          <p>TailwindCSS</p>
        </Card>

        <Card className="w-40 ">
          <SiTypescript size={40} className="text-blue-500" />
          <p>TypeScript</p>
        </Card>

        <Card className="w-40 ">
          <SiNextdotjs size={40} className="text-black dark:text-white" />
          <p>Next.js</p>
        </Card>
      </Flex>
    </section>
  );
}
