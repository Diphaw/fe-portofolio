"use client";

import { Button, Card, Flex } from "@radix-ui/themes";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact-section" className="w-full bg-transparent">
      <div className="space-y-5 px-10 md:px-20">
        <Flex align="center" gap="4">
          <div className="h-px w-12 bg-green-500"></div>
          <h2 className="font-semibold text-green-500"> Contact </h2>
        </Flex>
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          My Contact Information
        </h1>
      </div>

      <Flex gap="5" wrap="wrap" className="w-full px-10 py-10 md:px-20">
        <motion.div
          className="w-full md:w-1/4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Card className="group border border-gray-200 bg-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] dark:border-gray-800 dark:bg-black/40">
            <div className="flex flex-col items-center space-y-3 text-center py-4">
              <Card className="mx-auto w-fit border border-gray-200 bg-white/60 transition-colors duration-300 group-hover:border-green-500/30 dark:border-gray-700 dark:bg-black/60">
                <MdEmail size={40} className="text-black dark:text-white" />
              </Card>
              <h1 className="text-lg font-semibold md:text-xl">Email me</h1>
              <h2 className="text-sm md:text-lg">diphawgna@gmail.com</h2>
              <div className="pt-2">
                <Button color="green" size="3" className="cursor-pointer">
                  <a href="mailto:diphawgna@gmail.com">Send Email</a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="w-full md:w-1/4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="group border border-gray-200 bg-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] dark:border-gray-800 dark:bg-black/40">
            <div className="flex flex-col items-center space-y-3 text-center py-4">
              <Card className="mx-auto w-fit border border-gray-200 bg-white/60 transition-colors duration-300 group-hover:border-green-500/30 dark:border-gray-700 dark:bg-black/60">
                <FaWhatsapp size={40} className="text-green-500" />
              </Card>
              <h1 className="text-lg font-semibold md:text-xl">WhatsApp me</h1>
              <h2 className="text-sm md:text-lg">085331320909</h2>
              <div className="pt-2">
                <Button color="green" size="3" className="cursor-pointer">
                  <a
                    href="https://wa.me/085331320909"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </Flex>
    </section>
  );
}
