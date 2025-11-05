/**
 * Security Service
 * Centralized security controls for the application
 */

import { sanitizeObject, sanitizeNoteContent, sanitizeUserProfile, containsXss, type UserProfileData } from '../utils/sanitization'
import { SecureStorage, isEncryptionAvailable } from '../utils/encryption'
import { RateLimiters, getUserRateLimitKey, getIpRateLimitKey, type RateLimitError } from '../utils/rateLimiter'

/**
 * Security service class
 */
class SecurityService {
  private encryptionEnabled: boolean

  constructor() {
    this.encryptionEnabled = isEncryptionAvailable()
    if (!this.encryptionEnabled) {
      console.warn('Web Crypto API not available. Encryption disabled.')
    }
  }

  /**
   * Sanitize data before database write
   */
  sanitizeForDatabase<T extends Record<string, unknown>>(data: T): T {
    return sanitizeObject(data, {
      trim: true,
      maxLength: 50000 // Maximum field length
    })
  }

  /**
   * Sanitize note content
   */
  sanitizeNote(content: string): string {
    if (containsXss(content)) {
      console.warn('Potential XSS detected in note content')
    }
    return sanitizeNoteContent(content)
  }

  /**
   * Sanitize user profile
   */
  sanitizeProfile(profile: UserProfileData): UserProfileData {
    return sanitizeUserProfile(profile)
  }

  /**
   * Check API rate limit
   */
  async checkApiRateLimit(userId?: string): Promise<void> {
    const identifier = userId 
      ? getUserRateLimitKey(userId, 'api')
      : getIpRateLimitKey('api')

    await RateLimiters.api.execute(identifier, async () => {
      // Rate limit check only
    })
  }

  /**
   * Check auth rate limit
   */
  async checkAuthRateLimit(identifier: string): Promise<void> {
    await RateLimiters.auth.execute(identifier, async () => {
      // Rate limit check only
    })
  }

  /**
   * Check search rate limit
   */
  async checkSearchRateLimit(userId?: string): Promise<void> {
    const identifier = userId
      ? getUserRateLimitKey(userId, 'search')
      : getIpRateLimitKey('search')

    await RateLimiters.search.execute(identifier, async () => {
      // Rate limit check only
    })
  }

  /**
   * Check notes rate limit
   */
  async checkNotesRateLimit(userId: string): Promise<void> {
    const identifier = getUserRateLimitKey(userId, 'notes')
    await RateLimiters.notes.execute(identifier, async () => {
      // Rate limit check only
    })
  }

  /**
   * Store sensitive data securely
   */
  async setSecureItem(key: string, value: string): Promise<void> {
    if (this.encryptionEnabled) {
      await SecureStorage.setItem(key, value)
    } else {
      // Fallback to regular storage with warning
      console.warn('Storing data without encryption')
      localStorage.setItem(key, value)
    }
  }

  /**
   * Retrieve sensitive data securely
   */
  async getSecureItem(key: string): Promise<string | null> {
    if (this.encryptionEnabled) {
      return await SecureStorage.getItem(key)
    } else {
      return localStorage.getItem(key)
    }
  }

  /**
   * Store object securely
   */
  async setSecureObject(key: string, value: unknown): Promise<void> {
    if (this.encryptionEnabled) {
      await SecureStorage.setObject(key, value)
    } else {
      console.warn('Storing data without encryption')
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  /**
   * Retrieve object securely
   */
  async getSecureObject<T>(key: string): Promise<T | null> {
    if (this.encryptionEnabled) {
      return await SecureStorage.getObject<T>(key)
    } else {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : null
    }
  }

  /**
   * Remove secure item
   */
  removeSecureItem(key: string): void {
    if (this.encryptionEnabled) {
      SecureStorage.removeItem(key)
    } else {
      localStorage.removeItem(key)
    }
  }

  /**
   * Clear all secure storage
   */
  clearSecureStorage(): void {
    if (this.encryptionEnabled) {
      SecureStorage.clear()
    }
  }

  /**
   * Validate CSRF token (for future use)
   */
  validateCsrfToken(token: string): boolean {
    const storedToken = sessionStorage.getItem('csrf_token')
    return storedToken === token
  }

  /**
   * Generate CSRF token
   */
  generateCsrfToken(): string {
    const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    sessionStorage.setItem('csrf_token', token)
    return token
  }

  /**
   * Content Security Policy headers (for reference)
   */
  getCSPHeaders(): Record<string, string> {
    return {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Vue needs unsafe-eval
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "font-src 'self' data:",
        "connect-src 'self' https://*.supabase.co",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ].join('; ')
    }
  }

  /**
   * Check if user input is safe
   */
  isSafeInput(input: string): boolean {
    return !containsXss(input)
  }

  /**
   * Log security event (for monitoring)
   */
  logSecurityEvent(event: {
    type: 'xss_attempt' | 'rate_limit' | 'auth_failure' | 'injection_attempt'
    userId?: string
    details?: string
  }): void {
    console.warn('[Security Event]', event)
    
    // In production, send to monitoring service
    // Example: Sentry, LogRocket, etc.
  }
}

// Export singleton instance
export const securityService = new SecurityService()

// Export types
export type { RateLimitError }

