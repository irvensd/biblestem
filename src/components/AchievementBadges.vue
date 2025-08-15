<template>
  <div class="card p-4 sm:p-6">
    <div class="flex items-center justify-between mb-4 sm:mb-6">
      <h2 class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">Achievements</h2>
      <button @click="showAllBadges = true" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
        View All →
      </button>
    </div>

    <!-- Progress Summary -->
    <div class="mb-4 sm:mb-6">
      <div class="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2">
        <span>Badge Progress</span>
        <span>{{ achievementsStore.totalBadgesEarned }} / {{ achievementsStore.availableBadges.length }}</span>
      </div>
      <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
        <div
          class="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full transition-all duration-500"
          :style="`width: ${(achievementsStore.totalBadgesEarned / achievementsStore.availableBadges.length) * 100}%`"
        ></div>
      </div>
    </div>

    <!-- Recent Badges -->
    <div class="space-y-3">
      <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Recent Achievements</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div
          v-for="badge in recentUnlockedBadges.slice(0, 6)"
          :key="badge.id"
          class="group relative p-3 bg-gradient-to-br rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer"
          :class="badge.color"
          @click="showBadgeDetail(badge)"
        >
          <div class="text-center">
            <div class="text-lg sm:text-xl mb-1">{{ badge.icon }}</div>
            <div class="text-xs font-medium text-white truncate">{{ badge.title }}</div>
          </div>
          
          <!-- Glow effect for recent unlocks -->
          <div class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="achievementsStore.unlockedBadges.length === 0" class="text-center py-6">
        <div class="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-3">
          <span class="text-lg">🏆</span>
        </div>
        <p class="text-neutral-600 dark:text-neutral-400 text-sm">
          Complete your first study to earn your first badge!
        </p>
      </div>
    </div>

    <!-- Badge Detail Modal -->
    <div v-if="selectedBadge" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click="selectedBadge = null">
      <div class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-sm w-full" @click.stop>
        <div class="p-6 text-center">
          <div 
            class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br flex items-center justify-center"
            :class="selectedBadge.color"
          >
            <span class="text-3xl">{{ selectedBadge.icon }}</span>
          </div>
          
          <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            {{ selectedBadge.title }}
          </h3>
          
          <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
            {{ selectedBadge.description }}
          </p>
          
          <div class="flex items-center justify-center space-x-2 mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
              {{ selectedBadge.category.charAt(0).toUpperCase() + selectedBadge.category.slice(1) }}
            </span>
            <span 
              class="text-xs px-2 py-1 rounded-full"
              :class="getRarityClass(selectedBadge.rarity)"
            >
              {{ selectedBadge.rarity.charAt(0).toUpperCase() + selectedBadge.rarity.slice(1) }}
            </span>
          </div>
          
          <div v-if="selectedBadge.unlocked" class="text-green-600 dark:text-green-400 text-sm font-medium">
            ✓ Achieved {{ formatAchievementDate(selectedBadge.id) }}
          </div>
          
          <div v-else class="space-y-2">
            <div class="text-sm text-neutral-600 dark:text-neutral-400">
              Progress: {{ Math.round(achievementsStore.getBadgeProgress(selectedBadge.id)) }}%
            </div>
            <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                :style="`width: ${achievementsStore.getBadgeProgress(selectedBadge.id)}%`"
              ></div>
            </div>
          </div>
          
          <button 
            @click="selectedBadge = null"
            class="mt-4 btn-secondary w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- All Badges Modal -->
    <div v-if="showAllBadges" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click="showAllBadges = false">
      <div class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">All Achievements</h3>
            <button @click="showAllBadges = false" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6">
          <!-- Category Tabs -->
          <div class="flex flex-wrap gap-2 mb-6">
            <button
              v-for="category in Object.keys(achievementsStore.badgesByCategory)"
              :key="category"
              @click="selectedCategory = category"
              class="px-3 py-1 text-sm rounded-full transition-colors"
              :class="selectedCategory === category 
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'"
            >
              {{ category.charAt(0).toUpperCase() + category.slice(1) }}
              ({{ achievementsStore.badgesByCategory[category].filter(b => b.unlocked).length }}/{{ achievementsStore.badgesByCategory[category].length }})
            </button>
          </div>

          <!-- Badges Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div
              v-for="badge in achievementsStore.badgesByCategory[selectedCategory] || []"
              :key="badge.id"
              class="group relative p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:scale-105"
              :class="badge.unlocked 
                ? `bg-gradient-to-br ${badge.color} border-transparent` 
                : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 opacity-75'"
              @click="showBadgeDetail(badge)"
            >
              <div class="text-center">
                <div class="text-2xl mb-2" :class="badge.unlocked ? '' : 'grayscale opacity-50'">
                  {{ badge.icon }}
                </div>
                <div 
                  class="text-sm font-medium mb-1 truncate"
                  :class="badge.unlocked ? 'text-white' : 'text-neutral-600 dark:text-neutral-400'"
                >
                  {{ badge.title }}
                </div>
                <div 
                  class="text-xs truncate"
                  :class="badge.unlocked ? 'text-white/80' : 'text-neutral-500 dark:text-neutral-500'"
                >
                  {{ badge.description }}
                </div>

                <!-- Progress bar for locked badges -->
                <div v-if="!badge.unlocked" class="mt-2">
                  <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1">
                    <div
                      class="bg-gradient-to-r from-primary-500 to-secondary-500 h-1 rounded-full transition-all duration-300"
                      :style="`width: ${achievementsStore.getBadgeProgress(badge.id)}%`"
                    ></div>
                  </div>
                  <div class="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                    {{ Math.round(achievementsStore.getBadgeProgress(badge.id)) }}%
                  </div>
                </div>
              </div>

              <!-- Locked overlay -->
              <div v-if="!badge.unlocked" class="absolute top-2 right-2">
                <svg class="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
              </div>

              <!-- Achievement glow -->
              <div v-if="badge.unlocked" class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useAchievementsStore } from '../stores/achievements'
import type { Badge } from '../stores/achievements'

const achievementsStore = useAchievementsStore()

const showAllBadges = ref(false)
const selectedBadge = ref<Badge | null>(null)
const selectedCategory = ref('completion')

const recentUnlockedBadges = computed(() => {
  return achievementsStore.unlockedBadges
    .sort((a, b) => {
      const dateA = achievementsStore.achievements[a.id]?.unlockedAt || ''
      const dateB = achievementsStore.achievements[b.id]?.unlockedAt || ''
      return dateB.localeCompare(dateA)
    })
})

const showBadgeDetail = (badge: Badge) => {
  selectedBadge.value = {
    ...badge,
    unlocked: !!achievementsStore.achievements[badge.id]?.unlockedAt
  }
}

const getRarityClass = (rarity: string) => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
    case 'rare':
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    case 'epic':
      return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    case 'legendary':
      return 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
    default:
      return 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
  }
}

const formatAchievementDate = (badgeId: string) => {
  const achievement = achievementsStore.achievements[badgeId]
  if (!achievement?.unlockedAt) return ''
  
  return new Date(achievement.unlockedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

onMounted(() => {
  achievementsStore.loadFromStorage()
  achievementsStore.checkAchievements()
})
</script>
