"use client";

import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function GoogleTranslate() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [ready, setReady] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptAdded = useRef(false);

  useEffect(() => {
    // Inject styles to hide Google's UI chrome (toolbar, banner, tooltip)
    if (!document.getElementById("gt-hide-ui")) {
      const style = document.createElement("style");
      style.id = "gt-hide-ui";
      style.textContent = `
        /* Hide Google Translate banner & toolbar completely */
        .goog-te-banner-frame { display: none !important; }
        .goog-te-balloon-frame { display: none !important; }
        .skiptranslate > iframe { display: none !important; }
        body { top: 0px !important; }

        /* Hide tooltip */
        #goog-gt-tt,
        .goog-tooltip,
        .goog-tooltip:hover { display: none !important; }

        /* Suppress text highlight that Google adds */
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Load the Google Translate script only once
    if (scriptAdded.current) return;
    scriptAdded.current = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "hi",
          includedLanguages: "en",
          autoDisplay: false,
        },
        "gt-widget-container"
      );
      // Give the widget a moment to render its <select>
      setTimeout(() => setReady(true), 800);
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const getSelect = (): HTMLSelectElement | null =>
    document.querySelector("#gt-widget-container select") as HTMLSelectElement | null;

  const handleToggle = () => {
    if (!ready) return;

    if (isEnglish) {
      // Revert: set back to original Hindi
      const select = getSelect();
      if (select) {
        select.value = "";
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
      setIsEnglish(false);
    } else {
      // Translate to English
      const select = getSelect();
      if (select) {
        select.value = "en";
        select.dispatchEvent(new Event("change", { bubbles: true }));
        setIsEnglish(true);
      }
    }
  };

  return (
    <>
      {/* Hidden Google Translate widget container */}
      <div
        id="gt-widget-container"
        ref={widgetRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          height: 0,
          width: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      />

      {/* Visible toggle button */}
      <button
        onClick={handleToggle}
        disabled={!ready}
        aria-label={isEnglish ? "हिंदी में देखें" : "Translate to English"}
        title={isEnglish ? "हिंदी में देखें" : "Translate to English"}
        className={[
          "navbar-item notranslate group flex shrink-0 items-center gap-1.5",
          "rounded-full border px-3 py-2",
          "text-[11px] font-semibold tracking-wide",
          "outline-none transition-all duration-200",
          "focus-visible:ring-2 focus-visible:ring-[#D9363E]",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDFC]",
          isEnglish
            ? "border-[#B91C2C] bg-[#B91C2C] text-white"
            : "border-[#F1C9CD] bg-white/70 text-[#8F1725] hover:border-[#B91C2C] hover:bg-[#FFF1F2]",
          !ready ? "cursor-wait opacity-60" : "cursor-pointer",
        ].join(" ")}
      >
        <Languages
          size={13}
          strokeWidth={2}
          aria-hidden="true"
          className={isEnglish ? "text-white" : "text-[#B91C2C]"}
        />
        <span className="notranslate">
          {!ready ? "..." : isEnglish ? "हिंदी" : "English"}
        </span>
      </button>
    </>
  );
}
