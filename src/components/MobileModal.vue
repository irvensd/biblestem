<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
        @click="handleOverlayClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="transform translate-y-full sm:translate-y-0 sm:scale-95 opacity-0"
          enter-to-class="transform translate-y-0 sm:scale-100 opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="transform translate-y-0 sm:scale-100 opacity-100"
          leave-to-class="transform translate-y-full sm:translate-y-0 sm:scale-95 opacity-0"
        >
          <div
            v-if="isOpen"
            ref="modalContent"
            class="relative w-full max-w-lg mx-auto bg-white dark:bg-neutral-800 shadow-xl overflow-hidden"
            :class="[
              modalClasses,
              {
                'rounded-t-3xl sm:rounded-2xl': !fullScreen,
                'h-full rounded-none': fullScreen,
                'max-h-[85vh] sm:max-h-[90vh]': !fullScreen,
              }
            ]"
            @click.stop
          >
            <!-- Mobile Pull Indicator (only on mobile and when not fullscreen) -->
            <div
              v-if="!fullScreen && !hidePullIndicator"
              class="flex justify-center pt-3 pb-1 sm:hidden"
            >
              <div class="w-12 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
            </div>

            <!-- Header -->
            <div
              v-if="showHeader"
              class="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-700"
              :class="{ 'pt-6': !fullScreen && !hidePullIndicator }"
            >
              <div class="flex-1 min-w-0">
                <h2
                  v-if="title"
                  class="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 truncate"
                >
                  {{ title }}
                </h2>
                <p
                  v-if="subtitle"
                  class="text-sm text-neutral-500 dark:text-neutral-400 mt-1"
                >
                  {{ subtitle }}
                </p>
              </div>

              <!-- Close Button -->
              <button
                v-if="showCloseButton"
                @click="closeModal"
                class="ml-4 p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors touch-manipulation"
                :aria-label="closeButtonLabel"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Content -->
            <div
              class="overflow-y-auto mobile-scroll safe-area-bottom"
              :class="[
                contentClasses,
                {
                  'p-4 sm:p-6': !customPadding,
                  'pb-6 sm:pb-8': !customPadding && !fullScreen,
                  'flex-1': fullScreen
                }
              ]"
            >
              <slot />
            </div>

            <!-- Footer Actions -->
            <div
              v-if="$slots.footer || showDefaultActions"
              class="border-t border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 safe-area-bottom"
              :class="footerClasses"
            >
              <slot name="footer">
                <div
                  v-if="showDefaultActions"
                  class="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end"
                >
                  <button
                    v-if="showCancelButton"
                    @click="handleCancel"
                    class="btn-secondary order-2 sm:order-1 w-full sm:w-auto touch-manipulation"
                  >
                    {{ cancelButtonText }}
                  </button>
                  <button
                    v-if="showConfirmButton"
                    @click="handleConfirm"
                    class="btn-primary order-1 sm:order-2 w-full sm:w-auto touch-manipulation"
                    :disabled="confirmDisabled"
                  >
                    {{ confirmButtonText }}
                  </button>
                </div>
              </slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted, computed, watch } from 'vue'

interface Props {
  isOpen: boolean
  title?: string
  subtitle?: string
  fullScreen?: boolean
  modalClasses?: string
  contentClasses?: string
  footerClasses?: string
  customPadding?: boolean
  hidePullIndicator?: boolean
  showHeader?: boolean
  showCloseButton?: boolean
  closeButtonLabel?: string
  showDefaultActions?: boolean
  showCancelButton?: boolean
  showConfirmButton?: boolean
  cancelButtonText?: string
  confirmButtonText?: string
  confirmDisabled?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  preventBackgroundScroll?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  fullScreen: false,
  modalClasses: '',
  contentClasses: '',
  footerClasses: '',
  customPadding: false,
  hidePullIndicator: false,
  showHeader: true,
  showCloseButton: true,
  closeButtonLabel: 'Close modal',
  showDefaultActions: false,
  showCancelButton: true,
  showConfirmButton: true,
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Confirm',
  confirmDisabled: false,
  closeOnOverlayClick: true,
  closeOnEscape: true,
  preventBackgroundScroll: true,
})

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
  close: []
  cancel: []
  confirm: []
}>()

const modalContent = ref<HTMLElement>()

// Touch handling for mobile gestures
const touchStartY = ref(0)
const touchCurrentY = ref(0)
const isDragging = ref(false)
const dragThreshold = 100 // pixels to drag before closing

const isMobile = computed(() => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
})

const handleTouchStart = (event: TouchEvent) => {
  if (!isMobile.value || props.fullScreen) return
  
  const touch = event.touches[0]
  touchStartY.value = touch.clientY
  touchCurrentY.value = touch.clientY
  isDragging.value = false
}

const handleTouchMove = (event: TouchEvent) => {
  if (!isMobile.value || props.fullScreen) return
  
  const touch = event.touches[0]
  touchCurrentY.value = touch.clientY
  
  const deltaY = touchCurrentY.value - touchStartY.value
  
  // Only allow dragging down
  if (deltaY > 0) {
    isDragging.value = true
    
    // Apply transform to modal content for visual feedback
    if (modalContent.value) {
      const transform = Math.min(deltaY * 0.5, 50) // Dampen the movement
      modalContent.value.style.transform = `translateY(${transform}px)`
      modalContent.value.style.opacity = `${Math.max(1 - deltaY / 300, 0.5)}`
    }
  }
}

const handleTouchEnd = () => {
  if (!isMobile.value || props.fullScreen) return
  
  const deltaY = touchCurrentY.value - touchStartY.value
  
  // Reset transform
  if (modalContent.value) {
    modalContent.value.style.transform = ''
    modalContent.value.style.opacity = ''
  }
  
  // Close modal if dragged down far enough
  if (isDragging.value && deltaY > dragThreshold) {
    closeModal()
  }
  
  isDragging.value = false
}

const handleOverlayClick = () => {
  if (props.closeOnOverlayClick) {
    closeModal()
  }
}

const closeModal = () => {
  emit('update:isOpen', false)
  emit('close')
}

const handleCancel = () => {
  emit('cancel')
  closeModal()
}

const handleConfirm = () => {
  emit('confirm')
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEscape && props.isOpen) {
    closeModal()
  }
}

// Prevent background scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (!props.preventBackgroundScroll) return
  
  nextTick(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = getScrollbarWidth() + 'px'
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  })
})

const getScrollbarWidth = () => {
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'
  document.body.appendChild(outer)
  
  const inner = document.createElement('div')
  outer.appendChild(inner)
  
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
  outer.parentNode?.removeChild(outer)
  
  return scrollbarWidth
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  
  // Clean up body styles
  if (props.preventBackgroundScroll) {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
})
</script>

<style scoped>
/* Mobile scroll optimization */
.mobile-scroll {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

/* Safe area support */
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

/* Smooth transitions for touch feedback */
.modal-content {
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
}
</style>
