<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
    <div class="container mx-auto px-4 py-8">
      <!-- Debug Info -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
        <h2 class="font-bold mb-2">Debug Info:</h2>
        <p>Study ID: {{ route.params.studyId }}</p>
        <p>Lesson ID: {{ route.params.lessonId }}</p>
        <p>Study Found: {{ study ? 'Yes' : 'No' }}</p>
        <p>Lesson Found: {{ lesson ? 'Yes' : 'No' }}</p>
        <p v-if="lesson">Lesson Title: {{ lesson.title }}</p>
      </div>

      <!-- Back Button -->
      <button
        @click="router.back()"
        class="mb-6 flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Study
      </button>

      <!-- Lesson Content -->
      <div v-if="lesson" class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
        <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{{ lesson.title }}</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">{{ lesson.description }}</p>
        
        <!-- Scripture -->
        <div class="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{{ lesson.scripture }}</p>
          <p class="text-xl italic text-gray-800 dark:text-gray-200">
            "{{ lesson.content.scriptureText }}"
          </p>
        </div>

        <!-- Opening Thought -->
        <div v-if="lesson.openingThought" class="mb-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Opening Thought</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 italic">
            "{{ lesson.openingThought }}"
          </p>
        </div>

        <!-- Teaching Points -->
        <div v-if="lesson.content.teachingPoints" class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Teaching Points</h2>
          <div v-for="(point, index) in lesson.content.teachingPoints" :key="index" class="mb-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <h3 v-if="point.title" class="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">{{ point.title }}</h3>
            <p class="text-gray-800 dark:text-gray-200 mb-4">{{ point.narrative }}</p>
            
            <!-- Scriptures -->
            <div v-if="point.scriptures" class="space-y-3">
              <div v-for="(scripture, sIndex) in point.scriptures" :key="sIndex" class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p class="font-bold text-blue-600 dark:text-blue-400">{{ scripture.verse }}</p>
                <p v-if="scripture.text" class="text-gray-700 dark:text-gray-300 italic">"{{ scripture.text }}"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Commentary -->
        <div v-if="lesson.content.commentary" class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Commentary</h2>
          <div v-for="(comment, index) in lesson.content.commentary" :key="index" class="mb-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p class="text-gray-800 dark:text-gray-200">{{ comment }}</p>
          </div>
        </div>

        <!-- Hebrew/Greek Words -->
        <div v-if="lesson.content.hebrewGreekWords" class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Word Study</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="(word, index) in lesson.content.hebrewGreekWords" :key="index" class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-2 border-amber-200 dark:border-amber-800">
              <p class="font-bold text-xl text-amber-700 dark:text-amber-400 mb-2">{{ word.word }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Language:</strong> {{ word.language }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Meaning:</strong> {{ word.meaning }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Context:</strong> {{ word.context }}</p>
            </div>
          </div>
        </div>

        <!-- Life Application -->
        <div v-if="lesson.content.lifeApplication" class="mb-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Life Application</h2>
          <p class="text-gray-800 dark:text-gray-200 mb-4">{{ lesson.content.lifeApplication.challenge }}</p>
          <p v-if="lesson.content.lifeApplication.journaling" class="text-gray-600 dark:text-gray-400 italic">
            {{ lesson.content.lifeApplication.journaling }}
          </p>
        </div>

        <!-- Prayer -->
        <div v-if="lesson.content.prayerPrompt" class="mb-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Prayer</h2>
          <p class="text-gray-800 dark:text-gray-200 italic">{{ lesson.content.prayerPrompt }}</p>
        </div>

        <!-- Complete Button -->
        <button
          @click="completeLesson"
          class="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl transition-all"
        >
          Complete This Lesson
        </button>
      </div>

      <!-- Lesson Not Found -->
      <div v-else class="text-center py-16">
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lesson Not Found</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">This lesson doesn't exist or couldn't be loaded.</p>
          <button
            @click="router.back()"
            class="btn btn-primary"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getStudyById, getLessonById } from '../data/studies'
import { useStudyProgressStore } from '../stores/studyProgress'

const route = useRoute()
const router = useRouter()
const progressStore = useStudyProgressStore()

const study = computed(() => {
  console.log('Getting study:', route.params.studyId)
  const s = getStudyById(route.params.studyId as string)
  console.log('Study result:', s)
  return s
})

const lesson = computed(() => {
  console.log('Getting lesson:', route.params.studyId, route.params.lessonId)
  const l = getLessonById(route.params.studyId as string, route.params.lessonId as string)
  console.log('Lesson result:', l)
  return l
})

const gradientClass = computed(() => {
  if (!study.value) return 'bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900'
  return study.value.category === 'supporter'
    ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'
    : 'bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900'
})

const completeLesson = () => {
  console.log('Completing lesson:', route.params.studyId, route.params.lessonId)
  progressStore.completeLesson(route.params.studyId as string, route.params.lessonId as string)
  alert('Lesson completed!')
}
</script>

