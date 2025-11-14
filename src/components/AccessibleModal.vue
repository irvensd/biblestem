<template>
  <Teleport to="body">
    <Transition
      :name="transitionName"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div
        v-if="isOpen"
        class="accessible-modal"
        :class="modalClasses"
        role="dialog"
        :aria-modal="true"
        :aria-labelledby="titleId"
        :aria-describedby="descriptionId"
        :aria-hidden="!isOpen"
        @click="handleBackdropClick"
        @keydown="handleKeydown"
      >
        <!-- Backdrop -->
        <div
          class="modal-backdrop"
          :class="backdropClasses"
          :aria-hidden="true"
        ></div>

        <!-- Modal Content -->
        <div
          ref="modalRef"
          class="modal-content"
          :class="contentClasses"
          @click.stop
        >
          <!-- Header -->
          <div v-if="showHeader" class="modal-header" :class="headerClasses">
            <div class="header-content">
              <h2 :id="titleId" class="modal-title" :class="titleClasses">
                <slot name="title">{{ title }}</slot>
              </h2>
              <p v-if="description" :id="descriptionId" class="modal-description" :class="descriptionClasses">
                {{ description }}
              </p>
            </div>
            <button
              v-if="showCloseButton"
              ref="closeButtonRef"
              class="modal-close"
              :class="closeButtonClasses"
              :aria-label="closeButtonLabel"
              @click="close"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="modal-body" :class="bodyClasses">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="modal-footer" :class="footerClasses">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useAccessibility, useFocusManagement, useKeyboardNavigation } from '../composables/useAccessibility'

interface Props {
  isOpen: boolean
  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  position?: 'center' | 'top' | 'bottom'
  showHeader?: boolean
  showCloseButton?: boolean
  closeButtonLabel?: string
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  preventScroll?: boolean
  trapFocus?: boolean
  restoreFocus?: boolean
  transition?: 'fade' | 'slide' | 'scale' | 'none'
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  size: 'md',
  position: 'center',
  showHeader: true,
  showCloseButton: true,
  closeButtonLabel: 'Close modal',
  closeOnBackdrop: true,
  closeOnEscape: true,
  preventScroll: true,
  trapFocus: true,
  restoreFocus: true,
  transition: 'fade'
})

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
  'close': []
  'open': []
  'focus-trap': [element: HTMLElement]
}>()

// Refs
const modalRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLElement | null>(null)
const previousActiveElement = ref<HTMLElement | null>(null)

// Accessibility
const { announceSuccess, announceError } = useAccessibility()
const { trapFocus, focusElement } = useFocusManagement()
const { handleArrowKeys } = useKeyboardNavigation()

// State
const isAnimating = ref(false)
const titleId = ref(`modal-title-${Math.random().toString(36).substr(2, 9)}`)
const descriptionId = ref(`modal-description-${Math.random().toString(36).substr(2, 9)}`)

// Computed
const modalClasses = computed(() => {
  const classes = ['fixed inset-0 z-50 flex items-center justify-center p-4']
  
  switch (props.position) {
    case 'top':
      classes.push('items-start pt-16')
      break
    case 'bottom':
      classes.push('items-end pb-16')
      break
    default:
      classes.push('items-center')
  }
  
  return classes
})

const backdropClasses = computed(() => {
  const classes = ['fixed inset-0 bg-black/50 backdrop-blur-sm']
  
  if (props.transition === 'fade') {
    classes.push('transition-opacity duration-300')
  }
  
  return classes
})

const contentClasses = computed(() => {
  const classes = ['relative bg-white dark:bg-neutral-900 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-800 max-h-full overflow-hidden']
  
  switch (props.size) {
    case 'sm':
      classes.push('w-full max-w-sm')
      break
    case 'md':
      classes.push('w-full max-w-md')
      break
    case 'lg':
      classes.push('w-full max-w-lg')
      break
    case 'xl':
      classes.push('w-full max-w-xl')
      break
    case 'full':
      classes.push('w-full h-full max-w-none max-h-none rounded-none')
      break
  }
  
  if (props.transition === 'slide') {
    classes.push('transition-transform duration-300')
  } else if (props.transition === 'scale') {
    classes.push('transition-transform duration-300')
  }
  
  return classes
})

const headerClasses = computed(() => {
  return ['flex items-start justify-between p-6 border-b border-neutral-200 dark:border-neutral-800']
})

const titleClasses = computed(() => {
  return ['text-lg font-semibold text-neutral-900 dark:text-neutral-100']
})

const descriptionClasses = computed(() => {
  return ['text-sm text-neutral-600 dark:text-neutral-400 mt-1']
})

const bodyClasses = computed(() => {
  return ['p-6 overflow-y-auto']
})

const footerClasses = computed(() => {
  return ['flex items-center justify-end space-x-3 p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50']
})

const closeButtonClasses = computed(() => {
  return ['p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-ring']
})

const transitionName = computed(() => {
  if (props.transition === 'none') return ''
  return `modal-${props.transition}`
})

// Methods
const open = () => {
  emit('update:isOpen', true)
  emit('open')
  
  // Store previous active element
  previousActiveElement.value = document.activeElement as HTMLElement
  
  // Prevent body scroll
  if (props.preventScroll) {
    document.body.style.overflow = 'hidden'
  }
  
  // Announce modal opening
  announceSuccess(`Modal opened: ${props.title}`)
  
  nextTick(() => {
    // Focus management
    if (props.trapFocus && modalRef.value) {
      const cleanup = trapFocus(modalRef.value, {
        initialFocus: closeButtonRef.value || undefined,
        preventScroll: true
      })
      
      // Store cleanup function
      ;(modalRef.value as any).__focusCleanup = cleanup
    }
    
    // Focus first focusable element
    if (closeButtonRef.value) {
      closeButtonRef.value.focus()
    } else if (modalRef.value) {
      const firstFocusable = modalRef.value.querySelector('button, input, select, textarea, a, [tabindex]:not([tabindex="-1"])') as HTMLElement
      if (firstFocusable) {
        firstFocusable.focus()
      }
    }
  })
}

const close = () => {
  emit('update:isOpen', false)
  emit('close')
  
  // Restore body scroll
  if (props.preventScroll) {
    document.body.style.overflow = ''
  }
  
  // Cleanup focus trap
  if (modalRef.value && (modalRef.value as any).__focusCleanup) {
    ;(modalRef.value as any).__focusCleanup()
  }
  
  // Restore focus
  if (props.restoreFocus && previousActiveElement.value) {
    focusElement(previousActiveElement.value)
  }
  
  // Announce modal closing
  announceSuccess(`Modal closed: ${props.title}`)
}

const handleBackdropClick = (event: MouseEvent) => {
  if (props.closeOnBackdrop && event.target === event.currentTarget) {
    close()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  // Handle escape key
  if (props.closeOnEscape && event.key === 'Escape') {
    close()
    return
  }
  
  // Handle arrow keys for navigation
  if (props.trapFocus && modalRef.value) {
    handleArrowKeys(event, {
      container: modalRef.value,
      direction: 'both',
      wrap: true
    })
  }
  
  // Handle tab key for focus management
  if (event.key === 'Tab' && props.trapFocus && modalRef.value) {
    const focusableElements = getFocusableElements(modalRef.value)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
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

const onEnter = (el: Element) => {
  isAnimating.value = true
  nextTick(() => {
    isAnimating.value = false
  })
}

const onLeave = (el: Element) => {
  isAnimating.value = true
  nextTick(() => {
    isAnimating.value = false
  })
}

// Watch for open state changes
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    open()
  } else {
    close()
  }
})

// Lifecycle
onMounted(() => {
  if (props.isOpen) {
    open()
  }
})

onUnmounted(() => {
  // Cleanup
  if (props.preventScroll) {
    document.body.style.overflow = ''
  }
  
  if (modalRef.value && (modalRef.value as any).__focusCleanup) {
    ;(modalRef.value as any).__focusCleanup()
  }
})
</script>

<style scoped>
.accessible-modal {
  @apply fixed inset-0 z-50 flex items-center justify-center p-4;
}

.modal-backdrop {
  @apply fixed inset-0 bg-black/50 backdrop-blur-sm;
}

.modal-content {
  @apply relative z-10;
}

.modal-header {
  @apply flex-shrink-0;
}

.modal-title {
  @apply flex-1;
}

.modal-description {
  @apply flex-1;
}

.modal-body {
  @apply flex-1;
}

.modal-footer {
  @apply flex-shrink-0;
}

.modal-close {
  @apply flex-shrink-0;
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: transform 0.3s ease;
}

.modal-slide-enter-from {
  transform: translateY(-100%);
}

.modal-slide-leave-to {
  transform: translateY(-100%);
}

.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: transform 0.3s ease;
}

.modal-scale-enter-from,
.modal-scale-leave-to {
  transform: scale(0.9);
}

/* Focus styles */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .modal-content {
    @apply border-2 border-neutral-900 dark:border-neutral-100;
  }
  
  .modal-backdrop {
    @apply bg-black/80;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .modal-fade-enter-active,
  .modal-fade-leave-active,
  .modal-slide-enter-active,
  .modal-slide-leave-active,
  .modal-scale-enter-active,
  .modal-scale-leave-active {
    transition: none;
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .accessible-modal {
    @apply p-2;
  }
  
  .modal-content {
    @apply max-h-[calc(100vh-1rem)];
  }
  
  .modal-header,
  .modal-body,
  .modal-footer {
    @apply p-4;
  }
}

/* Print styles */
@media print {
  .accessible-modal {
    @apply hidden;
  }
}
</style>
