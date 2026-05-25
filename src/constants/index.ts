import { FaHtml5, FaWhatsapp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import type { NavItem, TechStack, Experience, ContactItem } from "@/types";

export const navItems: NavItem[] = [
  { href: "#", label: "home" },
  { href: "#technologies", label: "technologies" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
  { href: "/", label: "main" },
];

export const CODE_LINES: string[] = [
  "const developer = {",
  '  name: "Dipha Wiguna",',
  '  passion: "Frontend Developer",',
  '  skills: ["HTML", "CSS", "TypeScript", "Next.js"]',
  "}",
];

export const WINDOW_DOTS: string[] = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
];

export const TECH_STACK: TechStack[] = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
];

export const EXPERIENCES: Experience[] = [
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

export const CONTACTS: ContactItem[] = [
  {
    label: "Email me",
    value: "diphawgna@gmail.com",
    href: "mailto:diphawgna@gmail.com",
    icon: MdEmail,
    iconClass: "text-black dark:text-white",
    buttonLabel: "Send Email",
  },
  {
    label: "WhatsApp me",
    value: "085331320909",
    href: "https://wa.me/085331320909",
    icon: FaWhatsapp,
    iconClass: "text-green-500",
    buttonLabel: "Send WhatsApp",
    external: true,
  },
];
