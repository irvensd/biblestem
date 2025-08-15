<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container-base section-padding relative">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left animate-slide-up">
            <h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span class="gradient-text">Transform</span><br>
              Your Bible Study<br>
              <span class="text-neutral-800 dark:text-neutral-200">Journey</span>
            </h1>
            <p class="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              Discover interactive, modern Bible studies designed for individuals who struggle to study Scripture on their own. Join thousands finding their path to deeper faith.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <router-link
                :to="authStore.isAuthenticated ? '/dashboard' : '/signup'"
                class="btn-primary text-lg px-8 py-4 inline-block text-center"
              >
                {{ authStore.isAuthenticated ? 'Go to Dashboard' : 'Start Free Study' }}
              </router-link>
              <router-link to="/study-series" class="btn-secondary text-lg px-8 py-4 inline-block text-center">
                Explore Series
              </router-link>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <div class="text-center">
                <div class="text-2xl lg:text-3xl font-bold text-primary-600">50+</div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Study Series</div>
              </div>
              <div class="text-center">
                <div class="text-2xl lg:text-3xl font-bold text-primary-600">10k+</div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Active Learners</div>
              </div>
              <div class="text-center">
                <div class="text-2xl lg:text-3xl font-bold text-primary-600">98%</div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <!-- Right Content - Hero Image/Illustration -->
          <div class="relative lg:animate-bounce-gentle">
            <div class="relative">
              <!-- Main Card -->
              <div class="card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div class="flex items-center space-x-3 mb-6">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <h3 class="text-lg font-bold mb-4 text-neutral-800 dark:text-neutral-200">Today's Study: Psalm 23</h3>
                <div class="space-y-3">
                  <div class="h-3 bg-gradient-to-r from-primary-200 to-primary-100 rounded-full"></div>
                  <div class="h-3 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full w-4/5"></div>
                  <div class="h-3 bg-gradient-to-r from-accent-200 to-accent-100 rounded-full w-3/5"></div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                  <span class="text-sm text-neutral-600 dark:text-neutral-400">Progress: 65%</span>
                  <div class="w-16 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div class="w-2/3 h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center shadow-strong animate-bounce-gentle">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>

              <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-medium animate-bounce-gentle" style="animation-delay: 1s;">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-white dark:bg-neutral-900">
      <div class="container-base">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
            Why Choose <span class="gradient-text">BibleStem</span>?
          </h2>
          <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            We've designed the perfect platform for modern Bible study, combining traditional wisdom with interactive technology.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Interactive Learning</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Engage with Scripture through quizzes, reflections, and multimedia content that makes learning memorable and meaningful.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div class="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Structured Curriculum</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Follow carefully crafted study paths that build upon each other, ensuring comprehensive understanding of Biblical themes.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Track Progress</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Monitor your spiritual growth with detailed analytics, achievement badges, and personalized study recommendations.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Premium & Free Content</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Access essential studies for free, or unlock premium series with expert commentary and advanced study tools.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.998 2.998 0 0 0 16.89 7c-.87 0-1.66.46-2.1 1.21L12.5 12 15 22h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16h5l-2.5-10-2.5 10z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Community Support</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Connect with fellow believers, share insights, and grow together in a supportive online community.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S9.5 8.83 9.5 8zm7 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Flexible Schedule</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Study at your own pace with content available 24/7, perfect for busy schedules and different learning preferences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
      <div class="container-base text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Bible Study?
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            Join thousands of believers who have discovered the joy of interactive Bible study. Start your journey today with our free trial.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              :to="authStore.isAuthenticated ? '/dashboard' : '/signin'"
              class="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-medium hover:shadow-strong inline-block text-center"
            >
              {{ authStore.isAuthenticated ? 'Go to Dashboard' : 'Start Free Trial' }}
            </router-link>
            <router-link
              to="/study-series"
              class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 inline-block text-center"
            >
              View Study Series
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
