import type { MetadataRoute } from "next";
import { pujaServices } from "@/data/pujaServices";
import { jyotishServices } from "@/data/jyotishServices";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = ["", "/about", "/puja", "/jyotish", "/gallery", "/online-puja", "/booking", "/contact"];
  const serviceRoutes = [...pujaServices, ...jyotishServices].map((service) => service.route);

  return [...base, ...serviceRoutes].map((path) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date("2026-10-08"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
