<template>
  <div class="card overflow-hidden">
    <button
      @click="$emit('toggle')"
      class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
    >
      <span class="font-semibold text-lg pr-4">{{ title }}</span>
      <svg
        class="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-show="isOpen"
      class="px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed"
    >
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  content: string
  isOpen: boolean
}

defineProps<Props>()
defineEmits<{
  toggle: []
}>()
</script>
