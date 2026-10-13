
"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";

import type { ServiceItem } from "@/types/service";
import { getIcon } from "@/utils/icons";

type MegaMenuProps = {
  label: string;
  href: string;
  items: ServiceItem[];
};

export function MegaMenu({ label, href, items }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const generatedId = useId();
  const menuId = `mega-menu-${generatedId.replace(/:/g, "")}`;

  useEffect(() => {
    const root = rootRef.current;
    const menu = menuRef.current;

    if (!root || !menu) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(menu, {
          autoAlpha: open ? 1 : 0,
          y: 0,
          scale: 1,
          pointerEvents: open ? "auto" : "none",
        });

        return;
      }

      gsap.to(menu, {
        autoAlpha: open ? 1 : 0,
        y: open ? 0 : 8,
        scale: open ? 1 : 0.99,
        duration: open ? 0.26 : 0.18,
        ease: "power3.out",
        pointerEvents: open ? "auto" : "none",
        overwrite: true,
      });

      if (open) {
        gsap.fromTo(
          menu.querySelectorAll(".mega-item"),
          { opacity: 0, y: 7 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.035,
            duration: 0.22,
            ease: "power2.out",
            clearProps: "transform,opacity",
          },
        );
      }
    }, root);

    return () => ctx.revert();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handlePointerEnter = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setOpen(true);
    }
  };

  const handlePointerLeave = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null,
          )
        ) {
          setOpen(false);
        }
      }}
    >
      {/* Menu trigger */}
      <div className="flex items-center gap-0.5">
        <Link
          href={href}
          className="
            navbar-top-link inline-flex items-center rounded-full
            px-3 py-2.5 text-[12px] font-semibold
            text-[#242124] outline-none
            transition-colors duration-200
            hover:text-[#B91C2C]
            focus-visible:ring-2 focus-visible:ring-[#B91C2C]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#FFFDFC]
          "
        >
          {label}
        </Link>

        <button
          ref={triggerRef}
          type="button"
          aria-label={`${label} मेनू ${open ? "बंद करें" : "खोलें"}`}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          onClick={() => setOpen((current) => !current)}
          className="
            grid h-9 w-9 place-items-center rounded-full
            text-[#686168] outline-none
            transition-colors duration-200
            hover:bg-[#FFF1F2] hover:text-[#B91C2C]
            focus-visible:ring-2 focus-visible:ring-[#B91C2C]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#FFFDFC]
          "
        >
          <ChevronDown
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown panel */}
      <div
        id={menuId}
        ref={menuRef}
        aria-label={`${label} सेवाएँ`}
        aria-hidden={!open}
        className="
          invisible pointer-events-none absolute left-1/2 top-full z-50
          mt-3 w-[min(760px,calc(100vw-24px))]
          -translate-x-1/2 origin-top
          overflow-hidden rounded-2xl
          border border-[#F1C9CD]
          bg-[#FFFDFC]
          shadow-[0_24px_70px_rgba(143,23,37,0.16)]
        "
      >
        {/* Saffron and antique-gold accent */}
        <div
          aria-hidden="true"
          className="
            h-[3px] bg-gradient-to-r
            from-[#8F1725] via-[#B91C2C] to-[#D9363E]
          "
        />

        {/* Header */}
        <div
          className="
            flex items-center justify-between gap-4
            border-b border-[#F1C9CD]
            px-4 py-4 sm:px-6 sm:py-5
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="
                grid h-10 w-10 shrink-0 place-items-center
                rounded-xl border border-[#D9363E]/40
                bg-[#FFF1F2] text-[#B91C2C]
              "
            >
              <Sparkles
                size={19}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>

            <div className="min-w-0">
              <p
                className="
                  text-[9px] font-bold uppercase
                  tracking-[0.18em] text-[#686168]
                "
              >
                Sacred Services
              </p>

              <Link
                href={href}
                tabIndex={open ? 0 : -1}
                className="
                  serif mt-1 block truncate text-base font-bold
                  text-[#8F1725] transition-colors
                  hover:text-[#B91C2C]
                  sm:text-lg
                "
              >
                सभी {label}
              </Link>
            </div>
          </div>

          <Link
            href={href}
            tabIndex={open ? 0 : -1}
            className="
              inline-flex shrink-0 items-center gap-1.5
              rounded-full px-3 py-2
              text-xs font-bold text-[#B91C2C]
              transition-colors hover:bg-[#FFF1F2]
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#B91C2C]
            "
          >
            सभी देखें
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Service list */}
        <div
          className="
            max-h-[min(65vh,480px)] overflow-y-auto
            p-3 sm:p-4
          "
        >
          {items.length > 0 ? (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {items.map((item) => {
                const Icon = getIcon(item.icon);

                return (
                  <Link
                    href={item.route}
                    key={item.slug}
                    tabIndex={open ? 0 : -1}
                    className="
                      mega-item group relative flex min-w-0 gap-3
                      rounded-xl border border-transparent p-3
                      transition-all duration-200
                      hover:border-[#F1C9CD]
                      hover:bg-white
                      hover:shadow-[0_5px_18px_rgba(143,23,37,0.05)]
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-inset
                      focus-visible:ring-[#B91C2C]
                      sm:p-4
                    "
                  >
                    <span
                      className="
                        grid h-11 w-11 shrink-0 place-items-center
                        rounded-xl border border-[#F1C9CD]
                        bg-[#FFFDFC] text-[#B91C2C]
                        transition-all duration-200
                        group-hover:border-[#D9363E]/60
                        group-hover:bg-[#B91C2C]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className="
                          block break-words text-sm font-bold
                          leading-5 text-[#242124]
                          transition-colors
                          group-hover:text-[#B91C2C]
                        "
                      >
                        {item.title}
                      </span>

                      <span
                        className="
                          mt-1.5 line-clamp-2 block
                          text-xs leading-5 text-[#686168]
                        "
                      >
                        {item.shortDescription}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                      className="
                        mt-0.5 shrink-0 text-[#B91C2C]
                        opacity-0 transition-all duration-200
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="px-3 py-8 text-center text-sm text-[#686168]">
              अभी कोई सेवा उपलब्ध नहीं है।
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          className="
            flex items-center justify-between gap-3
            border-t border-[#F1C9CD]
            bg-[#FFF1F2]/60 px-4 py-3 sm:px-6
          "
        >
          <p className="text-[10px] leading-5 text-[#686168] sm:text-xs">
            वैदिक परंपरा · उज्जैन
          </p>

          <Link
            href="/booking"
            tabIndex={open ? 0 : -1}
            className="
              inline-flex shrink-0 items-center gap-1
              rounded-full px-3 py-2 text-xs font-bold
              text-[#B91C2C] transition-colors
              hover:bg-white hover:text-[#8F1725]
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#B91C2C]
            "
          >
            पूजा बुक करें
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
