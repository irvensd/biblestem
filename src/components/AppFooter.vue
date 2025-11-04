<template>
  <footer class="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
    <div class="container mx-auto px-4 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Brand Column -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-white">BibleStem</span>
          </div>
          <p class="text-sm text-neutral-400">
            Interactive Bible study for every believer's journey. Explore foundational truths to deeper prophetic themes.
          </p>
        </div>

        <!-- Quick Links Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/" 
                @click="scrollToTop"
                class="text-sm hover:text-primary-400 transition-colors"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link 
                to="/study-series" 
                @click="scrollToTop"
                class="text-sm hover:text-primary-400 transition-colors"
              >
                Study Series
              </router-link>
            </li>
            <li>
              <router-link 
                to="/about" 
                @click="scrollToTop"
                class="text-sm hover:text-primary-400 transition-colors"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link 
                to="/contact" 
                @click="scrollToTop"
                class="text-sm hover:text-primary-400 transition-colors"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Support Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">Support</h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/help" 
                @click="scrollToTop"
                class="text-sm hover:text-primary-400 transition-colors"
              >
                Help Center
              </router-link>
            </li>
            <li>
              <a 
                href="#support" 
                @click.prevent="scrollToSupport"
                class="text-sm hover:text-primary-400 transition-colors cursor-pointer"
              >
                Donate
              </a>
            </li>
            <li>
              <router-link 
                to="/contact" 
                @click="scrollToTop"
                class="text-sm hover:text-primary-400 transition-colors"
              >
                Contact Us
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Connect Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">Connect</h3>
          <div class="flex flex-wrap items-center gap-4">
            <a
              href="https://instagram.com/biblestem"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@biblestem"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-red-600 flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://x.com/biblestem"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-black flex items-center justify-center transition-colors"
              aria-label="X (Twitter)"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://threads.net/@biblestem"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              aria-label="Threads"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 0C8.74 0 7.017.828 5.304 2.207 3.591 3.586 2.772 5.31 2.772 8.758v6.484c0 3.447.819 5.17 2.532 6.549C7.017 23.17 8.74 24 12.186 24h-.03c3.447 0 5.17-.828 6.883-2.207 1.712-1.379 2.532-3.102 2.532-6.549V8.758c0-3.447-.82-5.17-2.532-6.549C17.336.828 15.613 0 12.167 0h.02zm4.43 16.186V8.758c0-2.343-.573-3.343-1.746-4.186-1.17-.84-2.834-1.08-4.884-1.08h-.045c-2.05 0-3.715.24-4.884 1.08-1.173.843-1.746 1.843-1.746 4.186v7.428c0 2.343.573 3.343 1.746 4.186 1.169.84 2.834 1.08 4.884 1.08h.045c2.05 0 3.715-.24 4.884-1.08 1.173-.843 1.746-1.843 1.746-4.186z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-neutral-400">
          © {{ currentYear }} BibleStem. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <router-link 
            to="/privacy" 
            @click="scrollToTop"
            class="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
          >
            Privacy Policy
          </router-link>
          <router-link 
            to="/terms" 
            @click="scrollToTop"
            class="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
          >
            Terms of Service
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const scrollToSupport = () => {
  const supportSection = document.getElementById('support')
  if (supportSection) {
    const headerOffset = 80
    const elementPosition = supportSection.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>
