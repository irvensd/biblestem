<template>
  <div class="container-base py-8">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
        Daily Devotions
      </h1>
      <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        Start each day with God's Word. Discover fresh insights and grow deeper in your faith
        through daily verses and reflections.
      </p>
    </div>

    <!-- Today's Devotion Card -->
    <div class="max-w-4xl mx-auto">
      <div
        class="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 md:p-8 mb-8 border border-primary-100 dark:border-primary-800"
      >
        <!-- Date and Title -->
        <div class="text-center mb-6">
          <div class="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
            {{ formatDate(todaysDevotion.date) }}
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            {{ todaysDevotion.title }}
          </h2>
        </div>

        <!-- Scripture Verse -->
        <div
          class="bg-white dark:bg-neutral-800 rounded-xl p-6 mb-6 shadow-sm border border-neutral-200 dark:border-neutral-700"
        >
          <div class="text-center">
            <div class="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
              {{ todaysDevotion.verse.reference }}
            </div>
            <blockquote
              class="text-lg md:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200 italic"
            >
              "{{ todaysDevotion.verse.text }}"
            </blockquote>
          </div>
        </div>

        <!-- Reflection -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            Today's Reflection
          </h3>
          <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
            {{ todaysDevotion.reflection }}
          </p>
        </div>

        <!-- Key Thought -->
        <div
          class="bg-accent-50 dark:bg-accent-900/20 rounded-xl p-4 mb-6 border-l-4 border-accent-500"
        >
          <div class="flex items-start space-x-3">
            <div
              class="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
            >
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"
                />
              </svg>
            </div>
            <div>
              <div class="text-sm font-medium text-accent-700 dark:text-accent-300 mb-1">
                Key Thought
              </div>
              <div class="text-accent-800 dark:text-accent-200 font-medium">
                {{ todaysDevotion.keyThought }}
              </div>
            </div>
          </div>
        </div>

        <!-- Prayer -->
        <div class="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6">
          <h3
            class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center"
          >
            <svg
              class="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Prayer
          </h3>
          <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
            {{ todaysDevotion.prayer }}
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          @click="markAsRead"
          :disabled="isMarkedAsRead"
          class="btn-primary flex items-center justify-center"
          :class="{ 'opacity-50 cursor-not-allowed': isMarkedAsRead }"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            v-if="!isMarkedAsRead"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20" v-else>
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          {{ isMarkedAsRead ? 'Completed Today' : 'Mark as Read' }}
        </button>

        <button @click="shareDevotionn" class="btn-secondary flex items-center justify-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
            />
          </svg>
          Share Devotion
        </button>
      </div>

      <!-- Previous Devotions -->
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-6"
      >
        <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Previous Devotions
        </h3>
        <div class="grid gap-4 md:gap-6">
          <div
            v-for="devotion in previousDevotions"
            :key="devotion.id"
            class="border-l-4 border-neutral-200 dark:border-neutral-600 pl-4 py-3 hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-200"
          >
            <div class="flex justify-between items-start mb-2">
              <h4 class="font-semibold text-neutral-900 dark:text-neutral-100">
                {{ devotion.title }}
              </h4>
              <div class="text-sm text-neutral-500 dark:text-neutral-400">
                {{ formatDate(devotion.date) }}
              </div>
            </div>
            <div class="text-sm text-primary-600 dark:text-primary-400 mb-2">
              {{ devotion.verse.reference }}
            </div>
            <p class="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              {{ devotion.keyThought }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getTodaysDevotion, devotions, type DailyDevotion } from '../data/devotions'

const todaysDevotion = ref<DailyDevotion>(getTodaysDevotion())
const isMarkedAsRead = ref(false)

const previousDevotions = computed(() => {
  // Show last 5 devotions excluding today's
  return devotions.filter((d) => d.id !== todaysDevotion.value.id).slice(0, 5)
})

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const markAsRead = () => {
  isMarkedAsRead.value = true
  // Store in localStorage for persistence
  const readDevotions = JSON.parse(localStorage.getItem('readDevotions') || '[]')
  if (!readDevotions.includes(todaysDevotion.value.id)) {
    readDevotions.push(todaysDevotion.value.id)
    localStorage.setItem('readDevotions', JSON.stringify(readDevotions))
  }
}

const shareDevotionn = () => {
  if (navigator.share) {
    navigator.share({
      title: `${todaysDevotion.value.title} - BibleStem Daily Devotion`,
      text: `"${todaysDevotion.value.verse.text}" - ${todaysDevotion.value.verse.reference}\n\n${todaysDevotion.value.keyThought}`,
      url: window.location.href,
    })
  } else {
    // Fallback: copy to clipboard
    const text = `${todaysDevotion.value.title}\n\n"${todaysDevotion.value.verse.text}"\n- ${todaysDevotion.value.verse.reference}\n\n${todaysDevotion.value.keyThought}\n\nRead more at ${window.location.href}`
    navigator.clipboard.writeText(text)
    alert('Devotion copied to clipboard!')
  }
}

onMounted(() => {
  // Check if today's devotion is already marked as read
  const readDevotions = JSON.parse(localStorage.getItem('readDevotions') || '[]')
  isMarkedAsRead.value = readDevotions.includes(todaysDevotion.value.id)
})
</script>
