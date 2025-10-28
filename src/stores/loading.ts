import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface LoadingState {
  [key: string]: boolean
}

export const useLoadingStore = defineStore('loading', () => {
  const loadingStates = ref<LoadingState>({})
  const globalLoading = ref(false)
  const loadingCount = ref(0)

  const isLoading = computed(() => {
    return Object.values(loadingStates.value).some((state) => state)
  })

  const isLoadingKey = (key: string) => {
    return computed(() => loadingStates.value[key] || false)
  }

  const setLoading = (key: string, loading: boolean) => {
    if (loading) {
      loadingStates.value[key] = true
    } else {
      delete loadingStates.value[key]
    }
  }

  const clearLoading = (key: string) => {
    delete loadingStates.value[key]
  }

  const clearAllLoading = () => {
    loadingStates.value = {}
  }

  // Helper function for wrapping async operations
  const withLoading = async <T>(key: string, operation: () => Promise<T>): Promise<T> => {
    setLoading(key, true)
    try {
      const result = await operation()
      return result
    } finally {
      clearLoading(key)
    }
  }

  // Global loading management
  const startLoading = () => {
    loadingCount.value++
    globalLoading.value = true
  }

  const stopLoading = () => {
    loadingCount.value = Math.max(0, loadingCount.value - 1)
    if (loadingCount.value === 0) {
      globalLoading.value = false
    }
  }

  return {
    loadingStates,
    isLoading,
    globalLoading: computed(() => globalLoading.value),
    isLoadingKey,
    setLoading,
    clearLoading,
    clearAllLoading,
    withLoading,
    startLoading,
    stopLoading,
  }
})
