<template>
  <div class="animate-pulse">
    <!-- Page Header -->
    <div class="mb-8">
      <div class="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-64 mb-4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
      </div>
    </div>
    
    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in count" :key="i" class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
        <!-- Card Image -->
        <div class="w-full h-32 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4"></div>
        
        <!-- Card Title -->
        <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded mb-3"></div>
        
        <!-- Card Description -->
        <div class="space-y-2 mb-4">
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
        </div>
        
        <!-- Card Meta -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <div class="w-4 h-4 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
          </div>
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-12"></div>
        </div>
        
        <!-- Action Button -->
        <div class="h-10 bg-neutral-200 dark:bg-neutral-700 rounded-lg"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  count?: number
}

withDefaults(defineProps<Props>(), {
  count: 6
})
</script>
