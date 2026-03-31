import { Card, Flex } from "@radix-ui/themes";

export default function Technologies() {
  return (
    <section id="technologies" className="w-full bg-white dark:bg-black">
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
        <Card className="w-50">tes</Card>
        <Card className="w-50">tes</Card>
        <Card className="w-50">tes</Card>
        <Card className="w-50">tes</Card>
      </Flex>
    </section>
  );
}
