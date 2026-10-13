
"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Ashish",
    location: "Ujjain",
    initials: "A",
    rating: 5,
    review:
      "पूजा की व्यवस्था और मार्गदर्शन का अनुभव साझा करने के लिए यहाँ वास्तविक रिव्यू जोड़ें।",
  },
  {
    name: "Neeraj Rajput",
    location: "मध्य प्रदेश",
    initials: "N",
    rating: 5,
    review:
      "यहाँ क्लाइंट का वास्तविक अनुभव जोड़ें, ताकि दूसरे श्रद्धालुओं को सही जानकारी मिल सके।",
  },
  {
    name: "Aman Mewada",
    location: "मध्य प्रदेश",
    initials: "A",
    rating: 5,
    review:
      "अपने पूजा अनुभव के बारे में क्लाइंट के वास्तविक शब्द यहाँ प्रदर्शित करें।",
  },
  {
    name: "Deepansh Patel",
    location: "मध्य प्रदेश",
    initials: "D",
    rating: 5,
    review:
      "यहाँ वास्तविक प्रतिक्रिया जोड़ें और श्रद्धालुओं के अनुभव को सरल तरीके से साझा करें।",
  },
];

type Review = (typeof reviews)[number];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group flex h-full w-72.5 shrink-0 flex-col rounded-2xl border border-[#F1C9CD] bg-white p-6 transition-colors duration-300 hover:border-[#D9363E] sm:w-82.5 sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div
          className="flex gap-1"
          aria-label={`${review.rating} star rating`}
        >
          {Array.from({ length: review.rating }, (_, index) => (
            <Star
              key={index}
              size={14}
              className="fill-[#D9363E] text-[#D9363E]"
              aria-hidden="true"
            />
          ))}
        </div>

        <Quote
          size={25}
          strokeWidth={1.5}
          className="text-[#D9363E]"
          aria-hidden="true"
        />
      </div>

      <p className="flex-1 text-sm leading-7 text-[#686168] sm:text-[15px]">
        {review.review}
      </p>

      <div className="mt-7 flex items-center gap-3 border-t border-[#F1C9CD] pt-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9363E]/50 bg-[#FFFDFC] font-serif text-lg font-semibold text-[#B91C2C]">
          {review.initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-[#242124]">
            {review.name}
          </h3>
          <p className="mt-1 text-xs text-[#686168]">{review.location}</p>
        </div>
      </div>
    </article>
  );
}

export function ClientReviews() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const sequence = sequenceRef.current;

    if (!viewport || !sequence) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frameId = 0;
    let previousTime = 0;
    let loopWidth = 0;

    const speed = 32;

    const measure = () => {
      loopWidth = sequence.getBoundingClientRect().width;
    };

    const animate = (time: number) => {
      if (!previousTime) previousTime = time;

      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      if (!pausedRef.current && loopWidth > 0) {
        viewport.scrollLeft += speed * delta;

        if (viewport.scrollLeft >= loopWidth) {
          viewport.scrollLeft -= loopWidth;
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      window.cancelAnimationFrame(frameId);
      previousTime = 0;
      measure();

      if (!reducedMotion.matches) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        window.cancelAnimationFrame(frameId);
      } else {
        start();
      }
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(sequence);

    start();
    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    pausedRef.current = true;

    viewport.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <section
      aria-labelledby="client-reviews-heading"
      className="relative overflow-hidden bg-[#FFFDFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#B91C2C] sm:text-xs">
              <span className="h-px w-7 bg-[#D9363E]" />
              श्रद्धालुओं के अनुभव
            </div>

            <h2
              id="client-reviews-heading"
              className="font-serif text-3xl font-semibold leading-tight tracking-tight text-[#242124] sm:text-4xl lg:text-5xl"
            >
              विश्वास की कहानियाँ,
              <span className="mt-1 block text-[#B91C2C]">
                श्रद्धा के अनुभव।
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#686168] sm:text-base sm:leading-8">
              पूजा और वैदिक अनुष्ठानों से जुड़े श्रद्धालुओं के
              अनुभवों को जानें।
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              onMouseEnter={() => (pausedRef.current = true)}
              onMouseLeave={resume}
              aria-label="पिछले रिव्यू देखें"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F1C9CD] bg-white text-[#8F1725] transition-colors hover:border-[#B91C2C] hover:bg-[#B91C2C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C]"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              onMouseEnter={() => (pausedRef.current = true)}
              onMouseLeave={resume}
              aria-label="अगले रिव्यू देखें"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F1C9CD] bg-white text-[#8F1725] transition-colors hover:border-[#B91C2C] hover:bg-[#B91C2C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={viewportRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={resume}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={resume}
          className="overflow-x-auto overscroll-x-contain pb-3 scrollbar-none [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="श्रद्धालुओं के रिव्यू"
          tabIndex={0}
        >
          <div className="flex w-max">
            <div
              ref={sequenceRef}
              className="flex shrink-0 items-stretch gap-5 pr-5 sm:gap-6 sm:pr-6"
              role="list"
            >
              {reviews.map((review, index) => (
                <div key={`${review.name}-${index}`} role="listitem">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            <div
              className="flex shrink-0 items-stretch gap-5 pr-5 sm:gap-6 sm:pr-6"
              aria-hidden="true"
            >
              {reviews.map((review, index) => (
                <div key={`duplicate-${index}`}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;
