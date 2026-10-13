
import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { BookingProcess } from "@/components/sections/BookingProcess";
import { FAQSection } from "@/components/sections/FAQSection";

import { pujaServices } from "@/data/pujaServices";
import { media } from "@/data/media";
import { createMetadata } from "@/utils/seo";

const pageTitle = "पूजा एवं अनुष्ठान उज्जैन | कालसर्प दोष पूजा और वैदिक पूजा";

const pageDescription =
  "उज्जैन में कालसर्प दोष पूजा, मंगल भात पूजन, पितृ दोष पूजा, नवग्रह शांति, रुद्राभिषेक और अन्य वैदिक अनुष्ठानों की जानकारी प्राप्त करें। पूजा की प्रक्रिया और बुकिंग के लिए संपर्क करें।";

export const metadata: Metadata = {
  ...createMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/puja",
  }),

  keywords: [
    "पूजा उज्जैन",
    "उज्जैन में पूजा",
    "वैदिक पूजा उज्जैन",
    "कालसर्प दोष पूजा उज्जैन",
    "कालसर्प पूजा उज्जैन",
    "मंगल भात पूजन उज्जैन",
    "Mangal Bhat Poojan Ujjain",
    "पितृ दोष पूजा उज्जैन",
    "नवग्रह शांति पूजा उज्जैन",
    "रुद्राभिषेक उज्जैन",
    "महाकाल पूजा उज्जैन",
    "पूजा एवं अनुष्ठान उज्जैन",
    "Puja in Ujjain",
    "Vedic Puja Ujjain",
    "Kaal Sarp Dosh Puja Ujjain",
    "Mangal Bhat Poojan Ujjain",
    "Pitra Dosh Puja Ujjain",
    "Navgrah Shanti Puja Ujjain",
    "Rudrabhishek Ujjain",
  ],

  openGraph: {
    type: "website",
    locale: "hi_IN",
    title: pageTitle,
    description: pageDescription,
    url: "/puja",
    siteName: "Puja Ujjain",
    images: [
      {
        url: media.pujaGroup,
        alt: "उज्जैन में वैदिक पूजा एवं अनुष्ठान",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [media.pujaGroup],
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

const pujaCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  inLanguage: "hi-IN",
  url: "https://www.pujaujjain.in/puja",
  about: {
    "@type": "Thing",
    name: "वैदिक पूजा एवं अनुष्ठान",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "उज्जैन की पूजा सेवाएँ",
    itemListElement: pujaServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
    })),
  },
};

export default function PujaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pujaCollectionSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <PageHero
        label="पूजा सेवाएँ"
        title="सभी पूजा एवं अनुष्ठान"
        description="उज्जैन में विधिवत वैदिक पद्धति से पूजा और अनुष्ठान की जानकारी प्राप्त करें। अपनी आवश्यकता के अनुसार पूजा चुनें और बुकिंग के लिए संपर्क करें।"
        image={media.pujaGroup}
        crumbs={[{ label: "पूजा", href: "/puja" }]}
      />

      <ServiceGrid
        label="वैदिक सेवाएँ"
        title="आपकी आवश्यकता के अनुसार पूजा"
        description="कालसर्प दोष पूजा, मंगल भात पूजन, पितृ दोष पूजा, नवग्रह शांति और अन्य वैदिक अनुष्ठानों की जानकारी, प्रक्रिया और बुकिंग विकल्प देखें।"
        services={pujaServices}
      />

      <BookingProcess />

      <FAQSection />
    </>
  );
}
