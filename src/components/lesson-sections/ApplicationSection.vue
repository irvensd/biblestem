<template>
  <div class="application-section space-y-6">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        Life Application
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        How can you apply this scripture to your daily life?
      </p>
    </div>

    <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
      <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">Practical Application</h3>
      
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Key Principles</h4>
          <ul class="space-y-2">
            <li v-for="principle in keyPrinciples" :key="principle" class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-neutral-600 dark:text-neutral-400">{{ principle }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Action Steps</h4>
          <div class="space-y-3">
            <div v-for="(step, index) in actionSteps" :key="index" class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-sm font-bold text-primary-600">{{ index + 1 }}</span>
              </div>
              <span class="text-neutral-600 dark:text-neutral-400">{{ step }}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Personal Reflection</h4>
          <textarea
            v-model="personalReflection"
            class="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            rows="4"
            placeholder="How will you apply these principles in your life this week?"
          ></textarea>
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
        @click="handleComplete"
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

const emit = defineEmits<{
  complete: []
  next: []
  previous: []
}>()

const personalReflection = ref('')

const keyPrinciples = ref([
  "God's love is unconditional and everlasting",
  "We are called to love others as ourselves",
  "Faith requires action and obedience",
  "Prayer is essential for spiritual growth"
])

const actionSteps = ref([
  "Spend 10 minutes in prayer each morning",
  "Show kindness to someone who needs it today",
  "Read one chapter of scripture daily",
  "Share your faith with one person this week"
])

const handleComplete = () => {
  // Save personal reflection
  console.log('Personal reflection:', personalReflection.value)
  emit('next')
}
</script>