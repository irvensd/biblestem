<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Dashboard Header -->
    <section class="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
      <div class="container-base py-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              Welcome back, {{ authStore.user?.name }}!
            </h1>
            <p class="text-neutral-600 dark:text-neutral-400 mt-2">
              Continue your Bible study journey where you left off
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <div :class="authStore.isPremium ? 'bg-accent-500' : 'bg-neutral-500'" class="w-3 h-3 rounded-full"></div>
              <span class="text-sm font-medium" :class="authStore.isPremium ? 'text-accent-600' : 'text-neutral-600'">
                {{ authStore.isPremium ? 'Premium' : 'Free' }} Plan
              </span>
            </div>
            <button v-if="!authStore.isPremium" class="btn-accent text-sm py-2 px-4">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Content -->
    <div class="container-base py-8">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Progress Overview -->
          <section class="card p-6">
            <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Your Progress</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span class="text-2xl font-bold text-white">{{ authStore.user?.studiesCompleted || 0 }}</span>
                </div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Studies Completed</div>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span class="text-2xl font-bold text-white">{{ calculateStreak() }}</span>
                </div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Day Streak</div>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span class="text-2xl font-bold text-white">{{ calculateBadges() }}</span>
                </div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Badges Earned</div>
              </div>
            </div>
          </section>

          <!-- Continue Studies -->
          <section class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">Continue Learning</h2>
              <router-link to="/study-series" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                View All Series →
              </router-link>
            </div>

            <div class="space-y-4">
              <!-- Current Study -->
              <div
                v-if="currentStudy"
                class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-xl border border-primary-200 dark:border-primary-800"
              >
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="font-bold text-neutral-900 dark:text-neutral-100 mb-1">{{ currentStudy.title }}</h3>
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">
                      {{ currentStudy.nextLesson ? `Next: ${currentStudy.nextLesson.title}` : 'Study Complete!' }}
                    </p>
                  </div>
                  <span
                    class="text-white text-xs px-2 py-1 rounded-full"
                    :class="currentStudy.progress === 100 ? 'bg-green-500' : 'bg-primary-500'"
                  >
                    {{ currentStudy.progress === 100 ? 'Completed' : 'In Progress' }}
                  </span>
                </div>
                <div class="mb-4">
                  <div class="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    <span>Progress</span>
                    <span>{{ Math.round(currentStudy.progress) }}%</span>
                  </div>
                  <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div
                      class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      :style="`width: ${currentStudy.progress}%`"
                    ></div>
                  </div>
                </div>
                <router-link
                  :to="`/study/${currentStudy.id}`"
                  class="btn-primary w-full md:w-auto inline-block text-center"
                >
                  {{ currentStudy.progress === 100 ? 'Review Study' : 'Continue Study' }}
                </router-link>
              </div>

              <!-- Recommended Studies -->
              <div class="grid md:grid-cols-2 gap-4">
                <div
                  v-for="study in recommendedStudies"
                  :key="study.id"
                  class="card p-4 hover:scale-105 transition-transform duration-200 cursor-pointer"
                  @click="goToStudy(study.id)"
                >
                  <div
                    class="aspect-video rounded-lg mb-3 flex items-center justify-center bg-gradient-to-br"
                    :class="study.color"
                  >
                    <span class="text-white font-medium text-sm">{{ study.category === 'premium' ? 'Premium' : 'Free' }}</span>
                  </div>
                  <h4 class="font-bold text-neutral-900 dark:text-neutral-100 mb-1">{{ study.title }}</h4>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{{ study.lessons.length }} lessons • {{ formatDuration(study.totalDuration) }}</p>
                  <div class="flex items-center justify-between">
                    <span
                      class="text-xs px-2 py-1 rounded"
                      :class="study.category === 'free'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'"
                    >
                      {{ study.category === 'free' ? 'Free' : authStore.isPremium ? 'Premium' : 'Requires Premium' }}
                    </span>
                    <button
                      class="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      @click.stop="goToStudy(study.id)"
                    >
                      Start →
                    </button>
                  </div>
                </div>
              </div>

              <!-- No Current Study Message -->
              <div v-if="!currentStudy" class="text-center py-8">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">Start Your Bible Study Journey</h3>
                <p class="text-neutral-600 dark:text-neutral-400 mb-4">Choose a study below to begin learning and growing in your faith.</p>
                <router-link to="/study-series" class="btn-primary">
                  Browse Study Series
                </router-link>
              </div>
            </div>
          </section>

          <!-- Completed Studies Section -->
          <section v-if="completedStudies.length > 0" class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">Completed Studies</h2>
              <div class="flex items-center space-x-2 text-green-600">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span class="font-medium">{{ completedStudies.length }} Completed</span>
              </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="study in completedStudies.slice(0, 6)"
                :key="study.id"
                class="card p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:scale-105 transition-transform duration-200 cursor-pointer"
                @click="goToStudy(study.id)"
              >
                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-green-800 dark:text-green-200 mb-1 truncate">{{ study.title }}</h4>
                    <p class="text-sm text-green-600 dark:text-green-400 mb-2">{{ study.lessons.length }} lessons completed</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-green-500">{{ formatDuration(study.totalDuration) }}</span>
                      <button class="text-green-600 hover:text-green-700 text-xs font-medium">
                        Review →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="completedStudies.length > 6" class="mt-4 text-center">
              <button class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                View All {{ completedStudies.length }} Completed Studies →
              </button>
            </div>
          </section>

          <!-- Recent Activity -->
          <section class="card p-6">
            <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Recent Activity</h2>
            <div class="space-y-4">
              <div class="flex items-center space-x-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="font-medium text-neutral-900 dark:text-neutral-100">Completed Psalm 22 Study</p>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">2 hours ago</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="font-medium text-neutral-900 dark:text-neutral-100">Earned "Daily Reader" Badge</p>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Yesterday</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="font-medium text-neutral-900 dark:text-neutral-100">Started Psalms Series</p>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">3 days ago</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Quick Stats -->
          <div class="card p-6">
            <h3 class="font-bold text-neutral-900 dark:text-neutral-100 mb-4">Quick Stats</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-neutral-600 dark:text-neutral-400">Member since</span>
                <span class="font-medium text-neutral-900 dark:text-neutral-100">{{ formatDate(authStore.user?.joinDate) }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-600 dark:text-neutral-400">Total studies</span>
                <span class="font-medium text-neutral-900 dark:text-neutral-100">{{ authStore.user?.studiesCompleted || 0 }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-600 dark:text-neutral-400">Plan type</span>
                <span class="font-medium" :class="authStore.isPremium ? 'text-accent-600' : 'text-neutral-600'">
                  {{ authStore.isPremium ? 'Premium' : 'Free' }}
                </span>
              </div>
            </div>
          </div>

          <!-- Upcoming Features -->
          <div class="card p-6">
            <h3 class="font-bold text-neutral-900 dark:text-neutral-100 mb-4">Coming Soon</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span class="text-sm text-neutral-600 dark:text-neutral-400">Study Groups</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span class="text-sm text-neutral-600 dark:text-neutral-400">Mobile App</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span class="text-sm text-neutral-600 dark:text-neutral-400">Audio Studies</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-3">
            <button class="w-full btn-primary">
              Start New Study
            </button>
            <button class="w-full btn-secondary">
              View Progress Report
            </button>
            <button v-if="!authStore.isPremium" class="w-full btn-accent">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useStudyProgressStore } from '../stores/studyProgress'
import { getFreeStudies, getPremiumStudies, type Study } from '../data/studies'

const router = useRouter()
const authStore = useAuthStore()
const progressStore = useStudyProgressStore()

const allStudies = computed(() => [...getFreeStudies(), ...getPremiumStudies()])

const currentStudy = computed(() => {
  // Find the study with highest progress that's not 100%
  let bestStudy = null
  let highestProgress = 0

  const allProgress = progressStore.getAllStudyProgress()

  Object.entries(allProgress).forEach(([studyId, progress]) => {
    const study = allStudies.value.find(s => s.id === studyId)
    if (!study) return

    const progressPercent = progressStore.getStudyCompletionPercentage(studyId, study.lessons.length)

    if (progressPercent > highestProgress && progressPercent < 100) {
      highestProgress = progressPercent
      const nextLessonIndex = progress.completedLessons.length
      bestStudy = {
        ...study,
        progress: progressPercent,
        nextLesson: nextLessonIndex < study.lessons.length ? study.lessons[nextLessonIndex] : null
      }
    }
  })

  return bestStudy
})

const recommendedStudies = computed(() => {
  const userPlan = authStore.user?.plan || 'free'
  const allProgress = progressStore.getAllStudyProgress()
  const startedStudies = Object.keys(allProgress)

  // Get studies not yet started, prioritizing free studies for free users
  const available = allStudies.value
    .filter(study => !startedStudies.includes(study.id))
    .filter(study => userPlan === 'premium' || study.category === 'free')
    .slice(0, 4)

  return available
})

const calculateStreak = () => {
  // Mock calculation - in real app this would come from API
  return Math.floor(Math.random() * 30) + 1
}

const calculateBadges = () => {
  // Mock calculation based on studies completed
  const studies = authStore.user?.studiesCompleted || 0
  return Math.floor(studies / 3)
}

const formatDate = (dateString?: string) => {
  if (!dateString) return 'Unknown'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}

const formatDuration = (minutes: number) => {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}

const goToStudy = (studyId: string) => {
  router.push(`/study/${studyId}`)
}

onMounted(() => {
  // Initialize stores
  authStore.initializeAuth()
  progressStore.loadFromStorage()
})
</script>
