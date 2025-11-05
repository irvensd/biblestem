/**
 * Rate Limiting Utilities
 * Prevents abuse by limiting API call frequency
 */

/**
 * Rate limit configuration
 */
export interface RateLimitConfig {
  /** Maximum number of requests */
  maxRequests: number
  /** Time window in milliseconds */
  windowMs: number
  /** Custom error message */
  message?: string
}

/**
 * Rate limit entry
 */
interface RateLimitEntry {
  count: number
  resetTime: number
}

/**
 * In-memory rate limit store
 */
class RateLimitStore {
  private store: Map<string, RateLimitEntry> = new Map()

  /**
   * Check if key is rate limited
   */
  check(key: string, config: RateLimitConfig): boolean {
    const now = Date.now()
    const entry = this.store.get(key)

    if (!entry || now > entry.resetTime) {
      // Reset or create new entry
      this.store.set(key, {
        count: 1,
        resetTime: now + config.windowMs
      })
      return true
    }

    if (entry.count >= config.maxRequests) {
      return false
    }

    entry.count++
    return true
  }

  /**
   * Get remaining requests
   */
  getRemaining(key: string, config: RateLimitConfig): number {
    const entry = this.store.get(key)
    if (!entry || Date.now() > entry.resetTime) {
      return config.maxRequests
    }
    return Math.max(0, config.maxRequests - entry.count)
  }

  /**
   * Get reset time
   */
  getResetTime(key: string): number | null {
    const entry = this.store.get(key)
    return entry ? entry.resetTime : null
  }

  /**
   * Clear expired entries
   */
  cleanup(): void {
    const now = Date.now()
    for (const [key, entry] of this.store.entries()) {
      if (now > entry.resetTime) {
        this.store.delete(key)
      }
    }
  }

  /**
   * Clear all entries
   */
  clear(): void {
    this.store.clear()
  }
}

// Global rate limit store
const globalStore = new RateLimitStore()

// Cleanup expired entries periodically
setInterval(() => globalStore.cleanup(), 60000) // Every minute

/**
 * Rate limiter class
 */
export class RateLimiter {
  private config: RateLimitConfig

  constructor(config: RateLimitConfig) {
    this.config = config
  }

  /**
   * Check if request is allowed
   */
  async check(identifier: string): Promise<{ allowed: boolean; remaining: number; resetTime: number | null }> {
    const allowed = globalStore.check(identifier, this.config)
    const remaining = globalStore.getRemaining(identifier, this.config)
    const resetTime = globalStore.getResetTime(identifier)

    return {
      allowed,
      remaining,
      resetTime
    }
  }

  /**
   * Execute function with rate limiting
   */
  async execute<T>(
    identifier: string,
    fn: () => Promise<T>
  ): Promise<T> {
    const { allowed, remaining, resetTime } = await this.check(identifier)

    if (!allowed) {
      const waitTime = resetTime ? Math.ceil((resetTime - Date.now()) / 1000) : 0
      throw new RateLimitError(
        this.config.message || `Rate limit exceeded. Try again in ${waitTime} seconds.`,
        waitTime
      )
    }

    return fn()
  }
}

/**
 * Rate limit error
 */
export class RateLimitError extends Error {
  constructor(
    message: string,
    public waitTime: number
  ) {
    super(message)
    this.name = 'RateLimitError'
  }
}

/**
 * Predefined rate limiters for common use cases
 */
export const RateLimiters = {
  /** API calls - 100 requests per minute */
  api: new RateLimiter({
    maxRequests: 100,
    windowMs: 60 * 1000,
    message: 'Too many API requests. Please wait a moment.'
  }),

  /** Authentication - 5 attempts per 15 minutes */
  auth: new RateLimiter({
    maxRequests: 5,
    windowMs: 15 * 60 * 1000,
    message: 'Too many login attempts. Please try again later.'
  }),

  /** Search - 30 requests per minute */
  search: new RateLimiter({
    maxRequests: 30,
    windowMs: 60 * 1000,
    message: 'Too many search requests. Please slow down.'
  }),

  /** Note creation - 20 requests per minute */
  notes: new RateLimiter({
    maxRequests: 20,
    windowMs: 60 * 1000,
    message: 'Too many notes created. Please wait a moment.'
  }),

  /** File upload - 10 per hour */
  upload: new RateLimiter({
    maxRequests: 10,
    windowMs: 60 * 60 * 1000,
    message: 'Upload limit reached. Please try again later.'
  })
}

/**
 * Rate limit decorator for functions
 */
export function rateLimit(limiter: RateLimiter, getIdentifier: () => string) {
  return function (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: unknown[]) {
      const identifier = getIdentifier()
      return limiter.execute(identifier, () => originalMethod.apply(this, args))
    }

    return descriptor
  }
}

/**
 * Simple rate limit helper for quick use
 */
export async function checkRateLimit(
  key: string,
  maxRequests: number = 60,
  windowMs: number = 60000
): Promise<boolean> {
  const limiter = new RateLimiter({ maxRequests, windowMs })
  const result = await limiter.check(key)
  return result.allowed
}

/**
 * Get user-specific rate limit key
 */
export function getUserRateLimitKey(userId: string, action: string): string {
  return `user:${userId}:${action}`
}

/**
 * Get IP-based rate limit key (fallback when user not authenticated)
 */
export function getIpRateLimitKey(action: string): string {
  // In a real app, you'd get the IP from a server
  // For client-side, we use a session-based identifier
  let sessionId = sessionStorage.getItem('session_id')
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem('session_id', sessionId)
  }
  return `session:${sessionId}:${action}`
}

