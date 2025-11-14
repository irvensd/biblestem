import { describe, it, expect } from 'vitest'
import {
  validateEmail,
  validatePassword,
  validateName,
  validateRequired,
  validatePasswordMatch,
  getPasswordStrength,
} from '../validation'

describe('validation utilities', () => {
  describe('validateEmail', () => {
    it('should validate correct email addresses', () => {
      expect(validateEmail('test@example.com')).toEqual({ isValid: true })
      expect(validateEmail('user.name@domain.co.uk')).toEqual({ isValid: true })
      expect(validateEmail('user+tag@example.com')).toEqual({ isValid: true })
    })

    it('should reject invalid email addresses', () => {
      expect(validateEmail('invalid')).toEqual({
        isValid: false,
        error: 'Please enter a valid email address',
      })
      expect(validateEmail('invalid@')).toEqual({
        isValid: false,
        error: 'Please enter a valid email address',
      })
      expect(validateEmail('@example.com')).toEqual({
        isValid: false,
        error: 'Please enter a valid email address',
      })
      expect(validateEmail('test@')).toEqual({
        isValid: false,
        error: 'Please enter a valid email address',
      })
    })

    it('should reject empty emails', () => {
      expect(validateEmail('')).toEqual({
        isValid: false,
        error: 'Email is required',
      })
      expect(validateEmail('   ')).toEqual({
        isValid: false,
        error: 'Email is required',
      })
    })

    it('should reject emails that are too long', () => {
      const longEmail = 'a'.repeat(250) + '@example.com'
      expect(validateEmail(longEmail)).toEqual({
        isValid: false,
        error: 'Email address is too long',
      })
    })
  })

  describe('validatePassword', () => {
    it('should validate passwords with default requirements', () => {
      expect(validatePassword('password123')).toEqual({ isValid: true })
      expect(validatePassword('short')).toEqual({
        isValid: false,
        error: 'Password must be at least 8 characters long',
      })
    })

    it('should validate passwords with custom minimum length', () => {
      expect(validatePassword('pass', { minLength: 6 })).toEqual({
        isValid: false,
        error: 'Password must be at least 6 characters long',
      })
      expect(validatePassword('password', { minLength: 6 })).toEqual({
        isValid: true,
      })
    })

    it('should validate uppercase requirement', () => {
      expect(validatePassword('password123', { requireUppercase: true })).toEqual({
        isValid: false,
        error: 'Password must contain at least one uppercase letter',
      })
      expect(validatePassword('Password123', { requireUppercase: true })).toEqual({
        isValid: true,
      })
    })

    it('should validate lowercase requirement', () => {
      expect(validatePassword('PASSWORD123', { requireLowercase: true })).toEqual({
        isValid: false,
        error: 'Password must contain at least one lowercase letter',
      })
      expect(validatePassword('Password123', { requireLowercase: true })).toEqual({
        isValid: true,
      })
    })

    it('should validate number requirement', () => {
      expect(validatePassword('Password', { requireNumber: true })).toEqual({
        isValid: false,
        error: 'Password must contain at least one number',
      })
      expect(validatePassword('Password123', { requireNumber: true })).toEqual({
        isValid: true,
      })
    })

    it('should validate special character requirement', () => {
      expect(validatePassword('Password123', { requireSpecial: true })).toEqual({
        isValid: false,
        error: 'Password must contain at least one special character',
      })
      expect(validatePassword('Password123!', { requireSpecial: true })).toEqual({
        isValid: true,
      })
    })

    it('should reject empty passwords', () => {
      expect(validatePassword('')).toEqual({
        isValid: false,
        error: 'Password is required',
      })
      expect(validatePassword('   ')).toEqual({
        isValid: false,
        error: 'Password is required',
      })
    })
  })

  describe('validateName', () => {
    it('should validate correct names', () => {
      expect(validateName('John')).toEqual({ isValid: true })
      expect(validateName('John Doe')).toEqual({ isValid: true })
      expect(validateName("Mary-Jane O'Connor")).toEqual({ isValid: true })
    })

    it('should reject names that are too short', () => {
      expect(validateName('A')).toEqual({
        isValid: false,
        error: 'Name must be at least 2 characters long',
      })
    })

    it('should reject names that are too long', () => {
      const longName = 'A'.repeat(101)
      expect(validateName(longName)).toEqual({
        isValid: false,
        error: 'Name is too long',
      })
    })

    it('should reject names with invalid characters', () => {
      expect(validateName('John123')).toEqual({
        isValid: false,
        error: 'Name can only contain letters, spaces, hyphens, and apostrophes',
      })
      expect(validateName('John@Doe')).toEqual({
        isValid: false,
        error: 'Name can only contain letters, spaces, hyphens, and apostrophes',
      })
    })

    it('should reject empty names', () => {
      expect(validateName('')).toEqual({
        isValid: false,
        error: 'Name is required',
      })
      expect(validateName('   ')).toEqual({
        isValid: false,
        error: 'Name is required',
      })
    })
  })

  describe('validateRequired', () => {
    it('should validate non-empty values', () => {
      expect(validateRequired('value', 'Field')).toEqual({ isValid: true })
      expect(validateRequired(123, 'Field')).toEqual({ isValid: true })
      expect(validateRequired(true, 'Field')).toEqual({ isValid: true })
    })

    it('should reject empty values', () => {
      expect(validateRequired('', 'Field')).toEqual({
        isValid: false,
        error: 'Field is required',
      })
      expect(validateRequired('   ', 'Field')).toEqual({
        isValid: false,
        error: 'Field is required',
      })
      expect(validateRequired(null, 'Field')).toEqual({
        isValid: false,
        error: 'Field is required',
      })
      expect(validateRequired(undefined, 'Field')).toEqual({
        isValid: false,
        error: 'Field is required',
      })
    })
  })

  describe('validatePasswordMatch', () => {
    it('should validate matching passwords', () => {
      expect(validatePasswordMatch('password123', 'password123')).toEqual({
        isValid: true,
      })
    })

    it('should reject non-matching passwords', () => {
      expect(validatePasswordMatch('password123', 'password456')).toEqual({
        isValid: false,
        error: 'Passwords do not match',
      })
    })

    it('should reject empty confirmation', () => {
      expect(validatePasswordMatch('password123', '')).toEqual({
        isValid: false,
        error: 'Please confirm your password',
      })
    })
  })

  describe('getPasswordStrength', () => {
    it('should return weak for short passwords', () => {
      expect(getPasswordStrength('short')).toEqual({
        strength: 'weak',
        score: expect.any(Number),
      })
    })

    it('should return fair for medium passwords', () => {
      const result = getPasswordStrength('password123')
      expect(['weak', 'fair', 'good']).toContain(result.strength)
      expect(result.score).toBeGreaterThan(0)
    })

    it('should return good/strong for complex passwords', () => {
      const result = getPasswordStrength('Password123!')
      expect(['good', 'strong']).toContain(result.strength)
      expect(result.score).toBeGreaterThan(4)
    })

    it('should return weak for empty password', () => {
      expect(getPasswordStrength('')).toEqual({
        strength: 'weak',
        score: 0,
      })
    })
  })
})

