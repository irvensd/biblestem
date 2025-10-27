<template>
  <div class="interactive-section space-y-6">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        Interactive Learning
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        Engage with the scripture through interactive elements
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Quiz Card -->
      <div class="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
        <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Quick Quiz</h3>
        <div class="space-y-4">
          <div v-for="(question, index) in quizQuestions" :key="index">
            <p class="font-medium text-neutral-700 dark:text-neutral-300 mb-2">{{ question.question }}</p>
            <div class="space-y-2">
              <label v-for="(option, optIndex) in question.options" :key="optIndex" class="flex items-center space-x-2">
                <input 
                  type="radio" 
                  :name="`question-${index}`"
                  :value="optIndex"
                  v-model="answers[index]"
                  class="text-primary-600"
                />
                <span class="text-neutral-600 dark:text-neutral-400">{{ option }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Reflection Card -->
      <div class="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
        <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Reflection</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              What stood out to you in this passage?
            </label>
            <textarea
              v-model="reflection"
              class="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              rows="4"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
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

const answers = ref<number[]>([])
const reflection = ref('')

const quizQuestions = ref([
  {
    question: "What is the main theme of this passage?",
    options: ["Love", "Faith", "Hope", "Peace"]
  },
  {
    question: "Who is the author addressing?",
    options: ["Believers", "Non-believers", "Everyone", "Specific group"]
  }
])

const handleComplete = () => {
  // Save answers and reflection
  console.log('Quiz answers:', answers.value)
  console.log('Reflection:', reflection.value)
  emit('next')
}
</script>