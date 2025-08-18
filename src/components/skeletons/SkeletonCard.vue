<template>
  <div class="card p-4 sm:p-6 animate-pulse">
    <div class="flex items-start space-x-4">
      <!-- Avatar/Icon Skeleton -->
      <div
        v-if="showAvatar"
        class="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-xl flex-shrink-0"
      ></div>

      <div class="flex-1 space-y-3">
        <!-- Title Skeleton -->
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>

        <!-- Description Skeleton -->
        <div v-if="showDescription" class="space-y-2">
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3"></div>
        </div>

        <!-- Meta Information Skeleton -->
        <div v-if="showMeta" class="flex items-center space-x-4">
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-20"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-12"></div>
        </div>

        <!-- Progress Bar Skeleton -->
        <div v-if="showProgress" class="space-y-2">
          <div class="flex justify-between">
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-10"></div>
          </div>
          <div class="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
        </div>
      </div>

      <!-- Action Button Skeleton -->
      <div v-if="showAction" class="w-20 h-8 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  showAvatar?: boolean
  showDescription?: boolean
  showMeta?: boolean
  showProgress?: boolean
  showAction?: boolean
}

withDefaults(defineProps<Props>(), {
  showAvatar: true,
  showDescription: true,
  showMeta: true,
  showProgress: false,
  showAction: false,
})
</script>
