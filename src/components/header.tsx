"use client";

import { navItems } from "@/constants";
import { Button } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow">
      <div className="flex justify-between items-center p-4 px-20">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
           DevPortfolio
        </h1>

        <div className="md:flex space-x-6 hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              // className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
              className={pathname === item.href
                ? "text-black dark:text-white font-semibold"
                : "text-gray-400 dark:text-white hover:text-black font-semibold"
              }
            >
              {item.label}
            </a>
          ))}
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
      </div>
      <div>
        {isMenuOpen && (
          <div className="md:hidden space-x-6 grid px-20 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                // className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                className={pathname === item.href
                  ? "text-black dark:text-white font-semibold"
                  : "text-gray-400 dark:text-white hover:text-black font-semibold"
                }

              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
