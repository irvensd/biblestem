<template>
  <div
    class="flex-shrink-0 w-72 bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-primary-600 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/20 group cursor-pointer"
    @click="handleClick"
  >
    <!-- Study Header with Gradient -->
    <div
      class="relative h-32 flex items-center justify-center p-6"
      :class="gradientClass"
    >
      <!-- Book Icon -->
      <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      
      <!-- Advanced Badge (if applicable) -->
      <div
        v-if="study.category === 'supporter'"
        class="absolute top-3 right-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white backdrop-blur-sm"
      >
        ⭐ Advanced
      </div>
    </div>
    
    <!-- Study Content -->
    <div class="p-5">
      <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 min-h-[3.5rem]">
        {{ study.title }}
      </h3>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 min-h-[2.5rem]">
        {{ study.description }}
      </p>
      
      <!-- Study Metadata -->
      <div class="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
        <span class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {{ study.lessons_count || study.lessons?.length || 0 }} {{ (study.lessons_count || study.lessons?.length || 0) === 1 ? 'lesson' : 'lessons' }}
        </span>
        <span class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ study.totalDuration }} min
        </span>
        <span class="capitalize text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
          {{ study.level || study.difficulty }}
        </span>
      </div>
      
      <!-- Start Study Button -->
      <button
        class="w-full px-4 py-2.5 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105"
        @click.stop="handleClick"
      >
        <span>Start Study</span>
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
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

const gradientClass = computed(() => {
  // Use the study's color if available, otherwise default gradient
  if (props.study.color) {
    return `bg-gradient-to-br ${props.study.color}`
  }
  return 'bg-gradient-to-br from-primary-500 to-blue-600'
})

const handleClick = () => {
  router.push(`/study/${props.study.id}`)
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
