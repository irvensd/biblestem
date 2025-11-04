/**
 * HTML Sanitization Utility
 * Provides safe HTML sanitization to prevent XSS attacks
 */

/**
 * Allowed HTML tags for rich text content
 */
const ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'u', 's', 'code', 'pre',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li',
  'blockquote', 'a',
  'div', 'span'
]

/**
 * Allowed attributes for HTML tags
 */
const ALLOWED_ATTRIBUTES: Record<string, string[]> = {
  'a': ['href', 'title', 'target', 'rel'],
  'code': ['class'],
  'pre': ['class'],
  'div': ['class'],
  'span': ['class'],
  'p': ['class'],
}

/**
 * Sanitize HTML string to prevent XSS attacks
 * @param html - The HTML string to sanitize
 * @param allowedTags - Optional array of allowed tags (defaults to ALLOWED_TAGS)
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(html: string, allowedTags: string[] = ALLOWED_TAGS): string {
  if (!html || typeof html !== 'string') {
    return ''
  }

  // Create a temporary DOM element to parse HTML
  const div = document.createElement('div')
  div.textContent = html // This escapes all HTML by default
  
  // Now we'll manually build safe HTML
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  
  // Remove all scripts and dangerous elements
  const scripts = doc.querySelectorAll('script, style, iframe, object, embed, form, input, button')
  scripts.forEach(el => el.remove())
  
  // Walk through all elements and clean them
  const walker = doc.createTreeWalker(
    doc.body,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    null
  )
  
  const nodesToRemove: Node[] = []
  let node: Node | null
  
  while (node = walker.nextNode()) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element
      const tagName = element.tagName.toLowerCase()
      
      // Remove disallowed tags
      if (!allowedTags.includes(tagName)) {
        nodesToRemove.push(node)
        continue
      }
      
      // Clean attributes - only keep allowed ones
      const allowedAttrs = ALLOWED_ATTRIBUTES[tagName] || []
      const attrs = Array.from(element.attributes)
      
      attrs.forEach(attr => {
        // Remove dangerous attributes
        if (attr.name.startsWith('on') || // onclick, onerror, etc.
            attr.name === 'style' || // Inline styles can contain XSS
            attr.name === 'javascript:' ||
            !allowedAttrs.includes(attr.name)) {
          element.removeAttribute(attr.name)
        }
        
        // Sanitize href attributes
        if (attr.name === 'href') {
          const href = attr.value.toLowerCase().trim()
          // Only allow http, https, mailto, and relative URLs
          if (!href.match(/^(https?:\/\/|mailto:|#|\/)/)) {
            element.removeAttribute('href')
          }
          // Ensure target="_blank" has rel="noopener noreferrer"
          if (element.getAttribute('target') === '_blank') {
            element.setAttribute('rel', 'noopener noreferrer')
          }
        }
      })
    }
  }
  
  // Remove disallowed nodes
  nodesToRemove.forEach(node => node.parentNode?.removeChild(node))
  
  return doc.body.innerHTML || ''
}

/**
 * Escape HTML special characters
 * Use this for text content that should never contain HTML
 * @param text - The text to escape
 * @returns Escaped HTML string
 */
export function escapeHtml(text: string): string {
  if (!text || typeof text !== 'string') {
    return ''
  }
  
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

/**
 * Sanitize user input (for form fields, search queries, etc.)
 * Strips HTML and normalizes whitespace
 * @param input - The user input to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return ''
  }
  
  // Remove HTML tags
  const stripped = input.replace(/<[^>]*>/g, '')
  
  // Normalize whitespace
  const normalized = stripped.replace(/\s+/g, ' ').trim()
  
  // Limit length (prevent DoS)
  const maxLength = 10000
  return normalized.slice(0, maxLength)
}

/**
 * Sanitize URL to prevent javascript: and data: protocols
 * @param url - The URL to sanitize
 * @returns Sanitized URL or empty string if invalid
 */
export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== 'string') {
    return ''
  }
  
  const trimmed = url.trim().toLowerCase()
  
  // Allow http, https, mailto, tel, and relative URLs
  if (trimmed.match(/^(https?:\/\/|mailto:|tel:|#|\/)/)) {
    return url.trim()
  }
  
  // Reject javascript:, data:, and other dangerous protocols
  return ''
}

/**
 * Sanitize content for search highlighting
 * Safely escapes HTML while preserving text for highlighting
 * @param text - The text to sanitize
 * @returns Escaped HTML safe for highlighting
 */
export function sanitizeForHighlighting(text: string): string {
  return escapeHtml(text)
}

/**
 * Sanitize rich text content (notes, comments, etc.)
 * Allows safe HTML tags while preventing XSS
 * @param html - The HTML content to sanitize
 * @returns Sanitized HTML
 */
export function sanitizeRichText(html: string): string {
  return sanitizeHtml(html, ALLOWED_TAGS)
}

/**
 * Create a safe HTML element from user input
 * Useful for dynamically creating safe HTML strings
 * @param tag - The HTML tag name
 * @param attributes - Object with attribute key-value pairs
 * @param content - The text content (will be escaped)
 * @returns Safe HTML string
 */
export function createSafeHtml(
  tag: string,
  attributes: Record<string, string> = {},
  content: string = ''
): string {
  const safeTag = ALLOWED_TAGS.includes(tag.toLowerCase()) ? tag.toLowerCase() : 'span'
  const allowedAttrs = ALLOWED_ATTRIBUTES[safeTag] || []
  
  const attrs = Object.entries(attributes)
    .filter(([key]) => allowedAttrs.includes(key))
    .map(([key, value]) => {
      if (key === 'href') {
        const sanitized = sanitizeUrl(value)
        return sanitized ? `${key}="${escapeHtml(sanitized)}"` : ''
      }
      return `${key}="${escapeHtml(value)}"`
    })
    .filter(Boolean)
    .join(' ')
  
  const escapedContent = escapeHtml(content)
  const attrsString = attrs ? ` ${attrs}` : ''
  
  return `<${safeTag}${attrsString}>${escapedContent}</${safeTag}>`
}
