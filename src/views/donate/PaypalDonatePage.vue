<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4 py-16">
    <div class="w-full max-w-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl p-8 sm:p-12 space-y-8">
      <header class="space-y-4 text-center">
        <div class="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="space-y-2">
          <p class="text-sm uppercase tracking-[0.35em] text-pink-300/80">Support BibleStem</p>
          <h1 class="text-3xl sm:text-4xl font-bold">Give through PayPal</h1>
          <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Thank you for partnering with us to create free, gospel-centered Bible studies. We are redirecting you to PayPal now.
          </p>
        </div>
      </header>

      <div class="space-y-6">
        <button
          type="button"
          @click="openPayPalPortal"
          class="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#003087] via-[#0070ba] to-[#1546A0] hover:from-[#012766] hover:via-[#005c9d] hover:to-[#123c8e] transition-all duration-300 text-lg font-semibold shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3f7f]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7.02 22H3.248a.75.75 0 0 1-.741-.852l1.851-13.16C4.713 3.26 8.218.75 12 .75h7.735c.482 0 .85.428.773.904l-.533 3.328a.75.75 0 0 1-.741.628h-4.42c-1.033 0-1.918.75-2.078 1.767l-.053.34a.75.75 0 0 0 .741.865h4.079c.48 0 .848.427.772.903l-.504 3.153a.75.75 0 0 1-.741.628h-4.075a.75.75 0 0 0-.741.628l-.82 5.2A.75.75 0 0 1 10.467 19h-2.3a.75.75 0 0 0-.741.628L7.02 22Z"
            />
          </svg>
          Continue to PayPal
        </button>

        <div class="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 space-y-3">
          <h2 class="text-lg font-semibold">Why your gift matters</h2>
          <ul class="space-y-2 text-sm text-slate-300">
            <li class="flex items-start gap-2">
              <span class="mt-0.5 text-pink-300">✶</span>
              <span>Funds the creation of new Bible studies and discipleship materials.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5 text-pink-300">✶</span>
              <span>Keeps BibleStem free for everyone around the world.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5 text-pink-300">✶</span>
              <span>Helps us add original-language (Greek / Hebrew) study tools in every lesson.</span>
            </li>
          </ul>
        </div>

        <p class="text-center text-xs text-slate-400">
          If the redirect doesn’t happen automatically, tap the button above. Having issues? Email
          <a href="mailto:support@biblestem.org" class="underline decoration-dotted decoration-pink-400 hover:text-pink-200">
            support@biblestem.org
          </a>
          and we’ll help right away.
        </p>
      </div>

      <footer class="pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
        "Each of you should give what you have decided in your heart to give." — 2 Corinthians 9:7
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { getSupabase, isSupabaseAvailable } from '@/lib/supabase'

const router = useRouter()
const authStore = useAuthStore()
const paypalUrl = 'https://paypal.me/biblestem'

const openPayPalPortal = () => {
  // Track donation click
  import('@/services/analytics').then(({ analytics }) => {
    analytics.trackEvent({
      action: 'donation_clicked',
      category: 'monetization',
      label: 'paypal',
    })
  })

  window.open(paypalUrl, '_blank', 'noopener,noreferrer')
  
  // After donation, mark user as supporter (this would typically be done via webhook)
  // For now, we'll show a message
  setTimeout(() => {
    if (confirm('After completing your donation, your account will be updated to Supporter status. Thank you for your support!')) {
      router.push('/profile')
    }
  }, 2000)
}

const markAsSupporter = async () => {
  if (!authStore.user || !isSupabaseAvailable()) return

  const supabase = getSupabase()
  if (!supabase) return

  try {
    const { error } = await supabase
      .from('users')
      .update({ has_supported: true })
      .eq('id', authStore.user.id)

    if (!error) {
      // Update local store
      if (authStore.user) {
        authStore.user.hasSupported = true
      }
      
      // Track in analytics
      import('@/services/analytics').then(({ analytics }) => {
        analytics.trackDonation(0, 'USD') // Amount would come from webhook
        analytics.setUserProperties(authStore.user!.id, {
          has_supported: true,
        })
      })
    }
  } catch (error) {
    console.error('Error updating supporter status:', error)
  }
}

onMounted(() => {
  // Delay a tick so the page can render before redirecting
  setTimeout(() => {
    if (typeof window !== 'undefined') {
      openPayPalPortal()
    }
  }, 400)
})
</script>


