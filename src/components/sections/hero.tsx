"use client";

import { Button, Card, Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen flex items-center bg-white dark:bg-black ">
      <Flex
        justify="between"
        className="gap-20 max-w-7xl mx-auto flex-col md:flex-row w-full items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            Hello, i&apos;m Dipha Wiguna
          </h1>
          <h2 className="text-xl md:text-4xl font-semibold">
            Frontend Developer
          </h2>
          <p className="max-w-md md:text-lg text-sm">
            A Fullstack Developer who started with frontend and is now exploring
            backend development. I enjoy creating engaging user interfaces while
            learning how systems work behind the scenes.
          </p>

          <Button onClick={() => router.push("/main")} color="green" size="3">
            Explore
          </Button>
        </motion.div>

        <div className="max-w-md md:max-w-lg">
          <Card className="border border-black dark:border-white shadow-[0_0_15px_rgba(0,0,0)] transition hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]">
            <div className="space-y-5 px-5">
              <Flex gap="4">
                {["bg-red-500", "bg-yellow-500", "bg-green-500"].map(
                  (color, i) => (
                    <motion.div
                      key={i}
                      className={`w-3 h-3 rounded-full ${color}`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ),
                )}
              </Flex>
              <Flex direction="column" gap="4" className="font-mono text-sm">
                {[
                  "const developer = {",
                  '  name: "Dipha Wiguna",',
                  '  passion: "Frontend Developer",',
                  '  skills: ["HTML", "CSS", "TypeScript", "Next.js"]',
                  "}",
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    className="overflow-hidden whitespace-pre"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                      duration: 1,
                      delay: i * 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    <span>{line}</span>
                  </motion.div>
                ))}
              </Flex>
            </div>
          </Card>
        </div>
      </Flex>
    </section>
  );
}
