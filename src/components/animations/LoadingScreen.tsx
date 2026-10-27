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
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#031F1E] text-[#F8F3E4] transition-[opacity,transform,visibility] duration-[450ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        exiting
          ? "pointer-events-none -translate-y-3 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <style>{`
        @keyframes sacredLoaderReveal {
          from { opacity: 0; transform: translateY(18px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes yantraFloat {
          0%, 100% { transform: translateY(0) rotateX(5deg) rotateZ(-2deg); }
          50% { transform: translateY(-10px) rotateX(-5deg) rotateZ(2deg); }
        }

        @keyframes yantraSpin {
          from { transform: rotateZ(0deg) rotateX(62deg); }
          to { transform: rotateZ(360deg) rotateX(62deg); }
        }

        @keyframes yantraSpinReverse {
          from { transform: rotateZ(360deg) rotateY(65deg); }
          to { transform: rotateZ(0deg) rotateY(65deg); }
        }

        @keyframes yantraPulse {
          0%, 100% { transform: rotate(45deg) rotateX(20deg) rotateY(28deg) scale(0.88); filter: brightness(0.9); }
          50% { transform: rotate(45deg) rotateX(20deg) rotateY(28deg) scale(1.04); filter: brightness(1.25); }
        }

        @keyframes petalGlow {
          0%, 100% { opacity: 0.46; filter: brightness(0.9); }
          50% { opacity: 0.95; filter: brightness(1.28); }
        }

        @keyframes orbitDot {
          0% { transform: rotate(0deg) translateX(74px) scale(0.7); opacity: 0.25; }
          50% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(74px) scale(0.7); opacity: 0.25; }
        }

        @keyframes shimmerLine {
          0% { transform: translateX(-105%); }
          100% { transform: translateX(105%); }
        }

        .sacred-loader__content {
          animation: sacredLoaderReveal 850ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .yantra-stage {
          position: relative;
          height: 13rem;
          width: 13rem;
          perspective: 780px;
        }

        .yantra-sculpture {
          position: absolute;
          inset: 1.55rem;
          transform-style: preserve-3d;
          animation: yantraFloat 4.2s ease-in-out infinite;
        }

        .yantra-halo {
          position: absolute;
          inset: 1rem;
          border: 1px solid rgba(240, 211, 138, 0.42);
          border-radius: 9999px;
          box-shadow: 0 0 30px rgba(24, 114, 110, 0.24), inset 0 0 26px rgba(240, 211, 138, 0.08);
          transform-style: preserve-3d;
          animation: yantraSpin 9s linear infinite;
        }

        .yantra-halo--reverse {
          inset: 1.9rem;
          border-color: rgba(240, 211, 138, 0.28);
          animation: yantraSpinReverse 7s linear infinite;
        }

        .yantra-petal {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 5.5rem;
          width: 2.7rem;
          margin: -2.75rem -1.35rem;
          border: 1px solid rgba(246, 238, 215, 0.58);
          border-radius: 58% 58% 44% 44%;
          background: linear-gradient(145deg, rgba(246, 238, 215, 0.82), rgba(224, 187, 90, 0.46) 40%, rgba(7, 59, 58, 0.82));
          box-shadow: 0 0 15px rgba(224, 187, 90, 0.22);
          transform-origin: 50% 86%;
          transform-style: preserve-3d;
          animation: petalGlow 2.8s ease-in-out infinite;
        }

        .yantra-petal--one { transform: rotateZ(0deg) translateY(-2.45rem) rotateX(52deg); }
        .yantra-petal--two { transform: rotateZ(45deg) translateY(-2.45rem) rotateX(52deg); animation-delay: -0.35s; }
        .yantra-petal--three { transform: rotateZ(90deg) translateY(-2.45rem) rotateX(52deg); animation-delay: -0.7s; }
        .yantra-petal--four { transform: rotateZ(135deg) translateY(-2.45rem) rotateX(52deg); animation-delay: -1.05s; }
        .yantra-petal--five { transform: rotateZ(180deg) translateY(-2.45rem) rotateX(52deg); animation-delay: -1.4s; }
        .yantra-petal--six { transform: rotateZ(225deg) translateY(-2.45rem) rotateX(52deg); animation-delay: -1.75s; }
        .yantra-petal--seven { transform: rotateZ(270deg) translateY(-2.45rem) rotateX(52deg); animation-delay: -2.1s; }
        .yantra-petal--eight { transform: rotateZ(315deg) translateY(-2.45rem) rotateX(52deg); animation-delay: -2.45s; }

        .yantra-core {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 4.1rem;
          width: 4.1rem;
          margin: -2.05rem;
          border: 1px solid rgba(246, 238, 215, 0.86);
          border-radius: 1.15rem;
          background: conic-gradient(from 135deg, #f0d38a, #18726e, #073b3a, #c9a227, #f0d38a);
          box-shadow: 0 0 18px rgba(224, 187, 90, 0.5), 0 0 48px rgba(15, 92, 90, 0.3);
          transform-style: preserve-3d;
          animation: yantraPulse 2.5s ease-in-out infinite;
        }

        .yantra-core::after {
          content: "";
          position: absolute;
          inset: 0.45rem;
          border: 1px solid rgba(246, 238, 215, 0.5);
          border-radius: 0.75rem;
          background: rgba(7, 59, 58, 0.22);
        }

        .yantra-mark {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 1;
          color: #f6eed7;
          font-family: var(--font-devanagari-serif), serif;
          font-size: 2.1rem;
          line-height: 1;
          text-shadow: 0 0 12px rgba(240, 211, 138, 0.9);
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        .yantra-orbit-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 0.38rem;
          width: 0.38rem;
          margin: -0.19rem;
          border-radius: 9999px;
          background: #f0d38a;
          box-shadow: 0 0 10px rgba(240, 211, 138, 0.95);
          animation: orbitDot 3.8s linear infinite;
        }

        .yantra-orbit-dot--two { animation-duration: 5.2s; animation-delay: -1.3s; background: #e0bb5a; }
        .yantra-orbit-dot--three { animation-duration: 4.5s; animation-delay: -2.8s; background: #56aaa0; }

        .sacred-loader__progress-shine {
          animation: shimmerLine 1.1s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sacred-loader__content,
          .yantra-sculpture,
          .yantra-halo,
          .yantra-petal,
          .yantra-core,
          .yantra-orbit-dot,
          .sacred-loader__progress-shine { animation-duration: 0.01ms !important; }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(24,114,110,0.34)_0%,rgba(3,31,30,0.2)_30%,rgba(3,31,30,1)_72%)]" />
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#0F5C5A]/20 blur-3xl" />
        <div className="absolute -right-28 bottom-1/4 h-80 w-80 rounded-full bg-[#E0BB5A]/10 blur-3xl" />
        <div className="absolute inset-5 border border-[#F0D38A]/10 sm:inset-8" />
        <div className="absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-[#F0D38A]/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-40 w-px -translate-x-1/2 bg-gradient-to-t from-[#F0D38A]/30 to-transparent" />
      </div>

      <div className="sacred-loader__content relative z-10 flex w-full flex-col items-center px-6 text-center">
        <div className="mb-7 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.42em] text-[#F0D38A] sm:text-[10px]">
          <span className="h-px w-7 bg-[#F0D38A]/60" />
          <span>SONU PANDIT</span>
          <span className="h-px w-7 bg-[#F0D38A]/60" />
        </div>

        <div className="relative grid h-72 w-72 place-items-center sm:h-80 sm:w-80" aria-hidden="true">
          <div className="absolute inset-1 rounded-full border border-[#F0D38A]/10" />
          <div className="absolute inset-5 rounded-full border border-dashed border-[#F0D38A]/15" />
          <div className="yantra-stage">
            <div className="yantra-halo" />
            <div className="yantra-halo yantra-halo--reverse" />
            <div className="yantra-sculpture">
              <span className="yantra-petal yantra-petal--one" />
              <span className="yantra-petal yantra-petal--two" />
              <span className="yantra-petal yantra-petal--three" />
              <span className="yantra-petal yantra-petal--four" />
              <span className="yantra-petal yantra-petal--five" />
              <span className="yantra-petal yantra-petal--six" />
              <span className="yantra-petal yantra-petal--seven" />
              <span className="yantra-petal yantra-petal--eight" />
              <span className="yantra-core">
                <span className="yantra-mark">ॐ</span>
              </span>
            </div>
            <span className="yantra-orbit-dot" />
            <span className="yantra-orbit-dot yantra-orbit-dot--two" />
            <span className="yantra-orbit-dot yantra-orbit-dot--three" />
          </div>
        </div>

        <div className="mt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#F0D38A] sm:text-[11px]">
            A Sacred Experience
          </p>
          <p className="mt-4 font-serif text-3xl font-medium tracking-wide text-[#F6EED7] sm:text-4xl">
            मंगल पूजा
          </p>
          <p className="mt-3 text-[11px] tracking-[0.2em] text-[#A8C7BC] sm:text-xs">
            श्रद्धा • शांति • शुभारंभ
          </p>
        </div>

        <div className="mt-8 w-48 sm:w-52">
          <div className="relative h-[3px] overflow-hidden rounded-full bg-[#F0D38A]/15">
            <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-[#073B3A] via-[#F0D38A] to-[#18726E]" />
            <div className="sacred-loader__progress-shine absolute inset-y-0 left-0 w-1/3 bg-white/80 blur-[1px]" />
          </div>
          <p className="mt-3 text-[9px] font-medium tracking-[0.3em] text-[#A8C7BC]">
            ENTERING THE SACRED SPACE
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-4 text-center">
        <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#A8C7BC]">
          Made with devotion
        </p>
      </div>
    </div>
  );
}
