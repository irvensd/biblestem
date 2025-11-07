<template>
  <article
    class="w-full bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out snap-start flex-shrink-0 hover:translate-y-[-4px] focus-visible:ring-2 focus-visible:ring-blue-500 group cursor-pointer"
    @click="handleClick"
    role="article"
    :aria-label="`Study: ${study.title}`"
  >
    <!-- Study Header with Gradient -->
    <div
      class="h-36 rounded-t-2xl relative flex items-center justify-center"
      :class="gradientClass"
    >
      <!-- Book Icon -->
      <div class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <svg class="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
      
      <!-- Bookmark Button (only for authenticated users) -->
      <button
        v-if="authStore.isAuthenticated"
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
    <div class="p-5">
      <h3 class="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
        <span class="sr-only">Study title: </span>{{ study.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
        {{ study.description }}
      </p>
      
      <!-- Study Metadata -->
      <div class="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-4">
        <span class="flex items-center gap-1">📖 {{ study.lessons_count || study.lessons?.length || 0 }} {{ (study.lessons_count || study.lessons?.length || 0) === 1 ? 'Lesson' : 'Lessons' }}</span>
        <span class="flex items-center gap-1">⏱ {{ study.totalDuration }} min</span>
        <span class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100 px-2 py-[2px] rounded-full capitalize">
          {{ getDifficultyAbbr(study.level || study.difficulty) }}
        </span>
      </div>
      
      <!-- Start Study Button -->
      <button
        class="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click.stop="handleClick"
        :aria-label="`Start studying ${study.title}`"
      >
        <span>Start Study</span>
        <span>→</span>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useStudyOrganization } from '../composables/useStudyOrganization'
import type { Study } from '../data/studies'

interface Props {
  study: Study & {
    lessons_count?: number
    thumbnail_url?: string
    level?: string
  }
  index?: number
}

const props = withDefaults(defineProps<Props>(), {
  index: 0
})
const router = useRouter()
const authStore = useAuthStore()
const { isBookmarked: checkIsBookmarked, toggleBookmark, initialize: initializeBookmarks } = useStudyOrganization()

// Initialize bookmarks on mount to ensure state is correct (idempotent - safe to call multiple times)
onMounted(async () => {
  await initializeBookmarks()
})

const gradientClass = computed(() => {
  // Use the study's color if available, otherwise rotate through gradients based on index
  if (props.study.color) {
    return `bg-gradient-to-br ${props.study.color}`
  }
  
  // Rotate through gradient colors based on index
  const gradients = [
    'bg-gradient-to-br from-orange-500 to-pink-500',
    'bg-gradient-to-br from-blue-500 to-indigo-500',
    'bg-gradient-to-br from-green-500 to-teal-500',
    'bg-gradient-to-br from-purple-500 to-violet-600',
  ]
  return gradients[props.index % 4]
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
