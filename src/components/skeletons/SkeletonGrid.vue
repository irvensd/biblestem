<template>
  <div :class="gridClasses">
    <div
      v-for="i in count"
      :key="i"
      class="skeleton-item"
      :style="{ animationDelay: `${i * 150}ms` }"
    >
      <div class="card p-4 space-y-4 overflow-hidden">
        <!-- Header -->
        <div class="flex items-center space-x-3">
          <div
            class="bg-neutral-200 dark:bg-neutral-700 rounded-xl flex-shrink-0 skeleton-shimmer"
            :class="showLargeIcon ? 'w-16 h-16' : 'w-10 h-10'"
          ></div>
          <div class="flex-1 space-y-2">
            <div class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 skeleton-shimmer"></div>
            <div
              v-if="showSubtitle"
              class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2 skeleton-shimmer"
            ></div>
          </div>
        </div>

        <!-- Content -->
        <div v-if="showContent" class="space-y-2">
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full skeleton-shimmer"></div>
          <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-4/5 skeleton-shimmer"></div>
        </div>

        <!-- Meta -->
        <div v-if="showMeta" class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-12 skeleton-shimmer"></div>
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16 skeleton-shimmer"></div>
          </div>
          <div v-if="showAction" class="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-20 skeleton-shimmer"></div>
        </div>

        <!-- Progress Bar -->
        <div v-if="showProgress" class="space-y-2">
          <div class="flex justify-between">
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-16 skeleton-shimmer"></div>
            <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-10 skeleton-shimmer"></div>
          </div>
          <div class="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  count?: number
  columns?: 1 | 2 | 3 | 4
  showLargeIcon?: boolean
  showSubtitle?: boolean
  showContent?: boolean
  showMeta?: boolean
  showAction?: boolean
  showProgress?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  count: 6,
  columns: 2,
  showLargeIcon: false,
  showSubtitle: true,
  showContent: true,
  showMeta: true,
  showAction: false,
  showProgress: false,
})

const gridClasses = computed(() => {
  const base = 'grid gap-4 sm:gap-6'
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }
  return `${base} ${columnClasses[props.columns]}`
})
</script>

<style scoped>
.skeleton-item {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    rgb(229 229 229) 0%,
    rgb(212 212 212) 50%,
    rgb(229 229 229) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation for grid items */
.skeleton-item:nth-child(1) { animation-delay: 0.1s; }
.skeleton-item:nth-child(2) { animation-delay: 0.2s; }
.skeleton-item:nth-child(3) { animation-delay: 0.3s; }
.skeleton-item:nth-child(4) { animation-delay: 0.4s; }
.skeleton-item:nth-child(5) { animation-delay: 0.5s; }
.skeleton-item:nth-child(6) { animation-delay: 0.6s; }
</style>
