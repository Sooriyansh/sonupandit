
"use client";

import Link from "next/link";
import { ArrowDownLeft, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { FadeUp } from "@/components/animations/FadeUp";

export function CTASection() {
  return (
    <FadeUp as="section" className="relative overflow-hidden bg-[#FFFDFC] px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="container-shell">
        <div className="cta-panel group relative isolate overflow-hidden rounded-[28px] border border-[#F1C9CD] bg-[#B91C2C] px-6 py-14 text-center shadow-[0_18px_48px_rgba(143,23,37,0.12)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Background ornamentation */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full border border-[#FFF1F2]/15 transition-transform duration-1000 group-hover:scale-110 sm:h-[420px] sm:w-[420px]" />
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#FFF1F2]/10 sm:h-[340px] sm:w-[340px]" />
            <div className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-[#B91C2C]/20 blur-[90px]" />
            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#FFF1F2]/10 blur-[100px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFF1F2]/70 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#FFF1F2]/25 bg-white/[0.04] px-4 py-2">
              <Sparkles size={14} className="text-[#FFF1F2]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FFF1F2] sm:text-xs">
                आपका विश्वास, हमारी सेवा
              </span>
            </div>

            <h2 className="serif mx-auto max-w-4xl text-3xl font-bold leading-[1.25] tracking-tight text-[#FFFDFC] sm:text-4xl md:text-5xl lg:text-[60px]">
              पूजा एवं ज्योतिष सेवा के लिए
              <span className="mt-1 block text-[#FFF1F2]">
                आज ही संपर्क करें
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#FFFDFC]/70 sm:text-base sm:leading-8">
              बुकिंग, तिथि, पूजा विधि या ज्योतिष परामर्श के लिए
              अपनी आवश्यकता साझा करें। सही जानकारी पाने के लिए
              सीधे कॉल या WhatsApp के माध्यम से संपर्क करें।
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/booking"
                className="group/booking inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#B91C2C] shadow-[0_6px_18px_rgba(143,23,37,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF1F2] hover:shadow-[0_8px_22px_rgba(143,23,37,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF1F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#B91C2C]"
              >
                पूजा बुक करें
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover/booking:translate-x-0.5 group-hover/booking:-translate-y-0.5"
                />
              </Link>

              <Link
                href={site.whatsapp}
                className="group/whatsapp inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/50 bg-white/[0.08] px-7 py-4 text-sm font-semibold text-[#FFFDFC] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFF1F2] hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF1F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#B91C2C]"
              >
                <MessageCircle
                  size={18}
                  className="text-[#FFF1F2] transition-transform duration-300 group-hover/whatsapp:scale-110"
                />
                WhatsApp पर बात करें
                <ArrowDownLeft
                  size={16}
                  className="text-white/50 transition-transform duration-300 group-hover/whatsapp:-translate-x-0.5 group-hover/whatsapp:translate-y-0.5"
                />
              </Link>
            </div>

            {/* Closing trust line */}
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#FFF1F2]/45" />
              <span className="text-[10px] tracking-[0.2em] text-[#FFF1F2]/75 sm:text-xs">
                श्रद्धा · सेवा · विश्वास
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#FFF1F2]/45" />
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
