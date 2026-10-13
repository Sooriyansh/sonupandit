
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { pujaServices } from "@/data/pujaServices";
import { jyotishServices } from "@/data/jyotishServices";
import { site } from "@/data/site";
import { FadeUp } from "@/components/animations/FadeUp";

export function Footer() {
  return (
    <FadeUp
      as="footer"
      className="dark-band mobile-safe-bottom relative overflow-hidden bg-[#B91C2C] pt-14 text-[#FFFDFC] sm:pt-16 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full border border-[#FFF1F2]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-8 h-64 w-64 rounded-full border border-[#FFF1F2]/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#B91C2C]/[0.06] blur-3xl"
      />

      <div className="container-shell relative mx-auto">
        <div className="reveal relative mb-12 overflow-hidden border border-white/10 bg-white/[0.035] p-5 sm:mb-14 sm:p-7 lg:mb-16 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:p-9">
          <div className="relative flex items-start gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#FFF1F2]/40 bg-[#FFF1F2]/[0.08] text-[#FFF1F2] sm:h-14 sm:w-14">
              <Sparkles size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFF1F2] sm:text-[10px]">
                Sacred Rituals · Vedic Traditions
              </p>

              <h2 className="serif mt-2 text-2xl font-bold leading-snug text-[#FFFDFC] sm:text-3xl">
                {site.nameHindi}
              </h2>

              <p className="mt-2 text-sm leading-7 text-white/65">
                {site.role}
              </p>
            </div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <Link
              href="/booking"
              className="
                inline-flex min-h-12 items-center justify-center gap-2
                bg-white px-5 py-3 text-sm font-bold text-[#B91C2C]
                transition-colors duration-300 hover:bg-[#FFF1F2]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#FFF1F2] focus-visible:ring-offset-2
                focus-visible:ring-offset-[#B91C2C]
              "
            >
              पूजा बुक करें
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex min-h-12 items-center justify-center gap-2
                border border-white/20 px-5 py-3 text-sm font-semibold
                text-white/85 transition-colors duration-300
                hover:border-white hover:text-white
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#FFF1F2] focus-visible:ring-offset-2
                focus-visible:ring-offset-[#B91C2C]
              "
            >
              संपर्क करें
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-7 gap-y-10 pb-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10 lg:pb-14">
     
          <div className="reveal sm:col-span-2 lg:col-span-3">
            <p className="serif text-2xl font-bold leading-snug text-[#FFF1F2] sm:text-[27px]">
              {site.nameHindi}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-px w-9 bg-[#FFF1F2]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#FFF1F2]" />
            </div>

            <p className="mt-4 text-sm leading-7 text-white/70">
              {site.role}
            </p>

            <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
              वैदिक पूजा, अनुष्ठान और ज्योतिष परामर्श के लिए उज्जैन में
              संपर्क करें।
            </p>

            <div className="mt-5 inline-flex items-center gap-2 border border-[#FFF1F2]/20 bg-[#FFF1F2]/[0.06] px-3 py-2">
              <MapPin
                size={15}
                className="shrink-0 text-[#FFF1F2]"
                aria-hidden="true"
              />
              <span className="text-xs leading-5 text-white/75">
                {site.location}
              </span>
            </div>
          </div>

          <FooterLinks
            className="lg:col-span-3"
            title="पूजा सेवाएँ"
            items={pujaServices
              .slice(0, 6)
              .map((service) => [service.title, service.route])}
          />
          <FooterLinks
            className="lg:col-span-2"
            title="ज्योतिष सेवाएँ"
            items={jyotishServices.map((service) => [
              service.title,
              service.route,
            ])}
          />

          <FooterLinks
            className="lg:col-span-2"
            title="महत्वपूर्ण लिंक"
            items={[
              ["पंडित जी के बारे में", "/about"],
              ["गैलरी", "/gallery"],
              ["ऑनलाइन पूजा", "/online-puja"],
              ["बुकिंग", "/booking"],
              ["संपर्क", "/contact"],
            ]}
          />
          <div className="reveal sm:col-span-2 lg:col-span-2">
            <FooterHeading>संपर्क विवरण</FooterHeading>

            <div className="mt-5 grid gap-4">
              <ContactLink
                href={`tel:${site.phonePrimary}`}
                icon={<Phone size={17} aria-hidden="true" />}
                label="प्राथमिक नंबर"
                value={site.phonePrimary}
              />

              <ContactLink
                href={`tel:${site.phoneSecondary}`}
                icon={<Phone size={17} aria-hidden="true" />}
                label="वैकल्पिक नंबर"
                value={site.phoneSecondary}
              />

              <ContactLink
                href={`mailto:${site.email}`}
                icon={<Mail size={17} aria-hidden="true" />}
                label="ईमेल"
                value={site.email}
              />
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#FFF1F2]/40 to-transparent" />

        <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-6">
          <p className="text-xs leading-6 text-white/75">
            {site.copyright}
          </p>

          <Link
            href="/"
            className="
              group inline-flex w-fit items-center gap-2
              text-xs font-semibold text-white/65
              transition-colors duration-300
              hover:text-[#FFF1F2]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#FFF1F2] focus-visible:ring-offset-2
              focus-visible:ring-offset-[#B91C2C]
            "
          >
            मुख्य पृष्ठ
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </FadeUp>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-[#FFF1F2]">{children}</h3>

      <div className="mt-3 flex items-center gap-2">
        <span className="h-[2px] w-7 bg-[#FFF1F2]" />
        <span className="h-1 w-1 rotate-45 bg-[#FFF1F2]/70" />
      </div>
    </div>
  );
}

function FooterLinks({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[][];
  className?: string;
}) {
  return (
    <div className={`reveal min-w-0 ${className}`}>
      <FooterHeading>{title}</FooterHeading>

      <nav aria-label={title} className="mt-5">
        <ul className="grid gap-3">
          {items.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="
                  group inline-flex max-w-full items-start gap-2
                  text-sm leading-6 text-white/65
                  transition-colors duration-300
                  hover:text-[#FFF1F2]
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-[#FFF1F2]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    mt-[9px] h-1 w-1 shrink-0 bg-[#FFF1F2]/70
                    transition-all duration-300
                    group-hover:w-2 group-hover:bg-[#FFF1F2]
                  "
                />

                <span className="break-words">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Link
      href={href}
      className="
        group flex min-w-0 items-start gap-3
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#FFF1F2]
      "
    >
      <span
        className="
          flex h-9 w-9 shrink-0 items-center justify-center
          border border-white/10 bg-white/[0.04]
          text-[#FFF1F2]
          transition-colors duration-300
          group-hover:border-[#FFF1F2]/50
          group-hover:bg-[#FFF1F2]/10
        "
      >
        {icon}
      </span>

      <span className="min-w-0 pt-0.5">
        <span className="block text-[10px] text-white/75">{label}</span>

        <span className="mt-1 block break-words text-xs leading-6 text-white/75 transition-colors duration-300 group-hover:text-[#FFF1F2] sm:text-[13px]">
          {value}
        </span>
      </span>
    </Link>
  );
}
