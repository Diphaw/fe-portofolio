import { Card, Flex } from "@radix-ui/themes";

export default function Contact() {
  return (
    <section id="technologies" className="w-full bg-white dark:bg-black">
      <div className="px-20 space-y-5">
        <Flex align="center" gap="4">
          <div className="w-12 h-px bg-green-500"></div>
          <h2 className="font-semibold text-green-500"> Contact </h2>
        </Flex>
        <h1 className="text-black dark:text-white text-3xl font-semibold">
          My Contact Information
        </h1>
      </div>

      <Flex gap="5" direction="column"className="px-20 py-10">
        <Card className="w-1/2 ">
          <h1>Frontend Developer</h1>
          <h2 className="text-sm">Geekgarden</h2>
          <p className="text-sm">
            Developed and maintained responsive web applications using React and
            TypeScript.
          </p>
        </Card>

        <Card className="w-1/2 ">
          <h1>Frontend Developer</h1>
          <h2 className="text-sm">Reddy.id</h2>
          <p className="text-sm">
            Developed and maintained responsive web applications using React and
            TypeScript.
          </p>
        </Card>

        <Card className="w-1/2 ">
          <h1>Frontend Developer</h1>
          <h2 className="text-sm">PT Rapier Technology International</h2>
          <p className="text-sm">
            Developed and maintained responsive web applications using React and
            TypeScript.
          </p>
        </Card>
      </Flex>
    </section>
  );
}
