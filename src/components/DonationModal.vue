<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 dark:bg-black/70 z-[100] flex items-center justify-center p-4 sm:p-6"
        @click.self="close"
      >
        <div
          class="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl transform transition-all duration-300 scale-95 opacity-0 animate-scale-in-fade-in overflow-hidden"
          @click.stop
        >
          <!-- Header -->
          <div class="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            <div class="relative z-10">
              <button
                @click="close"
                class="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div class="flex items-center justify-center mb-4">
                <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <h2 class="text-2xl font-bold text-center mb-2">Support BibleStem</h2>
              <p class="text-white/90 text-center text-sm">Thank you for your heart to support our ministry! 🙏</p>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 space-y-6">
            <!-- What Your Support Provides -->
            <div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                <span class="text-xl">💝</span>
                <span>What Your Support Provides</span>
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Helps us create more Bible studies</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Keeps the platform free for everyone</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Spreads the Gospel freely worldwide</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>As a thank you: Access to deeper studies</span>
                </li>
              </ul>
            </div>

            <!-- Free Studies Note -->
            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p class="text-sm text-blue-900 dark:text-blue-100">
                <span class="font-semibold">✨ All basic studies remain 100% FREE forever!</span>
              </p>
            </div>

            <!-- Donation Links -->
            <div class="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
              <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                <span class="font-semibold text-neutral-900 dark:text-neutral-100">Give right now with PayPal:</span>
              </p>
              <div class="flex flex-wrap gap-2 mt-2">
                <a
                  href="https://paypal.me/biblestem"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click="close"
                  class="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
                >
                  PayPal
                </a>
                <span
                  class="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-xs font-medium text-neutral-500 dark:text-neutral-400 border border-dashed border-neutral-300 dark:border-neutral-600 cursor-not-allowed"
                  aria-disabled="true"
                >
                  Stripe (coming soon)
                </span>
                <span
                  class="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-xs font-medium text-neutral-500 dark:text-neutral-400 border border-dashed border-neutral-300 dark:border-neutral-600 cursor-not-allowed"
                  aria-disabled="true"
                >
                  Venmo (coming soon)
                </span>
                <span
                  class="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-xs font-medium text-neutral-500 dark:text-neutral-400 border border-dashed border-neutral-300 dark:border-neutral-600 cursor-not-allowed"
                  aria-disabled="true"
                >
                  Buy Me a Coffee (coming soon)
                </span>
              </div>
              <p class="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                More giving options launch soon - thank you for your patience while we finish Stripe, Venmo, and Buy Me a Coffee.
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3">
              <button
                @click="close"
                class="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                I'll Donate Later
              </button>
              <router-link
                to="/contact"
                @click="close"
                class="flex-1 px-6 py-3 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 hover:border-red-500 dark:hover:border-red-500 text-neutral-900 dark:text-neutral-100 font-semibold rounded-xl transition-all duration-300 text-center"
              >
                Contact Us
              </router-link>
            </div>

            <!-- Gratitude Message -->
            <p class="text-center text-sm text-neutral-600 dark:text-neutral-400">
              We're grateful for your prayers and support! ❤️
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const close = () => {
  emit('close')
}

// Close on Escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    close()
  }
}

// Manage body overflow and escape key listener
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  }
})

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-scale-in-fade-in {
  animation: scaleInFadeIn 0.3s ease-out forwards;
}

@keyframes scaleInFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

