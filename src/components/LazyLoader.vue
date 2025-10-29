<template>
  <div
    ref="containerRef"
    class="lazy-container"
    :class="containerClasses"
  >
    <!-- Loading Placeholder -->
    <div
      v-if="!isLoaded && showPlaceholder"
      class="lazy-placeholder"
      :class="placeholderClasses"
    >
      <div v-if="placeholderType === 'skeleton'" class="skeleton-placeholder">
        <div class="skeleton-line skeleton-line-lg"></div>
        <div class="skeleton-line skeleton-line-md"></div>
        <div class="skeleton-line skeleton-line-sm"></div>
      </div>
      <div v-else-if="placeholderType === 'spinner'" class="spinner-placeholder">
        <div class="spinner-ring"></div>
      </div>
      <div v-else-if="placeholderType === 'blur'" class="blur-placeholder">
        <img
          v-if="blurSrc"
          :src="blurSrc"
          :alt="alt"
          class="blur-image"
        />
      </div>
      <div v-else class="empty-placeholder">
        <slot name="placeholder">
          <div class="empty-content">
            <svg class="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </slot>
      </div>
    </div>

    <!-- Actual Content -->
    <div
      v-if="isLoaded"
      class="lazy-content"
      :class="contentClasses"
    >
      <slot />
    </div>

    <!-- Error State -->
    <div
      v-if="hasError && showError"
      class="lazy-error"
      :class="errorClasses"
    >
      <slot name="error">
        <div class="error-content">
          <svg class="w-8 h-8 text-error-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p class="text-sm text-error-600 dark:text-error-400 mt-2">Failed to load content</p>
          <button
            v-if="allowRetry"
            @click="retry"
            class="mt-2 px-3 py-1 text-xs bg-error-100 text-error-700 rounded hover:bg-error-200 transition-colors"
          >
            Retry
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLazyLoading } from '../composables/usePerformance'

interface Props {
  placeholderType?: 'skeleton' | 'spinner' | 'blur' | 'empty'
  showPlaceholder?: boolean
  showError?: boolean
  allowRetry?: boolean
  blurSrc?: string
  alt?: string
  threshold?: number
  rootMargin?: string
  once?: boolean
  minHeight?: string
  aspectRatio?: string
  fadeIn?: boolean
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  placeholderType: 'skeleton',
  showPlaceholder: true,
  showError: true,
  allowRetry: true,
  threshold: 0.1,
  rootMargin: '50px',
  once: true,
  minHeight: '200px',
  aspectRatio: 'auto',
  fadeIn: true,
  delay: 0
})

const emit = defineEmits<{
  load: []
  error: [error: Error]
  retry: []
}>()

// State
const isLoaded = ref(false)
const hasError = ref(false)
const containerRef = ref<HTMLElement | null>(null)

// Lazy loading setup
const { element, isIntersecting, isLoaded: lazyLoaded } = useLazyLoading({
  threshold: props.threshold,
  rootMargin: props.rootMargin,
  once: props.once
})

// Computed classes
const containerClasses = computed(() => {
  const classes = []
  
  if (props.minHeight) {
    classes.push('min-h-[' + props.minHeight + ']')
  }
  
  if (props.aspectRatio && props.aspectRatio !== 'auto') {
    classes.push('aspect-[' + props.aspectRatio + ']')
  }
  
  return classes
})

const placeholderClasses = computed(() => {
  const classes = ['flex items-center justify-center']
  
  if (props.minHeight) {
    classes.push('min-h-[' + props.minHeight + ']')
  }
  
  if (props.aspectRatio && props.aspectRatio !== 'auto') {
    classes.push('aspect-[' + props.aspectRatio + ']')
  }
  
  return classes
})

const contentClasses = computed(() => {
  const classes = []
  
  if (props.fadeIn) {
    classes.push('animate-fade-in')
  }
  
  return classes
})

const errorClasses = computed(() => {
  const classes = ['flex flex-col items-center justify-center text-center p-4']
  
  if (props.minHeight) {
    classes.push('min-h-[' + props.minHeight + ']')
  }
  
  return classes
})

// Methods
const loadContent = async () => {
  try {
    if (props.delay > 0) {
      await new Promise(resolve => setTimeout(resolve, props.delay))
    }
    
    isLoaded.value = true
    hasError.value = false
    emit('load')
  } catch (error) {
    hasError.value = true
    emit('error', error as Error)
  }
}

const retry = () => {
  hasError.value = false
  isLoaded.value = false
  emit('retry')
  
  // Retry loading after a short delay
  setTimeout(() => {
    if (isIntersecting.value) {
      loadContent()
    }
  }, 1000)
}

// Watch for intersection
const unwatchIntersecting = computed(() => {
  if (isIntersecting.value && !isLoaded.value && !hasError.value) {
    loadContent()
  }
})

// Lifecycle
onMounted(() => {
  element.value = containerRef.value
})

onUnmounted(() => {
  // Cleanup if needed
})
</script>

<style scoped>
.lazy-container {
  @apply relative overflow-hidden;
}

.lazy-placeholder {
  @apply bg-neutral-100 dark:bg-neutral-800;
}

.skeleton-placeholder {
  @apply space-y-3 p-4;
}

.skeleton-line {
  @apply bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse;
}

.skeleton-line-lg {
  @apply h-6 w-full;
}

.skeleton-line-md {
  @apply h-4 w-3/4;
}

.skeleton-line-sm {
  @apply h-3 w-1/2;
}

.spinner-placeholder {
  @apply flex items-center justify-center;
}

.spinner-ring {
  @apply w-8 h-8 border-2 border-transparent border-t-primary-600 rounded-full animate-spin;
}

.blur-placeholder {
  @apply relative overflow-hidden;
}

.blur-image {
  @apply w-full h-full object-cover filter blur-sm scale-110;
}

.empty-placeholder {
  @apply flex items-center justify-center;
}

.empty-content {
  @apply flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500;
}

.lazy-content {
  @apply w-full h-full;
}

.lazy-error {
  @apply bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg;
}

.error-content {
  @apply flex flex-col items-center justify-center;
}

/* Fade in animation */
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .lazy-container {
    @apply min-h-[150px];
  }
  
  .skeleton-placeholder {
    @apply p-3;
  }
  
  .skeleton-line-lg {
    @apply h-5;
  }
  
  .skeleton-line-md {
    @apply h-3;
  }
  
  .skeleton-line-sm {
    @apply h-2;
  }
}

/* Print styles */
@media print {
  .lazy-placeholder,
  .lazy-error {
    @apply hidden;
  }
  
  .lazy-content {
    @apply block;
  }
}
</style>
