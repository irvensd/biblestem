<template>
  <div
    v-if="authStore.isAuthenticated"
    class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-700 safe-bottom"
  >
    <nav class="grid grid-cols-4 h-16">
      <!-- Dashboard -->
      <router-link
        to="/dashboard"
        class="flex flex-col items-center justify-center space-y-1 text-xs font-medium transition-all duration-200 relative overflow-hidden"
        :class="
          $route.path === '/dashboard'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div
          class="w-6 h-6 transition-transform duration-200"
          :class="{ 'scale-110': $route.path === '/dashboard' }"
        >
          <svg
            class="w-full h-full"
            :fill="$route.path === '/dashboard' ? 'currentColor' : 'none'"
            :stroke="$route.path === '/dashboard' ? 'none' : 'currentColor'"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <span>Home</span>
        <div
          v-if="$route.path === '/dashboard'"
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"
        ></div>
      </router-link>

      <!-- Study Series -->
      <router-link
        to="/study-series"
        class="flex flex-col items-center justify-center space-y-1 text-xs font-medium transition-all duration-200 relative overflow-hidden"
        :class="
          $route.path === '/study-series'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div
          class="w-6 h-6 transition-transform duration-200"
          :class="{ 'scale-110': $route.path === '/study-series' }"
        >
          <svg
            class="w-full h-full"
            :fill="$route.path === '/study-series' ? 'currentColor' : 'none'"
            :stroke="$route.path === '/study-series' ? 'none' : 'currentColor'"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <span>Studies</span>
        <div
          v-if="$route.path === '/study-series'"
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"
        ></div>
      </router-link>

      <!-- My Studies -->
      <router-link
        to="/my-studies"
        class="flex flex-col items-center justify-center space-y-1 text-xs font-medium transition-all duration-200 relative overflow-hidden"
        :class="
          $route.path === '/my-studies'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div
          class="w-6 h-6 transition-transform duration-200"
          :class="{ 'scale-110': $route.path === '/my-studies' }"
        >
          <svg
            class="w-full h-full"
            :fill="$route.path === '/my-studies' ? 'currentColor' : 'none'"
            :stroke="$route.path === '/my-studies' ? 'none' : 'currentColor'"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <span>Progress</span>
        <div
          v-if="$route.path === '/my-studies'"
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"
        ></div>
      </router-link>

      <!-- Daily Devotions -->
      <router-link
        to="/daily-devotions"
        class="flex flex-col items-center justify-center space-y-1 text-xs font-medium transition-all duration-200 relative overflow-hidden"
        :class="
          $route.path === '/daily-devotions'
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 active:bg-neutral-100 dark:active:bg-neutral-800'
        "
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div
          class="w-6 h-6 transition-transform duration-200"
          :class="{ 'scale-110': $route.path === '/daily-devotions' }"
        >
          <svg
            class="w-full h-full"
            :fill="$route.path === '/daily-devotions' ? 'currentColor' : 'none'"
            :stroke="$route.path === '/daily-devotions' ? 'none' : 'currentColor'"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <span>Devotions</span>
        <div
          v-if="$route.path === '/daily-devotions'"
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"
        ></div>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

// Add touch feedback for better mobile interaction
const handleTouchStart = (event: TouchEvent) => {
  const element = event.currentTarget as HTMLElement
  element.style.transform = 'scale(0.95)'
  element.style.opacity = '0.8'
}

const handleTouchEnd = (event: TouchEvent) => {
  const element = event.currentTarget as HTMLElement
  setTimeout(() => {
    element.style.transform = ''
    element.style.opacity = ''
  }, 150)
}
</script>

<style scoped>
/* Safe area support for devices with home indicator */
.safe-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

/* Ensure smooth transitions on touch */
@media (hover: none) and (pointer: coarse) {
  .transition-all {
    transition-duration: 0.1s;
  }
}
</style>
