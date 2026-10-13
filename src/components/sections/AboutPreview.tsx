
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { media } from "@/data/media";
import { site } from "@/data/site";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/sections/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function AboutPreview() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const imageFrame = root.querySelector(".about-image-frame");
      const image = root.querySelector(".about-main-image");
      const badge = root.querySelector(".about-trust-badge");
      const heading = root.querySelector(".about-heading");
      const description = root.querySelector(".about-description");
      const features = root.querySelectorAll(".about-feature");
      const cta = root.querySelector(".about-cta");
      const accent = root.querySelector(".about-accent-line");
      const ambient = root.querySelector(".about-ambient-glow");

      if (imageFrame) {
        gsap.fromTo(
          imageFrame,
          { clipPath: "inset(0 0 100% 0 round 24px)", y: 24 },
          {
            clipPath: "inset(0 0 0% 0 round 24px)",
            y: 0,
            duration: 1.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: imageFrame,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      if (image) {
        gsap.fromTo(
          image,
          { scale: 1.12 },
          {
            scale: 1,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      if (badge) {
        gsap.fromTo(
          badge,
          { opacity: 0, y: 18, x: 15 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: badge,
              start: "top 90%",
              once: true,
            },
          }
        );

        gsap.to(badge, {
          y: -5,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1,
        });
      }

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 86%",
              once: true,
            },
          }
        );
      }

      if (description) {
        gsap.fromTo(
          description,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: description,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      if (features.length) {
        gsap.fromTo(
          features,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: features[0],
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cta,
              start: "top 94%",
              once: true,
            },
          }
        );
      }

      if (accent) {
        gsap.fromTo(
          accent,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: accent,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      if (ambient) {
        gsap.to(ambient, {
          x: 18,
          y: -14,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;

      const imageColumn = root.querySelector<HTMLElement>(
        ".about-image-column"
      );

      const cursorTexts = root.querySelectorAll<HTMLElement>(
        ".about-cursor-text"
      );

      const handleMouseMove = (event: globalThis.MouseEvent) => {
        const rect = root.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(cursorTexts, {
          x: x * 4,
          y: y * 3,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });

        if (imageColumn) {
          gsap.to(imageColumn, {
            x: x * -4,
            y: y * -3,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(cursorTexts, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto",
        });

        if (imageColumn) {
          gsap.to(imageColumn, {
            x: 0,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      };

      if (canHover) {
        root.addEventListener("mousemove", handleMouseMove);
        root.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        root.removeEventListener("mousemove", handleMouseMove);
        root.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <FadeUp
      as="section"
      className="relative isolate overflow-hidden bg-[#FFFDFC] py-20 sm:py-28 lg:py-32"
    >
      <div ref={rootRef} className="relative">
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="about-ambient-glow pointer-events-none absolute -left-44 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#B91C2C]/[0.045] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#D9363E]/[0.08] blur-3xl"
        />

        <div className="container-shell relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
            {/* IMAGE COLUMN */}
            <div className="about-image-column relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
              <div className="relative pb-7 pr-4 sm:pb-9 sm:pr-8">
                {/* Fine gold outline */}
                <div
                  aria-hidden="true"
                  className="absolute -right-0 top-7 h-[78%] w-[70%] border border-[#D9363E]/45 sm:top-9"
                />

                <div className="about-image-frame relative overflow-hidden rounded-[22px] border border-[#F1C9CD] bg-white p-2 shadow-[0_28px_75px_rgba(143,23,37,0.12)] sm:rounded-[26px] sm:p-3">
                  <div className="group relative aspect-[4/4.65] overflow-hidden rounded-[16px] bg-[#FFF1F2] sm:rounded-[20px]">
                    <Image
                      src={media.pandit}
                      alt="पं. सोनू गुरु उज्जैन"
                      fill
                      priority={false}
                      sizes="(max-width: 768px) 92vw, (max-width: 1024px) 48vw, 550px"
                      className="about-main-image object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />

                    {/* Cinematic image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#B91C2C]/80 via-[#B91C2C]/10 to-black/[0.06]" />

                    {/* Top location label */}
                    <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                      <span className="inline-flex items-center gap-2 border border-white/35 bg-[#B91C2C]/25 px-3 py-2 text-[10px] font-medium tracking-wide text-white backdrop-blur-md sm:text-xs">
                        <MapPin size={13} className="text-[#FFF1F2]" />
                        उज्जैन, मध्य प्रदेश
                      </span>
                    </div>

                    {/* Image typography */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                      <span className="mb-4 block h-[2px] w-10 bg-[#D9363E]" />

                      <p className="about-cursor-text font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
                        श्रद्धा से सेवा तक
                      </p>

                      <p className="about-cursor-text mt-3 max-w-sm text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                        वैदिक पूजा-अनुष्ठान और आध्यात्मिक मार्गदर्शन
                      </p>
                    </div>

                    {/* Small ornamental mark */}
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-16 font-serif text-4xl text-white/70"
                    >
                      ॐ
                    </span>
                  </div>
                </div>

                {/* Floating information card */}
                <div className="about-trust-badge absolute -bottom-1 right-0 z-10 max-w-[270px] border border-[#F1C9CD] bg-white p-4 shadow-[0_16px_48px_rgba(143,23,37,0.12)] sm:right-2 sm:max-w-[310px] sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#B91C2C]/[0.08] text-[#B91C2C]">
                      <ShieldCheck size={22} strokeWidth={1.6} />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#B91C2C]">
                        वैदिक विधि-विधान
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#686168]">
                        श्रद्धा और परंपरा के साथ
                      </p>
                    </div>
                  </div>
                </div>

                {/* Left vertical detail */}
                <div
                  aria-hidden="true"
                  className="absolute -left-3 top-12 hidden h-20 w-[2px] bg-gradient-to-b from-[#B91C2C] to-[#D9363E] lg:block"
                />
              </div>
            </div>

            {/* CONTENT COLUMN */}
            <div className="lg:py-5">
              <div className="about-heading">
                <SectionHeading
                  label="परिचय"
                  title="पंडित सोनू गुरु के बारे में"
                  description="उज्जैन की पावन नगरी में पूजा-अनुष्ठान और ज्योतिषीय मार्गदर्शन।"
                  align="left"
                />

                <div
                  aria-hidden="true"
                  className="about-accent-line mt-6 h-[2px] w-20 bg-[#D9363E]"
                />
              </div>

              <p className="about-description mt-7 text-[15px] leading-8 text-[#686168] sm:text-base sm:leading-8">
                {site.nameHindi} द्वारा कालसर्प दोष निवारण, मंगल भात पूजन,
                नवग्रह शांति, रुद्राभिषेक, महामृत्युंजय जाप, नवचंडी यज्ञ,
                मां बगलामुखी अनुष्ठान एवं सभी मांगलिक व धार्मिक कार्य
                वैदिक पद्धति से संपन्न किये जाते हैं। जन्म पत्रिका बनाई व
                देखी जाती है।
              </p>

              {/* Minimal service highlights */}
              <div className="about-features mt-8 divide-y divide-[#F1C9CD] border-y border-[#F1C9CD]">
                <div className="about-feature group flex items-center gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#F1C9CD] bg-white text-[#B91C2C] transition-colors duration-300 group-hover:border-[#B91C2C] group-hover:bg-[#8F1725] group-hover:text-white">
                    <ShieldCheck size={21} strokeWidth={1.6} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#B91C2C] sm:text-base">
                      वैदिक पूजा एवं अनुष्ठान
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#686168] sm:text-sm">
                      धार्मिक परंपराओं के अनुसार पूजा सेवाएँ
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#D9363E] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="about-feature group flex items-center gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#F1C9CD] bg-white text-[#B91C2C] transition-colors duration-300 group-hover:border-[#B91C2C] group-hover:bg-[#8F1725] group-hover:text-white">
                    <Sparkles size={21} strokeWidth={1.6} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#B91C2C] sm:text-base">
                      ज्योतिष एवं जन्म पत्रिका
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#686168] sm:text-sm">
                      ज्योतिषीय परामर्श और मार्गदर्शन
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#D9363E] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="about-cta mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/about"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-4 bg-[#B91C2C] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8F1725] hover:shadow-[0_12px_28px_rgba(185,28,44,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] focus-visible:ring-offset-4"
                >
                  हमारे बारे में जानें

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <span className="text-xs leading-6 text-[#686168]">
                  उज्जैन में पूजा एवं धार्मिक सेवाएँ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}