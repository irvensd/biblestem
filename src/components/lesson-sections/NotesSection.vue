<template>
  <div class="notes-section space-y-6">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        Study Notes
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        Record your thoughts and insights from this study
      </p>
    </div>

    <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
      <div class="space-y-6">
        <!-- Key Insights -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Key Insights</h3>
          <textarea
            v-model="keyInsights"
            class="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            rows="4"
            placeholder="What are the main insights you gained from this study?"
          ></textarea>
        </div>

        <!-- Questions -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Questions</h3>
          <textarea
            v-model="questions"
            class="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            rows="3"
            placeholder="What questions do you have about this passage?"
          ></textarea>
        </div>

        <!-- Application -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Personal Application</h3>
          <textarea
            v-model="application"
            class="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            rows="4"
            placeholder="How will you apply what you've learned in your daily life?"
          ></textarea>
        </div>

        <!-- Prayer Requests -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Prayer Requests</h3>
          <textarea
            v-model="prayerRequests"
            class="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            rows="3"
            placeholder="What would you like to pray about based on this study?"
          ></textarea>
        </div>

        <!-- Additional Notes -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Additional Notes</h3>
          <textarea
            v-model="additionalNotes"
            class="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            rows="4"
            placeholder="Any other thoughts or observations..."
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
        Complete Study
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

const props = defineProps<Props>()

const emit = defineEmits<{
  complete: []
  next: []
  previous: []
}>()

const keyInsights = ref('')
const questions = ref('')
const application = ref('')
const prayerRequests = ref('')
const additionalNotes = ref('')

const handleComplete = () => {
  // Save all notes
  const notes = {
    keyInsights: keyInsights.value,
    questions: questions.value,
    application: application.value,
    prayerRequests: prayerRequests.value,
    additionalNotes: additionalNotes.value,
    timestamp: new Date().toISOString()
  }
  
  console.log('Study notes:', notes)
  
  // Save to localStorage
  const studyId = props.study?.id || 'unknown'
  const lessonId = props.lesson?.id || 'unknown'
  localStorage.setItem(`study-notes-${studyId}-${lessonId}`, JSON.stringify(notes))
  
  emit('complete')
}
</script>