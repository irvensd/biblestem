<template>
  <div class="min-h-screen">
    <!-- Loading Skeleton -->
    <div v-if="isLoading">
      <!-- Hero Skeleton -->
      <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-16 md:py-24 overflow-hidden">
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center animate-pulse">
            <div class="h-16 bg-white/20 rounded w-96 mx-auto mb-6"></div>
            <div class="h-6 bg-white/20 rounded w-full max-w-3xl mx-auto"></div>
          </div>
        </div>
      </section>
      
      <!-- Studies Skeleton -->
      <section class="py-16 bg-white dark:bg-neutral-900">
        <div class="container mx-auto px-4">
          <StudyGridSkeleton :count="9" />
        </div>
      </section>
    </div>
    
    <!-- Actual Content -->
    <div v-else>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-16 md:py-24 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Study Series
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto animate-slide-up">
            Discover deep, interactive Bible studies designed to transform your faith and deepen your understanding
          </p>
        </div>
      </div>
    </section>

    <!-- Studies Section -->
    <section class="py-16 bg-white dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <!-- Free Studies Section -->
        <div class="mb-16">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold mb-2">Free Studies</h2>
              <p class="text-gray-600 dark:text-gray-400">Start your journey with these foundational studies</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Free Study Cards -->
            <div 
              v-for="study in freeStudies" 
              :key="study.id"
              class="card p-0 overflow-hidden hover-lift"
            >
              <div class="h-32 bg-gradient-to-br from-emerald-500 to-teal-600 relative flex items-center justify-center p-6">
                <div class="absolute top-3 right-3">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-emerald-600 shadow-sm">
                    FREE
                  </span>
                </div>
                <!-- Simplified icon that fits properly -->
                <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ study.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {{ study.description }}
                </p>
                
                <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    {{ study.lessons.length }} Lessons
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                    </svg>
                    {{ study.totalDuration }} min
                  </span>
                  <span class="capitalize">{{ study.difficulty }}</span>
                </div>
                
                <router-link 
                  :to="`/study/${study.id}`"
                  class="btn btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  <span>Start Study</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Supporter Studies Section -->
        <div class="mb-16">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                Deeper Studies
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-600 dark:text-amber-400">
                  ⭐ Advanced
                </span>
              </h2>
              <p class="text-gray-600 dark:text-gray-400">Deeper insights with Hebrew & Greek word studies - our way of thanking those who support our ministry</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Supporter Study Cards -->
            <div 
              v-for="study in supporterStudies" 
              :key="study.id"
              class="card p-0 overflow-hidden hover-lift relative"
            >
              <!-- Advanced Badge Overlay -->
              <div class="absolute top-3 right-3 z-10">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
                  ⭐ ADVANCED
                </span>
              </div>
              
              <div class="h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-red-600 relative flex items-center justify-center p-6">
                <!-- Same book icon but with premium colors -->
                <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ study.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {{ study.description }}
                </p>
                
                <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    {{ study.lessons.length }} Lessons
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                    </svg>
                    {{ study.totalDuration }} min
                  </span>
                  <span class="capitalize">{{ study.difficulty }}</span>
                </div>
                
                <router-link 
                  :to="`/study/${study.id}`"
                  class="btn w-full inline-flex items-center justify-center gap-2"
                  :class="hasSupported ? 'btn-primary' : 'btn-secondary'"
                >
                  <span v-if="hasSupported">Start Study</span>
                  <span v-else>View Study</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Support CTA (if not a supporter) -->
        <div v-if="!hasSupported" class="max-w-4xl mx-auto">
          <div class="card p-8 bg-gradient-to-br from-red-50 dark:from-red-900/20 to-pink-50 dark:to-pink-900/20 border-2 border-red-200 dark:border-red-700">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Love These Deeper Studies?</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                These advanced studies with Hebrew & Greek insights are our way of saying thank you to those who support our ministry. <strong>All donations are optional</strong> — we're just grateful you're here studying God's Word! 
              </p>
              <button 
                @click="showSupportModal"
                class="btn btn-primary inline-flex items-center justify-center gap-3"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
                <span>Support This Ministry</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getFreeStudies, getSupporterStudies } from '@/data/studies'
import { useAuthStore } from '@/stores/auth'
import StudyGridSkeleton from '../components/skeletons/StudyGridSkeleton.vue'

const authStore = useAuthStore()

// Loading state
const isLoading = ref(true)

const freeStudies = getFreeStudies()
const supporterStudies = getSupporterStudies()

const hasSupported = computed(() => authStore.hasSupported)

// Handle support modal/message
const showSupportModal = () => {
  alert('Thank you for your interest in supporting BibleStem! 🙏\n\n💝 What Your Support Provides:\n• Helps us create more Bible studies\n• Keeps the platform running for everyone\n• Spreads the Gospel freely worldwide\n• As a thank you, you\'ll get access to 4 deeper studies\n\n✨ All basic studies remain 100% FREE forever!\n\nDonation options coming soon:\n• PayPal • Stripe • Venmo\n\nWe\'re grateful for your prayers and support! ❤️')
}

onMounted(() => {
  // Simulate loading time for better UX
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

