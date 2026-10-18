"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HomeVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoCardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const source = video?.querySelector("source");
    if (!video || !source) return;

    const loadVideo = () => {
      if (!source.src) {
        source.src = source.dataset.src ?? "";
        video.load();
      }
    };

    if (!("IntersectionObserver" in window)) {
      loadVideo();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadVideo();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const context = gsap.context(() => {
      const section = sectionRef.current;
      const card = videoCardRef.current;
      const glow = glowRef.current;

      if (!section || !card || !glow) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(card, {
        autoAlpha: reduceMotion ? 1 : 0,
        scale: reduceMotion ? 1 : 0.78,
        y: reduceMotion ? 0 : 65,
        rotateX: reduceMotion ? 0 : 10,
        transformPerspective: 1400,
        transformOrigin: "center center",
      });

      gsap.set(glow, {
        autoAlpha: 0,
        scale: 0.8,
      });

      const reveal = () => {
        if (reduceMotion) {
          gsap.set(card, { autoAlpha: 1, scale: 1, y: 0, rotateX: 0 });
          return;
        }

        gsap.to(card, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 1.1,
          ease: "power4.out",
          overwrite: "auto",
        });

        gsap.to(glow, {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const observer =
        "IntersectionObserver" in window
          ? new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  reveal();
                  observer?.disconnect();
                }
              },
              { threshold: 0.15 }
            )
          : null;

      if (observer) {
        observer.observe(section);
      } else {
        reveal();
      }

      const handlePointerMove = (event: PointerEvent) => {
        if (reduceMotion) return;

        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        gsap.to(card, {
          rotateY: (x - 0.5) * 9,
          rotateX: (0.5 - y) * 9,
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(glow, {
          x: (x - 0.5) * 24,
          y: (y - 0.5) * 24,
          duration: 0.55,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handlePointerLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.65,
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.to(glow, {
          x: 0,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const finePointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;

      if (finePointer && !reduceMotion) {
        card.addEventListener("pointermove", handlePointerMove);
        card.addEventListener("pointerleave", handlePointerLeave);
      }

      cleanup = () => {
        observer?.disconnect();
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
        gsap.killTweensOf(card);
        gsap.killTweensOf(glow);
      };
    }, sectionRef);

    return () => {
      cleanup?.();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="पूजा का वीडियो"
      className="relative isolate overflow-hidden bg-white px-4 py-8 sm:py-12 lg:py-16"
      style={{ perspective: "1400px" }}
    >
      <div className="flex min-h-[75vh] items-center justify-center sm:min-h-[85vh]">
        <div className="relative w-[94%] max-w-[620px]">
          {/* Soft ambient glow */}
          <div
            ref={glowRef}
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[#F1C9CD] via-[#FFF1F2] to-[#F1C9CD] opacity-70 blur-3xl sm:-inset-10"
          />

          {/* Main video */}
          <div
            ref={videoCardRef}
            className="relative overflow-hidden rounded-2xl bg-[#FFFDFC] shadow-[0_30px_90px_rgba(74,37,23,0.20)] ring-1 ring-black/[0.05] sm:rounded-[2rem]"
          >
            <video
              ref={videoRef}
              aria-label="पंडित जी द्वारा पूजा"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/images/optimized/pooja-panfit.webp"
              className="block aspect-[9/16] w-full object-cover"
            >
              <source
                data-src="/images/pandit-pooja.mp4"
                type="video/mp4"
              />
            </video>

            {/* Subtle cinematic highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.10]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}