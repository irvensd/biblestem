<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Loading Skeleton -->
    <div v-if="isLoading || error">
      <!-- Hero Skeleton -->
      <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-16 md:py-24 overflow-hidden">
        <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
          <div class="max-w-4xl mx-auto text-center animate-pulse">
            <div class="h-16 bg-white/20 rounded w-96 mx-auto mb-6"></div>
            <div class="h-6 bg-white/20 rounded w-full max-w-3xl mx-auto"></div>
          </div>
        </div>
      </section>
      
      <!-- Studies Skeleton -->
      <section class="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
          <div v-for="i in 3" :key="i" class="mb-12">
            <!-- Section Title Skeleton -->
            <div class="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-48 mb-6 animate-pulse"></div>
            
            <!-- Study Cards Grid Skeleton -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StudyCardSkeleton v-for="j in 3" :key="j" />
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Actual Content -->
    <div v-else>
      <!-- Unified Hero Section -->
      <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-12 md:py-16 overflow-hidden">
        <!-- Ambient background elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
          <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white rounded-full blur-3xl opacity-10"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <!-- Top badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 animate-slide-up">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span>Bible Study Library</span>
            </div>
            
            <!-- Main heading -->
            <h1 class="text-4xl md:text-6xl font-bold mb-5 animate-slide-up leading-tight">
              Study Series
            </h1>
            
            <!-- Subheading -->
            <p class="text-lg md:text-xl text-white/95 mb-4 leading-relaxed max-w-3xl mx-auto animate-slide-up font-medium">
              From Foundational Truths to Deeper Prophetic Themes
            </p>
            
            <!-- Description -->
            <p class="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Interactive Bible studies designed to transform your faith and deepen your understanding whether you're just starting or ready to dive deeper into God's Word.
            </p>
          </div>
        </div>
      </section>

      <!-- Studies Section with Horizontal Scrolling Categories -->
      <section class="relative py-16 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
        <!-- Ambient background for sections -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" style="top: 10%; left: 5%;"></div>
          <div class="absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" style="top: 40%; right: 10%;"></div>
          <div class="absolute w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" style="top: 70%; left: 15%;"></div>
        </div>
        
        <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
          <!-- Category Sections -->
          <template v-if="categoriesWithStudies.length > 0">
            <div
              v-for="category in categoriesWithStudies"
              :id="category.id"
              :key="category.id"
              class="relative scroll-mt-24 rounded-2xl p-8 mb-8"
              :class="getSectionGradient(category.id)"
            >
              <StudySection
                :category="category"
                :show-view-all="category.studies.length > 3"
                :enable-snap="true"
              />
            </div>
          </template>
          
          <!-- Empty State -->
          <div v-else class="text-center py-16">
            <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              No Studies Available
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">
              We're working on adding more Bible studies. Check back soon!
            </p>
          </div>

          <!-- Support CTA (if Advanced Studies exist and user hasn't supported) -->
          <div
            v-if="hasAdvancedStudies && !hasSupported"
            class="max-w-4xl mx-auto mt-16"
          >
            <div class="bg-white dark:bg-neutral-900 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-orange-50 dark:to-orange-900/20">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Love These Deeper Studies?
                </h3>
                <p class="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                  These advanced studies with Hebrew & Greek insights are our way of saying thank you to those who support our ministry. <strong>All donations are optional</strong> — we're just grateful you're here studying God's Word!
                </p>
                <button
                  @click="showSupportModal"
                  class="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105"
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
    
    <!-- Back to Top Button -->
    <transition name="fade">
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-110 group"
        aria-label="Back to top"
      >
        <svg class="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSEO } from '../composables/useSEO'

// SEO Configuration
const { applySEO, getBreadcrumbSchema } = useSEO()
import { useAuthStore } from '@/stores/auth'
import { useStudies } from '@/composables/useStudies'
import StudySection from '@/components/StudySection.vue'
import StudySectionSkeleton from '@/components/skeletons/StudySectionSkeleton.vue'

const route = useRoute()
const authStore = useAuthStore()
const { categoriesWithStudies, isLoading, error, fetchStudies } = useStudies()

// Apply SEO on mount
onMounted(() => {
  applySEO({
    title: 'Bible Study Series - Free Interactive Studies | BibleStem',
    description: 'Explore our collection of free interactive Bible studies including foundational studies, book studies, topical studies, and character studies. Learn Hebrew and Greek. 100% free.',
    keywords: 'bible study series, free bible courses, topical bible study, book of the bible study, character studies, hebrew greek bible study, scripture courses',
    structuredData: getBreadcrumbSchema([
      { name: 'Home', url: 'https://biblestem.vercel.app/' },
      { name: 'Study Series', url: 'https://biblestem.vercel.app/study-series' }
    ])
  })
})

const hasSupported = computed(() => authStore.hasSupported)

const hasAdvancedStudies = computed(() => {
  return categoriesWithStudies.value.some(cat => cat.id === 'advanced' && cat.studies.length > 0)
})

// Back to top functionality
const showBackToTop = ref(false)

const handleScroll = () => {
  // Show button after scrolling down 50vh
  showBackToTop.value = window.scrollY > window.innerHeight * 0.5
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Get section gradient backgrounds
const getSectionGradient = (categoryId: string): string => {
  const gradients: Record<string, string> = {
    'foundational': 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20',
    'growth': 'bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20',
    'biblical-narrative': 'bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20',
    'spiritual-growth': 'bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20',
    'advanced': 'bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20',
  }
  return gradients[categoryId] || 'bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/20 dark:to-neutral-800/20'
}

// Handle support modal/message
const showSupportModal = () => {
  alert('Thank you for your interest in supporting BibleStem! 🙏\n\n💝 What Your Support Provides:\n• Helps us create more Bible studies\n• Keeps the platform running for everyone\n• Spreads the Gospel freely worldwide\n• As a thank you, you\'ll get access to advanced studies with Hebrew & Greek insights\n\n✨ All basic studies remain 100% FREE forever!\n\nDonation options coming soon:\n• PayPal • Stripe • Venmo\n\nWe\'re grateful for your prayers and support! ❤️')
}

// Scroll to hash section
const scrollToHash = async (delay = 300) => {
  const hash = window.location.hash || route.hash
  if (hash) {
    // Remove the # symbol
    const sectionId = hash.substring(1)
    
    // Wait for DOM to be ready and studies to load
    await nextTick()
    
    // Wait for sections to be rendered (data loaded)
    // Retry multiple times to ensure element exists
    let attempts = 0
    const maxAttempts = 10
    
    const tryScroll = () => {
      attempts++
      const element = document.getElementById(sectionId)
      if (element) {
        // Account for header/fixed elements
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        return true
      } else if (attempts < maxAttempts) {
        // Retry after a short delay
        setTimeout(tryScroll, 100)
      }
      return false
    }
    
    // Initial delay to ensure data is loaded
    setTimeout(tryScroll, delay)
  }
}

// Watch for hash changes (including when already on same route)
watch(() => route.hash, (newHash, oldHash) => {
  if (newHash !== oldHash) {
    scrollToHash(100)
  }
})

// Also watch for browser hash changes (back/forward buttons, direct navigation)
const handleHashChange = () => {
  scrollToHash(100)
}

onMounted(async () => {
  await fetchStudies()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('hashchange', handleHashChange)
  handleScroll() // Check initial scroll position
  
  // Scroll to hash if present (with longer delay to ensure data loaded)
  await scrollToHash(500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('hashchange', handleHashChange)
})
</script>

<style scoped>
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}

/* Fade transition for back to top button */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

