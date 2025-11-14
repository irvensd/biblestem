<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
    <div class="container-base py-6 sm:py-8 lg:py-12">
      <!-- Page Header -->
      <div class="mb-8 lg:mb-10">
        <div class="flex items-center gap-3 mb-4">
          <router-link
            :to="authStore.isAuthenticated ? '/dashboard' : '/'"
            class="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </router-link>
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
              Daily Devotions
            </h1>
            <p class="text-neutral-600 dark:text-gray-300">{{ authStore.isAuthenticated ? getGreeting() + ' • Your daily spiritual growth' : 'Fresh devotions delivered daily' }}</p>
          </div>
        </div>
      </div>

      <!-- Non-Authenticated User Message -->
      <div v-if="!authStore.isAuthenticated" class="max-w-2xl mx-auto">
        <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 sm:p-12 text-center shadow-xl border border-neutral-200 dark:border-neutral-700">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          
          <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Fresh Devotions Daily
          </h2>
          
          <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
            We deliver fresh, inspiring devotions every day after you sign up. Start your spiritual journey with daily verses, reflections, and prayer prompts designed to deepen your faith.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/sign-up"
              class="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign Up Free
            </router-link>
            <router-link
              to="/sign-in"
              class="px-8 py-4 bg-white dark:bg-neutral-700 border-2 border-neutral-300 dark:border-neutral-600 hover:border-primary-500 dark:hover:border-primary-500 text-neutral-900 dark:text-white font-semibold rounded-xl transition-all duration-300"
            >
              Sign In
            </router-link>
          </div>
          
          <div class="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">365</div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Days of Devotions</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">Daily</div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Fresh Content</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">Free</div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Forever</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Authenticated User Content -->
      <div v-else>

      <!-- Today's Devotion (Large Hero Card) -->
      <div
        class="mb-8 lg:mb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-primary-600 dark:via-blue-600 dark:to-indigo-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-neutral-900 dark:text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-blue-200 dark:border-transparent"
      >
        <div class="relative z-10">
          <div class="flex items-start justify-between mb-6">
            <div>
              <p class="text-blue-700 dark:text-blue-100 text-sm font-medium mb-2">{{ todayDate }}</p>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Verse of the Day
              </h2>
              <p class="text-blue-700 dark:text-blue-100 text-lg font-semibold">{{ devotion.scripture }}</p>
            </div>
            <div class="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-xl sm:text-2xl font-medium leading-relaxed">
              "{{ devotion.text }}"
            </p>

            <!-- Devotion Reflection -->
            <div class="mt-6 p-6 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-blue-200 dark:border-white/20">
              <h3 class="text-lg font-semibold mb-3">Reflection</h3>
              <p class="text-blue-900 dark:text-blue-100 leading-relaxed">{{ devotion.reflection }}</p>
            </div>

            <!-- Prayer Prompt -->
            <div class="p-6 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-blue-200 dark:border-white/20">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Prayer Prompt
              </h3>
              <p class="text-blue-900 dark:text-blue-100 leading-relaxed">{{ devotion.prayer }}</p>
            </div>

            <!-- Action Items -->
            <div class="flex flex-wrap gap-3 mt-6">
              <button
                data-save-devotion
                @click="saveDevotion"
                class="px-4 py-2 bg-white dark:bg-white/20 hover:bg-blue-50 dark:hover:bg-white/30 backdrop-blur-sm rounded-lg font-medium transition-all duration-200 flex items-center gap-2 border border-blue-200 dark:border-transparent text-blue-700 dark:text-white"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                Save
              </button>
              <button
                data-share-devotion
                @click="shareDevotion"
                class="px-4 py-2 bg-white dark:bg-white/20 hover:bg-blue-50 dark:hover:bg-white/30 backdrop-blur-sm rounded-lg font-medium transition-all duration-200 flex items-center gap-2 border border-blue-200 dark:border-transparent text-blue-700 dark:text-white"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.885 12.938 9 12.482 9 12c0-.482-.115-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>

        <!-- Decorative elements -->
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -left-10 -bottom-10 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>
      </div>

      <!-- Recent Devotions -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <div class="w-1 h-8 bg-gradient-to-b from-primary-500 to-blue-600 rounded-full"></div>
            Recent Devotions
          </h2>
          <button class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            View All →
          </button>
        </div>

        <div v-if="isLoadingRecentDevotions" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <p class="mt-4 text-neutral-600 dark:text-neutral-400">Loading recent devotions...</p>
        </div>
        
        <div v-else-if="recentDevotions.length === 0" class="text-center py-8">
          <p class="text-neutral-600 dark:text-neutral-400">No recent devotions available.</p>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="(devotion, index) in recentDevotions"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-neutral-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            @click="viewDevotion(devotion.date)"
          >
            <div class="mb-4">
              <p class="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">
                {{ devotion.dateLabel }}
              </p>
              <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                {{ devotion.title }}
              </h3>
            </div>

            <p class="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-4">
              {{ devotion.excerpt }}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <p class="text-xs font-medium text-neutral-500">{{ devotion.scripture }}</p>
              <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Reading Plan Suggestion -->
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-6 sm:p-8 border border-emerald-200 dark:border-emerald-800">
        <div class="flex items-start gap-4">
          <div
            class="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0"
          >
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Start a Reading Plan
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400 mb-4">
              Develop a consistent daily Bible reading habit with our guided reading plans. Track your progress and stay motivated.
            </p>
            <router-link
              to="/study-series"
              class="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Explore Reading Plans</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useNotesStore } from '../stores/notes'
import { getTodaysDevotion, type DailyDevotion } from '../services/dailyDevotionService'
import { getRecentDevotions } from '../services/devotionaliumApiService'
import { logger } from '../utils/logger'

const router = useRouter()
const authStore = useAuthStore()
const notesStore = useNotesStore()

const devotion = ref<DailyDevotion>({
  scripture: 'Jeremiah 29:11',
  text: 'For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future.',
  reflection:
    'This verse reminds us that God has a purpose for each of our lives. Even in times of uncertainty, we can trust that He is working for our good. His plans are always for our welfare, to give us hope and a future filled with His blessings.',
  prayer:
    'Father, thank you for the plans you have for my life. Help me to trust in your timing and your ways. Give me the faith to believe that you are working everything together for my good, even when I cannot see it. In Jesus name, amen.',
  date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
})

const todayDate = ref(
  new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
)

const recentDevotions = ref<Array<{
  date: string
  dateLabel: string
  title: string
  scripture: string
  excerpt: string
}>>([])
const isLoadingRecentDevotions = ref(false)

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

const saveDevotion = async () => {
  if (!authStore.isAuthenticated) {
    router.push('/sign-in')
    return
  }

  try {
    // Save as a note/bookmark
    const devotionNote = `Daily Devotion - ${devotion.value.date}\n\nScripture: ${devotion.value.scripture}\n\n"${devotion.value.text}"\n\nReflection:\n${devotion.value.reflection}\n\nPrayer:\n${devotion.value.prayer}`
    
    await notesStore.createNote({
      studyId: 'daily-devotions',
      lessonId: `devotion-${new Date().toISOString().split('T')[0]}`,
      content: devotionNote,
      scripture: devotion.value.scripture,
      tags: ['devotion', 'daily', 'prayer'],
      isPrivate: false,
      type: 'reflection',
    })
    
    // Show success feedback (could use a toast notification)
    const saveButton = document.querySelector('[data-save-devotion]') as HTMLElement
    if (saveButton) {
      const originalText = saveButton.textContent
      saveButton.textContent = 'Saved!'
      saveButton.classList.add('bg-green-500')
      setTimeout(() => {
        saveButton.textContent = originalText
        saveButton.classList.remove('bg-green-500')
      }, 2000)
    }
  } catch (error) {
    logger.error('Error saving devotion:', error)
    alert('Failed to save devotion. Please try again.')
  }
}

const shareDevotion = async () => {
  const shareText = `Daily Devotion - ${devotion.value.scripture}\n\n"${devotion.value.text}"\n\n${window.location.href}`
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Today's Devotion",
        text: shareText,
        url: window.location.href,
      })
    } catch (error) {
      // User cancelled or error occurred
      if ((error as Error).name !== 'AbortError') {
        logger.error('Error sharing devotion:', error)
      }
    }
  } else {
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(shareText)
      // Show success feedback
      const shareButton = document.querySelector('[data-share-devotion]') as HTMLElement
      if (shareButton) {
        const originalText = shareButton.textContent
        shareButton.textContent = 'Copied!'
        setTimeout(() => {
          shareButton.textContent = originalText
        }, 2000)
      }
    } catch (error) {
      logger.error('Error copying to clipboard:', error)
      alert('Failed to copy devotion. Please try again.')
    }
  }
}

const viewDevotion = async (date: string) => {
  // Could navigate to a specific devotion view or show in modal
  // For now, we'll just reload the devotion for that date
  try {
    const { getDevotionForDate } = await import('../services/dailyDevotionService')
    const dateObj = new Date(date)
    const pastDevotion = await getDevotionForDate(dateObj)
    devotion.value = pastDevotion
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error) {
    logger.error('Error loading devotion for date:', error)
  }
}

const loadRecentDevotions = async () => {
  if (!authStore.isAuthenticated) return
  
  isLoadingRecentDevotions.value = true
  try {
    const recent = await getRecentDevotions(3)
    recentDevotions.value = recent
      .filter(item => item.verse !== null)
      .map(item => ({
        date: item.date,
        dateLabel: item.dateLabel,
        title: `${item.verse!.reference} - Daily Devotion`,
        scripture: item.verse!.reference,
        excerpt: `"${item.verse!.text.substring(0, 100)}${item.verse!.text.length > 100 ? '...' : ''}"`,
      }))
  } catch (error) {
    logger.error('Error loading recent devotions:', error)
    // Keep empty array on error
    recentDevotions.value = []
  } finally {
    isLoadingRecentDevotions.value = false
  }
}

onMounted(async () => {
  // Wait for auth to be ready
  if (!authStore.isInitialized) {
    await authStore.initializeAuth()
  }
  
  // Load today's devotion (now async)
  devotion.value = await getTodaysDevotion()
  
  // Load recent devotions if authenticated
  if (authStore.isAuthenticated) {
    await loadRecentDevotions()
  }
})
</script>

