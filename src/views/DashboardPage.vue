<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Dashboard Header -->
    <section
      class="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700"
    >
      <div class="container-base py-6 sm:py-8">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 class="heading-2">Welcome back, {{ authStore.user?.name }}!</h1>
            <p class="body-normal mt-1 sm:mt-2">
              Continue your Bible study journey where you left off
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div class="flex items-center space-x-2">
              <div
                :class="authStore.isPremium ? 'bg-accent-500' : 'bg-neutral-500'"
                class="w-3 h-3 rounded-full"
              ></div>
              <span
                class="text-sm font-medium"
                :class="authStore.isPremium ? 'text-accent-600' : 'text-neutral-600'"
              >
                {{ authStore.isPremium ? 'Premium' : 'Free' }} Plan
              </span>
            </div>
            <button
              v-if="!authStore.isPremium"
              @click="showUpgradeModal = true"
              class="btn-accent text-sm py-2 px-4 w-full sm:w-auto"
            >
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Content -->
    <div class="container-base py-4 sm:py-6 lg:py-8 pb-20 lg:pb-8">
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <!-- Main Content -->
        <div class="xl:col-span-2 space-y-4 sm:space-y-6">
          <!-- Progress Overview -->
          <section class="card p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <h2 class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6">Your Progress</h2>
            <div class="grid grid-cols-3 gap-3 sm:gap-6">
              <div class="text-center">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg touch-manipulation"
                >
                  <span class="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{{
                    authStore.user?.studiesCompleted || 0
                  }}</span>
                </div>
                <div class="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 leading-tight">
                  Studies<br class="sm:hidden" /> Completed
                </div>
              </div>
              <div class="text-center">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg touch-manipulation"
                >
                  <span class="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{{
                    calculateStreak()
                  }}</span>
                </div>
                <div class="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 leading-tight">
                  Day<br class="sm:hidden" /> Streak
                </div>
              </div>
              <div class="text-center">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg touch-manipulation"
                >
                  <span class="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{{
                    achievementsStore.totalBadgesEarned
                  }}</span>
                </div>
                <div class="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 leading-tight">
                  Badges<br class="sm:hidden" /> Earned
                </div>
              </div>
            </div>
          </section>

          <!-- Continue Studies -->
          <section class="card p-4 sm:p-6">
            <div
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6"
            >
              <h2 class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Continue Learning
              </h2>
              <router-link
                to="/study-series"
                class="text-primary-600 hover:text-primary-700 font-medium text-sm self-start sm:self-auto"
              >
                View All Series →
              </router-link>
            </div>

            <div class="space-y-4">
              <!-- Current Study -->
              <div
                v-if="currentStudy"
                class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-4 sm:p-6 rounded-xl border border-primary-200 dark:border-primary-800"
              >
                <div
                  class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4"
                >
                  <div class="flex-1 min-w-0">
                    <h3
                      class="font-bold text-neutral-900 dark:text-neutral-100 mb-1 text-sm sm:text-base"
                    >
                      {{ currentStudy.title }}
                    </h3>
                    <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {{
                        currentStudy.nextLesson
                          ? `Next: ${currentStudy.nextLesson.title}`
                          : 'Study Complete!'
                      }}
                    </p>
                  </div>
                  <span
                    class="text-white text-xs px-2 py-1 rounded-full self-start sm:self-auto flex-shrink-0"
                    :class="currentStudy.progress === 100 ? 'bg-green-500' : 'bg-primary-500'"
                  >
                    {{ currentStudy.progress === 100 ? 'Completed' : 'In Progress' }}
                  </span>
                </div>
                <div class="mb-4">
                  <div
                    class="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2"
                  >
                    <span>Progress</span>
                    <span>{{ Math.round(currentStudy.progress) }}%</span>
                  </div>
                  <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div
                      class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      :style="`width: ${currentStudy.progress}%`"
                    ></div>
                  </div>
                </div>
                <router-link
                  :to="`/study/${currentStudy.id}`"
                  class="btn-primary w-full md:w-auto inline-block text-center"
                >
                  {{ currentStudy.progress === 100 ? 'Review Study' : 'Continue Study' }}
                </router-link>
              </div>

              <!-- Recommended Studies -->
              <div
                v-if="recommendedStudies.length > 0"
                class="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div
                  v-for="study in recommendedStudies"
                  :key="study.id"
                  class="card interactive p-4 animate-in cursor-pointer"
                  @click="goToStudy(study.id)"
                >
                  <div
                    class="aspect-video rounded-lg mb-3 flex items-center justify-center bg-gradient-to-br"
                    :class="study.color"
                  >
                    <span class="text-white font-medium text-sm">{{
                      study.category === 'premium' ? 'Premium' : 'Free'
                    }}</span>
                  </div>
                  <h4 class="font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {{ study.title }}
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {{ study.lessons.length }} lessons • {{ formatDuration(study.totalDuration) }}
                  </p>
                  <div class="flex items-center justify-between">
                    <span
                      class="text-xs px-2 py-1 rounded"
                      :class="
                        study.category === 'free'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          : 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'
                      "
                    >
                      {{
                        study.category === 'free'
                          ? 'Free'
                          : authStore.isPremium
                            ? 'Premium'
                            : 'Requires Premium'
                      }}
                    </span>
                    <button
                      class="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      @click.stop="goToStudy(study.id)"
                    >
                      Start →
                    </button>
                  </div>
                </div>
              </div>

              <!-- Loading State for Recommended Studies -->
              <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SkeletonCard
                  v-for="i in 4"
                  :key="i"
                  :show-avatar="true"
                  :show-description="true"
                  :show-meta="true"
                  :show-action="true"
                />
              </div>

              <!-- No Current Study Message -->
              <div v-if="!currentStudy" class="text-center py-8">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                  Start Your Bible Study Journey
                </h3>
                <p class="text-neutral-600 dark:text-neutral-400 mb-4">
                  Choose a study below to begin learning and growing in your faith.
                </p>
                <router-link to="/study-series" class="btn-primary">
                  Browse Study Series
                </router-link>
              </div>
            </div>
          </section>

          <!-- Completed Studies Section -->
          <section v-if="completedStudies.length > 0" class="card p-4 sm:p-6">
            <div
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6"
            >
              <h2 class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Completed Studies
              </h2>
              <div class="flex items-center space-x-2 text-green-600">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="font-medium text-sm sm:text-base"
                  >{{ completedStudies.length }} Completed</span
                >
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <div
                v-for="study in completedStudies.slice(0, 6)"
                :key="study.id"
                class="card interactive p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 animate-in cursor-pointer"
                @click="goToStudy(study.id)"
              >
                <div class="flex items-start space-x-3">
                  <div
                    class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-green-800 dark:text-green-200 mb-1 truncate">
                      {{ study.title }}
                    </h4>
                    <p class="text-sm text-green-600 dark:text-green-400 mb-2">
                      {{ study.lessons.length }} lessons completed
                    </p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-green-500">{{
                        formatDuration(study.totalDuration)
                      }}</span>
                      <button class="text-green-600 hover:text-green-700 text-xs font-medium">
                        Review →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="completedStudies.length > 6" class="mt-4 text-center">
              <button class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                View All {{ completedStudies.length }} Completed Studies →
              </button>
            </div>
          </section>

          <!-- Empty State for No Completed Studies -->
          <section
            v-else-if="completedStudies.length === 0 && !currentStudy"
            class="card p-4 sm:p-6"
          >
            <StudiesEmpty type="completed" @secondary-action="showStudyTips" />
          </section>

          <!-- Recent Activity -->
          <section class="card p-4 sm:p-6">
            <h2
              class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6"
            >
              Recent Activity
            </h2>
            <div class="space-y-3 sm:space-y-4">
              <div
                class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div
                  class="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="font-medium text-neutral-900 dark:text-neutral-100 text-sm sm:text-base"
                  >
                    Completed Psalm 22 Study
                  </p>
                  <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    2 hours ago
                  </p>
                </div>
              </div>

              <div
                class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div
                  class="w-8 h-8 sm:w-10 sm:h-10 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="font-medium text-neutral-900 dark:text-neutral-100 text-sm sm:text-base"
                  >
                    Earned "Daily Reader" Badge
                  </p>
                  <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Yesterday</p>
                </div>
              </div>

              <div
                class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div
                  class="w-8 h-8 sm:w-10 sm:h-10 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="font-medium text-neutral-900 dark:text-neutral-100 text-sm sm:text-base"
                  >
                    Started Psalms Series
                  </p>
                  <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    3 days ago
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="content-spacing">
          <!-- Achievement Badges -->
          <AchievementBadges />

          <!-- Scripture Memory Cards -->
          <MemoryCards />

          <!-- Study Templates -->
          <StudyTemplates @upgrade="showUpgradeModal = true" />

          <!-- Quick Stats -->
          <div class="card p-4 sm:p-6">
            <h3
              class="font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 text-sm sm:text-base"
            >
              Quick Stats
            </h3>
            <div class="space-y-3 sm:space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-neutral-600 dark:text-neutral-400 text-sm">Member since</span>
                <span class="font-medium text-neutral-900 dark:text-neutral-100 text-sm">{{
                  formatDate(authStore.user?.joinDate)
                }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-600 dark:text-neutral-400 text-sm">Total studies</span>
                <span class="font-medium text-neutral-900 dark:text-neutral-100 text-sm">{{
                  authStore.user?.studiesCompleted || 0
                }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-600 dark:text-neutral-400 text-sm">Plan type</span>
                <span
                  class="font-medium text-sm"
                  :class="authStore.isPremium ? 'text-accent-600' : 'text-neutral-600'"
                >
                  {{ authStore.isPremium ? 'Premium' : 'Free' }}
                </span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-2 sm:space-y-3">
            <button
              @click="startNewStudy"
              class="w-full btn-primary text-sm sm:text-base py-2 sm:py-3"
            >
              Start New Study
            </button>
            <button
              @click="showProgressModal = true"
              class="w-full btn-secondary text-sm sm:text-base py-2 sm:py-3"
            >
              View Progress Report
            </button>
            <button
              v-if="!authStore.isPremium"
              @click="showUpgradeModal = true"
              class="w-full btn-accent text-sm sm:text-base py-2 sm:py-3"
            >
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Report Modal -->
    <div
      v-if="showProgressModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="showProgressModal = false"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Your Progress Report
            </h3>
            <button
              @click="showProgressModal = false"
              class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6 space-y-6">
          <!-- Overall Stats -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
              <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {{ completedStudies.length }}
              </div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">Studies Completed</div>
            </div>
            <div class="text-center p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl">
              <div class="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                {{ calculateStreak() }}
              </div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">Day Streak</div>
            </div>
            <div class="text-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-xl">
              <div class="text-2xl font-bold text-accent-600 dark:text-accent-400">
                {{ calculateTotalMinutes() }}
              </div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">Minutes Studied</div>
            </div>
          </div>

          <!-- Study Progress -->
          <div>
            <h4 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Study Progress
            </h4>
            <div class="space-y-3">
              <div
                v-for="study in allStudiesWithProgress"
                :key="study.id"
                class="flex items-center space-x-3 p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg"
              >
                <div class="flex-1">
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100">{{
                      study.title
                    }}</span>
                    <span class="text-sm text-neutral-600 dark:text-neutral-400"
                      >{{ Math.round(study.progressPercent) }}%</span
                    >
                  </div>
                  <div class="w-full bg-neutral-200 dark:bg-neutral-600 rounded-full h-2">
                    <div
                      class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      :style="`width: ${study.progressPercent}%`"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Weekly Activity -->
          <div>
            <h4 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              This Week's Activity
            </h4>
            <div class="grid grid-cols-7 gap-2">
              <div v-for="day in weeklyActivity" :key="day.day" class="text-center">
                <div class="text-xs text-neutral-600 dark:text-neutral-400 mb-1">{{ day.day }}</div>
                <div
                  class="w-8 h-8 mx-auto rounded-lg flex items-center justify-center text-xs font-bold"
                  :class="
                    day.active
                      ? 'bg-green-500 text-white'
                      : 'bg-neutral-200 dark:bg-neutral-600 text-neutral-500'
                  "
                >
                  {{ day.active ? '✓' : '-' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upgrade Modal -->
    <div
      v-if="showUpgradeModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4"
      @click="showUpgradeModal = false"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-sm sm:max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-center justify-between">
            <h3 class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Upgrade to Premium
            </h3>
            <button
              @click="showUpgradeModal = false"
              class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-4 sm:p-6">
          <div class="text-center mb-4 sm:mb-6">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
            >
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Unlock Premium Features
            </h4>
            <p class="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm px-2">
              Access exclusive Bible studies and advanced features
            </p>
          </div>

          <div class="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <div class="flex items-center space-x-2 sm:space-x-3">
              <div
                class="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-2 h-2 sm:w-3 sm:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                >Access to 20+ premium Bible studies</span
              >
            </div>
            <div class="flex items-center space-x-2 sm:space-x-3">
              <div
                class="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-2 h-2 sm:w-3 sm:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                >Extended 15-25 minute lessons</span
              >
            </div>
            <div class="flex items-center space-x-2 sm:space-x-3">
              <div
                class="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-2 h-2 sm:w-3 sm:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                >Video content and visual aids</span
              >
            </div>
            <div class="flex items-center space-x-2 sm:space-x-3">
              <div
                class="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-2 h-2 sm:w-3 sm:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                >Downloadable study guides</span
              >
            </div>
            <div class="flex items-center space-x-2 sm:space-x-3">
              <div
                class="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-2 h-2 sm:w-3 sm:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                >Priority support</span
              >
            </div>
          </div>

          <div class="text-center mb-4 sm:mb-6">
            <div class="text-2xl sm:text-3xl font-bold text-accent-600 dark:text-accent-400 mb-1">
              $9.99
            </div>
            <div class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">per month</div>
          </div>

          <div class="space-y-2 sm:space-y-3">
            <button
              @click="handleUpgrade"
              class="w-full btn-accent text-sm sm:text-base py-2.5 sm:py-3"
            >
              Start 3-Day Free Trial
            </button>
            <button
              @click="showUpgradeModal = false"
              class="w-full btn-secondary text-sm sm:text-base py-2.5 sm:py-3"
            >
              Maybe Later
            </button>
          </div>

          <div class="text-center mt-3 sm:mt-4">
            <p class="text-xs text-neutral-500 dark:text-neutral-400">
              Cancel anytime. No commitment required.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getFreeStudies, getPremiumStudies, type Study } from '../data/studies'
import { useAuthStore } from '../stores/auth'
import { useStudyProgressStore } from '../stores/studyProgress'
import { useAchievementsStore } from '../stores/achievements'
import AchievementBadges from '../components/AchievementBadges.vue'
import MemoryCards from '../components/MemoryCards.vue'
import StudyTemplates from '../components/StudyTemplates.vue'
import SkeletonCard from '../components/skeletons/SkeletonCard.vue'
import SkeletonGrid from '../components/skeletons/SkeletonGrid.vue'
import StudiesEmpty from '../components/empty-states/StudiesEmpty.vue'

const router = useRouter()

// Initialize stores
const authStore = useAuthStore()
const progressStore = useStudyProgressStore()
const achievementsStore = useAchievementsStore()

// Initialize stores on mount
onMounted(async () => {
  try {
    // Initialize progress store with demo data
    progressStore.loadFromStorage()

    // Initialize auth if needed
    if (!authStore.isInitialized) {
      await authStore.initializeAuth()
    }
  } catch (error) {
    console.warn('Failed to initialize stores in DashboardPage:', error)
  }
})

// Modal states
const showProgressModal = ref(false)
const showUpgradeModal = ref(false)

const allStudies = computed(() => [...getFreeStudies(), ...getPremiumStudies()])

const currentStudy = computed(() => {
  // Find the study with highest progress that's not 100%
  let bestStudy = null
  let highestProgress = 0

  const allProgress = progressStore.getAllStudyProgress()

  Object.entries(allProgress).forEach(([studyId, progress]) => {
    const study = allStudies.value.find((s) => s.id === studyId)
    if (!study) return

    const progressPercent = progressStore.getStudyCompletionPercentage(
      studyId,
      study.lessons.length,
    )

    if (progressPercent > highestProgress && progressPercent < 100) {
      highestProgress = progressPercent
      const nextLessonIndex = progress.completedLessons.length
      bestStudy = {
        ...study,
        progress: progressPercent,
        nextLesson: nextLessonIndex < study.lessons.length ? study.lessons[nextLessonIndex] : null,
      }
    }
  })

  return bestStudy
})

const completedStudies = computed(() => {
  const allProgress = progressStore.getAllStudyProgress()

  return allStudies.value.filter((study) => {
    const progress = allProgress[study.id]
    if (!progress) return false

    const completionPercent = progressStore.getStudyCompletionPercentage(
      study.id,
      study.lessons.length,
    )
    return completionPercent === 100
  })
})

const recommendedStudies = computed(() => {
  const userPlan = authStore.user?.plan || 'free'
  const allProgress = progressStore.getAllStudyProgress()
  const startedStudies = Object.keys(allProgress)

  // Get studies not yet started, prioritizing free studies for free users
  const available = allStudies.value
    .filter((study) => !startedStudies.includes(study.id))
    .filter((study) => userPlan === 'premium' || study.category === 'free')
    .slice(0, 4)

  return available
})

const allStudiesWithProgress = computed(() => {
  const allProgress = progressStore.getAllStudyProgress()

  return allStudies.value
    .map((study) => {
      const progressPercent = progressStore.getStudyCompletionPercentage(
        study.id,
        study.lessons.length,
      )
      return {
        ...study,
        progressPercent,
      }
    })
    .filter((study) => study.progressPercent > 0)
})

const weeklyActivity = computed(() => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return days.map((day, index) => ({
    day,
    active: Math.random() > 0.3, // Mock activity data
  }))
})

const calculateStreak = () => {
  // Mock calculation - in real app this would come from API
  return Math.floor(Math.random() * 30) + 1
}

const calculateTotalMinutes = () => {
  // Calculate total minutes from completed studies
  return completedStudies.value.reduce((total, study) => total + study.totalDuration, 0)
}

const formatDate = (dateString?: string) => {
  if (!dateString) return 'Unknown'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

const formatDuration = (minutes: number) => {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}

const goToStudy = (studyId: string) => {
  router.push(`/study/${studyId}`)
}

// Button handlers
const startNewStudy = () => {
  router.push('/study-series')
}

const handleUpgrade = () => {
  // In a real app, this would integrate with a payment processor
  alert(
    'Demo Mode: In a real app, this would open the payment flow to upgrade to Premium ($9.99/month, 3-day free trial). For now, you can sign in with the premium demo account: demo@biblestem.com / demo123',
  )
  showUpgradeModal.value = false
}

const showStudyTips = () => {
  alert(
    'Study Tips:\n\n• Set aside dedicated time for Bible study\n• Pray before you begin\n• Take notes and reflect on what you learn\n• Apply the lessons to your daily life\n• Join study discussions when available',
  )
}

onMounted(() => {
  // Initialize stores
  authStore.initializeAuth()
  progressStore.loadFromStorage()
  achievementsStore.loadFromStorage()
  achievementsStore.checkAchievements()
})
</script>
