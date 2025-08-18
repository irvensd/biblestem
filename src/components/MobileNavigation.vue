<template>
  <div
    v-if="showMobileNav"
    class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 z-50 sm:hidden"
  >
    <div class="grid grid-cols-5 h-16">
      <!-- Dashboard -->
      <router-link
        to="/dashboard"
        v-if="authStore.isAuthenticated"
        class="flex flex-col items-center justify-center space-y-1 py-2 px-1 transition-colors duration-200"
        :class="
          route.path === '/dashboard'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
        "
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v1a1 1 0 001 1h14a1 1 0 001 1"
          />
        </svg>
        <span class="text-xs font-medium">Dashboard</span>
      </router-link>

      <!-- Home (for non-authenticated users) -->
      <router-link
        to="/"
        v-if="!authStore.isAuthenticated"
        class="flex flex-col items-center justify-center space-y-1 py-2 px-1 transition-colors duration-200"
        :class="
          route.path === '/'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
        "
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span class="text-xs font-medium">Home</span>
      </router-link>

      <!-- Study Series -->
      <router-link
        to="/study-series"
        class="flex flex-col items-center justify-center space-y-1 py-2 px-1 transition-colors duration-200"
        :class="
          route.path === '/study-series'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
        "
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z"
          />
        </svg>
        <span class="text-xs font-medium">Studies</span>
      </router-link>

      <!-- My Studies (for authenticated users) -->
      <router-link
        to="/my-studies"
        v-if="authStore.isAuthenticated"
        class="flex flex-col items-center justify-center space-y-1 py-2 px-1 transition-colors duration-200"
        :class="
          route.path === '/my-studies'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
        "
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <span class="text-xs font-medium">My Studies</span>
      </router-link>

      <!-- Daily Devotions -->
      <router-link
        to="/daily-devotions"
        class="flex flex-col items-center justify-center space-y-1 py-2 px-1 transition-colors duration-200"
        :class="
          route.path === '/daily-devotions'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
        "
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span class="text-xs font-medium">Devotions</span>
      </router-link>

      <!-- Search -->
      <button
        @click="toggleSearch"
        class="flex flex-col items-center justify-center space-y-1 py-2 px-1 transition-colors duration-200"
        :class="
          showSearch
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
        "
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span class="text-xs font-medium">Search</span>
      </button>

      <!-- Profile/Menu -->
      <button
        @click="toggleProfile"
        @touchstart="toggleProfile"
        type="button"
        class="flex flex-col items-center justify-center space-y-1 py-2 px-1 transition-colors duration-200 touch-manipulation"
        :class="
          showProfile
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
        "
      >
        <div
          v-if="authStore.isAuthenticated"
          class="w-5 h-5 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
        >
          <span class="text-white text-xs font-bold">{{ authStore.user?.name.charAt(0) }}</span>
        </div>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span class="text-xs font-medium">{{
          authStore.isAuthenticated ? 'Profile' : 'Sign In'
        }}</span>
      </button>
    </div>

    <!-- Mobile Search Overlay -->
    <div
      v-if="showSearch"
      class="fixed inset-0 bg-white dark:bg-neutral-900 z-60"
      style="bottom: 64px"
    >
      <div class="p-4 border-b border-neutral-200 dark:border-neutral-700">
        <div class="flex items-center space-x-3">
          <button @click="closeSearch" class="text-neutral-600 dark:text-neutral-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Search</h2>
        </div>
      </div>
      <div class="p-4">
        <GlobalSearch />
      </div>
    </div>

    <!-- Mobile Profile/Menu Overlay -->
    <div
      v-if="showProfile"
      class="fixed inset-0 bg-white dark:bg-neutral-900 z-60"
      style="bottom: 64px"
    >
      <div class="p-4 border-b border-neutral-200 dark:border-neutral-700">
        <div class="flex items-center space-x-3">
          <button @click="closeProfile" class="text-neutral-600 dark:text-neutral-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {{ authStore.isAuthenticated ? 'Profile' : 'Account' }}
          </h2>
        </div>
      </div>

      <div class="p-4">
        <!-- Authenticated User Profile -->
        <div v-if="authStore.isAuthenticated" class="space-y-4">
          <!-- User Info -->
          <div class="flex items-center space-x-3 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
            >
              <span class="text-white font-bold text-lg">{{
                authStore.user?.name.charAt(0)
              }}</span>
            </div>
            <div>
              <div class="font-medium text-neutral-900 dark:text-neutral-100">
                {{ authStore.user?.name }}
              </div>
              <div
                class="text-sm"
                :class="authStore.isPremium ? 'text-accent-600' : 'text-neutral-500'"
              >
                {{ authStore.isPremium ? 'Premium' : 'Free' }} Plan
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="space-y-2">
            <router-link
              to="/profile"
              @click="closeProfile"
              class="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <svg
                class="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span class="text-neutral-900 dark:text-neutral-100">Profile Settings</span>
            </router-link>

            <router-link
              to="/settings"
              @click="closeProfile"
              class="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <svg
                class="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-neutral-900 dark:text-neutral-100">Settings</span>
            </router-link>

            <button
              v-if="!authStore.isPremium"
              @click="handleUpgrade"
              class="w-full flex items-center space-x-3 p-3 rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span class="font-medium">Upgrade to Premium</span>
            </button>

            <button
              @click="signOut"
              class="w-full flex items-center space-x-3 p-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        <!-- Non-authenticated User -->
        <div v-else class="space-y-4">
          <div class="text-center p-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Join BibleStem
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              Start your interactive Bible study journey today with our free account.
            </p>

            <div class="space-y-3">
              <router-link to="/signin" @click="closeProfile" class="w-full btn-primary py-3">
                Sign In
              </router-link>
              <router-link to="/signin" @click="closeProfile" class="w-full btn-secondary py-3">
                Create Account
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import GlobalSearch from './GlobalSearch.vue'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

// Initialize auth store
onMounted(async () => {
  try {
    if (!authStore.isInitialized) {
      await authStore.initializeAuth()
    }
  } catch (error) {
    console.warn('Failed to initialize auth store in MobileNavigation:', error)
  }
})

const showSearch = ref(false)
const showProfile = ref(false)

// Only show mobile nav on mobile screens and specific routes
const showMobileNav = computed(() => {
  // Don't show on certain full-screen routes
  const hideOnRoutes = ['/signin', '/signup']
  return !hideOnRoutes.includes(route.path.value)
})

const toggleSearch = () => {
  showSearch.value = !showSearch.value
  showProfile.value = false
}

const closeSearch = () => {
  showSearch.value = false
}

const toggleProfile = () => {
  showProfile.value = !showProfile.value
  showSearch.value = false
}

const closeProfile = () => {
  showProfile.value = false
}

const handleUpgrade = () => {
  // TODO: Implement upgrade flow
  alert('Upgrade to Premium - $9.99/month with 3-day free trial!')
  closeProfile()
}

const signOut = async () => {
  await authStore.logout()
  closeProfile()
}

// Close overlays when route changes
const handleRouteChange = () => {
  showSearch.value = false
  showProfile.value = false
}

onMounted(() => {
  // Watch for route changes
  window.addEventListener('popstate', handleRouteChange)
})

onUnmounted(() => {
  window.removeEventListener('popstate', handleRouteChange)
})
</script>

<style scoped>
/* Ensure the component is above other content */
.z-60 {
  z-index: 60;
}

/* Custom scrollbar for overlay content */
.fixed.inset-0::-webkit-scrollbar {
  width: 4px;
}

.fixed.inset-0::-webkit-scrollbar-track {
  @apply bg-neutral-100 dark:bg-neutral-800;
}

.fixed.inset-0::-webkit-scrollbar-thumb {
  @apply bg-neutral-300 dark:bg-neutral-600 rounded-full;
}
</style>
