/**
 * Standard loading pattern composable
 * Provides consistent loading states across all components
 */

import { ref, computed } from 'vue'
import { useLoadingStore } from '../stores/loading'

export interface LoadingOptions {
  key?: string
  errorMessage?: string
  successMessage?: string
  onError?: (error: Error) => void
  onSuccess?: () => void
}

export function useStandardLoading(componentName: string) {
  const loadingStore = useLoadingStore()
  
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const success = ref<string | null>(null)
  
  /**
   * Execute an async operation with standard loading/error handling
   */
  const withLoading = async <T>(
    operation: () => Promise<T>,
    options: LoadingOptions = {}
  ): Promise<T | null> => {
    const loadingKey = options.key || componentName
    
    // Reset states
    error.value = null
    success.value = null
    isLoading.value = true
    
    // Set global loading state
    loadingStore.setLoading(loadingKey, true)
    
    try {
      const result = await operation()
      
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
      // Error handling
      const errorMessage = err instanceof Error 
        ? err.message 
        : options.errorMessage || 'An error occurred'
      
      error.value = errorMessage
      
      if (options.onError && err instanceof Error) {
        options.onError(err)
      }
      
      console.error(`[${componentName}] Error:`, err)
      return null
    } finally {
      isLoading.value = false
      loadingStore.clearLoading(loadingKey)
    }
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
   * Clear all messages
   */
  const clearMessages = () => {
    error.value = null
    success.value = null
  }
  
  /**
   * Check if specific key is loading
   */
  const isKeyLoading = (key: string) => {
    return loadingStore.isLoadingKey(key).value
  }
  
  /**
   * Get loading state for display
   */
  const loadingState = computed(() => ({
    isLoading: isLoading.value,
    hasError: error.value !== null,
    hasSuccess: success.value !== null,
    error: error.value,
    success: success.value,
  }))
  
  return {
    // State
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    success: computed(() => success.value),
    loadingState,
    
    // Methods
    withLoading,
    clearError,
    clearSuccess,
    clearMessages,
    isKeyLoading,
  }
}

