<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
    <!-- Loading Skeleton -->
    <div v-if="isLoading" class="container-base py-6 sm:py-8 lg:py-12">
      <DashboardSkeleton />
    </div>
    
    <!-- Actual Content -->
    <div v-else class="container-base py-6 sm:py-8 lg:py-12">
      <!-- Welcome Header -->
      <div class="mb-16">
        <div class="text-center max-w-5xl mx-auto">
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-700/50 mb-6">
            <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span class="text-sm font-semibold text-gray-300">BibleStem Dashboard</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            {{ welcomeMessage }}
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {{ getGreeting() }} • Continue your spiritual growth journey with personalized Bible studies
          </p>
          
          <div
            v-if="authStore.isPremium"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-2xl shadow-xl text-white font-semibold"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Premium Member</span>
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Hero Section -->
      <div class="mb-16">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-8 sm:p-12 text-white shadow-2xl">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          </div>
          
          <div class="relative z-10">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-white/80 text-sm font-medium uppercase tracking-wider">Daily Devotion</p>
                    <h2 class="text-3xl sm:text-4xl font-bold">Verse of the Day</h2>
                  </div>
                </div>
                
                <blockquote class="text-xl sm:text-2xl leading-relaxed mb-6 font-serif italic">
                  "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
                </blockquote>
                
                <div class="flex items-center justify-between">
                  <cite class="text-white/80 font-semibold not-italic">
                    — Jeremiah 29:11
                  </cite>
                  <button 
                    @click="navigateToDailyDevotion"
                    class="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 group"
                  >
                    <span class="font-semibold">Read More</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="lg:w-80">
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 class="text-lg font-semibold mb-4">Today's Focus</h3>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <svg class="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span class="text-sm">Complete daily study</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span class="text-sm">Spend 15 minutes reading</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span class="text-sm">Reflect and pray</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            @click="navigateToBrowseStudies"
            class="group relative overflow-hidden rounded-2xl bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-700 hover:border-purple-500"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Browse Studies
              </h3>
              <p class="text-gray-300 mb-6 leading-relaxed">
                Discover new Bible study series and deepen your understanding of Scripture with our comprehensive collection.
              </p>
              <div class="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                <span>Explore Now</span>
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <div
            @click="navigateToDailyStudy"
            class="group relative overflow-hidden rounded-2xl bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-700 hover:border-orange-500"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                Daily Study
              </h3>
              <p class="text-gray-300 mb-6 leading-relaxed">
                Start your day with a focused Bible study session designed to inspire and guide your spiritual journey.
              </p>
              <div class="flex items-center text-orange-400 font-semibold group-hover:text-orange-300 transition-colors">
                <span>Start Study</span>
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Your Progress</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="group bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-emerald-500">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">7</div>
                <div class="text-sm text-gray-400">Studies</div>
              </div>
            </div>
            <div class="text-sm font-semibold text-emerald-400">Completed</div>
          </div>

          <div class="group bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">112</div>
                <div class="text-sm text-gray-400">Minutes</div>
              </div>
            </div>
            <div class="text-sm font-semibold text-blue-400">Studied</div>
          </div>

          <div class="group bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-orange-500">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">0</div>
                <div class="text-sm text-gray-400">Active</div>
              </div>
            </div>
            <div class="text-sm font-semibold text-orange-400">In Progress</div>
          </div>

          <div class="group bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">2</div>
                <div class="text-sm text-gray-400">Days</div>
              </div>
            </div>
            <div class="text-sm font-semibold text-purple-400">Streak</div>
          </div>
        </div>
      </div>

      <!-- Recently Completed -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Recently Completed</h2>
        <div class="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-6">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-xl font-bold text-white mb-2">
                How to Study the Bible: The Preparation
              </h3>
              <p class="text-emerald-400 font-semibold mb-3">
                ✓ Completed Successfully
              </p>
              <p class="text-gray-300 leading-relaxed">
                You've completed this foundational study on Bible study preparation. Great job on building your spiritual foundation!
              </p>
            </div>
            <button class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Review Study
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useStudyProgressStore } from '../stores/studyProgress'
import { useNotesStore, type StudyNote } from '../stores/notes'
import { getAllStudies, getStudyById, type Study } from '../data/studies'
import { getSupabase } from '../lib/supabase'
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton.vue'

const router = useRouter()
const authStore = useAuthStore()
const progressStore = useStudyProgressStore()
const notesStore = useNotesStore()

// State
const isLoading = ref(true)
const studies = ref<Study[]>([])
const recentNotes = ref<StudyNote[]>([])
const todaysVerse = ref({
  text: "For I know the plans I have for you,\" declares the Lord, \"plans to prosper you and not to harm you, plans to give you hope and a future.",
  reference: "Jeremiah 29:11"
})

// Computed
const welcomeMessage = computed(() => {
  const userName = authStore.user ? authStore.user.name.split(' ')[0] : ''
  return userName ? `Welcome back, ${userName}!` : 'Welcome back!'
})

const completedStudies = computed(() => {
  return studies.value.filter(study => {
    const progress = progressStore.getStudyProgress(study.id)
    return progress.completionPercentage === 100
  })
})

const inProgressStudies = computed(() => {
  return studies.value.filter(study => {
    const progress = progressStore.getStudyProgress(study.id)
    return progress.completionPercentage > 0 && progress.completionPercentage < 100
  })
})

const totalStudyTime = computed(() => {
  return completedStudies.value.reduce((total, study) => {
    return total + (study.estimatedTime || 0)
  }, 0)
})

const studyStreak = computed(() => {
  // This would be calculated based on actual usage data
  return 2
})

// Methods
const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

const navigateToDailyDevotion = () => {
  router.push('/daily-devotions')
}

const navigateToBrowseStudies = () => {
  router.push('/studies')
}

const navigateToDailyStudy = () => {
  router.push('/daily-study')
}

const loadDashboardData = async () => {
  try {
    isLoading.value = true
    
    // Load studies
    studies.value = getAllStudies()
    
    // Load recent notes
    if (authStore.user) {
      const supabase = getSupabase()
      if (supabase) {
        const { data: notes } = await supabase
          .from('study_notes')
          .select('*')
          .eq('user_id', authStore.user.id)
          .order('created_at', { ascending: false })
          .limit(5)
        
        recentNotes.value = notes || []
      }
    }
    
  } catch (error) {
    console.error('Error loading dashboard data:', error)
  } finally {
    isLoading.value = false
  }
}

// Lifecycle
onMounted(() => {
  loadDashboardData()
})
</script>