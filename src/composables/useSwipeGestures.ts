import { ref, onMounted, onUnmounted, type Ref } from 'vue'

interface SwipeOptions {
  threshold?: number
  velocity?: number
  preventDefaultTouchStart?: boolean
  preventDefaultTouchMove?: boolean
}

interface SwipeGestureResult {
  isSwiping: Ref<boolean>
  direction: Ref<string | null>
  onSwipeLeft: (callback: () => void) => void
  onSwipeRight: (callback: () => void) => void
  onSwipeUp: (callback: () => void) => void
  onSwipeDown: (callback: () => void) => void
}

export function useSwipeGestures(
  targetElement: Ref<HTMLElement | null>,
  options: SwipeOptions = {}
): SwipeGestureResult {
  const {
    threshold = 50,
    velocity = 0.3,
    preventDefaultTouchStart = false,
    preventDefaultTouchMove = false,
  } = options

  const isSwiping = ref(false)
  const direction = ref<string | null>(null)

  let startX = 0
  let startY = 0
  let startTime = 0
  let currentX = 0
  let currentY = 0

  const callbacks = {
    left: [] as (() => void)[],
    right: [] as (() => void)[],
    up: [] as (() => void)[],
    down: [] as (() => void)[],
  }

  const onSwipeLeft = (callback: () => void) => {
    callbacks.left.push(callback)
  }

  const onSwipeRight = (callback: () => void) => {
    callbacks.right.push(callback)
  }

  const onSwipeUp = (callback: () => void) => {
    callbacks.up.push(callback)
  }

  const onSwipeDown = (callback: () => void) => {
    callbacks.down.push(callback)
  }

  const handleTouchStart = (event: TouchEvent) => {
    if (preventDefaultTouchStart) {
      event.preventDefault()
    }

    const touch = event.touches[0]
    startX = touch.clientX
    startY = touch.clientY
    currentX = touch.clientX
    currentY = touch.clientY
    startTime = Date.now()
    isSwiping.value = false
    direction.value = null
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (preventDefaultTouchMove) {
      event.preventDefault()
    }

    const touch = event.touches[0]
    currentX = touch.clientX
    currentY = touch.clientY

    const deltaX = currentX - startX
    const deltaY = currentY - startY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    if (distance > 10) {
      isSwiping.value = true

      // Determine primary direction
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction.value = deltaX > 0 ? 'right' : 'left'
      } else {
        direction.value = deltaY > 0 ? 'down' : 'up'
      }
    }
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (!isSwiping.value) return

    const deltaX = currentX - startX
    const deltaY = currentY - startY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const duration = Date.now() - startTime
    const currentVelocity = distance / duration

    // Check if swipe meets threshold requirements
    if (distance > threshold && currentVelocity > velocity) {
      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)

      // Determine swipe direction and execute callbacks
      if (absX > absY) {
        // Horizontal swipe
        if (deltaX > 0) {
          callbacks.right.forEach(callback => callback())
        } else {
          callbacks.left.forEach(callback => callback())
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          callbacks.down.forEach(callback => callback())
        } else {
          callbacks.up.forEach(callback => callback())
        }
      }
    }

    // Reset state
    isSwiping.value = false
    direction.value = null
  }

  const addEventListeners = () => {
    const element = targetElement.value
    if (!element) return

    element.addEventListener('touchstart', handleTouchStart, { passive: !preventDefaultTouchStart })
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventDefaultTouchMove })
    element.addEventListener('touchend', handleTouchEnd, { passive: true })
  }

  const removeEventListeners = () => {
    const element = targetElement.value
    if (!element) return

    element.removeEventListener('touchstart', handleTouchStart)
    element.removeEventListener('touchmove', handleTouchMove)
    element.removeEventListener('touchend', handleTouchEnd)
  }

  onMounted(() => {
    addEventListeners()
  })

  onUnmounted(() => {
    removeEventListeners()
  })

  // Watch for element changes
  const observer = new MutationObserver(() => {
    removeEventListeners()
    addEventListeners()
  })

  onMounted(() => {
    if (targetElement.value) {
      observer.observe(document.body, { childList: true, subtree: true })
    }
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return {
    isSwiping,
    direction,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
  }
}

// Hook for card swipe interactions
export function useCardSwipe(
  cardElement: Ref<HTMLElement | null>,
  options: {
    onSwipeLeft?: () => void
    onSwipeRight?: () => void
    enableVisualFeedback?: boolean
  } = {}
) {
  const { onSwipeLeft, onSwipeRight, enableVisualFeedback = true } = options
  const swipeOffset = ref(0)
  const isAnimating = ref(false)

  const { isSwiping, direction, onSwipeLeft: handleSwipeLeft, onSwipeRight: handleSwipeRight } = useSwipeGestures(cardElement, {
    threshold: 80,
    velocity: 0.5,
  })

  if (onSwipeLeft) {
    handleSwipeLeft(() => {
      if (enableVisualFeedback) {
        animateCardSwipe('left')
      }
      onSwipeLeft()
    })
  }

  if (onSwipeRight) {
    handleSwipeRight(() => {
      if (enableVisualFeedback) {
        animateCardSwipe('right')
      }
      onSwipeRight()
    })
  }

  const animateCardSwipe = (dir: 'left' | 'right') => {
    if (!cardElement.value || isAnimating.value) return

    isAnimating.value = true
    const element = cardElement.value
    const targetX = dir === 'left' ? -100 : 100

    element.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out'
    element.style.transform = `translateX(${targetX}%)`
    element.style.opacity = '0'

    setTimeout(() => {
      element.style.transition = ''
      element.style.transform = ''
      element.style.opacity = ''
      isAnimating.value = false
    }, 300)
  }

  return {
    isSwiping,
    direction,
    swipeOffset,
    isAnimating,
  }
}
