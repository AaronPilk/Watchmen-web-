/**
 * Simple in-memory, per-IP fixed-window rate limiter.
 * v1 dependency-free approach (no Upstash). Resets on cold start / redeploy,
 * which is acceptable for a low-volume marketing form. Swap for
 * @upstash/ratelimit if you later need durability across serverless instances.
 */

type Bucket = { count: number; resetAt: number };

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

// Module-scoped map. Persists for the life of the serverless instance.
const buckets = new Map<string, Bucket>();

export function rateLimit(
  identifier: string,
  max = MAX_REQUESTS,
  windowMs = WINDOW_MS
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const existing = buckets.get(identifier);

  if (!existing || now > existing.resetAt) {
    const bucket = { count: 1, resetAt: now + windowMs };
    buckets.set(identifier, bucket);
    return { success: true, remaining: max - 1, resetAt: bucket.resetAt };
  }

  if (existing.count >= max) {
    return { success: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { success: true, remaining: max - existing.count, resetAt: existing.resetAt };
}

/** Best-effort client IP extraction from request headers. */
export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headers.get("x-real-ip") ?? "unknown";
}
