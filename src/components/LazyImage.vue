<template>
  <div
    ref="containerRef"
    class="lazy-image-container"
    :class="containerClasses"
    :style="containerStyles"
  >
    <!-- Placeholder/Loading State -->
    <div
      v-if="!isLoaded && !hasError"
      class="lazy-image-placeholder"
      :class="placeholderClasses"
      :style="placeholderStyles"
    >
      <!-- Blur placeholder -->
      <img
        v-if="blurSrc && showBlurPlaceholder"
        :src="blurSrc"
        :alt="alt"
        class="lazy-image-blur"
        loading="eager"
        aria-hidden="true"
      />
      
      <!-- Skeleton placeholder -->
      <div
        v-else-if="showSkeletonPlaceholder"
        class="lazy-image-skeleton"
      />
      
      <!-- Spinner placeholder -->
      <div
        v-else-if="showSpinnerPlaceholder"
        class="lazy-image-spinner"
      >
        <div class="spinner-ring" />
      </div>
    </div>

    <!-- Actual Image -->
    <picture
      v-if="isLoaded || (src && !lazy)"
      class="lazy-image-picture"
      :class="imageClasses"
    >
      <!-- Responsive sources -->
      <source
        v-for="(source, index) in sources"
        :key="`source-${index}`"
        :srcset="source.srcset"
        :sizes="source.sizes || '100vw'"
        :type="source.type"
        :media="source.media"
      />
      
      <!-- Main image -->
      <img
        ref="imgRef"
        :src="currentSrc"
        :srcset="srcset"
        :sizes="sizes"
        :alt="alt"
        :loading="lazy ? 'lazy' : 'eager'"
        :decoding="decoding"
        :fetchpriority="fetchpriority"
        :class="imageImgClasses"
        :style="imageStyles"
        @load="handleLoad"
        @error="handleError"
      />
    </picture>

    <!-- Error State -->
    <div
      v-if="hasError && showErrorState"
      class="lazy-image-error"
      :class="errorClasses"
    >
      <slot name="error">
        <div class="error-content">
          <svg
            class="w-8 h-8 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p class="text-sm text-neutral-500 mt-2">Failed to load image</p>
          <button
            v-if="allowRetry"
            @click="retryLoad"
            class="mt-2 px-3 py-1 text-xs bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded transition-colors"
          >
            Retry
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useImagePreloading } from '../composables/usePerformance'

export interface ImageSource {
  srcset: string
  sizes?: string
  type?: string
  media?: string
}

interface Props {
  src: string
  alt: string
  blurSrc?: string
  srcset?: string
  sizes?: string
  sources?: ImageSource[]
  width?: number | string
  height?: number | string
  aspectRatio?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  lazy?: boolean
  decoding?: 'async' | 'auto' | 'sync'
  fetchpriority?: 'high' | 'low' | 'auto'
  showBlurPlaceholder?: boolean
  showSkeletonPlaceholder?: boolean
  showSpinnerPlaceholder?: boolean
  showErrorState?: boolean
  allowRetry?: boolean
  threshold?: number
  rootMargin?: string
  fadeIn?: boolean
  fadeInDuration?: string
}

const props = withDefaults(defineProps<Props>(), {
  lazy: true,
  decoding: 'async',
  fetchpriority: 'auto',
  showBlurPlaceholder: true,
  showSkeletonPlaceholder: false,
  showSpinnerPlaceholder: false,
  showErrorState: true,
  allowRetry: true,
  threshold: 0.1,
  rootMargin: '50px',
  fadeIn: true,
  fadeInDuration: '0.3s',
  objectFit: 'cover',
})

const emit = defineEmits<{
  load: [event: Event]
  error: [event: Event]
  retry: []
}>()

// State
const isLoaded = ref(!props.lazy)
const hasError = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const imgRef = ref<HTMLImageElement | null>(null)
const observer = ref<IntersectionObserver | null>(null)

const { preloadImage } = useImagePreloading()

// Computed
const containerClasses = computed(() => {
  const classes = ['relative', 'overflow-hidden']
  
  if (props.aspectRatio) {
    classes.push('aspect-[' + props.aspectRatio + ']')
  }
  
  if (props.fadeIn && isLoaded.value) {
    classes.push('lazy-image-loaded')
  }
  
  return classes
})

const containerStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.width && !props.aspectRatio) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  
  if (props.height && !props.aspectRatio) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  
  return styles
})

const placeholderClasses = computed(() => {
  const classes = ['absolute', 'inset-0', 'flex', 'items-center', 'justify-center']
  return classes
})

const placeholderStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.aspectRatio) {
    styles.aspectRatio = props.aspectRatio
  }
  
  return styles
})

const imageClasses = computed(() => {
  const classes = ['w-full', 'h-full']
  return classes
})

const imageImgClasses = computed(() => {
  const classes = ['w-full', 'h-full']
  classes.push(`object-${props.objectFit}`)
  
  if (props.fadeIn) {
    classes.push('transition-opacity', 'duration-300')
    if (!isLoaded.value) {
      classes.push('opacity-0')
    } else {
      classes.push('opacity-100')
    }
  }
  
  return classes
})

const imageStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.aspectRatio) {
    styles.aspectRatio = props.aspectRatio
  }
  
  return styles
})

const errorClasses = computed(() => {
  const classes = [
    'absolute',
    'inset-0',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'bg-neutral-100',
    'dark:bg-neutral-800',
    'text-center',
    'p-4',
  ]
  return classes
})

const currentSrc = computed(() => {
  if (hasError.value && props.blurSrc) {
    return props.blurSrc
  }
  return props.src
})

// Methods
const handleLoad = (event: Event) => {
  isLoaded.value = true
  hasError.value = false
  emit('load', event)
}

const handleError = (event: Event) => {
  hasError.value = true
  isLoaded.value = false
  emit('error', event)
}

const retryLoad = () => {
  hasError.value = false
  isLoaded.value = false
  
  // Force reload by clearing and resetting src
  if (imgRef.value) {
    const currentSrc = imgRef.value.src
    imgRef.value.src = ''
    nextTick(() => {
      if (imgRef.value) {
        imgRef.value.src = currentSrc
      }
    })
  }
  
  emit('retry')
}

const setupObserver = () => {
  if (!props.lazy || !containerRef.value || typeof window === 'undefined') {
    isLoaded.value = true
    return
  }
  
  // If image is already in viewport, load immediately
  const rect = containerRef.value.getBoundingClientRect()
  const isInViewport =
    rect.top < window.innerHeight + parseFloat(props.rootMargin) &&
    rect.bottom > -parseFloat(props.rootMargin) &&
    rect.left < window.innerWidth + parseFloat(props.rootMargin) &&
    rect.right > -parseFloat(props.rootMargin)
  
  if (isInViewport) {
    loadImage()
    return
  }
  
  // Setup intersection observer
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded.value && !hasError.value) {
          loadImage()
          if (observer.value) {
            observer.value.disconnect()
          }
        }
      })
    },
    {
      root: null,
      rootMargin: props.rootMargin,
      threshold: props.threshold,
    },
  )
  
  observer.value.observe(containerRef.value)
}

const loadImage = async () => {
  if (isLoaded.value) return
  
  try {
    // Preload image using the composable
    await preloadImage(props.src)
    isLoaded.value = true
    hasError.value = false
  } catch (error) {
    console.error('Failed to preload image:', error)
    // Still set loaded to true to let browser handle it
    isLoaded.value = true
  }
}

// Watch for src changes
watch(() => props.src, () => {
  if (props.lazy) {
    isLoaded.value = false
    hasError.value = false
    setupObserver()
  } else {
    isLoaded.value = true
  }
})

// Lifecycle
onMounted(() => {
  if (!props.lazy) {
    isLoaded.value = true
  } else {
    setupObserver()
  }
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
    observer.value = null
  }
})
</script>

<style scoped>
.lazy-image-container {
  @apply relative;
}

.lazy-image-placeholder {
  @apply bg-neutral-200 dark:bg-neutral-700;
}

.lazy-image-blur {
  @apply w-full h-full object-cover filter blur-sm scale-110;
}

.lazy-image-skeleton {
  @apply w-full h-full bg-neutral-200 dark:bg-neutral-700 animate-pulse;
}

.lazy-image-spinner {
  @apply flex items-center justify-center;
}

.spinner-ring {
  @apply w-8 h-8 border-2 border-transparent border-t-primary-600 rounded-full animate-spin;
}

.lazy-image-picture {
  @apply w-full h-full;
}

.lazy-image-loaded {
  animation: fadeIn v-bind('fadeInDuration') ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.error-content {
  @apply flex flex-col items-center justify-center;
}
</style>
