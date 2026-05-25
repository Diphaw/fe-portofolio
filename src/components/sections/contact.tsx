"use client";

import { CONTACTS } from "@/constants";
import { Button, Card, Flex } from "@radix-ui/themes";

export default function Contact() {
  return (
    <section id="contact-section" className="w-full bg-transparent">
      <div className="space-y-5 px-10 md:px-20">
        <Flex align="center" gap="4">
          <div className="h-px w-12 bg-green-500" />
          <h2 className="font-semibold text-green-500">Contact</h2>
        </Flex>
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          My Contact Information
        </h1>
      </div>

      <Flex gap="5" wrap="wrap" className="w-full px-10 py-10 md:px-20">
        {CONTACTS.map(({ label, value, href, icon: Icon, iconClass, buttonLabel, external }, index) => (
          <div key={index} className="w-full md:w-1/4">
            <Card className="group border border-gray-200 bg-white/80 transition-colors duration-300 hover:border-green-500 dark:border-gray-800 dark:bg-neutral-900/80">
              <div className="flex flex-col items-center space-y-3 text-center py-4">
                <Card className="mx-auto w-fit border border-gray-200 bg-white/60 transition-colors duration-300 group-hover:border-green-500/30 dark:border-gray-700 dark:bg-black/60">
                  <Icon size={40} className={iconClass} />
                </Card>
                <h2 className="text-lg font-semibold md:text-xl">{label}</h2>
                <p className="text-sm md:text-lg">{value}</p>
                <div className="pt-2">
                  <Button color="green" size="3" className="cursor-pointer">
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {buttonLabel}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Flex>
    </section>
  );
}
