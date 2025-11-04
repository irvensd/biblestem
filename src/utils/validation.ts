/**
 * Validation Utilities
 * Comprehensive validation functions for forms
 */

import { sanitizeInput } from './sanitize'

export interface ValidationResult {
  isValid: boolean
  error?: string
}

/**
 * Validate email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Email is required' }
  }

  // Sanitize input first
  const sanitizedEmail = sanitizeInput(email).trim()

  // Email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailPattern.test(sanitizedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }

  // Check length
  if (sanitizedEmail.length > 254) {
    return { isValid: false, error: 'Email address is too long' }
  }

  return { isValid: true }
}

/**
 * Validate password strength
 */
export const validatePassword = (
  password: string,
  options: { minLength?: number; requireUppercase?: boolean; requireLowercase?: boolean; requireNumber?: boolean; requireSpecial?: boolean } = {}
): ValidationResult => {
  const {
    minLength = 8,
    requireUppercase = false,
    requireLowercase = true,
    requireNumber = false,
    requireSpecial = false,
  } = options

  if (!password || password.trim() === '') {
    return { isValid: false, error: 'Password is required' }
  }

  // Note: We don't sanitize passwords as they may contain special characters intentionally
  // But we still validate length and structure

  if (password.length < minLength) {
    return { isValid: false, error: `Password must be at least ${minLength} characters long` }
  }

  if (requireUppercase && !/[A-Z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one uppercase letter' }
  }

  if (requireLowercase && !/[a-z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one lowercase letter' }
  }

  if (requireNumber && !/[0-9]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one number' }
  }

  if (requireSpecial && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one special character' }
  }

  return { isValid: true }
}

/**
 * Validate full name
 */
export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'Name is required' }
  }

  // Sanitize input first
  const trimmedName = sanitizeInput(name).trim()

  // Check minimum length
  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' }
  }

  // Check maximum length
  if (trimmedName.length > 100) {
    return { isValid: false, error: 'Name is too long' }
  }

  // Check for valid characters (letters, spaces, hyphens, apostrophes)
  const namePattern = /^[a-zA-Z\s\-']+$/
  if (!namePattern.test(trimmedName)) {
    return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' }
  }

  return { isValid: true }
}

/**
 * Validate required field
 */
export const validateRequired = (value: string | number | boolean | null | undefined, fieldName: string): ValidationResult => {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, error: `${fieldName} is required` }
  }

  if (typeof value === 'string' && value.trim() === '') {
    return { isValid: false, error: `${fieldName} is required` }
  }

  return { isValid: true }
}

/**
 * Validate password confirmation
 */
export const validatePasswordMatch = (password: string, confirmPassword: string): ValidationResult => {
  if (!confirmPassword || confirmPassword.trim() === '') {
    return { isValid: false, error: 'Please confirm your password' }
  }

  if (password !== confirmPassword) {
    return { isValid: false, error: 'Passwords do not match' }
  }

  return { isValid: true }
}

/**
 * Get password strength indicator
 */
export const getPasswordStrength = (password: string): { strength: 'weak' | 'fair' | 'good' | 'strong'; score: number } => {
  if (!password) {
    return { strength: 'weak', score: 0 }
  }

  let score = 0

  // Length
  if (password.length >= 8) score += 1
  if (password.length >= 12) score += 1

  // Character variety
  if (/[a-z]/.test(password)) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1

  // Determine strength
  if (score <= 2) {
    return { strength: 'weak', score }
  } else if (score <= 4) {
    return { strength: 'fair', score }
  } else if (score <= 5) {
    return { strength: 'good', score }
  } else {
    return { strength: 'strong', score }
  }
}
