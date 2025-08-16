<template>
  <div
    class="card p-8 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800"
  >
    <div class="mb-6">
      <!-- Trophy Animation -->
      <div class="relative inline-block">
        <div
          class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle"
        >
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>

        <!-- Confetti particles -->
        <div class="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div
          class="absolute -top-1 -right-3 w-1 h-1 bg-red-400 rounded-full animate-ping"
          style="animation-delay: 0.2s"
        ></div>
        <div
          class="absolute -bottom-1 -left-3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"
          style="animation-delay: 0.4s"
        ></div>
        <div
          class="absolute -bottom-2 -right-1 w-1 h-1 bg-purple-400 rounded-full animate-ping"
          style="animation-delay: 0.6s"
        ></div>
      </div>
    </div>

    <h2 class="text-3xl font-bold text-green-800 dark:text-green-200 mb-4">
      🎉 Study Complete! 🎉
    </h2>

    <p class="text-lg text-green-700 dark:text-green-300 mb-6">
      Congratulations! You've successfully completed <strong>{{ studyTitle }}</strong
      >. Your dedication to studying God's Word is truly inspiring.
    </p>

    <!-- Study Stats -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="text-center">
        <div class="text-2xl font-bold text-green-600 dark:text-green-400">
          {{ lessonsCompleted }}
        </div>
        <div class="text-sm text-green-600 dark:text-green-400">Lessons</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-green-600 dark:text-green-400">{{ totalTime }}</div>
        <div class="text-sm text-green-600 dark:text-green-400">Minutes</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
        <div class="text-sm text-green-600 dark:text-green-400">Complete</div>
      </div>
    </div>

    <!-- Achievement Badge -->
    <div
      class="bg-white dark:bg-neutral-800 rounded-lg p-4 mb-6 border border-green-200 dark:border-green-800"
    >
      <div class="flex items-center justify-center space-x-3">
        <div
          class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center"
        >
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="text-left">
          <div class="font-bold text-neutral-800 dark:text-neutral-200">Bible Scholar</div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">Study Completion Badge</div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-col sm:flex-row gap-3 justify-center">
      <button @click="$emit('reviewStudy')" class="btn-secondary">📖 Review Study</button>
      <StudyShare
        :study="{ id: 'study-id', title: studyTitle }"
        :progress="{ completedLessons: lessonsCompleted }"
        share-type="progress"
        button-text="📱 Share Progress"
        button-class="btn-primary"
      />
      <button @click="$emit('exploreMore')" class="btn-accent">🚀 Explore More Studies</button>
    </div>

    <!-- Encouragement Quote -->
    <div
      class="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800"
    >
      <p class="text-green-800 dark:text-green-200 italic">
        "Your word is a lamp for my feet, a light on my path."
      </p>
      <p class="text-green-600 dark:text-green-400 text-sm mt-1">— Psalm 119:105</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import StudyShare from './StudyShare.vue'

interface Props {
  studyTitle: string
  lessonsCompleted: number
  totalTime: number
}

defineProps<Props>()

defineEmits<{
  reviewStudy: []
  shareProgress: []
  exploreMore: []
}>()
</script>

<style scoped>
@keyframes bounceGentle {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.05);
  }
}

.animate-bounce-gentle {
  animation: bounceGentle 2s infinite;
}
</style>
