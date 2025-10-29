<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-950">
    <div class="container-base py-6 sm:py-8 lg:py-12">
      <!-- Back Button -->
      <button
        @click="router.back()"
        class="mb-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <div v-if="authStore.user" class="max-w-4xl mx-auto">
        <!-- Profile Header -->
        <div
          class="bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
        >
          <div class="relative z-10">
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <!-- Avatar -->
              <div class="relative">
                <div
                  class="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden"
                >
                  <img
                    v-if="authStore.user.avatar"
                    :src="authStore.user.avatar"
                    :alt="authStore.user.name"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center">
                    <span class="text-4xl font-bold">{{ authStore.user.name.charAt(0) }}</span>
                  </div>
                </div>
                <button
                  @click="editMode = !editMode"
                  class="absolute -bottom-2 -right-2 w-10 h-10 bg-white text-primary-600 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
              </div>

              <!-- User Info -->
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h1 class="text-3xl font-bold">{{ authStore.user.name }}</h1>
                  <div
                    v-if="authStore.hasSupported"
                    class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    Supporter
                  </div>
                  <div
                    v-else
                    class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                  >
                    Member
                  </div>
                </div>
                <p class="text-blue-100 mb-3">{{ authStore.user.email }}</p>
                <p v-if="authStore.user.bio" class="text-white/90">{{ authStore.user.bio }}</p>
                <p v-else class="text-white/70 italic">Add a bio to tell others about yourself...</p>
              </div>
            </div>
          </div>

          <!-- Decorative background elements -->
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute -left-10 -bottom-10 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>
        </div>

        <!-- Edit Profile Section -->
        <div v-if="editMode" class="bg-white dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Edit Profile</h2>
            <button
              @click="editMode = false"
              class="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <svg class="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form @submit.prevent="handleUpdateProfile" class="space-y-6">
            <!-- Name Input -->
            <div>
              <label class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Full Name
              </label>
              <input
                v-model="editForm.name"
                type="text"
                class="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900/50 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <!-- Email (Read Only) -->
            <div>
              <label class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Email Address
              </label>
              <input
                :value="authStore.user.email"
                type="email"
                disabled
                class="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 cursor-not-allowed"
              />
              <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Email cannot be changed
              </p>
            </div>

            <!-- Bio Input -->
            <div>
              <label class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Bio
              </label>
              <textarea
                v-model="editForm.bio"
                rows="4"
                class="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900/50 transition-all resize-none"
                placeholder="Tell others about yourself..."
              ></textarea>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center justify-end gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <button
                type="button"
                @click="editMode = false"
                class="px-6 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isSaving"
                class="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <svg
                  v-if="isSaving"
                  class="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {{ isSaving ? 'Saving...' : 'Save Changes' }}
              </button>
            </div>
          </form>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <!-- Studies Completed -->
          <div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              {{ authStore.user.studiesCompleted }}
            </div>
            <div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Studies Completed
            </div>
          </div>

          <!-- Member Since -->
          <div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              {{ formatJoinDate(authStore.user.joinDate) }}
            </div>
            <div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Member Since</div>
          </div>

          <!-- Supporter Status -->
          <div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-12 h-12 rounded-lg flex items-center justify-center"
                :class="authStore.hasSupported ? 'bg-gradient-to-br from-red-500 to-pink-600' : 'bg-gradient-to-br from-blue-500 to-indigo-600'"
              >
                <svg v-if="authStore.hasSupported" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
                <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              {{ authStore.hasSupported ? '❤️ Supporter' : 'Member' }}
            </div>
            <div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Account Status</div>
          </div>

          <!-- Email Verified -->
          <div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <svg
                  v-if="authStore.user.emailVerified"
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-else
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="text-lg font-bold mb-1"
              :class="authStore.user.emailVerified ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'"
            >
              {{ authStore.user.emailVerified ? 'Verified' : 'Pending' }}
            </div>
            <div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Email Status</div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-xl border border-neutral-200 dark:border-neutral-800 mb-8">
          <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Quick Actions</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <router-link
              to="/settings"
              class="p-4 rounded-xl border-2 border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-all group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Settings
                  </h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Manage your preferences</p>
                </div>
              </div>
            </router-link>

            <button
              @click="supportMinistry"
              class="p-4 rounded-xl border-2 border-red-400 dark:border-red-600 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 hover:from-red-100 hover:to-pink-100 dark:hover:from-red-950/30 dark:hover:to-pink-950/30 transition-all group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">
                    {{ authStore.hasSupported ? 'Support Us Again' : 'Support Our Ministry' }}
                  </h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">
                    {{ authStore.hasSupported ? 'Thank you for your generosity!' : 'Help us spread the Gospel' }}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Account Actions -->
        <div class="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-xl border border-neutral-200 dark:border-neutral-800">
          <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Account Actions</h2>
          <div class="space-y-3">
            <button
              @click="router.push('/my-studies')"
              class="w-full p-4 rounded-xl border-2 border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-all flex items-center justify-between group"
            >
              <div class="flex items-center gap-4">
                <svg class="w-6 h-6 text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span class="font-medium text-neutral-900 dark:text-neutral-100">View My Studies</span>
              </div>
              <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              @click="router.push('/study-series')"
              class="w-full p-4 rounded-xl border-2 border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-all flex items-center justify-between group"
            >
              <div class="flex items-center gap-4">
                <svg class="w-6 h-6 text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span class="font-medium text-neutral-900 dark:text-neutral-100">Browse Study Series</span>
              </div>
              <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              @click="handleSignOut"
              class="w-full p-4 rounded-xl border-2 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 hover:bg-red-100 dark:hover:bg-red-950/30 transition-all flex items-center justify-between group"
            >
              <div class="flex items-center gap-4">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span class="font-medium text-red-600 dark:text-red-400">Sign Out</span>
              </div>
              <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Not Authenticated State -->
      <div v-else class="text-center py-16">
        <div class="text-6xl mb-4">👤</div>
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Please Sign In
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 mb-6">
          You need to be signed in to view your profile.
        </p>
        <router-link to="/sign-in" class="btn-primary inline-flex items-center gap-2">
          Sign In
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const editMode = ref(false)
const isSaving = ref(false)

const editForm = ref({
  name: '',
  bio: '',
})

const formatJoinDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

const handleUpdateProfile = async () => {
  if (!authStore.user) return

  isSaving.value = true
  try {
    const result = await authStore.updateUserProfile({
      name: editForm.value.name,
      bio: editForm.value.bio,
    })

    if (result.success) {
      editMode.value = false
      alert('Profile updated successfully!')
    } else {
      alert('Failed to update profile: ' + result.error)
    }
  } catch (error) {
    console.error('Error updating profile:', error)
    alert('An error occurred while updating your profile')
  } finally {
    isSaving.value = false
  }
}

const supportMinistry = () => {
  // TODO: Implement donation flow
  const message = authStore.hasSupported 
    ? 'Thank you for being a faithful supporter! 🙏\n\nYour previous donation helps us:\n• Create more Bible studies\n• Keep the platform free for everyone\n• Spread the Gospel worldwide\n\nWould you like to donate again?\n\nDonation options coming soon:\n• PayPal • Stripe • Venmo'
    : 'Thank you for considering supporting BibleStem! 🙏\n\n💝 What Your Support Provides:\n• Helps us create more studies\n• Keeps the platform free for everyone\n• Spreads the Gospel freely\n• As a thank you: Access to 4 deeper studies\n\n✨ All basic content remains FREE forever!\n\nDonation options coming soon:\n• PayPal • Stripe • Venmo'
  
  alert(message)
}

const handleSignOut = async () => {
  if (confirm('Are you sure you want to sign out?')) {
    await authStore.logout()
    router.push('/')
  }
}

onMounted(() => {
  if (authStore.user) {
    editForm.value = {
      name: authStore.user.name,
      bio: authStore.user.bio || '',
    }
  }
})
</script>
