
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";

import { site } from "@/data/site";

const AUTOPLAY_DELAY = 6000;

const slides = [
  {
    id: "01",
    subtitle: "ॐ नमः शिवाय",
    title: "जय श्री महाकाल",
    highlight: "दिव्य दर्शन",
    description: "बाबा महाकाल का आशीर्वाद प्राप्त करें।",
    image: "/images/optimized/b1.webp",
    alt: "श्री महाकालेश्वर ज्योतिर्लिंग के दिव्य दर्शन",
    position: "object-[center_42%] lg:object-[center_38%]",
  },
  {
    id: "02",
    subtitle: "श्री गणेशाय नमः",
    title: "विघ्नहर्ता श्री गणेश",
    highlight: "मंगलमय शुरुआत",
    description: "प्रथम पूज्य भगवान गणेश की कृपा सदैव बनी रहे।",
    image: "/images/optimized/b2.webp",
    alt: "फूलों से सुसज्जित भगवान श्री गणेश",
    position: "object-center lg:object-[center_40%]",
  },
  {
    id: "03",
    subtitle: "हर हर महादेव",
    title: "श्रद्धा और भक्ति",
    highlight: "शिव कृपा",
    description: "वैदिक परंपराओं के अनुसार पूजा एवं धार्मिक अनुष्ठान।",
    image: "/images/optimized/b3.webp",
    alt: "पुष्प एवं कुमकुम से सुसज्जित शिवलिंग",
    position: "object-center lg:object-[center_40%]",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeRef = useRef(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const changeSlide = useCallback((nextIndex: number) => {
    const next = (nextIndex + slides.length) % slides.length;

    if (next === activeRef.current) return;

    activeRef.current = next;
    setActive(next);
  }, []);

  const nextSlide = useCallback(() => {
    changeSlide(activeRef.current + 1);
  }, [changeSlide]);

  const previousSlide = useCallback(() => {
    changeSlide(activeRef.current - 1);
  }, [changeSlide]);

  useEffect(() => {
    if (
      !isPlaying ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % slides.length;
      activeRef.current = next;
      setActive(next);
    }, AUTOPLAY_DELAY);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(content, { clearProps: "all" });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        content,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
    }, content);

    return () => context.revert();
  }, [active]);

  const currentSlide = slides[active];

  return (
    <section
      aria-label="दिव्य दर्शन"
      className="relative isolate overflow-hidden bg-[#FFFDFC] pb-10 pt-5 text-[#242124] sm:pb-14 sm:pt-8 lg:pb-16 lg:pt-10"
    >
      <div className="container-shell relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-10 h-60 w-60 rounded-full bg-[#D9363E]/10 blur-3xl sm:h-80 sm:w-80"
        />

        <div className="relative grid overflow-hidden rounded-[18px] border border-[#F1C9CD] bg-white shadow-[0_16px_48px_rgba(143,23,37,0.09)] lg:min-h-135 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Devotional image panel */}
          <div className="relative min-h-62.5 overflow-hidden bg-[#FFF1F2] sm:min-h-90 lg:min-h-135">
            {slides.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={active !== index}
              >
                <Image
                  src={item.image}
                  alt={active === index ? item.alt : ""}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  className={`object-cover transition-transform duration-7000 ease-out ${item.position} ${
                    active === index ? "scale-[1.035]" : "scale-100"
                  }`}
                />
              </div>
            ))}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#8F1725]/45 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-[#8F1725]/10"
            />
          </div>

          {/* Existing hero copy and actions */}
          <div className="flex min-w-0 flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:px-16">
            <div ref={contentRef} className="w-full max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#D9363E] sm:w-12" />
                <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B91C2C] sm:text-xs sm:tracking-[0.28em]">
                  {currentSlide.subtitle}
                </p>
              </div>

              <h1 className="serif text-3xl font-bold leading-tight tracking-tight text-[#8F1725] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
                {currentSlide.title}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <Sparkles
                  size={18}
                  className="shrink-0 text-[#D9363E]"
                  aria-hidden="true"
                />
                <p className="text-lg font-semibold text-[#B91C2C] sm:text-xl lg:text-2xl">
                  {currentSlide.highlight}
                </p>
              </div>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#686168] sm:text-base sm:leading-8">
                {currentSlide.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href={site.whatsapp || "#"}
                  className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#B91C2C] px-6 py-3 text-sm font-bold text-white shadow-[0_7px_20px_rgba(185,28,44,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8F1725] hover:shadow-[0_10px_26px_rgba(185,28,44,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9363E] focus-visible:ring-offset-2 sm:min-h-13 sm:px-7 sm:text-base"
                >
                  <CalendarDays size={17} aria-hidden="true" />
                  पूजा बुक करें
                  <ArrowDownRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href={site.whatsapp || "#"}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#F1C9CD] bg-[#FFFDFC] px-6 py-3 text-sm font-semibold text-[#8F1725] transition-all duration-300 hover:border-[#D9363E] hover:bg-[#FFF1F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2 sm:min-h-13 sm:px-7 sm:text-base"
                >
                  <MessageCircle size={17} className="text-[#B91C2C]" aria-hidden="true" />
                  संपर्क करें
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-[#F1C9CD] pt-5">
                <span className="font-mono text-sm font-bold tabular-nums text-[#B91C2C]">
                  {currentSlide.id}
                </span>
                <span className="h-px w-12 bg-[#D9363E]" />
                <span className="font-mono text-xs tracking-widest text-[#686168]">
                  0{slides.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide selection and playback */}
        <div className="mt-4 flex items-center justify-between gap-4 px-1 sm:mt-5 sm:px-2">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => changeSlide(index)}
                aria-label={`स्लाइड ${index + 1} देखें`}
                aria-current={active === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2 ${
                  active === index
                    ? "w-10 bg-[#B91C2C] sm:w-14"
                    : "w-4 bg-[#D9363E]/60 hover:bg-[#B91C2C]/70 sm:w-6"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? "ऑटोप्ले रोकें" : "ऑटोप्ले शुरू करें"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F1C9CD] bg-white text-[#8F1725] transition hover:border-[#D9363E] hover:bg-[#FFF1F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] sm:h-10 sm:w-10"
            >
              {isPlaying ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={previousSlide}
              aria-label="पिछली स्लाइड"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F1C9CD] bg-white text-[#8F1725] transition hover:border-[#D9363E] hover:bg-[#FFF1F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] sm:h-10 sm:w-10"
            >
              <ArrowLeft size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="अगली स्लाइड"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B91C2C] bg-[#B91C2C] text-white transition hover:border-[#8F1725] hover:bg-[#8F1725] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2 sm:h-10 sm:w-10"
            >
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}