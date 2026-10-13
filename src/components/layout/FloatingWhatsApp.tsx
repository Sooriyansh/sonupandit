
"use client";

import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <Link
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp पर संपर्क करें"
      className="
        group fixed bottom-5 right-4 z-50
        flex items-center gap-3
        sm:bottom-6 sm:right-6
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-[#25D366]
        focus-visible:ring-offset-4
      "
    >
      <span
        className="
          hidden items-center gap-2 border border-[#F1C9CD]
          bg-[#FFFDFC] px-4 py-3
          text-xs font-semibold text-[#B91C2C]
          shadow-[0_8px_28px_rgba(143,23,37,0.10)]
          transition-all duration-300
          group-hover:-translate-x-1
          group-hover:border-[#D9363E]
          lg:flex
        "
      >
        WhatsApp पर संपर्क करें
        <ArrowUpRight
          size={15}
          className="text-[#686168]"
          aria-hidden="true"
        />
      </span>

      <span
        className="
          relative grid h-14 w-14 shrink-0 place-items-center
          rounded-full border-[3px] border-white
          bg-[#168C4A] text-white
          shadow-[0_8px_26px_rgba(22,140,74,0.28)]
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:scale-105
          group-hover:bg-[#11783E]
          group-hover:shadow-[0_12px_32px_rgba(22,140,74,0.38)]
          sm:h-15 sm:w-15
        "
      >
        <span
          aria-hidden="true"
          className="
            absolute -inset-1.25 rounded-full
            border border-[#25D366]/60
            motion-safe:animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite]
            motion-reduce:animate-none
          "
        />

        <MessageCircle
          size={27}
          strokeWidth={2}
          className="relative transition-transform duration-300 group-hover:rotate-[-8deg] sm:h-7.25 sm:w-7.25"
          aria-hidden="true"
        />
        <span
          aria-hidden="true"
          className="
            absolute right-0.5 top-0.5
            h-3.5 w-3.5 rounded-full
            border-2 border-white bg-[#D9363E]
          "
        />
      </span>
    </Link>
  );
}
