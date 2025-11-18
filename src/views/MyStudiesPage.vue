<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
    <!-- Loading Skeleton -->
    <div v-if="isLoading" class="container-base py-6 sm:py-8 lg:py-12">
      <StudyGridSkeleton :count="6" />
    </div>
    
    <!-- Actual Content -->
    <div v-else class="container-base py-6 sm:py-8 lg:py-12">
      <!-- Page Header -->
      <div class="mb-8 lg:mb-10">
        <div class="flex items-center gap-3 mb-4">
          <router-link
            to="/dashboard"
            class="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6 text-neutral-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </router-link>
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
              My Studies
            </h1>
            <p class="text-neutral-600 dark:text-gray-300">Track your Bible study progress</p>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="mb-6 flex flex-wrap gap-2 border-b border-neutral-200 dark:border-neutral-800">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-4 py-2 font-medium transition-colors relative"
          :class="
            activeTab === tab.id
              ? 'text-emerald-400 border-b-2 border-primary-600 dark:border-primary-400'
              : 'text-gray-300 hover:text-neutral-900 dark:hover:text-neutral-100'
          "
        >
          {{ tab.label }}
          <span
            v-if="tab.count > 0"
            class="ml-2 px-2 py-0.5 text-xs rounded-full"
            :class="
              activeTab === tab.id
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                : 'bg-neutral-200 dark:bg-neutral-800 text-gray-300'
            "
          >
            {{ tab.count }}
          </span>
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="filteredStudies.length === 0" class="text-center py-16">
        <div
          class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center"
        >
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {{ activeTab === 'inProgress' ? 'No Studies in Progress' : activeTab === 'completed' ? 'No Studies Completed Yet' : 'No Bookmarked Studies' }}
        </h3>
        <p class="text-gray-300 mb-6 max-w-md mx-auto">
          {{ activeTab === 'inProgress' ? 'Start your first study to see it here' : activeTab === 'completed' ? 'Complete a study to see it listed here' : 'Bookmark studies to save them for later' }}
        </p>
        <router-link to="/study-series" class="btn btn-primary inline-flex items-center gap-3 px-6 py-3">
          Browse Studies
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>

      <!-- Studies Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div
          v-for="(study, index) in filteredStudies"
          :key="study.id"
          v-intersect="{
            handler: () => markStudyVisible(study.id),
            options: { rootMargin: '100px' }
          }"
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
          :class="{ 'opacity-0': !visibleStudies.has(study.id), 'animate-fade-in': visibleStudies.has(study.id) }"
          @click="viewStudy(study.id)"
        >
          <!-- Study Header Image - Matching Study Series style -->
          <div class="relative h-32 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-6">
            <!-- Same book icon as Study Series -->
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="absolute top-3 right-3 flex gap-2">
              <div
                v-if="study.category === 'supporter'"
                class="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg"
              >
                ADVANCED
              </div>
              <div
                v-if="activeTab === 'completed'"
                class="px-2 py-1 bg-white/90 text-emerald-600 text-xs font-semibold rounded-lg flex items-center gap-1 shadow-sm"
              >
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Completed
              </div>
              <div
                v-if="activeTab === 'bookmarked'"
                class="px-2 py-1 bg-white/90 text-amber-600 text-xs font-semibold rounded-lg shadow-sm"
              >
                Bookmarked
              </div>
            </div>
          </div>

          <!-- Study Content -->
          <div class="p-5">
            <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
              {{ study.title }}
            </h3>
            <p class="text-sm text-neutral-600 dark:text-gray-300 mb-4 line-clamp-2">
              {{ study.description }}
            </p>

            <!-- Progress Bar for In Progress -->
            <div v-if="activeTab === 'inProgress'" class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-medium text-neutral-600 dark:text-gray-300">
                  Progress
                </span>
                <span class="text-xs font-medium text-emerald-500 dark:text-emerald-400">
                  {{ getStudyProgress(study.id) }}%
                </span>
              </div>
              <div class="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-primary-500 to-blue-600 transition-all duration-500"
                  :style="{ width: `${getStudyProgress(study.id)}%` }"
                ></div>
              </div>
            </div>

            <!-- Study Metadata -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3 text-xs text-neutral-500">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  {{ study.lessons.length }} lessons
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {{ study.totalDuration }} min
                </span>
              </div>
            </div>

            <!-- Last Accessed Info -->
            <div v-if="activeTab === 'inProgress'" class="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <span class="text-xs text-neutral-500">
                Last accessed: {{ getLastAccessed(study.id) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useStudyProgressStore } from '../stores/studyProgress'
import { useStudyOrganization } from '../composables/useStudyOrganization'
import { getAllStudies, getStudyById, type Study } from '../data/studies'
import StudyGridSkeleton from '../components/skeletons/StudyGridSkeleton.vue'

const router = useRouter()
const authStore = useAuthStore()
const progressStore = useStudyProgressStore()
const { userBookmarks, initialize: initializeBookmarks } = useStudyOrganization()

// Loading state
const isLoading = ref(true)

// Lazy loading state for studies
const visibleStudies = ref<Set<string>>(new Set())

// Mark study as visible when it enters viewport
const markStudyVisible = (studyId: string) => {
  visibleStudies.value.add(studyId)
}

// Vue directive for intersection observer
const vIntersect = {
  mounted(el: HTMLElement, binding: any) {
    const options = binding.value?.options || { rootMargin: '100px' }
    const handler = binding.value?.handler || (() => {})
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handler()
          observer.unobserve(el)
        }
      })
    }, options)
    
    observer.observe(el)
    
    // Store observer for cleanup
    ;(el as any).__intersectObserver = observer
  },
  unmounted(el: HTMLElement) {
    if ((el as any).__intersectObserver) {
      ;(el as any).__intersectObserver.disconnect()
    }
  }
}

const activeTab = ref<'inProgress' | 'completed' | 'bookmarked'>('inProgress')

const allStudies = ref<Study[]>([])

const tabs = computed(() => [
  { id: 'inProgress' as const, label: 'In Progress', count: inProgressStudies.value.length },
  { id: 'completed' as const, label: 'Completed', count: completedStudies.value.length },
  { id: 'bookmarked' as const, label: 'Bookmarked', count: bookmarkedStudies.value.length },
])

const inProgressStudies = ref<Study[]>([])
const completedStudies = ref<Study[]>([])
const bookmarkedStudies = ref<Study[]>([])

const filteredStudies = computed(() => {
  switch (activeTab.value) {
    case 'inProgress':
      return inProgressStudies.value
    case 'completed':
      return completedStudies.value
    case 'bookmarked':
      return bookmarkedStudies.value
    default:
      return []
  }
})

const getStudyProgress = (studyId: string) => {
  const progress = progressStore.progressData[studyId]
  if (!progress) return 0
  const study = getStudyById(studyId)
  if (!study) return 0
  return Math.round((progress.completedLessons.length / study.lessons.length) * 100)
}

const getLastAccessed = (studyId: string) => {
  const progress = progressStore.progressData[studyId]
  if (!progress?.lastAccessedAt) return 'Never'
  
  const date = new Date(progress.lastAccessedAt)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return 'Today'
  if (diffInDays === 1) return 'Yesterday'
  if (diffInDays < 7) return `${diffInDays} days ago`
  return date.toLocaleDateString()
}

const viewStudy = (studyId: string) => {
  if (!studyId) {
    console.error('Cannot navigate: missing studyId')
    return
  }
  
  router.push(`/study/${studyId}`).catch((error) => {
    console.error('Navigation error:', error)
    router.push('/study-series').catch(() => {
      router.push('/')
    })
  })
}

const loadStudiesData = () => {
  try {
    allStudies.value = getAllStudies()

    // Separate by status
    const inProgress: Study[] = []
    const completed: Study[] = []
    const bookmarked: Study[] = []
    
    // Get all bookmarked study IDs (only study-level bookmarks, not lesson-level)
    const bookmarkedStudyIds = new Set(
      userBookmarks.value
        .filter(bookmark => !bookmark.lessonId) // Only study-level bookmarks
        .map(bookmark => bookmark.studyId)
    )

    allStudies.value.forEach((study) => {
      const progress = progressStore.progressData[study.id]
      const completedLessonCount = progress?.completedLessons.length || 0
      const totalLessons = study.lessons.length

      // Check if bookmarked (study-level bookmark)
      if (bookmarkedStudyIds.has(study.id)) {
        bookmarked.push(study)
      }

      // Categorize by progress status
      if (completedLessonCount === totalLessons && completedLessonCount > 0) {
        // Fully completed
        completed.push(study)
      } else if (completedLessonCount > 0 && completedLessonCount < totalLessons) {
        // In progress
        inProgress.push(study)
      }
    })

    inProgressStudies.value = inProgress
    completedStudies.value = completed
    bookmarkedStudies.value = bookmarked
  } catch (error) {
    console.error('Error loading studies data:', error)
  } finally {
    isLoading.value = false
  }
}

// Watch for bookmark changes and reload data
watch(userBookmarks, () => {
  loadStudiesData()
}, { deep: true })

// Watch for filtered studies changes to initialize visible studies
watch([filteredStudies, isLoading], ([newStudies, loading]) => {
  if (!loading && newStudies.length > 0 && visibleStudies.value.size === 0) {
    const initialStudies = newStudies.slice(0, 6)
    initialStudies.forEach(study => {
      visibleStudies.value.add(study.id)
    })
  }
}, { immediate: true })

onMounted(async () => {
  // Wait for auth and progress stores to be ready
  if (!authStore.isInitialized) {
    await authStore.initializeAuth()
  }
  
  // Initialize bookmarks (loads from localStorage)
  await initializeBookmarks()
  
  // Ensure progress data is loaded
  if (Object.keys(progressStore.progressData).length === 0) {
    progressStore.loadFromStorage()
  }
  
  loadStudiesData()
})
</script>

