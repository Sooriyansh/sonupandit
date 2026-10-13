
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type WordRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function WordReveal({
  text,
  className,
  as: Tag = "h2",
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.trim().split(/\s+/).filter(Boolean);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reduceMotion.matches) return;

    const ctx = gsap.context(() => {
      const wordElements = element.querySelectorAll<HTMLElement>(".word");

      gsap.fromTo(
        wordElements,
        {
          autoAlpha: 0,
          y: 24,
          rotateX: 16,
          filter: "blur(4px)",
          transformOrigin: "50% 100%",
        },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "expo.out",
          stagger: 0.055,
          clearProps: "filter,transform,visibility",
        }
      );
    }, element);

    return () => ctx.revert();
  }, [text]);

  return (
    <Tag
      ref={ref as never}
      className={className}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>

      <span aria-hidden="true" className="inline">
        {words.map((word, index) => (
          <span
            className="word inline-block will-change-[transform,opacity]"
            key={`${word}-${index}`}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </span>
    </Tag>
  );
}
