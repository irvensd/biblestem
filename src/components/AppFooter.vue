<template>
  <footer class="bg-neutral-900 text-gray-300 border-t border-neutral-800">
    <div class="container mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <router-link to="/" class="flex items-center space-x-3 mb-4 group">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-white">BibleStem</span>
          </router-link>
          <p class="text-sm text-gray-400 mb-4 leading-relaxed">
            Interactive Bible study platform designed to help you grow deeper in your faith through structured, engaging studies.
          </p>
          <div class="flex items-center gap-2 text-xs text-gray-500">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            <span>Free Forever • Donation-Based</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/study-series" class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Study Series
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Contact
              </router-link>
            </li>
            <li>
              <router-link to="/help" class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Help Center
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
          <ul class="space-y-3">
            <li>
              <a href="mailto:support@biblestem.com" class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@biblestem.com
              </a>
            </li>
            <li>
              <router-link to="/help#troubleshooting" class="text-gray-400 hover:text-white transition-colors text-sm">
                Troubleshooting
              </router-link>
            </li>
            <li>
              <router-link to="/help#getting-started" class="text-gray-400 hover:text-white transition-colors text-sm">
                Getting Started
              </router-link>
            </li>
            <li>
              <a href="#support" @click.prevent="scrollToSupport" class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
                Support Our Ministry
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
          <div class="space-y-4">
            <!-- Social Links -->
            <div class="flex flex-wrap items-center gap-4">
              <a href="https://instagram.com/biblestem" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-colors group" aria-label="Instagram">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@biblestem" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-colors group" aria-label="YouTube">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://x.com/biblestem" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-colors group" aria-label="X (Twitter)">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://threads.net/@biblestem" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-colors group" aria-label="Threads">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 0C7.815 0 5.868.803 5.868.803L5.87.806c-.74.366-1.325 1.108-1.423 1.958-.03.264-.037.53-.02.796-.003.11-.003.22-.003.33v10.88c0 1.22 1.99 2.21 4.443 2.21h.044c.664 0 1.306-.094 1.903-.272 1.11-.332 2.042-1.024 2.66-1.928.614.904 1.546 1.596 2.656 1.928.598.178 1.24.272 1.904.272h.044c2.454 0 4.443-.99 4.443-2.21V3.89c0-.11 0-.22-.003-.33.017-.266.01-.532-.02-.796-.098-.85-.683-1.592-1.423-1.958-.002-.003-.002-.003-.004-.003C18.134.803 16.187 0 12.186 0zm0 2.842c2.393 0 4.334.956 4.334 2.136 0 1.18-1.94 2.136-4.334 2.136-2.393 0-4.334-.956-4.334-2.136 0-1.18 1.941-2.136 4.334-2.136zm-4.334 8.808V7.075c1.484.854 3.45 1.357 4.334 1.357.885 0 2.85-.503 4.334-1.357v4.575c0 1.18-1.94 2.136-4.334 2.136-2.393 0-4.334-.956-4.334-2.136z"/>
                </svg>
              </a>
            </div>
            <p class="text-xs text-gray-500">
              Follow us for updates, Bible study tips, and ministry news.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-neutral-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-sm text-gray-500">
            <p>&copy; {{ currentYear }} BibleStem. All rights reserved.</p>
          </div>
          <div class="flex flex-wrap items-center gap-6 text-xs text-gray-500">
            <router-link to="/help" class="hover:text-white transition-colors">
              Help Center
            </router-link>
            <span class="text-gray-600">•</span>
            <router-link to="/privacy" class="hover:text-white transition-colors">Privacy Policy</router-link>
            <span class="text-gray-600">•</span>
            <router-link to="/terms" class="hover:text-white transition-colors">Terms of Service</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentYear = computed(() => new Date().getFullYear())

const scrollToSupport = () => {
  if (router.currentRoute.value.path === '/') {
    const element = document.getElementById('support')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } else {
    router.push('/#support')
  }
}
</script>
