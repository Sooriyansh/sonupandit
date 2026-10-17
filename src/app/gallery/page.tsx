
import type { Metadata } from "next";

import { Gallery } from "@/components/sections/Gallery";
import { CTASection } from "@/components/sections/CTASection";

import { media } from "@/data/media";
import { site } from "@/data/site";
import { createMetadata } from "@/utils/seo";

const pageTitle = "पूजा एवं अनुष्ठान गैलरी | उज्जैन";

const pageDescription =
  "उज्जैन में पूजा, वैदिक अनुष्ठान और धार्मिक आयोजनों से जुड़ी उपलब्ध तस्वीरें और वीडियो देखें। पूजा एवं अनुष्ठान की झलकियाँ एक ही स्थान पर।";

export const metadata: Metadata = {
  ...createMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/gallery",
  }),

  keywords: [
    "पूजा गैलरी उज्जैन",
    "उज्जैन पूजा फोटो",
    "वैदिक अनुष्ठान फोटो",
    "उज्जैन धार्मिक अनुष्ठान",
    "पूजा वीडियो उज्जैन",
    "Puja Gallery Ujjain",
    "Vedic Ritual Photos Ujjain",
    "Puja and Anushthan Gallery",
  ],

  openGraph: {
    type: "website",
    locale: "hi_IN",
    title: pageTitle,
    description: pageDescription,
    url: "/gallery",
    siteName: "पं. सोनू गुरु",
    images: [
      {
        url: media.pujaGroup,
        alt: "उज्जैन की पूजा एवं वैदिक अनुष्ठान गैलरी",
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
    },
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: `${site.siteUrl}/gallery`,
  inLanguage: "hi-IN",
  about: {
    "@type": "Thing",
    name: "पूजा एवं वैदिक अनुष्ठान",
  },
};

export default function GalleryPage() {
  return (
    <main className="overflow-hidden bg-[#FFFDFC] text-[#242124]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema).replace(/</g, "\\u003c"),
        }}
      />

      <Gallery variant="editorial" id="gallery-collection" />

      <CTASection />
    </main>
  );
}
