<template>
  <div class="study-share">
    <!-- Share Button -->
    <button
      @click="openShareModal"
      class="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
      :class="buttonClass"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
      </svg>
      <span>{{ buttonText }}</span>
    </button>

    <!-- Share Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
      @click.self="closeModal"
    >
      <div class="bg-white dark:bg-neutral-800 rounded-t-xl sm:rounded-xl shadow-xl w-full sm:max-w-md sm:w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-4 sm:mb-6">
          <h3 class="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 pr-2">
            Share {{ shareType === 'study' ? 'Study' : shareType === 'progress' ? 'Progress' : 'Achievement' }}
          </h3>
          <button @click="closeModal" class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 p-1 -m-1">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Study/Progress Preview -->
        <div class="mb-6 p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
          <div class="flex items-start space-x-3">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0" :class="study?.color || 'from-primary-500 to-primary-600'">
              <svg v-if="shareType === 'progress'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <svg v-else-if="shareType === 'achievement'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span v-else class="text-white font-bold text-sm">{{ study?.title?.charAt(0) || 'B' }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-medium text-neutral-900 dark:text-neutral-100 text-sm">{{ shareTitle }}</h4>
              <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">{{ shareDescription }}</p>
            </div>
          </div>
        </div>

        <!-- Custom Message -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Add a personal message (optional)
          </label>
          <textarea
            v-model="customMessage"
            rows="3"
            placeholder="Add your thoughts about this study..."
            class="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
          ></textarea>
        </div>

        <!-- Quick Share Options -->
        <div class="mb-4 sm:mb-6">
          <h4 class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Quick Share</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            <!-- Native Share -->
            <button
              v-if="canUseNativeShare"
              @click="shareNative"
              class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors min-h-[4rem] sm:min-h-0"
            >
              <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300 text-center">Share</span>
            </button>

            <!-- Copy Link -->
            <button
              @click="copyLink"
              class="flex flex-col items-center p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <div class="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mb-2">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">Copy Link</span>
            </button>

            <!-- WhatsApp -->
            <button
              @click="shareWhatsApp"
              class="flex flex-col items-center p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.685"/>
                </svg>
              </div>
              <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">WhatsApp</span>
            </button>

            <!-- Twitter -->
            <button
              @click="shareTwitter"
              class="flex flex-col items-center p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">Twitter</span>
            </button>
          </div>
        </div>

        <!-- More Options -->
        <div class="border-t border-neutral-200 dark:border-neutral-600 pt-4">
          <h4 class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">More Options</h4>
          <div class="space-y-2">
            <button
              @click="shareEmail"
              class="w-full flex items-center space-x-3 p-2 text-left rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <svg class="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-sm text-neutral-700 dark:text-neutral-300">Share via Email</span>
            </button>
            
            <button
              @click="generateShareImage"
              class="w-full flex items-center space-x-3 p-2 text-left rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <svg class="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-sm text-neutral-700 dark:text-neutral-300">Generate Share Image</span>
            </button>
          </div>
        </div>

        <!-- Share Stats (if available) -->
        <div v-if="shareStats" class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div class="flex items-center space-x-2 text-blue-700 dark:text-blue-300">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm font-medium">This study has been shared {{ shareStats.totalShares }} times!</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Toast -->
    <div
      v-if="showSuccessToast"
      class="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm bg-green-600 text-white rounded-lg shadow-xl p-4 z-50 animate-slide-up"
    >
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm font-medium">{{ successMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePWA } from '@/composables/usePWA'

interface Props {
  study?: any
  progress?: any
  achievement?: any
  shareType: 'study' | 'progress' | 'achievement'
  buttonText?: string
  buttonClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: 'Share',
  buttonClass: ''
})

const { shareContent } = usePWA()

const showModal = ref(false)
const customMessage = ref('')
const showSuccessToast = ref(false)
const successMessage = ref('')
const shareStats = ref<{ totalShares: number } | null>(null)

// Check if native share is available
const canUseNativeShare = computed(() => 'share' in navigator)

// Generate share content
const shareTitle = computed(() => {
  switch (props.shareType) {
    case 'study':
      return props.study?.title || 'Bible Study'
    case 'progress':
      return `I completed "${props.study?.title || 'a Bible study'}"`
    case 'achievement':
      return `I earned the "${props.achievement?.title}" badge!`
    default:
      return 'Check out BibleStem'
  }
})

const shareDescription = computed(() => {
  switch (props.shareType) {
    case 'study':
      return props.study?.description || 'Interactive Bible study'
    case 'progress':
      return `Just finished ${props.progress?.completedLessons || 0} lessons of amazing Bible study on BibleStem!`
    case 'achievement':
      return props.achievement?.description || 'Achievement unlocked on BibleStem'
    default:
      return 'Discover deeper faith through interactive Bible studies'
  }
})

const shareUrl = computed(() => {
  const baseUrl = window.location.origin
  switch (props.shareType) {
    case 'study':
      return `${baseUrl}/study/${props.study?.id || ''}`
    case 'progress':
      return `${baseUrl}/study/${props.study?.id || ''}`
    case 'achievement':
      return `${baseUrl}/dashboard`
    default:
      return baseUrl
  }
})

const fullShareText = computed(() => {
  let text = shareTitle.value
  if (customMessage.value.trim()) {
    text += `\n\n${customMessage.value.trim()}`
  }
  text += `\n\n${shareDescription.value}`
  text += `\n\nJoin me on BibleStem: ${shareUrl.value}`
  return text
})

// Modal controls
const openShareModal = () => {
  showModal.value = true
  loadShareStats()
}

const closeModal = () => {
  showModal.value = false
  customMessage.value = ''
}

// Share actions
const shareNative = async () => {
  const success = await shareContent({
    title: shareTitle.value,
    text: fullShareText.value,
    url: shareUrl.value
  })
  
  if (success) {
    showSuccess('Shared successfully!')
    closeModal()
  }
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl.value)
    showSuccess('Link copied to clipboard!')
  } catch (error) {
    console.error('Failed to copy link:', error)
  }
}

const shareWhatsApp = () => {
  const text = encodeURIComponent(fullShareText.value)
  window.open(`https://wa.me/?text=${text}`, '_blank')
  showSuccess('Opening WhatsApp...')
  closeModal()
}

const shareTwitter = () => {
  const text = encodeURIComponent(shareTitle.value)
  const url = encodeURIComponent(shareUrl.value)
  const hashtags = 'BibleStudy,Faith,BibleStem'
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`, '_blank')
  showSuccess('Opening Twitter...')
  closeModal()
}

const shareEmail = () => {
  const subject = encodeURIComponent(shareTitle.value)
  const body = encodeURIComponent(fullShareText.value)
  window.open(`mailto:?subject=${subject}&body=${body}`)
  showSuccess('Opening email...')
  closeModal()
}

const generateShareImage = () => {
  // TODO: Implement share image generation
  showSuccess('Share image feature coming soon!')
}

// Success toast
const showSuccess = (message: string) => {
  successMessage.value = message
  showSuccessToast.value = true
  setTimeout(() => {
    showSuccessToast.value = false
  }, 3000)
}

// Load share statistics
const loadShareStats = async () => {
  // TODO: Implement actual share stats from API
  // For now, simulate some data
  if (props.study) {
    shareStats.value = {
      totalShares: Math.floor(Math.random() * 500) + 50
    }
  }
}

onMounted(() => {
  // Pre-load share stats if needed
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
