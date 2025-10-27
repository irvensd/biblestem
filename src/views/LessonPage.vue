<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="lesson" class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <button @click="router.back()" class="btn btn-secondary mb-6">
          ← Back to Study
        </button>
        <h1 class="text-3xl font-bold mb-4">{{ lesson.title }}</h1>
        <p class="text-lg text-gray-600 mb-2">{{ lesson.description }}</p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <span>{{ lesson.scripture }}</span>
          <span>{{ lesson.duration }} minutes</span>
        </div>
      </div>

      <!-- Opening Thought -->
      <div v-if="lesson.openingThought" class="card p-6 mb-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
        <h3 class="text-lg font-bold mb-3">Opening Thought</h3>
        <p class="text-gray-700 dark:text-gray-300 italic">{{ lesson.openingThought }}</p>
      </div>

      <!-- Scripture -->
      <div class="card p-6 mb-8">
        <h3 class="text-xl font-bold mb-4">Scripture</h3>
        <p class="text-lg leading-relaxed text-center italic">{{ lesson.content.scriptureText }}</p>
        <p class="text-sm text-gray-500 mt-4 text-center">{{ lesson.scripture }}</p>
      </div>

      <!-- Commentary -->
      <div class="card p-6 mb-8">
        <h3 class="text-xl font-bold mb-4">Commentary</h3>
        <div class="space-y-4">
          <p
            v-for="(point, index) in lesson.content.commentary"
            :key="index"
            class="text-gray-700 dark:text-gray-300"
          >
            {{ point }}
          </p>
        </div>
      </div>

      <!-- Interactive Element -->
      <div v-if="lesson.content.interactiveElement" class="card p-6 mb-8">
        <h3 class="text-xl font-bold mb-4">Interactive Learning</h3>
        <div v-if="lesson.content.interactiveElement.type === 'quiz'">
          <div
            v-for="(question, qIndex) in lesson.content.interactiveElement.content.questions"
            :key="qIndex"
            class="mb-6"
          >
            <h4 class="font-bold mb-4">{{ question.question }}</h4>
            <div class="space-y-2">
              <label
                v-for="(option, oIndex) in question.options"
                :key="oIndex"
                class="flex items-center p-3 rounded-lg border-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800"
                :class="selectedAnswer === oIndex ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-neutral-700'"
                @click="selectedAnswer = oIndex"
              >
                <input
                  type="radio"
                  :value="oIndex"
                  v-model="selectedAnswer"
                  class="mr-3"
                />
                <span>{{ option }}</span>
              </label>
            </div>
            <button
              v-if="selectedAnswer !== null && quizFeedback === null"
              @click="checkAnswer(question.correct)"
              class="btn btn-primary mt-4"
            >
              Check Answer
            </button>
            <div v-if="quizFeedback !== null" class="mt-4 p-4 rounded-lg" :class="quizFeedback ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'">
              {{ quizFeedback ? 'Correct!' : 'Incorrect. Try again.' }}
            </div>
          </div>
        </div>
        <div v-else-if="lesson.content.interactiveElement.type === 'reflection'">
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            {{ lesson.content.interactiveElement.content.question }}
          </p>
          <textarea
            v-model="reflectionAnswer"
            placeholder="Share your thoughts..."
            class="form-input w-full h-32"
          ></textarea>
        </div>
      </div>

      <!-- Life Application -->
      <div class="card p-6 mb-8 bg-accent-50 dark:bg-accent-900/20">
        <h3 class="text-xl font-bold mb-4">Life Application</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Challenge:</strong> {{ lesson.content.lifeApplication.challenge }}
        </p>
        <p v-if="lesson.content.lifeApplication.journaling" class="text-gray-600 dark:text-gray-400 italic">
          <strong>Journal:</strong> {{ lesson.content.lifeApplication.journaling }}
        </p>
      </div>

      <!-- Prayer -->
      <div class="card p-6 mb-8 bg-primary-50 dark:bg-primary-900/20">
        <h3 class="text-xl font-bold mb-4">Prayer</h3>
        <p class="text-gray-700 dark:text-gray-300 italic">
          {{ lesson.content.prayerPrompt }}
        </p>
      </div>

      <!-- Complete Button -->
      <div class="text-center">
        <button @click="completeLesson" class="btn btn-primary btn-lg">
          Complete Lesson
        </button>
      </div>
    </div>

    <div v-else class="text-center py-16">
      <p class="text-xl text-gray-600">Lesson not found</p>
      <button @click="router.back()" class="btn btn-primary mt-4">
        Go Back
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getStudyById, getLessonById } from '../data/studies'

const route = useRoute()
const router = useRouter()

const study = computed(() => getStudyById(route.params.studyId as string))
const lesson = computed(() =>
  getLessonById(route.params.studyId as string, route.params.lessonId as string)
)

const selectedAnswer = ref<number | null>(null)
const quizFeedback = ref<boolean | null>(null)
const reflectionAnswer = ref('')

const checkAnswer = (correctAnswer: number) => {
  quizFeedback.value = selectedAnswer.value === correctAnswer
}

const completeLesson = () => {
  alert('Lesson completed! (Progress tracking coming soon)')
  // TODO: Save progress to store
}
</script>

