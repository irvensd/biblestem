<template>
  <footer class="bg-neutral-900 dark:bg-neutral-950 text-neutral-300 pt-12 pb-20 sm:pb-12 border-t border-neutral-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Brand Column -->
        <div class="col-span-1 sm:col-span-2 lg:col-span-1">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z" />
              </svg>
            </div>
            <div>
              <div class="text-xl font-bold text-white">BibleStem</div>
              <div class="text-xs text-neutral-400">Faith. Reimagined.</div>
            </div>
          </div>
          <p class="text-sm text-neutral-400 leading-relaxed mb-4">
            Rooted in Scripture, built through design and technology. Making Bible study accessible to everyone.
          </p>
        </div>

        <!-- Ecosystem Column -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Ecosystem</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/ecosystem" class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                Overview
              </router-link>
            </li>
            <li>
              <router-link to="/study-series" class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                BibleStem Studies
              </router-link>
            </li>
            <li>
              <a
                href="https://biblestem.shop"
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
              >
                <span>BibleStem Threads</span>
                <span class="text-xs uppercase tracking-wide text-yellow-300">
                  Coming Soon
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-sm cursor-not-allowed flex items-center gap-2">
                <span>BibleStem Studios</span>
                <span class="text-xs uppercase tracking-wide text-blue-300">In Development</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-sm cursor-not-allowed flex items-center gap-2">
                <span>BibleStem Community</span>
                <span class="text-xs uppercase tracking-wide text-teal-300">In Planning</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/about" class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/help" class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                Help Center
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                Contact
              </router-link>
            </li>
            <li>
              <router-link to="/donate/paypal" class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                Support Us
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/privacy" class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms" class="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-sm text-neutral-500 text-center sm:text-left">
          &copy; {{ currentYear }} BibleStem. All rights reserved. Made with ❤️ for the Kingdom.
        </p>
        <div class="flex items-center gap-4">
          <a href="#" class="text-neutral-500 hover:text-white transition-colors duration-200" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" class="text-neutral-500 hover:text-white transition-colors duration-200" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" class="text-neutral-500 hover:text-white transition-colors duration-200" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
