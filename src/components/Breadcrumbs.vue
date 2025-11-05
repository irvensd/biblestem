<template>
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center flex-wrap gap-2 text-sm">
      <!-- Home -->
      <li>
        <router-link 
          to="/dashboard"
          class="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Home</span>
        </router-link>
      </li>

      <!-- Breadcrumb Items -->
      <li 
        v-for="(item, index) in items" 
        :key="index"
        class="flex items-center gap-2"
      >
        <!-- Separator -->
        <svg class="w-4 h-4 text-neutral-400 dark:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>

        <!-- Link or Current Page -->
        <router-link 
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {{ item.label }}
        </router-link>
        <span 
          v-else
          class="text-neutral-900 dark:text-neutral-100 font-semibold"
          aria-current="page"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
export interface BreadcrumbItem {
  label: string
  to?: string
}

interface Props {
  items: BreadcrumbItem[]
}

defineProps<Props>()
</script>

