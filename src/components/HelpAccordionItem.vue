<template>
  <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg mb-3 overflow-hidden">
    <button
      @click="$emit('toggle')"
      class="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
      :aria-expanded="isOpen"
    >
      <span class="font-semibold text-neutral-900 dark:text-neutral-100 pr-4">
        {{ title }}
      </span>
      <svg
        class="w-5 h-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="px-5 pb-5 text-neutral-700 dark:text-neutral-300 prose dark:prose-invert max-w-none"
      v-html="content"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  isOpen: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>
