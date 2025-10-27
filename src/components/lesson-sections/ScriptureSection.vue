<template>
  <div class="scripture-section space-y-6">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        Scripture Study
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        {{ lesson.scripture }}
      </p>
    </div>

    <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
      <div class="prose prose-lg max-w-none dark:prose-invert">
        <h3 class="text-xl font-bold mb-4">Scripture Reading</h3>
        <div class="text-lg leading-relaxed">
          <p v-for="(verse, index) in scriptureVerses" :key="index" class="mb-4">
            <span class="font-bold text-primary-600 dark:text-primary-400">{{ verse.verse }}</span>
            {{ verse.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <button
        @click="$emit('previous')"
        class="btn-secondary"
      >
        Previous
      </button>
      <button
        @click="$emit('next')"
        class="btn-primary"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Lesson, Study } from '../../data/studies'

interface Props {
  lesson: Lesson
  study: Study
  isPremium: boolean
  isCompleted?: boolean
}

defineProps<Props>()

defineEmits<{
  complete: []
  next: []
  previous: []
}>()

// Mock scripture verses - in real app, this would come from an API
const scriptureVerses = ref([
  { verse: "1", text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
  { verse: "2", text: "He was with God in the beginning." },
  { verse: "3", text: "Through him all things were made; without him nothing was made that has been made." }
])
</script>