import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { jyotishServices } from "@/data/jyotishServices";
import { media } from "@/data/media";
import { createMetadata } from "@/utils/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jyotishServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = jyotishServices.find((item) => item.slug === slug);
  if (!service) {
    return {
      title: "पेज नहीं मिला | पं. सोनू गुरु",
      robots: {
        index: false,
        follow: true
      }
    };
  }
  return createMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: service.route,
    keywords: [service.title, `${service.title} उज्जैन`],
  });
}

export default async function JyotishDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = jyotishServices.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        label="ज्योतिष सेवा"
        title={service.title}
        description={service.description}
        image={service.image ?? media.cardServices}
        crumbs={[
          { label: "ज्योतिष", href: "/jyotish" },
          { label: service.title, href: service.route },
        ]}
      />
      <ServiceDetail service={service} />
    </>
  );
}
