/**
 * Input Sanitization Utilities
 * Comprehensive sanitization for all user inputs before database writes
 */

import DOMPurify from 'dompurify'
import type { Config } from 'dompurify'

/**
 * Sanitization options
 */
export interface SanitizationOptions {
  /** Allow HTML tags */
  allowHtml?: boolean
  /** Maximum length */
  maxLength?: number
  /** Trim whitespace */
  trim?: boolean
  /** Remove special characters */
  removeSpecialChars?: boolean
  /** Allow specific HTML tags */
  allowedTags?: string[]
  /** Allow specific HTML attributes */
  allowedAttributes?: Record<string, string[]>
}

/**
 * Default allowed tags for rich text (safe subset)
 */
const DEFAULT_ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'span', 'div'
]

/**
 * Default allowed attributes (safe subset)
 */
const DEFAULT_ALLOWED_ATTRIBUTES = {
  'a': ['href', 'title', 'target'],
  'span': ['class'],
  'div': ['class'],
  'code': ['class']
}

/**
 * Sanitize plain text input
 * Removes all HTML and dangerous characters
 */
export function sanitizePlainText(input: string, options: SanitizationOptions = {}): string {
  if (typeof input !== 'string') {
    return ''
  }

  let sanitized = input

  // Trim if requested
  if (options.trim !== false) {
    sanitized = sanitized.trim()
  }

  // Remove all HTML tags
  sanitized = sanitized.replace(/<[^>]*>/g, '')

  // Remove potential XSS patterns
  sanitized = sanitized
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/<script/gi, '')
    .replace(/<iframe/gi, '')
    .replace(/onerror/gi, '')

  // Remove special characters if requested
  if (options.removeSpecialChars) {
    sanitized = sanitized.replace(/[<>'"]/g, '')
  }

  // Enforce max length
  if (options.maxLength && sanitized.length > options.maxLength) {
    sanitized = sanitized.substring(0, options.maxLength)
  }

  return sanitized
}

/**
 * Sanitize rich text/HTML input
 * Allows safe HTML tags while removing dangerous content
 */
export function sanitizeHtml(input: string, options: SanitizationOptions = {}): string {
  if (typeof input !== 'string') {
    return ''
  }

  const allowedTags = options.allowedTags || DEFAULT_ALLOWED_TAGS
  const allowedAttributes = options.allowedAttributes || DEFAULT_ALLOWED_ATTRIBUTES

  // Configure DOMPurify
  const config: Config = {
    ALLOWED_TAGS: allowedTags,
    ALLOWED_ATTR: Object.values(allowedAttributes).flat(),
    ALLOW_DATA_ATTR: false,
    KEEP_CONTENT: true,
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false,
    SAFE_FOR_TEMPLATES: true
  }

  // Sanitize with DOMPurify
  let sanitized = String(DOMPurify.sanitize(input, config))

  // Additional custom sanitization
  sanitized = sanitized
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')

  // Enforce max length
  if (options.maxLength && sanitized.length > options.maxLength) {
    sanitized = sanitized.substring(0, options.maxLength)
  }

  return sanitized
}

/**
 * Sanitize email address
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') {
    return ''
  }

  // Remove whitespace and convert to lowercase
  let sanitized = email.trim().toLowerCase()

  // Basic email validation and sanitization
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!emailRegex.test(sanitized)) {
    return ''
  }

  return sanitized
}

/**
 * Sanitize URL
 */
export function sanitizeUrl(url: string): string {
  if (typeof url !== 'string') {
    return ''
  }

  let sanitized = url.trim()

  // Remove dangerous protocols
  if (
    sanitized.startsWith('javascript:') ||
    sanitized.startsWith('data:') ||
    sanitized.startsWith('vbscript:') ||
    sanitized.startsWith('file:')
  ) {
    return ''
  }

  // Only allow http, https, and relative URLs
  try {
    const urlObj = new URL(sanitized, window.location.origin)
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return ''
    }
    return urlObj.href
  } catch {
    // If URL parsing fails, assume it's a relative URL
    if (sanitized.startsWith('/')) {
      return sanitized
    }
    return ''
  }
}

/**
 * Sanitize SQL-like input (prevent injection)
 */
export function sanitizeSqlInput(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }

  // Remove SQL injection patterns
  return input
    .replace(/['";]/g, '')
    .replace(/--/g, '')
    .replace(/\/\*/g, '')
    .replace(/\*\//g, '')
    .replace(/xp_/gi, '')
    .replace(/exec/gi, '')
    .replace(/execute/gi, '')
    .replace(/drop/gi, '')
    .replace(/delete/gi, '')
    .replace(/truncate/gi, '')
    .trim()
}

/**
 * Sanitize file name
 */
export function sanitizeFileName(fileName: string): string {
  if (typeof fileName !== 'string') {
    return ''
  }

  // Remove path traversal patterns
  let sanitized = fileName
    .replace(/\.\./g, '')
    .replace(/\//g, '')
    .replace(/\\/g, '')

  // Keep only safe characters
  sanitized = sanitized.replace(/[^a-zA-Z0-9._-]/g, '_')

  // Limit length
  if (sanitized.length > 255) {
    const ext = sanitized.substring(sanitized.lastIndexOf('.'))
    sanitized = sanitized.substring(0, 255 - ext.length) + ext
  }

  return sanitized
}

/**
 * Sanitize object for database write
 * Recursively sanitizes all string properties
 */
export function sanitizeObject<T extends Record<string, unknown>>(
  obj: T,
  options: SanitizationOptions = {}
): T {
  const sanitized: Record<string, unknown> = {}

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      // Sanitize based on key name hints
      if (key.toLowerCase().includes('email')) {
        sanitized[key] = sanitizeEmail(value)
      } else if (key.toLowerCase().includes('url') || key.toLowerCase().includes('link')) {
        sanitized[key] = sanitizeUrl(value)
      } else if (key.toLowerCase().includes('html') || key.toLowerCase().includes('content')) {
        sanitized[key] = sanitizeHtml(value, options)
      } else {
        sanitized[key] = sanitizePlainText(value, options)
      }
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item =>
        typeof item === 'string' ? sanitizePlainText(item, options) : item
      )
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value as Record<string, unknown>, options)
    } else {
      sanitized[key] = value
    }
  }

  return sanitized as T
}

/**
 * Validate and sanitize note content
 */
export function sanitizeNoteContent(content: string, maxLength: number = 10000): string {
  return sanitizeHtml(content, {
    maxLength,
    allowedTags: DEFAULT_ALLOWED_TAGS,
    allowedAttributes: DEFAULT_ALLOWED_ATTRIBUTES
  })
}

/**
 * Validate and sanitize user profile data
 */
export interface UserProfileData {
  name?: string
  bio?: string
  email?: string
  avatar?: string
}

export function sanitizeUserProfile(profile: UserProfileData): UserProfileData {
  return {
    name: profile.name ? sanitizePlainText(profile.name, { maxLength: 100, trim: true }) : undefined,
    bio: profile.bio ? sanitizePlainText(profile.bio, { maxLength: 500, trim: true }) : undefined,
    email: profile.email ? sanitizeEmail(profile.email) : undefined,
    avatar: profile.avatar ? sanitizeUrl(profile.avatar) : undefined
  }
}

/**
 * Validate and sanitize search query
 */
export function sanitizeSearchQuery(query: string, maxLength: number = 200): string {
  return sanitizePlainText(query, {
    maxLength,
    trim: true,
    removeSpecialChars: false
  })
}

/**
 * Escape HTML entities for display
 */
export function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

/**
 * Check if string contains potential XSS
 */
export function containsXss(input: string): boolean {
  const xssPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /onerror/i,
    /eval\(/i,
    /expression\(/i,
    /<object/i,
    /<embed/i
  ]

  return xssPatterns.some(pattern => pattern.test(input))
}

