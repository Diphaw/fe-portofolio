"use client";

import { navItems } from "@/constants";
import { Button, Flex } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinkClass = (isMain: boolean, isActive: boolean) => {
  if (isMain) return "bg-green-500 text-white font-semibold rounded px-4 py-2";
  if (isActive) return "text-black dark:text-white font-semibold";
  return "text-gray-400 dark:text-white hover:text-black font-semibold";
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/70 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-black/70">
      <Flex justify="between" align="center" className="p-4 px-10 md:px-20">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          DevPortfolio
        </h1>

        <div className="hidden md:block">
          <Flex gap="6" align="center">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} className={navLinkClass(href === "/", activeHash === href)}>
                {label}
              </a>
            ))}
          </Flex>
        </div>

        <div className="md:hidden">
          <Button color="gray" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen
              ? <X className="text-black dark:text-white" />
              : <Menu className="text-black dark:text-white" />
            }
          </Button>
        </div>
      </Flex>

      {isMenuOpen && (
        <Flex gap="6" direction="column" className="md:hidden px-10 py-5">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} className={navLinkClass(href === "/", activeHash === href)}>
              {label}
            </a>
          ))}
        </Flex>
      )}
    </header>
  );
}
