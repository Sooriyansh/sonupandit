
"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/sections/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  ["01", "पूजा चुनें", "अपनी आवश्यकता के अनुसार पूजा या ज्योतिष सेवा चुनें।"],
  ["02", "जानकारी भरें", "नाम, मोबाइल, सेवा और विशेष अनुरोध साझा करें।"],
  ["03", "तिथि एवं समय तय करें", "उपलब्धता के अनुसार पूजा का समय समन्वित करें।"],
  ["04", "पूजा संपन्न करें", "विधिवत वैदिक पद्धति से अनुष्ठान कराया जाता है।"],
];

export function BookingProcess() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const cards = root.querySelectorAll(".process-card");
      const line = root.querySelector(".process-line");
      const eyebrow = root.querySelector(".process-eyebrow");

      if (eyebrow) {
        gsap.fromTo(
          eyebrow,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: eyebrow,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 86%",
              once: true,
            },
          }
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <FadeUp
      as="section"
      className="relative isolate overflow-hidden bg-[#B91C2C] py-20 sm:py-24 lg:py-32"
    >
      <section ref={rootRef} className="relative">
        {/* Subtle background details */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#B91C2C]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FFF1F2]/10 blur-3xl"
        />

        <div className="container-shell relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {/* Section heading */}
          <div className="process-eyebrow mx-auto mb-14 max-w-3xl text-center sm:mb-20">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#FFF1F2]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFF1F2] sm:text-xs">
                आसान प्रक्रिया
              </span>
              <span className="h-px w-8 bg-[#FFF1F2]" />
            </div>

            <SectionHeading
              label="बुकिंग प्रक्रिया"
              title="पूजा बुक करना हुआ आसान"
              description="अपनी सेवा चुनें, जानकारी साझा करें और पूजा की तिथि तय करें।"
              light
            />

            <p className="mt-4 text-xs tracking-wide text-white/80">
              4 सरल चरण · स्पष्ट संपर्क · सहज बुकिंग
            </p>
          </div>

          {/* Process cards */}
          <div className="relative">
            {/* Desktop connecting line */}
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-[31px] hidden h-px bg-white/10 lg:block"
            >
              <div className="process-line h-full w-full origin-left bg-gradient-to-r from-[#FFF1F2] via-[#FFF1F2] to-[#FFF1F2]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {steps.map(([num, title, desc], index) => (
                <article
                  key={num}
                  className="process-card group relative flex min-h-[245px] flex-col border border-[#F1C9CD] bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#B91C2C]/45 hover:bg-[#FFFDFC] hover:shadow-[0_18px_42px_rgba(143,23,37,0.12)] sm:p-6 lg:min-h-[285px] lg:p-6"
                >
                  {/* Number and connector */}
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    <span className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#F1C9CD] bg-[#FFF1F2] font-serif text-xl font-semibold text-[#B91C2C] transition-all duration-500 group-hover:border-[#B91C2C] group-hover:bg-[#B91C2C] group-hover:text-white group-hover:shadow-[0_0_0_7px_rgba(185,28,44,0.10)]">
                      {num}
                    </span>

                    {index < steps.length - 1 && (
                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                        className="text-[#686168] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B91C2C] lg:hidden"
                      />
                    )}

                    <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#686168] lg:block">
                      Step {num}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="font-serif text-xl font-semibold leading-snug text-[#242124] transition-colors duration-300 group-hover:text-[#B91C2C] sm:text-[22px]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#686168]">
                    {desc}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-auto flex items-center gap-2 pt-7">
                    <span className="h-px w-7 bg-[#FFF1F2] transition-all duration-300 group-hover:w-12" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#686168]">
                      प्रक्रिया {num}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Closing note */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-white/35 pt-7 text-center sm:flex-row sm:gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white">
              <ArrowDown size={16} aria-hidden="true" />
            </span>

            <p className="text-sm leading-6 text-white/85">
              अपनी आवश्यकता के अनुसार सेवा चुनकर बुकिंग प्रक्रिया शुरू करें।
            </p>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
