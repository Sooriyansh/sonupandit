import "server-only";

import { createHmac, createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export const ADMIN_SESSION_COOKIE = "sonupandit-admin-session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

function getAdminConfig() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!username || !password || !secret || secret.length < 32) return null;
  return { username, password, secret };
}

function constantTimeEqual(left: string, right: string) {
  const leftHash = createHash("sha256").update(left).digest();
  const rightHash = createHash("sha256").update(right).digest();
  return timingSafeEqual(leftHash, rightHash);
}

function signSession(expiresAt: string, secret: string) {
  return createHmac("sha256", secret).update(expiresAt).digest("base64url");
}

export function isAdminAuthConfigured() {
  return getAdminConfig() !== null;
}

export function isSameOriginRequest(request: NextRequest) {
  const originHeader = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!originHeader || !host) return false;

  try {
    const origin = new URL(originHeader);
    const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
    const protocol = forwardedProtocol ? `${forwardedProtocol}:` : request.nextUrl.protocol;

    return (
      origin.origin === `${protocol}//${host}` &&
      origin.pathname === "/" &&
      !origin.search &&
      !origin.hash
    );
  } catch {
    return false;
  }
}

export function verifyAdminCredentials(username: string, password: string) {
  const config = getAdminConfig();
  if (!config) return false;

  const usernameMatches = constantTimeEqual(username, config.username);
  const passwordMatches = constantTimeEqual(password, config.password);
  return usernameMatches && passwordMatches;
}

export function createAdminSessionToken() {
  const config = getAdminConfig();
  if (!config) return null;

  const expiresAt = String(Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS);
  return `${expiresAt}.${signSession(expiresAt, config.secret)}`;
}

export async function hasAdminSession() {
  const config = getAdminConfig();
  if (!config) return false;

  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return false;

  const [expiresAt, signature, ...extra] = token.split(".");
  if (!expiresAt || !signature || extra.length > 0 || !/^\d+$/.test(expiresAt)) {
    return false;
  }

  if (Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;

  return constantTimeEqual(signature, signSession(expiresAt, config.secret));
}

export function adminSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/admin",
    maxAge: SESSION_DURATION_SECONDS
  };
}
