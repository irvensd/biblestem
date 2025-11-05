/**
 * Mobile Helper Utilities
 * Device detection, responsive helpers, and mobile optimizations
 */

/**
 * Check if device is mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768
}

/**
 * Check if device is tablet
 */
export function isTablet(): boolean {
  if (typeof window === 'undefined') return false
  
  return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768 && window.innerWidth < 1024
}

/**
 * Check if device is touch-enabled
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  )
}

/**
 * Get device viewport dimensions
 */
export function getViewportDimensions(): { width: number; height: number } {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

/**
 * Check if viewport is in portrait orientation
 */
export function isPortrait(): boolean {
  return window.innerHeight > window.innerWidth
}

/**
 * Check if viewport is in landscape orientation
 */
export function isLandscape(): boolean {
  return window.innerWidth > window.innerHeight
}

/**
 * Get safe area insets (for notched devices)
 */
export function getSafeAreaInsets(): {
  top: number
  bottom: number
  left: number
  right: number
} {
  const style = getComputedStyle(document.documentElement)
  
  return {
    top: parseInt(style.getPropertyValue('env(safe-area-inset-top)') || '0'),
    bottom: parseInt(style.getPropertyValue('env(safe-area-inset-bottom)') || '0'),
    left: parseInt(style.getPropertyValue('env(safe-area-inset-left)') || '0'),
    right: parseInt(style.getPropertyValue('env(safe-area-inset-right)') || '0')
  }
}

/**
 * Apply mobile-optimized touch target sizes
 */
export function getMinimumTouchTargetSize(): number {
  // iOS Human Interface Guidelines recommend 44x44 points
  // Android Material Design recommends 48x48 dp
  return isMobile() ? 44 : 40
}

/**
 * Prevent iOS double-tap zoom on buttons
 */
export function preventDoubleTapZoom(element: HTMLElement): () => void {
  let lastTap = 0
  
  const handleTouchEnd = (event: TouchEvent) => {
    const currentTime = Date.now()
    const tapLength = currentTime - lastTap
    
    if (tapLength < 500 && tapLength > 0) {
      event.preventDefault()
    }
    
    lastTap = currentTime
  }
  
  element.addEventListener('touchend', handleTouchEnd, { passive: false })
  
  return () => {
    element.removeEventListener('touchend', handleTouchEnd)
  }
}

/**
 * Get responsive breakpoints
 */
export const Breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

/**
 * Check if viewport matches breakpoint
 */
export function matchesBreakpoint(breakpoint: keyof typeof Breakpoints): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= Breakpoints[breakpoint]
}

/**
 * Apply mobile viewport meta tag
 */
export function applyMobileViewport(): void {
  let viewport = document.querySelector('meta[name="viewport"]')
  
  if (!viewport) {
    viewport = document.createElement('meta')
    viewport.setAttribute('name', 'viewport')
    document.head.appendChild(viewport)
  }
  
  viewport.setAttribute(
    'content',
    'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover'
  )
}

/**
 * Lock body scroll (for modals)
 */
export function lockBodyScroll(): () => void {
  const scrollY = window.scrollY
  const body = document.body
  
  body.style.position = 'fixed'
  body.style.top = `-${scrollY}px`
  body.style.width = '100%'
  body.style.overflowY = 'scroll'
  
  return () => {
    body.style.position = ''
    body.style.top = ''
    body.style.width = ''
    body.style.overflowY = ''
    window.scrollTo(0, scrollY)
  }
}

/**
 * Get optimal input font size for mobile (prevents zoom on focus)
 */
export function getMobileInputFontSize(): string {
  // iOS Safari zooms on inputs smaller than 16px
  return isMobile() ? '16px' : '14px'
}

/**
 * Check if keyboard is visible (iOS)
 */
export function isKeyboardVisible(): boolean {
  if (!isMobile()) return false
  
  // On iOS, when keyboard is visible, visualViewport height < window.innerHeight
  if ('visualViewport' in window && window.visualViewport) {
    const viewport = window.visualViewport
    return viewport.height < window.innerHeight * 0.75
  }
  
  return false
}

/**
 * Scroll element into view with mobile-optimized behavior
 */
export function scrollIntoViewMobile(
  element: HTMLElement,
  options: {
    block?: ScrollLogicalPosition
    inline?: ScrollLogicalPosition
    offset?: number
  } = {}
): void {
  const { block = 'center', inline = 'nearest', offset = 0 } = options
  
  if (isMobile()) {
    // On mobile, scroll with additional offset for keyboard
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetY = rect.top + scrollTop - offset
    
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    })
  } else {
    element.scrollIntoView({
      behavior: 'smooth',
      block,
      inline
    })
  }
}

