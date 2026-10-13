
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

import { media } from "@/data/media";
import { site } from "@/data/site";
import { createMetadata } from "@/utils/seo";

export const metadata: Metadata = createMetadata({
  title: "संपर्क करें | पं. सोनू गुरु उज्जैन",
  description:
    "पूजा, धार्मिक अनुष्ठान, जन्म पत्रिका और ज्योतिष परामर्श के लिए पं. सोनू गुरु उज्जैन से फोन, WhatsApp या ईमेल के माध्यम से संपर्क करें।",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="संपर्क"
        title="सीधे संपर्क करें"
        description="पूजा, अनुष्ठान, जन्म पत्रिका या ज्योतिष परामर्श के लिए संपर्क करें। अपनी आवश्यकता साझा करें और आगे की जानकारी प्राप्त करें।"
        image={media.shiv}
        crumbs={[{ label: "संपर्क", href: "/contact" }]}
      />

      {/* Contact introduction */}
      <section className="relative isolate overflow-hidden bg-[#FFFDFC] py-16 sm:py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#B91C2C]/[0.06] blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#D9363E]/[0.12] blur-3xl" />
        </div>

        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Editorial content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9363E]/40 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#686168] sm:text-[11px]">
                <Sparkles size={14} />
                Get In Touch
              </div>

              <h2 className="mt-6 max-w-xl font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-[#B91C2C] sm:text-5xl lg:text-6xl">
                आपकी आस्था,
                <span className="mt-2 block text-[#B91C2C]">
                  हमारा मार्गदर्शन
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#686168] sm:text-base sm:leading-8">
                पूजा या धार्मिक अनुष्ठान से संबंधित जानकारी चाहिए? अपनी
                आवश्यकता के अनुसार फोन, WhatsApp या ईमेल से संपर्क करें।
                हमसे बात करने के लिए नीचे दिए गए विकल्प चुनें।
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#D9363E]" />
                <span className="font-serif text-sm italic text-[#686168]">
                  श्रद्धा • सेवा • परंपरा
                </span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#F1C9CD] bg-white/90 p-5 transition-colors duration-300 hover:border-[#D9363E]/70">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#B91C2C]">
                    <MapPin size={20} />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#686168]">
                    स्थान
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[#B91C2C]">
                    {site.location}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#F1C9CD] bg-white/90 p-5 transition-colors duration-300 hover:border-[#D9363E]/70">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#686168]">
                    <MessageCircle size={20} />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#686168]">
                    संपर्क माध्यम
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[#B91C2C]">
                    फोन, WhatsApp और ईमेल
                  </p>
                </div>
              </div>
            </div>

            {/* Contact action panel */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] border border-[#D9363E]/30 sm:-inset-4"
              />

              <div className="relative overflow-hidden rounded-[1.6rem] bg-[#8F1725] p-6 text-white shadow-[0_18px_48px_rgba(143,23,37,0.12)] sm:rounded-[2rem] sm:p-9 lg:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/[0.08]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#D9363E]/20"
                />

                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFF1F2] sm:text-[11px]">
                    Contact Details
                  </p>

                  <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug sm:text-3xl">
                    {site.nameHindi}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    अपनी आवश्यकता के अनुसार संपर्क का विकल्प चुनें।
                  </p>

                  <div className="my-7 h-px bg-gradient-to-r from-[#D9363E]/70 via-white/15 to-transparent" />

                  <div className="space-y-3">
                    <Link
                      href={`tel:${site.phonePrimary}`}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:border-[#D9363E]/50 hover:bg-white/[0.10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9363E]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8F1725] text-white transition-transform duration-300 group-hover:scale-105">
                        <Phone size={20} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-white/75">
                          फोन पर संपर्क करें
                        </span>
                        <span className="mt-1 block break-words text-sm font-semibold text-white sm:text-base">
                          {site.phonePrimary}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[#FFF1F2] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>

                    <Link
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:border-[#D9363E]/50 hover:bg-white/[0.10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9363E]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#B91C2C] transition-transform duration-300 group-hover:scale-105">
                        <MessageCircle size={20} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-white/75">
                          WhatsApp पर संदेश भेजें
                        </span>
                        <span className="mt-1 block text-sm font-semibold text-white sm:text-base">
                          WhatsApp करें
                        </span>
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[#FFF1F2] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>

                    <Link
                      href={`mailto:${site.email}`}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:border-[#D9363E]/50 hover:bg-white/[0.10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9363E]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FFF1F2] transition-transform duration-300 group-hover:scale-105">
                        <Mail size={20} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-white/75">
                          ईमेल द्वारा संपर्क
                        </span>
                        <span className="mt-1 block break-all text-sm font-semibold text-white sm:text-base">
                          {site.email}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[#FFF1F2] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>

                  <div className="mt-7 flex items-start gap-3 border-t border-white/10 pt-5">
                    <Sparkles
                      size={16}
                      className="mt-0.5 shrink-0 text-[#FFF1F2]"
                    />
                    <p className="text-xs leading-6 text-white/75">
                      संपर्क करते समय अपनी पूजा या परामर्श से संबंधित
                      आवश्यकता स्पष्ट रूप से बताएँ।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-3 text-center sm:mt-20">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F1C9CD] text-[#B91C2C]">
              <ArrowDown size={17} />
            </span>
            <p className="text-xs font-medium tracking-wide text-[#686168]">
              अधिक संपर्क जानकारी के लिए आगे देखें
            </p>
          </div>
        </div>
      </section>

      {/* Existing contact section and CTA remain intact */}
      <ContactSection />
      <CTASection />
    </>
  );
}
