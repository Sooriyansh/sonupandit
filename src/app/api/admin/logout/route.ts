import { NextResponse, type NextRequest } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminSessionCookieOptions,
  isSameOriginRequest
} from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ message: "गलत अनुरोध।" }, { status: 403 });
  }

  const response = NextResponse.json({ message: "लॉगआउट हो गया।" });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    ...adminSessionCookieOptions(),
    maxAge: 0
  });
  return response;
}
