
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import gsap from "gsap";

import { site } from "@/data/site";
import { pujaServices } from "@/data/pujaServices";
import { jyotishServices } from "@/data/jyotishServices";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const header = headerRef.current;

    if (
      !header ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline
        .fromTo(
          header,
          { y: -16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            clearProps: "transform,opacity",
          },
        )
        .fromTo(
          ".navbar-brand",
          { opacity: 0, x: -8 },
          {
            opacity: 1,
            x: 0,
            duration: 0.38,
            clearProps: "transform,opacity",
          },
          "-=0.3",
        )
        .fromTo(
          ".navbar-item",
          { opacity: 0, y: -4 },
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            stagger: 0.04,
            clearProps: "transform,opacity",
          },
          "-=0.24",
        )
        .fromTo(
          ".navbar-booking",
          { opacity: 0, x: 6 },
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            clearProps: "transform,opacity",
          },
          "-=0.18",
        );
    }, header);

    return () => ctx.revert();
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) => {
    const active = isActive(href);

    return [
      "navbar-top-link group relative inline-flex items-center",
      "whitespace-nowrap rounded-full px-3 py-2.5",
      "text-[12px] font-semibold tracking-[0.005em]",
      "outline-none transition-colors duration-200",
      "focus-visible:ring-2 focus-visible:ring-[#D9363E]",
      "focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDFC]",
      active
        ? "navbar-top-link-active text-[#B91C2C]"
        : "text-[#242124] hover:text-[#B91C2C]",
    ].join(" ");
  };

  const underlineClass = (href: string) => {
    const active = isActive(href);

    return [
      "absolute bottom-1 left-3 right-3 h-[2px]",
      "origin-left rounded-full bg-[#B91C2C]",
      "transition-transform duration-300",
      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
    ].join(" ");
  };

  return (
    <header
      ref={headerRef}
      className="
        navbar-shell sticky top-[78px] z-50
        mx-auto w-[calc(100%-20px)] max-w-[1380px]
        rounded-2xl border border-[#F1C9CD]
        bg-[#FFFDFC]/95 px-3 py-3
        shadow-[0_8px_32px_rgba(143,23,37,0.08)]
        backdrop-blur-2xl
        transition-shadow duration-300
        hover:shadow-[0_12px_38px_rgba(143,23,37,0.12)]
        sm:top-4 sm:w-[calc(100%-36px)]
        sm:rounded-full sm:px-5
        lg:top-5 lg:px-6
      "
    >
      {/* Subtle sacred accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-10 top-0
          h-px bg-gradient-to-r from-transparent
          via-[#D9363E]/80 to-transparent
        "
      />

      <div className="relative flex min-h-11 items-center justify-between gap-3">
        {/* Brand */}
        <Link
          href="/"
          aria-label={`${site.nameHindi} - होम`}
          className="
            navbar-brand group flex min-w-0 shrink items-center gap-2.5
            rounded-full outline-none
            focus-visible:ring-2 focus-visible:ring-[#B91C2C]
            focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDFC]
            sm:gap-3
          "
        >
          {/* Om emblem */}
          <span
            className="
              relative grid h-10 w-10 shrink-0 place-items-center
              rounded-full border border-[#D9363E]/80
              bg-[#B91C2C] text-[25px] leading-none text-white
              shadow-[0_4px_12px_rgba(143,23,37,0.12)]
              transition-all duration-300
              group-hover:-rotate-6
              group-hover:shadow-[0_6px_18px_rgba(143,23,37,0.2)]
              sm:h-11 sm:w-11
            "
          >
            <span
              aria-hidden="true"
              className="absolute inset-[4px] rounded-full border border-white/30"
            />
            <span className="relative font-serif">ॐ</span>
            <span
              aria-hidden="true"
              className="
                absolute -right-0.5 -top-0.5 h-2.5 w-2.5
                rounded-full border-2 border-[#FFFDFC] bg-[#D9363E]
              "
            />
          </span>

          {/* Brand text */}
          <span className="min-w-0">
            <span
              className="
                serif block max-w-[190px] truncate
                text-[14px] font-bold leading-tight
                tracking-[-0.025em] text-[#8F1725]
                transition-colors duration-200
                group-hover:text-[#B91C2C]
                sm:max-w-[240px] sm:text-[17px]
              "
            >
              {site.nameHindi}
            </span>

            <span
              className="
                mt-1 flex items-center gap-1.5 truncate
                text-[9px] font-medium tracking-wide text-[#686168]
                sm:text-[10px]
              "
            >
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-[#B91C2C]"
              />
              <span className="truncate">{site.location}</span>
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="मुख्य नेविगेशन"
          className="hidden items-center gap-0.5 xl:flex"
        >
          <Link href="/" className={navLinkClass("/")}>
            होम
            <span aria-hidden="true" className={underlineClass("/")} />
          </Link>

          <Link href="/about" className={navLinkClass("/about")}>
            पंडित जी के बारे में
            <span aria-hidden="true" className={underlineClass("/about")} />
          </Link>

          <div className="navbar-item">
            <MegaMenu
              label="पूजा एवं अनुष्ठान"
              href="/puja"
              items={pujaServices}
            />
          </div>

          <div className="navbar-item">
            <MegaMenu
              label="ज्योतिष सेवाएँ"
              href="/jyotish"
              items={jyotishServices}
            />
          </div>

          <Link href="/gallery" className={navLinkClass("/gallery")}>
            गैलरी
            <span aria-hidden="true" className={underlineClass("/gallery")} />
          </Link>

          <Link href="/online-puja" className={navLinkClass("/online-puja")}>
            ऑनलाइन पूजा
            <span
              aria-hidden="true"
              className={underlineClass("/online-puja")}
            />
          </Link>

          <Link href="/contact" className={navLinkClass("/contact")}>
            संपर्क
            <span aria-hidden="true" className={underlineClass("/contact")} />
          </Link>
        </nav>

        {/* Booking CTA */}
        <Link
          href="/booking"
          className="
            navbar-booking group hidden shrink-0 items-center gap-2
            rounded-full border border-[#B91C2C]
            bg-[#B91C2C] px-4 py-3
            text-[12px] font-bold text-white
            shadow-[0_4px_12px_rgba(143,23,37,0.12)]
            outline-none transition-all duration-300
            hover:-translate-y-0.5 hover:border-[#8F1725]
            hover:bg-[#8F1725]
            hover:shadow-[0_7px_18px_rgba(143,23,37,0.18)]
            focus-visible:ring-2 focus-visible:ring-[#D9363E]
            focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDFC]
            xl:inline-flex
          "
        >
          <CalendarDays
            size={15}
            strokeWidth={1.8}
            aria-hidden="true"
            className="text-[#FFF1F2]"
          />

          <span>पूजा बुक करें</span>

          <ArrowUpRight
            size={14}
            aria-hidden="true"
            className="
              transition-transform duration-200
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </Link>

        {/* Mobile navigation */}
        <div className="shrink-0 xl:hidden">
          <MobileNav key={pathname} />
        </div>
      </div>
    </header>
  );
}
