/**
 * Base API Service
 * Centralized API client for all backend communication
 */

import { config } from '../config'

export interface ApiError {
  message: string
  code?: string
  status?: number
  details?: any
}

export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

// API Client Configuration
class ApiClient {
  private baseUrl: string
  private defaultHeaders: Record<string, string>

  constructor() {
    this.baseUrl = config.api.baseUrl
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string) {
    this.defaultHeaders.Authorization = `Bearer ${token}`
  }

  /**
   * Remove authentication token
   */
  removeAuthToken() {
    delete this.defaultHeaders.Authorization
  }

  /**
   * Get headers with optional additional headers
   */
  private getHeaders(customHeaders?: Record<string, string>): HeadersInit {
    return {
      ...this.defaultHeaders,
      ...customHeaders,
    }
  }

  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: response.statusText || 'An error occurred',
      }))

      const apiError: ApiError = {
        message: error.message || 'An error occurred',
        code: error.code,
        status: response.status,
        details: error,
      }

      throw apiError
    }

    const data = await response.json().catch(() => ({} as T))
    return {
      data,
      status: response.status,
      message: response.statusText,
    }
  }

  /**
   * GET request
   */
  async get<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    const queryString = params
      ? `?${new URLSearchParams(Object.entries(params).map(([k, v]) => [k, String(v)])).toString()}`
      : ''

    const url = `${this.baseUrl}${endpoint}${queryString}`

    const response = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders(customHeaders),
    })

    const result = await this.handleResponse<T>(response)
    return result.data
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    body?: any,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const response = await fetch(url, {
      method: 'POST',
      headers: this.getHeaders(customHeaders),
      body: body ? JSON.stringify(body) : undefined,
    })

    const result = await this.handleResponse<T>(response)
    return result.data
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    body?: any,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const response = await fetch(url, {
      method: 'PUT',
      headers: this.getHeaders(customHeaders),
      body: body ? JSON.stringify(body) : undefined,
    })

    const result = await this.handleResponse<T>(response)
    return result.data
  }

  /**
   * PATCH request
   */
  async patch<T>(
    endpoint: string,
    body?: any,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const response = await fetch(url, {
      method: 'PATCH',
      headers: this.getHeaders(customHeaders),
      body: body ? JSON.stringify(body) : undefined,
    })

    const result = await this.handleResponse<T>(response)
    return result.data
  }

  /**
   * DELETE request
   */
  async delete<T>(
    endpoint: string,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const response = await fetch(url, {
      method: 'DELETE',
      headers: this.getHeaders(customHeaders),
    })

    const result = await this.handleResponse<T>(response)
    return result.data
  }
}

// Export singleton instance
export const apiClient = new ApiClient()

// Export error handler
export const handleApiError = (error: any): ApiError => {
  if (error.code === 'NETWORK_ERROR' || error.message === 'Failed to fetch') {
    return {
      message: 'Network error. Please check your internet connection.',
      code: 'NETWORK_ERROR',
    }
  }

  if (error.status === 401) {
    return {
      message: 'Your session has expired. Please sign in again.',
      code: 'UNAUTHORIZED',
      status: 401,
    }
  }

  if (error.status === 403) {
    return {
      message: 'You do not have permission to perform this action.',
      code: 'FORBIDDEN',
      status: 403,
    }
  }

  if (error.status === 404) {
    return {
      message: 'The requested resource was not found.',
      code: 'NOT_FOUND',
      status: 404,
    }
  }

  if (error.status >= 500) {
    return {
      message: 'Server error. Please try again later.',
      code: 'SERVER_ERROR',
      status: error.status,
    }
  }

  return {
    message: error.message || 'An unexpected error occurred',
    code: error.code || 'UNKNOWN_ERROR',
    status: error.status,
    details: error.details,
  }
}

