<template>
  <div
    ref="swipeContainer"
    class="relative overflow-hidden"
    :class="containerClass"
  >
    <!-- Swipe Indicator -->
    <div
      v-if="showSwipeIndicator"
      class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10"
    >
      <div class="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        <span class="text-white text-xs font-medium">Swipe to navigate</span>
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div
      class="transition-transform duration-300 ease-out"
      :style="{ transform: `translateX(${translateX}px)` }"
    >
      <slot />
    </div>

    <!-- Navigation Dots -->
    <div
      v-if="showDots && totalItems > 1"
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(item, index) in totalItems"
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all duration-200"
        :class="index === currentIndex ? 'bg-white' : 'bg-white/50'"
      />
    </div>

    <!-- Navigation Arrows (Desktop) -->
    <div v-if="showArrows && totalItems > 1" class="hidden md:block">
      <button
        @click="previousSlide"
        :disabled="currentIndex === 0"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:bg-black/40 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        :disabled="currentIndex === totalItems - 1"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:bg-black/40 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useMobileGestures, useHapticFeedback } from '../composables/useMobileGestures'

interface Props {
  totalItems: number
  currentIndex?: number
  showSwipeIndicator?: boolean
  showDots?: boolean
  showArrows?: boolean
  containerClass?: string
  autoHideIndicator?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  currentIndex: 0,
  showSwipeIndicator: true,
  showDots: true,
  showArrows: true,
  containerClass: '',
  autoHideIndicator: true
})

const emit = defineEmits<{
  'slide-change': [index: number]
  'swipe-left': []
  'swipe-right': []
}>()

const swipeContainer = ref<HTMLElement>()
const translateX = ref(0)
const { light } = useHapticFeedback()

// Auto-hide swipe indicator
const showSwipeIndicator = ref(props.showSwipeIndicator)
if (props.autoHideIndicator) {
  setTimeout(() => {
    showSwipeIndicator.value = false
  }, 3000)
}

// Swipe navigation
const nextSlide = () => {
  if (props.currentIndex < props.totalItems - 1) {
    light()
    emit('slide-change', props.currentIndex + 1)
  }
}

const previousSlide = () => {
  if (props.currentIndex > 0) {
    light()
    emit('slide-change', props.currentIndex - 1)
  }
}

const goToSlide = (index: number) => {
  if (index !== props.currentIndex) {
    light()
    emit('slide-change', index)
  }
}

// Update translateX when currentIndex changes
watch(() => props.currentIndex, (newIndex) => {
  if (swipeContainer.value) {
    const containerWidth = swipeContainer.value.offsetWidth
    translateX.value = -newIndex * containerWidth
  }
}, { immediate: true })

// Setup swipe gestures
onMounted(() => {
  if (swipeContainer.value) {
    useMobileGestures(swipeContainer.value, {
      onSwipeLeft: () => {
        nextSlide()
        emit('swipe-left')
      },
      onSwipeRight: () => {
        previousSlide()
        emit('swipe-right')
      },
      threshold: 50
    })
  }
})
</script>
</template>
