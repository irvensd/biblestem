import { ref, onMounted, onUnmounted } from 'vue'

interface GestureOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onTap?: () => void
  onDoubleTap?: () => void
  onLongPress?: () => void
  onPinch?: (scale: number) => void
  threshold?: number
  preventDefault?: boolean
}

export function useMobileGestures(element: HTMLElement | null, options: GestureOptions = {}) {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onDoubleTap,
    onLongPress,
    onPinch,
    threshold = 50,
    preventDefault = true
  } = options

  const startX = ref(0)
  const startY = ref(0)
  const startTime = ref(0)
  const isDragging = ref(false)
  const lastTap = ref(0)
  const longPressTimer = ref<ReturnType<typeof setTimeout> | null>(null)

  const handleTouchStart = (event: TouchEvent) => {
    if (preventDefault) {
      event.preventDefault()
    }

    const touch = event.touches[0]
    startX.value = touch.clientX
    startY.value = touch.clientY
    startTime.value = Date.now()
    isDragging.value = false

    // Long press detection
    if (onLongPress) {
      longPressTimer.value = setTimeout(() => {
        onLongPress()
      }, 500)
    }
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (preventDefault) {
      event.preventDefault()
    }

    const touch = event.touches[0]
    const deltaX = touch.clientX - startX.value
    const deltaY = touch.clientY - startY.value

    // Check if movement exceeds threshold
    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      isDragging.value = true
      
      // Clear long press timer if dragging
      if (longPressTimer.value) {
        clearTimeout(longPressTimer.value)
        longPressTimer.value = null
      }
    }
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (preventDefault) {
      event.preventDefault()
    }

    // Clear long press timer
    if (longPressTimer.value) {
      clearTimeout(longPressTimer.value)
      longPressTimer.value = null
    }

    if (!isDragging.value) {
      // Handle tap gestures
      const currentTime = Date.now()
      const tapLength = currentTime - startTime.value

      if (tapLength < 200) { // Quick tap
        if (currentTime - lastTap.value < 300) {
          // Double tap
          if (onDoubleTap) {
            onDoubleTap()
          }
        } else {
          // Single tap
          if (onTap) {
            onTap()
          }
        }
        lastTap.value = currentTime
      }
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - startX.value
    const deltaY = touch.clientY - startY.value
    const deltaTime = Date.now() - startTime.value

    // Calculate velocity
    const velocityX = Math.abs(deltaX) / deltaTime
    const velocityY = Math.abs(deltaY) / deltaTime

    // Determine swipe direction based on greater movement
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > threshold && velocityX > 0.1) {
        if (deltaX > 0) {
          onSwipeRight?.()
        } else {
          onSwipeLeft?.()
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > threshold && velocityY > 0.1) {
        if (deltaY > 0) {
          onSwipeDown?.()
        } else {
          onSwipeUp?.()
        }
      }
    }
  }

  const handleWheel = (event: WheelEvent) => {
    if (preventDefault) {
      event.preventDefault()
    }

    const deltaX = event.deltaX
    const deltaY = event.deltaY

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        onSwipeLeft?.()
      } else {
        onSwipeRight?.()
      }
    } else {
      if (deltaY > 0) {
        onSwipeDown?.()
      } else {
        onSwipeUp?.()
      }
    }
  }

  const handlePinch = (event: TouchEvent) => {
    if (event.touches.length === 2 && onPinch) {
      const touch1 = event.touches[0]
      const touch2 = event.touches[1]
      
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      )

      // Calculate scale based on initial distance
      const initialDistance = Math.sqrt(
        Math.pow(startX.value - startY.value, 2) +
        Math.pow(startX.value - startY.value, 2)
      )

      const scale = distance / initialDistance
      onPinch(scale)
    }
  }

  onMounted(() => {
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: false })
      element.addEventListener('touchmove', handleTouchMove, { passive: false })
      element.addEventListener('touchend', handleTouchEnd, { passive: false })
      element.addEventListener('wheel', handleWheel, { passive: false })
      element.addEventListener('touchmove', handlePinch, { passive: false })
    }
  })

  onUnmounted(() => {
    if (element) {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
      element.removeEventListener('wheel', handleWheel)
      element.removeEventListener('touchmove', handlePinch)
    }

    if (longPressTimer.value) {
      clearTimeout(longPressTimer.value)
    }
  })

  return {
    isDragging,
    startX,
    startY
  }
}

export function useHapticFeedback() {
  const vibrate = (pattern: number | number[] = 50) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern)
    }
  }

  const success = () => vibrate([50, 50, 50])
  const error = () => vibrate([100, 50, 100])
  const warning = () => vibrate([200])
  const light = () => vibrate(25)
  const medium = () => vibrate(50)
  const heavy = () => vibrate(100)

  return {
    vibrate,
    success,
    error,
    warning,
    light,
    medium,
    heavy
  }
}

export function useSwipeNavigation() {
  const currentIndex = ref(0)
  const isTransitioning = ref(false)

  const next = () => {
    if (isTransitioning.value) return
    isTransitioning.value = true
    currentIndex.value++
    setTimeout(() => {
      isTransitioning.value = false
    }, 300)
  }

  const previous = () => {
    if (isTransitioning.value) return
    isTransitioning.value = true
    currentIndex.value--
    setTimeout(() => {
      isTransitioning.value = false
    }, 300)
  }

  const goTo = (index: number) => {
    if (isTransitioning.value) return
    isTransitioning.value = true
    currentIndex.value = index
    setTimeout(() => {
      isTransitioning.value = false
    }, 300)
  }

  return {
    currentIndex,
    isTransitioning,
    next,
    previous,
    goTo
  }
}

export function useTouchFeedback() {
  const { light, medium } = useHapticFeedback()

  const addTouchFeedback = (element: HTMLElement) => {
    const handleTouchStart = () => {
      light()
      element.style.transform = 'scale(0.95)'
      element.style.transition = 'transform 0.1s ease'
    }

    const handleTouchEnd = () => {
      element.style.transform = 'scale(1)'
    }

    element.addEventListener('touchstart', handleTouchStart, { passive: true })
    element.addEventListener('touchend', handleTouchEnd, { passive: true })
    element.addEventListener('touchcancel', handleTouchEnd, { passive: true })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchend', handleTouchEnd)
      element.removeEventListener('touchcancel', handleTouchEnd)
    }
  }

  return {
    addTouchFeedback,
    light,
    medium
  }
}