type Entry = {
  count: number;
  expiresAt: number;
};

const hits = new Map<string, Entry>();
const MAX_ENTRIES = 10_000;

export function rateLimit(key: string, limit = 8, windowMs = 60_000) {
  const now = Date.now();
  const current = hits.get(key);

  if (!current || current.expiresAt < now) {
    if (hits.size >= MAX_ENTRIES) {
      for (const [entryKey, entry] of hits) {
        if (entry.expiresAt <= now) hits.delete(entryKey);
      }

      if (hits.size >= MAX_ENTRIES) {
        const oldestKey = hits.keys().next().value;
        if (oldestKey !== undefined) hits.delete(oldestKey);
      }
    }

    hits.set(key, { count: 1, expiresAt: now + windowMs });
    return { allowed: true };
  }

  current.count += 1;
  return { allowed: current.count <= limit };
}
