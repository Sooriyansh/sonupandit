
"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Home,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

import { pujaServices } from "@/data/pujaServices";
import { jyotishServices } from "@/data/jyotishServices";
import { site } from "@/data/site";

const subscribeToNothing = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const mainLinks = [
  { label: "होम", href: "/", icon: Home },
  { label: "पंडित जी के बारे में", href: "/about" },
  { label: "गैलरी", href: "/gallery" },
  { label: "ऑनलाइन पूजा", href: "/online-puja" },
  { label: "बुकिंग", href: "/booking" },
  { label: "संपर्क", href: "/contact" },
];

const bottomLinks = [
  { label: "होम", href: "/", icon: Home },
  { label: "पूजा", href: "/puja", icon: Sparkles },
  { label: "ज्योतिष", href: "/jyotish", icon: BookOpen },
  { label: "बुकिंग", href: "/booking", icon: CalendarDays },
  { label: "संपर्क", href: "/contact", icon: Phone },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [pujaOpen, setPujaOpen] = useState(false);
  const [jyotishOpen, setJyotishOpen] = useState(false);
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    getClientSnapshot,
    getServerSnapshot,
  );

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  const generatedId = useId();
  const pujaPanelId = `mobile-puja-${generatedId.replace(/:/g, "")}`;
  const jyotishPanelId = `mobile-jyotish-${generatedId.replace(/:/g, "")}`;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Mobile menu trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="मेनू खोलें"
        aria-expanded={open}
        className="
          group grid h-11 w-11 place-items-center
          rounded-full border border-[#F1C9CD]
          bg-[#FFFDFC] text-[#B91C2C]
          outline-none transition-all duration-200
          hover:border-[#D9363E] hover:bg-[#FFF1F2]
          focus-visible:ring-2 focus-visible:ring-[#B91C2C]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#FFFDFC]
          xl:hidden
        "
      >
        <Menu
          size={21}
          strokeWidth={1.8}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:scale-105"
        />
      </button>

      {/* Slide-in drawer */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[78px] z-[100] xl:hidden">
          <button
            type="button"
            aria-label="मेनू बंद करें"
            onClick={closeMenu}
            className="
              absolute inset-0 h-full w-full
              bg-[#8F1725]/55 backdrop-blur-[3px]
              animate-[fadeIn_200ms_ease-out]
            "
          />

          <aside
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="मुख्य नेविगेशन"
            className="
              absolute right-0 top-0 flex h-full
              w-[min(90vw,400px)] flex-col
              border-l border-[#D9363E]/35
              bg-[#FFFDFC]
              shadow-[-20px_0_70px_rgba(143,23,37,0.2)]
              animate-[slideInRight_280ms_cubic-bezier(0.22,1,0.36,1)]
            "
          >
            {/* Drawer header */}
            <div className="relative shrink-0 overflow-hidden bg-[#8F1725] px-5 pb-6 pt-6 text-[#FFFDFC]">
              <div
                aria-hidden="true"
                className="
                  absolute -right-12 -top-14 h-40 w-40
                  rounded-full border border-[#D9363E]/20
                "
              />
              <div
                aria-hidden="true"
                className="
                  absolute -right-5 -top-7 h-28 w-28
                  rounded-full border border-[#D9363E]/20
                "
              />

              <div className="relative flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D9363E]">
                    <Sparkles size={12} aria-hidden="true" />
                    Sacred Services · Ujjain
                  </p>

                  <p className="serif text-2xl font-bold leading-tight">
                    {site.nameHindi}
                  </p>

                  <p className="mt-1.5 text-xs font-medium text-[#D9363E]">
                    {site.role}
                  </p>
                </div>

                <button
                  ref={closeRef}
                  type="button"
                  onClick={closeMenu}
                  aria-label="मेनू बंद करें"
                  className="
                    relative grid h-10 w-10 shrink-0 place-items-center
                    rounded-full border border-white/15 bg-white/5
                    text-white outline-none transition-colors
                    hover:border-[#D9363E]/60 hover:bg-white/10
                    focus-visible:ring-2 focus-visible:ring-[#D9363E]
                  "
                >
                  <X size={19} aria-hidden="true" />
                </button>
              </div>

              <div className="relative mt-5 flex items-center gap-2">
                <span className="h-px w-8 bg-[#D9363E]" />
                <span className="text-[10px] tracking-[0.12em] text-[#D9363E]">
                  हर पूजा, श्रद्धा के साथ
                </span>
              </div>
            </div>

            {/* Scrollable navigation */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5">
              <p className="mb-3 px-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#686168]">
                मुख्य मेनू
              </p>

              <nav aria-label="मुख्य मेनू" className="grid gap-1">
                {mainLinks.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      href={item.href}
                      key={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={`
                        group relative flex items-center justify-between
                        gap-3 rounded-xl px-3 py-3
                        transition-colors duration-200
                        ${
                          active
                            ? "bg-[#FFF1F2] text-[#B91C2C]"
                            : "text-[#242124] hover:bg-[#FFF1F2]"
                        }
                      `}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={`
                            grid h-9 w-9 shrink-0 place-items-center
                            rounded-lg transition-colors duration-200
                            ${
                              active
                                ? "bg-[#B91C2C] text-white"
                                : "bg-white text-[#686168] group-hover:bg-[#B91C2C] group-hover:text-white"
                            }
                          `}
                        >
                          {Icon ? (
                            <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                          ) : (
                            <span className="text-xs font-bold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          )}
                        </span>

                        <span className="text-sm font-bold">{item.label}</span>
                      </span>

                      {active ? (
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B91C2C]"
                        />
                      ) : (
                        <ArrowRight
                          size={14}
                          aria-hidden="true"
                          className="
                            shrink-0 text-[#B91C2C] opacity-0
                            transition-all duration-200
                            group-hover:translate-x-0.5 group-hover:opacity-100
                          "
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Puja services */}
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => setPujaOpen((value) => !value)}
                  aria-expanded={pujaOpen}
                  aria-controls={pujaPanelId}
                  className="
                    flex w-full items-center justify-between gap-3
                    rounded-xl border border-[#F1C9CD]
                    bg-white px-3 py-3 text-left
                    transition-colors hover:bg-[#FFF1F2]
                  "
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#FFF1F2] text-[#B91C2C]">
                      <Sparkles size={17} aria-hidden="true" />
                    </span>

                    <span>
                      <span className="block text-sm font-bold text-[#242124]">
                        पूजा एवं अनुष्ठान
                      </span>
                      <span className="mt-0.5 block text-[10px] text-[#686168]">
                        वैदिक पूजा सेवाएँ
                      </span>
                    </span>
                  </span>

                  <ChevronDown
                    size={17}
                    aria-hidden="true"
                    className={`shrink-0 text-[#686168] transition-transform duration-200 ${
                      pujaOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {pujaOpen && (
                  <div id={pujaPanelId} className="mt-2 grid gap-1 pl-3">
                    <Link
                      href="/puja"
                      onClick={closeMenu}
                      className="
                        flex items-center justify-between rounded-lg
                        px-3 py-2.5 text-xs font-bold text-[#B91C2C]
                        transition-colors hover:bg-[#FFF1F2]
                      "
                    >
                      सभी पूजा सेवाएँ
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>

                    {pujaServices.map((item) => (
                      <Link
                        href={item.route}
                        key={item.slug}
                        onClick={closeMenu}
                        className={`
                          rounded-r-lg border-l-2 px-3 py-2.5 text-sm
                          transition-colors
                          ${
                            isActivePath(pathname, item.route)
                              ? "border-[#B91C2C] bg-[#FFF1F2] font-bold text-[#B91C2C]"
                              : "border-[#F1C9CD] text-[#686168] hover:border-[#B91C2C] hover:bg-[#FFF1F2] hover:text-[#B91C2C]"
                          }
                        `}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Jyotish services */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setJyotishOpen((value) => !value)}
                  aria-expanded={jyotishOpen}
                  aria-controls={jyotishPanelId}
                  className="
                    flex w-full items-center justify-between gap-3
                    rounded-xl border border-[#F1C9CD]
                    bg-white px-3 py-3 text-left
                    transition-colors hover:bg-[#FFF1F2]
                  "
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#FFF1F2] text-[#B91C2C]">
                      <BookOpen size={17} aria-hidden="true" />
                    </span>

                    <span>
                      <span className="block text-sm font-bold text-[#242124]">
                        ज्योतिष सेवाएँ
                      </span>
                      <span className="mt-0.5 block text-[10px] text-[#686168]">
                        ज्योतिष एवं मार्गदर्शन
                      </span>
                    </span>
                  </span>

                  <ChevronDown
                    size={17}
                    aria-hidden="true"
                    className={`shrink-0 text-[#686168] transition-transform duration-200 ${
                      jyotishOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {jyotishOpen && (
                  <div id={jyotishPanelId} className="mt-2 grid gap-1 pl-3">
                    <Link
                      href="/jyotish"
                      onClick={closeMenu}
                      className="
                        flex items-center justify-between rounded-lg
                        px-3 py-2.5 text-xs font-bold text-[#B91C2C]
                        transition-colors hover:bg-[#FFF1F2]
                      "
                    >
                      सभी ज्योतिष सेवाएँ
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>

                    {jyotishServices.map((item) => (
                      <Link
                        href={item.route}
                        key={item.slug}
                        onClick={closeMenu}
                        className={`
                          rounded-r-lg border-l-2 px-3 py-2.5 text-sm
                          transition-colors
                          ${
                            isActivePath(pathname, item.route)
                              ? "border-[#B91C2C] bg-[#FFF1F2] font-bold text-[#B91C2C]"
                              : "border-[#F1C9CD] text-[#686168] hover:border-[#B91C2C] hover:bg-[#FFF1F2] hover:text-[#B91C2C]"
                          }
                        `}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Booking CTA */}
              <Link
                href="/booking"
                onClick={closeMenu}
                className="
                  mt-7 flex items-center justify-between gap-3
                  rounded-xl bg-[#B91C2C] px-4 py-4
                  text-[#FFFDFC] shadow-[0_8px_20px_rgba(143,23,37,0.12)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:bg-[#8F1725]
                "
              >
                <span className="flex items-center gap-3">
                  <CalendarDays
                    size={20}
                    aria-hidden="true"
                    className="text-[#FFF1F2]"
                  />
                  <span>
                    <span className="block text-sm font-bold">
                      पूजा बुक करें
                    </span>
                    <span className="mt-1 block text-[10px] text-white/80">
                      अपनी बुकिंग शुरू करें
                    </span>
                  </span>
                </span>

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="text-[#FFF1F2]"
                />
              </Link>
            </div>

            {/* Drawer bottom */}
            <div className="shrink-0 border-t border-[#F1C9CD] bg-[#FFF1F2]/70 px-5 py-3">
              <p className="text-center text-[10px] font-medium tracking-wide text-[#686168]">
                उज्जैन · श्रद्धा · वैदिक परंपरा
              </p>
            </div>
          </aside>
        </div>
      )}

      {mounted &&
        createPortal(
          <>
            {/* Fixed bottom navigation */}
            <nav
              aria-label="क्विक नेविगेशन"
              className="
                fixed z-40 grid grid-cols-5 gap-1
                rounded-[22px] border border-[#F1C9CD]
                bg-[#FFFDFC]/95 px-2 py-2
                shadow-[0_8px_35px_rgba(143,23,37,0.12)]
                backdrop-blur-xl
                xl:hidden
              "
              style={{
                left: "0.5rem",
                right: "0.5rem",
                top: "auto",
                bottom: "calc(env(safe-area-inset-bottom) + 0.5rem)",
              }}
            >
              {bottomLinks.map((item) => {
                const active = isActivePath(pathname, item.href);
                const Icon = item.icon;

                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`
                      relative flex min-w-0 flex-col items-center
                      justify-center gap-1 rounded-xl px-0.5 py-1.5
                      transition-colors duration-200
                      ${
                        active
                          ? "text-[#B91C2C]"
                          : "text-[#686168] hover:text-[#B91C2C]"
                      }
                    `}
                  >
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute -top-2 h-[2px] w-7 rounded-full bg-[#B91C2C]"
                      />
                    )}

                    <Icon
                      size={19}
                      strokeWidth={active ? 2.2 : 1.7}
                      aria-hidden="true"
                    />

                    <span className="truncate text-[10px] font-bold">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* WhatsApp floating action */}
            <Link
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp पर संपर्क करें"
              className="
                fixed bottom-[5.5rem] right-4 z-40
                grid h-[52px] w-[52px] place-items-center
                rounded-full border-2 border-white/80
                bg-[#168A50] text-white
                shadow-[0_8px_28px_rgba(22,138,80,0.3)]
                transition-transform duration-200
                hover:scale-105 active:scale-95
                xl:hidden
              "
            >
              <MessageCircle size={23} strokeWidth={1.9} aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#168A50]/20 motion-reduce:animate-none"
              />
            </Link>
          </>,
          document.body,
        )}
    </>
  );
}
