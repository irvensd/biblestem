<template>
  <div
    v-if="showMobileNav"
    class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 z-50 sm:hidden safe-area-bottom"
    role="navigation"
    aria-label="Mobile navigation"
  >
    <div class="grid grid-cols-5 h-16 md:h-20">
      <!-- Dashboard -->
      <router-link
        to="/dashboard"
        v-if="authStore.isAuthenticated"
        class="flex flex-col items-center justify-center space-y-1 py-3 px-2 transition-all duration-200 focus-ring touch-manipulation active:scale-95 min-h-[64px]"
        :class="
          route.path === '/dashboard'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        :aria-current="route.path === '/dashboard' ? 'page' : undefined"
        role="tab"
        :aria-selected="route.path === '/dashboard'"
        @touchstart="light"
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
        class="flex flex-col items-center justify-center space-y-1 py-3 px-2 transition-all duration-200 touch-manipulation active:scale-95 min-h-[64px]"
        :class="
          route.path === '/'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="light"
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
        class="flex flex-col items-center justify-center space-y-1 py-3 px-2 transition-all duration-200 touch-manipulation active:scale-95 min-h-[64px]"
        :class="
          route.path === '/study-series'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="light"
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
        class="flex flex-col items-center justify-center space-y-1 py-3 px-2 transition-all duration-200 touch-manipulation active:scale-95 min-h-[64px]"
        :class="
          route.path === '/my-studies'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="light"
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
        class="flex flex-col items-center justify-center space-y-1 py-3 px-2 transition-all duration-200 touch-manipulation active:scale-95 min-h-[64px]"
        :class="
          route.path === '/daily-devotions'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="light"
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
      <router-link
        to="/search"
        class="flex flex-col items-center justify-center space-y-1 py-3 px-2 transition-all duration-200 touch-manipulation active:scale-95 min-h-[64px]"
        :class="
          route.path === '/search'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="light"
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
      </router-link>

      <!-- Profile/Menu (authenticated) or Sign In (non-authenticated) -->
      <router-link
        v-if="!authStore.isAuthenticated"
        to="/sign-in"
        class="flex flex-col items-center justify-center space-y-1 py-3 px-2 transition-all duration-200 touch-manipulation active:scale-95 min-h-[64px]"
        :class="
          route.path === '/sign-in'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="light"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span class="text-xs font-medium">Sign In</span>
      </router-link>
      
      <!-- Profile Menu Button (authenticated users only) -->
      <button
        v-else
        @click="toggleProfile"
        type="button"
        class="flex flex-col items-center justify-center space-y-1 py-3 px-2 transition-all duration-200 touch-manipulation active:scale-95 min-h-[64px]"
        :class="
          showProfile
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
      >
        <div
          class="w-5 h-5 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
        >
          <span class="text-white text-xs font-bold">{{ authStore.user?.name.charAt(0) }}</span>
        </div>
        <span class="text-xs font-medium">Profile</span>
      </button>
    </div>


    <!-- Mobile Profile/Menu Overlay (Authenticated Users Only) -->
    <div
      v-if="showProfile && authStore.isAuthenticated"
      class="fixed inset-0 bg-white dark:bg-neutral-900 z-60"
      style="bottom: 80px"
      @click="closeProfile"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <!-- Top drag handle area -->
      <div 
        class="h-12 flex items-center justify-center cursor-pointer touch-manipulation"
        @click="closeProfile"
      >
        <div class="w-12 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
      </div>
      
      <div class="h-[calc(100%-3rem)] overflow-y-auto" @click.stop>
        <div class="p-4 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-center space-x-3">
            <button @click="closeProfile" class="text-neutral-600 dark:text-neutral-400 touch-feedback touch-ripple p-2 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Profile</h2>
          </div>
        </div>

        <div class="p-4">
          <div class="space-y-4">
          <!-- User Info -->
          <div class="flex items-center space-x-3 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
            >
              <span class="text-white font-bold text-lg">{{ authStore.user?.name.charAt(0) }}</span>
            </div>
            <div>
              <div class="font-medium text-neutral-900 dark:text-neutral-100">
                {{ authStore.user?.name }}
              </div>
                <div
                  class="text-sm"
                  :class="authStore.hasSupported ? 'text-accent-600' : 'text-neutral-500'"
                >
                  {{ authStore.hasSupported ? '❤️ Supporter' : 'Member' }}
                </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="space-y-2">
            <router-link
              to="/profile"
              @click="closeProfile"
              class="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors touch-feedback touch-ripple"
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
              class="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors touch-feedback touch-ripple"
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

            <router-link
              to="/help"
              @click="closeProfile"
              class="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors touch-feedback touch-ripple"
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-neutral-900 dark:text-neutral-100">Help Center</span>
            </router-link>

            <router-link
              to="/contact"
              @click="closeProfile"
              class="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors touch-feedback touch-ripple"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-neutral-900 dark:text-neutral-100">Contact Us</span>
            </router-link>

            <button
              @click="handleSupportUs"
              class="w-full flex items-center space-x-3 p-3 rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              <span class="font-medium">{{ authStore.hasSupported ? 'Support Us Again' : 'Support Our Ministry' }}</span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useHapticFeedback } from '../composables/useMobileGestures'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

// Touch feedback
const { light, medium } = useHapticFeedback()

const showProfile = ref(false)

// Touch handlers for swipe down to close
let touchStartY = 0
let touchStartTime = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartY = e.touches[0].clientY
  touchStartTime = Date.now()
}

const handleTouchMove = (e: TouchEvent) => {
  // Prevent default scrolling if swiping down from top
  if (e.touches[0].clientY > touchStartY + 10) {
    e.preventDefault()
  }
}

const handleTouchEnd = (e: TouchEvent) => {
  const touchEndY = e.changedTouches[0].clientY
  const touchEndTime = Date.now()
  const deltaY = touchEndY - touchStartY
  const deltaTime = touchEndTime - touchStartTime
  
  // Close if swiped down more than 100px or if quick swipe down
  if (deltaY > 100 || (deltaY > 50 && deltaTime < 300)) {
    closeProfile()
  }
}

// Only show mobile nav on mobile screens and specific routes
const showMobileNav = computed(() => {
  // Don't show on certain full-screen routes
  const hideOnRoutes = ['/signin', '/signup']
  return !hideOnRoutes.includes(route.path)
})

const toggleProfile = () => {
  medium()
  showProfile.value = !showProfile.value
}

const closeProfile = () => {
  light()
  showProfile.value = false
}

const handleSupportUs = () => {
  medium()
  // TODO: Implement donation flow
  // For now, show a message - we'll create a proper donation component later
  alert('Thank you for considering supporting BibleStem! We are a donation-based ministry spreading the Gospel freely. Donation options coming soon!')
  closeProfile()
}

const signOut = async () => {
  medium()
  await authStore.logout()
  closeProfile()
  router.push('/')
}

// Close overlays when route changes
const handleRouteChange = () => {
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
  background-color: rgb(245 245 245);
}

.fixed.inset-0::-webkit-scrollbar-thumb {
  background-color: rgb(212 212 212);
  border-radius: 9999px;
}

.dark .fixed.inset-0::-webkit-scrollbar-track {
  background-color: rgb(38 38 38);
}

.dark .fixed.inset-0::-webkit-scrollbar-thumb {
  background-color: rgb(82 82 82);
}
</style>
