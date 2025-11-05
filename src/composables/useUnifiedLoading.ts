/**
 * Unified Loading Composable
 * Centralized loading state management to replace scattered isLoading refs
 * Combines the best features of useLoading and useStandardLoading
 */

import { ref, computed } from 'vue'
import { useLoadingStore } from '../stores/loading'
import { handleError, type AppError } from '../utils/errorHandler'

/**
 * Options for loading operations
 */
export interface UnifiedLoadingOptions {
  /** Unique key for this loading operation (for global tracking) */
  key?: string
  /** Minimum time to show loading (prevents flash) */
  minLoadingTime?: number
  /** Custom error message */
  errorMessage?: string
  /** Success message to display */
  successMessage?: string
  /** Callback on error */
  onError?: (error: AppError) => void
  /** Callback on success */
  onSuccess?: () => void
  /** Whether to log errors */
  logErrors?: boolean
}

/**
 * Unified loading composable
 * @param componentName - Name of the component using this composable (for debugging)
 * @returns Loading state and methods
 */
export function useUnifiedLoading(componentName: string = 'Component') {
  const loadingStore = useLoadingStore()
  
  const isLoading = ref(false)
  const error = ref<AppError | null>(null)
  const success = ref<string | null>(null)
  const startTime = ref<number>(0)

  /**
   * Execute an async operation with loading state management
   * @param operation - The async operation to execute
   * @param options - Loading options
   * @returns Promise resolving to the result or null if error occurred
   */
  const execute = async <T>(
    operation: () => Promise<T>,
    options: UnifiedLoadingOptions = {}
  ): Promise<T | null> => {
    const loadingKey = options.key || componentName
    const minTime = options.minLoadingTime || 0
    
    // Reset states
    error.value = null
    success.value = null
    isLoading.value = true
    startTime.value = Date.now()
    
    // Set global loading state
    loadingStore.setLoading(loadingKey, true)
    
    try {
      const result = await operation()
      
      // Ensure minimum loading time
      const elapsed = Date.now() - startTime.value
      if (elapsed < minTime) {
        await new Promise(resolve => setTimeout(resolve, minTime - elapsed))
      }
      
      // Success handling
      if (options.successMessage) {
        success.value = options.successMessage
        setTimeout(() => {
          success.value = null
        }, 3000)
      }
      
      if (options.onSuccess) {
        options.onSuccess()
      }
      
      return result
    } catch (err) {
      // Error handling with centralized error handler
      const appError = handleError(err, {
        context: `${componentName}: ${options.errorMessage || 'operation failed'}`,
        log: options.logErrors !== false,
        userMessage: options.errorMessage,
      })
      
      error.value = appError
      
      if (options.onError) {
        options.onError(appError)
      }
      
      return null
    } finally {
      isLoading.value = false
      loadingStore.clearLoading(loadingKey)
    }
  }

  /**
   * Set loading state manually
   * @param value - Loading state
   * @param key - Optional key for global tracking
   */
  const setLoading = (value: boolean, key?: string) => {
    isLoading.value = value
    const loadingKey = key || componentName
    
    if (value) {
      startTime.value = Date.now()
      loadingStore.setLoading(loadingKey, true)
    } else {
      loadingStore.clearLoading(loadingKey)
    }
  }

  /**
   * Set error manually
   * @param err - Error to set
   */
  const setError = (err: unknown) => {
    error.value = handleError(err, { context: componentName })
  }

  /**
   * Clear error message
   */
  const clearError = () => {
    error.value = null
  }

  /**
   * Clear success message
   */
  const clearSuccess = () => {
    success.value = null
  }

  /**
   * Clear all messages and reset state
   */
  const reset = () => {
    isLoading.value = false
    error.value = null
    success.value = null
    loadingStore.clearLoading(componentName)
  }

  /**
   * Check if a specific key is loading (for global loading states)
   */
  const isKeyLoading = (key: string) => {
    return loadingStore.isLoadingKey(key).value
  }

  /**
   * Get loading state object for display
   */
  const loadingState = computed(() => ({
    isLoading: isLoading.value,
    hasError: error.value !== null,
    hasSuccess: success.value !== null,
    error: error.value,
    success: success.value,
    errorMessage: error.value?.userFriendlyMessage || null,
  }))

  return {
    // State (computed)
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    success: computed(() => success.value),
    loadingState,
    
    // Methods
    execute,
    setLoading,
    setError,
    clearError,
    clearSuccess,
    reset,
    isKeyLoading,
  }
}

