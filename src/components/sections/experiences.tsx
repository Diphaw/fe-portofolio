import { Card, Flex } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes";
import { FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Technologies() {
  return (
    <section id="technologies" className="w-full bg-white dark:bg-black">
      <div className="px-20 space-y-5">
        <Flex align="center" gap="4">
          <div className="w-12 h-px bg-green-500"></div>
          <h2 className="font-semibold text-green-500"> Experience </h2>
        </Flex>
        <h1 className="text-black dark:text-white text-3xl font-semibold">
          My Experience
        </h1>
      </div>

      <div className="space-y-5 py-5">
        <Flex direction="column" className="px-20">
          <Card className="md:w-1/2 w-full bg-white dark:bg-black border border-gray-300">
            <Flex className="py-5 px-5">
              <Box className="">
                <h1 className="md:text-2xl text-xl font-semibold text-black dark:text-white">
                  Frontend Developer (Internship)
                </h1>
                <h2 className="md:text-xl text-lg font-medium text-green-500">
                  Geekgarden
                </h2>
                <h3 className="md:text-lg text-sm font-regular text-black opacity-60">
                  November 2025 - Present
                </h3>
                <p className="md:text-lg text-sm pt-4 text-black dark:text-white wrap-break-word">
                  Developed and maintained responsive web applications using
                  Nextjs and TypeScript.
                </p>

                <Flex gap="4" wrap="wrap" className="pt-4 w-full ">
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <FaHtml5 size={20} className="text-orange-500" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      HTML
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiTailwindcss size={20} className="text-cyan-400" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      TailwindCSS
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiTypescript size={20} className="text-blue-500" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      TypeScript
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiNextdotjs
                      size={20}
                      className="text-black dark:text-white"
                    />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      Next.js
                    </p>
                  </Card>
                </Flex>
              </Box>
            </Flex>
          </Card>
        </Flex>

        <Flex direction="column" className="px-20">
          <Card className="md:w-1/2 w-full bg-white dark:bg-black border border-gray-300">
            <Flex className="py-5 px-5">
              <Box className="">
                <h1 className="md:text-2xl text-xl font-semibold text-black dark:text-white">
                  Frontend Developer (Fulltime)
                </h1>
                <h2 className="md:text-xl text-lg font-medium text-green-500">
                  Reddy.id
                </h2>
                <h3 className="md:text-lg text-sm font-regular text-black opacity-60">
                  Januari 2025 - Maret 2025
                </h3>
                <p className="md:text-lg text-sm pt-4 text-black dark:text-white wrap-break-word">
                  Developed and maintained responsive web applications using
                  Nextjs and TypeScript.
                </p>

                <Flex gap="4" wrap="wrap" className="pt-4 w-full">
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <FaHtml5 size={20} className="text-orange-500" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      HTML
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiTailwindcss size={20} className="text-cyan-400" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      TailwindCSS
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiTypescript size={20} className="text-blue-500" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      TypeScript
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiNextdotjs
                      size={20}
                      className="text-black dark:text-white"
                    />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      Next.js
                    </p>
                  </Card>
                </Flex>
              </Box>
            </Flex>
          </Card>
        </Flex>

        <Flex direction="column" className="px-20">
          <Card className="md:w-1/2 w-full bg-white dark:bg-black border border-gray-300">
            <Flex className="py-5 px-5">
              <Box className="">
                <h1 className="md:text-2xl text-xl font-semibold text-black dark:text-white">
                  Frontend Developer (Internship)
                </h1>
                <h2 className="md:text-xl text-lg font-medium text-green-500">
                  PT Rapier Technology International
                </h2>
                <h3 className="md:text-lg text-sm font-regular text-black opacity-60">
                  September 2024 - Januari 2025
                </h3>
                <p className="md:text-lg text-sm pt-4 text-black dark:text-white wrap-break-word">
                  Developed and maintained responsive web applications using
                  Nextjs and TypeScript.
                </p>

                <Flex gap="4" wrap="wrap" className="pt-4 w-full">
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <FaHtml5 size={20} className="text-orange-500" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      HTML
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiTailwindcss size={20} className="text-cyan-400" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      TailwindCSS
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiTypescript size={20} className="text-blue-500" />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      TypeScript
                    </p>
                  </Card>
                  <Card className="w-fit bg-white dark:bg-black border border-gray-300">
                    <SiNextdotjs
                      size={20}
                      className="text-black dark:text-white"
                    />
                    <p className="text-black dark:text-white md:text-md text-sm wrap-break-word">
                      Next.js
                    </p>
                  </Card>
                </Flex>
              </Box>
            </Flex>
          </Card>
        </Flex>
      </div>
    </section>
  );
}
