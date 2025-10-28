<template>
  <div class="reading-progress-container">
    <!-- Top Progress Bar -->
    <div
      class="fixed top-0 left-0 right-0 h-1 bg-neutral-200 dark:bg-neutral-800 z-50 transition-all duration-500"
    >
      <div
        class="h-full bg-gradient-to-r from-primary-500 via-blue-500 to-emerald-500 transition-all duration-500 ease-out"
        :style="{ width: `${readingProgress}%` }"
      ></div>
    </div>

    <!-- Section Progress Indicator -->
    <div class="fixed bottom-6 right-6 z-40">
      <div
        class="w-16 h-16 rounded-full bg-white dark:bg-neutral-900 shadow-lg flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 cursor-pointer"
        :class="currentSectionColor"
        @click="toggleProgressDetails"
        :title="`Section ${currentSection} of ${totalSections}`"
      >
        <span class="text-sm font-bold">{{ currentSection }}</span>
      </div>
    </div>

    <!-- Detailed Progress Panel -->
    <div
      v-if="showProgressDetails"
      class="fixed bottom-24 right-6 z-40 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-4 min-w-[280px] max-w-[320px]"
    >
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Reading Progress
        </h3>
        <button
          @click="showProgressDetails = false"
          class="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
        >
          <svg class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Overall Progress -->
      <div class="mb-4">
        <div class="flex justify-between text-xs text-neutral-600 dark:text-neutral-400 mb-1">
          <span>Overall Progress</span>
          <span>{{ Math.round(readingProgress) }}%</span>
        </div>
        <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
          <div
            class="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: `${readingProgress}%` }"
          ></div>
        </div>
      </div>

      <!-- Section Progress -->
      <div class="mb-4">
        <div class="flex justify-between text-xs text-neutral-600 dark:text-neutral-400 mb-2">
          <span>Sections</span>
          <span>{{ currentSection }} / {{ totalSections }}</span>
        </div>
        <div class="flex gap-1">
          <div
            v-for="section in totalSections"
            :key="section"
            class="flex-1 h-2 rounded-full transition-all duration-300"
            :class="getSectionProgressClass(section)"
          ></div>
        </div>
      </div>

      <!-- Time Tracking -->
      <div class="text-xs text-neutral-600 dark:text-neutral-400">
        <div class="flex justify-between mb-1">
          <span>Time Spent</span>
          <span>{{ formatTime(timeSpent) }}</span>
        </div>
        <div class="flex justify-between">
          <span>Estimated Remaining</span>
          <span>{{ formatTime(estimatedRemaining) }}</span>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-700">
        <div class="flex gap-2">
          <button
            @click="goToPreviousSection"
            :disabled="currentSection <= 1"
            class="flex-1 px-3 py-2 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <button
            @click="goToNextSection"
            :disabled="currentSection >= totalSections"
            class="flex-1 px-3 py-2 text-xs font-medium bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Section Navigation Overlay -->
    <div
      v-if="showSectionNavigation"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      @click="showSectionNavigation = false"
    >
      <div
        class="bg-white dark:bg-neutral-900 rounded-xl shadow-xl max-w-md w-full p-6"
        @click.stop
      >
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Jump to Section
        </h3>
        <div class="grid grid-cols-2 gap-3">
          <button
            v-for="section in totalSections"
            :key="section"
            @click="goToSection(section)"
            class="p-3 text-left rounded-lg border transition-all duration-200 hover:shadow-md"
            :class="getSectionButtonClass(section)"
          >
            <div class="text-sm font-medium">{{ getSectionTitle(section) }}</div>
            <div class="text-xs text-neutral-500 mt-1">{{ getSectionDescription(section) }}</div>
          </button>
        </div>
        <button
          @click="showSectionNavigation = false"
          class="w-full mt-4 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useHapticFeedback } from '../composables/useMobileGestures'

interface Props {
  currentSection: number
  totalSections: number
  timeSpent: number
  estimatedRemaining: number
  sectionRefs: Record<number, HTMLElement>
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'section-change': [section: number]
  'time-update': [timeSpent: number]
}>()

const { light, medium } = useHapticFeedback()

// State
const showProgressDetails = ref(false)
const showSectionNavigation = ref(false)
const readingProgress = ref(0)
const startTime = ref(Date.now())

// Computed
const currentSectionColor = computed(() => {
  const colors = {
    1: 'border-primary-500 bg-primary-50 dark:bg-primary-900/20',
    2: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
    3: 'border-purple-500 bg-purple-50 dark:bg-purple-900/20',
    4: 'border-orange-500 bg-orange-50 dark:bg-orange-900/20',
    5: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
    6: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
  }
  return colors[props.currentSection as keyof typeof colors] || 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
})

// Methods
const toggleProgressDetails = () => {
  light()
  showProgressDetails.value = !showProgressDetails.value
}

const getSectionProgressClass = (section: number) => {
  if (section < props.currentSection) {
    return 'bg-emerald-500'
  } else if (section === props.currentSection) {
    return 'bg-primary-500'
  } else {
    return 'bg-neutral-300 dark:bg-neutral-600'
  }
}

const getSectionButtonClass = (section: number) => {
  if (section === props.currentSection) {
    return 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
  } else if (section < props.currentSection) {
    return 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
  } else {
    return 'border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
  }
}

const getSectionTitle = (section: number) => {
  const titles = {
    1: 'Opening Thought',
    2: 'Scripture',
    3: 'Teaching Points',
    4: 'Reflection',
    5: 'Application',
    6: 'Prayer',
  }
  return titles[section as keyof typeof titles] || `Section ${section}`
}

const getSectionDescription = (section: number) => {
  const descriptions = {
    1: 'Introduction and context',
    2: 'Bible passage study',
    3: 'Key teachings',
    4: 'Personal reflection',
    5: 'Practical application',
    6: 'Prayer and commitment',
  }
  return descriptions[section as keyof typeof descriptions] || 'Study content'
}

const goToSection = (section: number) => {
  medium()
  const element = props.sectionRefs[section]
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    emit('section-change', section)
  }
  showSectionNavigation.value = false
}

const goToPreviousSection = () => {
  if (props.currentSection > 1) {
    goToSection(props.currentSection - 1)
  }
}

const goToNextSection = () => {
  if (props.currentSection < props.totalSections) {
    goToSection(props.currentSection + 1)
  }
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

const updateReadingProgress = () => {
  const progress = Math.min((props.currentSection / props.totalSections) * 100, 100)
  readingProgress.value = progress
}

const updateTimeSpent = () => {
  const elapsed = Math.floor((Date.now() - startTime.value) / 1000)
  emit('time-update', elapsed)
}

// Watch for section changes
watch(() => props.currentSection, () => {
  updateReadingProgress()
})

// Lifecycle
onMounted(() => {
  updateReadingProgress()
  
  // Update time every second
  const timeInterval = setInterval(updateTimeSpent, 1000)
  
  onUnmounted(() => {
    clearInterval(timeInterval)
  })
})

// Keyboard shortcuts
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft' && props.currentSection > 1) {
    event.preventDefault()
    goToPreviousSection()
  } else if (event.key === 'ArrowRight' && props.currentSection < props.totalSections) {
    event.preventDefault()
    goToNextSection()
  } else if (event.key === 'p' && event.ctrlKey) {
    event.preventDefault()
    showProgressDetails.value = !showProgressDetails.value
  } else if (event.key === 'j' && event.ctrlKey) {
    event.preventDefault()
    showSectionNavigation.value = !showSectionNavigation.value
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.reading-progress-container {
  /* Ensure proper z-index stacking */
  position: relative;
  z-index: 40;
}

/* Smooth animations for progress bars */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar for progress details */
.reading-progress-container ::-webkit-scrollbar {
  width: 4px;
}

.reading-progress-container ::-webkit-scrollbar-track {
  background-color: rgb(245 245 245);
}

.reading-progress-container ::-webkit-scrollbar-thumb {
  background-color: rgb(212 212 212);
  border-radius: 9999px;
}

.dark .reading-progress-container ::-webkit-scrollbar-track {
  background-color: rgb(38 38 38);
}

.dark .reading-progress-container ::-webkit-scrollbar-thumb {
  background-color: rgb(82 82 82);
}
</style>
