<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-secondary-600 py-20">
      <div class="container-base text-center">
        <h1 class="text-5xl font-bold text-white mb-6">Bible Study Series</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          Explore our comprehensive collection of interactive Bible studies designed to deepen your faith and understanding of Scripture.
        </p>
      </div>
    </section>

    <!-- Coming Soon Content -->
    <section class="section-padding">
      <div class="container-base">
        <div class="max-w-4xl mx-auto text-center">
          <div class="card p-12 mb-12">
            <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z"/>
              </svg>
            </div>
            
            <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Study Series Coming Soon!
            </h2>
            
            <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              We're crafting amazing interactive Bible study series that will transform how you engage with Scripture. 
              Our team of Biblical scholars and educational designers are working hard to bring you content that's both 
              theologically sound and engaging for modern learners.
            </p>

            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                <h3 class="font-bold text-primary-800 dark:text-primary-200 mb-2">Old Testament</h3>
                <p class="text-sm text-primary-600 dark:text-primary-400">Genesis to Malachi studies</p>
              </div>
              <div class="p-6 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl">
                <h3 class="font-bold text-secondary-800 dark:text-secondary-200 mb-2">New Testament</h3>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">Gospels to Revelation</p>
              </div>
              <div class="p-6 bg-accent-50 dark:bg-accent-900/20 rounded-xl">
                <h3 class="font-bold text-accent-800 dark:text-accent-200 mb-2">Topical Studies</h3>
                <p class="text-sm text-accent-600 dark:text-accent-400">Faith, Hope, Love & more</p>
              </div>
            </div>

            <p class="text-neutral-600 dark:text-neutral-400 mb-8">
              Want to add specific study series or have suggestions? 
              <strong>Continue prompting to help us build this page content!</strong>
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn-primary">
                Notify Me When Available
              </button>
              <router-link to="/" class="btn-secondary">
                Back to Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Preview Cards -->
    <section class="pb-20">
      <div class="container-base">
        <h3 class="text-2xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200">
          Preview: What's Coming
        </h3>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Preview Card 1 -->
          <div class="card p-6 opacity-75">
            <div class="aspect-video bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-primary-700 font-medium">Study Preview</span>
            </div>
            <h4 class="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200">Psalms of David</h4>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              An interactive journey through the most beloved Psalms with commentary and reflection questions.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-1 rounded">Coming Soon</span>
              <span class="text-xs text-neutral-500">12 Lessons</span>
            </div>
          </div>

          <!-- Preview Card 2 -->
          <div class="card p-6 opacity-75">
            <div class="aspect-video bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-secondary-700 font-medium">Study Preview</span>
            </div>
            <h4 class="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200">Gospel of John</h4>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              Discover the profound truths in John's Gospel through verse-by-verse exploration.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 px-2 py-1 rounded">Coming Soon</span>
              <span class="text-xs text-neutral-500">21 Lessons</span>
            </div>
          </div>

          <!-- Preview Card 3 -->
          <div class="card p-6 opacity-75">
            <div class="aspect-video bg-gradient-to-br from-accent-200 to-accent-300 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-accent-700 font-medium">Study Preview</span>
            </div>
            <h4 class="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200">Faith Foundations</h4>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              Essential teachings for new believers and those wanting to strengthen their foundation.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 px-2 py-1 rounded">Coming Soon</span>
              <span class="text-xs text-neutral-500">8 Lessons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>
