/**
 * Swipe to Dismiss Composable
 * Enables swipe-down gesture to dismiss modals on mobile
 */

import { ref, onMounted, onUnmounted } from 'vue'

export interface SwipeToDismissOptions {
  /** Callback when dismiss is triggered */
  onDismiss: () => void
  /** Minimum swipe distance to trigger dismiss (pixels) */
  threshold?: number
  /** Minimum swipe velocity required */
  minVelocity?: number
  /** Enable haptic feedback */
  haptic?: boolean
}

/**
 * Enable swipe-to-dismiss on an element
 */
export function useSwipeToDismiss(
  element: HTMLElement | null,
  options: SwipeToDismissOptions
) {
  const {
    onDismiss,
    threshold = 100,
    minVelocity = 0.3,
    haptic = true
  } = options

  const startY = ref(0)
  const currentY = ref(0)
  const startTime = ref(0)
  const isDragging = ref(false)
  const translateY = ref(0)

  /**
   * Provide haptic feedback
   */
  const vibrate = (pattern: number | number[] = 10) => {
    if (haptic && 'vibrate' in navigator) {
      navigator.vibrate(pattern)
    }
  }

  /**
   * Handle touch start
   */
  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0]
    startY.value = touch.clientY
    currentY.value = touch.clientY
    startTime.value = Date.now()
    isDragging.value = true
    translateY.value = 0
  }

  /**
   * Handle touch move
   */
  const handleTouchMove = (event: TouchEvent) => {
    if (!isDragging.value) return

    const touch = event.touches[0]
    currentY.value = touch.clientY
    const deltaY = currentY.value - startY.value

    // Only allow downward swipes
    if (deltaY > 0) {
      translateY.value = deltaY
      
      // Apply transform to element
      if (element) {
        element.style.transform = `translateY(${deltaY}px)`
        element.style.transition = 'none'
      }

      // Provide feedback at threshold
      if (deltaY >= threshold && deltaY < threshold + 10) {
        vibrate(10)
      }
    }
  }

  /**
   * Handle touch end
   */
  const handleTouchEnd = () => {
    if (!isDragging.value) return

    const deltaY = currentY.value - startY.value
    const deltaTime = Date.now() - startTime.value
    const velocity = Math.abs(deltaY) / deltaTime

    isDragging.value = false

    // Check if should dismiss
    if (deltaY >= threshold || (deltaY > 50 && velocity >= minVelocity)) {
      // Dismiss
      vibrate(50)
      
      if (element) {
        element.style.transition = 'transform 0.3s ease'
        element.style.transform = 'translateY(100%)'
      }
      
      setTimeout(() => {
        onDismiss()
      }, 300)
    } else {
      // Reset position
      if (element) {
        element.style.transition = 'transform 0.3s ease'
        element.style.transform = 'translateY(0)'
      }
      translateY.value = 0
    }
  }

  /**
   * Cleanup
   */
  const cleanup = () => {
    if (element) {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
      element.removeEventListener('touchcancel', handleTouchEnd)
    }
  }

  /**
   * Initialize
   */
  const init = () => {
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true })
      element.addEventListener('touchmove', handleTouchMove, { passive: true })
      element.addEventListener('touchend', handleTouchEnd, { passive: true })
      element.addEventListener('touchcancel', handleTouchEnd, { passive: true })
    }
  }

  onMounted(() => {
    init()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    isDragging,
    translateY,
    cleanup,
    init
  }
}

