/**
 * Lazy Composable Loaders
 * Centralized lazy loading for composables to enable better code splitting
 */

// Mobile-specific composables (only needed on mobile devices)
export const loadMobileGestures = () => import('../useMobileGestures')
export const loadSwipeGestures = () => import('../useSwipeGestures')

// Performance monitoring (only needed for debug/development)
export const loadPerformanceMonitoring = () => import('../usePerformance').then(m => ({ usePerformanceMonitoring: m.usePerformanceMonitoring }))

// PWA features (only needed when running as PWA or when PWA features are accessed)
export const loadPWA = () => import('../usePWA')

// Error recovery (only needed when errors occur)
export const loadErrorRecovery = () => import('../useErrorRecovery')

// Network error handling (only needed when network issues occur)
export const loadNetworkError = () => import('../useNetworkError')

// Accessibility features (can be lazy loaded if not critical for initial render)
export const loadAccessibility = () => import('../useAccessibility')

// Code splitting utilities (meta - for dynamic imports)
export const loadCodeSplitting = () => import('../usePerformance').then(m => ({ useCodeSplitting: m.useCodeSplitting }))

/**
 * Preload critical composables that are likely to be needed
 * Call this in App.vue or main.ts for better perceived performance
 */
export async function preloadCriticalComposables(): Promise<void> {
  const preloadPromises: Promise<any>[] = []
  
  // Preload composables that are commonly used
  if (typeof window !== 'undefined') {
    // Preload theme (used on every page)
    preloadPromises.push(import('../useTheme'))
    
    // Preload cache (used frequently)
    preloadPromises.push(import('../useCache'))
    
    // If mobile device, preload mobile gestures
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
    if (isMobile) {
      preloadPromises.push(loadMobileGestures())
    }
    
    // If PWA, preload PWA features
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      preloadPromises.push(loadPWA())
    }
  }
  
  // Preload in background (don't block)
  Promise.allSettled(preloadPromises).catch(() => {
    // Silently fail - composables will load when needed
  })
}
