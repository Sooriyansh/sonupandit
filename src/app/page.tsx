
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

const SITE_URL = "https://www.pujaujjain.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute:
      "Puja Ujjain | Pandit Sumit Sharma Ji – Vedic Puja & Jyotish",
  },

  description:
    "Book Vedic puja and anushthan in Ujjain with Pandit Sumit Sharma Ji. Explore Kaal Sarp Dosh Puja, Mangal Bhat Poojan, Rudrabhishek, Navgrah Shanti and Jyotish consultation.",

  keywords: [
    "Puja Ujjain",
    "Pandit in Ujjain",
    "Pandit Sumit Sharma Ji",
    "Puja in Ujjain",
    "Kaal Sarp Dosh Puja Ujjain",
    "Kaal Sarp Puja Ujjain",
    "Mangal Bhat Poojan Ujjain",
    "Rudrabhishek in Ujjain",
    "Navgrah Shanti Puja Ujjain",
    "Pitra Dosh Puja Ujjain",
    "Vedic Puja and Anushthan Ujjain",
    "Jyotish in Ujjain",
    "Kundli Consultation Ujjain",
    "Kundli Matching",
    "Grah Dosh Nivaran",
    "Hindu Rituals Ujjain",
    "Mahakal Puja Ujjain",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Puja Ujjain",
    title:
      "Puja Ujjain | Pandit Sumit Sharma Ji – Vedic Puja & Jyotish",
    description:
      "Explore Vedic puja, religious rituals, dosh nivaran and Jyotish consultation services in Ujjain, Madhya Pradesh.",
  },

  twitter: {
    card: "summary",
    title: "Puja Ujjain | Pandit Sumit Sharma Ji",
    description:
      "Vedic Puja, Anushthan, Dosh Nivaran and Jyotish consultation in Ujjain.",
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
  name: "Puja Ujjain",
  alternateName: "Pandit Sumit Sharma Ji",
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
