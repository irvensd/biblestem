<template>
  <div class="space-y-4">
    <div 
      v-for="i in count" 
      :key="i" 
      class="animate-pulse"
      :style="{ animationDelay: `${i * 100}ms` }"
    >
      <div v-if="variant === 'simple'" class="flex items-center space-x-3 p-3">
        <div class="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full flex-shrink-0"></div>
        <div class="flex-1 space-y-2">
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
        </div>
      </div>
      
      <div v-else-if="variant === 'detailed'" class="p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl">
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-xl flex-shrink-0"></div>
          <div class="flex-1 space-y-3">
            <div class="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3"></div>
            <div class="space-y-2">
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-20"></div>
            </div>
          </div>
          <div class="w-16 h-8 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        </div>
      </div>
      
      <div v-else class="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
        <div class="flex items-center space-x-3">
          <div class="w-6 h-6 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-32"></div>
        </div>
        <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-12"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  count?: number
  variant?: 'simple' | 'detailed' | 'compact'
}

withDefaults(defineProps<Props>(), {
  count: 3,
  variant: 'simple'
})
</script>
