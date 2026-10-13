
import type { Metadata } from "next";
import { Suspense } from "react";
import {
  ArrowDown,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/forms/BookingForm";
import { ContactSection } from "@/components/sections/ContactSection";

import { media } from "@/data/media";
import { createMetadata } from "@/utils/seo";

export const metadata: Metadata = createMetadata({
  title: "पूजा बुकिंग | पं. सोनू गुरु उज्जैन",
  description:
    "उज्जैन में पूजा, धार्मिक अनुष्ठान और ज्योतिष सेवा के लिए बुकिंग अनुरोध भेजें। अपनी जानकारी, पसंदीदा तिथि और सेवा का विवरण भरें।",
  path: "/booking",
});

const bookingSteps = [
  {
    number: "01",
    title: "अपनी जानकारी भरें",
    description: "नाम और संपर्क विवरण सही-सही दर्ज करें।",
    icon: FileText,
  },
  {
    number: "02",
    title: "सेवा और तिथि चुनें",
    description: "अपनी आवश्यकता और पसंदीदा तिथि बताएँ।",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "संपर्क की प्रतीक्षा करें",
    description: "अनुरोध भेजने के बाद आगे की पुष्टि प्राप्त करें।",
    icon: MessageCircle,
  },
];

export default function BookingPage() {
  return (
    <>
      <PageHero
        label="बुकिंग"
        title="पूजा / सेवा बुक करें"
        description="अपनी आवश्यकता, पसंदीदा तिथि और संपर्क विवरण साझा करके बुकिंग अनुरोध भेजें।"
        image={media.pujaGroup}
        crumbs={[{ label: "बुकिंग", href: "/booking" }]}
      />

      <section className="relative isolate overflow-hidden bg-[#FFFDFC] py-14 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#B91C2C]/[0.05] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#D9363E]/[0.11] blur-3xl" />
        </div>

        <div className="container-shell">
          {/* Section heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9363E]/40 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#686168] sm:text-[11px]">
              <Sparkles size={14} />
              Begin Your Booking
            </span>

            <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-[#B91C2C] sm:text-4xl lg:text-5xl">
              अपनी पूजा का अनुरोध
              <span className="mt-2 block text-[#B91C2C]">
                यहाँ से शुरू करें
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#686168] sm:text-base sm:leading-8">
              नीचे दिया गया फॉर्म अपनी सही जानकारी के साथ भरें। सेवा और
              तिथि से जुड़ी जानकारी देने से आपके अनुरोध को समझने में
              आसानी होगी।
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            {/* Left booking guide */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="interactive-surface relative overflow-hidden rounded-[1.75rem] border border-[#D9363E]/25 bg-[#8F1725] p-6 text-white shadow-[0_16px_42px_rgba(143,23,37,0.10)] sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/[0.08]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#D9363E]/25"
                />

                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#FFF1F2]">
                    <CalendarDays size={22} />
                  </span>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.23em] text-[#FFF1F2]">
                    Booking Guide
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug sm:text-3xl">
                    बुकिंग कैसे करें?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    एक अच्छा बुकिंग अनुरोध भेजने के लिए इन तीन आसान चरणों
                    का पालन करें।
                  </p>

                  <div className="mt-8 space-y-6">
                    {bookingSteps.map((step, index) => {
                      const StepIcon = step.icon;

                      return (
                        <div key={step.number} className="relative flex gap-4">
                          {index !== bookingSteps.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="absolute left-[19px] top-11 h-[calc(100%+8px)] w-px bg-white/15"
                            />
                          )}

                          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-[#FFF1F2]">
                            <StepIcon size={18} />
                          </span>

                          <div className="pt-0.5">
                            <p className="text-sm font-semibold text-white">
                              {step.title}
                            </p>
                            <p className="mt-1 text-xs leading-6 text-white/55">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Helpful reminders */}
              <div className="interactive-surface rounded-[1.5rem] border border-[#F1C9CD] bg-white p-6 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B91C2C]">
                  Before You Submit
                </p>

                <h3 className="mt-3 font-serif text-xl font-semibold text-[#B91C2C]">
                  भेजने से पहले
                </h3>

                <ul className="mt-5 space-y-4">
                  {[
                    "सही मोबाइल नंबर दर्ज करें।",
                    "अपनी आवश्यकता और पसंदीदा तिथि स्पष्ट लिखें।",
                    "यदि कोई विशेष अनुरोध है, तो उसे फॉर्म में बताएँ।",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#B91C2C]"
                      />
                      <span className="text-sm leading-6 text-[#686168]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="interactive-surface flex items-start gap-3 rounded-2xl border border-[#F1C9CD] bg-[#FFF1F2] p-5">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-[#686168]"
                />
                <p className="text-xs leading-6 text-[#686168]">
                  फॉर्म में वही जानकारी दें जो बुकिंग अनुरोध के लिए
                  आवश्यक है। अपनी जानकारी भेजने से पहले उसे जाँच लें।
                </p>
              </div>
            </aside>

            {/* Existing form — booking functionality preserved */}
            <div
              id="booking-form"
              className="min-w-0 scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-[#F1C9CD] bg-white shadow-[0_24px_80px_rgba(143,23,37,0.07)] sm:rounded-[2rem]"
            >
              <div className="border-b border-[#F1C9CD] bg-[#FFFDFC] px-5 py-6 sm:px-8 sm:py-7 lg:px-10">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF1F2] text-[#B91C2C]">
                    <FileText size={21} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B91C2C]">
                      Booking Request
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#B91C2C] sm:text-3xl">
                      बुकिंग विवरण
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#686168]">
                      सभी आवश्यक जानकारी भरकर अपना अनुरोध भेजें।
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 lg:p-10">
                <Suspense
                  fallback={
                    <div
                      role="status"
                      aria-live="polite"
                      className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-[#F1C9CD] bg-[#FFFDFC] px-6 py-12 text-center"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1F2] text-[#B91C2C]">
                        <Clock3 size={22} />
                      </span>

                      <p className="mt-4 font-semibold text-[#B91C2C]">
                        फॉर्म लोड हो रहा है...
                      </p>

                      <p className="mt-2 text-sm text-[#686168]">
                        कृपया कुछ क्षण प्रतीक्षा करें।
                      </p>
                    </div>
                  }
                >
                  <BookingForm />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Contact fallback */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#F1C9CD] bg-white px-5 py-6 text-center sm:flex-row sm:gap-4 sm:py-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF1F2] text-[#B91C2C]">
              <MessageCircle size={19} />
            </span>

            <p className="text-sm leading-6 text-[#686168]">
              फॉर्म भरने में परेशानी हो रही है? नीचे दिए गए संपर्क विकल्पों
              का उपयोग करें।
            </p>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#B91C2C] transition-colors hover:text-[#B91C2C]"
            >
              संपर्क विवरण देखें
              <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
