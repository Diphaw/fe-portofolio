import { FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export const navItems = [
  { href: "#", label: "home" },
  { href: "#technologies", label: "technologies" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
  { href: "/", label: "main" },
];

export const CODE_LINES = [
  "const developer = {",
  '  name: "Dipha Wiguna",',
  '  passion: "Frontend Developer",',
  '  skills: ["HTML", "CSS", "TypeScript", "Next.js"]',
  "}",
];

export const WINDOW_DOTS = ["bg-red-500", "bg-yellow-500", "bg-green-500"];

export const TECH_STACK = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
];

export const EXPERIENCES = [
  {
    title: "Frontend Developer (Internship)",
    company: "Geekgarden",
    date: "November 2025 - Present",
    description:
      "Developed and maintained responsive web applications using Nextjs and TypeScript.",
  },
  {
    title: "Frontend Developer (Fulltime)",
    company: "Reddy.id",
    date: "Januari 2025 - Maret 2025",
    description:
      "Developed and maintained responsive web applications using Nextjs and TypeScript.",
  },
  {
    title: "Frontend Developer (Internship)",
    company: "PT Rapier Technology International",
    date: "September 2024 - Januari 2025",
    description:
      "Developed and maintained responsive web applications using Nextjs and TypeScript.",
  },
];
