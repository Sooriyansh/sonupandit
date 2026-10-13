
"use client";

import { ChevronDown, MessageCircle } from "lucide-react";
import { useId, useState } from "react";
import type { FAQItem } from "@/types/service";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/sections/SectionHeading";
import Link from "next/link";
import { site } from "@/data/site";

export const defaultFaqs: FAQItem[] = [
  {
    question: "कालसर्प दोष पूजा उज्जैन में कैसे बुक करें?",
    answer:
      "आप वेबसाइट के बुकिंग फॉर्म, कॉल या WhatsApp के माध्यम से तिथि और पूजा की जानकारी साझा करके बुकिंग अनुरोध भेज सकते हैं।",
  },
  {
    question: "मंगल भात पूजन के लिए क्या जानकारी आवश्यक है?",
    answer:
      "नाम, मोबाइल नंबर और पसंदीदा तिथि साझा करें। पूजन की व्यवस्था और आवश्यक जानकारी के लिए पहले संपर्क करें।",
  },
  {
    question: "क्या पूजा के लिए पहले से बुकिंग करनी होती है?",
    answer:
      "हाँ, तिथि और समय समन्वय के लिए पहले से संपर्क करना बेहतर रहता है।",
  },
  {
    question: "क्या ऑनलाइन पूजा के लिए संपर्क किया जा सकता है?",
    answer:
      "हाँ, ऑनलाइन पूजा के लिए उपलब्धता और विधि की जानकारी फोन या WhatsApp पर तय की जा सकती है।",
  },
  {
    question: "ज्योतिष परामर्श के लिए कौन-कौन सी जानकारी चाहिए?",
    answer:
      "नाम, जन्म तिथि, जन्म समय, जन्म स्थान और आपका प्रश्न या परामर्श विषय साझा करें।",
  },
];

export function FAQSection({
  faqs = defaultFaqs,
}: {
  faqs?: FAQItem[];
}) {
  const [open, setOpen] = useState(0);
  const sectionId = useId();

  return (
    <FadeUp
      as="section"
      className="relative overflow-hidden bg-[#FFFDFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-28 h-72 w-72 rounded-full bg-[#B91C2C]/[0.045] blur-[90px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#D9363E]/[0.10] blur-[100px]" />

      <div className="container-shell relative z-10 max-w-4xl">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="आपके सवाल, स्पष्ट जवाब"
            description="बुकिंग, पूजा और ज्योतिष परामर्श से जुड़े सामान्य प्रश्नों के उत्तर, ताकि आप सही जानकारी के साथ आगे बढ़ सकें।"
          />
        </div>

        <div className="mt-10 space-y-3 sm:mt-14">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            const answerId = `${sectionId}-answer-${index}`;
            const triggerId = `${sectionId}-question-${index}`;

            return (
              <article
                key={item.question}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#D9363E]/50 bg-white shadow-[0_12px_38px_rgba(143,23,37,0.065)]"
                    : "border-[#B91C2C]/[0.09] bg-white/70 hover:border-[#D9363E]/45 hover:bg-white"
                }`}
              >
                <div
                  className={`absolute bottom-0 left-0 top-0 w-[3px] bg-[#B91C2C] transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />

                <button
                  id={triggerId}
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B91C2C]"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span
                    className={`hidden shrink-0 font-mono text-xs tracking-widest sm:block ${
                      isOpen ? "text-[#B91C2C]" : "text-[#B91C2C]/35"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 text-base font-bold leading-7 transition-colors sm:text-lg ${
                      isOpen ? "text-[#B91C2C]" : "text-[#B91C2C]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#B91C2C] bg-[#B91C2C] text-white"
                        : "border-[#B91C2C]/10 bg-[#FFFDFC] text-[#686168] group-hover:border-[#D9363E]/70 group-hover:text-[#B91C2C]"
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={2} />
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-5 border-t border-[#B91C2C]/[0.07] px-5 pb-6 pt-4 sm:ml-7 sm:px-7 sm:pb-7 sm:pt-5">
                      <p className="text-sm leading-7 text-[#686168] sm:text-[15px] sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#D9363E]/25 bg-[#FFF1F2] p-5 sm:flex-row sm:p-6">
          <div className="flex items-start gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#B91C2C] shadow-sm">
              <MessageCircle size={20} />
            </div>

            <div>
              <h3 className="font-bold text-[#B91C2C]">
                आपका सवाल यहाँ नहीं मिला?
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#686168]">
                अपनी पूजा या परामर्श से जुड़ी जानकारी सीधे पूछें।
              </p>
            </div>
          </div>

          <Link
            href={site.whatsapp}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#B91C2C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8F1725] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2"
          >
            WhatsApp पर पूछें
            <MessageCircle size={16} />
          </Link>
        </div>
      </div>
    </FadeUp>
  );
}
