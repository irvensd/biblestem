<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-16 md:py-24 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-6 animate-slide-up">
            <span class="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
              Explore Our Studies
            </span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style="animation-delay: 0.1s">
            Study Series
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s">
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
              <div class="h-48 bg-gradient-to-br from-emerald-500 to-emerald-600 relative">
                <div class="absolute top-4 right-4">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white">
                    FREE
                  </span>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
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
                  class="btn btn-primary w-full"
                >
                  Start Study
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Premium Studies Section -->
        <div class="mb-16">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                Premium Studies
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                  Premium
                </span>
              </h2>
              <p class="text-gray-600 dark:text-gray-400">Advanced studies with deeper insights and exclusive content</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Premium Study Cards -->
            <div 
              v-for="study in premiumStudies" 
              :key="study.id"
              class="card p-0 overflow-hidden hover-lift relative"
            >
              <!-- Premium Badge Overlay -->
              <div class="absolute top-4 right-4 z-10">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-500 text-white shadow-lg">
                  PREMIUM
                </span>
              </div>
              
              <div class="h-48 bg-gradient-to-br from-purple-600 to-purple-700 relative">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 011 1v1.707l3.707 3.707a1 1 0 010 2L5 10.414l-3.293 3.293a1 1 0 01-1.414-1.414L4.586 9H1a1 1 0 110-2h4.414l3.293-3.293zM13 9h4.586l3.293 3.293a1 1 0 01-1.414 1.414L16 10.414v4.586a1 1 0 01-2 0v-4.586l-3.293-3.293a1 1 0 112.828-2.828L13 5.586V1a1 1 0 112 0v4.586l1.707 1.707z" />
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
                  class="btn btn-primary w-full relative"
                  :class="{ 'opacity-50 cursor-not-allowed': !isPremium }"
                >
                  <span v-if="isPremium">Start Study</span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    Premium Required
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Upgrade CTA (if not premium) -->
        <div v-if="!isPremium" class="max-w-4xl mx-auto">
          <div class="card p-8 bg-gradient-to-br from-accent-50 dark:from-accent-900/20 to-accent-100 dark:to-accent-800/20 border-2 border-accent-200 dark:border-accent-700">
            <div class="text-center">
              <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Unlock Premium Studies</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Get access to advanced studies with deeper insights, exclusive content, and enhanced features
              </p>
              <router-link 
                to="/sign-up"
                class="btn btn-primary px-8 py-3 text-lg"
              >
                Upgrade to Premium →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getFreeStudies, getPremiumStudies } from '@/data/studies'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const freeStudies = getFreeStudies()
const premiumStudies = getPremiumStudies()

const isPremium = computed(() => authStore.isPremium)
</script>

