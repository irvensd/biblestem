<template>
  <div class="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
    <!-- Hero Section -->
    <section class="relative py-16 sm:py-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span class="text-sm font-semibold text-primary-700 dark:text-primary-300">BibleStem Ecosystem</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
          Faith. Reimagined.
        </h1>
        <p class="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 mb-4 max-w-3xl mx-auto">
          Rooted in Scripture.<br />
          Built through design and technology.
        </p>
        <p class="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
          Every branch of BibleStem grows from the same root — Scripture.
        </p>
      </div>
      
      <!-- Background decoration -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div class="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-pulse"></div>
          <div class="absolute top-40 right-10 w-72 h-72 bg-secondary-200 dark:bg-secondary-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-pulse" style="animation-delay: 2s;"></div>
        </div>
      </div>
    </section>

    <!-- Interactive Ecosystem Map -->
    <section class="py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Explore The BibleStem Ecosystem
          </h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Hover or tap each branch to see how every initiative supports the mission. BibleStem Studies anchors the experience, with Threads, Studios, and Community growing from the same root.
          </p>
        </div>
        <EcosystemMap />
      </div>
    </section>

    <!-- Ecosystem Grid -->
    <section class="py-12 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <!-- BibleStem Studies -->
          <div class="group relative bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-neutral-900 dark:text-white">BibleStem Studies</h3>
                <span class="inline-block px-2 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded mt-1">
                  LEARN
                </span>
              </div>
            </div>
            <p class="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              Free, interactive study platform that makes Scripture easy to explore. Donation-based + supporter funded.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded">Interactive</span>
              <span class="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded">Free Access</span>
              <span class="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded">Donation-Based</span>
            </div>
            <div class="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
              <span>Explore Platform</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- BibleStem Threads -->
          <div class="relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800/50 dark:to-neutral-800/30 rounded-2xl p-8 shadow-lg border-2 border-dashed border-neutral-300 dark:border-neutral-600 overflow-hidden">
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">
                IN DEVELOPMENT
              </span>
            </div>
            <div class="flex items-center gap-4 mb-4 opacity-75">
              <div class="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-neutral-900 dark:text-white">BibleStem Threads</h3>
                <span class="inline-block px-2 py-1 text-xs font-semibold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded mt-1">
                  INSPIRE + FUND
                </span>
              </div>
            </div>
            <p class="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              Faith-inspired apparel crafted in small batches. Join the launch list to hear when the first drop goes live.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Premium Apparel</span>
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Small Batches</span>
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Mission-Driven</span>
            </div>
            <a
              href="https://biblestem.shop"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Join the Launch List
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <!-- BibleStem Studios -->
          <div class="relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800/50 dark:to-neutral-800/30 rounded-2xl p-8 shadow-lg border-2 border-dashed border-neutral-300 dark:border-neutral-600 overflow-hidden">
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 text-xs font-bold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full">
                IN PLANNING
              </span>
            </div>
            <div class="flex items-center gap-4 mb-4 opacity-75">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-neutral-900 dark:text-white">BibleStem Studios</h3>
                <span class="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded mt-1">
                  CREATE
                </span>
              </div>
            </div>
            <p class="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              Produces cinematic Bible films using Unreal Engine 5. Visual storytelling that brings Scripture to life.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Unreal Engine 5</span>
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Cinematic</span>
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Scripture-Rooted</span>
            </div>
            <p class="text-sm text-neutral-500 dark:text-neutral-500 italic">
              Mid-2026 Studio Debut Planned
            </p>
          </div>

          <!-- BibleStem Community -->
          <div class="relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800/50 dark:to-neutral-800/30 rounded-2xl p-8 shadow-lg border-2 border-dashed border-neutral-300 dark:border-neutral-600">
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 text-xs font-bold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full">
                IN PLANNING
              </span>
            </div>
            <div class="flex items-center gap-4 mb-4 opacity-75">
              <div class="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-neutral-900 dark:text-white">BibleStem Community</h3>
                <span class="inline-block px-2 py-1 text-xs font-semibold bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded mt-1">
                  CONNECT
                </span>
              </div>
            </div>
            <p class="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              Faith-based space for study discussions, testimonies and a future membership platform.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Discussion Groups</span>
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Testimonies</span>
              <span class="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">Membership</span>
            </div>
          </div>

          <!-- Central Message Card - spans remaining space -->
          <div class="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 shadow-lg border border-primary-200 dark:border-primary-800 flex flex-col justify-center items-center text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-3">BIBLESTEM</h3>
            <p class="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2">
              Faith. Reimagined.
            </p>
            <p class="text-neutral-600 dark:text-neutral-400 max-w-xs">
              Every branch of BibleStem grows from the same root — Scripture.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-800/50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
          Our Vision
        </h2>
        <p class="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
          BibleStem is building an interconnected ecosystem where every platform serves a unique purpose 
          but shares one mission: to make Scripture accessible, engaging, and transformative through 
          innovative design and technology.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-white dark:bg-neutral-800 rounded-xl">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
            <p class="text-neutral-600 dark:text-neutral-400">Rooted in Scripture</p>
          </div>
          <div class="p-6 bg-white dark:bg-neutral-800 rounded-xl">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">4</div>
            <p class="text-neutral-600 dark:text-neutral-400">Platforms in Development</p>
          </div>
          <div class="p-6 bg-white dark:bg-neutral-800 rounded-xl">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">1</div>
            <p class="text-neutral-600 dark:text-neutral-400">Unified Mission</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
          Start Your Journey
        </h2>
        <p class="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-8">
          Begin exploring Scripture today with BibleStem Studies — our free, interactive platform.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/study-series"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Explore Studies</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
          <router-link
            to="/about"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-semibold rounded-xl border-2 border-neutral-200 dark:border-neutral-700 transition-all duration-300"
          >
            <span>Learn More</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import EcosystemMap from '../components/EcosystemMap.vue'
import { useSEO } from '../composables/useSEO'

const { applySEO } = useSEO()

onMounted(() => {
  applySEO({
    title: 'BibleStem Ecosystem - Faith Reimagined',
    description:
      'Discover the BibleStem ecosystem: interactive Bible studies, cinematic films, faith-inspired apparel, and community platforms — all rooted in Scripture.',
    keywords: 'BibleStem ecosystem, Bible studies, faith platform, Christian technology, Scripture-rooted design',
    ogType: 'website'
  })
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

