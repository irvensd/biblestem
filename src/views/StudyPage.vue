<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Loading State -->
    <div v-if="isLoading" class="container-base py-8">
      <div class="animate-pulse">
        <div class="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-1/3 mb-6"></div>
        <div class="h-12 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-4"></div>
        <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2 mb-8"></div>
        <div class="space-y-4">
          <div class="h-20 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          <div class="h-20 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          <div class="h-20 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container-base py-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Study Not Found</h2>
        <p class="text-neutral-600 dark:text-neutral-400 mb-6">{{ error }}</p>
        <router-link to="/study-series" class="btn-primary">
          Browse Study Series
        </router-link>
      </div>
    </div>

    <!-- Study Content -->
    <div v-else-if="study" class="container-base py-8">
      <!-- Study Header -->
      <div class="mb-8">
        <nav
          class="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4"
        >
          <router-link to="/study-series" class="hover:text-primary-600">Study Series</router-link>
          <span>/</span>
          <span class="text-neutral-800 dark:text-neutral-200">{{ study.title }}</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div class="flex-1">
            <div class="flex items-center space-x-3 mb-4">
              <div
                class="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br"
                :class="study.color"
              >
                <span class="text-white font-bold text-2xl">{{ study.title.charAt(0) }}</span>
              </div>
              <div>
                <h1 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                  {{ study.title }}
                </h1>
                <p class="text-neutral-600 dark:text-neutral-400">{{ study.description }}</p>
              </div>
            </div>

            <div class="flex items-center space-x-6 text-sm text-neutral-600 dark:text-neutral-400">
              <span>{{ study.lessons.length }} lessons</span>
              <span>{{ formatDuration(study.totalDuration) }}</span>
              <span class="capitalize">{{ study.difficulty }}</span>
              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="
                  study.category === 'free'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    : 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'
                "
              >
                {{ study.category === 'free' ? 'Free' : 'Premium' }}
              </span>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="text-right">
              <div class="text-sm text-neutral-600 dark:text-neutral-400">Progress</div>
              <div class="text-2xl font-bold text-primary-600">
                {{ Math.round(progressPercentage) }}%
              </div>
            </div>
            <div class="w-20 h-20">
              <svg class="transform -rotate-90 w-20 h-20">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  stroke-width="8"
                  fill="none"
                  class="text-neutral-200 dark:text-neutral-700"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  stroke-width="8"
                  fill="none"
                  stroke-dasharray="226"
                  :stroke-dashoffset="226 - (226 * progressPercentage) / 100"
                  class="text-primary-500 transition-all duration-300"
                />
              </svg>
            </div>

            <!-- Share Study Button -->
            <StudyShare
              :study="study"
              share-type="study"
              button-text="Share"
              button-class="btn-secondary"
            />
          </div>
        </div>
      </div>

      <!-- Lesson List -->
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <!-- Study Completion Celebration -->
          <StudyCompletion
            v-if="progressPercentage === 100"
            :study-title="study.title"
            :lessons-completed="study.lessons.length"
            :total-time="timeSpent"
            @review-study="reviewStudy"
            @share-progress="shareProgress"
            @explore-more="exploreMore"
            class="mb-8"
          />

          <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">Lessons</h2>
          <div class="space-y-4">
            <div
              v-for="(lesson, index) in study.lessons"
              :key="lesson.id"
              class="card p-6 hover:shadow-medium transition-all duration-200 cursor-pointer"
              :class="{
                'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800':
                  progressStore.isLessonCompleted(study.id, lesson.id),
                'opacity-75': !canAccessLesson(index),
              }"
              @click="openLesson(lesson, index)"
            >
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div
                    class="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white"
                    :class="
                      progressStore.isLessonCompleted(study.id, lesson.id)
                        ? 'bg-green-500'
                        : canAccessLesson(index)
                          ? 'bg-primary-500'
                          : getLessonAccessReason(index) === 'not-authenticated'
                            ? 'bg-orange-500'
                            : getLessonAccessReason(index) === 'premium-required'
                              ? 'bg-accent-500'
                              : 'bg-neutral-400'
                    "
                  >
                    <span
                      v-if="progressStore.isLessonCompleted(study.id, lesson.id)"
                      class="text-lg"
                      >✓</span
                    >
                    <span
                      v-else-if="getLessonAccessReason(index) === 'not-authenticated'"
                      class="text-lg"
                      >👤</span
                    >
                    <span
                      v-else-if="getLessonAccessReason(index) === 'premium-required'"
                      class="text-lg"
                      >⭐</span
                    >
                    <span v-else-if="!canAccessLesson(index)" class="text-lg">🔒</span>
                    <span v-else>{{ index + 1 }}</span>
                  </div>
                </div>

                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-lg text-neutral-800 dark:text-neutral-200">
                      {{ lesson.title }}
                    </h3>
                    <span class="text-sm text-neutral-500">{{ lesson.duration }} min</span>
                  </div>
                  <p class="text-neutral-600 dark:text-neutral-400 mb-2">
                    {{ lesson.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-primary-600 font-medium">{{ lesson.scripture }}</span>
                    <button
                      v-if="canAccessLesson(index)"
                      class="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1"
                      :class="{ 'opacity-50 cursor-not-allowed': isNavigating }"
                      :disabled="isNavigating"
                      @click.stop="openLesson(lesson, index)"
                    >
                      <span>{{
                        progressStore.isLessonCompleted(study.id, lesson.id) ? 'Review' : 'Start'
                      }}</span>
                      <svg v-if="isNavigating" class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span v-else>→</span>
                    </button>
                    <span
                      v-else-if="getLessonAccessReason(index) === 'not-authenticated'"
                      class="text-orange-600 dark:text-orange-400 font-medium text-sm cursor-pointer hover:text-orange-700"
                      @click.stop="openLesson(lesson, index)"
                    >
                      Sign In Required →
                    </span>
                    <span
                      v-else-if="getLessonAccessReason(index) === 'premium-required'"
                      class="text-accent-600 dark:text-accent-400 font-medium text-sm"
                    >
                      Premium Only →
                    </span>
                    <span v-else class="text-neutral-400 dark:text-neutral-500 font-medium text-sm">
                      Complete Previous →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Study Sidebar -->
        <div class="space-y-6">
          <!-- Study Stats -->
          <div class="card p-6">
            <h3 class="font-bold text-neutral-800 dark:text-neutral-200 mb-4">Study Overview</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Lessons completed</span>
                <span class="font-medium">{{ completedLessons }}/{{ study.lessons.length }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Time invested</span>
                <span class="font-medium">{{ timeSpent }} min</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Estimated remaining</span>
                <span class="font-medium">{{ timeRemaining }} min</span>
              </div>
            </div>
          </div>

          <!-- Study Features -->
          <div class="card p-6">
            <h3 class="font-bold text-neutral-800 dark:text-neutral-200 mb-4">Features</h3>
            <div class="space-y-2">
              <div
                v-for="feature in study.features"
                :key="feature"
                class="flex items-center space-x-2"
              >
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-neutral-600 dark:text-neutral-400">{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Study Tags -->
          <div class="card p-6">
            <h3 class="font-bold text-neutral-800 dark:text-neutral-200 mb-4">Topics</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in study.tags"
                :key="tag"
                class="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-3 py-1 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Continue Button -->
          <button
            v-if="nextLesson"
            class="w-full btn-primary"
            @click="openLesson(nextLesson.lesson, nextLesson.index)"
          >
            {{ nextLesson.lesson.completed ? 'Review Next Lesson' : 'Continue Study' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Lesson Modal -->
    <LessonModal
      v-if="currentLesson"
      :lesson="currentLesson"
      :study="study"
      :lesson-index="currentLessonIndex"
      :is-premium="study.category === 'premium'"
      @close="closeLesson"
      @complete="completeLesson"
      @next="nextLessonInModal"
      @upgrade="handleUpgrade"
    />

    <!-- No loading state - removed completely -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useStudyProgressStore } from '../stores/studyProgress'
import { useLoadingStore } from '../stores/loading'
import { useErrorStore } from '../stores/errors'
import { useCleanup, useDOMEvents, useSafeState } from '../composables/useCleanup'
import { getStudyById, type Study, type Lesson } from '../data/studies'
import LessonModal from '../components/LessonModal.vue'
import StudyCompletion from '../components/StudyCompletion.vue'
import StudyShare from '../components/StudyShare.vue'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const progressStore = useStudyProgressStore()
const loadingStore = useLoadingStore()
const errorStore = useErrorStore()

// Cleanup composables
const cleanup = useCleanup()
const domEvents = useDOMEvents()
const { isMounted, safeSet, safeAsync } = useSafeState()

const study = ref<Study | null>(null)
const currentLesson = ref<Lesson | null>(null)
const currentLessonIndex = ref<number>(0)
const error = ref<string>('')

// Loading states
const isLoading = computed(() => loadingStore.isLoadingKey('study-page').value)
const isNavigating = computed(() => loadingStore.isLoadingKey('lesson-navigation').value)

const studyProgress = computed(() =>
  study.value ? progressStore.getStudyProgress(study.value.id) : null,
)

const completedLessons = computed(() =>
  studyProgress.value ? studyProgress.value.completedLessons.length : 0,
)

const progressPercentage = computed(() =>
  study.value
    ? progressStore.getStudyCompletionPercentage(study.value.id, study.value.lessons.length)
    : 0,
)

const timeSpent = computed(() => (studyProgress.value ? studyProgress.value.totalTimeSpent : 0))

const timeRemaining = computed(() =>
  study.value ? study.value.totalDuration - timeSpent.value : 0,
)

const nextLesson = computed(() => {
  if (!study.value) return null

  for (let i = 0; i < study.value.lessons.length; i++) {
    const lesson = study.value.lessons[i]
    if (!progressStore.isLessonCompleted(study.value.id, lesson.id) && canAccessLesson(i)) {
      return { lesson, index: i }
    }
  }
  return null
})

const canAccessLesson = (index: number) => {
  if (!study.value) return false
  // Require authentication to access any study content
  if (!authStore.isAuthenticated) return false
  return progressStore.canAccessLesson(study.value.id, index, authStore.isPremium, study.value)
}

const getLessonAccessReason = (index: number) => {
  if (!study.value) return 'unavailable'
  if (!authStore.isAuthenticated) return 'not-authenticated'
  if (study.value.category === 'premium' && !authStore.isPremium) return 'premium-required'
  if (index > 0) {
    const progress = progressStore.getStudyProgress(study.value.id)
    if (!progress) return 'sequential'
    const previousLessonId = study.value.lessons[index - 1].id
    if (!progress.completedLessons.includes(previousLessonId)) return 'sequential'
  }
  return 'accessible'
}

const formatDuration = (minutes: number) => {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}

const openLesson = async (lesson: Lesson, index: number) => {
  try {
    loadingStore.setLoading('lesson-navigation', true)

    // Check if user is authenticated first
    if (!authStore.isAuthenticated) {
      errorStore.addError('Please sign in to access lessons', { type: 'info' })
      router.push({
        name: 'signin',
        query: { redirect: route.fullPath },
      })
      return
    }

    // Check access permissions
    if (!canAccessLesson(index)) {
      const reason = getLessonAccessReason(index)
      switch (reason) {
        case 'premium-required':
          errorStore.addError('Premium subscription required for this lesson', { type: 'warning' })
          break
        case 'sequential':
          errorStore.addError('Complete the previous lesson first', { type: 'info' })
          break
        default:
          errorStore.addError('Cannot access this lesson', { type: 'warning' })
      }
      return
    }

    // Track lesson start
    if (study.value) {
      progressStore.startLesson(study.value.id, lesson.id)
    }

    currentLesson.value = lesson
    currentLessonIndex.value = index

    // Clear any previous errors
    error.value = ''
  } catch (err) {
    console.error('Error opening lesson:', err)
    errorStore.handleError(err, 'Lesson Navigation')
  } finally {
    loadingStore.clearLoading('lesson-navigation')
  }
}

const closeLesson = () => {
  try {
    // Save any progress before closing
    if (study.value && currentLesson.value && isMounted.value) {
      const sessionDuration = Math.max(1, Math.floor(Math.random() * 5) + 1) // Mock session time
      progressStore.updateLessonProgress(study.value.id, currentLesson.value.id, {
        timeSpent: sessionDuration,
        lastAccessed: new Date().toISOString()
      })
    }

    safeSet(currentLesson, null)
    safeSet(currentLessonIndex, 0)
  } catch (err) {
    console.error('Error closing lesson:', err)
    if (isMounted.value) {
      errorStore.handleError(err, 'Lesson Close')
    }
  }
}

const completeLesson = async (lessonId: string) => {
  try {
    if (!study.value) return

    loadingStore.setLoading('lesson-completion', true)

    const lesson = study.value.lessons.find((l) => l.id === lessonId)
    const timeSpent = lesson ? lesson.duration : 5

    // Complete the lesson with proper tracking
    progressStore.completeLesson(study.value.id, lessonId, timeSpent)

    // Check if study is completed
    const completionPercentage = progressStore.getStudyCompletionPercentage(
      study.value.id,
      study.value.lessons.length
    )

    if (completionPercentage === 100) {
      // Add celebration notification
      errorStore.addError(`🎉 Congratulations! You completed "${study.value.title}"!`, {
        type: 'info',
        persistent: true
      })
    }

    closeLesson()
  } catch (err) {
    console.error('Error completing lesson:', err)
    errorStore.handleError(err, 'Lesson Completion')
  } finally {
    loadingStore.clearLoading('lesson-completion')
  }
}

const nextLessonInModal = async () => {
  try {
    if (!study.value || currentLessonIndex.value >= study.value.lessons.length - 1) {
      closeLesson()
      return
    }

    const nextIndex = currentLessonIndex.value + 1
    const nextLesson = study.value.lessons[nextIndex]

    if (canAccessLesson(nextIndex)) {
      await openLesson(nextLesson, nextIndex)
    } else {
      // Show why next lesson can't be accessed
      const reason = getLessonAccessReason(nextIndex)
      switch (reason) {
        case 'premium-required':
          errorStore.addError('Premium subscription required for next lesson', { type: 'warning' })
          break
        case 'sequential':
          errorStore.addError('Complete current lesson to unlock the next one', { type: 'info' })
          break
        default:
          errorStore.addError('Next lesson is not available yet', { type: 'info' })
      }
      closeLesson()
    }
  } catch (err) {
    console.error('Error navigating to next lesson:', err)
    errorStore.handleError(err, 'Next Lesson Navigation')
  }
}

// Completion celebration methods
const reviewStudy = () => {
  // Scroll to lessons section or open first lesson for review
  if (study.value && study.value.lessons.length > 0) {
    openLesson(study.value.lessons[0], 0)
  }
}

const shareProgress = () => {
  if (navigator.share) {
    navigator.share({
      title: `I completed "${study.value?.title}" on BibleStem!`,
      text: `Just finished studying "${study.value?.title}" - ${study.value?.lessons.length} lessons of inspiring Bible study. Check out BibleStem for interactive Bible learning!`,
      url: window.location.origin,
    })
  } else {
    // Fallback for browsers without Web Share API
    const shareText = `I just completed "${study.value?.title}" on BibleStem! ${study.value?.lessons.length} lessons of amazing Bible study. Check it out: ${window.location.origin}`
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Share text copied to clipboard!')
    })
  }
}

const exploreMore = () => {
  router.push('/study-series')
}

const handleUpgrade = () => {
  // Navigate to upgrade or show upgrade modal
  // For demo purposes, we'll just alert
  alert(
    'Demo Mode: In a real app, this would open the upgrade flow ($9.99/month, 3-day free trial). You can sign in with the premium demo account: demo@biblestem.com / demo123',
  )
}

// Keyboard navigation
const handleKeyboard = (event: KeyboardEvent) => {
  if (!currentLesson.value) return

  if (event.key === 'Escape') {
    closeLesson()
  } else if (event.key === 'ArrowRight' && event.ctrlKey) {
    nextLessonInModal()
  } else if (event.key === 'ArrowLeft' && event.ctrlKey) {
    // Previous lesson logic
    if (currentLessonIndex.value > 0) {
      const prevIndex = currentLessonIndex.value - 1
      const prevLesson = study.value?.lessons[prevIndex]
      if (prevLesson && canAccessLesson(prevIndex)) {
        openLesson(prevLesson, prevIndex)
      }
    }
  }
}

// Route parameter watcher
watch(() => route.params.id, async (newStudyId) => {
  if (newStudyId && newStudyId !== study.value?.id) {
    await loadStudy(newStudyId as string)
  }
})

const loadStudy = async (studyId: string) => {
  try {
    loadingStore.setLoading('study-page', true)
    error.value = ''

    // Wait for auth to be ready
    if (!authStore.isInitialized) {
      await authStore.initializeAuth()
    }

    // Load progress data
    progressStore.loadFromStorage()

    // Only proceed if we have a valid study ID
    if (!studyId) {
      error.value = 'Invalid study ID'
      router.push('/study-series')
      return
    }

    const foundStudy = getStudyById(studyId)

    if (foundStudy) {
      study.value = foundStudy
      progressStore.startStudy(studyId)

      // Track study access
      progressStore.updateStudyAccess(studyId)
    } else {
      error.value = `Study "${studyId}" not found`
      errorStore.addError('Study not found', { type: 'warning' })

      // Delay redirect to show error
      setTimeout(() => {
        router.push('/study-series')
      }, 2000)
    }
  } catch (err) {
    console.error('Error loading study:', err)
    error.value = 'Failed to load study'
    errorStore.handleError(err, 'Study Loading')

    setTimeout(() => {
      router.push('/study-series')
    }, 2000)
  } finally {
    loadingStore.clearLoading('study-page')
  }
}

onMounted(async () => {
  const studyId = route.params.id as string
  if (studyId) {
    await loadStudy(studyId)
  }

  // Add keyboard navigation
  document.addEventListener('keydown', handleKeyboard)
})

onUnmounted(() => {
  // Cleanup
  document.removeEventListener('keydown', handleKeyboard)
  loadingStore.clearAllLoading()
  closeLesson()
})
</script>
