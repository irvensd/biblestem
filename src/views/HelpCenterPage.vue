<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-16 md:py-24 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Help Center</h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90">
            Find answers to your questions and get the most out of BibleStem
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search for help..."
                class="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30"
              />
              <svg class="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button
                v-if="searchQuery"
                @click="searchQuery = ''"
                class="absolute right-5 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Quick Links -->
          <div class="grid md:grid-cols-3 gap-6 mb-12">
            <router-link
              to="#getting-started"
              class="card p-6 hover:shadow-lg transition-all cursor-pointer group"
              @click="scrollToSection('getting-started')"
            >
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Getting Started</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">New user guide</p>
                </div>
              </div>
            </router-link>

            <router-link
              to="#account"
              class="card p-6 hover:shadow-lg transition-all cursor-pointer group"
              @click="scrollToSection('account')"
            >
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Account & Profile</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Manage your account</p>
                </div>
              </div>
            </router-link>

            <router-link
              to="#studies"
              class="card p-6 hover:shadow-lg transition-all cursor-pointer group"
              @click="scrollToSection('studies')"
            >
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Bible Studies</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Using study features</p>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Getting Started Section -->
          <section id="getting-started" class="mb-16 scroll-mt-24">
            <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
              <span class="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded"></span>
              Getting Started
            </h2>
            
                         <div class="space-y-4">
               <HelpAccordionItem
                 v-for="item in filteredItems('getting-started')"
                 :key="item.id"
                 :title="item.title"
                 :content="item.content"
                 :is-open="item.isOpen"
                 @toggle="toggleItem(item.id)"
               />
             </div>
           </section>

           <!-- Account & Profile Section -->
           <section id="account" class="mb-16 scroll-mt-24">
             <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
               <span class="w-1 h-8 bg-gradient-to-b from-secondary-500 to-accent-500 rounded"></span>
               Account & Profile
             </h2>
             
             <div class="space-y-4">
               <HelpAccordionItem
                 v-for="item in filteredItems('account')"
                 :key="item.id"
                 :title="item.title"
                 :content="item.content"
                 :is-open="item.isOpen"
                 @toggle="toggleItem(item.id)"
               />
             </div>
           </section>

           <!-- Bible Studies Section -->
           <section id="studies" class="mb-16 scroll-mt-24">
             <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
               <span class="w-1 h-8 bg-gradient-to-b from-accent-500 to-primary-500 rounded"></span>
               Bible Studies
             </h2>
             
             <div class="space-y-4">
               <HelpAccordionItem
                 v-for="item in filteredItems('studies')"
                 :key="item.id"
                 :title="item.title"
                 :content="item.content"
                 :is-open="item.isOpen"
                 @toggle="toggleItem(item.id)"
               />
             </div>
           </section>

           <!-- Troubleshooting Section -->
           <section id="troubleshooting" class="mb-16 scroll-mt-24">
             <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
               <span class="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded"></span>
               Troubleshooting
             </h2>
             
             <div class="space-y-4">
               <HelpAccordionItem
                 v-for="item in filteredItems('troubleshooting')"
                 :key="item.id"
                 :title="item.title"
                 :content="item.content"
                 :is-open="item.isOpen"
                 @toggle="toggleItem(item.id)"
               />
             </div>
           </section>

          <!-- Still Need Help? -->
          <section class="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-2 border-primary-200 dark:border-primary-800">
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-3">Still Need Help?</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Can't find what you're looking for? Get in touch with our support team.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link
                  to="/contact"
                  class="btn btn-primary px-8 py-3"
                >
                  Contact Support
                </router-link>
                <a
                  href="mailto:support@biblestem.com"
                  class="btn btn-secondary px-8 py-3"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HelpAccordionItem from '../components/HelpAccordionItem.vue'

interface HelpItem {
  id: string
  category: 'getting-started' | 'account' | 'studies' | 'troubleshooting'
  title: string
  content: string
  isOpen: boolean
}

const route = useRoute()
const searchQuery = ref('')

const helpItems = ref<HelpItem[]>([
  // Getting Started
  {
    id: 'gs-1',
    category: 'getting-started',
    title: 'How do I create an account?',
    content: 'Creating an account is simple! Click the "Sign Up" button in the top right corner or navigate to the Sign Up page. Enter your name, email address, and choose a password (at least 6 characters). Once you submit, you\'ll receive a confirmation email. After confirming your email, you can sign in and start your Bible study journey.',
    isOpen: false
  },
  {
    id: 'gs-2',
    category: 'getting-started',
    title: 'What can I do without an account?',
    content: 'You can browse our Study Series page to see all available Bible studies. However, to start a study, track your progress, save notes, and bookmark lessons, you\'ll need to create a free account. Signing up is quick and free!',
    isOpen: false
  },
  {
    id: 'gs-3',
    category: 'getting-started',
    title: 'How do I start my first Bible study?',
    content: 'After signing in, go to the Study Series page. Browse through the available studies and click "Start Study" on any study card. You can also access studies from your Dashboard. Click on a study to view all its lessons, then click on a lesson to begin studying.',
    isOpen: false
  },
  {
    id: 'gs-4',
    category: 'getting-started',
    title: 'Are the studies really free?',
    content: 'Yes! All basic Bible studies are completely free. BibleStem is a donation-based ministry, meaning we rely on the generous support of believers like you to keep the platform free for everyone. While donations help us create more content, they are never required to access studies.',
    isOpen: false
  },
  
  // Account & Profile
  {
    id: 'acc-1',
    category: 'account',
    title: 'How do I reset my password?',
    content: 'If you forgot your password, click "Forgot password?" on the Sign In page. Enter your email address, and we\'ll send you a password reset link. Click the link in the email to set a new password. Make sure to check your spam folder if you don\'t see the email.',
    isOpen: false
  },
  {
    id: 'acc-2',
    category: 'account',
    title: 'How do I update my profile information?',
    content: 'Navigate to your Profile page from the main menu. Click "Edit Profile" to update your name, bio, or avatar. Your changes are automatically saved. Note: Your email address cannot be changed directly - please contact support if you need to update it.',
    isOpen: false
  },
  {
    id: 'acc-3',
    category: 'account',
    title: 'How do I delete my account?',
    content: 'If you need to delete your account, please contact our support team at support@biblestem.com. We\'ll process your request and permanently remove your account and all associated data within 30 days.',
    isOpen: false
  },
  {
    id: 'acc-4',
    category: 'account',
    title: 'What does "Member Since" mean?',
    content: '"Member Since" shows the date you created your BibleStem account. This date is automatically set when you sign up and cannot be changed.',
    isOpen: false
  },
  
  // Bible Studies
  {
    id: 'studies-1',
    category: 'studies',
    title: 'How do I bookmark a study?',
    content: 'To bookmark a study, click the bookmark icon (📖) in the top-left corner of any study card on the Study Series page. Bookmarked studies will appear in your "My Studies" page under the "Bookmarked" tab for easy access.',
    isOpen: false
  },
  {
    id: 'studies-2',
    category: 'studies',
    title: 'How does progress tracking work?',
    content: 'Your progress is automatically saved as you complete lessons. Each study tracks which lessons you\'ve completed, your current position, and total time spent. You can view your progress on the Study Overview page or in your Dashboard. Progress is saved across devices when you\'re signed in.',
    isOpen: false
  },
  {
    id: 'studies-3',
    category: 'studies',
    title: 'Can I reset a completed lesson?',
    content: 'Yes! On the Study Overview page, click the "Reset" button on any completed lesson. This will mark the lesson as incomplete and allow you to study it again. Your notes and bookmarks for that lesson will remain, but your completion status will be reset.',
    isOpen: false
  },
  {
    id: 'studies-4',
    category: 'studies',
    title: 'What are the different study categories?',
    content: 'Studies are organized into categories: Foundational Studies (basic Bible knowledge), Growth Studies (spiritual growth and discipleship), and Advanced Studies (deeper theological topics). You can filter studies by category on the Study Series page.',
    isOpen: false
  },
  {
    id: 'studies-5',
    category: 'studies',
    title: 'How do I take notes on lessons?',
    content: 'While viewing a lesson, you can take notes in the "Reflect & Journal" section. Your notes are automatically saved and are private to your account. You can access all your notes from the Notes section in your Profile or Dashboard.',
    isOpen: false
  },
  {
    id: 'studies-6',
    category: 'studies',
    title: 'What are "Advanced Studies"?',
    content: 'Advanced Studies are deeper, more in-depth Bible studies that include Greek and Hebrew word studies, detailed theological analysis, and prophetic themes. These studies are available to all users, but are designed for those ready to dive deeper into Scripture.',
    isOpen: false
  },
  
  // Troubleshooting
  {
    id: 'trouble-1',
    category: 'troubleshooting',
    title: 'I can\'t sign in to my account',
    content: 'First, make sure you\'re using the correct email address. If you\'ve forgotten your password, use the "Forgot password?" link. If you still can\'t access your account, check that your email is verified. If problems persist, contact support@biblestem.com.',
    isOpen: false
  },
  {
    id: 'trouble-2',
    category: 'troubleshooting',
    title: 'My progress isn\'t saving',
    content: 'Make sure you\'re signed in to your account. Progress only saves when you\'re logged in. Also, check your internet connection - progress syncs with our servers. If you\'re offline, progress will be saved locally and synced when you\'re back online.',
    isOpen: false
  },
  {
    id: 'trouble-3',
    category: 'troubleshooting',
    title: 'The page is loading slowly',
    content: 'Slow loading can be caused by a weak internet connection or high server traffic. Try refreshing the page, clearing your browser cache, or waiting a moment. If the problem persists, contact our support team.',
    isOpen: false
  },
  {
    id: 'trouble-4',
    category: 'troubleshooting',
    title: 'I didn\'t receive the password reset email',
    content: 'First, check your spam or junk folder. The email might have been filtered. Also, make sure you\'re checking the email address associated with your account. If you still don\'t see it after a few minutes, try requesting another reset link. Contact support if the issue continues.',
    isOpen: false
  },
  {
    id: 'trouble-5',
    category: 'troubleshooting',
    title: 'How do I report a bug or issue?',
    content: 'We appreciate your feedback! If you encounter a bug or technical issue, please contact us at support@biblestem.com with details about what happened, what page you were on, and what you were trying to do. Screenshots are helpful too!',
    isOpen: false
  }
])

const filteredItems = (category: string) => {
  let items = helpItems.value.filter(item => item.category === category)
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    items = items.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.content.toLowerCase().includes(query)
    )
  }
  
  return items
}

const toggleItem = (id: string) => {
  const item = helpItems.value.find(i => i.id === id)
  if (item) {
    item.isOpen = !item.isOpen
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Handle hash navigation
onMounted(() => {
  if (route.hash) {
    const sectionId = route.hash.substring(1)
    setTimeout(() => scrollToSection(sectionId), 100)
    
    // Open first item in section if hash matches
    const sectionItems = helpItems.value.filter(item => item.category === sectionId)
    if (sectionItems.length > 0) {
      sectionItems[0].isOpen = true
    }
  }
})
</script>
