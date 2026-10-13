
"use client";

import type { ReactNode } from "react";

import { useGsapReveal } from "@/hooks/useGsapReveal";
import { cn } from "@/utils/cn";

type FadeUpProps = {
  as?: "div" | "section" | "article" | "footer";
  className?: string;
  children: ReactNode;
  stagger?: number;
};

export function FadeUp({
  as: Tag = "div",
  className,
  children,
  stagger = 0.08,
}: FadeUpProps) {
  const ref = useGsapReveal<HTMLElement>(".reveal", stagger);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "relative",
        "motion-reduce:transform-none",
        className
      )}
    >
      {children}
    </Tag>
  );
}
