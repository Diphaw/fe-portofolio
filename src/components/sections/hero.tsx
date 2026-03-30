"use client";

import { Button, Card, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen flex items-center bg-white dark:bg-black ">
      <Flex
        align="center"
        justify="center"
        className="px-20 gap-20 flex-col md:flex-row w-full"
      >
        <div className="space-y-5 ">
          <h1 className="text-5xl font-bold">Hello, i&apos;m Dipha Wiguna</h1>
          <h2 className="text-4xl font-semibold">Fullstack Developer</h2>
          <p className="max-w-xl">
            A Fullstack Developer who started with frontend and is now exploring
            backend development. I enjoy creating engaging user interfaces while
            learning how systems work behind the scenes.
          </p>

          <Button onClick={() => router.push("/main")} color="green">
            explore
          </Button>
        </div>

        <div className="w-150 md:w-200 px-15">
          <Card>
            <div className="space-y-5 px-20">
              <Flex gap="4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </Flex>
              <Flex direction="column" gap="4">
                <div>{"const developer = {"}</div>
                <div className="ml-5">{'name = "Dipha Wiguna",'}</div>
                <div className="ml-5">{'passion = "Fullstack Developer",'}</div>
                <div className="ml-5">
                  {'skills = ["JavaScript", "TypeScript", "React", "Next.js"]'}
                </div>
                <div className="ml-5">{"}"}</div>
              </Flex>
            </div>
          </Card>
        </div>
      </Flex>
    </section>
  );
}
