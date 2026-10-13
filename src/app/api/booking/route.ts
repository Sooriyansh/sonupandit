import { NextResponse, type NextRequest } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import { rateLimit } from "@/lib/rateLimit";
import { validateBooking } from "@/lib/validation";
import { Booking } from "@/models/Booking";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const limited = rateLimit(`booking:${ip}`);

  if (!limited.allowed) {
    return NextResponse.json({ message: "कृपया कुछ समय बाद पुनः प्रयास करें।" }, { status: 429 });
  }

  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload) {
    return NextResponse.json({ message: "गलत अनुरोध।" }, { status: 400 });
  }

  const { data, errors, isValid } = validateBooking(payload);

  if (!isValid) {
    return NextResponse.json({ message: "कृपया फॉर्म सही भरें।", errors }, { status: 422 });
  }

  await connectMongo();
  await Booking.create(data);

  return NextResponse.json({ message: "आपकी बुकिंग अनुरोध प्राप्त हो गई है।" }, { status: 201 });
}
