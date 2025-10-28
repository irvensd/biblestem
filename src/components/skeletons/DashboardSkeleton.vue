<template>
  <div class="animate-pulse">
    <!-- Dashboard Header -->
    <div class="mb-8">
      <div class="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-48 mb-2"></div>
      <div class="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-64"></div>
    </div>
    
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="i in 3" :key="i" class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-24"></div>
          <div class="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        </div>
        <div class="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
      </div>
    </div>
    
    <!-- In Progress Section -->
    <div class="mb-8">
      <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-32 mb-4"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
          <div class="w-full h-32 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4"></div>
          <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded mb-3"></div>
          <div class="space-y-2 mb-4">
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
          </div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded-full w-full mb-4"></div>
          <div class="h-10 bg-neutral-200 dark:bg-neutral-700 rounded-lg"></div>
        </div>
      </div>
    </div>
    
    <!-- Recent Notes Section -->
    <div class="mb-8">
      <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-32 mb-4"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="i in 4" :key="i" class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
          <div class="flex items-center justify-between mb-3">
            <div class="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-24"></div>
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
          </div>
          <div class="space-y-2 mb-4">
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
          </div>
          <div class="flex space-x-2">
            <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-12"></div>
            <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-16"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Recommended Studies -->
    <div>
      <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-40 mb-4"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
          <div class="w-full h-32 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4"></div>
          <div class="h-6 bg-neutral-200 dark:bg-neutral-700 rounded mb-3"></div>
          <div class="space-y-2 mb-4">
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
          </div>
          <div class="h-10 bg-neutral-200 dark:bg-neutral-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed - this is a pure skeleton component
</script>
