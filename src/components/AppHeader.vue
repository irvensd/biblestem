<template>
  <!-- Actual header -->
  <header
    class="bg-white dark:bg-gray-900 backdrop-blur-md border-b border-neutral-200 dark:border-gray-700 sticky top-0 z-50 shadow-lg"
    role="banner"
  >
      <nav class="container-base" role="navigation" aria-label="Main navigation">
      <div class="flex items-center justify-between h-14 sm:h-16 lg:h-20">
        <!-- Logo -->
        <router-link
          :to="authStore.isAuthenticated ? '/dashboard' : '/'"
          class="flex items-center space-x-2 sm:space-x-3 group"
          :aria-label="authStore.isAuthenticated ? 'BibleStem - Go to dashboard' : 'BibleStem - Go to homepage'"
        >
          <div class="relative">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
              aria-hidden="true"
            >
              <svg
                class="w-4 h-4 sm:w-6 sm:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">BibleStem</span>
            <span class="text-xs text-neutral-600 dark:text-gray-400 -mt-1 hidden lg:block"
              >Interactive Bible Study</span
            >
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div
          class="hidden lg:flex items-center space-x-6 xl:space-x-8 lg:ml-12 xl:ml-16"
          role="menubar"
        >
          <!-- Authenticated User Navigation -->
          <template v-if="authStore.isAuthenticated">
            <router-link
              to="/dashboard"
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-blue-400 border-b-2 border-primary-600 dark:border-blue-400 pb-1': $route.path === '/dashboard' }"
              role="menuitem"
              :aria-current="$route.path === '/dashboard' ? 'page' : undefined"
            >
              Dashboard
            </router-link>
            <router-link
              to="/study-series"
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/study-series' }"
              role="menuitem"
              :aria-current="$route.path === '/study-series' ? 'page' : undefined"
            >
              Study Series
            </router-link>
            <router-link
              to="/my-studies"
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-blue-400 border-b-2 border-primary-600 dark:border-blue-400 pb-1': $route.path === '/my-studies' }"
              role="menuitem"
              :aria-current="$route.path === '/my-studies' ? 'page' : undefined"
            >
              My Studies
            </router-link>
            <router-link
              to="/daily-devotions"
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{
                'text-primary-600 dark:text-blue-400 border-b-2 border-primary-600 dark:border-blue-400 pb-1': $route.path === '/daily-devotions',
              }"
              role="menuitem"
              :aria-current="$route.path === '/daily-devotions' ? 'page' : undefined"
            >
              Daily Devotions
            </router-link>
          </template>

          <!-- Guest User Navigation -->
          <template v-else>
            <router-link
              to="/"
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/' }"
            >
              Home
            </router-link>
            <router-link
              to="/study-series"
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/study-series' }"
            >
              Study Series
            </router-link>
            <router-link
              to="/about"
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/about' }"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm xl:text-base"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </template>
        </div>

        <!-- Search Button (Desktop) - Opens floating search -->
        <button
          v-if="authStore.isAuthenticated"
          @click="toggleSearchModal"
          class="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 mr-3"
          aria-label="Open search"
          title="Search (Ctrl+K)"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <!-- Theme Toggle Button (Desktop) -->
        <button
          @click="toggleTheme"
          class="hidden lg:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-100 dark:hover:bg-gray-700 transition-colors duration-200 mr-2"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="isDarkMode" class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else class="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- Donation Heart Button (Desktop) -->
        <button
          @click="handleDonation"
          class="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mr-3"
          aria-label="Support our ministry"
          title="Support BibleStem"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm">Donate</span>
        </button>

        <!-- CTA Buttons / User Menu -->
        <div class="hidden lg:flex items-center space-x-2 lg:space-x-4 ml-0">
          <!-- Authenticated User -->
          <div v-if="authStore.isAuthenticated" class="relative">
            <button
              @click="toggleUserMenu"
              class="flex items-center space-x-2 lg:space-x-3 p-1.5 lg:p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
              :class="{ 'bg-neutral-100 dark:bg-neutral-800': userMenuOpen }"
              :aria-expanded="userMenuOpen"
              :aria-haspopup="true"
              aria-label="User menu"
              :aria-describedby="authStore.user?.name ? 'user-name' : undefined"
            >
              <div
                class="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
              >
                <span class="text-white text-xs lg:text-sm font-bold">{{
                  authStore.user?.name?.charAt(0) || 'U'
                }}</span>
              </div>
              <div class="text-left hidden md:block">
                <div class="text-xs lg:text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {{ authStore.user?.name || 'User' }}
                </div>
                <div
                  class="text-xs"
                  :class="authStore.hasSupported ? 'text-accent-600' : 'text-neutral-500'"
                >
                  {{ authStore.hasSupported ? '❤️ Supporter' : 'Member' }}
                </div>
              </div>
              <svg
                class="w-3 h-3 lg:w-4 lg:h-4 text-neutral-400 hidden md:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- User Dropdown Menu -->
            <div
              v-if="userMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-strong border border-neutral-200 dark:border-neutral-700 py-2 z-50 animate-fade-in"
              @click="closeUserMenu"
              role="menu"
              aria-label="User account menu"
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
              class="text-neutral-700 dark:text-white hover:text-primary-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Sign In
            </router-link>
            <router-link
              to="/signup"
              class="group hidden md:inline-flex items-center justify-center gap-2 py-2 px-4 lg:py-3 lg:px-6 bg-gradient-to-r from-neutral-600 to-neutral-700 hover:from-neutral-700 hover:to-neutral-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
            >
              <span>Sign Up</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
            <router-link
              to="/signin"
              class="group inline-flex items-center justify-center gap-2 py-2 px-4 lg:py-3 lg:px-6 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Start Learning</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 touch-manipulation active:scale-95 min-h-[44px] min-w-[44px]"
          :class="{ 'bg-neutral-100 dark:bg-neutral-800': mobileMenuOpen }"
          :aria-expanded="mobileMenuOpen"
          :aria-haspopup="true"
          aria-label="Toggle mobile menu"
          aria-controls="mobile-menu"
        >
          <svg
            class="w-6 h-6 text-neutral-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
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
        id="mobile-menu"
        class="lg:hidden border-t border-neutral-200 dark:border-neutral-800 animate-fade-in max-h-[calc(100vh-160px)] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100"
        @touchmove.stop
        @touchstart.passive="true"
        @touchend.passive="true"
        style="overscroll-behavior: contain; -webkit-overflow-scrolling: touch"
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <!-- Authenticated User Mobile Menu -->
        <div v-if="authStore.isAuthenticated" class="py-4">
          <!-- User Info -->
          <div class="px-4 mb-4">
            <div
              class="flex items-center space-x-3 px-4 py-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
            >
              <div
                class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold">{{ authStore.user?.name?.charAt(0) || 'U' }}</span>
              </div>
              <div>
                <div class="font-medium text-neutral-900 dark:text-neutral-100">
                  {{ authStore.user?.name || 'User' }}
                </div>
                <div
                  class="text-sm"
                  :class="authStore.hasSupported ? 'text-accent-600' : 'text-neutral-500'"
                >
                  {{ authStore.hasSupported ? '❤️ Supporter' : 'Member' }}
                </div>
              </div>
            </div>
          </div>

          <!-- Search Button (Mobile) -->
          <div class="px-4 mb-4">
            <button
              @click="() => { toggleSearchModal(); closeMobileMenu(); }"
              class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>
          </div>

          <!-- Navigation Links -->
          <div class="flex flex-col space-y-3 px-4">
            <router-link
              to="/dashboard"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{
                'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                  $route.path === '/dashboard',
              }"
            >
              Dashboard
            </router-link>
            <router-link
              to="/study-series"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{
                'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                  $route.path === '/study-series',
              }"
            >
              Study Series
            </router-link>
            <router-link
              to="/my-studies"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{
                'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                  $route.path === '/my-studies',
              }"
            >
              My Studies
            </router-link>
            <router-link
              to="/daily-devotions"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{
                'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                  $route.path === '/daily-devotions',
              }"
            >
              Daily Devotions
            </router-link>
          </div>

          <!-- Account Actions -->
          <div class="px-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 mt-4 pb-6">
            <div class="flex flex-col space-y-3">
              <button
                @click="toggleTheme"
                class="w-full text-left px-4 py-2 flex items-center justify-between text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              >
                <div class="flex items-center gap-3">
                  <svg v-if="isDarkMode" class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <svg v-else class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
                </div>
              </button>
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
        <div v-else class="py-4">
          <!-- Navigation Links -->
          <div class="flex flex-col space-y-3 px-4">
            <router-link
              to="/"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{
                'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                  $route.path === '/',
              }"
            >
              Home
            </router-link>
            <router-link
              to="/study-series"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{
                'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                  $route.path === '/study-series',
              }"
            >
              Study Series
            </router-link>
            <router-link
              to="/about"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{
                'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                  $route.path === '/about',
              }"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              @click="closeMobileMenu"
              class="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              :class="{
                'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                  $route.path === '/contact',
              }"
            >
              Contact
            </router-link>
          </div>

          <!-- Auth Actions -->
          <div class="px-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 mt-4">
            <div class="flex flex-col space-y-3">
              <button
                @click="toggleTheme"
                class="w-full text-left px-4 py-2 flex items-center justify-between text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200"
              >
                <div class="flex items-center gap-3">
                  <svg v-if="isDarkMode" class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <svg v-else class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
                </div>
              </button>
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
                class="group w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-neutral-600 to-neutral-700 hover:from-neutral-700 hover:to-neutral-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Sign Up</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
              <router-link 
                to="/signin" 
                @click="closeMobileMenu" 
                class="group w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Start Learning</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- Floating Search Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="searchModalOpen"
        class="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-2 sm:px-4"
        @click.self="closeSearchModal"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
          @click="closeSearchModal"
        ></div>

        <!-- Search Modal -->
        <div
          class="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden animate-slide-up max-h-[85vh] flex flex-col"
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-3 sm:p-4 border-b border-neutral-200 dark:border-neutral-800 flex-shrink-0">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h2 class="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">Search</h2>
                <p class="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">Find studies, lessons, and verses</p>
              </div>
            </div>
            <button
              @click="closeSearchModal"
              class="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="Close search"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Search Content - Grows to fill available space -->
          <div class="p-3 sm:p-6 flex-1 overflow-hidden flex flex-col min-h-0">
            <GlobalSearch :modal-mode="true" @search-close="closeSearchModal" />
          </div>

          <!-- Keyboard Hint -->
          <div class="px-3 sm:px-6 pb-3 sm:pb-4 flex items-center justify-between text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 flex-shrink-0 border-t border-neutral-200 dark:border-neutral-800">
            <div class="flex items-center gap-2 sm:gap-4">
              <div class="flex items-center gap-1">
                <kbd class="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[9px] sm:text-xs">Ctrl</kbd>
                <span>+</span>
                <kbd class="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[9px] sm:text-xs">K</kbd>
                <span class="ml-1 hidden xs:inline">to open</span>
              </div>
              <div class="flex items-center gap-1">
                <kbd class="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[9px] sm:text-xs">Esc</kbd>
                <span class="ml-1 hidden xs:inline">to close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useHapticFeedback } from '../composables/useMobileGestures'
import { useTheme } from '../composables/useTheme'
import GlobalSearch from './GlobalSearch.vue'

const router = useRouter()

// Initialize stores
const authStore = useAuthStore()

// Theme management
const { isDarkMode, toggleTheme } = useTheme()

// Touch feedback
const { light, medium } = useHapticFeedback()

const mobileMenuOpen = ref(false)
const userMenuOpen = ref(false)
const searchModalOpen = ref(false)

const toggleSearchModal = () => {
  medium()
  searchModalOpen.value = !searchModalOpen.value
  if (searchModalOpen.value) {
    document.body.style.overflow = 'hidden'
    // Auto-focus search input when modal opens
    setTimeout(() => {
      const input = document.querySelector('input[type="search"]') as HTMLInputElement
      if (input) {
        input.focus()
      }
    }, 100)
  } else {
    document.body.style.overflow = ''
  }
}

const closeSearchModal = () => {
  searchModalOpen.value = false
  document.body.style.overflow = ''
}

// Keyboard shortcut handler
const handleKeyDown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    if (!searchModalOpen.value) {
      toggleSearchModal()
    }
  }
  if (e.key === 'Escape' && searchModalOpen.value) {
    closeSearchModal()
  }
}

onMounted(() => {
  // Set up click handler
  document.addEventListener('click', handleClickOutside)
  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('click', handleClickOutside)
})

const toggleMobileMenu = () => {
  medium()
  mobileMenuOpen.value = !mobileMenuOpen.value
  userMenuOpen.value = false

  // Prevent body scroll when mobile menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  light()
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const toggleUserMenu = () => {
  light()
  userMenuOpen.value = !userMenuOpen.value
  mobileMenuOpen.value = false
}

const closeUserMenu = () => {
  light()
  userMenuOpen.value = false
}

const handleSignOut = () => {
  medium()
  authStore.logout()
  userMenuOpen.value = false
  mobileMenuOpen.value = false
  router.push('/')
}

const handleDonation = () => {
  medium()
  alert('Thank you for your heart to support BibleStem! 🙏\n\n💝 What Your Support Provides:\n• Helps us create more Bible studies\n• Keeps the platform free for everyone\n• Spreads the Gospel freely worldwide\n• As a thank you: Access to 4 deeper studies\n\n✨ All basic studies remain 100% FREE forever!\n\nDonation options coming soon:\n• PayPal • Stripe • Venmo\n\nWe\'re grateful for your prayers and support! ❤️')
}

// Close menus when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  if (!target.closest('.relative')) {
    userMenuOpen.value = false
  }
}

// Single cleanup function for component unmount
onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('click', handleClickOutside)
})
</script>
