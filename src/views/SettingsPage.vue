<template>
  <div
    class="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800"
  >
    <!-- Hero Section with Background Pattern -->
    <div class="relative overflow-hidden">
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 bg-grid-neutral-100/50 dark:bg-grid-neutral-800/50"
        style="mask-image: radial-gradient(ellipse at center, transparent 20%, black)"
      ></div>

      <!-- Hero Content -->
      <div class="relative container-base pt-8 pb-12 lg:pt-16 lg:pb-20">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <div class="relative inline-block">
              <div
                class="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-500/20"
              >
                <svg
                  class="w-12 h-12 lg:w-16 lg:h-16 text-white"
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
              </div>
            </div>

            <h1
              class="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 dark:from-white dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent mb-3"
            >
              Settings & Preferences
            </h1>
            <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
              Customize your BibleStem experience
            </p>
            <div
              class="flex items-center justify-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400"
            >
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                Changes save automatically
              </span>
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Your privacy is protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container-base pb-20">
      <div class="max-w-6xl mx-auto">
        <!-- Settings Navigation -->
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <button
            v-for="section in settingsSections"
            :key="section.id"
            @click="activeSection = section.id"
            class="px-6 py-3 rounded-xl font-medium transition-all duration-200"
            :class="
              activeSection === section.id
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                : 'bg-white/70 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-neutral-200'
            "
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="section.icon"
              />
            </svg>
            {{ section.name }}
          </button>
        </div>

        <!-- Settings Content -->
        <div class="space-y-8">
          <!-- Account Settings -->
          <div v-if="activeSection === 'account'" class="space-y-6">
            <!-- Account Information -->
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  Account Information
                </h2>
                <p class="text-neutral-600 dark:text-neutral-400">
                  Manage your basic account details
                </p>
              </div>
              <div class="p-8 space-y-6">
                <div class="flex items-center space-x-6">
                  <div
                    class="w-20 h-20 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <span class="text-white text-2xl font-bold">{{
                      authStore.value.user?.name?.charAt(0) || 'U'
                    }}</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                      {{ authStore.value.user?.name || 'Your Name' }}
                    </h3>
                    <p class="text-neutral-600 dark:text-neutral-400 mb-2">
                      {{ authStore.value.user?.email }}
                    </p>
                    <div class="flex items-center space-x-3">
                      <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                        :class="
                          authStore.value.isPremium
                            ? 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 dark:from-amber-900/30 dark:to-orange-900/30 dark:text-amber-200'
                            : 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
                        "
                      >
                        {{ authStore.value.isPremium ? '✨ Premium Member' : 'Free Member' }}
                      </span>
                      <span class="text-sm text-neutral-500 dark:text-neutral-400">
                        Member since {{ formatDate(authStore.value.user?.joinDate) }}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                >
                  <div>
                    <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                      Email Verification
                    </h4>
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">
                      Your email address is verified
                    </p>
                  </div>
                  <div class="flex items-center text-green-600 dark:text-green-400">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-sm font-medium">Verified</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Subscription Management -->
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  Subscription
                </h2>
                <p class="text-neutral-600 dark:text-neutral-400">Manage your plan and billing</p>
              </div>
              <div class="p-8">
                <div
                  class="flex items-center justify-between p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl border border-primary-200 dark:border-primary-800"
                >
                  <div class="flex items-center">
                    <div
                      class="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                      :class="
                        authStore.value.isPremium
                          ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                          : 'bg-gradient-to-br from-neutral-400 to-neutral-500'
                      "
                    >
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          v-if="authStore.value.isPremium"
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                        <path
                          v-else
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                        {{ authStore.value.isPremium ? 'Premium Plan' : 'Free Plan' }}
                      </h3>
                      <p class="text-neutral-600 dark:text-neutral-400">
                        {{
                          authStore.value.isPremium
                            ? '$9.99/month • Unlimited access'
                            : 'Limited access to free studies'
                        }}
                      </p>
                    </div>
                  </div>
                  <button
                    v-if="!authStore.value.isPremium"
                    class="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                  >
                    ✨ Upgrade Now
                  </button>
                  <button
                    v-else
                    class="px-6 py-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-200 font-medium"
                  >
                    Manage Plan
                  </button>
                </div>
              </div>
            </div>

            <!-- Account Actions -->
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  Account Actions
                </h2>
                <p class="text-neutral-600 dark:text-neutral-400">
                  Manage your session and account
                </p>
              </div>
              <div class="p-8">
                <div
                  class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                >
                  <div>
                    <h4 class="font-medium text-neutral-800 dark:text-neutral-200">Sign Out</h4>
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">
                      Sign out of your account on this device
                    </p>
                  </div>
                  <button
                    @click="handleSignOut"
                    :disabled="signingOut"
                    class="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="signingOut" class="flex items-center">
                      <svg class="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing out...
                    </span>
                    <span v-else>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Privacy Settings -->
          <div v-if="activeSection === 'privacy'" class="space-y-6">
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  Privacy & Data
                </h2>
                <p class="text-neutral-600 dark:text-neutral-400">
                  Control your data and privacy settings
                </p>
              </div>
              <div class="p-8 space-y-6">
                <div class="space-y-4">
                  <div
                    class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                  >
                    <div class="flex-1">
                      <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                        Profile Visibility
                      </h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">
                        Control who can see your study progress
                      </p>
                    </div>
                    <select
                      class="px-4 py-2 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-600 rounded-xl text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="private">Private</option>
                      <option value="friends">Friends Only</option>
                      <option value="public">Public</option>
                    </select>
                  </div>

                  <div
                    class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                  >
                    <div class="flex-1">
                      <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                        Analytics & Tracking
                      </h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">
                        Help us improve by sharing usage data
                      </p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input
                        v-model="privacySettings.analytics"
                        type="checkbox"
                        class="sr-only peer"
                      />
                      <div
                        class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"
                      ></div>
                    </label>
                  </div>

                  <div
                    class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                  >
                    <div class="flex-1">
                      <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                        Data Export
                      </h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">
                        Download all your data in JSON format
                      </p>
                    </div>
                    <button
                      class="px-4 py-2 bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-300 dark:hover:bg-neutral-500 transition-colors font-medium"
                    >
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Notifications -->
          <div v-if="activeSection === 'notifications'" class="space-y-6">
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  Notifications
                </h2>
                <p class="text-neutral-600 dark:text-neutral-400">
                  Manage how we communicate with you
                </p>
              </div>
              <div class="p-8 space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="p-6 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <div
                          class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3"
                        >
                          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                            Email Notifications
                          </h4>
                          <p class="text-sm text-neutral-600 dark:text-neutral-400">
                            Receive updates via email
                          </p>
                        </div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          v-model="notificationSettings.email"
                          type="checkbox"
                          class="sr-only peer"
                        />
                        <div
                          class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"
                        ></div>
                      </label>
                    </div>
                    <div class="space-y-3">
                      <label class="flex items-center text-sm">
                        <input
                          v-model="notificationSettings.dailyReminders"
                          type="checkbox"
                          class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 mr-2"
                        />
                        Daily study reminders
                      </label>
                      <label class="flex items-center text-sm">
                        <input
                          v-model="notificationSettings.weeklyProgress"
                          type="checkbox"
                          class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 mr-2"
                        />
                        Weekly progress reports
                      </label>
                      <label class="flex items-center text-sm">
                        <input
                          v-model="notificationSettings.newContent"
                          type="checkbox"
                          class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 mr-2"
                        />
                        New study announcements
                      </label>
                    </div>
                  </div>

                  <div class="p-6 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <div
                          class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3"
                        >
                          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM9 18H5v-6h4v6zm2 0v-6h4v6h-4z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                            Push Notifications
                          </h4>
                          <p class="text-sm text-neutral-600 dark:text-neutral-400">
                            Browser notifications
                          </p>
                        </div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          v-model="notificationSettings.push"
                          type="checkbox"
                          class="sr-only peer"
                        />
                        <div
                          class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"
                        ></div>
                      </label>
                    </div>
                    <div class="space-y-3">
                      <label class="flex items-center text-sm">
                        <input
                          v-model="notificationSettings.achievements"
                          type="checkbox"
                          class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 mr-2"
                        />
                        Achievement unlocked
                      </label>
                      <label class="flex items-center text-sm">
                        <input
                          v-model="notificationSettings.streaks"
                          type="checkbox"
                          class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 mr-2"
                        />
                        Streak milestones
                      </label>
                      <label class="flex items-center text-sm">
                        <input
                          v-model="notificationSettings.reminders"
                          type="checkbox"
                          class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 mr-2"
                        />
                        Study reminders
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  class="flex justify-end pt-6 border-t border-neutral-200 dark:border-neutral-700"
                >
                  <button
                    @click="saveNotificationSettings"
                    class="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                    :disabled="savingNotifications"
                  >
                    <span v-if="savingNotifications" class="flex items-center">
                      <svg class="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Saving...
                    </span>
                    <span v-else>Save Preferences</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Appearance -->
          <div v-if="activeSection === 'appearance'" class="space-y-6">
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  Appearance & Display
                </h2>
                <p class="text-neutral-600 dark:text-neutral-400">
                  Customize how BibleStem looks and feels
                </p>
              </div>
              <div class="p-8 space-y-6">
                <!-- Theme Selection -->
                <div>
                  <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                    Theme
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div
                      class="p-4 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl cursor-pointer hover:border-primary-500 transition-colors"
                      :class="
                        appearanceSettings.theme === 'light'
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : ''
                      "
                    >
                      <div
                        class="w-full h-20 bg-white rounded-lg mb-3 border border-neutral-200"
                      ></div>
                      <h4 class="font-medium text-neutral-800 dark:text-neutral-200">Light Mode</h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">
                        Clean and bright interface
                      </p>
                    </div>
                    <div
                      class="p-4 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl cursor-pointer hover:border-primary-500 transition-colors"
                      :class="
                        appearanceSettings.theme === 'dark'
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : ''
                      "
                    >
                      <div class="w-full h-20 bg-neutral-800 rounded-lg mb-3"></div>
                      <h4 class="font-medium text-neutral-800 dark:text-neutral-200">Dark Mode</h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">Easy on the eyes</p>
                    </div>
                    <div
                      class="p-4 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl cursor-pointer hover:border-primary-500 transition-colors"
                      :class="
                        appearanceSettings.theme === 'system'
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : ''
                      "
                    >
                      <div
                        class="w-full h-20 bg-gradient-to-r from-white to-neutral-800 rounded-lg mb-3"
                      ></div>
                      <h4 class="font-medium text-neutral-800 dark:text-neutral-200">System</h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">
                        Follows system preference
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Font Size -->
                <div>
                  <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                    Reading Preferences
                  </h3>
                  <div class="space-y-4">
                    <div
                      class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                    >
                      <div>
                        <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                          Font Size
                        </h4>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">
                          Adjust text size for comfortable reading
                        </p>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-sm">A</span>
                        <input
                          type="range"
                          min="12"
                          max="20"
                          v-model="appearanceSettings.fontSize"
                          class="w-24"
                        />
                        <span class="text-lg">A</span>
                      </div>
                    </div>

                    <div
                      class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                    >
                      <div>
                        <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                          Reduce Motion
                        </h4>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">
                          Minimize animations and transitions
                        </p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          v-model="appearanceSettings.reduceMotion"
                          type="checkbox"
                          class="sr-only peer"
                        />
                        <div
                          class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"
                        ></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Security -->
          <div v-if="activeSection === 'security'" class="space-y-6">
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  Security & Access
                </h2>
                <p class="text-neutral-600 dark:text-neutral-400">Protect your account and data</p>
              </div>
              <div class="p-8 space-y-6">
                <!-- Password Change -->
                <div class="p-6 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <h4 class="font-medium text-neutral-800 dark:text-neutral-200">Password</h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">
                        Last changed 3 months ago
                      </p>
                    </div>
                    <button
                      @click="showPasswordForm = !showPasswordForm"
                      class="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
                    >
                      Change Password
                    </button>
                  </div>

                  <form
                    v-if="showPasswordForm"
                    @submit.prevent="changePassword"
                    class="mt-4 space-y-4"
                  >
                    <input
                      v-model="passwordForm.currentPassword"
                      type="password"
                      placeholder="Current password"
                      class="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <input
                      v-model="passwordForm.newPassword"
                      type="password"
                      placeholder="New password"
                      class="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <input
                      v-model="passwordForm.confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                      class="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <div class="flex space-x-3">
                      <button
                        type="submit"
                        class="px-6 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
                        :disabled="changingPassword"
                      >
                        Update Password
                      </button>
                      <button
                        type="button"
                        @click="showPasswordForm = false"
                        class="px-6 py-2 bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-300 dark:hover:bg-neutral-500 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>

                <!-- Two-Factor Authentication -->
                <div class="p-6 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="font-medium text-neutral-800 dark:text-neutral-200">
                        Two-Factor Authentication
                      </h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <button
                      class="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium"
                    >
                      Enable 2FA
                    </button>
                  </div>
                </div>

                <!-- Active Sessions -->
                <div class="p-6 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                  <h4 class="font-medium text-neutral-800 dark:text-neutral-200 mb-4">
                    Active Sessions
                  </h4>
                  <div class="space-y-3">
                    <div
                      class="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-lg"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3"
                        >
                          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fill-rule="evenodd"
                              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-4l-3 3-3-3H5a2 2 0 01-2-2V5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p class="font-medium text-neutral-800 dark:text-neutral-200">
                            Current Session
                          </p>
                          <p class="text-sm text-neutral-600 dark:text-neutral-400">
                            Chrome on macOS • New York, US
                          </p>
                        </div>
                      </div>
                      <span class="text-sm text-green-600 dark:text-green-400">Active now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Danger Zone -->
            <div
              class="bg-red-50 dark:bg-red-900/20 backdrop-blur-xl rounded-3xl border border-red-200 dark:border-red-800/50 shadow-xl overflow-hidden"
            >
              <div
                class="bg-gradient-to-r from-red-500/10 to-red-600/10 px-8 py-6 border-b border-red-200 dark:border-red-800"
              >
                <h2 class="text-2xl font-bold text-red-800 dark:text-red-200 mb-1">Danger Zone</h2>
                <p class="text-red-600 dark:text-red-400">Irreversible actions</p>
              </div>
              <div class="p-8">
                <div
                  class="flex items-center justify-between p-6 bg-white dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800"
                >
                  <div>
                    <h4 class="font-medium text-red-800 dark:text-red-200">Delete Account</h4>
                    <p class="text-sm text-red-600 dark:text-red-400">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <button
                    class="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()

// Initialize stores
const authStore = useAuthStore()

// Initialize stores on mount
onMounted(async () => {
  try {
    // Initialize auth if needed
    if (!authStore.isInitialized) {
      await authStore.initializeAuth()
    }
  } catch (error) {
    console.warn('Failed to initialize auth store in SettingsPage:', error)
  }
})

// Active section
const activeSection = ref('account')

// Settings sections
const settingsSections = [
  {
    id: 'account',
    name: 'Account',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    id: 'privacy',
    name: 'Privacy',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    id: 'notifications',
    name: 'Notifications',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    id: 'appearance',
    name: 'Appearance',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z',
  },
  {
    id: 'security',
    name: 'Security',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
]

// Settings states
const savingNotifications = ref(false)
const showPasswordForm = ref(false)
const changingPassword = ref(false)
const signingOut = ref(false)

// Privacy settings
const privacySettings = ref({
  analytics: true,
  profileVisibility: 'private',
})

// Notification settings
const notificationSettings = ref({
  email: true,
  push: false,
  dailyReminders: true,
  weeklyProgress: true,
  newContent: false,
  achievements: true,
  streaks: true,
  reminders: true,
})

// Appearance settings
const appearanceSettings = ref({
  theme: 'system',
  fontSize: 16,
  reduceMotion: false,
})

// Password form
const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

// Format date helper
const formatDate = (dateString?: string) => {
  if (!dateString) return 'Recently'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

// Methods
const saveNotificationSettings = async () => {
  savingNotifications.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings.value))
  } catch (error) {
    console.error('Failed to save notification settings:', error)
  } finally {
    savingNotifications.value = false
  }
}

const changePassword = async () => {
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    alert('New passwords do not match')
    return
  }

  changingPassword.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    passwordForm.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
    showPasswordForm.value = false
    alert('Password updated successfully')
  } catch (error) {
    console.error('Failed to change password:', error)
    alert('Failed to change password')
  } finally {
    changingPassword.value = false
  }
}

const handleSignOut = async () => {
  signingOut.value = true
  try {
    await authStore.value.logout()
    router.push('/sign-in')
  } catch (error) {
    console.error('Failed to sign out:', error)
  } finally {
    signingOut.value = false
  }
}

// Load saved settings
const loadSettings = () => {
  const savedNotifications = localStorage.getItem('notificationSettings')
  if (savedNotifications) {
    notificationSettings.value = {
      ...notificationSettings.value,
      ...JSON.parse(savedNotifications),
    }
  }
}

onMounted(() => {
  loadSettings()
})
</script>

<style scoped>
.bg-grid-neutral-100\/50 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23e5e7eb'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
}

.dark .bg-grid-neutral-800\/50 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23374151'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
}
</style>
