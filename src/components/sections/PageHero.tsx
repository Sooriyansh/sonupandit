
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { media } from "@/data/media";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image?: string;
  crumbs?: Array<{ label: string; href: string }>;
};

export function PageHero({
  label,
  title,
  description,
  image = media.shiv,
  crumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FFFDFC] py-5 sm:py-8 lg:py-10">
      <div className="container-shell relative">
        <div className="grid overflow-hidden rounded-[18px] border border-[#F1C9CD] bg-white shadow-[0_16px_48px_rgba(143,23,37,0.08)] lg:min-h-100 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="interactive-media group relative min-h-55 overflow-hidden bg-[#FFF1F2] sm:min-h-75 lg:min-h-100">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#8F1725]/20 via-transparent to-transparent"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center px-6 py-7 sm:px-9 sm:py-9 lg:px-12 lg:py-12 xl:px-16">
            <nav
              className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium text-[#686168] sm:mb-8 sm:text-sm"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#B91C2C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C]"
              >
                <Home size={14} strokeWidth={1.8} />
                <span>होम</span>
              </Link>

              {crumbs.map((crumb) => (
                <span className="inline-flex items-center gap-2" key={crumb.href}>
                  <ChevronRight
                    size={14}
                    className="text-[#D9363E]"
                    aria-hidden="true"
                  />
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-[#B91C2C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C]"
                  >
                    {crumb.label}
                  </Link>
                </span>
              ))}
            </nav>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#D9363E] sm:w-12" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B91C2C] sm:text-xs sm:tracking-[0.3em]">
                {label}
              </p>
            </div>

            <h1 className="serif max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#8F1725] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#686168] sm:mt-5 sm:text-base sm:leading-8">
              {description}
            </p>

            <div
              aria-hidden="true"
              className="mt-7 flex items-center gap-3 sm:mt-8"
            >
              <span className="h-px w-10 bg-[#D9363E]/80" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B91C2C]" />
              <span className="h-px w-10 bg-[#F1C9CD]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
