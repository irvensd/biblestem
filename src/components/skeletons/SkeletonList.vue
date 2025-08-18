<template>
  <div class="space-y-4">
    <div
      v-for="i in count"
      :key="i"
      class="skeleton-item"
      :style="{ animationDelay: `${i * 120}ms` }"
    >
      <div v-if="variant === 'simple'" class="flex items-center space-x-3 p-3">
        <div class="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full flex-shrink-0 skeleton-shimmer"></div>
        <div class="flex-1 space-y-2">
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 skeleton-shimmer"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2 skeleton-shimmer"></div>
        </div>
      </div>

      <div
        v-else-if="variant === 'detailed'"
        class="p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden"
      >
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-xl flex-shrink-0 skeleton-shimmer"></div>
          <div class="flex-1 space-y-3">
            <div class="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3 skeleton-shimmer"></div>
            <div class="space-y-2">
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full skeleton-shimmer"></div>
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 skeleton-shimmer"></div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16 skeleton-shimmer"></div>
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-20 skeleton-shimmer"></div>
            </div>
          </div>
          <div class="w-16 h-8 bg-neutral-200 dark:bg-neutral-700 rounded skeleton-shimmer"></div>
        </div>
      </div>

      <div
        v-else
        class="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden"
      >
        <div class="flex items-center space-x-3">
          <div class="w-6 h-6 bg-neutral-200 dark:bg-neutral-700 rounded skeleton-shimmer"></div>
          <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-32 skeleton-shimmer"></div>
        </div>
        <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-12 skeleton-shimmer"></div>
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
  variant: 'simple',
})
</script>

<style scoped>
.skeleton-item {
  opacity: 0;
  animation: fadeInUp 0.5s ease-out forwards;
}

.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    rgb(229 229 229) 0%,
    rgb(212 212 212) 50%,
    rgb(229 229 229) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.8s ease-in-out infinite;
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation for list items */
.skeleton-item:nth-child(1) { animation-delay: 0.1s; }
.skeleton-item:nth-child(2) { animation-delay: 0.2s; }
.skeleton-item:nth-child(3) { animation-delay: 0.3s; }
.skeleton-item:nth-child(4) { animation-delay: 0.4s; }
.skeleton-item:nth-child(5) { animation-delay: 0.5s; }
</style>
