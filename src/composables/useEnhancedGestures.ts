/**
 * Enhanced Gestures Composable
 * Comprehensive touch gesture support for all components
 */

import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useHapticFeedback } from './useMobileGestures'

export interface EnhancedGestureOptions {
  /** Enable swipe gestures */
  enableSwipe?: boolean
  /** Enable pull-to-refresh */
  enablePullToRefresh?: boolean
  /** Enable long press */
  enableLongPress?: boolean
  /** Enable double tap */
  enableDoubleTap?: boolean
  /** Enable pinch zoom */
  enablePinch?: boolean
  
  /** Swipe callbacks */
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  
  /** Pull to refresh callback */
  onPullToRefresh?: () => Promise<void>
  
  /** Tap callbacks */
  onTap?: () => void
  onDoubleTap?: () => void
  onLongPress?: () => void
  
  /** Pinch callback */
  onPinch?: (scale: number) => void
  
  /** Gesture thresholds */
  swipeThreshold?: number
  longPressThreshold?: number
  doubleTapThreshold?: number
  pullToRefreshThreshold?: number
  
  /** Enable haptic feedback */
  haptic?: boolean
}

/**
 * Enhanced gestures hook
 */
export function useEnhancedGestures(
  element: HTMLElement | null,
  options: EnhancedGestureOptions = {}
) {
  const {
    enableSwipe = true,
    enablePullToRefresh = false,
    enableLongPress = false,
    enableDoubleTap = false,
    enablePinch = false,
    swipeThreshold = 50,
    longPressThreshold = 500,
    doubleTapThreshold = 300,
    pullToRefreshThreshold = 80,
    haptic = true
  } = options

  const { light, medium, heavy } = useHapticFeedback()

  // Touch tracking
  const startX = ref(0)
  const startY = ref(0)
  const currentX = ref(0)
  const currentY = ref(0)
  const startTime = ref(0)
  const isDragging = ref(false)
  const lastTapTime = ref(0)
  const longPressTimer = ref<ReturnType<typeof setTimeout> | null>(null)
  const isPulling = ref(false)
  const pullDistance = ref(0)

  /**
   * Handle touch start
   */
  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0]
    startX.value = touch.clientX
    startY.value = touch.clientY
    currentX.value = touch.clientX
    currentY.value = touch.clientY
    startTime.value = Date.now()
    isDragging.value = false

    // Long press detection
    if (enableLongPress && options.onLongPress) {
      longPressTimer.value = setTimeout(() => {
        if (haptic) medium()
        options.onLongPress?.()
      }, longPressThreshold)
    }
  }

  /**
   * Handle touch move
   */
  const handleTouchMove = (event: TouchEvent) => {
    if (!element) return

    const touch = event.touches[0]
    currentX.value = touch.clientX
    currentY.value = touch.clientY

    const deltaX = currentX.value - startX.value
    const deltaY = currentY.value - startY.value

    // Determine if dragging
    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      isDragging.value = true

      // Clear long press timer
      if (longPressTimer.value) {
        clearTimeout(longPressTimer.value)
        longPressTimer.value = null
      }
    }

    // Pull to refresh
    if (enablePullToRefresh && deltaY > 0 && window.scrollY === 0) {
      isPulling.value = true
      pullDistance.value = Math.min(deltaY, pullToRefreshThreshold * 1.5)

      // Apply visual feedback
      if (element) {
        element.style.transform = `translateY(${pullDistance.value}px)`
        element.style.transition = 'none'
      }

      // Haptic feedback at threshold
      if (pullDistance.value >= pullToRefreshThreshold && pullDistance.value < pullToRefreshThreshold + 5) {
        if (haptic) light()
      }
    }
  }

  /**
   * Handle touch end
   */
  const handleTouchEnd = async (event: TouchEvent) => {
    // Clear long press timer
    if (longPressTimer.value) {
      clearTimeout(longPressTimer.value)
      longPressTimer.value = null
    }

    const deltaX = currentX.value - startX.value
    const deltaY = currentY.value - startY.value
    const deltaTime = Date.now() - startTime.value
    const velocityX = Math.abs(deltaX) / deltaTime
    const velocityY = Math.abs(deltaY) / deltaTime

    // Handle pull to refresh
    if (isPulling.value && enablePullToRefresh) {
      isPulling.value = false

      if (pullDistance.value >= pullToRefreshThreshold) {
        if (haptic) medium()
        await options.onPullToRefresh?.()
      }

      // Reset transform
      if (element) {
        element.style.transition = 'transform 0.3s ease'
        element.style.transform = 'translateY(0)'
      }

      pullDistance.value = 0
      return
    }

    // Handle tap gestures
    if (!isDragging.value && deltaTime < 200) {
      const currentTime = Date.now()

      if (enableDoubleTap && currentTime - lastTapTime.value < doubleTapThreshold) {
        // Double tap
        if (haptic) light()
        options.onDoubleTap?.()
      } else {
        // Single tap
        if (options.onTap) {
          if (haptic) light()
          options.onTap()
        }
      }

      lastTapTime.value = currentTime
      return
    }

    // Handle swipe gestures
    if (enableSwipe && isDragging.value) {
      // Determine swipe direction
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (Math.abs(deltaX) > swipeThreshold && velocityX > 0.2) {
          if (haptic) light()
          
          if (deltaX > 0) {
            options.onSwipeRight?.()
          } else {
            options.onSwipeLeft?.()
          }
        }
      } else {
        // Vertical swipe
        if (Math.abs(deltaY) > swipeThreshold && velocityY > 0.2) {
          if (haptic) light()
          
          if (deltaY > 0) {
            options.onSwipeDown?.()
          } else {
            options.onSwipeUp?.()
          }
        }
      }
    }

    isDragging.value = false
  }

  /**
   * Handle pinch gesture
   */
  const handlePinch = (event: TouchEvent) => {
    if (!enablePinch || event.touches.length !== 2) return

    const touch1 = event.touches[0]
    const touch2 = event.touches[1]

    const distance = Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2)
    )

    // Calculate scale (simplified)
    const initialDistance = Math.sqrt(
      Math.pow(startX.value - startY.value, 2)
    )

    if (initialDistance > 0) {
      const scale = distance / initialDistance
      options.onPinch?.(scale)
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

    if (longPressTimer.value) {
      clearTimeout(longPressTimer.value)
    }
  }

  /**
   * Initialize
   */
  const init = () => {
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true })
      element.addEventListener('touchmove', handleTouchMove, { passive: false })
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
    isPulling,
    pullDistance,
    cleanup,
    init
  }
}

/**
 * Add touch ripple effect to element
 */
export function useTouchRipple(element: HTMLElement | null) {
  const createRipple = (event: TouchEvent) => {
    if (!element) return

    const touch = event.touches[0]
    const rect = element.getBoundingClientRect()

    const ripple = document.createElement('span')
    const size = Math.max(rect.width, rect.height)
    const x = touch.clientX - rect.left - size / 2
    const y = touch.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    ripple.classList.add('ripple')

    element.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }

  const init = () => {
    if (element) {
      // Add relative position for ripple
      element.style.position = 'relative'
      element.style.overflow = 'hidden'
      
      element.addEventListener('touchstart', createRipple, { passive: true })
    }
  }

  const cleanup = () => {
    if (element) {
      element.removeEventListener('touchstart', createRipple)
    }
  }

  onMounted(() => {
    init()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    init,
    cleanup
  }
}

