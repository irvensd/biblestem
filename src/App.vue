<template>
  <div
    id="app"
    class="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
  >
    <ErrorBoundary>
      <AppHeader />
      <main class="pb-16 sm:pb-0">
        <ErrorBoundary>
          <router-view />
        </ErrorBoundary>
      </main>
      <MobileNavigation />
    </ErrorBoundary>

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
import { onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import MobileNavigation from './components/MobileNavigation.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import GlobalNotifications from './components/GlobalNotifications.vue'
import { usePWA } from './composables/usePWA'
import { useAuthStore } from './stores/auth'

const {
  isInstallable,
  isInstalled,
  isOffline,
  updateAvailable,
  showInstallPrompt,
  installPWA,
  updateServiceWorker,
} = usePWA()

// Initialize authentication on app start
onMounted(async () => {
  const authStore = useAuthStore()
  await authStore.initializeAuth()
})
</script>

<style>
/* Global styles are handled in base.css */
</style>
