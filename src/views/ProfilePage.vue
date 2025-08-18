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
                class="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary-500/20"
              >
                <span class="text-white text-3xl lg:text-4xl font-bold">{{
                  authStore.user?.name?.charAt(0) || 'U'
                }}</span>
              </div>
              <!-- Status Badge -->
              <div
                class="absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold"
                :class="
                  authStore.isPremium
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-2 border-neutral-200 dark:border-neutral-700'
                "
              >
                {{ authStore.isPremium ? '✨ Premium' : 'Free' }}
              </div>
            </div>

            <h1
              class="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 dark:from-white dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent mb-3"
            >
              {{ authStore.user?.name || 'Your Profile' }}
            </h1>
            <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
              {{ authStore.user?.email }}
            </p>
            <div
              class="flex items-center justify-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400"
            >
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Member since {{ formatDate(authStore.user?.joinDate) }}
              </span>
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                {{ completedStudies }} studies completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container-base pb-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <!-- Main Content -->
          <div class="xl:col-span-3 space-y-8">
            <!-- Profile Information -->
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <!-- Card Header -->
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                      Profile Information
                    </h2>
                    <p class="text-neutral-600 dark:text-neutral-400">
                      Manage your personal details and preferences
                    </p>
                  </div>
                  <button
                    v-if="!editingProfile"
                    @click="editingProfile = true"
                    class="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                  >
                    <svg
                      class="w-4 h-4 mr-2 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    Edit Profile
                  </button>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-8">
                <form @submit.prevent="saveProfile" class="space-y-8">
                  <!-- Profile Avatar Section -->
                  <div class="flex items-start space-x-6">
                    <div class="relative">
                      <div
                        class="w-20 h-20 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg"
                      >
                        <span class="text-white text-2xl font-bold">{{
                          profileForm.name?.charAt(0) || 'U'
                        }}</span>
                      </div>
                      <button
                        v-if="editingProfile"
                        type="button"
                        class="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400 rounded-full flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-lg"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div class="flex-1 space-y-4">
                      <div>
                        <h3
                          class="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-1"
                        >
                          {{ profileForm.name || 'Your Name' }}
                        </h3>
                        <p class="text-neutral-600 dark:text-neutral-400">
                          {{ profileForm.email || 'your.email@example.com' }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Form Fields -->
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Name -->
                    <div class="space-y-2">
                      <label
                        for="name"
                        class="block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        v-model="profileForm.name"
                        type="text"
                        :disabled="!editingProfile"
                        class="w-full px-4 py-4 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 disabled:bg-neutral-50 dark:disabled:bg-neutral-900 disabled:cursor-not-allowed placeholder-neutral-400 dark:placeholder-neutral-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <!-- Email -->
                    <div class="space-y-2">
                      <label
                        for="email"
                        class="block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        v-model="profileForm.email"
                        type="email"
                        :disabled="!editingProfile"
                        class="w-full px-4 py-4 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 disabled:bg-neutral-50 dark:disabled:bg-neutral-900 disabled:cursor-not-allowed placeholder-neutral-400 dark:placeholder-neutral-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <!-- Bio -->
                  <div v-if="editingProfile" class="space-y-2">
                    <label
                      for="bio"
                      class="block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      Bio <span class="text-neutral-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="bio"
                      v-model="profileForm.bio"
                      rows="4"
                      class="w-full px-4 py-4 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 placeholder-neutral-400 dark:placeholder-neutral-500 resize-none"
                      placeholder="Tell us about your Bible study journey and spiritual interests..."
                    ></textarea>
                  </div>

                  <!-- Action Buttons -->
                  <div
                    v-if="editingProfile"
                    class="flex items-center justify-end space-x-4 pt-6 border-t border-neutral-200 dark:border-neutral-700"
                  >
                    <button
                      type="button"
                      @click="cancelEdit"
                      class="px-6 py-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-200 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      :disabled="saving"
                    >
                      <span v-if="saving" class="flex items-center">
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
                      <span v-else>Save Changes</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Study Preferences -->
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <!-- Card Header -->
              <div
                class="bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50"
              >
                <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  Study Preferences
                </h2>
                <p class="text-neutral-600 dark:text-neutral-400">
                  Customize your learning experience
                </p>
              </div>

              <!-- Card Content -->
              <div class="p-8 space-y-8">
                <!-- Notifications -->
                <div>
                  <h3
                    class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center"
                  >
                    <svg
                      class="w-5 h-5 mr-2 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                      />
                    </svg>
                    Notifications
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label
                      class="flex items-center p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <input
                        v-model="preferences.dailyReminders"
                        type="checkbox"
                        class="w-5 h-5 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
                      />
                      <div class="ml-3">
                        <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                          >Daily Reminders</span
                        >
                        <p class="text-xs text-neutral-500 dark:text-neutral-400">
                          Get reminded to study daily
                        </p>
                      </div>
                    </label>
                    <label
                      class="flex items-center p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <input
                        v-model="preferences.weeklyProgress"
                        type="checkbox"
                        class="w-5 h-5 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
                      />
                      <div class="ml-3">
                        <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                          >Weekly Reports</span
                        >
                        <p class="text-xs text-neutral-500 dark:text-neutral-400">
                          See your weekly progress
                        </p>
                      </div>
                    </label>
                    <label
                      class="flex items-center p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <input
                        v-model="preferences.newStudyAlerts"
                        type="checkbox"
                        class="w-5 h-5 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
                      />
                      <div class="ml-3">
                        <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                          >New Studies</span
                        >
                        <p class="text-xs text-neutral-500 dark:text-neutral-400">
                          Be notified of new content
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Study Goals -->
                <div>
                  <h3
                    class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center"
                  >
                    <svg
                      class="w-5 h-5 mr-2 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Daily Goal
                  </h3>
                  <div class="bg-neutral-50 dark:bg-neutral-700/50 rounded-xl p-6">
                    <label
                      for="studyGoal"
                      class="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3"
                    >
                      How many minutes would you like to study each day?
                    </label>
                    <select
                      id="studyGoal"
                      v-model="preferences.dailyGoalMinutes"
                      class="w-full px-4 py-4 rounded-xl border-2 border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    >
                      <option value="10">10 minutes</option>
                      <option value="15">15 minutes</option>
                      <option value="20">20 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">1 hour</option>
                    </select>
                  </div>
                </div>

                <!-- Save Button -->
                <div
                  class="flex justify-end pt-6 border-t border-neutral-200 dark:border-neutral-700"
                >
                  <button
                    @click="savePreferences"
                    class="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium disabled:opacity-50"
                    :disabled="savingPreferences"
                  >
                    <span v-if="savingPreferences" class="flex items-center">
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

          <!-- Sidebar -->
          <div class="xl:col-span-1 space-y-6">
            <!-- Plan Card -->
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div class="p-6">
                <div class="text-center">
                  <div
                    class="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                    :class="
                      authStore.isPremium
                        ? 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500'
                        : 'bg-gradient-to-br from-neutral-400 to-neutral-500'
                    "
                  >
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        v-if="authStore.isPremium"
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

                  <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                    {{ authStore.isPremium ? 'Premium Member' : 'Free Member' }}
                  </h3>

                  <p class="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
                    {{
                      authStore.isPremium
                        ? 'Unlimited access to all content'
                        : 'Access to free Bible studies'
                    }}
                  </p>

                  <button
                    v-if="!authStore.isPremium"
                    class="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                  >
                    ✨ Upgrade to Premium
                  </button>
                  <button
                    v-else
                    class="w-full px-6 py-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-200 font-medium"
                  >
                    Manage Subscription
                  </button>
                </div>
              </div>
            </div>

            <!-- Stats Card -->
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div class="p-6">
                <h3
                  class="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-6 flex items-center"
                >
                  <svg
                    class="w-5 h-5 mr-2 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  Your Progress
                </h3>

                <div class="space-y-4">
                  <div
                    class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3"
                      >
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span class="text-sm text-neutral-600 dark:text-neutral-400">Studies</span>
                        <p class="font-semibold text-neutral-800 dark:text-neutral-200">
                          {{ completedStudies }} completed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3"
                      >
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span class="text-sm text-neutral-600 dark:text-neutral-400"
                          >Study Time</span
                        >
                        <p class="font-semibold text-neutral-800 dark:text-neutral-200">
                          {{ totalStudyTime }} min
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3"
                      >
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span class="text-sm text-neutral-600 dark:text-neutral-400">Streak</span>
                        <p class="font-semibold text-neutral-800 dark:text-neutral-200">
                          {{ currentStreak }} days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div
              class="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl shadow-neutral-900/5 dark:shadow-black/20 overflow-hidden"
            >
              <div class="p-6">
                <h3 class="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Quick Actions
                </h3>

                <div class="space-y-3">
                  <router-link
                    to="/my-studies"
                    class="flex items-center w-full p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200 group"
                  >
                    <svg
                      class="w-5 h-5 text-primary-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span
                      class="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                      >My Studies</span
                    >
                  </router-link>

                  <router-link
                    to="/study-series"
                    class="flex items-center w-full p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200 group"
                  >
                    <svg
                      class="w-5 h-5 text-primary-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                      />
                    </svg>
                    <span
                      class="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                      >Browse Studies</span
                    >
                  </router-link>

                  <router-link
                    to="/daily-devotions"
                    class="flex items-center w-full p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200 group"
                  >
                    <svg
                      class="w-5 h-5 text-primary-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                      >Daily Devotions</span
                    >
                  </router-link>
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
import { ref, computed, onMounted } from 'vue'

// Initialize authStore safely
const authStore = ref({
  isAuthenticated: false,
  user: null,
  isPremium: false,
  updateProfile: () => Promise.resolve(),
})

// Initialize the real store when component mounts
onMounted(async () => {
  try {
    const { useAuthStore } = await import('../stores/auth')
    const realAuthStore = useAuthStore()
    authStore.value = realAuthStore
  } catch (error) {
    console.warn('Failed to initialize auth store in ProfilePage:', error)
  }
})

// Form states
const editingProfile = ref(false)
const saving = ref(false)
const savingPreferences = ref(false)

// Profile form data
const profileForm = ref({
  name: '',
  email: '',
  bio: '',
})

// Preferences
const preferences = ref({
  dailyReminders: true,
  weeklyProgress: true,
  newStudyAlerts: false,
  dailyGoalMinutes: 20,
})

// Mock statistics (these would come from your stores/API in real app)
const completedStudies = computed(() => 3)
const totalStudyTime = computed(() => 125)
const currentStreak = computed(() => 7)

// Format date helper
const formatDate = (dateString?: string) => {
  if (!dateString) return 'Recently'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

// Initialize form data
onMounted(() => {
  if (authStore.user) {
    profileForm.value = {
      name: authStore.user.name || '',
      email: authStore.user.email || '',
      bio: authStore.user.bio || '',
    }
  }
})

// Profile methods
const saveProfile = async () => {
  saving.value = true
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Update auth store
    if (authStore.user) {
      authStore.user.name = profileForm.value.name
      authStore.user.email = profileForm.value.email
      authStore.user.bio = profileForm.value.bio
    }

    editingProfile.value = false
    // You could show a success toast here
  } catch (error) {
    console.error('Failed to save profile:', error)
    // You could show an error toast here
  } finally {
    saving.value = false
  }
}

const cancelEdit = () => {
  editingProfile.value = false
  // Reset form to current user data
  if (authStore.user) {
    profileForm.value = {
      name: authStore.user.name || '',
      email: authStore.user.email || '',
      bio: authStore.user.bio || '',
    }
  }
}

const savePreferences = async () => {
  savingPreferences.value = true
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Save preferences to localStorage or send to API
    localStorage.setItem('userPreferences', JSON.stringify(preferences.value))

    // You could show a success toast here
  } catch (error) {
    console.error('Failed to save preferences:', error)
  } finally {
    savingPreferences.value = false
  }
}

// Load saved preferences
const loadPreferences = () => {
  const saved = localStorage.getItem('userPreferences')
  if (saved) {
    preferences.value = { ...preferences.value, ...JSON.parse(saved) }
  }
}

onMounted(() => {
  loadPreferences()
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
