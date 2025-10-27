<template>
  <div class="prayer-section space-y-6">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        Prayer & Reflection
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        Take time to pray and reflect on what you've learned
      </p>
    </div>

    <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
      <div class="space-y-6">
        <!-- Suggested Prayer -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Suggested Prayer</h3>
          <div class="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6">
            <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              "Heavenly Father, thank you for your word and the truth it reveals. Help me to understand and apply these teachings in my daily life. Give me wisdom to see how this scripture speaks to my current situation. May your love flow through me to others, and may I grow closer to you through this study. In Jesus' name, Amen."
            </p>
          </div>
        </div>

        <!-- Personal Prayer -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Your Personal Prayer</h3>
          <textarea
            v-model="personalPrayer"
            class="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            rows="6"
            placeholder="Write your own prayer based on what you've learned..."
          ></textarea>
        </div>

        <!-- Prayer Points -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Prayer Points</h3>
          <div class="space-y-3">
            <div v-for="(point, index) in prayerPoints" :key="index" class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="text-neutral-600 dark:text-neutral-400">{{ point }}</span>
            </div>
          </div>
        </div>

        <!-- Gratitude -->
        <div>
          <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Gratitude</h3>
          <textarea
            v-model="gratitude"
            class="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            rows="3"
            placeholder="What are you grateful for today?"
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

const personalPrayer = ref('')
const gratitude = ref('')

const prayerPoints = ref([
  "Pray for understanding of God's word",
  "Ask for strength to apply these teachings",
  "Pray for others who need God's love",
  "Thank God for His faithfulness",
  "Ask for guidance in your daily decisions"
])

const handleComplete = () => {
  // Save prayer and gratitude
  console.log('Personal prayer:', personalPrayer.value)
  console.log('Gratitude:', gratitude.value)
  emit('next')
}
</script>