
"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import type { MouseEvent } from "react";
import type { SyntheticEvent } from "react";
import type { ServiceItem } from "@/types/service";

const serviceImageFallback = "/images/pandit.jpeg";

const serviceImages: Record<string, string> = {
  "kundli-analysis": "/images/Kundil.png",
  "vivah-kundli-milan": "/images/vivha.png",
  "janam-kundli": "/images/janamkundall.png",
  "grah-dosh-analysis": "/images/image copy 5.png",
  "jyotish-paramarsh": "/images/pandit.jpeg",
};

type ServiceCardProps = {
  service: ServiceItem;
  initialTiltX?: number;
  initialTiltY?: number;
};

function getServiceImage(service: ServiceItem) {
  return service.image ?? serviceImages[service.slug] ?? serviceImageFallback;
}

function handleServiceImageError(event: SyntheticEvent<HTMLImageElement>) {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied) return;

  image.dataset.fallbackApplied = "true";
  image.src = serviceImageFallback;
  image.alt = "उज्जैन में वैदिक पूजा अनुष्ठान";
}

export function ServiceCard({
  service,
  initialTiltX = 0,
  initialTiltY = 0,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const card = cardRef.current;
      if (!card) return;
      if (event.buttons > 0) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const finePointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;

      if (reducedMotion || !finePointer) return;

      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      card.style.transform = `
        perspective(1600px)
        rotateX(${initialTiltX + (0.5 - y) * 3}deg)
        rotateY(${initialTiltY + (x - 0.5) * 3}deg)
        translateY(-4px)
      `;

      card.style.setProperty("--mouse-x", `${x * 100}%`);
      card.style.setProperty("--mouse-y", `${y * 100}%`);
    },
    [initialTiltX, initialTiltY]
  );

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        `perspective(1600px) rotateX(${initialTiltX}deg) rotateY(${initialTiltY}deg) translateY(0px)`;
    }
  }, [initialTiltX, initialTiltY]);

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1600px) rotateX(${initialTiltX}deg) rotateY(${initialTiltY}deg)`,
      }}
      className="
        service-card-tilt group relative isolate flex h-full min-w-0 flex-col
        overflow-hidden rounded-xl border border-[#F1C9CD]
        bg-white shadow-[0_4px_20px_rgba(64,51,43,0.045)]
        transition-[transform,border-color,box-shadow]
        duration-300 ease-out
        hover:border-[#F1C9CD]
        hover:shadow-[0_14px_34px_rgba(64,51,43,0.10)]
        motion-reduce:transform-none
      "
    >
      {/* Image showcase */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#FFF1F2]">
        <Image
          src={getServiceImage(service)}
          alt={service.title}
          fill
          sizes="(max-width: 639px) 86vw, (max-width: 1023px) 44vw, 30vw"
          loading="lazy"
          onError={handleServiceImageError}
          className="
            h-full w-full object-cover object-center
            transition-transform duration-700 ease-out
            group-hover:scale-[1.045]
            motion-reduce:transform-none
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-0 bg-gradient-to-t
            from-black/65 via-black/10 to-transparent
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 opacity-0
            transition-opacity duration-300 group-hover:opacity-100
          "
          style={{
            background:
              "radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,236,207,0.18), transparent 72%)",
          }}
        />

        {/* Location label */}
        <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/95 px-3 py-1.5 text-[9px] font-semibold tracking-[0.04em] text-[#242124] shadow-sm sm:text-[10px]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#B91C2C]"
            />
            उज्जैन, मध्य प्रदेश
          </span>
        </div>

        {/* Image title */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white/80 sm:text-[10px]">
            <span className="h-px w-5 bg-white/70" />
            {service.category === "puja" ? "पूजा एवं अनुष्ठान" : "ज्योतिष सेवा"}
          </p>

          <h3 className="serif max-w-[95%] text-xl font-bold leading-snug text-white sm:text-2xl">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card information */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="min-h-[3.5rem] flex-1 text-[13px] leading-6 text-[#686168] sm:text-sm sm:leading-7">
          {service.shortDescription}
        </p>

        {/* Trust statement */}
        <div className="mt-4 flex min-h-12 items-center gap-2.5 border-t border-[#F1C9CD] pt-3.5">
          <CheckCircle2
            size={16}
            strokeWidth={1.7}
            className="shrink-0 text-[#B91C2C]"
            aria-hidden="true"
          />

          <p className="text-[11px] leading-5 text-[#686168] sm:text-xs">
            श्रद्धा एवं विधि-विधान के साथ
          </p>
        </div>

        {/* Actions */}
        <div className="mt-4 grid grid-cols-[1fr_1fr] gap-2 sm:gap-2.5">
          <Link
            href={service.route}
            className="
              inline-flex min-h-11 min-w-0 items-center justify-center
              gap-1.5 border border-[#F1C9CD] bg-white
              px-2 py-2.5 text-xs font-bold text-[#8F1725]
              transition-colors duration-300
              hover:border-[#B91C2C] hover:bg-[#FFFDFC]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2
              sm:text-sm
            "
          >
            <span>विवरण देखें</span>
            <ArrowRight
              size={15}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <Link
            href={`/booking?service=${encodeURIComponent(service.title)}`}
            aria-label={`${service.title} बुक करें`}
            className="
              relative inline-flex min-h-11 min-w-0 items-center
              justify-center gap-1.5 overflow-hidden bg-[#B91C2C]
              px-2 py-2.5 text-xs font-bold text-white
              transition-colors duration-300
              hover:bg-[#8F1725]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2
              sm:text-sm
            "
          >
            <span>बुक करें</span>
            <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Bottom signature accent */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 h-0.75 origin-left
          scale-x-0 bg-[#D9363E] transition-transform
          duration-500 group-hover:scale-x-100
        "
      />
    </article>
  );
}
