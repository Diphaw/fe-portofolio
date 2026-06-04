"use client";

import { EXPERIENCES, TECH_STACK } from "@/constants";
import { Box, Card, Flex } from "@radix-ui/themes";

export default function Experiences() {
  return (
    <section id="experience-section" className="w-full bg-transparent">
      <div className="space-y-5 px-10 md:px-20">
        <Flex align="center" gap="4">
          <div className="h-px w-12 bg-green-500" />
          <h2 className="font-semibold text-green-500">Experience</h2>
        </Flex>
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          My Experience
        </h1>
      </div>

      <div className="space-y-5 py-5 px-10 md:px-20">
        {EXPERIENCES.map(({ title, company, date, description }, index) => (
          <Card
            key={index}
            className="hover-card-effect w-full border border-gray-200 bg-white/80 transition-colors duration-300 dark:border-gray-800 dark:bg-neutral-900/80 md:w-1/2"
          >
            <Box className="px-5 py-5">
              <h2 className="text-xl font-semibold text-black dark:text-white md:text-2xl">
                {title}
              </h2>
              <h3 className="text-lg font-medium text-green-500 md:text-xl">
                {company}
              </h3>
              <p className="text-sm text-black opacity-60 dark:opacity-80 md:text-lg">
                {date}
              </p>
              <p className="wrap-break-word pt-4 text-sm text-black dark:text-white md:text-lg">
                {description}
              </p>

              <Flex gap="3" wrap="wrap" className="w-full pt-4">
                {TECH_STACK.map(({ name }, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-tag rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-neutral-800 dark:text-gray-300 transition-colors duration-200 md:text-sm"
                  >
                    {name}
                  </span>
                ))}
              </Flex>
            </Box>
          </Card>
        ))}
      </div>
    </section>
  );
}
