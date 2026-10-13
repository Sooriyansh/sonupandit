
"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Send,
  UserRound,
  Phone,
  Mail,
  CalendarDays,
  Clock3,
  MapPin,
  MessageSquareText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

import { bookingServices } from "@/data/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  location: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  location: "",
  message: "",
};

export function BookingForm({ jyotish = false }: { jyotish?: boolean }) {
  const searchParams = useSearchParams();
  const selected = searchParams.get("service") || "";

  const [form, setForm] = useState<FormState>({
    ...initial,
    service: selected,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  const serviceOptions = useMemo(() => bookingServices, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "बुकिंग भेजने में समस्या हुई।");
        return;
      }

      setStatus("success");
      setMessage(data.message || "आपकी बुकिंग अनुरोध प्राप्त हो गई है।");
      setForm({ ...initial, service: selected });
    } catch {
      setStatus("error");
      setMessage("इंटरनेट कनेक्शन जाँचें और दोबारा प्रयास करें।");
    }
  }

  const update =
    (key: keyof FormState) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));

  return (
    <form
      onSubmit={submit}
      className="
        relative overflow-hidden border border-[#F1C9CD]
        bg-[#FFFDFC]
        shadow-[0_18px_65px_rgba(143,23,37,0.08)]
      "
    >
      <div className="h-1 bg-gradient-to-r from-[#B91C2C] via-[#B91C2C] to-[#D9363E]" />

      <div className="relative overflow-hidden border-b border-[#F1C9CD] bg-[#FFF1F2]/70 px-5 py-6 sm:px-8 sm:py-7">
        <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border border-[#D9363E]/20" />
        <div className="pointer-events-none absolute -right-2 -top-6 h-24 w-24 rounded-full border border-[#D9363E]/20" />

        <div className="relative flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center border border-[#F1C9CD] bg-[#FFF1F2] text-[#B91C2C] shadow-sm sm:h-14 sm:w-14">
            <Sparkles size={23} strokeWidth={1.5} />
          </div>

          <div className="min-w-0">
            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-[#686168] sm:text-[10px]">
              Sacred Services · Ujjain
            </p>

            <h2 className="serif text-xl font-bold leading-snug text-[#B91C2C] sm:text-2xl">
              {jyotish ? "ज्योतिष परामर्श अनुरोध" : "पूजा बुकिंग अनुरोध"}
            </h2>

            <p className="mt-2 max-w-lg text-xs leading-5 text-[#686168] sm:text-sm sm:leading-6">
              {jyotish
                ? "अपनी जानकारी भरें। आपकी ज्योतिष संबंधी आवश्यकता के अनुसार संपर्क किया जाएगा।"
                : "अपनी जानकारी और पूजा की आवश्यकता साझा करें। बुकिंग के लिए आपसे संपर्क किया जाएगा।"}
            </p>
          </div>
        </div>

        <div className="relative mt-5 flex items-center gap-2">
          <span className="h-px w-8 bg-[#D9363E]" />
          <span className="text-[10px] font-medium tracking-wide text-[#686168]">
            {jyotish ? "आपकी जानकारी" : "अपनी पूजा की जानकारी दें"}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-8">
        <div className="mb-6 flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center bg-[#FFF1F2] text-[#686168]">
            <UserRound size={14} />
          </span>
          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#B91C2C]">
            व्यक्तिगत जानकारी
          </h3>
        </div>

        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2">
          <Field
            label="पूरा नाम"
            placeholder="अपना पूरा नाम लिखें"
            icon={UserRound}
            value={form.name}
            onChange={update("name")}
            required
            autoComplete="name"
          />

          <Field
            label="मोबाइल नंबर"
            placeholder="आपका संपर्क नंबर"
            icon={Phone}
            value={form.phone}
            onChange={update("phone")}
            required
            inputMode="tel"
            type="tel"
            autoComplete="tel"
          />

          <Field
            label="ईमेल पता"
            placeholder="example@email.com"
            icon={Mail}
            value={form.email}
            onChange={update("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
          />

          <label className="group grid gap-2.5 text-sm font-semibold text-[#B91C2C]">
            <span className="flex items-center justify-between gap-2">
              <span>पूजा / सेवा चुनें</span>
              <span className="text-[10px] font-medium text-[#686168]">
                आवश्यक
              </span>
            </span>

            <span className="relative">
              <Sparkles
                size={17}
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#686168]"
              />

              <select
                className="
                  h-[50px] w-full appearance-none
                  border border-[#F1C9CD] bg-white
                  py-3 pl-10 pr-10 text-sm font-medium text-[#B91C2C]
                  outline-none transition-all duration-200
                  hover:border-[#F1C9CD]
                  focus:border-[#686168]
                  focus:ring-2 focus:ring-[#D9363E]/15
                "
                value={form.service}
                onChange={update("service")}
                required
              >
                <option value="">सेवा चुनें</option>
                {serviceOptions.map((service) => (
                  <option value={service} key={service}>
                    {service}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#686168]">
                <ArrowRight size={15} className="rotate-90" />
              </span>
            </span>
          </label>
        </div>

        <div className="mb-6 mt-8 flex items-center gap-2 border-t border-[#F1C9CD] pt-6">
          <span className="grid h-7 w-7 place-items-center bg-[#FFF1F2] text-[#686168]">
            <CalendarDays size={14} />
          </span>
          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#B91C2C]">
            {jyotish ? "जन्म / परामर्श विवरण" : "तिथि एवं स्थान"}
          </h3>
        </div>

        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2">
          <Field
            label={jyotish ? "जन्म तिथि / पसंदीदा तिथि" : "पूजा की तिथि"}
            icon={CalendarDays}
            value={form.date}
            onChange={update("date")}
            type="date"
            required
          />

          <Field
            label={jyotish ? "जन्म समय / परामर्श समय" : "अनुमानित समय"}
            icon={Clock3}
            value={form.time}
            onChange={update("time")}
            type="time"
          />

          <div className="md:col-span-2">
            <Field
              label={jyotish ? "जन्म स्थान" : "पूजा का स्थान"}
              placeholder={
                jyotish
                  ? "जन्म शहर या स्थान"
                  : "उज्जैन या अपना पसंदीदा स्थान"
              }
              icon={MapPin}
              value={form.location}
              onChange={update("location")}
            />
          </div>

          <label className="group grid gap-2.5 text-sm font-semibold text-[#B91C2C] md:col-span-2">
            <span className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <MessageSquareText
                  size={15}
                  className="text-[#686168]"
                  aria-hidden="true"
                />
                {jyotish ? "अपने प्रश्न / विशेष अनुरोध" : "विशेष अनुरोध"}
              </span>
              <span className="text-[10px] font-medium text-[#686168]">
                वैकल्पिक
              </span>
            </span>

            <textarea
              className="
                min-h-32 w-full resize-y
                border border-[#F1C9CD] bg-white
                px-4 py-3.5 text-sm font-normal leading-6 text-[#B91C2C]
                outline-none transition-all duration-200
                placeholder:text-[#686168]
                hover:border-[#F1C9CD]
                focus:border-[#686168]
                focus:ring-2 focus:ring-[#D9363E]/15
              "
              placeholder={
                jyotish
                  ? "अपने प्रश्न या परामर्श की आवश्यकता बताएँ..."
                  : "पूजा से संबंधित कोई विशेष जानकारी साझा करें..."
              }
              value={form.message}
              onChange={update("message")}
            />
          </label>
        </div>

        <div className="mt-7 border-t border-[#F1C9CD] pt-6">
          <button
            type="submit"
            disabled={status === "loading"}
            className="
              group inline-flex min-h-[52px] w-full
              items-center justify-center gap-3
              border border-[#B91C2C] bg-[#B91C2C]
              px-6 py-3.5 text-sm font-bold text-[#FFFDFC]
              shadow-[0_6px_18px_rgba(143,23,37,0.13)]
              transition-all duration-200
              hover:border-[#B91C2C] hover:bg-[#8F1725]
              hover:shadow-[0_8px_24px_rgba(143,23,37,0.18)]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#D9363E] focus-visible:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-60
              sm:w-auto sm:min-w-[250px]
            "
          >
            {status === "loading" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                <span>भेजा जा रहा है...</span>
              </>
            ) : (
              <>
                <Send size={17} strokeWidth={1.8} />
                <span>बुकिंग अनुरोध भेजें</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          <p className="mt-3 text-[10px] leading-5 text-[#686168] sm:text-xs">
            अनुरोध भेजने के बाद आपकी जानकारी की पुष्टि के लिए आपसे संपर्क किया
            जाएगा।
          </p>
          {message && (
            <div
              role="status"
              aria-live="polite"
              className={`
                mt-5 flex items-start gap-3 border p-4 text-sm leading-6
                ${
                  status === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : status === "error"
                      ? "border-red-200 bg-red-50 text-red-800"
                      : "border-[#F1C9CD] bg-[#FFF1F2] text-[#B91C2C]"
                }
              `}
            >
              {status === "success" ? (
                <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
              ) : (
                <AlertCircle size={19} className="mt-0.5 shrink-0" />
              )}

              <p className="font-semibold">{message}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
  inputMode,
  placeholder,
  icon: Icon,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  autoComplete?: string;
}) {
  return (
    <label className="group grid min-w-0 gap-2.5 text-sm font-semibold text-[#B91C2C]">
      <span className="flex items-center justify-between gap-2">
        <span>{label}</span>
        {required && (
          <span className="text-[10px] font-medium text-[#686168]">
            आवश्यक
          </span>
        )}
      </span>

      <span className="relative">
        <Icon
          size={16}
          aria-hidden="true"
          className="
            pointer-events-none absolute left-3.5 top-1/2
            -translate-y-1/2 text-[#686168]
            transition-colors duration-200
            group-focus-within:text-[#B91C2C]
          "
        />

        <input
          className="
            h-[50px] w-full min-w-0
            border border-[#F1C9CD] bg-white
            px-4 py-3 pl-10
            text-sm font-normal text-[#B91C2C]
            outline-none transition-all duration-200
            placeholder:text-[#686168]
            hover:border-[#F1C9CD]
            focus:border-[#686168]
            focus:ring-2 focus:ring-[#D9363E]/15
          "
          value={value}
          onChange={onChange}
          required={required}
          type={type}
          inputMode={inputMode}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </span>
    </label>
  );
}
