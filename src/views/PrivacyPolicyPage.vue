<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-16 md:py-20 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p class="text-xl md:text-2xl text-white/90">
            Your privacy is important to us. Here's how we protect your data.
          </p>
          <p class="text-sm text-white/80 mt-4">
            Last Updated: {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto prose prose-lg dark:prose-invert max-w-none">
          
          <!-- Introduction -->
          <div class="mb-12">
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              BibleStem ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this privacy policy carefully.
            </p>
          </div>

          <!-- Information We Collect -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded"></span>
              1. Information We Collect
            </h2>
            
            <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1.1 Information You Provide</h3>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Account Information:</strong> When you create an account, we collect your name, email address, and password.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Profile Information:</strong> Any information you choose to add to your profile, such as a bio or avatar.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Study Data:</strong> Your progress, bookmarks, notes, and completed lessons are stored to personalize your experience.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Communications:</strong> Any messages or feedback you send to us via email or contact forms.</span>
              </li>
            </ul>

            <h3 class="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">1.2 Automatically Collected Information</h3>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and features used.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Device Information:</strong> Browser type, operating system, device type, and IP address.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze site usage.</span>
              </li>
            </ul>
          </div>

          <!-- How We Use Your Information -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-secondary-500 to-accent-500 rounded"></span>
              2. How We Use Your Information
            </h2>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>To provide, maintain, and improve our services</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>To personalize your experience and track your study progress</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>To communicate with you about your account, updates, and support requests</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>To analyze usage patterns and improve our website's functionality</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>To detect, prevent, and address technical issues and security threats</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>To comply with legal obligations</span>
              </li>
            </ul>
          </div>

          <!-- Data Storage and Security -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-accent-500 to-primary-500 rounded"></span>
              3. Data Storage and Security
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We use Supabase, a secure cloud platform, to store your data. Your information is encrypted in transit and at rest. We implement industry-standard security measures to protect your data, including:
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>Encrypted data transmission (SSL/TLS)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>Secure password hashing</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>Regular security audits and updates</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>Access controls and authentication measures</span>
              </li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </div>

          <!-- Information Sharing -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded"></span>
              4. Information Sharing and Disclosure
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Service Providers:</strong> We may share data with trusted service providers (like Supabase) who assist in operating our platform, subject to confidentiality agreements.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental authority.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users.</span>
              </li>
            </ul>
          </div>

          <!-- Your Rights -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></span>
              5. Your Rights and Choices
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Access:</strong> You can access and update your profile information at any time through your account settings.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Deletion:</strong> You can request deletion of your account and data by contacting us at support@biblestem.com.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Data Export:</strong> You can request a copy of your data in a portable format.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span><strong>Opt-Out:</strong> You can opt out of non-essential communications by updating your preferences.</span>
              </li>
            </ul>
          </div>

          <!-- Cookies -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded"></span>
              6. Cookies and Tracking Technologies
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We use cookies and similar technologies to:
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>Remember your login session</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>Track your study progress</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>Analyze website traffic and usage</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>Improve user experience</span>
              </li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
              You can control cookies through your browser settings. However, disabling cookies may limit some functionality of our website.
            </p>
          </div>

          <!-- Children's Privacy -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded"></span>
              7. Children's Privacy
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              BibleStem is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately at support@biblestem.com, and we will take steps to delete such information.
            </p>
          </div>

          <!-- Changes to Privacy Policy -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-yellow-500 rounded"></span>
              8. Changes to This Privacy Policy
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <!-- Contact Us -->
          <div class="mb-12 card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-2 border-primary-200 dark:border-primary-800">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded"></span>
              9. Contact Us
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@biblestem.com" class="text-primary-600 dark:text-primary-400 hover:underline">
                  support@biblestem.com
                </a>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <router-link to="/contact" class="text-primary-600 dark:text-primary-400 hover:underline">
                  Visit our Contact page
                </router-link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const lastUpdated = computed(() => {
  return new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})
</script>

<style scoped>
.prose ul {
  @apply list-none;
}

.prose li {
  @apply my-0;
}
</style>
