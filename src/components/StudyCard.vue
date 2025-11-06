<template>
  <article
    class="flex-shrink-0 w-full md:w-72 bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-primary-600 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:scale-[1.03] hover:-translate-y-1 group cursor-pointer"
    @click="handleClick"
    role="article"
    :aria-label="`Study: ${study.title}`"
  >
    <!-- Study Header with Gradient -->
    <div
      class="relative h-24 sm:h-28 md:h-32 flex items-center justify-center p-4 sm:p-5 md:p-6"
      :class="gradientClass"
    >
      <!-- Book Icon -->
      <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      
      <!-- Advanced Badge (if applicable) -->
      <div
        v-if="study.category === 'supporter'"
        class="absolute top-2 right-2 sm:top-3 sm:right-3 inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg z-10"
      >
        <span class="mr-0.5 sm:mr-1">⭐</span>
        <span class="hidden sm:inline">Advanced</span>
        <span class="sm:hidden">Adv</span>
      </div>
      
      <!-- Bookmark Button -->
      <button
        @click.stop="handleBookmarkClick"
        class="absolute top-2 left-2 sm:top-3 sm:left-3 p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-200 z-10 touch-target"
        :class="{ 'bg-amber-500/90 hover:bg-amber-600': isBookmarked }"
        :aria-label="isBookmarked ? 'Remove bookmark' : 'Add bookmark'"
        title="Bookmark this study"
      >
        <svg 
          class="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform"
          :class="{ 'scale-110': isBookmarked }"
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            v-if="isBookmarked"
            d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 20V4z"
          />
          <path
            v-else
            d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 20V4z"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
    
    <!-- Study Content -->
    <div class="p-3 sm:p-4 md:p-5">
      <h3 class="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]">
        <span class="sr-only">Study title: </span>{{ study.title }}
      </h3>
      <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 line-clamp-2 min-h-[1.5rem] sm:min-h-[2rem]">
        {{ study.description }}
      </p>
      
      <!-- Study Metadata -->
      <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 mb-3 sm:mb-4">
        <span class="flex items-center gap-1 flex-shrink-0">
          <svg class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span class="whitespace-nowrap">{{ study.lessons_count || study.lessons?.length || 0 }} {{ (study.lessons_count || study.lessons?.length || 0) === 1 ? 'lesson' : 'lessons' }}</span>
        </span>
        <span class="flex items-center gap-1 flex-shrink-0">
          <svg class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="whitespace-nowrap">{{ study.totalDuration }} min</span>
        </span>
        <span class="capitalize text-[10px] sm:text-xs bg-neutral-100 dark:bg-neutral-800 px-1.5 sm:px-2 py-0.5 rounded truncate max-w-[70px] sm:max-w-none" :title="(study.level || study.difficulty || '').charAt(0).toUpperCase() + (study.level || study.difficulty || '').slice(1)">
          {{ getDifficultyAbbr(study.level || study.difficulty) }}
        </span>
      </div>
      
      <!-- Start Study Button -->
      <button
        class="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105 active:scale-95 touch-target focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        @click.stop="handleClick"
        :aria-label="`Start studying ${study.title}`"
      >
        <span class="whitespace-nowrap">Start Study</span>
        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStudyOrganization } from '../composables/useStudyOrganization'
import type { Study } from '../data/studies'

interface Props {
  study: Study & {
    lessons_count?: number
    thumbnail_url?: string
    level?: string
  }
}

const props = defineProps<Props>()
const router = useRouter()
const { isBookmarked: checkIsBookmarked, toggleBookmark, initialize: initializeBookmarks } = useStudyOrganization()

// Initialize bookmarks on mount to ensure state is correct (idempotent - safe to call multiple times)
onMounted(async () => {
  await initializeBookmarks()
})

const gradientClass = computed(() => {
  // Use the study's color if available, otherwise default gradient
  if (props.study.color) {
    return `bg-gradient-to-br ${props.study.color}`
  }
  return 'bg-gradient-to-br from-primary-500 to-blue-600'
})

const isBookmarked = computed(() => checkIsBookmarked(props.study.id))

const handleClick = () => {
  router.push(`/study/${props.study.id}`)
}

const handleBookmarkClick = async () => {
  await toggleBookmark(props.study.id, undefined, props.study.title)
}

// Get abbreviated difficulty level for mobile
const getDifficultyAbbr = (difficulty?: string): string => {
  if (!difficulty) return ''
  const abbr: Record<string, string> = {
    beginner: 'Beg',
    intermediate: 'Inter',
    advanced: 'Adv'
  }
  return abbr[difficulty.toLowerCase()] || difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
