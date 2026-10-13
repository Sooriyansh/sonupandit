import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { createMetadata, jsonLd } from "@/utils/seo";
import { site } from "@/data/site";

export const metadata: Metadata = createMetadata({
  title: "पं. सोनू गुरु | Ujjain Puja & Jyotish",
  description: "उज्जैन में पं. सोनू गुरु द्वारा वैदिक पूजा, अनुष्ठान, कालसर्प दोष पूजा, मंगल भात पूजन और ज्योतिष परामर्श।"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.nameHindi,
    alternateName: site.nameEnglish,
    telephone: [site.phonePrimary, site.phoneSecondary],
    email: site.email,
    address: site.location,
    url: site.siteUrl
  };

  return (
    <html lang="hi" data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localBusiness)} />
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
