"use client";

import { TECH_STACK } from "@/constants";
import { Card, Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <section id="technologies" className="w-full bg-transparent">
      <div className="space-y-5 px-10 md:px-20">
        <Flex align="center" gap="4">
          <div className="h-px w-12 bg-green-500"></div>
          <h2 className="font-semibold text-green-500"> Tech Stack </h2>
        </Flex>
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          My Technologies and Tools
        </h1>
      </div>

      <Flex gap="5" wrap="wrap" className="w-full px-10 py-10 md:px-20">
        {TECH_STACK.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group w-fit border border-gray-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] dark:border-gray-800 dark:bg-black/50 dark:hover:border-green-500">
                <Flex align="center" gap="3" className="px-2 py-1">
                  <Icon
                    size={40}
                    className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                  <p className="text-sm text-black dark:text-white md:text-lg">
                    {tech.name}
                  </p>
                </Flex>
              </Card>
            </motion.div>
          );
        })}
      </Flex>
    </section>
  );
}
