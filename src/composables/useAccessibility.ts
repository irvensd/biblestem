import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

export interface AccessibilityOptions {
  announceChanges?: boolean
  announceNavigation?: boolean
  announceErrors?: boolean
  announceSuccess?: boolean
  announceLoading?: boolean
  announcePageChanges?: boolean
}

export interface FocusTrapOptions {
  initialFocus?: HTMLElement | string
  returnFocus?: HTMLElement | string
  preventScroll?: boolean
  allowOutsideClick?: boolean
}

export function useAccessibility(options: AccessibilityOptions = {}) {
  const defaultOptions: AccessibilityOptions = {
    announceChanges: true,
    announceNavigation: true,
    announceErrors: true,
    announceSuccess: true,
    announceLoading: true,
    announcePageChanges: true,
    ...options
  }
  
  const announcements = ref<string[]>([])
  const isNavigating = ref(false)
  const currentPage = ref('')
  
  // Screen reader announcements
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!defaultOptions.announceChanges) return
    
    const announcement = {
      id: Date.now().toString(),
      message,
      priority,
      timestamp: Date.now()
    }
    
    announcements.value.push(announcement)
    
    // Create live region for screen readers
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', priority)
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.textContent = message
    
    document.body.appendChild(liveRegion)
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(liveRegion)
    }, 1000)
    
    // Clean up old announcements
    setTimeout(() => {
      announcements.value = announcements.value.filter(a => 
        Date.now() - a.timestamp < 5000
      )
    }, 5000)
  }
  
  const announceError = (message: string) => {
    if (defaultOptions.announceErrors) {
      announce(message, 'assertive')
    }
  }
  
  const announceSuccess = (message: string) => {
    if (defaultOptions.announceSuccess) {
      announce(message, 'polite')
    }
  }
  
  const announceLoading = (message: string) => {
    if (defaultOptions.announceLoading) {
      announce(message, 'polite')
    }
  }
  
  const announceNavigation = (from: string, to: string) => {
    if (defaultOptions.announceNavigation) {
      announce(`Navigated from ${from} to ${to}`, 'polite')
    }
  }
  
  const announcePageChange = (pageName: string) => {
    if (defaultOptions.announcePageChanges) {
      currentPage.value = pageName
      announce(`Now on ${pageName} page`, 'polite')
    }
  }
  
  return {
    announcements,
    isNavigating,
    currentPage,
    announce,
    announceError,
    announceSuccess,
    announceLoading,
    announceNavigation,
    announcePageChange
  }
}

export function useFocusManagement() {
  const focusHistory = ref<HTMLElement[]>([])
  const currentFocus = ref<HTMLElement | null>(null)
  
  const trapFocus = (container: HTMLElement, options: FocusTrapOptions = {}) => {
    const focusableElements = getFocusableElements(container)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      
      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }
    
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Return focus to previous element
        const previousElement = focusHistory.value[focusHistory.value.length - 1]
        if (previousElement) {
          previousElement.focus()
        }
      }
    }
    
    // Store current focus
    focusHistory.value.push(document.activeElement as HTMLElement)
    
    // Focus first element
    if (options.initialFocus) {
      const element = typeof options.initialFocus === 'string' 
        ? document.querySelector(options.initialFocus) as HTMLElement
        : options.initialFocus
      element?.focus()
    } else if (firstElement) {
      firstElement.focus()
    }
    
    // Add event listeners
    container.addEventListener('keydown', handleTabKey)
    container.addEventListener('keydown', handleEscapeKey)
    
    // Return cleanup function
    return () => {
      container.removeEventListener('keydown', handleTabKey)
      container.removeEventListener('keydown', handleEscapeKey)
      
      // Return focus
      if (options.returnFocus) {
        const element = typeof options.returnFocus === 'string'
          ? document.querySelector(options.returnFocus) as HTMLElement
          : options.returnFocus
        element?.focus()
      } else {
        const previousElement = focusHistory.value.pop()
        previousElement?.focus()
      }
    }
  }
  
  const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ]
    
    return Array.from(container.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[]
  }
  
  const focusElement = (element: HTMLElement | string) => {
    const el = typeof element === 'string' 
      ? document.querySelector(element) as HTMLElement
      : element
    
    if (el) {
      el.focus()
      currentFocus.value = el
    }
  }
  
  const focusNext = (container?: HTMLElement) => {
    const target = container || document.body
    const focusableElements = getFocusableElements(target)
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
    
    if (currentIndex >= 0 && currentIndex < focusableElements.length - 1) {
      focusableElements[currentIndex + 1].focus()
    } else if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }
  
  const focusPrevious = (container?: HTMLElement) => {
    const target = container || document.body
    const focusableElements = getFocusableElements(target)
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
    
    if (currentIndex > 0) {
      focusableElements[currentIndex - 1].focus()
    } else if (focusableElements.length > 0) {
      focusableElements[focusableElements.length - 1].focus()
    }
  }
  
  return {
    focusHistory,
    currentFocus,
    trapFocus,
    getFocusableElements,
    focusElement,
    focusNext,
    focusPrevious
  }
}

export function useKeyboardNavigation() {
  const activeElement = ref<HTMLElement | null>(null)
  const navigationMode = ref<'linear' | 'grid' | 'list'>('linear')
  
  const handleArrowKeys = (event: KeyboardEvent, options: {
    container?: HTMLElement
    direction?: 'horizontal' | 'vertical' | 'both'
    wrap?: boolean
  } = {}) => {
    const { container = document.body, direction = 'both', wrap = true } = options
    
    const focusableElements = getFocusableElements(container)
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
    
    if (currentIndex === -1) return
    
    let nextIndex = currentIndex
    
    switch (event.key) {
      case 'ArrowUp':
        if (direction === 'vertical' || direction === 'both') {
          nextIndex = wrap 
            ? (currentIndex - 1 + focusableElements.length) % focusableElements.length
            : Math.max(0, currentIndex - 1)
        }
        break
      case 'ArrowDown':
        if (direction === 'vertical' || direction === 'both') {
          nextIndex = wrap
            ? (currentIndex + 1) % focusableElements.length
            : Math.min(focusableElements.length - 1, currentIndex + 1)
        }
        break
      case 'ArrowLeft':
        if (direction === 'horizontal' || direction === 'both') {
          nextIndex = wrap
            ? (currentIndex - 1 + focusableElements.length) % focusableElements.length
            : Math.max(0, currentIndex - 1)
        }
        break
      case 'ArrowRight':
        if (direction === 'horizontal' || direction === 'both') {
          nextIndex = wrap
            ? (currentIndex + 1) % focusableElements.length
            : Math.min(focusableElements.length - 1, currentIndex + 1)
        }
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = focusableElements.length - 1
        break
      default:
        return
    }
    
    event.preventDefault()
    focusableElements[nextIndex]?.focus()
    activeElement.value = focusableElements[nextIndex]
  }
  
  const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ]
    
    return Array.from(container.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[]
  }
  
  return {
    activeElement,
    navigationMode,
    handleArrowKeys,
    getFocusableElements
  }
}

export function useScreenReader() {
  const isScreenReaderActive = ref(false)
  const screenReaderType = ref<string>('')
  
  const detectScreenReader = () => {
    // Check for common screen reader indicators
    const indicators = [
      'speechSynthesis' in window,
      'webkitSpeechSynthesis' in window,
      navigator.userAgent.includes('NVDA'),
      navigator.userAgent.includes('JAWS'),
      navigator.userAgent.includes('VoiceOver'),
      navigator.userAgent.includes('TalkBack'),
      document.querySelector('[aria-live]'),
      document.querySelector('[role="alert"]'),
      document.querySelector('[role="status"]')
    ]
    
    isScreenReaderActive.value = indicators.some(Boolean)
    
    // Try to detect specific screen reader
    if (navigator.userAgent.includes('NVDA')) {
      screenReaderType.value = 'NVDA'
    } else if (navigator.userAgent.includes('JAWS')) {
      screenReaderType.value = 'JAWS'
    } else if (navigator.userAgent.includes('VoiceOver')) {
      screenReaderType.value = 'VoiceOver'
    } else if (navigator.userAgent.includes('TalkBack')) {
      screenReaderType.value = 'TalkBack'
    } else {
      screenReaderType.value = 'Unknown'
    }
  }
  
  const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', priority)
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.textContent = message
    
    document.body.appendChild(liveRegion)
    
    setTimeout(() => {
      document.body.removeChild(liveRegion)
    }, 1000)
  }
  
  const createLiveRegion = (id: string, priority: 'polite' | 'assertive' = 'polite') => {
    const liveRegion = document.createElement('div')
    liveRegion.id = id
    liveRegion.setAttribute('aria-live', priority)
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    
    document.body.appendChild(liveRegion)
    return liveRegion
  }
  
  onMounted(() => {
    detectScreenReader()
  })
  
  return {
    isScreenReaderActive,
    screenReaderType,
    detectScreenReader,
    announceToScreenReader,
    createLiveRegion
  }
}

export function useColorContrast() {
  const contrastRatio = ref(0)
  const isHighContrast = ref(false)
  const isDarkMode = ref(false)
  
  const calculateContrast = (color1: string, color2: string): number => {
    const getLuminance = (color: string): number => {
      const rgb = hexToRgb(color)
      if (!rgb) return 0
      
      const { r, g, b } = rgb
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      })
      
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
    }
    
    const luminance1 = getLuminance(color1)
    const luminance2 = getLuminance(color2)
    
    const lighter = Math.max(luminance1, luminance2)
    const darker = Math.min(luminance1, luminance2)
    
    return (lighter + 0.05) / (darker + 0.05)
  }
  
  const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }
  
  const checkContrast = (foreground: string, background: string) => {
    const ratio = calculateContrast(foreground, background)
    contrastRatio.value = ratio
    isHighContrast.value = ratio >= 4.5 // WCAG AA standard
    return ratio
  }
  
  const detectDarkMode = () => {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  const getAccessibleColor = (baseColor: string, background: string): string => {
    const ratio = calculateContrast(baseColor, background)
    
    if (ratio >= 4.5) return baseColor
    
    // Adjust color to meet contrast requirements
    const rgb = hexToRgb(baseColor)
    if (!rgb) return baseColor
    
    const { r, g, b } = rgb
    const factor = isDarkMode.value ? 1.2 : 0.8
    
    return `rgb(${Math.round(r * factor)}, ${Math.round(g * factor)}, ${Math.round(b * factor)})`
  }
  
  onMounted(() => {
    detectDarkMode()
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', detectDarkMode)
    
    return () => {
      mediaQuery.removeEventListener('change', detectDarkMode)
    }
  })
  
  return {
    contrastRatio,
    isHighContrast,
    isDarkMode,
    calculateContrast,
    checkContrast,
    getAccessibleColor
  }
}

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)
  
  const detectReducedMotion = () => {
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  
  const getAnimationClass = (baseClass: string): string => {
    return prefersReducedMotion.value ? `${baseClass}-no-motion` : baseClass
  }
  
  const shouldAnimate = (): boolean => {
    return !prefersReducedMotion.value
  }
  
  onMounted(() => {
    detectReducedMotion()
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', detectReducedMotion)
    
    return () => {
      mediaQuery.removeEventListener('change', detectReducedMotion)
    }
  })
  
  return {
    prefersReducedMotion,
    detectReducedMotion,
    getAnimationClass,
    shouldAnimate
  }
}