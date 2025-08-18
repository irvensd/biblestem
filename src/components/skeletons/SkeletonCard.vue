<template>
  <div class="card p-4 sm:p-6 overflow-hidden">
    <div class="flex items-start space-x-4">
      <!-- Avatar/Icon Skeleton -->
      <div
        v-if="showAvatar"
        class="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-xl flex-shrink-0 skeleton-shimmer"
      ></div>

      <div class="flex-1 space-y-3">
        <!-- Title Skeleton -->
        <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 skeleton-shimmer"></div>

        <!-- Description Skeleton -->
        <div v-if="showDescription" class="space-y-2">
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full skeleton-shimmer"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3 skeleton-shimmer"></div>
        </div>

        <!-- Meta Information Skeleton -->
        <div v-if="showMeta" class="flex items-center space-x-4">
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16 skeleton-shimmer"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-20 skeleton-shimmer"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-12 skeleton-shimmer"></div>
        </div>

        <!-- Progress Bar Skeleton -->
        <div v-if="showProgress" class="space-y-2">
          <div class="flex justify-between">
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16 skeleton-shimmer"></div>
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-10 skeleton-shimmer"></div>
          </div>
          <div class="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full skeleton-shimmer"></div>
        </div>
      </div>

      <!-- Action Button Skeleton -->
      <div v-if="showAction" class="w-20 h-8 bg-neutral-200 dark:bg-neutral-700 rounded skeleton-shimmer"></div>
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

<style scoped>
.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    rgb(229 229 229) 0%,
    rgb(212 212 212) 50%,
    rgb(229 229 229) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

.dark .skeleton-shimmer {
  background: linear-gradient(
    90deg,
    rgb(64 64 64) 0%,
    rgb(82 82 82) 50%,
    rgb(64 64 64) 100%
  );
  background-size: 200% 100%;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Staggered animation for multiple skeleton items */
.skeleton-shimmer:nth-child(1) { animation-delay: 0s; }
.skeleton-shimmer:nth-child(2) { animation-delay: 0.1s; }
.skeleton-shimmer:nth-child(3) { animation-delay: 0.2s; }
.skeleton-shimmer:nth-child(4) { animation-delay: 0.3s; }
.skeleton-shimmer:nth-child(5) { animation-delay: 0.4s; }
</style>
