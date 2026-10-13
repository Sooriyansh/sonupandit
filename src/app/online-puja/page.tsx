import type { Metadata } from "next";
import { Suspense } from "react";
import { CalendarCheck2, ShieldCheck, Sparkles } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/forms/BookingForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { media } from "@/data/media";
import { createMetadata } from "@/utils/seo";

export const metadata: Metadata = createMetadata({
  title: "ऑनलाइन पूजा बुकिंग | पं. सोनू गुरु",
  description:
    "ऑनलाइन पूजा के लिए पं. सोनू गुरु से संपर्क करें और पूजा की तिथि, समय और विधि तय करें।",
  path: "/online-puja",
});

const processPoints = [
  "नाम, मोबाइल, पूजा प्रकार और तिथि साझा करें।",
  "उपलब्धता के आधार पर पूजा समय और विधि निर्धारित की जाती है।",
  "प्रयोगिक या अवैज्ञानिक परिणाम की गारंटी नहीं दी जाती; सेवा धार्मिक अनुष्ठान के रूप में की जाती है।",
];

export default function OnlinePujaPage() {
  return (
    <>
      <PageHero
        label="ऑनलाइन पूजा"
        title="ऑनलाइन पूजा के लिए संपर्क करें"
        description="जो श्रद्धालु उज्जैन नहीं आ सकते, वे उपलब्धता और विधि की जानकारी के लिए ऑनलाइन पूजा अनुरोध भेज सकते हैं।"
        image={media.shiv}
        crumbs={[{ label: "ऑनлайн पूजा", href: "/online-puja" }]}
      />

      <section className="relative isolate overflow-hidden bg-[#FFFDFC] py-16 text-[#242124] sm:py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#B91C2C]/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#D9363E]/12 blur-3xl" />
        </div>

        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#F1C9CD] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B91C2C] sm:text-[11px]">
              <Sparkles size={14} aria-hidden="true" />
              sacred remote booking
            </div>

            <div>
              <h2 className="serif text-3xl font-bold leading-[1.2] text-[#B91C2C] sm:text-4xl lg:text-[3rem]">
                ऑनलाइन पूजा प्रक्रिया
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#686168] sm:text-base">
                ऑनलाइन पूजा के लिए अपनी जानकारी, सेवा प्रकार, तिथि और
                विशेष अनुरोध साझा करें। हम आपकी उपलब्धता के आधार पर पूजा
                विधि, समय और आवश्यक दिशा-निर्देश साझा करेंगे।
              </p>
            </div>

            <div className="interactive-surface grid gap-4 rounded-[1.75rem] border border-[#F1C9CD] bg-white p-5 shadow-[0_18px_50px_rgba(143,23,37,0.04)] sm:p-6">
              {processPoints.map((point, index) => (
                <div
                  key={point}
                  className="interactive-surface flex items-start gap-3 rounded-2xl border border-[#F1C9CD] bg-[#FFFDFC] p-4"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#B91C2C] text-[11px] font-bold text-white">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-7 text-[#242124] sm:text-[15px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="interactive-surface rounded-2xl border border-[#F1C9CD] bg-[#FFF1F2] p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#B91C2C]">
                  <CalendarCheck2 size={19} aria-hidden="true" />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#686168]">
                  तिथि चयन
                </p>
                <p className="mt-2 text-sm leading-6 text-[#242124]">
                  पूजा की उपलब्ध तिथि और शेड्यूल के अनुसार समन्वय किया जाता है।
                </p>
              </div>

              <div className="interactive-surface rounded-2xl border border-[#F1C9CD] bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#B91C2C]">
                  <ShieldCheck size={19} aria-hidden="true" />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#686168]">
                  शास्त्रीय विधि
                </p>
                <p className="mt-2 text-sm leading-6 text-[#242124]">
                  पूजा वैदिक परंपरा और पूजा-विधि के अनुसार की जाती है।
                </p>
              </div>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="rounded-[1.75rem] border border-[#F1C9CD] bg-white p-6 text-sm text-[#686168] shadow-[0_18px_50px_rgba(143,23,37,0.04)]">
                फॉर्म लोड हो रहा है...
              </div>
            }
          >
            <BookingForm />
          </Suspense>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
