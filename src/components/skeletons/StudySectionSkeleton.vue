<template>
  <div class="mb-12">
    <!-- Section Header Skeleton -->
    <div class="flex items-center justify-between mb-4 px-4">
      <div>
        <div class="h-8 w-48 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse mb-2"></div>
        <div class="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
      </div>
      <div class="hidden md:block h-8 w-24 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
    </div>
    
    <!-- Horizontal Scrolling Container Skeleton -->
    <div class="flex gap-4 overflow-x-auto pb-4 px-4">
      <div
        v-for="i in 4"
        :key="i"
        class="flex-shrink-0 w-72 bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
      >
        <!-- Header Skeleton -->
        <div class="h-32 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 animate-pulse"></div>
        
        <!-- Content Skeleton -->
        <div class="p-5">
          <div class="h-6 bg-neutral-200 dark:bg-neutral-800 rounded mb-3 animate-pulse"></div>
          <div class="h-4 bg-neutral-200 dark:bg-neutral-800 rounded mb-2 animate-pulse"></div>
          <div class="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mb-4 animate-pulse"></div>
          
          <div class="flex items-center gap-3 mb-4">
            <div class="h-4 w-20 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
            <div class="h-4 w-16 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
            <div class="h-4 w-16 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
          </div>
          
          <div class="h-10 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simple skeleton component, no props needed
</script>
