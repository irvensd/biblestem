<template>
  <div :class="gridClasses">
    <div 
      v-for="i in count" 
      :key="i"
      class="animate-pulse"
      :style="{ animationDelay: `${i * 100}ms` }"
    >
      <div class="card p-4 space-y-4">
        <!-- Header -->
        <div class="flex items-center space-x-3">
          <div 
            class="bg-neutral-200 dark:bg-neutral-700 rounded-xl flex-shrink-0"
            :class="showLargeIcon ? 'w-16 h-16' : 'w-10 h-10'"
          ></div>
          <div class="flex-1 space-y-2">
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
            <div v-if="showSubtitle" class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
          </div>
        </div>
        
        <!-- Content -->
        <div v-if="showContent" class="space-y-2">
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-4/5"></div>
        </div>
        
        <!-- Meta -->
        <div v-if="showMeta" class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-12"></div>
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
          </div>
          <div v-if="showAction" class="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-20"></div>
        </div>
        
        <!-- Progress Bar -->
        <div v-if="showProgress" class="space-y-2">
          <div class="flex justify-between">
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-10"></div>
          </div>
          <div class="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  count?: number
  columns?: 1 | 2 | 3 | 4
  showLargeIcon?: boolean
  showSubtitle?: boolean
  showContent?: boolean
  showMeta?: boolean
  showAction?: boolean
  showProgress?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  count: 6,
  columns: 2,
  showLargeIcon: false,
  showSubtitle: true,
  showContent: true,
  showMeta: true,
  showAction: false,
  showProgress: false
})

const gridClasses = computed(() => {
  const base = 'grid gap-4 sm:gap-6'
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }
  return `${base} ${columnClasses[props.columns]}`
})
</script>
