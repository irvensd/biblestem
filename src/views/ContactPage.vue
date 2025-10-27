<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-20 md:py-32 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-6 animate-slide-up">
            <span class="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
              We're Here to Help
            </span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style="animation-delay: 0.1s">
            Get in Touch
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s">
            Have a question? Need help? Want to share feedback? We'd love to hear from you!
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Options -->
    <section class="py-20 bg-white dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <!-- Email Card -->
          <div class="card card-interactive p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Email Us</h3>
            <a 
              href="mailto:support@biblestem.com" 
              class="text-primary-600 dark:text-primary-400 font-semibold hover:underline block"
            >
              support@biblestem.com
            </a>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              We typically respond within 24 hours
            </p>
          </div>

          <!-- Help Center Card -->
          <div class="card card-interactive p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Help Center</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Find answers to common questions and troubleshooting guides
            </p>
            <a href="#" class="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Browse Help Articles →
            </a>
          </div>

          <!-- Community Card -->
          <div class="card card-interactive p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Join Community</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Connect with other believers and study together
            </p>
            <a href="#" class="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Join Community →
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto">
          <div class="card p-8">
            <h2 class="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="John Doe"
                  class="form-input w-full"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Your Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  class="form-input w-full"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="form-input w-full"
                >
                  <option value="">Choose a topic...</option>
                  <option value="support">Technical Support</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  placeholder="Tell us how we can help..."
                  class="form-input w-full resize-y"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn btn-primary w-full py-4 text-lg font-semibold"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-semibold text-green-800 dark:text-green-200">Message Sent Successfully!</p>
                  <p class="text-sm text-green-700 dark:text-green-300">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50 dark:bg-neutral-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div class="card p-6">
            <h3 class="text-lg font-bold mb-2">Is BibleStem really free?</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Yes! We offer a generous free plan with access to all free studies. Premium features are available for those who want deeper insights, but the core content is always free.
            </p>
          </div>

          <div class="card p-6">
            <h3 class="text-lg font-bold mb-2">Do I need prior Bible study experience?</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Not at all! BibleStem is designed for everyone - from beginners to advanced students. Each study clearly indicates its difficulty level, and beginner studies are perfect for those just starting out.
            </p>
          </div>

          <div class="card p-6">
            <h3 class="text-lg font-bold mb-2">Can I study on mobile devices?</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Absolutely! BibleStem is fully responsive and works beautifully on phones, tablets, and desktops. You can even install it as a Progressive Web App (PWA) for an app-like experience.
            </p>
          </div>

          <div class="card p-6">
            <h3 class="text-lg font-bold mb-2">How accurate are the Hebrew and Greek insights?</h3>
            <p class="text-gray-600 dark:text-gray-400">
              All original language insights are carefully researched and based on trusted Hebrew and Greek lexicons and commentaries. However, we always encourage you to verify what you learn with multiple sources.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Ready to Start Studying?</h2>
        <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Join thousands of believers who are deepening their understanding of Scripture daily
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/sign-up" 
            class="btn bg-white text-primary-600 hover:bg-white/90 px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all"
          >
            Get Started Free →
          </router-link>
          <router-link 
            to="/" 
            class="btn border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm"
          >
            Back to Home
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // In production, this would send to your backend
  console.log('Form submitted:', form.value)
  console.log('Would send to: support@biblestem.com')
  
  // Show success message
  showSuccess.value = true
  isSubmitting.value = false
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  // Hide success after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>
