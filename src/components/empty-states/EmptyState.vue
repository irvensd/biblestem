<template>
  <div class="text-center py-12 px-6 animate-fade-in">
    <div class="max-w-md mx-auto">
      <!-- Illustration -->
      <div class="mb-6">
        <div 
          v-if="illustration === 'search'"
          class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center animate-bounce-gentle"
        >
          <svg class="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div 
          v-else-if="illustration === 'notes'"
          class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center animate-bounce-gentle"
        >
          <svg class="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        
        <div 
          v-else-if="illustration === 'studies'"
          class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full flex items-center justify-center animate-bounce-gentle"
        >
          <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        
        <div 
          v-else-if="illustration === 'achievements'"
          class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-full flex items-center justify-center animate-bounce-gentle"
        >
          <svg class="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        
        <div 
          v-else-if="illustration === 'memory'"
          class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center animate-bounce-gentle"
        >
          <svg class="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        
        <div 
          v-else
          class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center animate-bounce-gentle"
        >
          <svg class="w-12 h-12 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      
      <!-- Content -->
      <div class="space-y-3">
        <h3 class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
          {{ title }}
        </h3>
        
        <p class="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
          {{ description }}
        </p>
        
        <!-- Action Button -->
        <div v-if="actionText && actionTo" class="pt-4">
          <router-link
            :to="actionTo"
            class="btn-primary text-sm"
          >
            {{ actionText }}
          </router-link>
        </div>
        
        <div v-else-if="actionText" class="pt-4">
          <button
            @click="$emit('action')"
            class="btn-primary text-sm"
          >
            {{ actionText }}
          </button>
        </div>
        
        <!-- Secondary Action -->
        <div v-if="secondaryText" class="pt-2">
          <button
            @click="$emit('secondary-action')"
            class="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            {{ secondaryText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  illustration?: 'search' | 'notes' | 'studies' | 'achievements' | 'memory' | 'default'
  title: string
  description: string
  actionText?: string
  actionTo?: string
  secondaryText?: string
}

defineProps<Props>()
defineEmits(['action', 'secondary-action'])
</script>
