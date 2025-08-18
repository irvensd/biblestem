<template>
  <div class="animate-pulse space-y-3">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="h-4 bg-neutral-200 dark:bg-neutral-700 rounded"
      :class="getLineWidth(index)"
      :style="{ animationDelay: `${index * 150}ms` }"
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
