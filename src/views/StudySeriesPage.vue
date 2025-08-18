<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-secondary-600 py-20">
      <div class="container-base text-center">
        <h1 class="text-5xl font-bold text-white mb-6">Bible Study Series</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
          Explore our comprehensive collection of interactive Bible studies designed to deepen your
          faith and understanding of Scripture.
        </p>

        <!-- Filter Tabs -->
        <div class="flex justify-center space-x-4">
          <button
            @click="activeFilter = 'all'"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-200"
            :class="
              activeFilter === 'all'
                ? 'bg-white text-primary-600 shadow-medium'
                : 'bg-primary-700 text-white hover:bg-primary-800'
            "
          >
            All Studies
          </button>
          <button
            @click="activeFilter = 'free'"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-200"
            :class="
              activeFilter === 'free'
                ? 'bg-white text-primary-600 shadow-medium'
                : 'bg-primary-700 text-white hover:bg-primary-800'
            "
          >
            Free Studies
          </button>
          <button
            @click="activeFilter = 'premium'"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-200"
            :class="
              activeFilter === 'premium'
                ? 'bg-white text-primary-600 shadow-medium'
                : 'bg-primary-700 text-white hover:bg-primary-800'
            "
          >
            Premium Studies
          </button>
        </div>
      </div>
    </section>

    <!-- Studies Content -->
    <section class="section-padding">
      <div class="container-base">
        <!-- Free Studies Section -->
        <div v-if="showFreeStudies" class="mb-16">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                Free Bible Studies
              </h2>
              <p class="text-neutral-600 dark:text-neutral-400 mt-2">
                Intro-level, universally appealing, short series that build your foundation.
              </p>
            </div>
            <div class="flex items-center space-x-2 text-green-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-medium">Always Free</span>
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div
              v-for="study in freeStudies"
              :key="study.id"
              class="card hover:scale-105 transition-all duration-300 group cursor-pointer"
              @click="goToStudy(study.id)"
            >
              <div class="p-6">
                <!-- Study Icon -->
                <div
                  class="aspect-video rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br"
                  :class="study.color"
                >
                  <StudyIcon :icon-type="study.image" :fallback-letter="study.title.charAt(0)" />
                </div>

                <!-- Study Info -->
                <div class="mb-4">
                  <h3
                    class="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 transition-colors"
                  >
                    {{ study.title }}
                  </h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
                    {{ study.description }}
                  </p>

                  <!-- Study Meta -->
                  <div class="flex items-center justify-between text-xs text-neutral-500 mb-3">
                    <span>{{ study.lessons.length }} lessons</span>
                    <span>{{ study.totalDuration }} min</span>
                  </div>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span
                      v-for="tag in study.tags.slice(0, 3)"
                      :key="tag"
                      class="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded-full text-xs"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Study Actions -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span
                      class="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      Free
                    </span>
                    <span class="text-xs text-neutral-500 capitalize">{{ study.difficulty }}</span>
                  </div>
                  <button
                    class="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                    @click.stop="goToStudy(study.id)"
                  >
                    <span>{{ authStore.isAuthenticated ? 'Start' : 'Sign In to Start' }}</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Premium Studies Section -->
        <div v-if="showPremiumStudies">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                Premium Bible Studies
              </h2>
              <p class="text-neutral-600 dark:text-neutral-400 mt-2">
                In-depth studies with advanced interactivity, video content, and comprehensive
                features.
              </p>
            </div>
            <div class="flex items-center space-x-2 text-accent-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="font-medium">Premium Content</span>
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="study in premiumStudies"
              :key="study.id"
              class="card hover:scale-105 transition-all duration-300 group cursor-pointer relative"
              :class="{ 'opacity-75': !authStore.isPremium }"
              @click="handlePremiumStudy(study.id)"
            >
              <!-- Premium Lock Overlay -->
              <div
                v-if="!authStore.isPremium"
                class="absolute inset-0 bg-neutral-900/20 dark:bg-neutral-100/10 rounded-xl flex items-center justify-center z-10"
              >
                <div class="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-strong text-center">
                  <svg
                    class="w-8 h-8 text-accent-500 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Premium Required
                  </p>
                  <button class="btn-accent text-xs py-1 px-3 mt-2" @click.stop="upgradeToPremium">
                    Upgrade
                  </button>
                </div>
              </div>

              <div class="p-6">
                <!-- Study Icon -->
                <div
                  class="aspect-video rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br relative"
                  :class="study.color"
                >
                  <StudyIcon :icon-type="study.image" :fallback-letter="study.title.charAt(0)" />
                  <div
                    class="absolute top-2 right-2 bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-bold"
                  >
                    PREMIUM
                  </div>
                </div>

                <!-- Study Info -->
                <div class="mb-4">
                  <h3
                    class="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 transition-colors"
                  >
                    {{ study.title }}
                  </h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
                    {{ study.description }}
                  </p>

                  <!-- Study Meta -->
                  <div class="flex items-center justify-between text-xs text-neutral-500 mb-3">
                    <span>{{ study.lessons.length }} lessons</span>
                    <span
                      >{{ Math.floor(study.totalDuration / 60) }}h
                      {{ study.totalDuration % 60 }}m</span
                    >
                  </div>

                  <!-- Features -->
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span
                      v-for="feature in study.features.slice(0, 2)"
                      :key="feature"
                      class="bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 px-2 py-1 rounded-full text-xs"
                    >
                      {{ feature }}
                    </span>
                  </div>
                </div>

                <!-- Study Actions -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span
                      class="bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      Premium
                    </span>
                    <span class="text-xs text-neutral-500 capitalize">{{ study.difficulty }}</span>
                  </div>
                  <button
                    class="font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                    :class="
                      authStore.isPremium
                        ? 'text-primary-600 hover:text-primary-700'
                        : 'text-neutral-400'
                    "
                    @click.stop="handlePremiumStudy(study.id)"
                  >
                    <span>{{ authStore.isPremium ? 'Start' : 'Locked' }}</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Upgrade CTA for Free Users -->
          <div v-if="!authStore.isPremium" class="mt-12 text-center">
            <div
              class="card p-8 bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 border-accent-200 dark:border-accent-800"
            >
              <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Unlock Premium Studies
              </h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                Get access to in-depth studies with video content, interactive features,
                downloadable resources, and advanced Bible study tools.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="btn-accent text-lg px-8 py-4" @click="upgradeToPremium">
                  Upgrade to Premium
                </button>
                <button class="btn-secondary text-lg px-8 py-4">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!showFreeStudies && !showPremiumStudies" class="text-center py-16">
          <div class="card p-12 max-w-md mx-auto">
            <div
              class="w-16 h-16 bg-gradient-to-br from-neutral-400 to-neutral-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              No studies found
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Try adjusting your filter to see more study options.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { getFreeStudies, getPremiumStudies } from '../data/studies'
import StudyIcon from '@/components/icons/StudyIcon.vue'

const router = useRouter()

// Safe auth store initialization
const authStoreRef = ref({
  isAuthenticated: false,
  user: null,
  isPremium: false
})

// Safe computed for auth store access
const authStore = computed(() => {
  return authStoreRef.value || {
    isAuthenticated: false,
    user: null,
    isPremium: false
  }
})

// Initialize store when component mounts
onMounted(() => {
  try {
    authStoreRef.value = useAuthStore()
  } catch (error) {
    console.warn('Failed to initialize auth store in StudySeriesPage:', error)
  }
})

const activeFilter = ref<'all' | 'free' | 'premium'>('all')
const freeStudies = ref(getFreeStudies())
const premiumStudies = ref(getPremiumStudies())

const showFreeStudies = computed(
  () => activeFilter.value === 'all' || activeFilter.value === 'free',
)

const showPremiumStudies = computed(
  () => activeFilter.value === 'all' || activeFilter.value === 'premium',
)

const goToStudy = (studyId: string) => {
  // Require authentication to access any study content
  if (!authStore.isAuthenticated) {
    router.push({
      name: 'signin',
      query: { redirect: `/study/${studyId}` },
    })
    return
  }
  router.push(`/study/${studyId}`)
}

const handlePremiumStudy = (studyId: string) => {
  if (authStore.isPremium) {
    goToStudy(studyId)
  } else {
    upgradeToPremium()
  }
}

const upgradeToPremium = () => {
  // TODO: Implement premium upgrade flow
  alert(
    'Premium upgrade coming soon! Only $9.99/month with 3-day free trial. For now, use the demo premium account: demo@biblestem.com / demo123',
  )
}

onMounted(() => {
  // Auth store already initialized above
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
