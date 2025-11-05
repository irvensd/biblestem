<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Loading Skeleton -->
    <div v-if="loading">
      <StudyPageSkeleton :lesson-count="5" />
    </div>
    
    <!-- Actual Content -->
    <div v-else-if="study" class="max-w-4xl mx-auto">
      <!-- Breadcrumbs -->
      <Breadcrumbs :items="breadcrumbs" />
      
      <!-- Study Header -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-6">
          <button
            @click="router.back()"
            class="group flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-primary-600 transition-all text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white"
          >
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="font-medium">Back</span>
          </button>
          
          <!-- Continue Reading Button -->
          <button
            v-if="lastReadLessonId"
            @click="continueReading"
            class="ml-auto group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:shadow-lg transition-all"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span class="font-medium">Continue Reading</span>
          </button>
        </div>
        <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">{{ study.title }}</h1>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">{{ study.description }}</p>
        <div class="flex flex-wrap items-center gap-3 text-sm">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <svg class="w-4 h-4 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span class="text-neutral-700 dark:text-neutral-300">{{ study.lessons.length }} lessons</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-neutral-700 dark:text-neutral-300">{{ study.totalDuration }} min</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <svg class="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="text-neutral-700 dark:text-neutral-300 capitalize">{{ study.difficulty }}</span>
          </div>
        </div>
      </div>

      <!-- Lessons List -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Lessons</h2>
        
        <!-- Virtual Scrolling for large lists (20+ items) -->
        <VirtualScroll
          v-if="study.lessons.length >= 20"
          :items="study.lessons"
          :item-height="180"
          :container-height="600"
          :overscan="3"
          class="lessons-virtual-scroll"
          @item-visible="handleLessonVisible"
        >
          <template #default="slotProps">
            <div
              v-if="slotProps && 'item' in slotProps"
              class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 cursor-pointer hover:border-primary-600 hover:shadow-2xl hover:shadow-primary-900/20 transition-all group mb-4"
              @click="viewLesson((slotProps.item as Lesson).id)"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
                >
                  {{ (slotProps.index as number) + 1 }}
                </div>
                <div class="flex-1">
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ (slotProps.item as Lesson).title }}</h3>
                    <div class="flex items-center gap-3">
                      <span
                        v-if="isCompleted((slotProps.item as Lesson).id)"
                        class="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 rounded-full font-semibold text-sm"
                      >
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        Completed
                      </span>
                      <span
                        v-else
                        class="inline-flex items-center gap-1 px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full font-semibold text-sm"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {{ (slotProps.item as Lesson).duration }} min
                      </span>
                      
                      <!-- Mark as Incomplete Button (only for completed lessons) -->
                      <button
                        v-if="isCompleted((slotProps.item as Lesson).id)"
                        @click.stop="markAsIncomplete((slotProps.item as Lesson).id)"
                        class="group inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 rounded-full font-semibold text-sm transition-all duration-200 transform hover:scale-105"
                        title="Mark as incomplete to re-study this lesson"
                      >
                        <svg class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                        <span class="hidden sm:inline">Reset</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">{{ (slotProps.item as Lesson).description }}</p>
                  <div class="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-500">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>{{ (slotProps.item as Lesson).scripture }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </VirtualScroll>
        
        <!-- Regular list for smaller sets (< 20 items) -->
        <div v-else class="space-y-4">
          <div
            v-for="(lesson, index) in study.lessons"
            :key="lesson.id"
            class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 cursor-pointer hover:border-primary-600 hover:shadow-2xl hover:shadow-primary-900/20 transition-all group"
            @click="viewLesson(lesson.id)"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
              >
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ lesson.title }}</h3>
                  <div class="flex items-center gap-3">
                    <span
                      v-if="isCompleted(lesson.id)"
                      class="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 rounded-full font-semibold text-sm"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      Completed
                    </span>
                    <span
                      v-else
                      class="inline-flex items-center gap-1 px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full font-semibold text-sm"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {{ lesson.duration }} min
                    </span>
                    
                    <!-- Mark as Incomplete Button (only for completed lessons) -->
                    <button
                      v-if="isCompleted(lesson.id)"
                      @click.stop="markAsIncomplete(lesson.id)"
                      class="group inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 rounded-full font-semibold text-sm transition-all duration-200 transform hover:scale-105"
                      title="Mark as incomplete to re-study this lesson"
                    >
                      <svg class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                      </svg>
                      <span class="hidden sm:inline">Reset</span>
                    </button>
                  </div>
                </div>
                <p class="text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">{{ lesson.description }}</p>
                <div class="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-500">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{{ lesson.scripture }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-16">
      <div class="max-w-md mx-auto">
        <svg class="w-16 h-16 mx-auto mb-4 text-neutral-400 dark:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">Study Not Found</h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          The study you're looking for doesn't exist or may have been removed.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <router-link
            to="/dashboard"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
          >
            Back to Dashboard
          </router-link>
          <router-link
            to="/study-series"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Browse Studies
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Reset Lesson Modal -->
  <ResetLessonModal
    :is-open="showResetModal"
    :lesson-title="selectedLessonTitle"
    @close="closeResetModal"
    @confirm="confirmResetLesson"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getSupabase, handleSupabaseError } from '../lib/supabase'
import { useStudyProgressStore } from '../stores/studyProgress'
import { useStudyCache } from '../composables/useCache'
import { useReadPosition } from '../composables/useReadPosition'
import StudyPageSkeleton from '../components/skeletons/StudyPageSkeleton.vue'
import ResetLessonModal from '../components/ResetLessonModal.vue'
import VirtualScroll from '../components/VirtualScroll.vue'
import Breadcrumbs, { type BreadcrumbItem } from '../components/Breadcrumbs.vue'
import type { Study, Lesson } from '../data/studies'

const route = useRoute()
const router = useRouter()
const progressStore = useStudyProgressStore()
const studyCache = useStudyCache()
const { getLastReadLesson } = useReadPosition()

const study = ref<Study | null>(null)
const lastReadLessonId = ref<string | null>(null)
const loading = ref(true)

// Breadcrumbs
const breadcrumbs = computed<BreadcrumbItem[]>(() => [
  { label: 'Study Series', to: '/study-series' },
  { label: study.value?.title || 'Study' }
])

// Handle lesson visibility for virtual scrolling
const handleLessonVisible = (lesson: any, index: number) => {
  // This is called when a lesson becomes visible in the virtual scroll
  // You can use this for analytics or other tracking if needed
}

// Modal state
const showResetModal = ref(false)
const selectedLessonId = ref<string>('')
const selectedLessonTitle = ref<string>('')

const isCompleted = (lessonId: string) => {
  if (!study.value) return false
  return progressStore.isLessonCompleted(study.value.id, lessonId)
}

const viewLesson = (lessonId: string) => {
  // Fixed: Use correct route format matching router definition
  router.push(`/study/${route.params.id as string}/lesson/${lessonId}`)
}

const markAsIncomplete = async (lessonId: string) => {
  if (!study.value) return
  
  // Find the lesson title for the modal
  const lesson = study.value.lessons.find(l => l.id === lessonId)
  if (!lesson) return
  
  // Set modal data and show modal
  selectedLessonId.value = lessonId
  selectedLessonTitle.value = lesson.title
  showResetModal.value = true
}

const closeResetModal = () => {
  showResetModal.value = false
  // Clean up modal state
  setTimeout(() => {
    selectedLessonId.value = ''
    selectedLessonTitle.value = ''
  }, 300) // Wait for modal animation to complete
}

const confirmResetLesson = async () => {
  if (!study.value || !selectedLessonId.value) return
  
  try {
    await progressStore.incompleteLesson(study.value.id, selectedLessonId.value)
    console.log(`Lesson ${selectedLessonId.value} marked as incomplete`)
    console.log('Current progress:', progressStore.getStudyProgress(study.value.id))
    
    // Close the modal after successful reset
    closeResetModal()
    
  } catch (error) {
    console.error('Failed to mark lesson as incomplete:', error)
    // Don't close modal on error - user can retry
  }
}

const continueReading = () => {
  if (lastReadLessonId.value) {
    // Fixed: Use correct route format matching router definition
    router.push(`/study/${route.params.id as string}/lesson/${lastReadLessonId.value}`)
  }
}

onMounted(async () => {
  // Check for last read lesson
  lastReadLessonId.value = getLastReadLesson(route.params.id as string)
  const studyId = route.params.id as string
  loading.value = true

  // Initialize progress store (now async)
  await progressStore.loadFromStorage()

  try {
    const supabase = getSupabase()
    
    if (supabase) {
      // Check cache first
      const cachedStudy = studyCache.getCachedStudyById(studyId) as Study | null
      if (cachedStudy) {
        study.value = cachedStudy
        loading.value = false
        console.log('Study loaded from cache:', study.value)
        return
      }

      // Load from Supabase using parallel queries for better performance
      const [studyResult, lessonsResult] = await Promise.all([
        supabase
          .from('studies')
          .select('*')
          .eq('id', studyId)
          .single(),
        supabase
          .from('lessons')
          .select('*')
          .eq('study_id', studyId)
          .order('lesson_order', { ascending: true })
      ])

      const { data: studyData, error: studyError } = studyResult
      const { data: lessonsData, error: lessonsError } = lessonsResult

      if (studyError) {
        const errorInfo = handleSupabaseError(studyError, 'load study')
        console.error('Failed to load study from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If study not found, set to null and continue to fallback
        if (errorInfo.isNotFound) {
          study.value = null
        } else {
          throw studyError
        }
      }

      if (lessonsError) {
        const errorInfo = handleSupabaseError(lessonsError, 'load lessons')
        console.error('Failed to load lessons from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If lessons not found but study exists, use empty lessons array
        if (errorInfo.isNotFound && studyData) {
          // Continue with empty lessons
        } else if (!errorInfo.isNotFound) {
          throw lessonsError
        }
      }

      if (studyData) {
        // Ensure studyData exists before creating study object
        study.value = {
          id: studyData.id,
          title: studyData.title,
          description: studyData.description,
          category: studyData.category,
          totalDuration: studyData.total_duration,
          difficulty: studyData.difficulty,
          tags: studyData.tags || [],
          image: studyData.image || '',
          color: studyData.color || '',
          features: studyData.features || [],
          lessons: (lessonsData || []).map((lesson: any) => ({
            id: lesson.id,
            title: lesson.title,
            duration: lesson.duration,
            scripture: lesson.scripture,
            description: lesson.description,
            content: lesson.content,
            completed: false,
          })),
        }
        
        // Cache the study for future use (cache for 30 minutes)
        if (study.value) {
          studyCache.cacheStudyWithId(studyId, study.value)
        }
        
        console.log('Study loaded from Supabase:', study.value)
      } else {
        // No study data found - set to null explicitly
        study.value = null
        console.warn('Supabase returned no study data, falling back to local data')
      }
    } else {
      // Fallback to local data if Supabase is not available
      console.log('Supabase not available, loading from local data')
      const { getStudyById } = await import('../data/studies')
      const foundStudy = getStudyById(studyId)
      if (foundStudy) {
        study.value = foundStudy
        console.log('Study loaded from local data:', study.value)
      } else {
        console.error('Study not found in local data:', studyId)
      }
    }

    // Progress was already loaded at the start of onMounted
  } catch (error) {
    console.error('Error loading study:', error)
    // If Supabase failed, try local fallback
    if (!study.value) {
      try {
        const { getStudyById } = await import('../data/studies')
        const foundStudy = getStudyById(studyId)
        if (foundStudy) {
          study.value = foundStudy
          console.log('Fallback: Study loaded from local data')
        } else {
          // Explicitly set to null if study not found in local data either
          study.value = null
          console.warn('Study not found in local data:', studyId)
        }
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError)
        // Ensure study is null on complete failure
        study.value = null
      }
    }
  } finally {
    loading.value = false
    // Ensure study is null if still not set (shouldn't happen, but safety check)
    // This prevents any template issues with undefined study
  }
})
</script>

<style scoped>
.lessons-virtual-scroll {
  min-height: 600px;
}

.lessons-virtual-scroll :deep(.virtual-scroll-item) {
  padding: 0;
  margin-bottom: 0;
}
</style>

