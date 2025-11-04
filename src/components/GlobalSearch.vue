<template>
  <div :class="props.modalMode ? 'flex flex-col h-full' : 'relative'">
    <!-- Search Input -->
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          class="h-5 w-5 text-neutral-500 dark:text-neutral-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        v-model="searchQuery"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        type="search"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        placeholder="Search studies, lessons, verses..."
        aria-label="Search studies, lessons, and verses"
        aria-describedby="search-help"
        :aria-expanded="showResults"
        aria-haspopup="listbox"
        :aria-activedescendant="activeDescendant"
        class="block w-full pl-10 pr-12 py-2.5 sm:py-3 border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 placeholder-neutral-400 dark:placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white dark:focus:bg-neutral-800 text-base sm:text-base font-medium touch-manipulation shadow-sm hover:shadow-md transition-all duration-200"
        :style="{ color: isDarkMode ? 'rgb(243 244 246)' : 'rgb(17 24 39)' }"
        :class="{
          'rounded-xl': !showResults || !(searchQuery.trim() || recentSearches.length > 0) || props.modalMode,
          'rounded-b-none': showResults && (searchQuery.trim() || recentSearches.length > 0) && !props.modalMode,
          'border-primary-400 dark:border-primary-500 bg-white dark:bg-neutral-800': showResults,
        }"
      />
      <div v-if="searchQuery" class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <button
          @click="clearSearch"
          class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors touch-manipulation p-2 -m-2 rounded-lg active:bg-neutral-100 dark:active:bg-neutral-700"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Search Results Dropdown -->
    <div
      v-if="showResults && searchQuery.trim()"
      class="bg-white dark:bg-neutral-800 rounded-b-xl shadow-xl border border-t-0 border-neutral-200 dark:border-neutral-700 z-50 overflow-hidden mobile-scroll"
      :class="props.modalMode 
        ? 'flex-1 flex flex-col min-h-0 mt-2 rounded-xl border-t' 
        : 'absolute top-full left-0 right-0 max-h-96' + (isMobile ? ' max-h-[60vh]' : ' max-h-96 mt-2 rounded-xl border-t')"
    >
      <!-- Loading State -->
      <div v-if="isSearching" class="p-4 text-center">
        <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500 mx-auto"></div>
        <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">Searching...</p>
      </div>

      <!-- Search Results -->
      <div v-else :class="props.modalMode ? 'flex-1 overflow-y-auto' : 'max-h-80 overflow-y-auto'">
        <!-- No Results -->
        <div v-if="searchResults.total === 0" class="p-4 text-center">
          <svg
            class="h-12 w-12 text-neutral-400 dark:text-neutral-500 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p class="text-neutral-500 dark:text-neutral-400 text-sm">
            No results found for "{{ searchQuery }}"
          </p>
          <p class="text-neutral-400 dark:text-neutral-500 text-xs mt-1">
            Try different keywords or check your spelling
          </p>
        </div>

        <!-- Results Categories -->
        <div v-else class="p-2">
          <!-- Studies -->
          <div v-if="searchResults.studies.length > 0" class="mb-4">
            <div
              class="px-3 py-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-700 mb-2"
            >
              Studies ({{ searchResults.studies.length }})
            </div>
            <button
              v-for="study in searchResults.studies"
              :key="`study-${study.id}`"
              @click="goToStudy(study)"
              class="w-full text-left px-4 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-700 active:bg-neutral-100 dark:active:bg-neutral-600 rounded-lg transition-colors group touch-manipulation"
              :class="isMobile ? 'min-h-[68px]' : ''"
            >
              <div class="flex items-start space-x-3">
                <div
                  class="w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0"
                  :class="study.color"
                >
                  <span class="text-white font-bold text-sm">{{ study.title.charAt(0) }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <h4
                    class="font-medium text-neutral-900 dark:text-neutral-100 text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                    v-html="highlightMatch(study.title)"
                  ></h4>
                  <p
                    class="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2"
                    v-html="highlightMatch(study.description)"
                  ></p>
                  <div class="flex items-center space-x-2 mt-2">
                    <span
                      class="text-xs bg-neutral-100 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300 px-2 py-1 rounded"
                    >
                      {{ study.lessons.length }} lessons
                    </span>
                    <span
                      class="text-xs bg-neutral-100 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300 px-2 py-1 rounded capitalize"
                    >
                      {{ study.category }}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <!-- Lessons -->
          <div v-if="searchResults.lessons.length > 0" class="mb-4">
            <div
              class="px-3 py-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-700 mb-2"
            >
              Lessons ({{ searchResults.lessons.length }})
            </div>
            <button
              v-for="lesson in searchResults.lessons"
              :key="`lesson-${lesson.studyId}-${lesson.id}`"
              @click="goToLesson(lesson)"
              class="w-full text-left px-4 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-700 active:bg-neutral-100 dark:active:bg-neutral-600 rounded-lg transition-colors group touch-manipulation"
              :class="isMobile ? 'min-h-[68px]' : ''"
            >
              <div class="flex items-start space-x-3">
                <div
                  class="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4
                    class="font-medium text-neutral-900 dark:text-neutral-100 text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                    v-html="highlightMatch(lesson.title)"
                  ></h4>
                  <p
                    class="text-xs text-neutral-500 dark:text-neutral-400 mt-1"
                    v-html="highlightMatch(lesson.description)"
                  ></p>
                  <div class="flex items-center space-x-2 mt-2">
                    <span class="text-xs text-primary-600 dark:text-primary-400 font-medium">{{
                      lesson.scripture
                    }}</span>
                    <span class="text-xs text-neutral-400">•</span>
                    <span class="text-xs text-neutral-500 dark:text-neutral-400"
                      >{{ lesson.duration }} min</span
                    >
                    <span class="text-xs text-neutral-400">•</span>
                    <span class="text-xs text-neutral-500 dark:text-neutral-400">{{
                      lesson.studyTitle
                    }}</span>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <!-- Notes -->
          <div v-if="searchResults.notes.length > 0">
            <div
              class="px-3 py-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-700 mb-2"
            >
              Your Notes ({{ searchResults.notes.length }})
            </div>
            <button
              v-for="note in searchResults.notes"
              :key="`note-${note.id}`"
              @click="goToNote(note)"
              class="w-full text-left px-4 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-700 active:bg-neutral-100 dark:active:bg-neutral-600 rounded-lg transition-colors group touch-manipulation"
              :class="isMobile ? 'min-h-[68px]' : ''"
            >
              <div class="flex items-start space-x-3">
                <div
                  class="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-sm">{{ getNoteTypeIcon(note.type) }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"
                    v-html="highlightMatch(note.content)"
                  ></p>
                  <div class="flex items-center space-x-2 mt-2">
                    <span
                      v-if="note.scripture"
                      class="text-xs text-primary-600 dark:text-primary-400 font-medium"
                      >{{ note.scripture }}</span
                    >
                    <span v-if="note.scripture" class="text-xs text-neutral-400">•</span>
                    <span class="text-xs text-neutral-500 dark:text-neutral-400 capitalize">{{
                      note.type
                    }}</span>
                    <span class="text-xs text-neutral-400">•</span>
                    <span class="text-xs text-neutral-500 dark:text-neutral-400">{{
                      formatDate(note.updatedAt)
                    }}</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Results Page (for mobile or expanded view) -->
    <div
      v-if="showFullResults"
      class="fixed inset-0 bg-white dark:bg-neutral-900 z-50 overflow-y-auto"
    >
      <div
        class="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 p-4"
      >
        <div class="flex items-center space-x-3">
          <button
            @click="showFullResults = false"
            class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Search Results for "{{ searchQuery }}"
          </h2>
        </div>
      </div>

      <div class="p-4">
        <div class="max-w-2xl mx-auto space-y-6">
          <!-- Full results content here -->
          <p class="text-center text-neutral-500 dark:text-neutral-400">
            Full search results view - {{ searchResults.total }} results found
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAllStudies, type Study, type Lesson } from '@/data/studies'
import { useNotesStore, type StudyNote } from '@/stores/notes'
import { useTheme } from '@/composables/useTheme'
import { sanitizeForHighlighting } from '@/utils/sanitize'
import { useDebounce } from '@/composables/useDebounce'
import { useCache } from '@/composables/useCache'

const emit = defineEmits<{
  'search-close': []
}>()

interface Props {
  modalMode?: boolean
}

interface LessonSearchResult extends Lesson {
  studyId: string
  studyTitle: string
}

interface SearchResults {
  studies: Study[]
  lessons: LessonSearchResult[]
  notes: StudyNote[]
  total: number
}

const router = useRouter()
const props = withDefaults(defineProps<Props>(), {
  modalMode: false,
})

// Theme for text color
const { isDarkMode } = useTheme()

// Initialize notes store safely
const notesStore = ref<any>(null)

onMounted(async () => {
  try {
    notesStore.value = useNotesStore()
    if (notesStore.value?.loadFromStorage) {
      await notesStore.value.loadFromStorage()
    }
  } catch (error) {
    console.warn('Notes store not available:', error)
  }
  loadRecentSearches()
})

// Component state
const searchQuery = ref('')
const showResults = ref(false)
const showFullResults = ref(false)
const recentSearches = ref<string[]>([])
const activeDescendant = ref('')
const focusedIndex = ref(-1)

// Debounced search query with adaptive timing
const { debouncedValue: debouncedQuery, isPending: isSearching } = useDebounce(searchQuery, {
  delay: 300,
  minDelay: 150,
  maxDelay: 500,
  adaptive: true,
  immediate: true,
  maxWait: 1000
})

// Search cache for performance
const { set: cacheSet, get: cacheGet } = useCache()

// Detect mobile for better UX
const isMobile = computed(() => window.innerWidth < 768)

// Search results
const searchResults = ref<SearchResults>({
  studies: [],
  lessons: [],
  notes: [],
  total: 0,
})

// All available content
const allStudies = computed(() => getAllStudies())
const allLessons = computed(() => {
  const lessons: LessonSearchResult[] = []
  allStudies.value.forEach((study) => {
    study.lessons.forEach((lesson) => {
      lessons.push({
        ...lesson,
        studyId: study.id,
        studyTitle: study.title,
      })
    })
  })
  return lessons
})

// Watch debounced query and perform search
watch(debouncedQuery, (newQuery) => {
  if (!newQuery || (typeof newQuery === 'string' && !newQuery.trim())) {
    searchResults.value = { studies: [], lessons: [], notes: [], total: 0 }
    return
  }

  const query = typeof newQuery === 'string' ? newQuery.trim() : String(newQuery)
  if (!query) {
    searchResults.value = { studies: [], lessons: [], notes: [], total: 0 }
    return
  }

  performSearch(query)
})

// Search function with caching
const performSearch = (query: string) => {
  const lowerQuery = query.toLowerCase()
  const cacheKey = `search:${lowerQuery}`

  // Check cache first (cache for 5 minutes)
  const cached = cacheGet<SearchResults>(cacheKey)
  if (cached) {
    searchResults.value = cached
    return
  }

  // Perform search
  const matchingStudies = allStudies.value.filter(
    (study) =>
      study.title.toLowerCase().includes(lowerQuery) ||
      study.description.toLowerCase().includes(lowerQuery) ||
      study.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  )

  const matchingLessons = allLessons.value.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(lowerQuery) ||
      lesson.description.toLowerCase().includes(lowerQuery) ||
      lesson.scripture.toLowerCase().includes(lowerQuery) ||
      lesson.studyTitle.toLowerCase().includes(lowerQuery),
  )

  const matchingNotes = notesStore.value?.searchNotes?.(query) || []

  const results: SearchResults = {
    studies: matchingStudies.slice(0, 5), // Limit for dropdown
    lessons: matchingLessons.slice(0, 5),
    notes: matchingNotes.slice(0, 5),
    total: matchingStudies.length + matchingLessons.length + matchingNotes.length,
  }

  searchResults.value = results

  // Cache results (cache for 5 minutes = 300000ms)
  cacheSet(cacheKey, results, 5 * 60 * 1000)

  // Add to recent searches
  addToRecentSearches(query)
}

// Navigation functions
const goToStudy = (study: Study) => {
  router.push(`/study/${study.id}`)
  closeSearch()
  emit('search-close')
}

const goToLesson = (lesson: LessonSearchResult) => {
  router.push(`/study/${lesson.studyId}`)
  closeSearch()
  emit('search-close')
}

const goToNote = (note: StudyNote) => {
  router.push(`/study/${note.studyId}`)
  closeSearch()
  emit('search-close')
}

// Utility functions
const highlightMatch = (text: string) => {
  if (!searchQuery.value.trim()) return sanitizeForHighlighting(text)

  // Sanitize input text first
  const sanitizedText = sanitizeForHighlighting(text)
  
  // Escape special regex characters in search query
  const escapedQuery = searchQuery.value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  
  try {
    const regex = new RegExp(`(${escapedQuery})`, 'gi')
    return sanitizedText.replace(
      regex,
      '<mark class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">$1</mark>',
    )
  } catch (error) {
    // If regex fails (shouldn't happen with escaping), just return sanitized text
    return sanitizedText
  }
}

const getNoteTypeIcon = (type: StudyNote['type']) => {
  const icons = {
    general: '📝',
    reflection: '💭',
    question: '❓',
    insight: '💡',
    prayer: '🙏',
  }
  return icons[type] || '📝'
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days}d ago`

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// Recent searches management
// Recent searches disabled - not saving/loading anymore
const addToRecentSearches = (query: string) => {
  // Feature disabled
}

const saveRecentSearches = () => {
  // Feature disabled
}

const loadRecentSearches = () => {
  // Feature disabled - clear any existing data
  try {
    localStorage.removeItem('biblestem_recent_searches')
  } catch (error) {
    // Silently fail
  }
}

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (!showResults.value) return

  const allResults = [
    ...recentSearches.value,
    ...searchResults.value.studies,
    ...searchResults.value.lessons,
    ...searchResults.value.notes,
  ]

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      focusedIndex.value = Math.min(focusedIndex.value + 1, allResults.length - 1)
      updateActiveDescendant()
      break
    case 'ArrowUp':
      event.preventDefault()
      focusedIndex.value = Math.max(focusedIndex.value - 1, -1)
      updateActiveDescendant()
      break
    case 'Enter':
      event.preventDefault()
      if (focusedIndex.value >= 0 && allResults[focusedIndex.value]) {
        selectResult(allResults[focusedIndex.value])
      }
      break
    case 'Escape':
      event.preventDefault()
      closeSearch()
      break
  }
}

const updateActiveDescendant = () => {
  const allResults = [
    ...recentSearches.value,
    ...searchResults.value.studies,
    ...searchResults.value.lessons,
    ...searchResults.value.notes,
  ]

  if (focusedIndex.value >= 0 && allResults[focusedIndex.value]) {
    activeDescendant.value = `search-result-${focusedIndex.value}`
  } else {
    activeDescendant.value = ''
  }
}

const selectResult = (result: any) => {
  if (typeof result === 'string') {
    // Recent search
    searchQuery.value = result
  } else if (result.studyId) {
    // Lesson or note
    goToLesson(result)
  } else {
    // Study
    goToStudy(result)
  }
}

// Event handlers
const handleFocus = () => {
  showResults.value = true
  focusedIndex.value = -1
  activeDescendant.value = ''
  // On mobile, consider showing full screen search
  if (isMobile.value && searchQuery.value.trim()) {
    showFullResults.value = true
  }
}

const clearSearch = () => {
  searchQuery.value = ''
  showResults.value = false
  showFullResults.value = false
}

const closeSearch = () => {
  showResults.value = false
  showFullResults.value = false
}

const handleBlur = () => {
  // Delay hiding to allow for clicks on results
  setTimeout(() => {
    if (!showFullResults.value) {
      showResults.value = false
    }
  }, 200)
}

// Cleanup on unmount
onUnmounted(() => {
  // Clear any pending search operations
  // The debounce composable handles its own cleanup
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

mark {
  background-color: rgba(251, 191, 36, 0.3);
  border-radius: 2px;
  padding: 0 2px;
}

.dark mark {
  background-color: rgba(251, 191, 36, 0.2);
}
</style>
