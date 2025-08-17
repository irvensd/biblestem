import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface AppError {
  id: string
  message: string
  code?: string
  details?: any
  timestamp: string
  type: 'error' | 'warning' | 'info'
  persistent?: boolean
}

export const useErrorStore = defineStore('errors', () => {
  const errors = ref<AppError[]>([])

  const addError = (
    message: string,
    options: {
      code?: string
      details?: any
      type?: 'error' | 'warning' | 'info'
      persistent?: boolean
    } = {}
  ) => {
    const error: AppError = {
      id: Date.now().toString() + Math.random(),
      message,
      code: options.code,
      details: options.details,
      timestamp: new Date().toISOString(),
      type: options.type || 'error',
      persistent: options.persistent || false
    }

    errors.value.push(error)

    // Auto-remove non-persistent errors after 5 seconds
    if (!error.persistent) {
      setTimeout(() => {
        removeError(error.id)
      }, 5000)
    }

    return error.id
  }

  const removeError = (id: string) => {
    const index = errors.value.findIndex(error => error.id === id)
    if (index !== -1) {
      errors.value.splice(index, 1)
    }
  }

  const clearErrors = () => {
    errors.value = []
  }

  const clearErrorsByType = (type: 'error' | 'warning' | 'info') => {
    errors.value = errors.value.filter(error => error.type !== type)
  }

  // Helper functions for different error types
  const addNetworkError = (message = 'Network error occurred. Please check your connection.') => {
    return addError(message, { code: 'NETWORK_ERROR', type: 'error' })
  }

  const addAuthError = (message = 'Authentication failed. Please sign in again.') => {
    return addError(message, { code: 'AUTH_ERROR', type: 'error' })
  }

  const addValidationError = (message: string, field?: string) => {
    return addError(message, { 
      code: 'VALIDATION_ERROR', 
      type: 'warning',
      details: { field }
    })
  }

  const addApiError = (message: string, status?: number) => {
    return addError(message, {
      code: 'API_ERROR',
      type: 'error',
      details: { status }
    })
  }

  // Global error handler
  const handleError = (error: any, context?: string) => {
    console.error(`Error in ${context || 'application'}:`, error)

    let message = 'An unexpected error occurred'
    let code = 'UNKNOWN_ERROR'

    if (error instanceof Error) {
      message = error.message
    } else if (typeof error === 'string') {
      message = error
    } else if (error?.message) {
      message = error.message
    }

    // Handle specific error types
    if (error?.name === 'NetworkError' || error?.code === 'NETWORK_ERROR') {
      return addNetworkError(message)
    }

    if (error?.status === 401 || error?.code === 'AUTH_ERROR') {
      return addAuthError(message)
    }

    if (error?.status >= 400 && error?.status < 500) {
      code = 'CLIENT_ERROR'
    } else if (error?.status >= 500) {
      code = 'SERVER_ERROR'
    }

    return addError(message, { code, type: 'error', details: { context } })
  }

  return {
    errors,
    addError,
    removeError,
    clearErrors,
    clearErrorsByType,
    addNetworkError,
    addAuthError,
    addValidationError,
    addApiError,
    handleError
  }
})
