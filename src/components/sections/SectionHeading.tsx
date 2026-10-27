
import { WordReveal } from "@/components/animations/WordReveal";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "section-heading mx-auto mb-10 w-full max-w-4xl sm:mb-12 lg:mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {/* Eyebrow label */}
      <div
        className={cn(
          "reveal mb-4 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-7 sm:w-10",
            light ? "bg-[#FFF1F2]" : "bg-[#B91C2C]/60"
          )}
        />

        <p
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.3em]",
            light ? "text-[#FFF1F2]" : "text-[#B91C2C]"
          )}
        >
          {label}
        </p>

        <span
          aria-hidden="true"
          className={cn(
            "h-px w-7 sm:w-10",
            align === "left" && "hidden",
            light ? "bg-[#FFF1F2]" : "bg-[#B91C2C]/60"
          )}
        />
      </div>

      {/* Main heading */}
      <WordReveal
        text={title}
        className={cn(
          "serif text-3xl font-bold leading-[1.25] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]",
          light ? "text-[#FFFDFC]" : "text-[#B91C2C]"
        )}
      />

      {/* Decorative ornament */}
      <div
        aria-hidden="true"
        className={cn(
          "reveal mt-5 flex items-center gap-2.5",
          align === "center" && "justify-center sm:mt-6"
        )}
      >
        <span
          className={cn(
            "h-px w-8 sm:w-12",
            light ? "bg-[#FFF1F2]/80" : "bg-[#D9363E]"
          )}
        />
        <span
          className={cn(
            "h-1.5 w-1.5 rotate-45",
            light ? "bg-[#FFF1F2]" : "bg-[#B91C2C]"
          )}
        />
        <span
          className={cn(
            "h-px w-8 sm:w-12",
            light ? "bg-[#FFF1F2]/45" : "bg-[#D9363E]/60"
          )}
        />
      </div>

      {/* Supporting description */}
      <p
        className={cn(
          "reveal mt-5 max-w-3xl text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 md:text-lg",
          align === "center" && "mx-auto",
          light ? "text-white/75" : "text-[#686168]"
        )}
      >
        {description}
      </p>
    </div>
  );
}
