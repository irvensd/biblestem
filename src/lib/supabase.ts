/**
 * Supabase Client Configuration
 * Initialize and export Supabase client for database operations
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { config } from '../config'

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
  originalError: any
  userFriendlyMessage: string
}

/**
 * Handle Supabase errors with proper detection of RLS violations and other issues
 * @param error - The error from Supabase
 * @param context - Additional context about what operation failed
 * @returns Structured error information
 */
export const handleSupabaseError = (
  error: any,
  context?: string,
): SupabaseErrorInfo => {
  const errorCode = error?.code || ''
  const errorMessage = error?.message || 'An unexpected error occurred'
  
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
export const requiresReAuth = (error: any): boolean => {
  const errorInfo = handleSupabaseError(error)
  return errorInfo.isAuthError || errorInfo.isRLSViolation
}

