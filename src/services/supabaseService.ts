/**
 * Centralized Supabase Service
 * Singleton service to avoid repeated getSupabase() calls and provide
 * a clean API layer for all Supabase operations
 */

import { SupabaseClient } from '@supabase/supabase-js'
import { getSupabase, isSupabaseAvailable, handleSupabaseError, withSupabaseRetry } from '../lib/supabase'
import type { SupabaseErrorInfo } from '../lib/supabase'

/**
 * Supabase service singleton
 * Provides centralized access to Supabase client and common operations
 */
class SupabaseService {
  private _client: SupabaseClient | null = null
  private _isAvailable: boolean = false

  /**
   * Initialize the service
   */
  constructor() {
    this._isAvailable = isSupabaseAvailable()
    if (this._isAvailable) {
      this._client = getSupabase()
    }
  }

  /**
   * Get the Supabase client instance
   * @returns Supabase client or null if not available
   */
  get client(): SupabaseClient | null {
    if (!this._client && this._isAvailable) {
      this._client = getSupabase()
    }
    return this._client
  }

  /**
   * Check if Supabase is available
   */
  get available(): boolean {
    return this._isAvailable && this._client !== null
  }

  /**
   * Execute a Supabase query with error handling
   * @param operation - The Supabase operation to execute
   * @param context - Context for error messages
   * @returns Promise resolving to the query result
   * @throws Error if Supabase is not available or operation fails
   */
  async executeQuery<T>(
    operation: (client: SupabaseClient) => Promise<{ data: T | null; error: unknown }>,
    context?: string
  ): Promise<T> {
    if (!this.available || !this._client) {
      throw new Error('Supabase is not available')
    }

    return withSupabaseRetry(async () => {
      const { data, error } = await operation(this._client!)

      if (error) {
        const errorInfo = handleSupabaseError(error, context)
        throw new Error(errorInfo.userFriendlyMessage)
      }

      if (data === null) {
        throw new Error(`${context || 'Resource'} not found`)
      }

      return data
    }, context)
  }

  /**
   * Execute a Supabase mutation (insert, update, delete) with error handling
   * @param operation - The Supabase mutation operation
   * @param context - Context for error messages
   * @returns Promise resolving to the mutation result
   * @throws Error if Supabase is not available or operation fails
   */
  async executeMutation<T>(
    operation: (client: SupabaseClient) => Promise<{ data: T | null; error: unknown }>,
    context?: string
  ): Promise<T> {
    if (!this.available || !this._client) {
      throw new Error('Supabase is not available')
    }

    return withSupabaseRetry(async () => {
      const { data, error } = await operation(this._client!)

      if (error) {
        const errorInfo = handleSupabaseError(error, context)
        throw new Error(errorInfo.userFriendlyMessage)
      }

      if (data === null) {
        throw new Error(`${context || 'Operation'} failed`)
      }

      return data
    }, context)
  }

  /**
   * Execute multiple Supabase operations in parallel
   * @param operations - Array of operations to execute
   * @param context - Context for error messages
   * @returns Promise resolving to array of results
   */
  async executeBatch<T>(
    operations: Array<(client: SupabaseClient) => Promise<{ data: T | null; error: unknown }>>,
    context?: string
  ): Promise<T[]> {
    if (!this.available || !this._client) {
      throw new Error('Supabase is not available')
    }

    const results = await Promise.all(
      operations.map((op) => op(this._client!))
    )

    const errors = results.filter((r) => r.error)
    if (errors.length > 0) {
      const firstError = errors[0].error
      const errorInfo = handleSupabaseError(firstError, context)
      throw new Error(errorInfo.userFriendlyMessage)
    }

    return results.map((r) => r.data).filter((d): d is T => d !== null)
  }

  /**
   * Get error information from a Supabase error
   * @param error - The error object
   * @param context - Context for error messages
   * @returns Structured error information
   */
  getErrorInfo(error: unknown, context?: string): SupabaseErrorInfo {
    return handleSupabaseError(error, context)
  }
}

// Export singleton instance
export const supabaseService = new SupabaseService()

// Export convenience functions for common use cases
export const getSupabaseClient = () => supabaseService.client
export const isSupabaseReady = () => supabaseService.available

