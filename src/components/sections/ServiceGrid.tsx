
"use client";

import { Fragment } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import type { ServiceItem } from "@/types/service";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";

type ServiceGridProps = {
  label: string;
  title: string;
  description: string;
  services: ServiceItem[];
  dark?: boolean;
  curved?: boolean;
};

export function ServiceGrid({
  label,
  title,
  description,
  services,
  dark = false,
  curved = false,
}: ServiceGridProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselId = useId();
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    setCanScrollPrevious(carousel.scrollLeft > 1);
    setCanScrollNext(maxScrollLeft - carousel.scrollLeft > 1);

    if (carousel.classList.contains("service-carousel-curved")) {
      const carouselCenter =
        carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
      const items = carousel.querySelectorAll<HTMLElement>(".service-curve-item");
      let closestItem: HTMLElement | null = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const item of items) {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - carouselCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      }

      const currentActive = carousel.querySelector<HTMLElement>(
        '[data-carousel-active="true"]'
      );

      if (currentActive !== closestItem) {
        currentActive?.removeAttribute("data-carousel-active");
        closestItem?.setAttribute("data-carousel-active", "true");
      }
    }
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [services.length, updateScrollState]);

  const scrollCards = useCallback((direction: "left" | "right") => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.querySelector<HTMLElement>("[data-service-card]");
    if (!carousel || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
    const distance = firstCard.getBoundingClientRect().width + gap;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    carousel.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <FadeUp
      as="section"
      className={`service-section relative isolate overflow-hidden ${
        dark
          ? "dark-band text-white"
          : "bg-white text-[#686168]"
      } py-20 sm:py-24 lg:py-32`}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full border ${
          dark ? "border-white/[0.06]" : "border-[#B91C2C]/[0.07]"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-12 -top-12 -z-10 h-56 w-56 rounded-full border ${
          dark ? "border-white/[0.05]" : "border-[#B91C2C]/[0.06]"
        }`}
      />

      {!dark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-80 w-80 rounded-full bg-[#FFF1F2] blur-3xl"
        />
      )}

      <div className="container-shell relative z-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div
            className={`mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 ${
              dark
                ? "border-white/15 bg-white/[0.05] text-white/80"
                : "border-[#B91C2C]/15 bg-[#FFF1F2] text-[#B91C2C]"
            }`}
          >
            <Sparkles size={15} strokeWidth={1.7} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
              {label}
            </span>
          </div>

          <div className="service-heading">
            <SectionHeading
              label=""
              title={title}
              description={description}
              light={dark}
            />
          </div>

          <div
            aria-hidden="true"
            className={`mx-auto mt-7 flex items-center justify-center gap-2 ${
              dark ? "text-white/40" : "text-[#B91C2C]/50"
            }`}
          >
            <span className="h-px w-10 bg-current" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#B91C2C]" />
            <span className="h-px w-10 bg-current" />
          </div>
        </div>

        {/* Carousel controls */}
        <div className="mb-3 flex items-center justify-between gap-4 sm:mb-4">
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
              dark ? "text-white/80" : "text-[#686168]"
            }`}
          >
            Swipe or scroll to explore
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCards("left")}
              aria-label="Scroll services left"
              aria-controls={carouselId}
              disabled={!canScrollPrevious}
              className={`
                flex h-10 w-10 items-center justify-center border
                transition-all duration-300 motion-reduce:transition-none
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#D9363E] focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-35
                sm:h-11 sm:w-11
                ${
                  dark
                    ? "border-white/20 bg-white/[0.05] text-white enabled:hover:border-[#D9363E] enabled:hover:bg-white/10"
                    : "border-[#F1C9CD] bg-white text-[#B91C2C] enabled:hover:border-[#D9363E] enabled:hover:bg-[#FFF1F2]"
                }
              `}
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollCards("right")}
              aria-label="Scroll services right"
              aria-controls={carouselId}
              disabled={!canScrollNext}
              className={`
                flex h-10 w-10 items-center justify-center
                bg-[#B91C2C] text-white
                shadow-[0_5px_16px_rgba(143,23,37,0.18)]
                transition-all duration-300 motion-reduce:transition-none
                hover:bg-[#8F1725] hover:shadow-[0_8px_22px_rgba(143,23,37,0.24)]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#D9363E] focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-35 disabled:shadow-none
                sm:h-11 sm:w-11
              `}
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Horizontal service carousel */}
        <div
          ref={carouselRef}
          id={carouselId}
          role="region"
          aria-label={`${title} सेवाएँ`}
          aria-roledescription="carousel"
          tabIndex={0}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: dark
              ? "#D9363E rgba(255,255,255,0.12)"
              : "#D9363E #F1C9CD",
            scrollPaddingInline: "0.5rem",
          }}
          className={`
            service-carousel ${dark ? "service-carousel-dark" : ""}
            ${curved ? "service-carousel-curved" : ""}
            flex snap-x snap-mandatory items-stretch gap-4
            overflow-x-auto overflow-y-hidden overscroll-x-contain
            px-2 pb-6 pt-3
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-inset focus-visible:ring-[#D9363E]
            sm:gap-5 sm:pb-7
            lg:gap-6
          `}
        >
          {services.map((service, index) => {
            const tilt = [
              { x: 0.35, y: -0.55 },
              { x: -0.25, y: 0.4 },
              { x: 0.45, y: 0.2 },
            ][index % 3];

            const card = (
              <article
                data-service-card
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${services.length}: ${service.title}`}
                className={`
                  service-grid-card reveal group relative flex min-w-0 shrink-0
                  ${curved ? "w-full basis-full" : "basis-[86%]"}
                  ${!curved ? "snap-start" : ""}
                  rounded-2xl
                  ${!curved ? "sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-3rem)/3)]" : ""}
                  border border-[#F1C9CD] bg-white
                `}
              >
                <div
                  className="relative h-full min-w-0 flex-1 overflow-hidden rounded-[calc(0.75rem-1px)] bg-white"
                >
                  {/* Existing service content */}
                  <div className="relative z-10 h-full">
                    <ServiceCard
                      service={service}
                      initialTiltX={tilt.x}
                      initialTiltY={tilt.y}
                    />
                  </div>
                </div>
              </article>
            );

            if (!curved) {
              return <Fragment key={service.slug}>{card}</Fragment>;
            }

            return (
              <div
                key={service.slug}
                data-service-index={index}
                className="
                  service-curve-item reveal w-[86%] shrink-0 snap-start
                  sm:w-[calc((100%-1.25rem)/2)]
                  lg:w-[calc((100%-3rem)/3)]
                "
              >
                {card}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-3 border-t pt-7 text-center sm:mt-16 sm:flex-row sm:gap-5 ${
            dark
              ? "border-white/10 text-white/65"
              : "border-[#F1C9CD] text-[#686168]"
          }`}
        >
          <Sparkles
            size={16}
            className={dark ? "text-[#D9363E]" : "text-[#B91C2C]"}
          />
          <p className="text-sm leading-7">
            श्रद्धा, परंपरा और आपकी आवश्यकताओं के अनुरूप पूजा सेवाएँ।
          </p>
        </div>
      </div>

    </FadeUp>
  );
}
