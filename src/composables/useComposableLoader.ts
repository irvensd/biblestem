/**
 * Composable Loader Utility
 * Enables lazy loading of composables for better code splitting
 */

import { ref, type Ref } from 'vue'

interface LazyComposableResult<T> {
  composable: Ref<T | null>
  isLoading: Ref<boolean>
  error: Ref<Error | null>
  load: () => Promise<T>
}

/**
 * Lazy load a composable function
 * @param loader - Function that returns a promise resolving to the composable module
 * @param composableName - Name of the composable function to extract from the module
 * @returns Object with composable, loading state, and load function
 */
export function useLazyComposable<T = any>(
  loader: () => Promise<any>,
  composableName: string
): LazyComposableResult<T> {
  const composable = ref<T | null>(null) as Ref<T | null>
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  const load = async (): Promise<T> => {
    if (composable.value) {
      return composable.value
    }

    if (isLoading.value) {
      // Wait for existing load
      return new Promise((resolve, reject) => {
        const checkLoaded = () => {
          if (composable.value) {
            resolve(composable.value)
          } else if (error.value) {
            reject(error.value)
          } else {
            setTimeout(checkLoaded, 50)
          }
        }
        checkLoaded()
      })
    }

    isLoading.value = true
    error.value = null

    try {
      const module = await loader()
      const exported = module[composableName] || module.default?.[composableName] || module.default

      if (!exported) {
        throw new Error(`Composable "${composableName}" not found in module`)
      }

      const result = typeof exported === 'function' ? exported() : exported
      composable.value = result as T
      return result
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('Failed to load composable')
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  return {
    composable,
    isLoading,
    error,
    load
  }
}

/**
 * Check if device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768
}

/**
 * Check if device supports touch
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/**
 * Check if PWA features are available
 */
export function isPWA(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true ||
    document.referrer.includes('android-app://')
  )
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Preload a composable module without executing it
 * Useful for preloading composables that will likely be needed soon
 */
export function preloadComposable(loader: () => Promise<any>): Promise<void> {
  return loader().then(() => {
    // Module loaded, ready to use
  })
}
