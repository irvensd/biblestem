/**
 * Debounce Composable
 * Provides debouncing functionality with adaptive timing and proper cleanup
 */

import { ref, watch, type Ref, onUnmounted } from 'vue'

export interface DebounceOptions {
  /**
   * Default delay in milliseconds
   * @default 300
   */
  delay?: number
  
  /**
   * Minimum delay in milliseconds (for very short queries)
   * @default 150
   */
  minDelay?: number
  
  /**
   * Maximum delay in milliseconds (for very long queries)
   * @default 500
   */
  maxDelay?: number
  
  /**
   * Enable adaptive delay based on input length
   * Short inputs get longer delay, long inputs get shorter delay
   * @default true
   */
  adaptive?: boolean
  
  /**
   * Immediate execution for empty values
   * @default true
   */
  immediate?: boolean
  
  /**
   * Maximum wait time before forcing execution
   * @default 1000
   */
  maxWait?: number
}

/**
 * Creates a debounced value that updates after the specified delay
 * @param value - The value to debounce
 * @param options - Debounce options
 * @returns Debounced value and control functions
 */
export function useDebounce<T>(
  value: Ref<T>,
  options: DebounceOptions = {}
): {
  debouncedValue: Ref<T>
  isPending: Ref<boolean>
  cancel: () => void
  flush: () => void
} {
  const {
    delay = 300,
    minDelay = 150,
    maxDelay = 500,
    adaptive = true,
    immediate = true,
    maxWait = 1000
  } = options

  const debouncedValue = ref<T>(value.value) as Ref<T>
  const isPending = ref(false)
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let maxWaitTimeoutId: ReturnType<typeof setTimeout> | null = null
  let lastUpdateTime = Date.now()

  const calculateDelay = (val: T): number => {
    if (!adaptive) return delay

    // For string values, use length to determine delay
    if (typeof val === 'string') {
      const length = val.trim().length
      
      // Very short queries (1-2 chars): longer delay to avoid premature searches
      if (length <= 2) return maxDelay
      
      // Short queries (3-5 chars): medium delay
      if (length <= 5) return delay + 100
      
      // Medium queries (6-10 chars): default delay
      if (length <= 10) return delay
      
      // Long queries (11+ chars): shorter delay (user likely knows what they want)
      return minDelay
    }

    return delay
  }

  const cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    if (maxWaitTimeoutId) {
      clearTimeout(maxWaitTimeoutId)
      maxWaitTimeoutId = null
    }
    isPending.value = false
  }

  const flush = () => {
    cancel()
    debouncedValue.value = value.value
    isPending.value = false
  }

  const updateDebouncedValue = () => {
    const calculatedDelay = calculateDelay(value.value)

    // Cancel existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Handle immediate execution for empty/falsy values
    if (immediate && (!value.value || (typeof value.value === 'string' && !value.value.trim()))) {
      debouncedValue.value = value.value
      isPending.value = false
      lastUpdateTime = Date.now()
      return
    }

    // Set pending state
    isPending.value = true

    // Set max wait timeout to force execution
    if (maxWaitTimeoutId) {
      clearTimeout(maxWaitTimeoutId)
    }
    maxWaitTimeoutId = setTimeout(() => {
      flush()
    }, maxWait)

    // Set debounce timeout
    timeoutId = setTimeout(() => {
      debouncedValue.value = value.value
      isPending.value = false
      lastUpdateTime = Date.now()
      
      // Clear max wait timeout
      if (maxWaitTimeoutId) {
        clearTimeout(maxWaitTimeoutId)
        maxWaitTimeoutId = null
      }
    }, calculatedDelay)
  }

  // Watch for changes
  watch(value, updateDebouncedValue, { immediate: true })

  // Cleanup on unmount
  onUnmounted(() => {
    cancel()
  })

  return {
    debouncedValue,
    isPending,
    cancel,
    flush
  }
}

/**
 * Creates a debounced function
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function and control functions
 */
export function useDebounceFn<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
): {
  debouncedFn: (...args: Parameters<T>) => void
  cancel: () => void
  flush: () => void
  isPending: Ref<boolean>
} {
  const isPending = ref(false)
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null

  const cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    isPending.value = false
    lastArgs = null
  }

  const flush = () => {
    if (lastArgs !== null) {
      fn(...lastArgs)
      lastArgs = null
    }
    cancel()
  }

  const debouncedFn = (...args: Parameters<T>) => {
    lastArgs = args
    isPending.value = true

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      if (lastArgs !== null) {
        fn(...lastArgs)
        lastArgs = null
      }
      isPending.value = false
    }, delay)
  }

  // Cleanup on unmount
  onUnmounted(() => {
    cancel()
  })

  return {
    debouncedFn,
    cancel,
    flush,
    isPending
  }
}
