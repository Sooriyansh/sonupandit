
import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { PujaMarquee } from "@/components/sections/PujaMarquee";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { HomeVideo } from "@/components/sections/HomeVideo";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { BookingProcess } from "@/components/sections/BookingProcess";
import { Gallery } from "@/components/sections/Gallery";
import ClientReviews from "@/components/sections/ClientReviews";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";

import { pujaServices } from "@/data/pujaServices";
import { jyotishServices } from "@/data/jyotishServices";
import { media } from "@/data/media";
import { site } from "@/data/site";

const SITE_URL = site.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute:
      "पं. सोनू गुरु | उज्जैन में पूजा एवं ज्योतिष सेवाएँ",
  },

  description:
    "उज्जैन में पं. सोनू गुरु से मंगल भात पूजा, कालसर्प दोष पूजा, वैदिक अनुष्ठान और ज्योतिष परामर्श की जानकारी एवं बुकिंग के लिए संपर्क करें।",

  keywords: [
    "पं. सोनू गुरु",
    "Pandit Sonu Guru",
    "पूजा उज्जैन",
    "Puja Ujjain",
    "मंगल भात पूजा उज्जैन",
    "Mangal Bhat Puja Ujjain",
    "मंगल दोष पूजा उज्जैन",
    "Mangal Dosh Puja Ujjain",
    "कालसर्प दोष पूजा उज्जैन",
    "ज्योतिष परामर्श उज्जैन",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: SITE_URL,
    siteName: "पं. सोनू गुरु",
    title: "पं. सोनू गुरु | उज्जैन में पूजा एवं ज्योतिष सेवाएँ",
    description:
      "उज्जैन में पं. सोनू गुरु से मंगल भात पूजा, कालसर्प दोष पूजा, वैदिक अनुष्ठान और ज्योतिष परामर्श की जानकारी एवं बुकिंग के लिए संपर्क करें।",
    images: [
      {
        url: media.cardFront,
        width: 1200,
        height: 900,
        alt: "पं. सोनू गुरु का परिचय"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "पं. सोनू गुरु | उज्जैन में पूजा एवं ज्योतिष सेवाएँ",
    description: "उज्जैन में पूजा, अनुष्ठान और ज्योतिष परामर्श की जानकारी एवं बुकिंग।",
    images: [media.cardFront]
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "पं. सोनू गुरु",
  alternateName: "Pandit Sonu Guru",
  url: SITE_URL,
  inLanguage: ["en-IN", "hi-IN"],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Puja and Jyotish Services in Ujjain",
  description:
    "Vedic puja, anushthan, dosh nivaran and Jyotish consultation services.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Kaal Sarp Dosh Puja",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mangal Bhat Poojan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rudrabhishek",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Navgrah Shanti Puja",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Pitra Dosh Puja",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Jyotish and Kundli Consultation",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />

      <PujaMarquee />

      <HomeVideo />

      <AboutPreview />

      <ServiceGrid
        label="वैदिक सेवाएँ"
        title="सभी पूजा एवं अनुष्ठान"
        description="आपकी आस्था और आवश्यकता के अनुरूप विधिवत पूजा एवं अनुष्ठान।"
        services={pujaServices}
        curved
      />

      <ServiceGrid
        label="ज्योतिष"
        title="ज्योतिष सेवाएँ"
        description="कुंडली, विवाह मिलान, ग्रह-दोष और व्यक्तिगत परामर्श के लिए संपर्क करें।"
        services={jyotishServices}
        dark
      />

      <TrustSection />

      <BookingProcess />

      <Gallery limit={6} />

      <ClientReviews/>

      <FAQSection />

      <ContactSection />

      <CTASection />
    </>
  );
}
