"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#FFFDFC] py-20 text-[#242124] sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#B91C2C]/[0.06] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#D9363E]/[0.12] blur-3xl" />
      </div>

      <div className="container-shell">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-[#F1C9CD] bg-white p-8 text-center shadow-[0_20px_60px_rgba(143,23,37,0.08)] sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D9363E]/40 bg-[#FFF1F2] text-[#B91C2C]">
            <AlertCircle size={28} aria-hidden="true" />
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#B91C2C] sm:text-[11px]">
            Something went wrong
          </p>

          <h1 className="serif mt-5 text-4xl font-bold leading-tight text-[#B91C2C] sm:text-5xl">
            कुछ समस्या हुई
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#686168] sm:text-base">
            कृपया कुछ देर बाद पुनः प्रयास करें। अगर समस्या बनी रहे,
            हमसे सीधे संपर्क करें।
          </p>

          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B91C2C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8F1725] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9363E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <RefreshCw size={17} aria-hidden="true" />
            फिर से प्रयास करें
          </button>
        </div>
      </div>
    </section>
  );
}
