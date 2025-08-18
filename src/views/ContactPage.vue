<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-secondary-600 py-20">
      <div class="container-base text-center">
        <h1 class="text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          We'd love to hear from you! Get in touch with our team for support, feedback, or any questions.
        </p>
      </div>
    </section>

    <!-- Contact Methods Section -->
    <section class="section-padding">
      <div class="container-base">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-8 mb-16">
            <!-- Email Support -->
            <div class="card p-8 text-center">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">Email Support</h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-4">
                Get help with your account, studies, or technical issues
              </p>
              <a 
                href="mailto:support@biblestem.com" 
                class="text-primary-600 hover:text-primary-700 font-medium"
              >
                support@biblestem.com
              </a>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                Response within 24 hours
              </p>
            </div>

            <!-- Live Chat -->
            <div class="card p-8 text-center">
              <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">Live Chat</h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-4">
                Chat with our support team in real-time
              </p>
              <button 
                @click="openLiveChat"
                class="btn-secondary"
              >
                Start Chat
              </button>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                Available 9 AM - 6 PM EST
              </p>
            </div>

            <!-- Phone Support -->
            <div class="card p-8 text-center">
              <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">Phone Support</h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-4">
                Speak directly with our support team
              </p>
              <a 
                href="tel:+1-800-BIBLE-STEM" 
                class="text-accent-600 hover:text-accent-700 font-medium"
              >
                1-800-BIBLE-STEM
              </a>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                Mon-Fri, 9 AM - 6 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section-padding bg-white dark:bg-neutral-800">
      <div class="container-base">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Send Us a Message</h2>
            <p class="text-lg text-neutral-600 dark:text-neutral-400">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  First Name *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-neutral-100"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label for="lastName" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-neutral-100"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-neutral-100"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-neutral-100"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing & Subscription</option>
                <option value="content">Content & Studies</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-neutral-100"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <div class="flex items-start space-x-3">
              <input
                id="newsletter"
                v-model="form.newsletter"
                type="checkbox"
                class="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500 mt-1"
              />
              <label for="newsletter" class="text-sm text-neutral-600 dark:text-neutral-400">
                I'd like to receive updates about new studies, features, and Bible study tips (optional)
              </label>
            </div>

            <div class="text-center">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  v-if="isSubmitting"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding">
      <div class="container-base">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Frequently Asked Questions</h2>
            <p class="text-lg text-neutral-600 dark:text-neutral-400">
              Find quick answers to common questions
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="card p-6 cursor-pointer"
              @click="toggleFaq(index)"
            >
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                  {{ faq.question }}
                </h3>
                <svg
                  class="w-5 h-5 text-neutral-500 transform transition-transform duration-200"
                  :class="{ 'rotate-180': faq.isOpen }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div
                v-show="faq.isOpen"
                class="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Hours & Location -->
    <section class="section-padding bg-white dark:bg-neutral-800">
      <div class="container-base">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">Office Hours & Location</h2>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="font-semibold text-neutral-800 dark:text-neutral-200">Support Hours</h3>
                    <p class="text-neutral-600 dark:text-neutral-400">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p class="text-neutral-600 dark:text-neutral-400">Saturday: 10:00 AM - 2:00 PM EST</p>
                    <p class="text-neutral-600 dark:text-neutral-400">Sunday: Closed</p>
                  </div>
                </div>

                <div class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 class="font-semibold text-neutral-800 dark:text-neutral-200">Headquarters</h3>
                    <p class="text-neutral-600 dark:text-neutral-400">BibleStem Ministries</p>
                    <p class="text-neutral-600 dark:text-neutral-400">123 Faith Street, Suite 100</p>
                    <p class="text-neutral-600 dark:text-neutral-400">Nashville, TN 37201</p>
                  </div>
                </div>
              </div>

              <div class="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
                <h3 class="font-semibold text-primary-800 dark:text-primary-200 mb-2">Emergency Support</h3>
                <p class="text-sm text-primary-700 dark:text-primary-300 mb-3">
                  For urgent technical issues outside of business hours, please email us with "URGENT" in the subject line.
                </p>
                <a 
                  href="mailto:urgent@biblestem.com" 
                  class="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  urgent@biblestem.com
                </a>
              </div>
            </div>

            <div class="card p-8 text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">Response Time</h3>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="text-neutral-600 dark:text-neutral-400">Email Support:</span>
                  <span class="font-medium text-neutral-800 dark:text-neutral-200">Within 24 hours</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-600 dark:text-neutral-400">Live Chat:</span>
                  <span class="font-medium text-neutral-800 dark:text-neutral-200">Immediate</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-600 dark:text-neutral-400">Phone Support:</span>
                  <span class="font-medium text-neutral-800 dark:text-neutral-200">Immediate</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-600 dark:text-neutral-400">Urgent Issues:</span>
                  <span class="font-medium text-neutral-800 dark:text-neutral-200">Within 4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
  newsletter: false
})

const isSubmitting = ref(false)

// FAQ data
const faqs = ref([
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking the "Forgot Password" link on the sign-in page. We\'ll send you an email with a secure link to create a new password.',
    isOpen: false
  },
  {
    question: 'Can I cancel my premium subscription?',
    answer: 'Yes, you can cancel your premium subscription at any time from your account settings. Your access will continue until the end of your current billing period.',
    isOpen: false
  },
  {
    question: 'Are the Bible studies suitable for beginners?',
    answer: 'Absolutely! We offer studies for all levels, from complete beginners to advanced students. Each study clearly indicates the difficulty level, and we recommend starting with our free foundational studies.',
    isOpen: false
  },
  {
    question: 'Do you offer group study options?',
    answer: 'Yes! We\'re working on group study features that will allow you to study together with friends, family, or your church community. Stay tuned for updates!',
    isOpen: false
  },
  {
    question: 'How often do you add new studies?',
    answer: 'We add new studies monthly, with special seasonal content during holidays. Premium subscribers get early access to new studies and exclusive content.',
    isOpen: false
  }
])

// Methods
const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const openLiveChat = () => {
  // In a real app, this would open a live chat widget
  alert('Live chat feature coming soon! For now, please use email or phone support.')
}

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      newsletter: false
    }
  } catch (error) {
    alert('There was an error sending your message. Please try again or contact us directly.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.section-padding {
  @apply py-16;
}
</style>
