/**
 * Supabase Client Configuration
 * Initialize and export Supabase client for database operations
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { config } from '../config'
import { errorLogger } from '../services/errorLogger'

let supabaseClient: SupabaseClient | null = null

/**
 * Initialize Supabase client
 */
export const initSupabase = () => {
  if (!config.supabase.url || !config.supabase.anonKey) {
    console.warn('Supabase is not configured. Using mock mode.')
    return null
  }

  if (!supabaseClient) {
    supabaseClient = createClient(config.supabase.url, config.supabase.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })

    // Monitor token refresh - Supabase handles this via auth state change events
    // The TOKEN_REFRESHED event will be handled in the auth store
  }

  return supabaseClient
}

/**
 * Get Supabase client instance
 */
export const getSupabase = (): SupabaseClient | null => {
  if (!supabaseClient) {
    return initSupabase()
  }
  return supabaseClient
}

/**
 * Check if Supabase is available
 */
export const isSupabaseAvailable = (): boolean => {
  return config.supabase.isConfigured && !!getSupabase()
}

/**
 * Supabase Error Types
 */
export interface SupabaseErrorInfo {
  code: string
  message: string
  isRLSViolation: boolean
  isAuthError: boolean
  isNetworkError: boolean
  isNotFound: boolean
  originalError: unknown
  userFriendlyMessage: string
}

/**
 * Handle Supabase errors with proper detection of RLS violations and other issues
 * @param error - The error from Supabase
 * @param context - Additional context about what operation failed
 * @returns Structured error information
 */
export const handleSupabaseError = (
  error: unknown,
  context?: string,
): SupabaseErrorInfo => {
  // Type-safe error extraction
  const errorObj = error && typeof error === 'object' ? error as Record<string, unknown> : null
  const errorCode = errorObj?.code ? String(errorObj.code) : ''
  const errorMessage = errorObj?.message ? String(errorObj.message) : 'An unexpected error occurred'
  
  // Log error to monitoring service
  errorLogger.logError(
    `Supabase error: ${errorMessage}`,
    error instanceof Error ? error : new Error(errorMessage),
    {
      code: errorCode,
      context: context || 'unknown',
      supabaseError: true,
    }
  ).catch(() => {
    // Silently fail if logging fails
  })
  
  // Check for RLS policy violations
  // PGRST301 = no rows returned (often RLS)
  // PGRST116 = RLS policy violation
  // 42501 = insufficient privilege (PostgreSQL)
  const isRLSViolation =
    errorCode === 'PGRST116' ||
    errorCode === 'PGRST301' ||
    errorCode === '42501' ||
    errorMessage.includes('row-level security') ||
    errorMessage.includes('policy violation') ||
    errorMessage.includes('permission denied')

  // Check for authentication errors
  const isAuthError =
    errorCode === 'PGRST301' ||
    errorMessage.includes('JWT') ||
    errorMessage.includes('token') ||
    errorMessage.includes('unauthorized') ||
    errorMessage.includes('authentication')

  // Check for network errors
  const isNetworkError =
    errorMessage.includes('fetch') ||
    errorMessage.includes('network') ||
    errorMessage.includes('Failed to fetch')

  // Check for not found errors
  const isNotFound =
    errorCode === 'PGRST116' ||
    errorMessage.includes('not found') ||
    errorMessage.includes('does not exist')

  // Generate user-friendly message
  let userFriendlyMessage = 'An error occurred'
  
  if (isRLSViolation) {
    userFriendlyMessage = 'You do not have permission to access this resource. Please ensure you are signed in and have the necessary access.'
    if (context) {
      userFriendlyMessage = `You do not have permission to ${context}. Please ensure you are signed in.`
    }
  } else if (isAuthError) {
    userFriendlyMessage = 'Your session has expired. Please sign in again to continue.'
  } else if (isNetworkError) {
    userFriendlyMessage = 'Unable to connect to the server. Please check your internet connection and try again.'
  } else if (isNotFound) {
    userFriendlyMessage = context 
      ? `The requested ${context} was not found.`
      : 'The requested resource was not found.'
  } else {
    // Use original message or provide generic one
    userFriendlyMessage = errorMessage || 'An unexpected error occurred'
  }

  return {
    code: errorCode || 'UNKNOWN_ERROR',
    message: errorMessage,
    isRLSViolation,
    isAuthError,
    isNetworkError,
    isNotFound,
    originalError: error,
    userFriendlyMessage,
  }
}

/**
 * Check if error requires re-authentication
 */
export const requiresReAuth = (error: unknown): boolean => {
  const errorInfo = handleSupabaseError(error)
  return errorInfo.isAuthError || errorInfo.isRLSViolation
}

/**
 * Execute a Supabase operation with automatic retry and error recovery
 * This integrates network error recovery with Supabase retry logic
 * 
 * @param operation - Async function that performs the Supabase operation
 * @param context - Context description for error messages
 * @param options - Retry options
 * @returns The result of the operation
 */
export const withSupabaseRetry = async <T>(
  operation: () => Promise<T>,
  context?: string,
  options?: {
    maxRetries?: number
    retryableErrors?: string[]
    onError?: (error: SupabaseErrorInfo) => void
  }
): Promise<T> => {
  const maxRetries = options?.maxRetries ?? 3
  const retryableErrors = options?.retryableErrors ?? ['NETWORK_ERROR', 'SERVER_ERROR', 'TIMEOUT_ERROR']
  
  let lastError: unknown = null
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await operation()
      
      // Success - return result
      return result
      
    } catch (error) {
      lastError = error
      const errorInfo = handleSupabaseError(error, context)
      
      // Call custom error handler if provided
      if (options?.onError) {
        options.onError(errorInfo)
      }
      
      // Don't retry non-retryable errors
      if (!errorInfo.isNetworkError && 
          !retryableErrors.includes(errorInfo.code) &&
          !errorInfo.message.includes('fetch') &&
          !errorInfo.message.includes('network')) {
        throw error
      }
      
      // Don't retry auth/RLS errors - they won't succeed on retry
      if (errorInfo.isAuthError || errorInfo.isRLSViolation) {
        throw error
      }
      
      // If this is the last attempt, throw the error
      if (attempt === maxRetries) {
        throw error
      }
      
      // Calculate exponential backoff delay
      const delay = Math.min(1000 * Math.pow(2, attempt), 10000)
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay))
      
      console.log(`Retrying Supabase operation (attempt ${attempt + 1}/${maxRetries})...`, context)
    }
  }
  
  // Should never reach here, but TypeScript needs it
  throw lastError
}

/**
 * Execute a Supabase query with retry logic
 * Convenience wrapper for common Supabase query patterns
 */
export const executeSupabaseQuery = async <T>(
  queryFn: () => Promise<{ data: T | null; error: unknown }>,
  context?: string
): Promise<T> => {
  return withSupabaseRetry(async () => {
    const { data, error } = await queryFn()
    
    if (error) {
      throw error
    }
    
    if (data === null) {
      throw new Error(`${context || 'Resource'} not found`)
    }
    
    return data
  }, context)
}

