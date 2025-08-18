<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
    <div class="container-base py-20">
      <div class="max-w-2xl mx-auto text-center">
        <div class="card p-12">
          <div
            class="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>

          <h1 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
            {{ pageTitle }}
          </h1>

          <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            This page is under construction as part of the BibleStem platform. We're working hard to
            bring you amazing content and features!
          </p>

          <p class="text-neutral-600 dark:text-neutral-400 mb-8">
            <strong>Continue prompting to help us build this page content!</strong>
            Let us know what you'd like to see here and we'll create it for you.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/" class="btn-primary"> Back to Home </router-link>
            <router-link to="/study-series" class="btn-secondary"> View Study Series </router-link>
          </div>

          <div class="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <p class="text-sm text-neutral-500 dark:text-neutral-400">
              Current route:
              <code class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-primary-600">{{
                routePath
              }}</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Safe route path access
const routePath = ref('')

// Safe page title computed
const pageTitle = computed(() => {
  const routeName = routePath.value.slice(1) || 'page'
  return routeName.charAt(0).toUpperCase() + routeName.slice(1).replace('-', ' ')
})

// Initialize route safely
onMounted(() => {
  try {
    const route = useRoute()
    routePath.value = route.path || ''
  } catch (error) {
    console.warn('Failed to initialize route in PlaceholderPage:', error)
    routePath.value = ''
  }
})
</script>
