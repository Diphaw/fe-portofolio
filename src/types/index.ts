import { IconType } from "react-icons";

export type NavItem = {
  href: string;
  label: string;
};

export type TechStack = {
  name: string;
  icon: IconType;
  color: string;
};

export type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
  iconClass: string;
  buttonLabel: string;
  external?: boolean;
};
