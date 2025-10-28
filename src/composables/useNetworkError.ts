import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface NetworkError {
  message: string
  code?: string
  status?: number
  retryable: boolean
}

export interface RetryOptions {
  maxRetries: number
  baseDelay: number
  maxDelay: number
  backoffMultiplier: number
}

export interface ErrorWithStatus extends Error {
  status?: number
}

export type NetworkErrorInput = Error | ErrorWithStatus | { status?: number; message?: string; name?: string }

export function useNetworkError() {
  // State
  const isOnline = ref(navigator.onLine)
  const networkErrors = ref<NetworkError[]>([])
  const isRetrying = ref(false)
  const retryCount = ref(0)
  
  // Default retry options
  const defaultRetryOptions: RetryOptions = {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 10000,
    backoffMultiplier: 2
  }
  
  // Computed
  const hasNetworkErrors = computed(() => networkErrors.value.length > 0)
  const lastError = computed(() => networkErrors.value[networkErrors.value.length - 1])
  const canRetry = computed(() => {
    const error = lastError.value
    return error?.retryable && retryCount.value < defaultRetryOptions.maxRetries
  })
  
  // Methods
  const handleNetworkError = (error: NetworkErrorInput): NetworkError => {
    let networkError: NetworkError
    
    if (error.name === 'TypeError' && error.message?.includes('fetch')) {
      // Network fetch error
      networkError = {
        message: 'Unable to connect to the server. Please check your internet connection.',
        code: 'NETWORK_ERROR',
        retryable: true
      }
    } else if ('status' in error && error.status) {
      // HTTP error
      const status = error.status
      if (status >= 500) {
        networkError = {
          message: 'Server error. Please try again in a moment.',
          code: 'SERVER_ERROR',
          status,
          retryable: true
        }
      } else if (status === 429) {
        networkError = {
          message: 'Too many requests. Please wait a moment before trying again.',
          code: 'RATE_LIMITED',
          status,
          retryable: true
        }
      } else if (status === 401) {
        networkError = {
          message: 'Authentication required. Please sign in again.',
          code: 'UNAUTHORIZED',
          status,
          retryable: false
        }
      } else if (status === 403) {
        networkError = {
          message: 'You don\'t have permission to access this resource.',
          code: 'FORBIDDEN',
          status,
          retryable: false
        }
      } else if (status === 404) {
        networkError = {
          message: 'The requested resource was not found.',
          code: 'NOT_FOUND',
          status,
          retryable: false
        }
      } else {
        networkError = {
          message: `Request failed with status ${status}.`,
          code: 'HTTP_ERROR',
          status,
          retryable: status >= 500
        }
      }
    } else {
      // Generic error
      networkError = {
        message: error.message || 'An unexpected network error occurred.',
        code: 'UNKNOWN_ERROR',
        retryable: true
      }
    }
    
    networkErrors.value.push(networkError)
    return networkError
  }
  
  const clearErrors = () => {
    networkErrors.value = []
    retryCount.value = 0
  }
  
  const retryWithBackoff = async <T>(
    operation: () => Promise<T>,
    options: Partial<RetryOptions> = {}
  ): Promise<T> => {
    const opts = { ...defaultRetryOptions, ...options }
    
    for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
      try {
        isRetrying.value = attempt > 0
        retryCount.value = attempt
        
        const result = await operation()
        
        // Success - clear errors and reset retry count
        clearErrors()
        return result
        
    } catch (error) {
      const networkError = handleNetworkError(error as NetworkErrorInput)
        
        // If this is the last attempt or error is not retryable, throw
        if (attempt === opts.maxRetries || !networkError.retryable) {
          throw networkError
        }
        
        // Calculate delay with exponential backoff
        const delay = Math.min(
          opts.baseDelay * Math.pow(opts.backoffMultiplier, attempt),
          opts.maxDelay
        )
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
    
    throw new Error('Max retries exceeded')
  }
  
  const withRetry = <T>(
    operation: () => Promise<T>,
    options?: Partial<RetryOptions>
  ) => {
    return retryWithBackoff(operation, options)
  }
  
  // Network status monitoring
  const updateOnlineStatus = () => {
    isOnline.value = navigator.onLine
    
    if (isOnline.value && hasNetworkErrors.value) {
      // Clear network errors when coming back online
      clearErrors()
    }
  }
  
  // Lifecycle
  onMounted(() => {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
  })
  
  onUnmounted(() => {
    window.removeEventListener('online', updateOnlineStatus)
    window.removeEventListener('offline', updateOnlineStatus)
  })
  
  return {
    // State
    isOnline,
    networkErrors,
    isRetrying,
    retryCount,
    
    // Computed
    hasNetworkErrors,
    lastError,
    canRetry,
    
    // Methods
    handleNetworkError,
    clearErrors,
    retryWithBackoff,
    withRetry
  }
}

// Enhanced fetch with automatic retry
export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retryOptions: Partial<RetryOptions> = {}
): Promise<Response> {
  const { retryWithBackoff } = useNetworkError()
  
  return retryWithBackoff(async () => {
    const response = await fetch(url, options)
    
    if (!response.ok) {
      const error = new Error(`HTTP ${response.status}: ${response.statusText}`)
      ;(error as Error & { status: number }).status = response.status
      throw error
    }
    
    return response
  }, retryOptions)
}

// Offline storage for failed requests
export class OfflineQueue {
  private queue: Array<{
    id: string
    request: {
      url: string
      options: RequestInit
    }
    timestamp: number
    retries: number
  }> = []
  
  private maxQueueSize = 100
  private maxRetries = 3
  
  add(request: { url: string; options: RequestInit }): string {
    const id = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Remove oldest items if queue is full
    if (this.queue.length >= this.maxQueueSize) {
      this.queue.shift()
    }
    
    this.queue.push({
      id,
      request,
      timestamp: Date.now(),
      retries: 0
    })
    
    this.saveToStorage()
    return id
  }
  
  async processQueue(): Promise<void> {
    if (!navigator.onLine) return
    
    const itemsToProcess = [...this.queue]
    this.queue = []
    
    for (const item of itemsToProcess) {
      try {
        await fetch(item.request.url, item.request.options)
        console.log(`Successfully processed queued request: ${item.id}`)
      } catch (err) {
        // Re-queue if retries not exceeded
        if (item.retries < this.maxRetries) {
          item.retries++
          this.queue.push(item)
        } else {
          console.warn(`Failed to process queued request after ${this.maxRetries} retries: ${item.id}`, err)
        }
      }
    }
    
    this.saveToStorage()
  }
  
  clear(): void {
    this.queue = []
    this.saveToStorage()
  }
  
  getQueueSize(): number {
    return this.queue.length
  }
  
  private saveToStorage(): void {
    try {
      localStorage.setItem('offline_queue', JSON.stringify(this.queue))
    } catch (error) {
      console.warn('Failed to save offline queue to storage:', error)
    }
  }
  
  loadFromStorage(): void {
    try {
      const stored = localStorage.getItem('offline_queue')
      if (stored) {
        this.queue = JSON.parse(stored)
      }
    } catch (error) {
      console.warn('Failed to load offline queue from storage:', error)
    }
  }
}

// Global offline queue instance
export const offlineQueue = new OfflineQueue()

// Initialize offline queue
if (typeof window !== 'undefined') {
  offlineQueue.loadFromStorage()
  
  // Process queue when coming back online
  window.addEventListener('online', () => {
    offlineQueue.processQueue()
  })
}
