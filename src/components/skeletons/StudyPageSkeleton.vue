<template>
  <div class="animate-pulse">
    <!-- Back Button -->
    <div class="mb-6">
      <div class="h-10 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-20"></div>
    </div>
    
    <!-- Study Header -->
    <div class="mb-8">
      <div class="h-10 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-4"></div>
      <div class="space-y-2 mb-6">
        <div class="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
        <div class="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
      </div>
      
      <!-- Study Meta -->
      <div class="flex flex-wrap gap-3 mb-6">
        <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-16"></div>
        <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-20"></div>
        <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-14"></div>
      </div>
      
      <!-- Progress Bar -->
      <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded-full w-full"></div>
    </div>
    
    <!-- Lessons List -->
    <div class="space-y-4">
      <div v-for="i in lessonCount" :key="i" class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
        <div class="flex items-center justify-between mb-3">
          <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-40"></div>
          <div class="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
        </div>
        
        <div class="space-y-2 mb-4">
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-4/5"></div>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-4 h-4 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-20"></div>
          </div>
          <div class="h-8 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-20"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  lessonCount?: number
}

withDefaults(defineProps<Props>(), {
  lessonCount: 5
})
</script>
