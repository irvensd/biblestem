<template>
  <div id="app" class="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
    <AppHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<style>
/* Global styles are handled in base.css */
</style>
