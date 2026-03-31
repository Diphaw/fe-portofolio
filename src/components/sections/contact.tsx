import { Button, Card, Flex } from "@radix-ui/themes";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

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

      <Flex gap="5" className="w-full px-20 py-10">
        <Card className="md:w-1/4 w-full ">
          <div className="flex flex-col items-center text-center space-y-3">
            <Card className="w-fit mx-auto">
              <MdEmail size={40} className="text-black dark:text-white" />
            </Card>
            <h1 className="md:text-xl text-lg font-semibold">Email me</h1>
            <h2 className="md:text-lg text-sm">diphawgna@gmail.com</h2>
            <Button color="green">
              <a href="mailto:diphawgna@gmail.com">Send Email</a>
            </Button>
          </div>
        </Card>

        <Card className="md:w-1/4 w-full">
          <div className="flex flex-col items-center text-center space-y-3">
            <Card className="w-fit mx-auto">
              <FaWhatsapp size={40} className="text-green-500" />
            </Card>
            <h1 className="md:text-xl text-lg font-semibold">WhatsApp me</h1>
            <h2 className="md:text-lg text-sm">085331320909</h2>
            <Button color="green">
              <a
                href="https://wa.me/085331320909"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send WhatsApp
              </a>
            </Button>
          </div>
        </Card>
      </Flex>
    </section>
  );
}
