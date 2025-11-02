<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
    <div class="container-base py-6 sm:py-8 lg:py-12">
      <!-- Page Header -->
      <div class="mb-8 lg:mb-10">
        <div class="flex items-center gap-3 mb-4">
          <router-link
            to="/dashboard"
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
            <p class="text-neutral-600 dark:text-gray-300">{{ getGreeting() }} • Your daily spiritual growth</p>
          </div>
        </div>
      </div>

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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="(devotion, index) in recentDevotions"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-neutral-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            @click="viewDevotion(devotion.date)"
          >
            <div class="mb-4">
              <p class="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">
                {{ devotion.date }}
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
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const devotion = ref({
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

const recentDevotions = ref([
  {
    date: 'Yesterday',
    title: 'Trusting in His Timing',
    scripture: 'Proverbs 3:5-6',
    excerpt: 'Trust in the Lord with all your heart and lean not on your own understanding. In all your ways submit to him...',
  },
  {
    date: '2 days ago',
    title: 'Finding Peace in Chaos',
    scripture: 'John 14:27',
    excerpt: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled...',
  },
  {
    date: '3 days ago',
    title: 'Strength in Weakness',
    scripture: '2 Corinthians 12:9',
    excerpt: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore...',
  },
])

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

const saveDevotion = () => {
  console.log('Devotion saved')
  // TODO: Implement save functionality
}

const shareDevotion = () => {
  if (navigator.share) {
    navigator.share({
      title: "Today's Devotion",
      text: devotion.value.text,
      url: window.location.href,
    })
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(devotion.value.text)
    alert('Devotion copied to clipboard!')
  }
}

const viewDevotion = (date: string) => {
  console.log('Viewing devotion from:', date)
  // TODO: Navigate to specific devotion view
}

onMounted(async () => {
  // Wait for auth to be ready
  if (!authStore.isInitialized) {
    await authStore.initializeAuth()
  }
})
</script>

