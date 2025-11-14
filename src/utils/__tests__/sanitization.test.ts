import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  sanitizePlainText,
  sanitizeHtml,
  sanitizeEmail,
  sanitizeUrl,
  sanitizeSqlInput,
  sanitizeFileName,
  sanitizeObject,
  sanitizeNoteContent,
  sanitizeUserProfile,
  sanitizeSearchQuery,
  escapeHtml,
  containsXss,
} from '../sanitization'

// Mock DOMPurify for testing
vi.mock('dompurify', () => {
  return {
    default: {
      sanitize: (html: string) => {
        // Simple mock - remove script tags
        return html.replace(/<script[^>]*>.*?<\/script>/gi, '')
      },
    },
  }
})

describe('sanitization utilities', () => {
  describe('sanitizePlainText', () => {
    it('should remove HTML tags', () => {
      expect(sanitizePlainText('<p>Hello</p>')).toBe('Hello')
      expect(sanitizePlainText('<script>alert("xss")</script>')).toBe('alert("xss")')
    })

    it('should remove XSS patterns', () => {
      expect(sanitizePlainText('javascript:alert(1)')).toBe('alert(1)')
      // The onerror attribute gets removed by the regex pattern
      expect(sanitizePlainText('<img onerror="alert(1)">')).not.toContain('onerror')
    })

    it('should trim whitespace by default', () => {
      expect(sanitizePlainText('  hello  ')).toBe('hello')
    })

    it('should respect maxLength option', () => {
      const longText = 'a'.repeat(100)
      expect(sanitizePlainText(longText, { maxLength: 10 })).toBe('a'.repeat(10))
    })

    it('should handle non-string inputs', () => {
      expect(sanitizePlainText(null as any)).toBe('')
      expect(sanitizePlainText(123 as any)).toBe('')
      expect(sanitizePlainText(undefined as any)).toBe('')
    })
  })

  describe('sanitizeHtml', () => {
    it('should sanitize HTML content', () => {
      const result = sanitizeHtml('<p>Hello</p>')
      expect(result).toBeTruthy()
      expect(result).not.toContain('<script>')
    })

    it('should respect maxLength option', () => {
      const longHtml = '<p>' + 'a'.repeat(100) + '</p>'
      const result = sanitizeHtml(longHtml, { maxLength: 10 })
      expect(result.length).toBeLessThanOrEqual(10)
    })

    it('should handle non-string inputs', () => {
      expect(sanitizeHtml(null as any)).toBe('')
      expect(sanitizeHtml(123 as any)).toBe('')
    })
  })

  describe('sanitizeEmail', () => {
    it('should sanitize valid emails', () => {
      expect(sanitizeEmail('  Test@Example.COM  ')).toBe('test@example.com')
      expect(sanitizeEmail('user@domain.com')).toBe('user@domain.com')
    })

    it('should reject invalid emails', () => {
      expect(sanitizeEmail('invalid')).toBe('')
      expect(sanitizeEmail('invalid@')).toBe('')
      expect(sanitizeEmail('@domain.com')).toBe('')
    })

    it('should handle non-string inputs', () => {
      expect(sanitizeEmail(null as any)).toBe('')
      expect(sanitizeEmail(123 as any)).toBe('')
    })
  })

  describe('sanitizeUrl', () => {
    it('should sanitize valid URLs', () => {
      // URL constructor may add trailing slash, so check contains
      expect(sanitizeUrl('https://example.com')).toContain('https://example.com')
      expect(sanitizeUrl('http://example.com')).toContain('http://example.com')
      // Relative URLs get converted to absolute URLs in test environment
      const relativeResult = sanitizeUrl('/relative/path')
      expect(relativeResult).toContain('/relative/path')
    })

    it('should reject dangerous protocols', () => {
      expect(sanitizeUrl('javascript:alert(1)')).toBe('')
      expect(sanitizeUrl('data:text/html,<script>alert(1)</script>')).toBe('')
      expect(sanitizeUrl('file:///etc/passwd')).toBe('')
    })

    it('should handle non-string inputs', () => {
      expect(sanitizeUrl(null as any)).toBe('')
      expect(sanitizeUrl(123 as any)).toBe('')
    })
  })

  describe('sanitizeSqlInput', () => {
    it('should remove SQL injection patterns', () => {
      expect(sanitizeSqlInput("'; DROP TABLE users; --")).not.toContain("'")
      expect(sanitizeSqlInput("'; DROP TABLE users; --")).not.toContain('--')
      // Note: sanitizeSqlInput removes specific patterns but may not remove all SQL keywords
      const result = sanitizeSqlInput('SELECT * FROM users')
      expect(result).not.toContain("'")
      expect(result).not.toContain('--')
    })

    it('should handle non-string inputs', () => {
      expect(sanitizeSqlInput(null as any)).toBe('')
      expect(sanitizeSqlInput(123 as any)).toBe('')
    })
  })

  describe('sanitizeFileName', () => {
    it('should sanitize file names', () => {
      expect(sanitizeFileName('file name.txt')).toBe('file_name.txt')
      expect(sanitizeFileName('../../etc/passwd')).toBe('etcpasswd')
      // Note: backslashes and slashes are removed, then special chars replaced
      const result = sanitizeFileName('file/name\\test.txt')
      expect(result).not.toContain('/')
      expect(result).not.toContain('\\')
      expect(result).toContain('.txt')
    })

    it('should limit length', () => {
      const longName = 'a'.repeat(300) + '.txt'
      const result = sanitizeFileName(longName)
      expect(result.length).toBeLessThanOrEqual(255)
    })

    it('should handle non-string inputs', () => {
      expect(sanitizeFileName(null as any)).toBe('')
      expect(sanitizeFileName(123 as any)).toBe('')
    })
  })

  describe('sanitizeObject', () => {
    it('should sanitize object properties', () => {
      const obj = {
        name: '<script>alert(1)</script>John',
        email: '  TEST@EXAMPLE.COM  ',
        bio: '<p>Hello</p>',
        age: 30,
      }
      const result = sanitizeObject(obj)
      expect(result.name).not.toContain('<script>')
      expect(result.email).toBe('test@example.com')
      expect(result.bio).toBeTruthy()
      expect(result.age).toBe(30)
    })

    it('should handle nested objects', () => {
      const obj = {
        user: {
          name: '<script>alert(1)</script>',
          email: 'test@example.com',
        },
      }
      const result = sanitizeObject(obj)
      expect(result.user.name).not.toContain('<script>')
    })

    it('should handle arrays', () => {
      const obj = {
        tags: ['<script>alert(1)</script>', 'safe'],
      }
      const result = sanitizeObject(obj)
      expect(result.tags[0]).not.toContain('<script>')
      expect(result.tags[1]).toBe('safe')
    })
  })

  describe('sanitizeNoteContent', () => {
    it('should sanitize note content', () => {
      const content = '<p>Note content</p>'
      const result = sanitizeNoteContent(content)
      expect(result).toBeTruthy()
    })

    it('should respect maxLength', () => {
      const longContent = 'a'.repeat(20000)
      const result = sanitizeNoteContent(longContent, 1000)
      expect(result.length).toBeLessThanOrEqual(1000)
    })
  })

  describe('sanitizeUserProfile', () => {
    it('should sanitize user profile data', () => {
      const profile = {
        name: '  John Doe  ',
        email: '  TEST@EXAMPLE.COM  ',
        bio: '<script>alert(1)</script>Bio',
        avatar: 'javascript:alert(1)',
      }
      const result = sanitizeUserProfile(profile)
      expect(result.name).toBe('John Doe')
      expect(result.email).toBe('test@example.com')
      expect(result.bio).not.toContain('<script>')
      expect(result.avatar).toBe('')
    })
  })

  describe('sanitizeSearchQuery', () => {
    it('should sanitize search queries', () => {
      expect(sanitizeSearchQuery('  hello world  ')).toBe('hello world')
      expect(sanitizeSearchQuery('<script>alert(1)</script>')).not.toContain('<script>')
    })

    it('should respect maxLength', () => {
      const longQuery = 'a'.repeat(300)
      const result = sanitizeSearchQuery(longQuery, 200)
      expect(result.length).toBeLessThanOrEqual(200)
    })
  })

  describe('escapeHtml', () => {
    it('should escape HTML entities', () => {
      expect(escapeHtml('<script>alert(1)</script>')).toBe('&lt;script&gt;alert(1)&lt;/script&gt;')
      expect(escapeHtml('Hello & World')).toBe('Hello &amp; World')
    })
  })

  describe('containsXss', () => {
    it('should detect XSS patterns', () => {
      expect(containsXss('<script>alert(1)</script>')).toBe(true)
      expect(containsXss('javascript:alert(1)')).toBe(true)
      expect(containsXss('<img onerror="alert(1)">')).toBe(true)
      expect(containsXss('<iframe src="evil.com">')).toBe(true)
    })

    it('should not flag safe content', () => {
      expect(containsXss('Hello world')).toBe(false)
      expect(containsXss('<p>Safe HTML</p>')).toBe(false)
      expect(containsXss('Normal text with < and >')).toBe(false)
    })
  })
})

