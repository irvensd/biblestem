<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900 pb-20">
    <!-- Header -->
    <div class="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 p-4 z-10">
      <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Search</h1>
      <GlobalSearch />
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobalSearch from '@/components/GlobalSearch.vue'
</script>

