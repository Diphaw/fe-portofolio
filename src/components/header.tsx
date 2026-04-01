"use client";

import { navItems } from "@/constants";
import { Button, Flex } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <Flex justify="between" align="center" className="p-4 px-20">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          DevPortfolio
        </h1>

        <div className="hidden md:block">
          <Flex gap="6" align="center">
            {navItems.map((item) => {
              const isMain = item.href === "/";
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    isMain
                      ? "bg-green-500 text-white font-semibold rounded px-4 py-2"
                      : isActive
                        ? "text-black dark:text-white font-semibold"
                        : "text-gray-400 dark:text-white hover:text-black font-semibold"
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </Flex>
        </div>

        <div className="md:hidden">
          <Button
            color="gray"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </Flex>

      <div>
        {isMenuOpen && (
          <Flex gap="6" direction="column" className=" md:hidden px-20 py-5">
            {navItems.map((item) => {
              const isMain = item.href === "/";
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    isMain
                      ? "bg-green-500 text-white font-semibold rounded px-4 py-2"
                      : isActive
                        ? "text-black dark:text-white font-semibold"
                        : "text-gray-400 dark:text-white hover:text-black font-semibold"
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </Flex>
        )}
      </div>
    </header>
  );
}
