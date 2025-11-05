# Security Implementation Guide

## Overview

BibleStem implements comprehensive security measures to protect user data and prevent common vulnerabilities.

## Security Features

### 1. Input Sanitization

All user inputs are sanitized before database writes to prevent injection attacks and XSS vulnerabilities.

**Implementation**: `src/utils/sanitization.ts`

```typescript
import { securityService } from '@/services/securityService'

// Sanitize note content
const sanitizedContent = securityService.sanitizeNote(userInput)

// Sanitize user profile
const sanitizedProfile = securityService.sanitizeProfile({
  name: userName,
  bio: userBio,
  email: userEmail
})
```

**Features**:
- HTML sanitization with DOMPurify
- SQL injection prevention
- XSS pattern detection
- URL validation
- Email validation
- File name sanitization

### 2. XSS Protection

User-generated content is sanitized to remove dangerous HTML/JavaScript.

**Implementation**:
- Automatic sanitization in notes store
- Content Security Policy headers
- Safe HTML rendering with allowed tags only

**Safe HTML Tags**:
```typescript
const ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 
  'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a'
]
```

### 3. Rate Limiting

API calls are rate-limited to prevent abuse and DoS attacks.

**Implementation**: `src/utils/rateLimiter.ts`

```typescript
import { securityService } from '@/services/securityService'

// Check rate limit before API call
await securityService.checkApiRateLimit(userId)

// Check specific action
await securityService.checkNotesRateLimit(userId)
```

**Limits**:
- **API calls**: 100 requests per minute
- **Authentication**: 5 attempts per 15 minutes
- **Search**: 30 requests per minute
- **Notes**: 20 creations per minute
- **Uploads**: 10 per hour

### 4. Data Encryption

Sensitive data is encrypted before storing in localStorage.

**Implementation**: `src/utils/encryption.ts`

```typescript
import { securityService } from '@/services/securityService'

// Store sensitive data
await securityService.setSecureItem('authToken', token)

// Retrieve sensitive data
const token = await securityService.getSecureItem('authToken')

// Store objects
await securityService.setSecureObject('userData', userObject)
const userData = await securityService.getSecureObject('userData')
```

**Features**:
- AES-GCM 256-bit encryption
- PBKDF2 key derivation (100,000 iterations)
- Device-specific encryption keys
- Random IV for each encryption
- Automatic fallback for unsupported browsers

## Security Best Practices

### When Creating Features

1. **Always sanitize user input**:
```typescript
// ✅ Good
const sanitizedInput = sanitizePlainText(userInput)
await saveToDatabase(sanitizedInput)

// ❌ Bad
await saveToDatabase(userInput) // Direct use without sanitization
```

2. **Check rate limits for user actions**:
```typescript
// ✅ Good
try {
  await securityService.checkNotesRateLimit(userId)
  await createNote(noteData)
} catch (error) {
  showError('Too many requests')
}

// ❌ Bad
await createNote(noteData) // No rate limit check
```

3. **Use secure storage for sensitive data**:
```typescript
// ✅ Good
await securityService.setSecureItem('sessionToken', token)

// ❌ Bad
localStorage.setItem('sessionToken', token) // Unencrypted
```

4. **Validate data types and formats**:
```typescript
// ✅ Good
const email = sanitizeEmail(userEmail)
if (!email) {
  throw new Error('Invalid email')
}

// ❌ Bad
// Using email without validation
```

### Database Operations

All database writes should go through sanitization:

```typescript
import { securityService } from '@/services/securityService'

// Sanitize entire object before database write
const sanitizedData = securityService.sanitizeForDatabase({
  title: userTitle,
  content: userContent,
  url: userUrl
})

await supabase.from('table').insert(sanitizedData)
```

### Displaying User Content

Always escape or sanitize before rendering:

```vue
<template>
  <!-- ✅ Safe: Vue automatically escapes -->
  <p>{{ userContent }}</p>
  
  <!-- ❌ Dangerous: Raw HTML -->
  <div v-html="userContent"></div>
  
  <!-- ✅ Safe: Sanitized HTML -->
  <div v-html="sanitizedContent"></div>
</template>

<script setup>
import { computed } from 'vue'
import { sanitizeHtml } from '@/utils/sanitization'

const sanitizedContent = computed(() => sanitizeHtml(userContent))
</script>
```

## Security Checklist

- [ ] All user inputs sanitized before database writes
- [ ] XSS protection on user-generated content display
- [ ] Rate limiting on all user-triggered API calls
- [ ] Sensitive data encrypted in localStorage
- [ ] Authentication attempts rate-limited
- [ ] Email addresses validated and sanitized
- [ ] URLs validated before use
- [ ] File names sanitized for uploads
- [ ] CSRF tokens implemented (future enhancement)
- [ ] Content Security Policy headers configured

## Security Monitoring

The security service logs security events:

```typescript
// Events are automatically logged for:
// - XSS attempts
// - Rate limit violations  
// - Authentication failures
// - Injection attempts

// View logs in console (development)
// Sent to monitoring service (production)
```

## Reporting Security Issues

If you discover a security vulnerability:

1. **DO NOT** create a public issue
2. Email: security@biblestem.com
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Dependencies

Security-related npm packages:

```json
{
  "dompurify": "^3.x.x" // HTML sanitization
}
```

## Browser Support

- **Encryption**: Requires Web Crypto API (all modern browsers)
- **Rate Limiting**: Works in all browsers
- **Sanitization**: Works in all browsers

## Future Enhancements

- [ ] CSRF token validation
- [ ] Two-factor authentication
- [ ] Session management improvements
- [ ] Security headers middleware
- [ ] Automated security scanning
- [ ] Penetration testing
- [ ] Security audit logging to external service

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [DOMPurify Documentation](https://github.com/cure53/DOMPurify)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

