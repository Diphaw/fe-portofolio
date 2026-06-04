"use client";

import { TECH_STACK } from "@/constants";
import { Card, Flex } from "@radix-ui/themes";

export default function Technologies() {
  return (
    <section id="technologies" className="w-full bg-transparent">
      <div className="space-y-5 px-10 md:px-20">
        <Flex align="center" gap="4">
          <div className="h-px w-12 bg-green-500" />
          <h2 className="font-semibold text-green-500">Tech Stack</h2>
        </Flex>
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          My Technologies and Tools
        </h1>
      </div>

      <Flex gap="5" wrap="wrap" className="w-full px-10 py-10 md:px-20">
        {TECH_STACK.map(({ name, icon: Icon, color }, index) => (
          <Card
            key={index}
            className="hover-tech-effect w-fit border border-gray-200 bg-white/50 backdrop-blur-sm dark:border-gray-800 dark:bg-black/50 transform-gpu"
          >
            <Flex align="center" gap="3" className="px-2 py-1">
              <Icon
                size={40}
                className={`${color} tech-icon-transition`}
              />
              <p className="text-sm text-black dark:text-white md:text-lg">
                {name}
              </p>
            </Flex>
          </Card>
        ))}
      </Flex>
    </section>
  );
}
