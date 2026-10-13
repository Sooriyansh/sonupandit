type Entry = {
  count: number;
  expiresAt: number;
};

const hits = new Map<string, Entry>();

export function rateLimit(key: string, limit = 8, windowMs = 60_000) {
  const now = Date.now();
  const current = hits.get(key);

  if (!current || current.expiresAt < now) {
    hits.set(key, { count: 1, expiresAt: now + windowMs });
    return { allowed: true };
  }

  current.count += 1;
  return { allowed: current.count <= limit };
}
