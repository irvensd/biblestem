<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Welcome Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">
        Welcome{{ authStore.user ? `, ${authStore.user.name}` : '' }}!
      </h1>
      <p class="text-gray-600">Continue your Bible study journey</p>
    </div>

    <!-- Free Studies Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Free Studies</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="study in freeStudies"
          :key="study.id"
          class="card card-interactive p-6"
          @click="startStudy(study.id)"
        >
          <div class="mb-4">
            <div
              class="w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center text-2xl font-bold text-white mb-4"
              :class="study.color"
            >
              {{ study.title.charAt(0) }}
            </div>
            <h3 class="text-xl font-bold mb-2">{{ study.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ study.description }}
            </p>
            <div class="flex items-center gap-4 text-xs text-gray-500">
              <span>{{ study.lessons.length }} lessons</span>
              <span>{{ study.totalDuration }} min</span>
              <span class="capitalize">{{ study.difficulty }}</span>
            </div>
          </div>
          <button class="btn btn-primary w-full">Start Study</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { freeStudies, getAllStudies, type Study } from '../data/studies'

const router = useRouter()
const authStore = useAuthStore()

const startStudy = (studyId: string) => {
  router.push(`/study/${studyId}`)
}
</script>
