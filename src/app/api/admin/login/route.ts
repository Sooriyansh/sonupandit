import { NextResponse, type NextRequest } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminSessionCookieOptions,
  createAdminSessionToken,
  isAdminAuthConfigured,
  isSameOriginRequest,
  verifyAdminCredentials
} from "@/lib/adminAuth";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ message: "गलत अनुरोध।" }, { status: 403 });
  }

  if (!isAdminAuthConfigured()) {
    return NextResponse.json(
      { message: "Admin login configure नहीं है। Hosting environment variables जाँचें।" },
      { status: 503 }
    );
  }

  const ip = request.headers.get("x-real-ip")?.trim() || "unknown";
  if (!rateLimit(`admin-login:${ip}`, 8, 15 * 60_000).allowed) {
    return NextResponse.json(
      { message: "बहुत बार प्रयास हुआ। कुछ समय बाद फिर प्रयास करें।" },
      { status: 429 }
    );
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "गलत अनुरोध।" }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 2_000) {
    return NextResponse.json({ message: "गलत अनुरोध।" }, { status: 413 });
  }

  const payload: unknown = await request.json().catch(() => null);
  if (
    !payload ||
    typeof payload !== "object" ||
    !("username" in payload) ||
    !("password" in payload) ||
    typeof payload.username !== "string" ||
    typeof payload.password !== "string" ||
    payload.username.length > 200 ||
    payload.password.length > 500
  ) {
    return NextResponse.json({ message: "गलत अनुरोध।" }, { status: 400 });
  }

  if (!verifyAdminCredentials(payload.username, payload.password)) {
    return NextResponse.json({ message: "लॉगिन विवरण सही नहीं हैं।" }, { status: 401 });
  }

  const token = createAdminSessionToken();
  if (!token) {
    return NextResponse.json(
      { message: "Admin login configure नहीं है। Hosting environment variables जाँचें।" },
      { status: 503 }
    );
  }

  const response = NextResponse.json({ message: "लॉगिन सफल।" });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, adminSessionCookieOptions());
  return response;
}
