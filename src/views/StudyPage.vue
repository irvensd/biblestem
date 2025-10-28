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
          <span class="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 font-semibold">
            {{ study.category }}
          </span>
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getSupabase } from '../lib/supabase'
import { useStudyProgressStore } from '../stores/studyProgress'
import StudyPageSkeleton from '../components/skeletons/StudyPageSkeleton.vue'
import type { Study } from '../data/studies'

const route = useRoute()
const router = useRouter()
const progressStore = useStudyProgressStore()

const study = ref<Study | null>(null)
const loading = ref(true)

const isCompleted = (lessonId: string) => {
  if (!study.value) return false
  const progress = progressStore.progressData[study.value.id]
  if (!progress) return false
  return progress.completedLessons.includes(lessonId)
}

const viewLesson = (lessonId: string) => {
  router.push(`/study/${route.params.id}/lesson/${lessonId}`)
}

onMounted(async () => {
  const studyId = route.params.id as string
  loading.value = true

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
      }
    } else {
      // Fallback to local data for demo
      const { getStudyById } = await import('../data/studies')
      const foundStudy = getStudyById(studyId)
      if (foundStudy) {
        study.value = foundStudy
      }
    }

    // Load user progress to show completion status
    if (progressStore) {
      progressStore.loadFromStorage()
    }
  } catch (error) {
    console.error('Error loading study:', error)
  } finally {
    loading.value = false
  }
})
</script>

