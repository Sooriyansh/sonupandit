
"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 850);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1300);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="मंगल पूजा अनुभव तैयार हो रहा है"
      aria-live="polite"
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#FFFDFC] text-[#B91C2C] transition-[opacity,transform,visibility] duration-[450ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        exiting
          ? "pointer-events-none -translate-y-3 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,28,44,0.07)_0%,rgba(255,252,250,0)_56%)]" />

        <div className="absolute inset-5 border border-[#D9363E]/20 sm:inset-8" />
        <div className="absolute inset-7 border border-[#B91C2C]/[0.06] sm:inset-11" />

        <div className="absolute left-0 top-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9363E]/20 sm:h-64 sm:w-64" />
        <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/3 translate-y-1/3 rounded-full border border-[#B91C2C]/10 sm:h-80 sm:w-80" />

        <div className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-[#D9363E]/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-t from-[#D9363E]/40 to-transparent" />
      </div>

      <div
        className={`relative z-10 flex w-full flex-col items-center px-6 text-center ${
          exiting
            ? ""
            : "animate-[contentReveal_700ms_cubic-bezier(0.16,1,0.3,1)_both]"
        }`}
      >
        <div className="relative grid h-40 w-40 place-items-center sm:h-44 sm:w-44">
          <div className="absolute inset-0 rounded-full border border-[#D9363E]/50" />

          <div className="absolute inset-[7px] rounded-full border border-[#B91C2C]/15" />

          <div className="absolute inset-[14px] animate-[orbitSpin_12s_linear_infinite] rounded-full border border-transparent border-t-[#B91C2C]/80 border-r-[#D9363E]/60" />

          <div className="absolute inset-[25px] rounded-full border border-dashed border-[#D9363E]/65" />

          <div className="absolute inset-[34px] rounded-full bg-white shadow-[0_8px_36px_rgba(143,23,37,0.09)]" />

          <div className="absolute inset-[37px] rounded-full border border-[#D9363E]/35" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="animate-[omPulse_3s_ease-in-out_infinite] font-serif text-[4.5rem] leading-none text-[#B91C2C] sm:text-[5rem]">
              ॐ
            </span>
            <span className="mt-2 h-[2px] w-8 rounded-full bg-[#D9363E]" />
          </div>

          <div className="absolute inset-0 animate-[orbitSpin_5s_linear_infinite]">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FFFDFC] bg-[#D9363E] shadow-[0_0_12px_rgba(217,54,62,0.35)]" />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#D9363E] sm:text-[11px]">
            A Sacred Experience
          </p>

          <h1 className="mt-4 font-serif text-3xl font-medium tracking-wide text-[#B91C2C] sm:text-4xl">
            मंगल पूजा
          </h1>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#D9363E]/60" />
            <span className="text-[11px] text-[#D9363E]">✦</span>
            <span className="h-px w-9 bg-[#D9363E]/60" />
          </div>

          <p className="mt-3 text-[11px] tracking-[0.16em] text-[#686168] sm:text-xs">
            श्रद्धा • शांति • शुभारंभ
          </p>
        </div>
        <div className="mt-9 w-40 sm:w-44">
          <div className="relative h-[3px] overflow-hidden rounded-full bg-[#B91C2C]/10">
            <div className="absolute inset-y-0 left-0 w-full origin-left animate-[progressFill_1.1s_cubic-bezier(0.65,0,0.35,1)_both] rounded-full bg-gradient-to-r from-[#B91C2C] via-[#D9363E] to-[#B91C2C]" />
          </div>

          <p className="mt-3 text-[9px] font-medium tracking-[0.27em] text-[#686168]">
            PREPARING YOUR EXPERIENCE
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 px-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-5 bg-[#D9363E]/50" />
          <p className="text-[9px] font-medium tracking-[0.25em] text-[#686168]">
            MADE WITH DEVOTION
          </p>
          <span className="h-px w-5 bg-[#D9363E]/50" />
        </div>
      </div>


    </div>
  );
}
