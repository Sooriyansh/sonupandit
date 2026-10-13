import type { LucideIcon } from "lucide-react";

export type ServiceCategory = "puja" | "jyotish";

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  title: string;
  slug: string;
  image?: string;
  shortDescription: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  route: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  suitableFor: string[];
  process: string[];
  includes: string[];
  faqs: FAQItem[];
};

export type NavItem = {
  label: string;
  href: string;
  items?: ServiceItem[];
};

export type IconMap = Record<string, LucideIcon>;
