<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 flex items-center justify-center">
    <div class="container-base py-20">
      <div class="max-w-2xl mx-auto text-center">
        <div class="card p-12">
          <div
            class="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1 class="text-4xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            404 - Page Not Found
          </h1>

          <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/" class="btn btn-primary">Back to Home</router-link>
            <router-link to="/study-series" class="btn btn-secondary">Browse Studies</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simple 404 page - no logic needed
</script>

