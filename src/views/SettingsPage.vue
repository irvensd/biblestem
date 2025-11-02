<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-950">
    <div class="container-base py-6 sm:py-8 lg:py-12">
      <!-- Header -->
      <div class="mb-8">
        <button
          @click="router.back()"
          class="mb-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div class="flex items-center gap-4">
          <div
            class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center"
          >
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100">Settings</h1>
            <p class="text-neutral-600 dark:text-neutral-400">Manage your preferences and account</p>
          </div>
        </div>
      </div>

      <div class="max-w-3xl mx-auto space-y-6">
        <!-- App Settings -->
        <div class="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8">
          <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            App Settings
          </h2>

          <div class="space-y-4">
            <!-- Theme Toggle -->
            <div class="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center"
                >
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">Theme</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Switch between light and dark mode</p>
                </div>
              </div>
              <button
                @click="toggleTheme"
                class="relative inline-flex items-center cursor-pointer"
              >
                <div
                  class="w-14 h-8 rounded-full transition-all duration-300 flex items-center p-1"
                  :class="isDarkMode ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-neutral-300'"
                >
                  <div
                    class="w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300"
                    :class="isDarkMode ? 'translate-x-6' : 'translate-x-0'"
                  >
                    <svg v-if="isDarkMode" class="w-6 h-6 p-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <svg v-else class="w-6 h-6 p-1 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            <!-- Font Size -->
            <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all">
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"
                >
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Text Size</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Adjust reading font size</p>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                  <span>Small</span>
                  <span>Large</span>
                </div>
                <input
                  v-model="fontSize"
                  type="range"
                  min="14"
                  max="20"
                  step="1"
                  class="w-full accent-primary-600"
                  @input="updateFontSize"
                />
                <div class="text-sm text-center text-primary-600 dark:text-primary-400 font-semibold">
                  {{ fontSize }}px
                </div>
              </div>
            </div>

            <!-- Notifications Toggle -->
            <div class="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center"
                >
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">Notifications</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Receive study reminders and updates</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="enableNotifications"
                  class="sr-only peer"
                  @change="updateNotificationSetting"
                />
                <div
                  class="w-14 h-8 rounded-full transition-all duration-300 flex items-center p-1 bg-neutral-300 dark:bg-neutral-700 peer-checked:bg-primary-600"
                >
                  <div
                    class="w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 peer-checked:translate-x-6"
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- Reading Preferences -->
        <div class="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8">
          <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            Reading Preferences
          </h2>

          <div class="space-y-4">
            <!-- Bible Translation -->
            <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all">
              <label class="block font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                Bible Translation
              </label>
              <select
                v-model="bibleTranslation"
                @change="updateTranslation"
                class="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900/50 transition-all"
              >
                <option value="KJV">King James Version (KJV)</option>
                <option value="NIV">New International Version (NIV)</option>
                <option value="ESV">English Standard Version (ESV)</option>
                <option value="NASB">New American Standard Bible (NASB)</option>
                <option value="NLT">New Living Translation (NLT)</option>
              </select>
            </div>

            <!-- Greek/Hebrew Display -->
            <div class="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">Show Original Languages</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Display Greek/Hebrew words by default</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="showOriginalLanguages"
                  @change="updateLanguageDisplay"
                  class="sr-only peer"
                />
                <div
                  class="w-14 h-8 rounded-full transition-all duration-300 flex items-center p-1 bg-neutral-300 dark:bg-neutral-700 peer-checked:bg-primary-600"
                >
                  <div
                    class="w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 peer-checked:translate-x-6"
                  ></div>
                </div>
              </label>
            </div>

            <!-- Auto-save Notes -->
            <div class="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center"
                >
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 0m0-5V9m0 0V5m0 4h4m-4 0L9 9m-4 0h4m7 4v.01M15 17h.01M18 17h.01M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12H6l2-3 2 3 3-5 2 5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">Auto-save Notes</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Automatically save notes as you type</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="autoSaveNotes"
                  @change="updateAutoSave"
                  class="sr-only peer"
                />
                <div
                  class="w-14 h-8 rounded-full transition-all duration-300 flex items-center p-1 bg-neutral-300 dark:bg-neutral-700 peer-checked:bg-green-600"
                >
                  <div
                    class="w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 peer-checked:translate-x-6"
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- Privacy & Data -->
        <div class="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8">
          <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            Privacy & Data
          </h2>

          <div class="space-y-4">
            <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all cursor-pointer"
                 @click="exportData">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <svg class="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <div>
                    <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">Export My Data</h3>
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">Download your study data and notes</p>
                  </div>
                </div>
                <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all cursor-pointer"
                 @click="deleteAccount">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <div>
                    <h3 class="font-semibold text-red-600 dark:text-red-400">Delete Account</h3>
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">Permanently delete your account and all data</p>
                  </div>
                </div>
                <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Save Changes Button -->
        <div class="flex justify-end gap-4 pt-4">
          <button
            @click="router.back()"
            class="px-6 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          >
            Cancel
          </button>
          <button
            @click="saveSettings"
            class="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme'

const router = useRouter()

// Theme management
const { isDarkMode, toggleTheme } = useTheme()

// Settings state
const fontSize = ref(16)
const enableNotifications = ref(true)
const bibleTranslation = ref('KJV')
const showOriginalLanguages = ref(false)
const autoSaveNotes = ref(true)

// Load settings from localStorage
onMounted(() => {
  const savedSettings = localStorage.getItem('biblestem_settings')
  if (savedSettings) {
    try {
      const settings = JSON.parse(savedSettings)
      fontSize.value = settings.fontSize || 16
      enableNotifications.value = settings.enableNotifications !== false
      bibleTranslation.value = settings.bibleTranslation || 'KJV'
      showOriginalLanguages.value = settings.showOriginalLanguages || false
      autoSaveNotes.value = settings.autoSaveNotes !== false
    } catch (error) {
      console.error('Error loading settings:', error)
    }
  }
})

const updateFontSize = () => {
  document.documentElement.style.fontSize = `${fontSize.value}px`
}

const updateNotificationSetting = () => {
  // TODO: Implement notification permission request
  if (enableNotifications.value && 'Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission()
  }
}

const updateTranslation = () => {
  // Settings saved automatically on change
}

const updateLanguageDisplay = () => {
  // Settings saved automatically on change
}

const updateAutoSave = () => {
  // Settings saved automatically on change
}

const saveSettings = () => {
  const settings = {
    fontSize: fontSize.value,
    enableNotifications: enableNotifications.value,
    bibleTranslation: bibleTranslation.value,
    showOriginalLanguages: showOriginalLanguages.value,
    autoSaveNotes: autoSaveNotes.value,
  }

  localStorage.setItem('biblestem_settings', JSON.stringify(settings))
  alert('Settings saved successfully!')
}

const exportData = () => {
  // TODO: Implement data export
  alert('Data export feature coming soon!')
}

const deleteAccount = () => {
  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
    // TODO: Implement account deletion
    alert('Account deletion feature coming soon!')
  }
}
</script>
