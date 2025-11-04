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
      
      <!-- View All Button (if more than visible studies) -->
      <router-link
        v-if="showViewAll"
        :to="`/study-series#${category.id}`"
        @click="handleViewAllClick"
        class="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
      >
        <span>View All</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>
    </div>
    
    <!-- Horizontal Scrolling Container -->
    <div
      ref="scrollContainer"
      class="grid grid-cols-2 md:flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide md:snap-x md:snap-mandatory"
      @scroll="handleScroll"
    >
      <!-- Study Cards -->
      <div
        v-for="(study, index) in studies"
        :key="study.id"
        class="flex-shrink-0 md:snap-start"
      >
        <StudyCard :study="study" />
      </div>
      
      <!-- View All Card (mobile only - hidden on desktop since header link exists) -->
      <div
        v-if="showViewAll"
        class="flex-shrink-0 w-full md:hidden flex items-center justify-center"
      >
        <router-link
          :to="`/study-series#${category.id}`"
          @click="handleViewAllClick"
          class="w-full min-h-[400px] bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex flex-col items-center justify-center p-6 text-white hover:from-primary-600 hover:to-blue-700 transition-all duration-300 group"
        >
          <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">View All</h3>
          <p class="text-sm text-white/90 text-center">
            Explore all {{ studies.length }} {{ category.title.toLowerCase() }}
          </p>
        </router-link>
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
import { useRouter } from 'vue-router'
import StudyCard from './StudyCard.vue'
import type { StudyWithCount, CategoryWithStudies } from '../composables/useStudies'

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

const router = useRouter()
const studies = computed(() => props.category.studies)
const scrollContainer = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

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

const handleViewAllClick = async (e: Event) => {
  // Always ensure we navigate and scroll, even if already on the same route
  const targetHash = `#${props.category.id}`
  const targetPath = `/study-series${targetHash}`
  
  // Navigate (this will work even if on same route if hash is different)
  await router.push(targetPath)
  
  // Force scroll after navigation
  await nextTick()
  
  // Small delay to ensure DOM is updated
  setTimeout(() => {
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
  }, 100)
}

const checkScrollButtons = () => {
  if (!scrollContainer.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  canScrollLeft.value = scrollLeft > 0
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 10
}

const handleScroll = () => {
  checkScrollButtons()
}

const scrollLeft = () => {
  if (!scrollContainer.value) return
  const cardWidth = 288 + 16 // 72 * 4 (w-72) + gap-4 (16)
  scrollContainer.value.scrollBy({
    left: -cardWidth,
    behavior: 'smooth',
  })
}

const scrollRight = () => {
  if (!scrollContainer.value) return
  const cardWidth = 288 + 16 // 72 * 4 (w-72) + gap-4 (16)
  scrollContainer.value.scrollBy({
    left: cardWidth,
    behavior: 'smooth',
  })
}

onMounted(() => {
  checkScrollButtons()
  window.addEventListener('resize', checkScrollButtons)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScrollButtons)
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
</style>
