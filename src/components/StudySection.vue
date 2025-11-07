<template>
  <div class="mb-12">
    <!-- Section Header -->
    <div class="flex items-center justify-between mb-4 px-4">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 flex items-center gap-3">
          <span class="text-2xl">{{ getCategoryIcon(category.id) }}</span>
          <span>{{ category.title }}</span>
        </h2>
        <p class="text-sm text-neutral-600 dark:text-neutral-400">
          {{ studies.length }} {{ studies.length === 1 ? 'study' : 'studies' }}
        </p>
      </div>
      
      <!-- View All / Show Less Button -->
      <button
        v-if="showViewAll"
        @click="handleViewAllClick"
        class="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
      >
        <span>{{ isExpanded ? 'Show Less' : 'View All' }}</span>
        <svg 
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-180': isExpanded }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
    
    <!-- Horizontal Scrolling Container (shown when NOT expanded) -->
    <div
      v-if="!isExpanded"
      class="relative"
    >
      <!-- Swipe Hint Right (All Screen Sizes) -->
      <div
        v-if="canScrollRight && studies.length > 1"
        class="absolute top-0 right-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span>Swipe for more</span>
      </div>
      
      <!-- Swipe Hint Left (All Screen Sizes - when scrolled right) -->
      <div
        v-if="canScrollLeft && studies.length > 1"
        class="absolute top-0 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg"
      >
        <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span>Swipe back</span>
      </div>
      
      <!-- Scroll Container with Fade Gradients -->
      <div
        ref="scrollContainer"
        class="relative flex gap-0 overflow-x-auto pb-4 px-4 scrollbar-hide md:snap-x md:snap-mandatory"
        @scroll="handleScroll"
      >
        <!-- Study Cards -->
        <div
          v-for="study in studies"
          :key="study.id"
          class="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-80 lg:w-96 md:snap-start pr-4 md:pr-6 last:pr-0"
        >
          <StudyCard :study="study" />
        </div>
      </div>
      
      <!-- Scroll Dots Indicator (All Screen Sizes) -->
      <div
        v-if="studies.length > 1"
        class="flex items-center justify-center gap-2 mt-3"
      >
        <div
          v-for="(study, index) in studies"
          :key="study.id"
          class="h-1.5 rounded-full transition-all duration-300"
          :class="
            getActiveDotIndex() === index
              ? 'w-6 bg-primary-600 dark:bg-primary-400'
              : 'w-1.5 bg-neutral-300 dark:bg-neutral-600'
          "
        ></div>
      </div>
    </div>
    
    <!-- Expanded Grid View (shown when expanded) -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 pb-4"
    >
      <div
        v-for="study in studies"
        :key="study.id"
      >
        <StudyCard :study="study" />
      </div>
    </div>
    
    <!-- Scroll Indicators (optional, for desktop) -->
    <div
      v-if="showScrollIndicators && studies.length > 3"
      class="hidden md:flex items-center justify-center gap-2 mt-2"
    >
      <button
        v-if="canScrollLeft"
        @click="scrollLeft"
        class="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
        aria-label="Scroll left"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        v-if="canScrollRight"
        @click="scrollRight"
        class="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
        aria-label="Scroll right"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import StudyCard from './StudyCard.vue'
import type { CategoryWithStudies } from '../composables/useStudies'

interface Props {
  category: CategoryWithStudies
  showViewAll?: boolean
  enableSnap?: boolean
  showScrollIndicators?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showViewAll: true,
  enableSnap: true,
  showScrollIndicators: false,
})

const studies = computed(() => props.category.studies)
const scrollContainer = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const isExpanded = ref(false)
const activeDotIndex = ref(0)

const getCategoryIcon = (categoryId: string): string => {
  const icons: Record<string, string> = {
    'foundational': '📚',
    'growth': '🌱',
    'biblical-narrative': '📖',
    'spiritual-growth': '✨',
    'advanced': '🔥',
  }
  return icons[categoryId] || '📖'
}

const handleViewAllClick = (e: Event) => {
  e.preventDefault()
  // Toggle expanded view to show all studies in a grid
  isExpanded.value = !isExpanded.value
  
  // Scroll to section when expanding
  if (isExpanded.value) {
    nextTick(() => {
      const element = document.getElementById(props.category.id)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    })
  }
}

const checkScrollButtons = () => {
  if (!scrollContainer.value || isExpanded.value) {
    canScrollLeft.value = false
    canScrollRight.value = false
    return
  }
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  const maxScroll = scrollWidth - clientWidth
  
  // At the very beginning - be EXTREMELY strict: if scrollLeft is <= 10px, we're at the start
  // This accounts for any padding, margins, or browser quirks
  canScrollLeft.value = scrollLeft > 10
  
  // At the very end - be EXTREMELY strict: if we're within 10px of max scroll, we're at the end
  canScrollRight.value = maxScroll > 0 && scrollLeft < maxScroll - 10
}

const handleScroll = () => {
  checkScrollButtons()
  updateActiveDot()
}

const updateActiveDot = () => {
  if (!scrollContainer.value) {
    activeDotIndex.value = 0
    return
  }
  
  const container = scrollContainer.value
  const scrollLeft = container.scrollLeft
  const cardWidth = window.innerWidth < 768 
    ? window.innerWidth * 0.85 
    : window.innerWidth < 1024 
      ? 320  // md:w-80 (320px) for iPad
      : 384  // lg:w-96 (384px) for larger screens
  const gap = window.innerWidth < 768 ? 16 : 24
  
  // Calculate which card is most visible
  const cardIndex = Math.round(scrollLeft / (cardWidth + gap))
  activeDotIndex.value = Math.min(cardIndex, studies.value.length - 1)
}

const getActiveDotIndex = (): number => {
  return activeDotIndex.value
}

const scrollLeft = () => {
  if (!scrollContainer.value) return
  // Calculate card width based on viewport
  const width = window.innerWidth
  const cardWidth = width < 768 
    ? width * 0.85  // Mobile: 85vw
    : width < 1024 
      ? 320  // iPad/Tablet: md:w-80 (320px)
      : 384  // Large: lg:w-96 (384px)
  const gap = width < 768 ? 16 : 24 // gap-4 (16px) on mobile, gap-6 (24px) on tablet
  scrollContainer.value.scrollBy({
    left: -(cardWidth + gap),
    behavior: 'smooth',
  })
}

const scrollRight = () => {
  if (!scrollContainer.value) return
  // Calculate card width based on viewport
  const width = window.innerWidth
  const cardWidth = width < 768 
    ? width * 0.85  // Mobile: 85vw
    : width < 1024 
      ? 320  // iPad/Tablet: md:w-80 (320px)
      : 384  // Large: lg:w-96 (384px)
  const gap = width < 768 ? 16 : 24 // gap-4 (16px) on mobile, gap-6 (24px) on tablet
  scrollContainer.value.scrollBy({
    left: cardWidth + gap,
    behavior: 'smooth',
  })
}

const handleResize = () => {
  checkScrollButtons()
  updateActiveDot()
}

onMounted(() => {
  // Immediately set to false to prevent showing at start
  canScrollLeft.value = false
  canScrollRight.value = false
  
  // Use nextTick to ensure DOM is fully rendered
  nextTick(() => {
    checkScrollButtons()
    updateActiveDot()
    // Check multiple times to account for any layout shifts and browser quirks
    setTimeout(() => {
      checkScrollButtons()
      updateActiveDot()
    }, 50)
    setTimeout(() => {
      checkScrollButtons()
      updateActiveDot()
    }, 150)
    setTimeout(() => {
      checkScrollButtons()
      updateActiveDot()
    }, 300)
    setTimeout(() => {
      checkScrollButtons()
      updateActiveDot()
    }, 500)
  })
  window.addEventListener('resize', handleResize)
  // Also listen for scroll events on the container to ensure we catch all scroll changes
  nextTick(() => {
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('scroll', handleScroll, { passive: true })
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Smooth scrolling */
.scrollbar-hide {
  scroll-behavior: smooth;
}

/* Snap scrolling for smooth card-to-card swiping */
.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-start {
  scroll-snap-align: start;
}

/* Smooth momentum scrolling on touch devices */
.scrollbar-hide {
  -webkit-overflow-scrolling: touch;
}

/* Fade out swipe hint after initial display */
@keyframes fade-out {
  0%, 80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Subtle bounce animation for swipe hint */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}
</style>
