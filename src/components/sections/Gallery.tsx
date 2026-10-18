
"use client";

import Image from "next/image";
import { ArrowUpRight, Images, Sparkles } from "lucide-react";
import { galleryMedia } from "@/data/media";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/sections/SectionHeading";

const galleryPatterns = [
  "col-span-2 row-span-3 md:col-span-4 md:row-span-3",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-2 md:col-span-3 md:row-span-2",
  "col-span-2 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-3 md:col-span-4 md:row-span-2",
  "col-span-2 row-span-2 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-3 md:col-span-3 md:row-span-3",
];

const editorialGalleryPatterns = [
  "col-span-2 row-span-3 md:col-span-5 md:row-span-4 lg:col-span-5 lg:row-span-5",
  "col-span-1 row-span-2 md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-3",
  "col-span-1 row-span-2 md:col-span-4 md:row-span-2 lg:col-span-4 lg:row-span-3",
  "col-span-1 row-span-2 md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-3",
  "col-span-1 row-span-2 md:col-span-4 md:row-span-3 lg:col-span-4 lg:row-span-4",
  "col-span-2 row-span-3 md:col-span-5 md:row-span-3 lg:col-span-5 lg:row-span-4",
  "col-span-1 row-span-2 md:col-span-4 md:row-span-3 lg:col-span-4 lg:row-span-4",
  "col-span-1 row-span-3 md:col-span-3 md:row-span-3 lg:col-span-3 lg:row-span-4",
  "col-span-2 row-span-2 md:col-span-5 md:row-span-3 lg:col-span-5 lg:row-span-4",
  "col-span-2 row-span-2 md:col-span-4 md:row-span-3 lg:col-span-4 lg:row-span-4",
];

type GalleryProps = {
  limit?: number;
  variant?: "preview" | "editorial";
  id?: string;
};

export function Gallery({
  limit,
  variant = "preview",
  id,
}: GalleryProps) {
  const editorial = variant === "editorial";
  const items =
    typeof limit === "number"
      ? galleryMedia.slice(0, limit)
      : galleryMedia;

  return (
    <FadeUp
      as="section"
      className={`relative overflow-hidden bg-[#FFFDFC] ${
        editorial ? "py-14 sm:py-20 lg:py-24" : "py-20 sm:py-24 lg:py-28"
      }`}
    >
      {/* Soft editorial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-[#D9363E]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#B91C2C]/[0.045] blur-[100px]"
      />

      <div id={id} className="container-shell relative z-10 scroll-mt-24">
        {editorial ? (
          <header className="mb-9 grid gap-6 border-b border-[#D9363E]/45 pb-7 sm:mb-12 sm:pb-9 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#B91C2C] sm:text-xs">
                <span aria-hidden="true" className="h-px w-8 bg-[#D9363E]" />
                <Sparkles size={14} aria-hidden="true" />
                Moments of devotion
              </div>

              <h1 className="serif mt-5 text-3xl font-bold leading-tight tracking-tight text-[#8F1725] sm:text-4xl md:text-5xl">
                आस्था के अनमोल क्षण
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#686168] sm:text-base sm:leading-8">
                पूजा, वैदिक अनुष्ठानों और उज्जैन की आध्यात्मिक परंपराओं से
                जुड़ी उपलब्ध तस्वीरों एवं वीडियो की एक झलक।
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-full border border-[#F1C9CD] bg-white px-4 py-3 text-[#8F1725]">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FFF1F2] text-[#B91C2C]">
                <Images size={17} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold">
                  फोटो एवं वीडियो
                </span>
                <span className="mt-0.5 block text-[10px] text-[#686168]">
                  उपलब्ध संग्रह
                </span>
              </span>
            </div>
          </header>
        ) : (
          <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SectionHeading
                label="गैलरी"
                title="पूजा, अनुष्ठान और उज्जैन की झलक"
                description="वेबसाइट में उपलब्ध वास्तविक photos और videos को सम्मानपूर्वक प्रस्तुत किया गया है।"
              />
            </div>

            <div className="hidden shrink-0 items-center gap-3 pb-2 md:flex">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[#D9363E]/40 bg-white text-[#B91C2C]">
                <Images size={19} strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#B91C2C]">
                  आस्था के पल
                </p>
                <p className="mt-0.5 text-xs text-[#686168]">
                  Photo & video collection
                </p>
              </div>
            </div>
          </div>
        )}

        {items.length > 0 ? (
          <div
            className={`grid auto-rows-[88px] grid-cols-2 gap-3 sm:auto-rows-[110px] sm:gap-4 md:auto-rows-[90px] md:grid-cols-6 lg:auto-rows-[100px] lg:grid-cols-12 lg:gap-5 ${
              editorial ? "items-stretch" : ""
            }`}
          >
            {items.map((item, index) => (
              <figure
                key={item.src}
                className={`group relative isolate min-h-0 overflow-hidden rounded-2xl border border-[#D9363E]/35 bg-[#8F1725] shadow-[0_6px_24px_rgba(143,23,37,0.07)] transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(143,23,37,0.15)] sm:rounded-3xl ${
                  editorial
                    ? editorialGalleryPatterns[index % editorialGalleryPatterns.length]
                    : galleryPatterns[index % galleryPatterns.length]
                }`}
              >
                {/* Image or video */}
                <div className="absolute inset-0 overflow-hidden">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <video
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      controls
                      preload="none"
                      playsInline
                      aria-label={item.alt}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                </div>

                {/* Caption overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#8F1725]/85 via-[#8F1725]/5 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100"
                />

                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4 lg:p-5">
                  <div className="min-w-0">
                    <span className="mb-1 block text-[8px] font-semibold uppercase tracking-[0.2em] text-[#D9363E] sm:text-[10px]">
                      {item.type === "video" ? "VIDEO MOMENTS" : "GALLERY"}
                    </span>
                    <p className="serif line-clamp-2 text-sm font-bold leading-snug text-white sm:text-base lg:text-lg">
                      {item.caption}
                    </p>
                  </div>

                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:h-9 sm:w-9">
                    <ArrowUpRight size={16} />
                  </span>
                </figcaption>

                {/* Fine gold frame accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2 rounded-xl border border-white/0 transition-all duration-500 group-hover:border-white/30 sm:inset-3 sm:rounded-2xl"
                />
              </figure>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#B91C2C]/10 bg-white px-6 py-14 text-center">
            <Images
              className="mx-auto text-[#D9363E]"
              size={30}
              strokeWidth={1.5}
            />
            <p className="mt-4 text-sm text-[#686168]">
              गैलरी में अभी कोई सामग्री उपलब्ध नहीं है।
            </p>
          </div>
        )}

        <div className="mt-7 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-10 bg-[#D9363E]/50" />
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#686168] sm:text-xs">
            उज्जैन की पवित्र परंपराओं की झलक
          </p>
          <span className="h-px w-10 bg-[#D9363E]/50" />
        </div>
      </div>
    </FadeUp>
  );
}
