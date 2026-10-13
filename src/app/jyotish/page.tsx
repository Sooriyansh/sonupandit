
import type { Metadata } from "next";
import {
  BookOpenText,
  CalendarDays,
  Check,
  Compass,
  Sparkles,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { FAQSection } from "@/components/sections/FAQSection";

import { jyotishServices } from "@/data/jyotishServices";
import { media } from "@/data/media";
import { createMetadata } from "@/utils/seo";

const pageTitle = "ज्योतिष सेवाएँ उज्जैन | कुंडली विश्लेषण एवं परामर्श";

const pageDescription =
  "उज्जैन में ज्योतिष परामर्श, जन्म कुंडली विश्लेषण, विवाह कुंडली मिलान और ग्रहों से जुड़े पारंपरिक ज्योतिषीय मार्गदर्शन की जानकारी प्राप्त करें।";

export const metadata: Metadata = {
  ...createMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/jyotish",
  }),

  keywords: [
    "ज्योतिष उज्जैन",
    "ज्योतिष सेवाएँ उज्जैन",
    "ज्योतिष परामर्श उज्जैन",
    "कुंडली विश्लेषण",
    "जन्म कुंडली विश्लेषण",
    "विवाह कुंडली मिलान",
    "गुण मिलान",
    "ग्रह दोष विश्लेषण",
    "ज्योतिष सलाह",
    "Jyotish in Ujjain",
    "Astrologer in Ujjain",
    "Kundli Analysis",
    "Birth Chart Reading",
    "Kundli Matching",
    "Marriage Horoscope Matching",
    "Astrology Consultation Ujjain",
  ],

  openGraph: {
    type: "website",
    locale: "hi_IN",
    title: pageTitle,
    description: pageDescription,
    url: "/jyotish",
    siteName: "Puja Ujjain",
    images: [
      {
        url: media.cardServices,
        alt: "उज्जैन में ज्योतिष एवं कुंडली परामर्श सेवाएँ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [media.cardServices],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const consultationHighlights = [
  {
    number: "01",
    icon: BookOpenText,
    title: "जन्म कुंडली विश्लेषण",
    description:
      "जन्म तिथि, समय और स्थान के आधार पर कुंडली संबंधी प्रश्नों पर पारंपरिक ज्योतिषीय चर्चा।",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "विवाह कुंडली मिलान",
    description:
      "विवाह से संबंधित पारंपरिक कुंडली मिलान और गुण मिलान की जानकारी।",
  },
  {
    number: "03",
    icon: Compass,
    title: "ग्रह एवं कुंडली परामर्श",
    description:
      "कुंडली और ग्रहों से जुड़े प्रश्नों पर स्पष्ट, सम्मानपूर्ण ज्योतिषीय मार्गदर्शन।",
  },
];

const jyotishCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: "https://www.pujaujjain.in/jyotish",
  inLanguage: "hi-IN",
  mainEntity: {
    "@type": "ItemList",
    name: "ज्योतिष एवं कुंडली परामर्श सेवाएँ",
    itemListElement: jyotishServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
    })),
  },
};

export default function JyotishPage() {
  return (
    <main className="overflow-hidden bg-[#FFFDFC] text-[#242124]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jyotishCollectionSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <PageHero
        label="ज्योतिष एवं परामर्श"
        title="ज्योतिष सेवाएँ"
        description="जन्म कुंडली, विवाह कुंडली मिलान और ग्रहों से जुड़े प्रश्नों के लिए पारंपरिक ज्योतिषीय परामर्श की जानकारी प्राप्त करें।"
        image={media.cardServices}
        crumbs={[
          { label: "ज्योतिष", href: "/jyotish" },
        ]}
      />

      {/* Intro section */}
      <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -right-28 top-0 h-72 w-72 rounded-full bg-[#B91C2C]/[0.045] blur-3xl" />
          <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#D9363E]/[0.09] blur-3xl" />
        </div>

        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9363E]/40 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#686168] sm:text-[11px]">
              <Sparkles size={14} />
              Traditional Jyotish Consultation
            </span>

            <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-[#B91C2C] sm:text-4xl lg:text-5xl">
              कुंडली और ज्योतिष
              <span className="mt-2 block text-[#B91C2C]">
                परामर्श सेवाएँ
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#686168] sm:text-base sm:leading-8">
              जन्म कुंडली, विवाह मिलान और ग्रहों से जुड़े प्रश्नों के लिए
              अपनी आवश्यकता साझा करें। परामर्श के दौरान संबंधित विवरण और
              प्रश्नों पर चर्चा की जा सकती है।
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-[#686168] sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Check size={15} className="text-[#B91C2C]" />
                व्यक्तिगत प्रश्न
              </span>

              <span className="inline-flex items-center gap-2">
                <Check size={15} className="text-[#B91C2C]" />
                कुंडली संबंधी जानकारी
              </span>

              <span className="inline-flex items-center gap-2">
                <Check size={15} className="text-[#B91C2C]" />
                स्पष्ट परामर्श प्रक्रिया
              </span>
            </div>
          </div>

          {/* Consultation cards */}
          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
            {consultationHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-2xl border border-[#F1C9CD] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9363E]/65 hover:shadow-[0_20px_55px_rgba(143,23,37,0.07)] sm:p-8"
                >
                  <div className="absolute right-5 top-4 font-serif text-4xl text-[#D9363E]/20 transition-colors group-hover:text-[#D9363E]/40">
                    {item.number}
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#D9363E]/35 bg-[#FFF1F2] text-[#B91C2C] transition-colors duration-300 group-hover:bg-[#8F1725] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#B91C2C]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#686168]">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#D9363E] transition-all duration-300 group-hover:w-16" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Existing service grid */}
      <section className="relative bg-[#FFF1F2] py-4 sm:py-8">
        <div className="container-shell">
          <ServiceGrid
            label="परामर्श सेवाएँ"
            title="अपनी आवश्यकता के अनुसार सेवा चुनें"
            description="जन्म कुंडली, विवाह मिलान और ज्योतिषीय परामर्श से संबंधित सेवाओं की जानकारी देखें। अपनी आवश्यकता के अनुरूप सेवा चुनकर आगे संपर्क करें।"
            services={jyotishServices}
          />
        </div>
      </section>

      {/* Existing FAQs */}
      <FAQSection />
    </main>
  );
}
