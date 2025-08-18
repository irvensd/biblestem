import { ref, nextTick, onMounted, onUnmounted } from 'vue'

// ARIA live region management
export function useAriaLiveRegion() {
  const liveRegion = ref<HTMLElement | null>(null)

  const createLiveRegion = () => {
    if (typeof document === 'undefined') return

    const region = document.createElement('div')
    region.setAttribute('aria-live', 'polite')
    region.setAttribute('aria-atomic', 'true')
    region.className = 'live-region'
    region.id = 'aria-live-region'
    document.body.appendChild(region)
    liveRegion.value = region
  }

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!liveRegion.value) createLiveRegion()
    if (!liveRegion.value) return

    liveRegion.value.setAttribute('aria-live', priority)
    liveRegion.value.textContent = message

    // Clear after announcement to allow repeated announcements
    setTimeout(() => {
      if (liveRegion.value) {
        liveRegion.value.textContent = ''
      }
    }, 1000)
  }

  const cleanup = () => {
    if (liveRegion.value && liveRegion.value.parentNode) {
      liveRegion.value.parentNode.removeChild(liveRegion.value)
    }
  }

  onMounted(createLiveRegion)
  onUnmounted(cleanup)

  return {
    announce,
    cleanup,
  }
}

// Focus management
export function useFocusManagement() {
  const focusHistory: HTMLElement[] = []
  let focusTrapElements: HTMLElement[] = []

  const saveFocus = () => {
    const activeElement = document.activeElement as HTMLElement
    if (activeElement && activeElement !== document.body) {
      focusHistory.push(activeElement)
    }
  }

  const restoreFocus = () => {
    const lastFocused = focusHistory.pop()
    if (lastFocused && typeof lastFocused.focus === 'function') {
      nextTick(() => {
        lastFocused.focus()
      })
    }
  }

  const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(', ')

    return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]
  }

  const trapFocus = (container: HTMLElement) => {
    focusTrapElements = getFocusableElements(container)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      const firstFocusable = focusTrapElements[0]
      const lastFocusable = focusTrapElements[focusTrapElements.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault()
          lastFocusable?.focus()
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault()
          firstFocusable?.focus()
        }
      }
    }

    container.addEventListener('keydown', handleKeyDown)

    // Focus first element
    if (focusTrapElements.length > 0) {
      focusTrapElements[0].focus()
    }

    return () => {
      container.removeEventListener('keydown', handleKeyDown)
    }
  }

  const focusFirstElement = (container: HTMLElement) => {
    const focusableElements = getFocusableElements(container)
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }

  return {
    saveFocus,
    restoreFocus,
    trapFocus,
    focusFirstElement,
    getFocusableElements,
  }
}

// Keyboard navigation helpers
export function useKeyboardNavigation() {
  const handleArrowNavigation = (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    onSelectionChange: (index: number) => void,
    isVertical = true,
  ) => {
    const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight'
    const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft'

    switch (event.key) {
      case nextKey:
        event.preventDefault()
        const nextIndex = Math.min(currentIndex + 1, items.length - 1)
        onSelectionChange(nextIndex)
        items[nextIndex]?.focus()
        break

      case prevKey:
        event.preventDefault()
        const prevIndex = Math.max(currentIndex - 1, 0)
        onSelectionChange(prevIndex)
        items[prevIndex]?.focus()
        break

      case 'Home':
        event.preventDefault()
        onSelectionChange(0)
        items[0]?.focus()
        break

      case 'End':
        event.preventDefault()
        const lastIndex = items.length - 1
        onSelectionChange(lastIndex)
        items[lastIndex]?.focus()
        break
    }
  }

  return {
    handleArrowNavigation,
  }
}

// Screen reader detection
export function useScreenReaderDetection() {
  const isScreenReaderActive = ref(false)

  const detectScreenReader = () => {
    // Check for common screen reader indicators
    const hasScreenReader =
      // NVDA
      navigator.userAgent.includes('NVDA') ||
      // JAWS
      navigator.userAgent.includes('JAWS') ||
      // VoiceOver (simplified detection)
      window.speechSynthesis?.getVoices().some((voice) => voice.name.includes('VoiceOver')) ||
      // Windows Narrator
      (navigator.userAgent.includes('Windows NT') && 'speechSynthesis' in window)

    isScreenReaderActive.value = hasScreenReader
  }

  onMounted(() => {
    detectScreenReader()

    // Listen for screen reader events
    document.addEventListener('focusin', detectScreenReader)
  })

  onUnmounted(() => {
    document.removeEventListener('focusin', detectScreenReader)
  })

  return {
    isScreenReaderActive,
  }
}

// Color contrast utilities
export function useColorContrast() {
  const checkContrast = (foreground: string, background: string): number => {
    // Simple contrast ratio calculation
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g)
      if (!rgb) return 0

      const [r, g, b] = rgb.map((val) => {
        const normalized = parseInt(val) / 255
        return normalized <= 0.03928
          ? normalized / 12.92
          : Math.pow((normalized + 0.055) / 1.055, 2.4)
      })

      return 0.2126 * r + 0.7152 * g + 0.0722 * b
    }

    const foregroundLuminance = getLuminance(foreground)
    const backgroundLuminance = getLuminance(background)

    const lightest = Math.max(foregroundLuminance, backgroundLuminance)
    const darkest = Math.min(foregroundLuminance, backgroundLuminance)

    return (lightest + 0.05) / (darkest + 0.05)
  }

  const meetsWCAGAA = (contrast: number): boolean => contrast >= 4.5
  const meetsWCAGAAA = (contrast: number): boolean => contrast >= 7

  return {
    checkContrast,
    meetsWCAGAA,
    meetsWCAGAAA,
  }
}

// Alternative text helpers
export function useAltText() {
  const generateAltText = (context: string, purpose: string): string => {
    return `${context} ${purpose}`.trim()
  }

  const isDecorativeImage = (alt: string): boolean => {
    return alt === '' || alt.toLowerCase().includes('decorative')
  }

  return {
    generateAltText,
    isDecorativeImage,
  }
}
