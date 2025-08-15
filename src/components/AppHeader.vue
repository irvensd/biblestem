<template>
  <header class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
    <nav class="container-base">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z"/>
              </svg>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold gradient-text">BibleStem</span>
            <span class="text-xs text-neutral-500 -mt-1 hidden sm:block">Interactive Bible Study</span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link
            to="/study-series"
            class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/study-series' }"
          >
            Study Series
          </router-link>
          <router-link
            to="/about"
            class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/about' }"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/contact' }"
          >
            Contact
          </router-link>
        </div>

        <!-- CTA Buttons / User Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Authenticated User -->
          <div v-if="authStore.isAuthenticated" class="relative">
            <button
              @click="toggleUserMenu"
              class="flex items-center space-x-3 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
              :class="{ 'bg-neutral-100 dark:bg-neutral-800': userMenuOpen }"
            >
              <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-bold">{{ authStore.user?.name.charAt(0) }}</span>
              </div>
              <div class="text-left">
                <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">{{ authStore.user?.name }}</div>
                <div class="text-xs text-neutral-500" :class="authStore.isPremium ? 'text-accent-600' : 'text-neutral-500'">
                  {{ authStore.isPremium ? 'Premium' : 'Free' }}
                </div>
              </div>
              <svg class="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            >
              Sign In
            </router-link>
            <router-link to="/signin" class="btn-primary">
              Start Learning
            </router-link>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
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
        <div class="flex flex-col space-y-3">
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
          <div class="px-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <div class="flex flex-col space-y-3">
              <button class="w-full text-left px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200">
                Sign In
              </button>
              <button class="btn-primary w-full">
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
