<template>
  <div class="study-navigation">
    <!-- Previous Lesson Preview -->
    <div
      v-if="previousLesson"
      class="navigation-card previous"
      @click="navigateToLesson(previousLesson.id)"
    >
      <div class="card-header">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Previous</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-neutral-500 dark:text-neutral-400">{{ previousLesson.duration }} min</span>
          <div
            v-if="isLessonCompleted(previousLesson.id)"
            class="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
          >
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
      <h3 class="card-title">{{ previousLesson.title }}</h3>
      <p class="card-description">{{ previousLesson.description }}</p>
      <div class="card-meta">
        <span class="text-sm text-primary-600 dark:text-primary-400">{{ previousLesson.scripture }}</span>
      </div>
    </div>

    <!-- Current Lesson Info -->
    <div class="current-lesson-info">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
            <span class="text-white font-bold">{{ currentLessonIndex + 1 }}</span>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {{ currentLesson.title }}
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              Lesson {{ currentLessonIndex + 1 }} of {{ totalLessons }}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="toggleLessonMenu"
            class="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Lesson Progress -->
      <div class="lesson-progress">
        <div class="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          <span>Progress</span>
          <span>{{ Math.round(lessonProgress) }}%</span>
        </div>
        <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
          <div
            class="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: `${lessonProgress}%` }"
          ></div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <button
          @click="markAsComplete"
          :disabled="isCurrentLessonCompleted"
          class="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ isCurrentLessonCompleted ? 'Completed' : 'Mark Complete' }}
        </button>
        <button
          @click="toggleBookmark"
          class="px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          :class="{ 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-600 text-yellow-700 dark:text-yellow-300': isBookmarked }"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
        <button
          @click="shareLesson"
          class="px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Next Lesson Preview -->
    <div
      v-if="nextLesson"
      class="navigation-card next"
      @click="navigateToLesson(nextLesson.id)"
    >
      <div class="card-header">
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Next</span>
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-neutral-500 dark:text-neutral-400">{{ nextLesson.duration }} min</span>
          <div
            v-if="!canAccessNextLesson"
            class="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center"
          >
            <svg class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
      </div>
      <h3 class="card-title">{{ nextLesson.title }}</h3>
      <p class="card-description">{{ nextLesson.description }}</p>
      <div class="card-meta">
        <span class="text-sm text-primary-600 dark:text-primary-400">{{ nextLesson.scripture }}</span>
        <span
          v-if="!canAccessNextLesson"
          class="text-xs text-neutral-500 dark:text-neutral-400"
        >
          Complete current lesson to unlock
        </span>
      </div>
    </div>

    <!-- Lesson Menu Dropdown -->
    <div
      v-if="showLessonMenu"
      class="lesson-menu"
    >
      <div class="menu-header">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Lesson Menu
        </h3>
        <button
          @click="showLessonMenu = false"
          class="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
        >
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="menu-content">
        <button
          @click="goToStudyOverview"
          class="menu-item"
        >
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Study Overview
        </button>
        
        <button
          @click="viewNotes"
          class="menu-item"
        >
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          View Notes
        </button>
        
        <button
          @click="downloadLesson"
          class="menu-item"
        >
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
        
        <button
          @click="reportIssue"
          class="menu-item"
        >
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Report Issue
        </button>
      </div>
    </div>

    <!-- Keyboard Shortcuts Help -->
    <div
      v-if="showKeyboardHelp"
      class="keyboard-help"
    >
      <div class="help-header">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Keyboard Shortcuts
        </h3>
        <button
          @click="showKeyboardHelp = false"
          class="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
        >
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="help-content">
        <div class="shortcut-item">
          <kbd class="shortcut-key">←</kbd>
          <span>Previous lesson</span>
        </div>
        <div class="shortcut-item">
          <kbd class="shortcut-key">→</kbd>
          <span>Next lesson</span>
        </div>
        <div class="shortcut-item">
          <kbd class="shortcut-key">C</kbd>
          <span>Mark complete</span>
        </div>
        <div class="shortcut-item">
          <kbd class="shortcut-key">B</kbd>
          <span>Toggle bookmark</span>
        </div>
        <div class="shortcut-item">
          <kbd class="shortcut-key">?</kbd>
          <span>Show this help</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHapticFeedback } from '../composables/useMobileGestures'

interface Lesson {
  id: string
  title: string
  description: string
  duration: number
  scripture: string
}

interface Props {
  currentLesson: Lesson
  currentLessonIndex: number
  totalLessons: number
  lessonProgress: number
  previousLesson?: Lesson
  nextLesson?: Lesson
  isBookmarked?: boolean
  canAccessNextLesson?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  previousLesson: undefined,
  nextLesson: undefined,
  isBookmarked: false,
  canAccessNextLesson: true
})

const emit = defineEmits<{
  'lesson-navigate': [lessonId: string]
  'lesson-complete': [lessonId: string]
  'lesson-bookmark': [lessonId: string, bookmarked: boolean]
  'lesson-share': [lessonId: string]
  'study-overview': []
  'view-notes': [lessonId: string]
  'download-pdf': [lessonId: string]
  'report-issue': [lessonId: string]
}>()

const router = useRouter()
const { light, medium } = useHapticFeedback()

// State
const showLessonMenu = ref(false)
const showKeyboardHelp = ref(false)

// Computed
const isCurrentLessonCompleted = computed(() => {
  // This would check against the progress store
  return false // Placeholder
})

// Methods
const navigateToLesson = (lessonId: string) => {
  medium()
  emit('lesson-navigate', lessonId)
}

const markAsComplete = () => {
  if (!isCurrentLessonCompleted.value) {
    medium()
    emit('lesson-complete', props.currentLesson.id)
  }
}

const toggleBookmark = () => {
  light()
  emit('lesson-bookmark', props.currentLesson.id, !props.isBookmarked)
}

const shareLesson = () => {
  light()
  emit('lesson-share', props.currentLesson.id)
}

const toggleLessonMenu = () => {
  light()
  showLessonMenu.value = !showLessonMenu.value
}

const goToStudyOverview = () => {
  light()
  emit('study-overview')
  showLessonMenu.value = false
}

const viewNotes = () => {
  light()
  emit('view-notes', props.currentLesson.id)
  showLessonMenu.value = false
}

const downloadLesson = () => {
  light()
  emit('download-pdf', props.currentLesson.id)
  showLessonMenu.value = false
}

const reportIssue = () => {
  light()
  emit('report-issue', props.currentLesson.id)
  showLessonMenu.value = false
}

const isLessonCompleted = (lessonId: string) => {
  // This would check against the progress store
  return false // Placeholder
}

// Keyboard shortcuts
const handleKeydown = (event: KeyboardEvent) => {
  // Don't trigger shortcuts when typing in inputs
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
    return
  }

  switch (event.key) {
    case 'ArrowLeft':
      if (props.previousLesson) {
        event.preventDefault()
        navigateToLesson(props.previousLesson.id)
      }
      break
    case 'ArrowRight':
      if (props.nextLesson && props.canAccessNextLesson) {
        event.preventDefault()
        navigateToLesson(props.nextLesson.id)
      }
      break
    case 'c':
    case 'C':
      if (!event.ctrlKey && !event.metaKey) {
        event.preventDefault()
        markAsComplete()
      }
      break
    case 'b':
    case 'B':
      if (!event.ctrlKey && !event.metaKey) {
        event.preventDefault()
        toggleBookmark()
      }
      break
    case '?':
      event.preventDefault()
      showKeyboardHelp.value = !showKeyboardHelp.value
      break
    case 'Escape':
      showLessonMenu.value = false
      showKeyboardHelp.value = false
      break
  }
}

// Close menus when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Element
  if (!target.closest('.lesson-menu') && !target.closest('.keyboard-help')) {
    showLessonMenu.value = false
    showKeyboardHelp.value = false
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.study-navigation {
  @apply space-y-6;
}

.navigation-card {
  @apply p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1;
}

.navigation-card.previous {
  @apply border-l-4 border-l-blue-500;
}

.navigation-card.next {
  @apply border-r-4 border-r-emerald-500;
}

.card-header {
  @apply flex items-center justify-between mb-3;
}

.card-title {
  @apply text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2;
}

.card-description {
  @apply text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2;
}

.card-meta {
  @apply flex items-center justify-between;
}

.current-lesson-info {
  @apply p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl border border-primary-200 dark:border-primary-800;
}

.lesson-progress {
  @apply mb-4;
}

.quick-actions {
  @apply flex items-center gap-3;
}

.lesson-menu,
.keyboard-help {
  @apply fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4;
}

.lesson-menu > div,
.keyboard-help > div {
  @apply bg-white dark:bg-neutral-900 rounded-xl shadow-xl max-w-md w-full p-6;
}

.menu-header,
.help-header {
  @apply flex items-center justify-between mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700;
}

.menu-content {
  @apply space-y-2;
}

.menu-item {
  @apply w-full flex items-center gap-3 p-3 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors;
}

.help-content {
  @apply space-y-3;
}

.shortcut-item {
  @apply flex items-center gap-3;
}

.shortcut-key {
  @apply px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-sm font-mono min-w-[2rem] text-center;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .navigation-card {
    @apply p-3;
  }
  
  .current-lesson-info {
    @apply p-4;
  }
  
  .quick-actions {
    @apply flex-col gap-2;
  }
  
  .quick-actions button {
    @apply w-full;
  }
}

/* Animation for navigation cards */
.navigation-card {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
