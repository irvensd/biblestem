<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Page Header -->
    <section class="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
      <div class="container-base py-6 sm:py-8">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              My Studies
            </h1>
            <p class="text-neutral-600 dark:text-neutral-400 mt-1 sm:mt-2 text-sm sm:text-base">
              Track your progress and continue your Bible study journey
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/study-series" class="btn-primary text-sm sm:text-base py-2 px-4">
              Browse More Studies
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Page Content -->
    <div class="container-base py-6 sm:py-8">
      <!-- Study Stats Overview -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div class="card p-4 sm:p-6">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{{ completedStudies.length }}</div>
              <div class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Completed Studies</div>
            </div>
          </div>
        </div>

        <div class="card p-4 sm:p-6">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{{ inProgressStudies.length }}</div>
              <div class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">In Progress</div>
            </div>
          </div>
        </div>

        <div class="card p-4 sm:p-6">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 8l-3 3 3 3m5-6H7"/>
              </svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{{ totalLessonsCompleted }}</div>
              <div class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Lessons Completed</div>
            </div>
          </div>
        </div>

        <div class="card p-4 sm:p-6">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-accent-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z"/>
              </svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{{ totalTimeSpent }}</div>
              <div class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Minutes Studied</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter and View Controls -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <label class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Filter:</label>
            <select v-model="currentFilter" class="px-3 py-1 border border-neutral-300 dark:border-neutral-600 rounded-lg text-sm dark:bg-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="all">All Studies</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="free">Free Studies</option>
              <option value="premium">Premium Studies</option>
            </select>
          </div>
          <div class="flex items-center space-x-2">
            <label class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Sort:</label>
            <select v-model="currentSort" class="px-3 py-1 border border-neutral-300 dark:border-neutral-600 rounded-lg text-sm dark:bg-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="recent">Recently Accessed</option>
              <option value="progress">Progress</option>
              <option value="title">Title A-Z</option>
              <option value="completion">Completion %</option>
            </select>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button
            @click="viewMode = 'grid'"
            :class="viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'"
            class="p-2 rounded-lg transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
          </button>
          <button
            @click="viewMode = 'list'"
            :class="viewMode === 'list' ? 'bg-primary-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'"
            class="p-2 rounded-lg transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Studies Display -->
      <div v-if="filteredStudies.length > 0">
        <!-- Grid View -->
        <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="study in filteredStudies"
            :key="study.id"
            class="card p-6 hover:shadow-medium transition-all duration-200 cursor-pointer group"
            @click="goToStudy(study.id)"
          >
            <!-- Study Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br"
                  :class="study.color"
                >
                  <span class="text-white font-bold text-lg">{{ study.title.charAt(0) }}</span>
                </div>
                <div>
                  <h3 class="font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {{ study.title }}
                  </h3>
                  <span
                    class="text-xs px-2 py-1 rounded-full"
                    :class="study.category === 'free'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'"
                  >
                    {{ study.category === 'free' ? 'Free' : 'Premium' }}
                  </span>
                </div>
              </div>
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center"
                :class="study.progress.completionPercent === 100 
                  ? 'bg-green-500' 
                  : study.progress.completionPercent > 0 
                    ? 'bg-primary-500' 
                    : 'bg-neutral-400'"
              >
                <svg v-if="study.progress.completionPercent === 100" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span v-else class="text-white text-xs font-bold">{{ Math.round(study.progress.completionPercent) }}%</span>
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                <span>{{ study.progress.completedLessons }} / {{ study.lessons.length }} lessons</span>
                <span>{{ Math.round(study.progress.completionPercent) }}%</span>
              </div>
              <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                  :style="`width: ${study.progress.completionPercent}%`"
                ></div>
              </div>
            </div>

            <!-- Study Info -->
            <div class="space-y-2 mb-4">
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-600 dark:text-neutral-400">Time spent</span>
                <span class="font-medium text-neutral-900 dark:text-neutral-100">{{ study.progress.timeSpent }} min</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-600 dark:text-neutral-400">Last accessed</span>
                <span class="font-medium text-neutral-900 dark:text-neutral-100">{{ formatDate(study.progress.lastAccessed) }}</span>
              </div>
            </div>

            <!-- Action Button -->
            <button
              @click.stop="goToStudy(study.id)"
              class="w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200"
              :class="study.progress.completionPercent === 100
                ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                : 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30'"
            >
              {{ study.progress.completionPercent === 100 ? 'Review Study' : 'Continue Study' }}
            </button>
          </div>
        </div>

        <!-- List View -->
        <div v-else class="space-y-4">
          <div
            v-for="study in filteredStudies"
            :key="study.id"
            class="card p-6 hover:shadow-medium transition-all duration-200 cursor-pointer"
            @click="goToStudy(study.id)"
          >
            <div class="flex items-center space-x-6">
              <!-- Study Icon -->
              <div
                class="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br flex-shrink-0"
                :class="study.color"
              >
                <span class="text-white font-bold text-xl">{{ study.title.charAt(0) }}</span>
              </div>

              <!-- Study Details -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-100 truncate">{{ study.title }}</h3>
                  <span
                    class="text-xs px-2 py-1 rounded-full flex-shrink-0 ml-3"
                    :class="study.category === 'free'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'"
                  >
                    {{ study.category === 'free' ? 'Free' : 'Premium' }}
                  </span>
                </div>
                <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2">{{ study.description }}</p>
                
                <!-- Progress Section -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
                  <div>
                    <div class="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Progress</div>
                    <div class="flex items-center space-x-2">
                      <div class="flex-1 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div
                          class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                          :style="`width: ${study.progress.completionPercent}%`"
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100 min-w-[3rem]">
                        {{ Math.round(study.progress.completionPercent) }}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <div class="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Lessons</div>
                    <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {{ study.progress.completedLessons }} / {{ study.lessons.length }}
                    </div>
                  </div>
                  <div>
                    <div class="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Time Spent</div>
                    <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {{ study.progress.timeSpent }} min
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Button -->
              <div class="flex-shrink-0">
                <button
                  @click.stop="goToStudy(study.id)"
                  class="px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                  :class="study.progress.completionPercent === 100
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                    : 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30'"
                >
                  {{ study.progress.completionPercent === 100 ? 'Review' : 'Continue' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          {{ currentFilter === 'all' ? 'No Studies Started Yet' : `No ${currentFilter.replace('-', ' ')} Studies Found` }}
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">
          {{ currentFilter === 'all' 
            ? 'Start your Bible study journey by exploring our collection of interactive studies.' 
            : 'Try adjusting your filter to see more studies.' }}
        </p>
        <router-link to="/study-series" class="btn-primary">
          Browse Study Series
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useStudyProgressStore } from '../stores/studyProgress'
import { getFreeStudies, getPremiumStudies, getStudyById, type Study } from '../data/studies'

const router = useRouter()
const authStore = useAuthStore()
const progressStore = useStudyProgressStore()

// View controls
const currentFilter = ref('all')
const currentSort = ref('recent')
const viewMode = ref<'grid' | 'list'>('grid')

const allStudies = computed(() => [...getFreeStudies(), ...getPremiumStudies()])

// Get studies with progress information
const studiesWithProgress = computed(() => {
  const allProgress = progressStore.getAllStudyProgress()
  
  return allStudies.value
    .map(study => {
      const progress = allProgress[study.id]
      if (!progress) return null
      
      const completionPercent = progressStore.getStudyCompletionPercentage(study.id, study.lessons.length)
      
      return {
        ...study,
        progress: {
          completedLessons: progress.completedLessons.length,
          totalLessons: study.lessons.length,
          completionPercent,
          timeSpent: progress.totalTimeSpent,
          lastAccessed: progress.lastAccessedAt,
          startedAt: progress.startedAt
        }
      }
    })
    .filter(Boolean) as Array<Study & { progress: any }>
})

// Filter and sort studies
const filteredStudies = computed(() => {
  let filtered = studiesWithProgress.value

  // Apply filters
  switch (currentFilter.value) {
    case 'in-progress':
      filtered = filtered.filter(s => s.progress.completionPercent > 0 && s.progress.completionPercent < 100)
      break
    case 'completed':
      filtered = filtered.filter(s => s.progress.completionPercent === 100)
      break
    case 'free':
      filtered = filtered.filter(s => s.category === 'free')
      break
    case 'premium':
      filtered = filtered.filter(s => s.category === 'premium')
      break
  }

  // Apply sorting
  switch (currentSort.value) {
    case 'recent':
      filtered = filtered.sort((a, b) => new Date(b.progress.lastAccessed).getTime() - new Date(a.progress.lastAccessed).getTime())
      break
    case 'progress':
      filtered = filtered.sort((a, b) => b.progress.completionPercent - a.progress.completionPercent)
      break
    case 'title':
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'completion':
      filtered = filtered.sort((a, b) => {
        if (a.progress.completionPercent === b.progress.completionPercent) {
          return b.progress.completedLessons - a.progress.completedLessons
        }
        return b.progress.completionPercent - a.progress.completionPercent
      })
      break
  }

  return filtered
})

// Computed stats
const completedStudies = computed(() => 
  studiesWithProgress.value.filter(s => s.progress.completionPercent === 100)
)

const inProgressStudies = computed(() => 
  studiesWithProgress.value.filter(s => s.progress.completionPercent > 0 && s.progress.completionPercent < 100)
)

const totalLessonsCompleted = computed(() => 
  studiesWithProgress.value.reduce((total, study) => total + study.progress.completedLessons, 0)
)

const totalTimeSpent = computed(() => 
  studiesWithProgress.value.reduce((total, study) => total + study.progress.timeSpent, 0)
)

// Helper functions
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return 'Today'
  if (diffDays === 2) return 'Yesterday'
  if (diffDays <= 7) return `${diffDays - 1} days ago`
  if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} weeks ago`
  
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  })
}

const goToStudy = (studyId: string) => {
  router.push(`/study/${studyId}`)
}

onMounted(() => {
  authStore.initializeAuth()
  progressStore.loadFromStorage()
})
</script>
