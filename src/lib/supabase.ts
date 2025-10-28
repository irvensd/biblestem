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

