import { ref, onUnmounted, watchEffect, type WatchStopHandle } from 'vue'

interface CleanupFunction {
  (): void
}

export function useCleanup() {
  const cleanupFunctions = ref<CleanupFunction[]>([])
  const watchers = ref<WatchStopHandle[]>([])
  const intervals = ref<ReturnType<typeof setInterval>[]>([])
  const timeouts = ref<ReturnType<typeof setTimeout>[]>([])
  const eventListeners = ref<
    {
      target: EventTarget
      event: string
      handler: EventListener
      options?: boolean | AddEventListenerOptions
    }[]
  >([])

  // Add a generic cleanup function
  const addCleanup = (fn: CleanupFunction) => {
    cleanupFunctions.value.push(fn)
  }

  // Add watcher cleanup
  const addWatcher = (stopHandle: WatchStopHandle) => {
    watchers.value.push(stopHandle)
    return stopHandle
  }

  // Add interval cleanup
  const addInterval = (intervalId: ReturnType<typeof setInterval>) => {
    intervals.value.push(intervalId)
    return intervalId
  }

  // Add timeout cleanup
  const addTimeout = (timeoutId: ReturnType<typeof setTimeout>) => {
    timeouts.value.push(timeoutId)
    return timeoutId
  }

  // Add event listener cleanup
  const addEventListener = (
    target: EventTarget,
    event: string,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions,
  ) => {
    target.addEventListener(event, handler, options)
    eventListeners.value.push({ target, event, handler, options })
  }

  // Helper to create a safe watcher that auto-cleans up
  const safeWatch = (source: any, callback: any, options?: any) => {
    const stopHandle = watchEffect(() => {
      try {
        callback()
      } catch (error) {
        console.error('Watcher error:', error)
      }
    }, options)

    addWatcher(stopHandle)
    return stopHandle
  }

  // Helper to create a safe interval
  const safeInterval = (callback: () => void, delay: number) => {
    const intervalId = setInterval(() => {
      try {
        callback()
      } catch (error) {
        console.error('Interval error:', error)
      }
    }, delay)

    addInterval(intervalId)
    return intervalId
  }

  // Helper to create a safe timeout
  const safeTimeout = (callback: () => void, delay: number) => {
    const timeoutId = setTimeout(() => {
      try {
        callback()
      } catch (error) {
        console.error('Timeout error:', error)
      }
    }, delay)

    addTimeout(timeoutId)
    return timeoutId
  }

  // Cleanup all resources
  const cleanup = () => {
    // Stop all watchers
    watchers.value.forEach((stopHandle) => {
      try {
        stopHandle()
      } catch (error) {
        console.error('Error stopping watcher:', error)
      }
    })
    watchers.value = []

    // Clear all intervals
    intervals.value.forEach((intervalId) => {
      try {
        clearInterval(intervalId)
      } catch (error) {
        console.error('Error clearing interval:', error)
      }
    })
    intervals.value = []

    // Clear all timeouts
    timeouts.value.forEach((timeoutId) => {
      try {
        clearTimeout(timeoutId)
      } catch (error) {
        console.error('Error clearing timeout:', error)
      }
    })
    timeouts.value = []

    // Remove all event listeners
    eventListeners.value.forEach(({ target, event, handler, options }) => {
      try {
        target.removeEventListener(event, handler, options)
      } catch (error) {
        console.error('Error removing event listener:', error)
      }
    })
    eventListeners.value = []

    // Execute all cleanup functions
    cleanupFunctions.value.forEach((fn) => {
      try {
        fn()
      } catch (error) {
        console.error('Error in cleanup function:', error)
      }
    })
    cleanupFunctions.value = []
  }

  // Auto-cleanup on unmount
  onUnmounted(cleanup)

  return {
    addCleanup,
    addWatcher,
    addInterval,
    addTimeout,
    addEventListener,
    safeWatch,
    safeInterval,
    safeTimeout,
    cleanup,
  }
}

// Specific composable for DOM event handling
export function useDOMEvents() {
  const cleanup = useCleanup()

  const onClick = (
    element: HTMLElement | Window | Document,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions,
  ) => {
    cleanup.addEventListener(element, 'click', handler, options)
  }

  const onResize = (handler: EventListener, options?: boolean | AddEventListenerOptions) => {
    cleanup.addEventListener(window, 'resize', handler, options)
  }

  const onScroll = (
    element: HTMLElement | Window | Document,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions,
  ) => {
    cleanup.addEventListener(element, 'scroll', handler, options)
  }

  const onKeydown = (
    element: HTMLElement | Window | Document,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions,
  ) => {
    cleanup.addEventListener(element, 'keydown', handler, options)
  }

  const onKeyup = (
    element: HTMLElement | Window | Document,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions,
  ) => {
    cleanup.addEventListener(element, 'keyup', handler, options)
  }

  return {
    onClick,
    onResize,
    onScroll,
    onKeydown,
    onKeyup,
    cleanup: cleanup.cleanup,
  }
}

// Composable for managing component state safely
export function useSafeState() {
  const cleanup = useCleanup()
  const isMounted = ref(true)

  cleanup.addCleanup(() => {
    isMounted.value = false
  })

  // Safe state setter that only updates if component is still mounted
  const safeSet = <T>(refToUpdate: { value: T }, newValue: T) => {
    if (isMounted.value) {
      refToUpdate.value = newValue
    }
  }

  // Safe async operation wrapper
  const safeAsync = async <T>(operation: () => Promise<T>): Promise<T | null> => {
    try {
      const result = await operation()
      return isMounted.value ? result : null
    } catch (error) {
      if (isMounted.value) {
        throw error
      }
      return null
    }
  }

  return {
    isMounted,
    safeSet,
    safeAsync,
    cleanup: cleanup.cleanup,
  }
}
