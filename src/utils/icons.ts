import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Circle,
  CircleDot,
  Droplets,
  Flame,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Orbit,
  Phone,
  ScrollText,
  Shield,
  Sparkles,
  Star,
  Sun
} from "lucide-react";
import { createElement } from "react";
import type { IconMap } from "@/types/service";
import type { LucideProps } from "lucide-react";

export const icons: IconMap = {
  Calendar,
  ChevronDown,
  ChevronRight,
  Circle,
  CircleDot,
  Droplets,
  Flame,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Orbit,
  Phone,
  ScrollText,
  Shield,
  Sparkles,
  Star,
  Sun
};

export function getIcon(name: string) {
  return icons[name] || Sparkles;
}

export function IconByName({ name, ...props }: LucideProps & { name: string }) {
  const Icon = icons[name] || Sparkles;
  return createElement(Icon, props);
}
