/**
 * Centralized API Service Layer
 * Provides a clean abstraction over Supabase operations
 * Replaces direct Supabase calls throughout the application
 */

import { supabaseService } from './supabaseService'
import { handleError, withErrorHandling, type AppError } from '../utils/errorHandler'
import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  data: T | null
  error: AppError | null
  success: boolean
}

/**
 * Pagination options
 */
export interface PaginationOptions {
  page?: number
  pageSize?: number
  orderBy?: string
  orderDirection?: 'asc' | 'desc'
}

/**
 * Query options
 */
export interface QueryOptions extends PaginationOptions {
  filters?: Record<string, unknown>
  select?: string
}

/**
 * Base API service class
 */
class ApiService {
  /**
   * Execute a query operation
   */
  protected async query<T>(
    table: string,
    operation: (client: SupabaseClient) => Promise<{ data: T | null; error: unknown }>,
    context?: string
  ): Promise<ApiResponse<T>> {
    const result = await withErrorHandling(async () => {
      const client = supabaseService.client
      if (!client) {
        throw new Error('Supabase client not available')
      }
      return await supabaseService.executeQuery(() => operation(client), context)
    }, { context: `Query ${table}`, log: true })
    return { ...result, success: !result.error }
  }

  /**
   * Execute a mutation operation (insert, update, delete)
   */
  protected async mutate<T>(
    table: string,
    operation: (client: SupabaseClient) => Promise<{ data: T | null; error: unknown }>,
    context?: string
  ): Promise<ApiResponse<T>> {
    const result = await withErrorHandling(async () => {
      const client = supabaseService.client
      if (!client) {
        throw new Error('Supabase client not available')
      }
      return await supabaseService.executeMutation(() => operation(client), context)
    }, { context: `Mutation ${table}`, log: true })
    return { ...result, success: !result.error }
  }

  /**
   * Get a single record by ID
   */
  async getById<T>(table: string, id: string, select = '*'): Promise<ApiResponse<T>> {
    return this.query<T>(
      table,
      async (client) => {
        if (!client) throw new Error('Client not available')
        const result = await client.from(table).select(select).eq('id', id).single()
        return { data: result.data as T | null, error: result.error as unknown }
      },
      `Get ${table} by ID`
    )
  }

  /**
   * Get all records with optional filters
   */
  async getAll<T>(table: string, options: QueryOptions = {}): Promise<ApiResponse<T[]>> {
    return this.query<T[]>(
      table,
      async (client) => {
        if (!client) throw new Error('Client not available')
        
        let query = client.from(table).select(options.select || '*')
        
        // Apply filters
        if (options.filters) {
          Object.entries(options.filters).forEach(([key, value]) => {
            query = query.eq(key, value)
          })
        }
        
        // Apply ordering
        if (options.orderBy) {
          query = query.order(options.orderBy, { ascending: options.orderDirection !== 'desc' })
        }
        
        // Apply pagination
        if (options.page && options.pageSize) {
          const from = (options.page - 1) * options.pageSize
          const to = from + options.pageSize - 1
          query = query.range(from, to)
        }
        
        const result = await query
        return { data: result.data as T[] | null, error: result.error as unknown }
      },
      `Get all ${table}`
    )
  }

  /**
   * Create a new record
   */
  async create<T>(table: string, data: Partial<T>): Promise<ApiResponse<T>> {
    return this.mutate<T>(
      table,
      async (client) => {
        if (!client) throw new Error('Client not available')
        const result = await client.from(table).insert(data).select().single()
        return { data: result.data as T | null, error: result.error as unknown }
      },
      `Create ${table}`
    )
  }

  /**
   * Update a record by ID
   */
  async update<T>(table: string, id: string, data: Partial<T>): Promise<ApiResponse<T>> {
    return this.mutate<T>(
      table,
      async (client) => {
        if (!client) throw new Error('Client not available')
        const result = await client.from(table).update(data).eq('id', id).select().single()
        return { data: result.data as T | null, error: result.error as unknown }
      },
      `Update ${table}`
    )
  }

  /**
   * Delete a record by ID
   */
  async delete(table: string, id: string): Promise<ApiResponse<void>> {
    return this.mutate<void>(
      table,
      async (client) => {
        if (!client) throw new Error('Client not available')
        const result = await client.from(table).delete().eq('id', id)
        return { data: result.data as void | null, error: result.error as unknown }
      },
      `Delete ${table}`
    )
  }

  /**
   * Execute a custom query
   */
  async customQuery<T>(
    queryFn: (client: SupabaseClient) => Promise<{ data: T | null; error: unknown }>,
    context?: string
  ): Promise<ApiResponse<T>> {
    return this.query<T>('custom', queryFn, context)
  }
}

/**
 * Studies API service
 */
export class StudiesApiService extends ApiService {
  async getStudy(id: string) {
    return this.getById('studies', id)
  }

  async getAllStudies(options: QueryOptions = {}) {
    return this.getAll('studies', options)
  }

  async getStudyLessons(studyId: string, options: QueryOptions = {}) {
    return this.getAll('lessons', {
      ...options,
      filters: { ...options.filters, study_id: studyId },
      orderBy: options.orderBy || 'lesson_order',
      orderDirection: options.orderDirection || 'asc',
    })
  }

  async getLesson(studyId: string, lessonId: string) {
    return this.customQuery(async (client) => {
      if (!client) throw new Error('Client not available')
      return await client
        .from('lessons')
        .select('*')
        .eq('study_id', studyId)
        .eq('id', lessonId)
        .single()
    }, 'Get lesson')
  }
}

/**
 * Notes API service
 */
export class NotesApiService extends ApiService {
  async getUserNotes(userId: string, options: QueryOptions = {}) {
    return this.getAll('study_notes', {
      ...options,
      filters: { ...options.filters, user_id: userId },
      orderBy: options.orderBy || 'created_at',
      orderDirection: options.orderDirection || 'desc',
    })
  }

  async createNote(data: Partial<unknown>) {
    return this.create('study_notes', data)
  }

  async updateNote(id: string, data: Partial<unknown>) {
    return this.update('study_notes', id, data)
  }

  async deleteNote(id: string) {
    return this.delete('study_notes', id)
  }
}

/**
 * Users API service
 */
export class UsersApiService extends ApiService {
  async getUserProfile(userId: string) {
    return this.getById('users', userId)
  }

  async updateUserProfile(userId: string, data: Partial<unknown>) {
    return this.update('users', userId, data)
  }
}

// Export singleton instances
export const studiesApi = new StudiesApiService()
export const notesApi = new NotesApiService()
export const usersApi = new UsersApiService()

// Export base service for custom implementations
export const apiService = new ApiService()

