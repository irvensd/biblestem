<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container-base section-padding relative">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left animate-slide-up">
            <h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span class="gradient-text">Transform</span><br />
              Your Bible Study<br />
              <span class="text-neutral-800 dark:text-neutral-200">Journey</span>
            </h1>
            <p
              class="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed"
            >
              Discover interactive, modern Bible studies designed for individuals who struggle to
              study Scripture on their own. Join thousands finding their path to deeper faith.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <router-link
                :to="authStore.isAuthenticated ? '/dashboard' : '/signup'"
                class="btn-primary text-lg px-8 py-4 inline-block text-center"
              >
                {{ authStore.isAuthenticated ? 'Go to Dashboard' : 'Start Free Study' }}
              </router-link>
              <router-link
                to="/study-series"
                class="btn-secondary text-lg px-8 py-4 inline-block text-center"
              >
                Explore Series
              </router-link>
            </div>

            <!-- Stats -->
            <div
              class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700"
            >
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
              <div
                class="card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
              >
                <div class="flex items-center space-x-3 mb-6">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <h3 class="text-lg font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                  Today's Study: Psalm 23
                </h3>
                <div class="space-y-3">
                  <div
                    class="h-3 bg-gradient-to-r from-primary-200 to-primary-100 rounded-full"
                  ></div>
                  <div
                    class="h-3 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full w-4/5"
                  ></div>
                  <div
                    class="h-3 bg-gradient-to-r from-accent-200 to-accent-100 rounded-full w-3/5"
                  ></div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                  <span class="text-sm text-neutral-600 dark:text-neutral-400">Progress: 65%</span>
                  <div
                    class="w-16 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden"
                  >
                    <div
                      class="w-2/3 h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div
                class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center shadow-strong animate-bounce-gentle"
              >
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </div>

              <div
                class="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-medium animate-bounce-gentle"
                style="animation-delay: 1s"
              >
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            We've designed the perfect platform for modern Bible study, combining traditional wisdom
            with interactive technology.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Interactive Learning
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Engage with Scripture through quizzes, reflections, and multimedia content that makes
              learning memorable and meaningful.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div
              class="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Structured Curriculum
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Follow carefully crafted study paths that build upon each other, ensuring
              comprehensive understanding of Biblical themes.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div
              class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Track Progress
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Monitor your spiritual growth with detailed analytics, achievement badges, and
              personalized study recommendations.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div
              class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Premium & Free Content
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Access essential studies for free, or unlock premium series with expert commentary and
              advanced study tools.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div
              class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Daily Devotions
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Start each day with purpose through guided devotional content, scripture reflection,
              and prayer prompts tailored for spiritual growth.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="card p-8 hover:scale-105 transition-all duration-300 group">
            <div
              class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S9.5 8.83 9.5 8zm7 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Flexible Schedule
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Study at your own pace with content available 24/7, perfect for busy schedules and
              different learning preferences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div class="container-base">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
            Choose Your <span class="gradient-text">Study Plan</span>
          </h2>
          <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Start with our free plan and discover the power of interactive Bible study. Upgrade
            anytime to unlock premium content and advanced features.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Free Plan -->
          <div
            class="card p-8 hover:scale-105 transition-all duration-300 border-2 border-neutral-200 dark:border-neutral-700"
          >
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">Free</h3>
              <div class="text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">$0</div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">Forever</div>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300"
                  >15+ Free Bible study series</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300"
                  >Interactive lessons & quizzes</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300">Progress tracking</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300">Basic achievement badges</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300">Study templates</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300">Scripture memory cards</span>
              </div>
            </div>

            <router-link
              :to="authStore.isAuthenticated ? '/dashboard' : '/signup'"
              class="w-full btn-secondary text-center block"
            >
              {{ authStore.isAuthenticated ? 'Continue Free' : 'Get Started Free' }}
            </router-link>
          </div>

          <!-- Premium Plan -->
          <div
            class="card p-8 hover:scale-105 transition-all duration-300 border-2 border-accent-500 relative"
          >
            <!-- Popular Badge -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >Most Popular</span
              >
            </div>

            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                Premium
              </h3>
              <div class="text-4xl font-bold text-accent-600 mb-2">$9.99</div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">per month</div>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300"
                  ><strong>Everything in Free</strong> +</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300"
                  ><strong>New study series every month</strong></span
                >
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300">25+ Premium study series</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300"
                  >Extended 15-25 minute lessons</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300"
                  >Video content & animations</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07 3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300"
                  >Expert commentary & insights</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300"
                  >Downloadable study guides</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300">Priority support</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300">Offline study access</span>
              </div>
            </div>

            <router-link
              :to="authStore.isAuthenticated ? '/dashboard' : '/signup'"
              class="w-full btn-accent text-center block"
            >
              {{ authStore.isAuthenticated ? 'Upgrade Now' : 'Start 3-Day Trial' }}
            </router-link>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="text-center mt-12">
          <div
            class="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-soft border border-neutral-200 dark:border-neutral-700 max-w-2xl mx-auto"
          >
            <h4 class="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-3">
              ✨ Fresh Content Every Month
            </h4>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              Premium subscribers get access to brand new Bible study series every month, featuring
              seasonal topics, current events through a Biblical lens, and deep dives into specific
              books of the Bible. Your subscription ensures you'll never run out of meaningful
              content to explore.
            </p>
          </div>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-6">
            Cancel anytime • No long-term commitment • 3-day free trial for new premium subscribers
          </p>
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
            Join thousands of believers who have discovered the joy of interactive Bible study.
            Start your journey today with our 3-day free trial.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              :to="authStore.isAuthenticated ? '/dashboard' : '/signin'"
              class="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-medium hover:shadow-strong inline-block text-center"
            >
              {{ authStore.isAuthenticated ? 'Go to Dashboard' : 'Start 3-Day Free Trial' }}
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
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '../stores/auth'

// Safe auth store initialization
const authStoreRef = ref({
  isAuthenticated: false,
  user: null,
  isPremium: false,
})

// Safe computed for auth store access
const authStore = computed(() => {
  return (
    authStoreRef.value || {
      isAuthenticated: false,
      user: null,
      isPremium: false,
    }
  )
})

// Initialize store when component mounts
onMounted(() => {
  try {
    authStoreRef.value = useAuthStore()
  } catch (error) {
    console.warn('Failed to initialize auth store in HomePage:', error)
  }
})
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
