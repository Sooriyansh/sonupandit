import type { Metadata } from "next";
import { site } from "@/data/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({ title, description, path = "/", keywords = [] }: SeoInput): Metadata {
  const url = new URL(path, site.siteUrl).toString();

  return {
    metadataBase: new URL(site.siteUrl),
    title,
    description,
    keywords: [
      "उज्जैन पूजा",
      "Ujjain Puja",
      "Pandit Sonu Guru",
      "पंडित सोनू गुरु",
      "उज्जैन ज्योतिष",
      ...keywords
    ],
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.nameHindi,
      locale: "hi_IN",
      type: "website",
      images: [
        {
          url: "/images/optimized/pandit-sonu-guru-card-front.webp",
          width: 1200,
          height: 900,
          alt: "पं. सोनू गुरु उज्जैन"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/optimized/pandit-sonu-guru-card-front.webp"]
    }
  };
}

export function jsonLd(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c")
  };
}
