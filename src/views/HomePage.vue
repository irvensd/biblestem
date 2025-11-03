<template>
  <div class="min-h-screen">
    <!-- Hero Section with Background Pattern -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-20 md:py-32 overflow-hidden">
      <!-- Animated Background Circles -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Left Side - Text Content -->
            <div class="text-center md:text-left">
              <div class="mb-6 animate-slide-up">
                <span class="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
                  ✨ 100% Free • Donation-Based Ministry
                </span>
              </div>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style="animation-delay: 0.1s">
                Deep Bible Study
                <span class="block mt-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p class="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-slide-up" style="animation-delay: 0.2s">
                Discover God's Word through <strong>interactive studies</strong>, <strong>Hebrew & Greek insights</strong>, and guided reflection that transforms your daily walk. <strong>Completely free forever.</strong>
              </p>
              <div class="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style="animation-delay: 0.3s">
                <router-link 
                  to="/sign-up" 
                  class="btn bg-white text-primary-600 hover:bg-white/90 px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 group"
                >
                  Start Free Today
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </router-link>
                <router-link 
                  to="/sign-in" 
                  class="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm"
                >
                  Sign In
                </router-link>
              </div>
              
              <!-- Trust Indicators -->
              <div class="flex flex-wrap gap-6 text-white/80 text-sm animate-slide-up" style="animation-delay: 0.4s">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-semibold">100% Free Forever</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-semibold">Donation-Based</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm-2 4h2v2H7v-2z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-semibold">{{ totalStudies }} Studies {{ totalStudies > 0 ? '(More Coming Soon!)' : '' }}</span>
                </div>
              </div>
            </div>

            <!-- Right Side - Visual Preview -->
            <div class="hidden md:block">
              <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div class="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 text-white">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold">LIVE</span>
                    <span class="text-xs text-gray-400">Psalm 119:18</span>
                  </div>
                  <div class="mb-4">
                    <div class="text-2xl font-bold mb-2">Study in Progress</div>
                    <div class="text-gray-400 text-sm">How to Study the Bible - Lesson 1</div>
                  </div>
                  <div class="space-y-2 text-sm">
                    <div class="flex items-center gap-2 text-emerald-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      Scripture Read
                    </div>
                    <div class="flex items-center gap-2 text-emerald-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      Quiz Completed
                    </div>
                    <div class="flex items-center gap-2 text-yellow-300">
                      <div class="w-4 h-4 border-2 border-yellow-300 rounded-full animate-pulse"></div>
                      Application
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Study Categories Preview -->
    <section class="py-20 bg-gray-50 dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Study Categories</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore various topics tailored for every stage of your spiritual journey
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div class="card card-interactive p-6 text-center transform hover:scale-105 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">📖</span>
            </div>
            <h3 class="font-bold text-lg text-gray-900 dark:text-white">Foundations</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Basic Bible study principles</p>
          </div>

          <div class="card card-interactive p-6 text-center transform hover:scale-105 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">💒</span>
            </div>
            <h3 class="font-bold text-lg text-gray-900 dark:text-white">Theology</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Deep doctrinal studies</p>
          </div>

          <div class="card card-interactive p-6 text-center transform hover:scale-105 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">🎯</span>
            </div>
            <h3 class="font-bold text-lg text-gray-900 dark:text-white">Life Application</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Practical faith living</p>
          </div>

          <div class="card card-interactive p-6 text-center transform hover:scale-105 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">📜</span>
            </div>
            <h3 class="font-bold text-lg text-gray-900 dark:text-white">Prophecy</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Biblical prophecy studies</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sample Study Preview -->
    <section class="py-20 bg-white dark:bg-neutral-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">See What You'll Learn</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A complete study series ready to explore
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="card p-0 overflow-hidden shadow-2xl">
            <!-- Study Header -->
            <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-8">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span class="text-2xl">📖</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold">How to Study the Bible</h3>
                    <p class="text-emerald-100">The Preparation • FREE Study</p>
                  </div>
                </div>
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  🎁 FREE
                </span>
              </div>
              <div class="flex items-center gap-6 text-sm">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  <span>6 Lessons</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  <span>36 Minutes</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293A1 1 0 019 8a1 1 0 01-1.414 1.414L5.586 7H8a1 1 0 100-2H4a1 1 0 01-1-1zm9 1a1 1 0 010-2h3a1 1 0 011 1v3a1 1 0 01-2 0V6.414l-2.293 2.293A1 1 0 0111 10a1 1 0 01-1.414-1.414L12.414 6H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293A1 1 0 0117 11a1 1 0 01-1.414 1.414L13.586 15H14a1 1 0 100 2h-4a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                  <span>Beginner</span>
                </div>
              </div>
            </div>

            <!-- Study Content Preview -->
            <div class="bg-white dark:bg-neutral-800 p-8">
              <div class="mb-6">
                <h4 class="text-lg font-bold mb-3">What You'll Learn:</h4>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="flex items-start gap-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                    <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <div class="font-semibold text-sm mb-1">Prayer First</div>
                      <div class="text-xs text-gray-600 dark:text-gray-400">Learn the importance of prayer in Bible study</div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3 p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl">
                    <svg class="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <div class="font-semibold text-sm mb-1">Maturity & Independence</div>
                      <div class="text-xs text-gray-600 dark:text-gray-400">Grow from milk to spiritual meat</div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3 p-4 bg-accent-50 dark:bg-accent-900/20 rounded-xl">
                    <svg class="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <div class="font-semibold text-sm mb-1">Humility & Teachability</div>
                      <div class="text-xs text-gray-600 dark:text-gray-400">Approach God's Word with an open heart</div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <svg class="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <div class="font-semibold text-sm mb-1">Obedience & Trust</div>
                      <div class="text-xs text-gray-600 dark:text-gray-400">Apply what you learn to your daily walk</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Scripture Preview -->
              <div class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 mb-6 border border-primary-200 dark:border-primary-800">
                <div class="text-sm text-gray-500 mb-3 font-semibold">Scripture Preview</div>
                <p class="text-2xl italic text-center leading-relaxed mb-4">
                  "Open thou mine eyes, that I may behold wondrous things out of thy law."
                </p>
                <div class="text-center text-sm text-gray-600 dark:text-gray-400">Psalm 119:18</div>
              </div>

              <!-- CTA Button -->
              <router-link 
                to="/sign-up" 
                class="btn btn-primary w-full py-4 text-lg font-semibold flex items-center justify-center gap-2 group"
              >
                Start This Study Free
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section with Icons -->
    <section class="py-20 bg-gray-50 dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Why Choose BibleStem?</h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Everything you need for deep, meaningful Bible study in one powerful platform
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Feature 1 -->
          <div class="group card p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Interactive Learning</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Engage with Scripture through quizzes, reflections, and guided learning that makes study come alive.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="group card p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Original Languages</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Dive deep into Hebrew and Greek words with meanings, transliterations, and contextual insights.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="group card p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Track Your Journey</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Monitor spiritual growth with progress tracking, achievements, and personalized insights.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Join thousands of believers who are deepening their understanding of Scripture every day — completely free!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <router-link 
            to="/sign-up" 
            class="btn bg-white text-primary-600 hover:bg-white/90 px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            Start Studying Free
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
          <a 
            href="#support"
            class="btn border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            Support Our Ministry
          </a>
        </div>
        
        <div class="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <span class="inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            100% Free Forever
          </span>
          <span class="inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            Donation-Based Ministry
          </span>
          <span class="inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            No Paywalls
          </span>
        </div>
      </div>
    </section>

    <!-- Donation/Support Section -->
    <section id="support" class="py-20 bg-white dark:bg-neutral-900 scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="card p-8 md:p-12 text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Supporting Our Ministry
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              BibleStem is a <strong>100% free, donation-based ministry</strong>. We believe the Gospel should be accessible to everyone, everywhere, without barriers.
            </p>
            
            <div class="grid md:grid-cols-3 gap-6 my-10">
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Free Forever</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">0</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Paywalls or Restrictions</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">❤️</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Donation-Based</div>
              </div>
            </div>

            <p class="text-gray-600 dark:text-gray-400 mb-8">
              If God has blessed you through BibleStem and you'd like to support our mission of spreading His Word, your donation helps us:
            </p>

            <div class="grid md:grid-cols-2 gap-4 text-left mb-8">
              <div class="flex items-start gap-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <div class="text-gray-700 dark:text-gray-300">
                  <strong>Create more studies</strong> and daily devotions
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
                <svg class="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <div class="text-gray-700 dark:text-gray-300">
                  <strong>Keep the platform</strong> running and improving
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                <svg class="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <div class="text-gray-700 dark:text-gray-300">
                  <strong>Reach more people</strong> with the Gospel
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <svg class="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <div class="text-gray-700 dark:text-gray-300">
                  <strong>Add new features</strong> and translations
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800 mb-8">
              <p class="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                "Freely you have received; freely give." - Matthew 10:8
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Every contribution, no matter the size, helps us continue providing free Bible studies to believers worldwide. Thank you for prayerfully considering supporting this ministry! ❤️
              </p>
            </div>

            <!-- Donation Button -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                @click="handleDonation"
                class="btn bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
                Donate Now
              </button>
              <router-link 
                to="/sign-up"
                class="btn btn-secondary px-10 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
              >
                Start Studying Free
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getAllStudies } from '@/data/studies'

// Study count for homepage display
const allStudies = ref<any[]>([])
const totalStudies = computed(() => allStudies.value.length)
const freeStudiesCount = computed(() => allStudies.value.filter((s: any) => s.category === 'free').length)

onMounted(() => {
  allStudies.value = getAllStudies()
})

// Handle donation click - can be updated with actual payment integration
const handleDonation = () => {
  // For now, show a message - you can replace this with actual donation page/modal
  // Options: Stripe, PayPal, Buy Me a Coffee, Ko-fi, etc.
  alert('Thank you for your heart to support BibleStem! 🙏\n\nDonation options coming soon:\n• PayPal\n• Stripe\n• Venmo\n• Buy Me a Coffee\n\nFor now, please contact us if you\'d like to donate.')
  
  // Future: Could open a modal or redirect to /donate page
  // router.push('/donate')
}
</script>
