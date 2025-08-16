<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <div class="container-base py-8 lg:py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            My Profile
          </h1>
          <p class="text-neutral-600 dark:text-neutral-400">
            Manage your account information and study preferences
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Profile Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Profile Information Card -->
            <div class="card">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Profile Information
                </h2>
                <button
                  v-if="!editingProfile"
                  @click="editingProfile = true"
                  class="btn-secondary text-sm"
                >
                  Edit Profile
                </button>
              </div>

              <form @submit.prevent="saveProfile" class="space-y-6">
                <!-- Profile Avatar -->
                <div class="flex items-center space-x-6">
                  <div class="relative">
                    <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-2xl font-bold">{{ authStore.user?.name.charAt(0) }}</span>
                    </div>
                    <button
                      v-if="editingProfile"
                      type="button"
                      class="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    >
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                      {{ profileForm.name || 'Your Name' }}
                    </h3>
                    <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                      {{ profileForm.email || 'your.email@example.com' }}
                    </p>
                    <div class="flex items-center mt-2">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            :class="authStore.isPremium ? 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200' : 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'">
                        {{ authStore.isPremium ? 'Premium' : 'Free' }} Plan
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Form Fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div>
                    <label for="name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      v-model="profileForm.name"
                      type="text"
                      :disabled="!editingProfile"
                      class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:bg-neutral-50 dark:disabled:bg-neutral-900 disabled:cursor-not-allowed"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      v-model="profileForm.email"
                      type="email"
                      :disabled="!editingProfile"
                      class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:bg-neutral-50 dark:disabled:bg-neutral-900 disabled:cursor-not-allowed"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <!-- Bio -->
                <div v-if="editingProfile">
                  <label for="bio" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Bio (Optional)
                  </label>
                  <textarea
                    id="bio"
                    v-model="profileForm.bio"
                    rows="3"
                    class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us a little about yourself and your Bible study journey..."
                  ></textarea>
                </div>

                <!-- Action Buttons -->
                <div v-if="editingProfile" class="flex items-center justify-end space-x-4 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <button
                    type="button"
                    @click="cancelEdit"
                    class="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn-primary"
                    :disabled="saving"
                  >
                    <span v-if="saving">Saving...</span>
                    <span v-else>Save Changes</span>
                  </button>
                </div>
              </form>
            </div>

            <!-- Study Preferences Card -->
            <div class="card">
              <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
                Study Preferences
              </h2>

              <div class="space-y-6">
                <!-- Notification Settings -->
                <div>
                  <h3 class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                    Notifications
                  </h3>
                  <div class="space-y-3">
                    <label class="flex items-center">
                      <input
                        v-model="preferences.dailyReminders"
                        type="checkbox"
                        class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
                      />
                      <span class="ml-2 text-sm text-neutral-900 dark:text-neutral-100">
                        Daily study reminders
                      </span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="preferences.weeklyProgress"
                        type="checkbox"
                        class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
                      />
                      <span class="ml-2 text-sm text-neutral-900 dark:text-neutral-100">
                        Weekly progress reports
                      </span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="preferences.newStudyAlerts"
                        type="checkbox"
                        class="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
                      />
                      <span class="ml-2 text-sm text-neutral-900 dark:text-neutral-100">
                        New study series alerts
                      </span>
                    </label>
                  </div>
                </div>

                <!-- Study Goals -->
                <div>
                  <h3 class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                    Study Goals
                  </h3>
                  <div>
                    <label for="studyGoal" class="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      Minutes per day
                    </label>
                    <select
                      id="studyGoal"
                      v-model="preferences.dailyGoalMinutes"
                      class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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

                <!-- Save Preferences -->
                <div class="flex justify-end pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <button
                    @click="savePreferences"
                    class="btn-primary"
                    :disabled="savingPreferences"
                  >
                    <span v-if="savingPreferences">Saving...</span>
                    <span v-else>Save Preferences</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Account Security Card -->
            <div class="card">
              <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
                Account Security
              </h2>

              <div class="space-y-6">
                <!-- Password Change -->
                <div>
                  <h3 class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                    Change Password
                  </h3>
                  <button
                    @click="showPasswordForm = !showPasswordForm"
                    class="btn-secondary text-sm"
                  >
                    {{ showPasswordForm ? 'Cancel' : 'Change Password' }}
                  </button>

                  <form v-if="showPasswordForm" @submit.prevent="changePassword" class="mt-4 space-y-4">
                    <div>
                      <label for="currentPassword" class="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        Current Password
                      </label>
                      <input
                        id="currentPassword"
                        v-model="passwordForm.currentPassword"
                        type="password"
                        class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your current password"
                      />
                    </div>
                    <div>
                      <label for="newPassword" class="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        v-model="passwordForm.newPassword"
                        type="password"
                        class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your new password"
                      />
                    </div>
                    <div>
                      <label for="confirmPassword" class="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        id="confirmPassword"
                        v-model="passwordForm.confirmPassword"
                        type="password"
                        class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Confirm your new password"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn-primary text-sm"
                      :disabled="changingPassword"
                    >
                      <span v-if="changingPassword">Updating...</span>
                      <span v-else>Update Password</span>
                    </button>
                  </form>
                </div>

                <!-- Two-Factor Authentication -->
                <div class="pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Two-Factor Authentication
                      </h3>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <button class="btn-secondary text-sm">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <!-- Plan Information -->
            <div class="card">
              <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                Subscription Plan
              </h3>
              
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path v-if="authStore.isPremium" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    <path v-else d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                
                <h4 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                  {{ authStore.isPremium ? 'Premium Plan' : 'Free Plan' }}
                </h4>
                
                <p class="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                  {{ authStore.isPremium ? 'Unlimited access to all studies' : 'Access to free Bible studies' }}
                </p>

                <button v-if="!authStore.isPremium" class="btn-primary w-full text-sm">
                  Upgrade to Premium
                </button>
                <button v-else class="btn-secondary w-full text-sm">
                  Manage Subscription
                </button>
              </div>
            </div>

            <!-- Study Statistics -->
            <div class="card">
              <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                Study Statistics
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-600 dark:text-neutral-400">Studies Completed</span>
                  <span class="text-sm font-medium text-neutral-800 dark:text-neutral-200">{{ completedStudies }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-600 dark:text-neutral-400">Total Study Time</span>
                  <span class="text-sm font-medium text-neutral-800 dark:text-neutral-200">{{ totalStudyTime }} min</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-600 dark:text-neutral-400">Current Streak</span>
                  <span class="text-sm font-medium text-neutral-800 dark:text-neutral-200">{{ currentStreak }} days</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-600 dark:text-neutral-400">Achievements</span>
                  <span class="text-sm font-medium text-neutral-800 dark:text-neutral-200">{{ totalAchievements }}</span>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="card">
              <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                Quick Actions
              </h3>
              
              <div class="space-y-3">
                <router-link to="/my-studies" class="block w-full btn-secondary text-sm text-center">
                  View My Studies
                </router-link>
                <router-link to="/study-series" class="block w-full btn-secondary text-sm text-center">
                  Browse Studies
                </router-link>
                <router-link to="/daily-devotions" class="block w-full btn-secondary text-sm text-center">
                  Daily Devotions
                </router-link>
                <router-link to="/settings" class="block w-full btn-secondary text-sm text-center">
                  Account Settings
                </router-link>
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
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

// Form states
const editingProfile = ref(false)
const saving = ref(false)
const savingPreferences = ref(false)
const showPasswordForm = ref(false)
const changingPassword = ref(false)

// Profile form data
const profileForm = ref({
  name: '',
  email: '',
  bio: ''
})

// Preferences
const preferences = ref({
  dailyReminders: true,
  weeklyProgress: true,
  newStudyAlerts: false,
  dailyGoalMinutes: 20
})

// Password form
const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// Mock statistics (these would come from your stores/API in real app)
const completedStudies = computed(() => 3)
const totalStudyTime = computed(() => 125)
const currentStreak = computed(() => 7)
const totalAchievements = computed(() => 5)

// Initialize form data
onMounted(() => {
  if (authStore.user) {
    profileForm.value = {
      name: authStore.user.name || '',
      email: authStore.user.email || '',
      bio: authStore.user.bio || ''
    }
  }
})

// Profile methods
const saveProfile = async () => {
  saving.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Update auth store
    if (authStore.user) {
      authStore.user.name = profileForm.value.name
      authStore.user.email = profileForm.value.email
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
      bio: authStore.user.bio || ''
    }
  }
}

const savePreferences = async () => {
  savingPreferences.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Save preferences to localStorage or send to API
    localStorage.setItem('userPreferences', JSON.stringify(preferences.value))
    
    // You could show a success toast here
  } catch (error) {
    console.error('Failed to save preferences:', error)
  } finally {
    savingPreferences.value = false
  }
}

const changePassword = async () => {
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    alert('New passwords do not match')
    return
  }

  changingPassword.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    passwordForm.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
    showPasswordForm.value = false
    
    // You could show a success toast here
    alert('Password updated successfully')
  } catch (error) {
    console.error('Failed to change password:', error)
    alert('Failed to change password')
  } finally {
    changingPassword.value = false
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
