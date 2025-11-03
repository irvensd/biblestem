<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Loading Skeleton -->
    <div v-if="loading">
      <StudyPageSkeleton :lesson-count="5" />
    </div>
    
    <!-- Actual Content -->
    <div v-else-if="study" class="max-w-4xl mx-auto">
      <!-- Study Header -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-6">
          <button
            @click="router.back()"
            class="group flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 hover:border-primary-600 transition-all text-neutral-400 hover:text-white"
          >
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="font-medium">Back</span>
          </button>
        </div>
        <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-neutral-100">{{ study.title }}</h1>
        <p class="text-lg text-neutral-400 mb-6 leading-relaxed">{{ study.description }}</p>
        <div class="flex flex-wrap items-center gap-3 text-sm">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
            <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span class="text-neutral-300">{{ study.lessons.length }} lessons</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-neutral-300">{{ study.totalDuration }} min</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
            <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="text-neutral-300 capitalize">{{ study.difficulty }}</span>
          </div>
        </div>
      </div>

      <!-- Lessons List -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold mb-6 text-neutral-100">Lessons</h2>
        <div
          v-for="(lesson, index) in study.lessons"
          :key="lesson.id"
          class="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 cursor-pointer hover:border-primary-600 hover:shadow-2xl hover:shadow-primary-900/20 transition-all group"
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
                <h3 class="text-xl font-bold text-neutral-100 group-hover:text-primary-400 transition-colors">{{ lesson.title }}</h3>
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
                    @click="markAsIncomplete(lesson.id)"
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
              <p class="text-neutral-400 mb-3 leading-relaxed">{{ lesson.description }}</p>
              <div class="flex items-center gap-4 text-sm text-neutral-500">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    <div v-else class="text-center py-16">
      <p class="text-xl text-gray-600">Study not found</p>
      <router-link to="/dashboard" class="btn btn-primary mt-4">
        Back to Dashboard
      </router-link>
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
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getSupabase } from '../lib/supabase'
import { useStudyProgressStore } from '../stores/studyProgress'
import StudyPageSkeleton from '../components/skeletons/StudyPageSkeleton.vue'
import ResetLessonModal from '../components/ResetLessonModal.vue'
import type { Study } from '../data/studies'

const route = useRoute()
const router = useRouter()
const progressStore = useStudyProgressStore()

const study = ref<Study | null>(null)
const loading = ref(true)

// Modal state
const showResetModal = ref(false)
const selectedLessonId = ref<string>('')
const selectedLessonTitle = ref<string>('')

const isCompleted = (lessonId: string) => {
  if (!study.value) return false
  return progressStore.isLessonCompleted(study.value.id, lessonId)
}

const viewLesson = (lessonId: string) => {
  router.push(`/study/${route.params.id}/lesson/${lessonId}`)
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
    
    // Force a small re-render to ensure reactivity
    // This helps Vue detect the change in progress
    const lessonId = selectedLessonId.value
    selectedLessonId.value = ''
    
    // Trigger reactivity by accessing the progress store
    await new Promise(resolve => setTimeout(resolve, 50))
    
  } catch (error) {
    console.error('Failed to mark lesson as incomplete:', error)
  }
}

onMounted(async () => {
  const studyId = route.params.id as string
  loading.value = true

  // Initialize progress store (now async)
  await progressStore.loadFromStorage()

  try {
    const supabase = getSupabase()
    
    if (supabase) {
      // Load from Supabase
      const { data: studyData, error: studyError } = await supabase
        .from('studies')
        .select('*')
        .eq('id', studyId)
        .single()

      if (studyError) throw studyError

      // Load lessons for this study
      const { data: lessonsData, error: lessonsError } = await supabase
        .from('lessons')
        .select('*')
        .eq('study_id', studyId)
        .order('lesson_order', { ascending: true })

      if (lessonsError) throw lessonsError

      if (studyData && lessonsData) {
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
          lessons: lessonsData.map((lesson: any) => ({
            id: lesson.id,
            title: lesson.title,
            duration: lesson.duration,
            scripture: lesson.scripture,
            description: lesson.description,
            content: lesson.content,
            completed: false,
          })),
        }
        console.log('Study loaded from Supabase:', study.value)
      } else {
        console.warn('Supabase returned empty data, falling back to local data')
        throw new Error('No data returned from Supabase')
      }
    } else {
      // Fallback to local data for demo
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

    // Load user progress to show completion status
    if (progressStore) {
      progressStore.loadFromStorage()
    }
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
        }
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError)
      }
    }
  } finally {
    loading.value = false
  }
})
</script>

