<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="study" class="max-w-4xl mx-auto">
      <!-- Study Header -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <button @click="router.back()" class="btn btn-secondary">
            ← Back
          </button>
        </div>
        <h1 class="text-3xl font-bold mb-4">{{ study.title }}</h1>
        <p class="text-lg text-gray-600 mb-6">{{ study.description }}</p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <span>{{ study.lessons.length }} lessons</span>
          <span>{{ study.totalDuration }} minutes</span>
          <span class="capitalize">{{ study.difficulty }}</span>
          <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full">
            {{ study.category }}
          </span>
        </div>
      </div>

      <!-- Lessons List -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold mb-6">Lessons</h2>
        <div
          v-for="(lesson, index) in study.lessons"
          :key="lesson.id"
          class="card p-6 cursor-pointer hover:shadow-lg transition-shadow"
          @click="viewLesson(lesson.id)"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
            >
              {{ index + 1 }}
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-xl font-bold">{{ lesson.title }}</h3>
                <span
                  v-if="lesson.completed"
                  class="text-green-600 font-semibold text-sm"
                >
                  ✓ Completed
                </span>
              </div>
              <p class="text-gray-600 mb-3">{{ lesson.description }}</p>
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span>{{ lesson.scripture }}</span>
                <span>{{ lesson.duration }} min</span>
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
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getStudyById } from '../data/studies'

const route = useRoute()
const router = useRouter()

const study = computed(() => getStudyById(route.params.id as string))

const viewLesson = (lessonId: string) => {
  router.push(`/study/${route.params.id}/lesson/${lessonId}`)
}
</script>

