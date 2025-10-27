<template>
  <div class="space-y-8">
    <!-- Hero Section with Enhanced Animation -->
    <div class="text-center">
      <div class="relative mb-8">
        <!-- Animated Background -->
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl transform rotate-1"></div>
        <div class="relative bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl">
          <!-- Icon with Animation -->
          <div class="w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          
          <h3 class="text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 leading-tight">
            {{ lesson.title }}
          </h3>
          
          <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            {{ lesson.description }}
          </p>
          
          <!-- Enhanced Meta Info -->
          <div class="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div class="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-full border border-primary-200 dark:border-primary-800">
              <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-primary-700 dark:text-primary-300 font-medium">
                {{ lesson.scripture }}
              </span>
            </div>
            
            <div class="inline-flex items-center space-x-2 bg-secondary-50 dark:bg-secondary-900/20 px-4 py-2 rounded-full border border-secondary-200 dark:border-secondary-800">
              <svg class="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-secondary-700 dark:text-secondary-300 font-medium">
                {{ lesson.duration }} minutes
              </span>
            </div>
            
            <div class="inline-flex items-center space-x-2 bg-accent-50 dark:bg-accent-900/20 px-4 py-2 rounded-full border border-accent-200 dark:border-accent-800">
              <svg class="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-accent-700 dark:text-accent-300 font-medium capitalize">
                {{ study.difficulty }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Study Path Preview with Enhanced Design -->
    <div class="bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 dark:from-primary-900/20 dark:via-secondary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800 shadow-lg">
      <h4 class="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-6 text-center">
        Your Study Journey Today
      </h4>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div 
          v-for="(section, index) in studySections" 
          :key="section.key" 
          class="text-center group cursor-pointer"
          @click="goToSection(index)"
        >
          <div class="relative mb-3">
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              :class="index === 0 
                ? 'bg-gradient-to-br from-accent-500 to-accent-600 shadow-lg' 
                : 'bg-neutral-300 dark:bg-neutral-600 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500'"
            >
              <span class="text-white text-lg font-bold">{{ index + 1 }}</span>
            </div>
            
            <!-- Connection Line -->
            <div 
              v-if="index < studySections.length - 1"
              class="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-neutral-300 to-neutral-400 dark:from-neutral-600 dark:to-neutral-700 transform translate-x-2"
            ></div>
          </div>
          
          <span class="text-sm text-neutral-600 dark:text-neutral-400 leading-tight font-medium group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
            {{ section.title }}
          </span>
          
          <div class="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
            {{ section.duration }}
          </div>
        </div>
      </div>
    </div>

    <!-- Hook Video/Animation with Enhanced Placeholder -->
    <div v-if="lesson.hookVideo || isPremium" class="mb-8">
      <div class="aspect-video bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 dark:from-primary-900/20 dark:via-secondary-900/20 dark:to-accent-900/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary-200 dark:border-primary-800 group cursor-pointer hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300">
        <div class="text-center">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-2">
            {{ isPremium ? 'Intro Video Available' : 'Video Hook (Premium Feature)' }}
          </p>
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            {{ isPremium ? 'Click to play introduction video' : 'Upgrade to access video content' }}
          </p>
        </div>
      </div>
    </div>

    <!-- Opening Thought with Enhanced Design -->
    <div v-if="lesson.openingThought" class="text-center">
      <div class="relative">
        <!-- Decorative Elements -->
        <div class="absolute -top-4 -left-4 w-8 h-8 bg-accent-500/20 rounded-full"></div>
        <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-primary-500/20 rounded-full"></div>
        
        <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-4 left-4 w-16 h-16 border-2 border-accent-500 rounded-full"></div>
            <div class="absolute bottom-4 right-4 w-12 h-12 border-2 border-primary-500 rounded-full"></div>
          </div>
          
          <div class="relative">
            <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            
            <h4 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Opening Thought
            </h4>
            
            <blockquote class="text-xl text-neutral-700 dark:text-neutral-300 italic leading-relaxed max-w-4xl mx-auto">
              "{{ lesson.openingThought }}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <!-- Getting Started Message with Enhanced Design -->
    <div v-else class="text-center">
      <div class="max-w-4xl mx-auto">
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          Ready to dive deep into God's Word? This lesson will guide you through Scripture,
          interactive learning, and practical application that will transform your understanding.
        </p>
        
        <div class="inline-flex items-center space-x-3 text-primary-600 dark:text-primary-400 mb-8 bg-primary-50 dark:bg-primary-900/20 px-6 py-4 rounded-2xl border border-primary-200 dark:border-primary-800">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-lg font-semibold">Ready to explore {{ lesson.scripture }}?</span>
          <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
        
        <!-- Call to Action -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="startLesson"
            class="btn-primary btn-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Begin Study</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <button
            @click="showLessonPreview"
            class="btn-secondary btn-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Preview Lesson</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 16.057 7.522 19 12 19s8.268-2.943 9.542-7c-1.274-4.057-5.064-7-9.542-7S3.732 7.943 2.458 12z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Lesson, Study } from '../../data/studies'

interface Props {
  lesson: Lesson
  study: Study
  isPremium: boolean
  isCompleted?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  complete: []
  next: []
  previous: []
}>()

const studySections = [
  { key: 'hook', title: 'Introduction', duration: '3 min' },
  { key: 'scripture', title: 'Scripture', duration: '8 min' },
  { key: 'interactive', title: 'Interactive', duration: '5 min' },
  { key: 'application', title: 'Application', duration: '4 min' },
  { key: 'prayer', title: 'Prayer', duration: '3 min' },
  { key: 'notes', title: 'Notes', duration: '2 min' }
]

const goToSection = (index: number) => {
  // This would be handled by the parent component
  console.log('Navigate to section:', index)
}

const startLesson = () => {
  emit('next')
}

const showLessonPreview = () => {
  // Show lesson preview modal or navigate to preview
  console.log('Show lesson preview')
}
</script>

<style scoped>
/* Enhanced animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
