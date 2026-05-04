"use client";

import { CODE_LINES, WINDOW_DOTS } from "@/constants";
import { Button, Card, Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="flex min-h-screen w-full items-center bg-transparent">
      <Flex
        justify="between"
        className="mx-auto w-full max-w-7xl flex-col items-center gap-10 px-10 md:flex-row md:px-0"
      >
        <motion.div
          className="w-full space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold text-black dark:text-white md:text-5xl">
            Hello, I&apos;m Dipha Wiguna
          </h1>
          <h2 className="text-xl font-semibold text-black dark:text-white md:text-4xl">
            Frontend Developer
          </h2>
          <p className="mt-5 max-w-md text-sm text-black dark:text-white md:text-lg">
            A Frontend Developer passionate about building modern, responsive,
            and user-friendly web applications. I enjoy transforming ideas into
            interactive digital experiences and continuously improving my skills
            in both frontend and backend development.
          </p>

          <div className="pt-2">
            <Button
              onClick={() => router.push("/main")}
              color="green"
              size="3"
              className="cursor-pointer transition-transform hover:scale-105"
            >
              Explore
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-md md:max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border border-gray-200 bg-white/40 backdrop-blur-md shadow-[0_0_30px_rgba(34,197,94,0.1)] dark:border-gray-800 dark:bg-black/40">
            <div className="wrap space-y-5 px-5 py-5">
              <Flex gap="4">
                {WINDOW_DOTS.map((color, i) => (
                  <motion.div
                    key={i}
                    className={`h-3 w-3 rounded-full ${color}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1 + 0.5,
                      ease: "backOut",
                    }}
                  />
                ))}
              </Flex>

              <Flex direction="column" gap="4" className="font-mono text-sm text-black dark:text-gray-300">
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    className="wrap-break-word whitespace-pre-wrap"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                      duration: 1,
                      delay: i * 0.6 + 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <span>{line}</span>
                  </motion.div>
                ))}
              </Flex>
            </div>
          </Card>
        </motion.div>
      </Flex>
    </section>
  );
}
