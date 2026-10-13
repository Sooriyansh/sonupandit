
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Sparkles,
  Quote,
  ShieldCheck,
  Award,
  Users,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

import { media } from "@/data/media";
import { site } from "@/data/site";
import { createMetadata } from "@/utils/seo";

export const metadata: Metadata = createMetadata({
  title: "परिचय | पं. सोनू गुरु उज्जैन",
  description:
    "पं. सोनू गुरु के बारे में जानें। उज्जैन में वैदिक पूजा, धार्मिक अनुष्ठान और ज्योतिष सेवाओं से संबंधित जानकारी प्राप्त करें।",
  path: "/about",
});

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "15+ वर्ष",
    desc: "वैदिक अनुभव",
  },
  {
    icon: ShieldCheck,
    title: "शास्त्रीय",
    desc: "विधि-विधान",
  },
  {
    icon: Users,
    title: "श्रद्धालु",
    desc: "सेवा और मार्गदर्शन",
  },
];

const SERVICES = [
  "कालसर्प दोष निवारण",
  "मंगल भात पूजन",
  "नवग्रह शांति",
  "रुद्राभिषेक",
  "महामृत्युंजय जाप",
  "नवचंडी यज्ञ",
  "माँ बगलामुखी अनुष्ठान",
  "जन्म पत्रिका परामर्श",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="परिचय"
        title="पंडित सोनू गुरु के बारे में"
        description="पं. सोनू गुरु द्वारा उज्जैन में वैदिक पूजा, अनुष्ठान और ज्योतिष सेवाएँ।"
        image={media.pandit}
        crumbs={[{ label: "परिचय", href: "/about" }]}
      />

      <section className="relative isolate overflow-hidden bg-[#FFFDFC] py-16 sm:py-24 lg:py-32">
        {/* Soft ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#B91C2C]/[0.055] blur-3xl" />
          <div className="absolute -bottom-24 -left-32 h-96 w-96 rounded-full bg-[#D9363E]/[0.12] blur-3xl" />
        </div>

        <div className="container-shell relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Portrait and credentials */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2.5rem] border border-[#D9363E]/35"
                />

                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-[2.25rem] bg-[#B91C2C]/[0.06] blur-xl"
                />

                <div className="relative rounded-[2rem] border border-[#F1C9CD] bg-white p-2.5 shadow-[0_28px_90px_rgba(143,23,37,0.10)] sm:p-3.5">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#FFF1F2]">
                    <Image
                      src={media.pandit}
                      alt="पंडित सोनू गुरु"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.035]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#B91C2C]/90 via-[#B91C2C]/15 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-semibold tracking-wide text-[#FFF1F2] backdrop-blur-md sm:text-xs">
                        <Sparkles size={14} className="text-[#D9363E]" />
                        आध्यात्मिक मार्गदर्शन
                      </span>

                      <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                        {site.nameHindi}
                      </h2>

                      <p className="mt-2 text-xs leading-6 text-white/75 sm:text-sm">
                        वैदिक पूजा एवं ज्योतिष सेवाएँ
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#D9363E]">
                        <MapPin size={14} />
                        उज्जैन, मध्य प्रदेश
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="interactive-surface mt-3 grid grid-cols-3 divide-x divide-[#F1C9CD] rounded-2xl border border-[#F1C9CD] bg-[#FFFDFC] py-4">
                    {HIGHLIGHTS.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="flex flex-col items-center px-1.5 text-center"
                        >
                          <Icon
                            size={19}
                            strokeWidth={1.7}
                            className="text-[#B91C2C]"
                          />

                          <span className="mt-2 text-xs font-bold text-[#B91C2C] sm:text-sm">
                            {item.title}
                          </span>

                          <span className="mt-1 text-[9px] leading-4 text-[#686168] sm:text-[10px]">
                            {item.desc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Floating location detail */}
                <div className="absolute -bottom-5 right-2 flex max-w-[calc(100%-1rem)] items-center gap-3 rounded-2xl border border-[#F1C9CD] bg-white px-4 py-3 shadow-[0_15px_45px_rgba(143,23,37,0.12)] sm:right-5 sm:px-5 sm:py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#B91C2C]">
                    <MapPin size={19} />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#686168]">
                      पवित्र नगरी
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#B91C2C] sm:text-sm">
                      उज्जैन, मध्य प्रदेश
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About content */}
            <div className="pt-3 lg:col-span-7 lg:pt-0">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#F1C9CD] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#B91C2C] sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#B91C2C]" />
                {site.role}
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold leading-[1.2] tracking-tight text-[#B91C2C] sm:text-4xl lg:text-[3.35rem]">
                आस्था और परंपरा
                <span className="mt-2 block text-[#B91C2C]">
                  शुद्ध वैदिक मार्गदर्शन
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#686168] sm:text-base sm:leading-8">
                उज्जैन की पावन नगरी में वैदिक पूजा, धार्मिक अनुष्ठान और
                ज्योतिष सेवाओं से जुड़ी जानकारी प्राप्त करें। प्रत्येक
                अनुष्ठान में विधि-विधान, श्रद्धा और परंपरा को महत्व देते
                हुए अपनी आवश्यकता के अनुसार मार्गदर्शन के लिए संपर्क करें।
              </p>

              {/* Philosophy quote */}
              <div className="interactive-surface relative mt-8 overflow-hidden rounded-2xl border border-[#F1C9CD] bg-white p-5 shadow-[0_12px_35px_rgba(143,23,37,0.035)] sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 bg-[#B91C2C]"
                />

                <div className="flex gap-4 sm:gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#B91C2C]">
                    <Quote size={20} />
                  </span>

                  <div>
                    <p className="font-serif text-base font-medium italic leading-7 text-[#B91C2C] sm:text-lg sm:leading-8">
                      “हमारा ध्येय श्रद्धालुओं को शास्त्रीय मर्यादा,
                      शुद्धता और श्रद्धा के साथ पूजा एवं अनुष्ठान संबंधी
                      मार्गदर्शन प्रदान करना है।”
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="h-px w-7 bg-[#D9363E]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#686168]">
                        हमारा संकल्प
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mt-9">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B91C2C]">
                      Our Services
                    </p>

                    <h3 className="mt-2 font-serif text-xl font-semibold text-[#B91C2C] sm:text-2xl">
                      प्रमुख पूजा एवं अनुष्ठान
                    </h3>
                  </div>

                  <Link
                    href="/puja"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B91C2C] transition-colors hover:text-[#B91C2C]"
                  >
                    सभी सेवाएँ
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {SERVICES.map((service) => (
                    <span
                      key={service}
                      className="group inline-flex items-center gap-2 rounded-xl border border-[#F1C9CD] bg-white px-3.5 py-2.5 text-xs font-medium text-[#B91C2C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B91C2C]/40 hover:bg-[#FFF1F2] hover:text-[#B91C2C] sm:text-sm"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-[#D9363E] transition-colors group-hover:text-[#B91C2C]"
                      />
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Appointment CTA */}
              <div className="mt-9 flex flex-col gap-5 border-t border-[#F1C9CD] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#B91C2C]">
                    <CalendarDays size={19} />
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[#686168]">
                      परामर्श एवं अपॉइंटमेंट
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#B91C2C]">
                      {site.location}
                    </p>
                  </div>
                </div>

                <Link
                  href="/booking"
                  className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#B91C2C] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(185,28,44,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8F1725] hover:shadow-[0_14px_32px_rgba(143,23,37,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9363E] focus-visible:ring-offset-2"
                >
                  पूजा बुक करें
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <CTASection />
    </>
  );
}
