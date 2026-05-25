"use client";

import { EXPERIENCES, TECH_STACK } from "@/constants";
import { Card, Flex, Box } from "@radix-ui/themes";

export default function Experiences() {
  return (
    <section id="experience-section" className="w-full bg-transparent">
      <div className="space-y-5 px-10 md:px-20">
        <Flex align="center" gap="4">
          <div className="h-px w-12 bg-green-500"></div>
          <h2 className="font-semibold text-green-500"> Experience </h2>
        </Flex>
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          My Experience
        </h1>
      </div>

      <div className="space-y-5 py-5 px-10 md:px-20">
        {EXPERIENCES.map((exp, index) => (
          <div key={index}>
            <Flex direction="column">
              <Card className="group w-full border border-gray-200 bg-white/80 transition-colors duration-300 hover:border-green-500 dark:border-gray-800 dark:bg-neutral-900/80 md:w-1/2">
                <Flex className="px-5 py-5">
                  <Box>
                    <h1 className="text-xl font-semibold text-black dark:text-white md:text-2xl">
                      {exp.title}
                    </h1>
                    <h2 className="text-lg font-medium text-green-500 md:text-xl">
                      {exp.company}
                    </h2>
                    <h3 className="text-sm font-regular text-black opacity-60 dark:opacity-80 md:text-lg">
                      {exp.date}
                    </h3>
                    <p className="wrap-break-word pt-4 text-sm text-black dark:text-white md:text-lg">
                      {exp.description}
                    </p>

                    <Flex gap="4" wrap="wrap" className="w-full pt-4">
                      {TECH_STACK.map((tech, techIndex) => {
                        const Icon = tech.icon;
                        return (
                          <Card
                            key={techIndex}
                            className="w-fit border border-gray-200 bg-white/80 transition-colors duration-300 group-hover:border-green-500/30 dark:border-gray-700 dark:bg-neutral-800/80"
                          >
                            <Flex align="center" gap="2">
                              <Icon size={20} className={tech.color} />
                              <p className="wrap-break-word text-sm text-black dark:text-white md:text-base">
                                {tech.name}
                              </p>
                            </Flex>
                          </Card>
                        );
                      })}
                    </Flex>
                  </Box>
                </Flex>
              </Card>
            </Flex>
          </div>
        ))}
      </div>
    </section>
  );
}
