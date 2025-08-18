<template>
  <div
    id="app"
    class="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
  >
    <!-- Skip Navigation for Screen Readers -->
    <a href="#main-content" class="skip-link"> Skip to main content </a>

    <AppHeader />
    <main id="main-content" class="pb-16 sm:pb-0">
      <router-view v-if="isAppReady" v-slot="{ Component, route }">
        <transition :name="getTransitionName(route)" mode="out-in" appear>
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
      <div v-else class="flex items-center justify-center min-h-[400px]">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    </main>
    <MobileNavigation />

    <!-- Global Notifications for errors and loading -->
    <GlobalNotifications />

    <!-- PWA Install Prompt -->
    <div
      v-if="showInstallPrompt && !isInstalled"
      class="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 p-4 z-50 animate-slide-up"
    >
      <div class="flex items-start space-x-3">
        <div
          class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0"
        >
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
            Install BibleStem
          </h3>
          <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
            Install our app for a better experience with offline access and notifications.
          </p>
          <div class="flex space-x-2 mt-3">
            <button @click="installPWA" class="btn-primary text-xs py-2 px-3">Install</button>
            <button
              @click="showInstallPrompt = false"
              class="text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 py-2 px-3"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Available Notification -->
    <div
      v-if="updateAvailable"
      class="fixed top-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm bg-accent-600 text-white rounded-lg shadow-xl p-4 z-50 animate-slide-down"
    >
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-semibold text-sm">Update Available</h3>
          <p class="text-xs opacity-90 mt-1">A new version is ready to install.</p>
        </div>
        <button
          @click="updateServiceWorker"
          class="bg-white/20 hover:bg-white/30 text-white rounded-lg px-3 py-1 text-xs font-medium transition-colors ml-3"
        >
          Update
        </button>
      </div>
    </div>

    <!-- Offline Indicator -->
    <div
      v-if="isOffline"
      class="fixed top-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm bg-yellow-600 text-white rounded-lg shadow-xl p-4 z-50 animate-slide-down"
    >
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2v20M2 12h20"
          />
        </svg>
        <div>
          <h3 class="font-semibold text-sm">You're Offline</h3>
          <p class="text-xs opacity-90">
            Your progress is saved locally and will sync when online.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import MobileNavigation from './components/MobileNavigation.vue'
import { usePWA } from './composables/usePWA'

// App readiness state
const isAppReady = ref(false)

const {
  isInstallable,
  isInstalled,
  isOffline,
  updateAvailable,
  showInstallPrompt,
  installPWA,
  updateServiceWorker,
} = usePWA()

// Page transition logic
const getTransitionName = (route: any) => {
  // Define different transitions for different routes
  if (route.name === 'home') return 'slide-up'
  if (route.name === 'signin' || route.name === 'signup') return 'fade'
  if (route.name === 'dashboard') return 'slide-right'
  if (route.name === 'study') return 'slide-left'
  return 'fade'
}

// Initialize app when mounted
onMounted(async () => {
  try {
    // Import auth store only when needed to avoid Pinia timing issues
    const { useAuthStore } = await import('./stores/auth')
    const authStore = useAuthStore()
    await authStore.initializeAuth()

    // Mark app as ready to render router-view
    isAppReady.value = true
  } catch (error) {
    console.error('App initialization error:', error)
    // Still mark as ready to prevent infinite loading
    isAppReady.value = true
  }
})
</script>

<style>
/* Global styles are handled in base.css */
</style>
