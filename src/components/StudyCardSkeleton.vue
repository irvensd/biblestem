<template>
  <div class="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm animate-pulse">
    <!-- Skeleton Image -->
    <div class="aspect-[16/9] bg-neutral-200 dark:bg-neutral-700"></div>
    
    <!-- Skeleton Content -->
    <div class="p-6 space-y-4">
      <!-- Category Badge Skeleton -->
      <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-24"></div>
      
      <!-- Title Skeleton -->
      <div class="space-y-2">
        <div class="h-7 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
        <div class="h-7 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
      </div>
      
      <!-- Description Skeleton -->
      <div class="space-y-2">
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-4/6"></div>
      </div>
      
      <!-- Meta Info Skeleton -->
      <div class="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-20"></div>
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-24"></div>
      </div>
      
      <!-- Button Skeleton -->
      <div class="h-12 bg-neutral-200 dark:bg-neutral-700 rounded-xl w-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Skeleton loader for study cards - no props needed
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

