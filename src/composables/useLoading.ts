/**
 * Loading State Composable
 * Manages loading states for components and pages
 */

import { ref, computed, watch } from 'vue'
import { useLoadingStore } from '../stores/loading'

export interface UseLoadingOptions {
  initialLoading?: boolean
  minLoadingTime?: number
}

export function useLoading(options: UseLoadingOptions = {}) {
  const loadingStore = useLoadingStore()
  const isLoading = ref(options.initialLoading || false)
  const error = ref<Error | null>(null)
  const startTime = ref<number>(0)

  const setLoading = (value: boolean) => {
    if (value) {
      startTime.value = Date.now()
    }
    isLoading.value = value
    
    // Update global loading state
    if (value) {
      loadingStore.startLoading()
    } else {
      const elapsed = Date.now() - startTime.value
      const minTime = options.minLoadingTime || 0
      
      if (elapsed < minTime) {
        setTimeout(() => {
          loadingStore.stopLoading()
        }, minTime - elapsed)
      } else {
        loadingStore.stopLoading()
      }
    }
  }

  const setError = (err: Error | null) => {
    error.value = err
  }

  const execute = async <T>(asyncFn: () => Promise<T>): Promise<T | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await asyncFn()
      return result
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'))
      return null
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setLoading(false)
    setError(null)
  }

  return {
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    setLoading,
    setError,
    execute,
    reset,
  }
}

