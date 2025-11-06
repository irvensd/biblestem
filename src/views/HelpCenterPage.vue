<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-16 md:py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p class="text-lg md:text-xl text-white/90 mb-8">
            Find answers to your questions and get the most out of BibleStem
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search for help..."
                class="w-full px-6 py-4 pl-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <svg
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="py-12 bg-neutral-50 dark:bg-neutral-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <a
            v-for="section in sections"
            :key="section.id"
            :href="`#${section.id}`"
            @click.prevent="scrollToSection(section.id)"
            class="card p-6 text-center hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <div class="text-3xl mb-3">{{ section.icon }}</div>
            <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{{ section.title }}</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">{{ section.count }} articles</p>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Sections -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Getting Started -->
          <div :id="'getting-started'" class="mb-12 scroll-mt-24">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-3">
              <span>🚀</span>
              <span>Getting Started</span>
            </h2>
            <HelpAccordionItem
              v-for="(item, index) in filteredItems('getting-started')"
              :key="index"
              :title="item.title"
              :content="item.content"
              :is-open="openItems.includes(`${item.category}-${index}`)"
              @toggle="toggleItem('getting-started', index)"
            />
          </div>

          <!-- Account & Profile -->
          <div :id="'account-profile'" class="mb-12 scroll-mt-24">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-3">
              <span>👤</span>
              <span>Account & Profile</span>
            </h2>
            <HelpAccordionItem
              v-for="(item, index) in filteredItems('account-profile')"
              :key="index"
              :title="item.title"
              :content="item.content"
              :is-open="openItems.includes(`${item.category}-${index}`)"
              @toggle="toggleItem('account-profile', index)"
            />
          </div>

          <!-- Bible Studies -->
          <div :id="'bible-studies'" class="mb-12 scroll-mt-24">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-3">
              <span>📖</span>
              <span>Bible Studies</span>
            </h2>
            <HelpAccordionItem
              v-for="(item, index) in filteredItems('bible-studies')"
              :key="index"
              :title="item.title"
              :content="item.content"
              :is-open="openItems.includes(`${item.category}-${index}`)"
              @toggle="toggleItem('bible-studies', index)"
            />
          </div>

          <!-- Troubleshooting -->
          <div :id="'troubleshooting'" class="mb-12 scroll-mt-24">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-3">
              <span>🔧</span>
              <span>Troubleshooting</span>
            </h2>
            <HelpAccordionItem
              v-for="(item, index) in filteredItems('troubleshooting')"
              :key="index"
              :title="item.title"
              :content="item.content"
              :is-open="openItems.includes(`${item.category}-${index}`)"
              @toggle="toggleItem('troubleshooting', index)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Still Need Help -->
    <section class="py-16 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Still Need Help?
          </h2>
          <p class="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            Can't find what you're looking for? We're here to help!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/contact"
              class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Support
            </router-link>
            <a
              href="mailto:support@biblestem.com"
              class="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HelpAccordionItem from '@/components/HelpAccordionItem.vue'

const route = useRoute()
const searchQuery = ref('')
const openItems = ref<string[]>([])

interface HelpItem {
  category: string
  title: string
  content: string
}

const helpItems: HelpItem[] = [
  // Getting Started
  {
    category: 'getting-started',
    title: 'How do I create an account?',
    content: '<p>Creating an account is easy! Click the "Get Started" button in the top navigation, fill in your email address and create a password. You can also sign up using your email address on the Sign Up page.</p>'
  },
  {
    category: 'getting-started',
    title: 'Is BibleStem really free?',
    content: '<p>Yes! BibleStem is completely free and donation-based. All foundational Bible studies are available at no cost. Advanced studies with Hebrew & Greek insights are available as a thank-you to those who support our ministry, but the core content is always free.</p>'
  },
  {
    category: 'getting-started',
    title: 'Can I use BibleStem on mobile?',
    content: '<p>Absolutely! BibleStem is fully responsive and works beautifully on phones, tablets, and desktops. You can even install it as a Progressive Web App (PWA) for an app-like experience. Look for the install prompt when visiting on your mobile device.</p>'
  },
  {
    category: 'getting-started',
    title: 'Do I need prior Bible study experience?',
    content: '<p>Not at all! BibleStem is designed for everyone - from beginners to advanced students. Each study clearly indicates its difficulty level, and beginner studies are perfect for those just starting their Bible study journey.</p>'
  },

  // Account & Profile
  {
    category: 'account-profile',
    title: 'How do I update my profile?',
    content: '<p>Navigate to your Profile page from the navigation menu. Click "Edit Profile" to update your name and other profile information. Your changes are saved automatically.</p>'
  },
  {
    category: 'account-profile',
    title: 'How do I change my password?',
    content: '<p>You can reset your password by clicking "Forgot password?" on the Sign In page. You\'ll receive an email with instructions to reset your password. Alternatively, you can update your password from your account settings.</p>'
  },
  {
    category: 'account-profile',
    title: 'Can I delete my account?',
    content: '<p>Yes, you can delete your account at any time. Contact support at support@biblestem.com or visit the Settings page in your account to request account deletion. Please note that this action is permanent and cannot be undone.</p>'
  },

  // Bible Studies
  {
    category: 'bible-studies',
    title: 'How do I start a study?',
    content: '<p>Browse available studies on the Study Series page. Click on any study card to view details, then click "Start Study" to begin. Your progress will be automatically saved as you complete lessons.</p>'
  },
  {
    category: 'bible-studies',
    title: 'Can I bookmark studies?',
    content: '<p>Yes! Click the bookmark icon on any study card to save it to "My Studies". You can access all your bookmarked studies from the "My Studies" page in the navigation menu.</p>'
  },
  {
    category: 'bible-studies',
    title: 'How do I take notes?',
    content: '<p>Each lesson has a notes section where you can jot down your thoughts, insights, and reflections. Your notes are automatically saved and associated with that specific lesson. You can access your notes anytime from the lesson page.</p>'
  },
  {
    category: 'bible-studies',
    title: 'What are advanced studies?',
    content: '<p>Advanced studies include deeper biblical analysis with Hebrew and Greek word studies, original language insights, and more in-depth theological content. These are available as a thank-you to those who support our ministry through donations.</p>'
  },
  {
    category: 'bible-studies',
    title: 'Can I reset my progress on a lesson?',
    content: '<p>Yes! On the study overview page, click the "Reset" button on any completed lesson to mark it as incomplete and start over. This will reset the completion status but preserve your notes.</p>'
  },

  // Troubleshooting
  {
    category: 'troubleshooting',
    title: 'The page is not loading correctly',
    content: '<p>Try refreshing the page or clearing your browser cache. Make sure you\'re using a modern browser (Chrome, Firefox, Safari, or Edge). If the problem persists, contact support at support@biblestem.com.</p>'
  },
  {
    category: 'troubleshooting',
    title: 'I forgot my password',
    content: '<p>Click "Forgot password?" on the Sign In page and enter your email address. You\'ll receive an email with a link to reset your password. Make sure to check your spam folder if you don\'t see the email.</p>'
  },
  {
    category: 'troubleshooting',
    title: 'My progress is not saving',
    content: '<p>Progress is saved automatically as you complete lessons. Make sure you\'re signed in and have an active internet connection. If issues persist, try logging out and back in, or contact support.</p>'
  },
  {
    category: 'troubleshooting',
    title: 'How do I enable dark mode?',
    content: '<p>Click the sun/moon icon in the top navigation bar to toggle between light and dark mode. Your preference is saved automatically.</p>'
  }
]

const sections = [
  { id: 'getting-started', title: 'Getting Started', icon: '🚀', count: 4 },
  { id: 'account-profile', title: 'Account & Profile', icon: '👤', count: 3 },
  { id: 'bible-studies', title: 'Bible Studies', icon: '📖', count: 5 },
  { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔧', count: 4 }
]

const filteredItems = (category: string) => {
  let items = helpItems.filter(item => item.category === category)
  
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    items = items.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
    )
  }
  
  return items
}

const toggleItem = (category: string, index: number) => {
  const key = `${category}-${index}`
  const currentIndex = openItems.value.indexOf(key)
  
  if (currentIndex > -1) {
    openItems.value.splice(currentIndex, 1)
  } else {
    openItems.value.push(key)
  }
}

// Generate FAQ structured data
const faqStructuredData = computed(() => {
  const faqs = sections.flatMap(section => {
    const items = filteredItems(section.id)
    return items.map(item => ({
      question: item.title,
      answer: item.content.replace(/<[^>]*>/g, '') // Strip HTML tags
    }))
  })
  return getFAQSchema(faqs)
})

onMounted(() => {
  applySEO({
    title: 'Help Center - BibleStem Support & FAQs | Bible Study Help',
    description: 'Get help with BibleStem. Find answers to common questions about Bible studies, lessons, notes, account management, and technical support. Complete FAQ and support documentation.',
    keywords: 'bible study help, biblestem faq, bible study questions, how to study bible, bible app help, christian learning support',
    structuredData: faqStructuredData.value
  })
})

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  // Scroll to hash if present
  if (route.hash) {
    const sectionId = route.hash.substring(1)
    setTimeout(() => scrollToSection(sectionId), 300)
  }
})
</script>
