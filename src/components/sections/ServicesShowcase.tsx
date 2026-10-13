
"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { ServiceCard } from "@/components/sections/ServiceCard";
import type { ServiceItem } from "@/types/service";

type ServicesShowcaseProps = {
  services: ServiceItem[];
};

export function ServicesShowcase({
  services,
}: ServicesShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCards = useCallback((direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>(
      "[data-service-card]"
    );

    const cardWidth = firstCard?.getBoundingClientRect().width ?? 320;
    const gap = 24;
    const distance = Math.max(
      cardWidth + gap,
      Math.round(container.clientWidth * 0.78)
    );

    container.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#FFFDFC] py-16 sm:py-20 lg:py-28">
      {/* Subtle background detailing */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#B91C2C]/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#D9363E]/6.5 blur-3xl"
      />

      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-7 bg-[#D9363E]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B91C2C] sm:text-[10px]">
                  Sacred Rituals · Vedic Traditions
                </span>

                <Sparkles
                  size={14}
                  className="text-[#D9363E]"
                  aria-hidden="true"
                />
              </div>

              <h2 className="serif mt-5 text-3xl font-bold leading-[1.2] tracking-tight text-[#B91C2C] sm:text-4xl lg:text-[52px]">
                Group Puja Ceremony
                <span className="mt-2 block text-[#B91C2C]">
                  &amp; Sacred Rituals
                </span>
              </h2>

              <div className="mt-5 flex items-center gap-2.5">
                <span className="h-0.5 w-12 bg-[#D9363E]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#D9363E]" />
                <span className="h-px w-8 bg-[#F1C9CD]" />
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#686168] sm:text-base sm:leading-8">
                Explore traditional pujas and sacred rituals performed
                with devotion and care. Choose a service to learn more
                and begin your booking.
              </p>
            </div>

            {/* Carousel controls */}
            <div className="flex shrink-0 items-center justify-between gap-5 md:justify-end">
              <p className="hidden max-w-28 text-right text-[10px] leading-5 text-[#686168] lg:block">
                Explore our sacred services
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollCards("left")}
                  aria-label="Scroll services left"
                  className="
                    flex h-11 w-11 items-center justify-center
                    border border-[#F1C9CD] bg-white text-[#B91C2C]
                    transition-all duration-300
                    hover:border-[#D9363E] hover:bg-[#FFF1F2]
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2
                    sm:h-12 sm:w-12
                  "
                >
                  <ArrowLeft size={19} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollCards("right")}
                  aria-label="Scroll services right"
                  className="
                    flex h-11 w-11 items-center justify-center
                    bg-[#B91C2C] text-white
                    shadow-[0_5px_16px_rgba(185,28,44,0.18)]
                    transition-all duration-300
                    hover:bg-[#8F1725] hover:shadow-[0_8px_22px_rgba(185,28,44,0.24)]
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2
                    sm:h-12 sm:w-12
                  "
                >
                  <ArrowRight size={19} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal service carousel */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="Available puja services"
          tabIndex={0}
          className="
            mt-9 flex snap-x snap-mandatory gap-4
            overflow-x-auto overscroll-x-contain
            px-5 pb-7 pt-2
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-inset focus-visible:ring-[#B91C2C]
            sm:mt-12 sm:gap-5 sm:px-8
            lg:gap-6 lg:px-12 xl:px-16
          "
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#D9363E #F1C9CD",
            scrollPaddingInline: "1.25rem",
          }}
        >
          {services.map((service) => (
            <div
              key={service.route}
              data-service-card
              className="
                w-[84vw] max-w-85 shrink-0 snap-start
                sm:w-[320px] sm:max-w-none
                lg:w-87.5 xl:w-90
              "
            >
              <ServiceCard service={service} />
            </div>
          ))}

          {/* Explore all services card */}
          <div
            className="
              relative flex w-[260px] shrink-0 snap-start
              flex-col justify-between overflow-hidden
              border border-[#F1C9CD] bg-[#FFF1F2]
              p-6 sm:w-[280px] sm:p-7 lg:w-[300px]
            "
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-4 font-serif text-[145px] leading-none text-[#8F1725]/[0.055]"
            >
              ॐ
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center border border-[#F1C9CD] bg-[#FFFDFC] text-[#B91C2C]">
                <Sparkles size={22} aria-hidden="true" />
              </div>

              <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.19em] text-[#686168]">
                Discover More
              </p>

              <h3 className="serif mt-3 text-2xl font-bold leading-snug text-[#B91C2C] sm:text-[27px]">
                Find the right puja for your needs
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#686168]">
                Explore all available services and choose the ritual
                that suits your requirements.
              </p>
            </div>

            <Link
              href="/services"
              className="
                group relative mt-8 inline-flex min-h-12
                items-center justify-between gap-3
                border border-[#F1C9CD] bg-[#FFFDFC]
                px-4 py-3 text-xs font-bold text-[#B91C2C]
                transition-all duration-300
                hover:border-[#B91C2C] hover:bg-white
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2
                sm:text-sm
              "
            >
              <span>Explore all services</span>

              <ArrowUpRight
                size={17}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D9363E]"
            />
          </div>
        </div>

        {/* Scroll guidance */}
        <div className="mt-1 flex flex-wrap items-center justify-between gap-4 px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#B91C2C]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#686168] sm:text-[10px]">
              Scroll to explore more services
            </p>
          </div>

          <p className="hidden text-xs text-[#686168] sm:block">
            Discover a ritual that feels right for you
          </p>
        </div>
      </div>
    </section>
  );
}
