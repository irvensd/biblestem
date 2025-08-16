<template>
  <div id="app" class="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
    <AppHeader />
    <main class="pb-16 sm:pb-0">
      <router-view />
    </main>
    <MobileNavigation />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import MobileNavigation from './components/MobileNavigation.vue'
</script>

<style>
/* Global styles are handled in base.css */
</style>
