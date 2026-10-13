import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  MapPin,
  ClipboardCheck,
} from "lucide-react";

import type { ServiceItem } from "@/types/service";
import { FadeUp } from "@/components/animations/FadeUp";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { BookingForm } from "@/components/forms/BookingForm";

export function ServiceDetail({
  service,
}: {
  service: ServiceItem;
}) {
  return (
    <>
      {/* Service overview */}
      <FadeUp
        as="section"
        className="relative isolate overflow-hidden bg-[#FFFDFC] py-14 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-12 -z-10 h-96 w-96 rounded-full bg-[#B91C2C]/4.5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#D9363E]/[0.07] blur-3xl"
        />

        <div className="container-shell relative mx-auto">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_390px] xl:gap-16">
            {/* Main content column */}
            <main className="min-w-0">
              <div className="reveal">
                <div className="inline-flex max-w-full items-center gap-2.5 border border-[#F1C9CD] bg-white px-3.5 py-2.5 shadow-[0_3px_14px_rgba(143,23,37,0.035)] sm:px-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#FFF1F2] text-[#B91C2C]">
                    <Sparkles size={15} aria-hidden="true" />
                  </span>

                  <span className="text-[10px] font-bold tracking-[0.12em] text-[#B91C2C] sm:text-xs sm:tracking-[0.16em]">
                    सेवा की संपूर्ण जानकारी
                  </span>
                </div>

                <h2 className="serif mt-6 text-3xl font-bold leading-tight tracking-tight text-[#B91C2C] sm:text-4xl sm:leading-[1.2] lg:text-[46px]">
                  {service.title}
                  <span className="mt-3 block text-2xl font-semibold leading-snug text-[#B91C2C] sm:text-3xl lg:text-[34px]">
                    सेवा से संबंधित जानकारी
                  </span>
                </h2>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-0.5 w-12 bg-[#D9363E]" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#D9363E]" />
                  <span className="h-px w-8 bg-[#F1C9CD]" />
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-loose text-[#686168] sm:text-base sm:leading-8">
                  {service.intro}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  <div className="inline-flex items-center gap-2.5 border border-[#F1C9CD] bg-white px-3.5 py-3 text-xs font-semibold text-[#686168] sm:px-4">
                    <ShieldCheck
                      size={17}
                      className="shrink-0 text-[#686168]"
                      aria-hidden="true"
                    />
                    वैदिक परंपराओं के अनुसार
                  </div>

                  <div className="inline-flex items-center gap-2.5 border border-[#F1C9CD] bg-white px-3.5 py-3 text-xs font-semibold text-[#686168] sm:px-4">
                    <MapPin
                      size={17}
                      className="shrink-0 text-[#686168]"
                      aria-hidden="true"
                    />
                    उज्जैन, मध्य प्रदेश
                  </div>
                </div>
              </div>

              {/* Detailed service information */}
              <div className="mt-12 border-t border-[#F1C9CD] pt-1 sm:mt-14">
                <InfoBlock
                  title="यह पूजा किनके लिए उपयुक्त है?"
                  subtitle="आपकी आवश्यकताओं और पूजा के उद्देश्य के अनुसार"
                  items={service.suitableFor}
                />

                <InfoBlock
                  title="पूजा की सामान्य प्रक्रिया"
                  subtitle="अनुष्ठान की तैयारी से लेकर विधि-विधान तक"
                  items={service.process}
                  numbered
                />

                <InfoBlock
                  title="पूजा में क्या-क्या शामिल हो सकता है?"
                  subtitle="सेवा के अनुसार आवश्यक सामग्री एवं व्यवस्थाएँ"
                  items={service.includes}
                />
              </div>

              {/* Ujjain editorial panel */}
              <div className="reveal relative mt-12 overflow-hidden border border-[#F1C9CD] bg-[#FFF1F2] sm:mt-14">
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 bg-[#B91C2C]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 font-serif text-[130px] leading-none text-[#8F1725]/5.5 sm:text-[160px]"
                >
                  ॐ
                </div>

                <div className="relative p-5 sm:p-8 lg:p-9">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FFF1F2] text-[#B91C2C]">
                      <Sparkles size={21} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#686168] sm:text-[10px]">
                        The Spiritual City
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[#686168]">
                        उज्जैन, मध्य प्रदेश
                      </p>
                    </div>
                  </div>

                  <h3 className="serif mt-6 max-w-xl text-2xl font-bold leading-snug text-[#B91C2C] sm:text-3xl">
                    उज्जैन में पूजा का आध्यात्मिक महत्व
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-8 text-[#686168] sm:text-base">
                    उज्जैन, श्री महाकालेश्वर की पावन नगरी है। पूजा की तिथि,
                    स्थान, विधि और आवश्यक व्यवस्थाओं की जानकारी पहले संपर्क
                    करके तय की जा सकती है।
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex min-h-11 items-center gap-2 border-b border-[#D9363E] pb-1 text-sm font-bold text-[#B91C2C] transition-colors hover:border-[#B91C2C] hover:text-[#B91C2C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] focus-visible:ring-offset-4"
                  >
                    पूजा के बारे में पूछें
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </main>

            {/* Booking sidebar */}
            <aside className="reveal min-w-0 lg:sticky lg:top-24">
              <div className="relative overflow-hidden border border-[#F1C9CD] bg-white shadow-[0_16px_55px_rgba(143,23,37,0.085)]">
                {/* Booking card header */}
                <div className="relative overflow-hidden bg-[#8F1725] px-5 py-7 text-white sm:px-7 sm:py-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-7 -top-12 h-44 w-44 rounded-full border border-[#D9363E]/10"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-1 -top-6 h-32 w-32 rounded-full border border-[#D9363E]/10"
                  />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#FFF1F2]/40 bg-white/6 text-[#FFF1F2]">
                      <CalendarDays size={23} aria-hidden="true" />
                    </div>

                    <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFF1F2] sm:text-[10px]">
                      Booking &amp; Consultation
                    </p>

                    <h2 className="serif mt-2 text-2xl font-bold sm:text-3xl">
                      बुकिंग अनुरोध
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-white/75">
                      अपनी आवश्यकता साझा करें और पूजा की उपलब्ध व्यवस्थाओं
                      के बारे में जानकारी प्राप्त करें।
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.75 bg-[#FFF1F2]"
                  />
                </div>

                {/* Selected service */}
                <div className="p-5 sm:p-7">
                  <div className="border border-[#F1C9CD] bg-[#FFFDFC] p-4 sm:p-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#686168] sm:text-[10px]">
                      चुनी गई सेवा
                    </p>

                    <p className="mt-2.5 text-base font-bold leading-7 text-[#B91C2C]">
                      {service.title}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-[11px] text-[#686168]">
                      <MapPin
                        size={14}
                        className="shrink-0 text-[#686168]"
                        aria-hidden="true"
                      />
                      उज्जैन, मध्य प्रदेश
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <Link
                      href={`/booking?service=${encodeURIComponent(service.title)}`}
                      className="group inline-flex min-h-12.5 items-center justify-center gap-2 bg-[#B91C2C] px-5 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#8F1725] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2"
                    >
                      पूजा बुक करें
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>

                    <Link
                      href="/contact"
                      className="group inline-flex min-h-12.5 items-center justify-center gap-2 border border-[#F1C9CD] bg-white px-5 py-3 text-sm font-bold text-[#B91C2C] transition-colors duration-300 hover:border-[#B91C2C] hover:bg-[#FFF1F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C] focus-visible:ring-offset-2"
                    >
                      संपर्क करें
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  <div className="mt-6 flex items-start gap-3 border-t border-[#F1C9CD] pt-5">
                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-[#686168]"
                      aria-hidden="true"
                    />

                    <p className="text-xs leading-6 text-[#686168]">
                      पूजा की तिथि, स्थान, विधि और अन्य व्यवस्थाएँ संपर्क
                      के माध्यम से स्पष्ट की जा सकती हैं।
                    </p>
                  </div>
                </div>
              </div>

              {/* Helpful note */}
              <div className="mt-4 flex items-start gap-3 border border-[#F1C9CD] bg-white p-4 sm:p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#FFF1F2] text-[#B91C2C]">
                  <ClipboardCheck size={18} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#B91C2C]">
                    अपनी जानकारी तैयार रखें
                  </p>

                  <p className="mt-1.5 text-xs leading-6 text-[#686168]">
                    पूजा से संबंधित प्रश्न और अपनी आवश्यकताएँ पहले से लिख
                    लेने से अनुरोध भेजना आसान हो सकता है।
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </FadeUp>

      {/* Booking form section */}
      <FadeUp
        as="section"
        className="relative isolate overflow-hidden bg-[#FFF1F2] py-16 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-0 -z-10 h-80 w-80 rounded-full bg-[#B91C2C]/4.5 blur-3xl"
        />

        <div className="container-shell relative mx-auto max-w-5xl">
          {/* Section heading */}
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <div className="inline-flex items-center gap-2.5 border border-[#F1C9CD] bg-white px-4 py-2.5">
              <ClipboardCheck
                size={15}
                className="text-[#B91C2C]"
                aria-hidden="true"
              />

              <span className="text-[9px] font-bold tracking-[0.16em] text-[#B91C2C] sm:text-[10px]">
                अपना अनुरोध भेजें
              </span>
            </div>

            <h2 className="serif mt-5 text-3xl font-bold leading-tight text-[#B91C2C] sm:text-4xl lg:text-[42px]">
              फॉर्म के माध्यम से
              <span className="mt-2 block text-[#B91C2C]">
                बुकिंग अनुरोध करें
              </span>
            </h2>

            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-px w-9 bg-[#D9363E]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#D9363E]" />
              <span className="h-px w-9 bg-[#D9363E]" />
            </div>

            <p className="mt-5 text-sm leading-7 text-[#686168] sm:text-base">
              अपनी जानकारी साझा करें ताकि आपकी पूजा से संबंधित आवश्यकताओं
              को समझा जा सके।
            </p>
          </div>

          {/* Form surface */}
          <div className="relative border border-[#F1C9CD] bg-white p-4 shadow-[0_20px_65px_rgba(143,23,37,0.07)] sm:p-7 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.75 bg-[#D9363E]"
            />

            <Suspense
              fallback={
                <div
                  role="status"
                  className="flex min-h-48 flex-col items-center justify-center gap-4 p-6 text-center"
                >
                  <span className="h-8 w-8 animate-spin rounded-full border-2 border-[#F1C9CD] border-t-[#B91C2C]" />
                  <p className="text-sm text-[#686168]">
                    फॉर्म लोड हो रहा है...
                  </p>
                </div>
              }
            >
              <BookingForm jyotish={service.category === "jyotish"} />
            </Suspense>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-[#686168]">
            आपकी आवश्यकता के अनुसार पूजा से संबंधित जानकारी संपर्क के माध्यम
            से स्पष्ट की जा सकती है।
          </p>
        </div>
      </FadeUp>

      {/* Existing FAQ and CTA */}
      <FAQSection faqs={service.faqs} />
      <CTASection />
    </>
  );
}

function InfoBlock({
  title,
  subtitle,
  items,
  numbered = false,
}: {
  title: string;
  subtitle: string;
  items: string[];
  numbered?: boolean;
}) {
  return (
    <section className="reveal mt-10 sm:mt-12">
      <div className="flex items-start gap-3.5 sm:gap-4">
        <div className="mt-1 flex w-9 shrink-0 flex-col items-center sm:w-10">
          <span className="flex h-9 w-9 items-center justify-center border border-[#F1C9CD] bg-[#FFF1F2] text-[#B91C2C]">
            <Sparkles size={16} aria-hidden="true" />
          </span>

          <span className="mt-2 h-5 w-px bg-[#F1C9CD]" />
        </div>

        <div className="min-w-0 pt-0.5">
          <h3 className="serif text-xl font-bold leading-snug text-[#B91C2C] sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 text-xs leading-6 text-[#686168] sm:text-sm">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4">
        {items.map((item, index) => (
          <div
            key={`${index}-${item}`}
            className="
              group flex min-w-0 items-start gap-3.5
              border border-[#F1C9CD] bg-white p-4
              transition-[border-color,background-color,box-shadow]
              duration-300
              hover:border-[#F1C9CD] hover:bg-[#FFFDFC]
              hover:shadow-[0_8px_25px_rgba(143,23,37,0.045)]
              sm:p-5
            "
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#F1C9CD] bg-[#FFF1F2] text-[#B91C2C] transition-colors duration-300 group-hover:border-[#B91C2C] group-hover:bg-[#8F1725] group-hover:text-white">
              {numbered ? (
                <span className="text-[10px] font-bold tracking-wide">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : (
                <CheckCircle2
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              )}
            </span>

            <p className="min-w-0 flex-1 text-sm leading-7 text-[#686168]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
