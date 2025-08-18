<template>
  <div class="space-y-3">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="skeleton-line skeleton-shimmer"
      :class="getLineWidth(index)"
      :style="{ animationDelay: `${index * 200}ms` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  lines?: number
  variant?: 'paragraph' | 'title' | 'mixed'
}

const props = withDefaults(defineProps<Props>(), {
  lines: 3,
  variant: 'paragraph',
})

const lines = computed(() => Array.from({ length: props.lines }, (_, i) => i))

const getLineWidth = (index: number) => {
  if (props.variant === 'title') {
    return index === 0 ? 'w-3/4' : index === 1 ? 'w-1/2' : 'w-2/3'
  }

  if (props.variant === 'mixed') {
    if (index === 0) return 'w-2/3 h-6' // Title
    if (index === 1) return 'w-1/3 h-3' // Subtitle
    return index === props.lines - 1 ? 'w-3/4' : 'w-full' // Content
  }

  // Paragraph variant
  const widths = ['w-full', 'w-5/6', 'w-4/5', 'w-3/4', 'w-2/3']
  return widths[index % widths.length] || 'w-full'
}
</script>

<style scoped>
.skeleton-line {
  height: 1rem;
  background: rgb(229 229 229);
  border-radius: 0.25rem;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.dark .skeleton-line {
  background: rgb(64 64 64);
}

.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    rgb(229 229 229) 0%,
    rgb(212 212 212) 50%,
    rgb(229 229 229) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite, fadeInUp 0.6s ease-out forwards;
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
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation for text lines */
.skeleton-line:nth-child(1) { animation-delay: 0.1s; }
.skeleton-line:nth-child(2) { animation-delay: 0.2s; }
.skeleton-line:nth-child(3) { animation-delay: 0.3s; }
.skeleton-line:nth-child(4) { animation-delay: 0.4s; }
.skeleton-line:nth-child(5) { animation-delay: 0.5s; }
</style>
