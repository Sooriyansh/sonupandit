import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "पेज नहीं मिला | पं. सोनू गुरु",
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
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
            <Sparkles size={28} aria-hidden="true" />
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#B91C2C] sm:text-[11px]">
            Page not found
          </p>

          <h1 className="serif mt-5 text-4xl font-bold leading-tight text-[#B91C2C] sm:text-5xl">
            पेज नहीं मिला
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#686168] sm:text-base">
            यह पेज उपलब्ध नहीं है या हटा दिया गया है।
            मुख्य पृष्ठ से सेवा, पूजा और ज्योतिष विकल्प देखें।
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B91C2C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8F1725] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9363E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <Home size={17} aria-hidden="true" />
              होम पर जाएँ
            </Link>

            <Link
              href="/booking"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#F1C9CD] bg-[#FFFDFC] px-5 py-3 text-sm font-semibold text-[#B91C2C] transition-all duration-300 hover:border-[#D9363E] hover:bg-[#FFF1F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9363E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              बुकिंग करें
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
