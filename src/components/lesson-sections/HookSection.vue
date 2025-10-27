<template>
  <div class="hook-section space-y-6">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        {{ lesson.title }}
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
        {{ lesson.description }}
      </p>
    </div>

    <div v-if="lesson.content?.scriptureText" class="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
      <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Scripture Focus</h3>
      <blockquote class="text-lg italic text-neutral-700 dark:text-neutral-300">
        "{{ lesson.content.scriptureText }}"
      </blockquote>
    </div>

    <div class="text-center">
      <button
        @click="$emit('next')"
        class="btn-primary btn-lg"
      >
        Begin Study
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>