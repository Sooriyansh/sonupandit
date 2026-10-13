
"use client";

import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import {
  ArrowDownRight,
  CheckCircle2,
  MapPin,
  Sparkles,
  UserRound,
} from "lucide-react";

import { FadeUp } from "@/components/animations/FadeUp";

const items = [
  {
    number: "01",
    title: "विधिवत वैदिक पद्धति",
    description:
      "पूजा और अनुष्ठान श्रद्धा, संकल्प और वैदिक विधि के साथ।",
    Icon: Sparkles,
    keyword: "वैदिक परंपरा",
  },
  {
    number: "02",
    title: "पूजा एवं अनुष्ठान",
    description:
      "कालसर्प दोष, मंगल भात पूजन, नवग्रह शांति, रुद्राभिषेक और अन्य कार्य।",
    Icon: CheckCircle2,
    keyword: "पूजा सेवाएँ",
  },
  {
    number: "03",
    title: "उज्जैन में सेवा",
    description:
      "श्री महाकालेश्वर की पावन नगरी उज्जैन में पूजा संबंधी संपर्क और बुकिंग।",
    Icon: MapPin,
    keyword: "पावन नगरी",
  },
  {
    number: "04",
    title: "व्यक्तिगत मार्गदर्शन",
    description:
      "आपकी पूजा या ज्योतिष सेवा के अनुसार आवश्यक जानकारी और समय का समन्वय।",
    Icon: UserRound,
    keyword: "आपके अनुसार",
  },
];

function TrustCard({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const card = cardRef.current;
    if (!card) return;

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

    card.style.setProperty("--mouse-x", `${x * 100}%`);
    card.style.setProperty("--mouse-y", `${y * 100}%`);

    card.style.transform = `
      perspective(1400px)
      rotateX(${(0.5 - y) * 3}deg)
      rotateY(${(x - 0.5) * 3}deg)
      translateY(-4px)
    `;
  }

  function resetCard() {
    setHovered(false);

    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    }
  }

  const { Icon } = item;

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCard}
      style={{
        animationDelay: `${index * 100}ms`,
        transformStyle: "preserve-3d",
      }}
      className={`
        trust-card group relative flex min-w-0 flex-col
        overflow-hidden border bg-[#FFFDFC] p-5
        transition-[transform,border-color,box-shadow]
        duration-300 ease-out sm:p-6 lg:p-7
        ${
          hovered
            ? "border-[#F1C9CD] shadow-[0_20px_48px_rgba(143,23,37,0.10)]"
            : "border-[#F1C9CD] shadow-[0_4px_20px_rgba(143,23,37,0.035)]"
        }
      `}
    >
      {/* Cursor-following light */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(217,54,62,0.13), transparent 72%)",
        }}
      />

      {/* Card top row */}
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-[0.2em] text-[#686168]">
          / {item.number}
        </span>

        <div
          className="
            grid h-11 w-11 place-items-center
            border border-[#F1C9CD] bg-[#FFF1F2]
            text-[#B91C2C]
            transition-all duration-300
            group-hover:border-[#B91C2C]
            group-hover:bg-[#8F1725]
            group-hover:text-[#FFF1F2]
            sm:h-12 sm:w-12
          "
        >
          <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
        </div>
      </div>

      {/* Card content */}
      <div className="relative mt-7 flex-1 sm:mt-9">
        <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.19em] text-[#B91C2C] sm:text-[10px]">
          {item.keyword}
        </p>

        <h3 className="serif text-xl font-bold leading-snug text-[#B91C2C] transition-colors duration-300 group-hover:text-[#B91C2C] sm:text-[23px]">
          {item.title}
        </h3>

        <p className="mt-3 text-[13px] leading-7 text-[#686168] sm:text-sm sm:leading-[1.9]">
          {item.description}
        </p>
      </div>

      {/* Bottom detail */}
      <div className="relative mt-6 flex items-center justify-between border-t border-[#F1C9CD] pt-4">
        <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#686168]">
          श्रद्धा एवं सेवा
        </span>

        <span
          className="
            grid h-8 w-8 place-items-center
            border border-[#F1C9CD] text-[#B91C2C]
            transition-all duration-300
            group-hover:border-[#B91C2C]
            group-hover:bg-[#8F1725]
            group-hover:text-white
          "
        >
          <ArrowDownRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>

      {/* Gold-red bottom accent */}
      <div
        aria-hidden="true"
        className={`
          absolute inset-x-0 bottom-0 h-[3px]
          origin-left bg-[#D9363E]
          transition-transform duration-500
          ${hovered ? "scale-x-100" : "scale-x-0"}
        `}
      />
    </article>
  );
}

export function TrustSection() {
  return (
    <FadeUp
      as="section"
      className="relative isolate overflow-hidden bg-[#FFFDFC] py-16 text-[#B91C2C] sm:py-20 lg:py-28"
    >
      {/* Background ornaments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-36 -z-10 h-[440px] w-[440px] rounded-full border border-[#D9363E]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-16 -z-10 h-[280px] w-[280px] rounded-full border border-[#B91C2C]/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 -z-10 h-96 w-96 rounded-full bg-[#FFF1F2]/60 blur-3xl"
      />

      <div className="container-shell relative z-10 mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 xl:gap-20">
          {/* Editorial introduction */}
          <div className="flex min-w-0 flex-col items-start lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-3 border border-[#F1C9CD] bg-white px-3.5 py-2.5 sm:px-4">
              <span className="h-2 w-2 shrink-0 bg-[#B91C2C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#B91C2C] sm:text-[10px] sm:tracking-[0.2em]">
                विश्वास और परंपरा
              </span>
            </div>

            <h2 className="serif mt-7 max-w-xl text-[38px] font-bold leading-[1.2] tracking-[-0.035em] text-[#B91C2C] sm:text-5xl lg:mt-8 lg:text-[58px]">
              आपकी आस्था,
              <span className="mt-2 block font-normal text-[#B91C2C]">
                हमारा संकल्प।
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-2.5">
              <span className="h-[2px] w-12 bg-[#D9363E]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#D9363E]" />
              <span className="h-px w-7 bg-[#F1C9CD]" />
            </div>

            <p className="mt-6 max-w-lg text-sm leading-8 text-[#686168] sm:text-base sm:leading-[2]">
              पूजा केवल एक अनुष्ठान नहीं, बल्कि श्रद्धा और परंपरा
              से जुड़ा एक भाव है। हमारा प्रयास है कि आपको पूजा की
              प्रक्रिया, आवश्यक जानकारी और बुकिंग के संबंध में
              स्पष्ट मार्गदर्शन मिले।
            </p>

            {/* Signature statement */}
            <div className="mt-9 flex w-full items-center gap-4 border-y border-[#F1C9CD] py-5 sm:mt-10 sm:py-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#B91C2C] text-[#FFF1F2]">
                <Sparkles size={21} strokeWidth={1.6} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold leading-6 text-[#B91C2C] sm:text-base">
                  श्रद्धा के साथ, स्पष्ट मार्गदर्शन
                </p>

                <p className="mt-1 text-xs leading-6 text-[#686168] sm:text-sm">
                  हर चरण में सम्मान और सही जानकारी
                </p>
              </div>
            </div>

            <div className="mt-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#B91C2C] lg:flex">
              <span>हमारी सेवा के सिद्धांत</span>
              <ArrowDownRight size={17} aria-hidden="true" />
            </div>
          </div>

          {/* Trust card grid */}
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {items.map((item, index) => (
              <TrustCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-14 border-t border-[#F1C9CD] pt-6 sm:mt-18 sm:pt-7 lg:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="max-w-2xl text-sm leading-7 text-[#686168]">
              हमारी प्राथमिकता है — पूजा संबंधी स्पष्ट जानकारी,
              सम्मानपूर्ण संवाद और आपकी आवश्यकताओं के अनुसार सहयोग।
            </p>

            <span className="inline-flex shrink-0 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#B91C2C] sm:text-[10px]">
              श्रद्धा
              <span className="text-[#D9363E]">·</span>
              सेवा
              <span className="text-[#D9363E]">·</span>
              विश्वास
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .trust-card,
          .trust-card * {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </FadeUp>
  );
}
