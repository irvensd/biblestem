/**
 * Centralized Error Handling Utility
 * Provides consistent error handling patterns across the application
 */

import { supabaseService } from '../services/supabaseService'
import type { SupabaseErrorInfo } from '../lib/supabase'

/**
 * Standard error types used across the application
 */
export enum ErrorType {
  NETWORK = 'NETWORK_ERROR',
  AUTHENTICATION = 'AUTH_ERROR',
  VALIDATION = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  PERMISSION = 'PERMISSION_ERROR',
  SERVER = 'SERVER_ERROR',
  UNKNOWN = 'UNKNOWN_ERROR',
}

/**
 * Standardized error structure
 */
export interface AppError {
  type: ErrorType
  message: string
  code?: string
  originalError?: unknown
  context?: string
  userFriendlyMessage: string
  timestamp: string
}

/**
 * Error handling options
 */
export interface ErrorHandlingOptions {
  /** Whether to log the error */
  log?: boolean
  /** Custom error message for user */
  userMessage?: string
  /** Whether to show error to user */
  showToUser?: boolean
  /** Additional context */
  context?: string
}

/**
 * Create a standardized error object
 */
export function createAppError(
  error: unknown,
  type: ErrorType = ErrorType.UNKNOWN,
  options: ErrorHandlingOptions = {}
): AppError {
  const timestamp = new Date().toISOString()
  let message = 'An unexpected error occurred'
  let code: string | undefined
  let userFriendlyMessage = options.userMessage || message

  // Extract error information
  if (error instanceof Error) {
    message = error.message
  } else if (typeof error === 'string') {
    message = error
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String((error as { message: unknown }).message)
    if ('code' in error) {
      code = String((error as { code: unknown }).code)
    }
  }

  // Handle Supabase errors
  if (error && typeof error === 'object' && ('code' in error || 'message' in error)) {
    const supabaseError = supabaseService.getErrorInfo(error, options.context)
    
    if (supabaseError.isAuthError) {
      type = ErrorType.AUTHENTICATION
      userFriendlyMessage = supabaseError.userFriendlyMessage
    } else if (supabaseError.isRLSViolation) {
      type = ErrorType.PERMISSION
      userFriendlyMessage = supabaseError.userFriendlyMessage
    } else if (supabaseError.isNetworkError) {
      type = ErrorType.NETWORK
      userFriendlyMessage = supabaseError.userFriendlyMessage
    } else if (supabaseError.isNotFound) {
      type = ErrorType.NOT_FOUND
      userFriendlyMessage = supabaseError.userFriendlyMessage
    } else {
      userFriendlyMessage = supabaseError.userFriendlyMessage
    }
    
    code = supabaseError.code
    message = supabaseError.message
  }

  // Log error if requested
  if (options.log !== false) {
    console.error(`[ErrorHandler] ${type}`, {
      message,
      code,
      context: options.context,
      error,
    })
  }

  return {
    type,
    message,
    code,
    originalError: error,
    context: options.context,
    userFriendlyMessage,
    timestamp,
  }
}

/**
 * Handle an error with consistent patterns
 * @param error - The error to handle
 * @param options - Error handling options
 * @returns Standardized error object
 */
export function handleError(
  error: unknown,
  options: ErrorHandlingOptions = {}
): AppError {
  return createAppError(error, ErrorType.UNKNOWN, options)
}

/**
 * Handle async operation errors with consistent patterns
 * @param operation - The async operation to execute
 * @param options - Error handling options
 * @returns Promise resolving to the result or null if error occurred
 */
export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  options: ErrorHandlingOptions = {}
): Promise<{ data: T | null; error: AppError | null }> {
  try {
    const data = await operation()
    return { data, error: null }
  } catch (error) {
    const appError = handleError(error, options)
    return { data: null, error: appError }
  }
}

/**
 * Check if error is a specific type
 */
export function isErrorType(error: AppError, type: ErrorType): boolean {
  return error.type === type
}

/**
 * Check if error requires user authentication
 */
export function requiresAuth(error: AppError): boolean {
  return error.type === ErrorType.AUTHENTICATION || error.type === ErrorType.PERMISSION
}

/**
 * Get user-friendly error message
 */
export function getUserErrorMessage(error: AppError): string {
  return error.userFriendlyMessage
}

