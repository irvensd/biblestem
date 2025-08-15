<template>
  <header class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
    <nav class="container-base">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 sm:space-x-3 group">
          <div class="relative">
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <svg class="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z"/>
              </svg>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-lg sm:text-xl font-bold gradient-text">BibleStem</span>
            <span class="text-xs text-neutral-500 -mt-1 hidden lg:block">Interactive Bible Study</span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <!-- Authenticated User Navigation -->
          <template v-if="authStore.isAuthenticated">
            <router-link
              to="/dashboard"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/dashboard' }"
            >
              Dashboard
            </router-link>
            <router-link
              to="/study-series"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/study-series' }"
            >
              Study Series
            </router-link>
            <router-link
              to="/my-studies"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/my-studies' }"
            >
              My Studies
            </router-link>
            <router-link
              to="/community"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/community' }"
            >
              Community
            </router-link>
          </template>

          <!-- Guest User Navigation -->
          <template v-else>
            <router-link
              to="/"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/' }"
            >
              Home
            </router-link>
            <router-link
              to="/study-series"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/study-series' }"
            >
              Study Series
            </router-link>
            <router-link
              to="/about"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/about' }"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </template>
        </div>

        <!-- CTA Buttons / User Menu -->
        <div class="hidden sm:flex items-center space-x-2 lg:space-x-4">
          <!-- Authenticated User -->
          <div v-if="authStore.isAuthenticated" class="relative">
            <button
              @click="toggleUserMenu"
              class="flex items-center space-x-2 lg:space-x-3 p-1.5 lg:p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
              :class="{ 'bg-neutral-100 dark:bg-neutral-800': userMenuOpen }"
            >
              <div class="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span class="text-white text-xs lg:text-sm font-bold">{{ authStore.user?.name.charAt(0) }}</span>
              </div>
              <div class="text-left hidden md:block">
                <div class="text-xs lg:text-sm font-medium text-neutral-900 dark:text-neutral-100">{{ authStore.user?.name }}</div>
                <div class="text-xs text-neutral-500" :class="authStore.isPremium ? 'text-accent-600' : 'text-neutral-500'">
                  {{ authStore.isPremium ? 'Premium' : 'Free' }}
                </div>
              </div>
              <svg class="w-3 h-3 lg:w-4 lg:h-4 text-neutral-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- User Dropdown Menu -->
            <div
              v-if="userMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-strong border border-neutral-200 dark:border-neutral-700 py-2 z-50 animate-fade-in"
              @click="closeUserMenu"
            >
              <router-link
                to="/dashboard"
                class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200"
              >
                Dashboard
              </router-link>
              <router-link
                to="/profile"
                class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200"
              >
                Profile
              </router-link>
              <router-link
                to="/settings"
                class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200"
              >
                Settings
              </router-link>
              <div class="border-t border-neutral-200 dark:border-neutral-700 my-2"></div>
              <button
                @click="handleSignOut"
                class="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>

          <!-- Guest User -->
          <template v-else>
            <router-link
              to="/signin"
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Sign In
            </router-link>
            <router-link
              to="/signup"
              class="btn-secondary text-sm lg:text-base py-2 px-3 lg:py-3 lg:px-6 hidden md:inline-block"
            >
              Sign Up
            </router-link>
            <router-link to="/signin" class="btn-primary text-sm lg:text-base py-2 px-3 lg:py-3 lg:px-6">
              Start Learning
            </router-link>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="sm:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          :class="{ 'bg-neutral-100 dark:bg-neutral-800': mobileMenuOpen }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-800 animate-fade-in"
      >
        <!-- Authenticated User Mobile Menu -->
        <div v-if="authStore.isAuthenticated">
          <!-- User Info -->
          <div class="px-4 mb-4">
            <div class="flex items-center space-x-3 px-4 py-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">{{ authStore.user?.name.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-medium text-neutral-900 dark:text-neutral-100">{{ authStore.user?.name }}</div>
                <div class="text-sm" :class="authStore.isPremium ? 'text-accent-600' : 'text-neutral-500'">
                  {{ authStore.isPremium ? 'Premium' : 'Free' }} Plan
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="flex flex-col space-y-3 px-4">
            <router-link
              to="/dashboard"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20': $route.path === '/dashboard' }"
            >
              Dashboard
            </router-link>
            <router-link
              to="/study-series"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20': $route.path === '/study-series' }"
            >
              Study Series
            </router-link>
            <router-link
              to="/my-studies"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20': $route.path === '/my-studies' }"
            >
              My Studies
            </router-link>
            <router-link
              to="/community"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20': $route.path === '/community' }"
            >
              Community
            </router-link>
          </div>

          <!-- Account Actions -->
          <div class="px-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 mt-4">
            <div class="flex flex-col space-y-3">
              <router-link
                to="/profile"
                @click="closeMobileMenu"
                class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              >
                Profile
              </router-link>
              <router-link
                to="/settings"
                @click="closeMobileMenu"
                class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              >
                Settings
              </router-link>
              <button
                @click="handleSignOut"
                class="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg font-medium transition-all duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <!-- Guest User Mobile Menu -->
        <div v-else>
          <!-- Navigation Links -->
          <div class="flex flex-col space-y-3 px-4">
            <router-link
              to="/"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20': $route.path === '/' }"
            >
              Home
            </router-link>
            <router-link
              to="/study-series"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20': $route.path === '/study-series' }"
            >
              Study Series
            </router-link>
            <router-link
              to="/about"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20': $route.path === '/about' }"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </div>

          <!-- Auth Actions -->
          <div class="px-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 mt-4">
            <div class="flex flex-col space-y-3">
              <router-link
                to="/signin"
                @click="closeMobileMenu"
                class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              >
                Sign In
              </router-link>
              <router-link
                to="/signup"
                @click="closeMobileMenu"
                class="btn-secondary w-full"
              >
                Sign Up
              </router-link>
              <router-link to="/signin" @click="closeMobileMenu" class="btn-primary w-full">
                Start Learning
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const mobileMenuOpen = ref(false)
const userMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  userMenuOpen.value = false
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value
  mobileMenuOpen.value = false
}

const closeUserMenu = () => {
  userMenuOpen.value = false
}

const handleSignOut = () => {
  authStore.logout()
  userMenuOpen.value = false
  mobileMenuOpen.value = false
  router.push('/')
}

// Close menus when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  if (!target.closest('.relative')) {
    userMenuOpen.value = false
  }
}

onMounted(() => {
  // Initialize auth state
  authStore.initializeAuth()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
