import { bookingServices } from "@/data/site";

export type BookingInput = {
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time?: string;
  location?: string;
  message?: string;
};

const stripTags = (value: string) => value.replace(/[<>]/g, "").trim();

export function sanitize(input: unknown): string {
  return typeof input === "string" ? stripTags(input).slice(0, 1000) : "";
}

export function validateBooking(payload: Record<string, unknown>) {
  const data: BookingInput = {
    name: sanitize(payload.name).slice(0, 120),
    phone: sanitize(payload.phone).slice(0, 20),
    email: sanitize(payload.email).slice(0, 160),
    service: sanitize(payload.service).slice(0, 120),
    date: sanitize(payload.date).slice(0, 40),
    time: sanitize(payload.time).slice(0, 40),
    location: sanitize(payload.location).slice(0, 180),
    message: sanitize(payload.message).slice(0, 1000)
  };

  const errors: Record<string, string> = {};
  const parsedDate = new Date(`${data.date}T00:00:00.000Z`);

  if (data.name.length < 2) errors.name = "कृपया नाम दर्ज करें।";
  if (!/^[0-9+\-\s()]{8,20}$/.test(data.phone)) errors.phone = "कृपया सही मोबाइल नंबर दर्ज करें।";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "कृपया सही ईमेल दर्ज करें।";
  if (!bookingServices.includes(data.service)) {
    errors.service = "कृपया सूची में से सही पूजा / सेवा चुनें।";
  }
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== data.date
  ) {
    errors.date = "कृपया सही तिथि दर्ज करें।";
  }

  return { data, errors, isValid: Object.keys(errors).length === 0 };
}
