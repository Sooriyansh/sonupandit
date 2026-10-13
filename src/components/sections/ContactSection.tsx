
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { site } from "@/data/site";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/sections/SectionHeading";

const contactItems = [
  {
    id: "phone",
    icon: Phone,
    eyebrow: "DIRECT COMMUNICATION",
    title: "मोबाइल",
    value: `${site.phonePrimary}, ${site.phoneSecondary}`,
    description: "पूजा और परामर्श के लिए सीधे बात करें।",
    href: `tel:${site.phonePrimary}`,
    action: "कॉल करें",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    eyebrow: "QUICK ENQUIRY",
    title: "WhatsApp",
    value: site.phonePrimary,
    description: "अपनी आवश्यकता और सवाल संदेश में भेजें।",
    href: site.whatsapp,
    action: "मैसेज भेजें",
  },
  {
    id: "email",
    icon: Mail,
    eyebrow: "WRITTEN ENQUIRY",
    title: "ईमेल",
    value: site.email,
    description: "विस्तृत जानकारी या विशेष अनुरोध साझा करें।",
    href: `mailto:${site.email}`,
    action: "ईमेल लिखें",
  },
  {
    id: "location",
    icon: MapPin,
    eyebrow: "OUR LOCATION",
    title: "स्थान",
    value: site.location,
    description: "स्थान संबंधी जानकारी के लिए संपर्क करें।",
  },
];

export function ContactSection() {
  return (
    <FadeUp as="section" className="relative isolate overflow-hidden bg-[#B91C2C] py-20 text-[#FFFDFC] sm:py-24 lg:py-28">
      {/* Ambient background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full bg-[#B91C2C]/15 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#FFF1F2]/10 blur-[100px]"
      />

      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="संपर्क"
            title="पं. सोनू गुरु से संपर्क करें"
            description="पूजा, ज्योतिष परामर्श या ऑनलाइन पूजा बुकिंग के लिए अपनी सुविधा के अनुसार संपर्क माध्यम चुनें।"
            light
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            const card = (
              <article
                className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/50 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#F1C9CD] hover:bg-[#FFF1F2] sm:p-7"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#B91C2C] transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#F1C9CD] bg-[#FFF1F2] text-[#B91C2C] transition-all duration-300 group-hover:border-[#B91C2C]/30 group-hover:bg-white">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="pt-1 font-mono text-[10px] tracking-[0.2em] text-[#686168]">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-7">
                  <p className="text-[9px] font-semibold tracking-[0.2em] text-[#B91C2C]">
                    {item.eyebrow}
                  </p>

                  <h3 className="serif mt-2 text-2xl font-bold tracking-tight text-[#242124]">
                    {item.title}
                  </h3>

                  <p className="mt-3 break-words text-sm leading-6 text-[#242124]">
                    {item.value}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[#686168]">
                    {item.description}
                  </p>
                </div>

                {item.href ? (
                  <div className="mt-auto flex items-center justify-between border-t border-[#F1C9CD] pt-5">
                    <span className="text-sm font-semibold text-[#B91C2C] transition-colors group-hover:text-[#8F1725]">
                      {item.action}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-[#F1C9CD] text-[#B91C2C] transition-all duration-300 group-hover:border-[#B91C2C] group-hover:bg-[#B91C2C] group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                ) : (
                  <div className="mt-auto border-t border-[#F1C9CD] pt-5">
                    <span className="text-xs text-[#686168]">
                      संपर्क करके जानकारी प्राप्त करें
                    </span>
                  </div>
                )}
              </article>
            );

            return item.href ? (
              <Link
                key={item.id}
                href={item.href}
                className="block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#FFF1F2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#B91C2C]"
                aria-label={`${item.title}: ${item.action}`}
              >
                {card}
              </Link>
            ) : (
              <div key={item.id} className="h-full">
                {card}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="max-w-xl text-center text-sm leading-6 text-white/80 sm:text-left">
            सही पूजा और उचित विधि की जानकारी के लिए अपनी आवश्यकता साझा करें।
          </p>

          <Link
            href={site.whatsapp}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#B91C2C] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF1F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF1F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#B91C2C]"
          >
            <MessageCircle size={17} />
            WhatsApp पर संपर्क करें
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </FadeUp>
  );
}
