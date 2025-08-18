import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStudyProgressStore } from './studyProgress'

export interface Badge {
  id: string
  title: string
  description: string
  icon: string
  color: string
  category: 'completion' | 'milestone' | 'consistency' | 'exploration' | 'special'
  requirement: {
    type:
      | 'studies_completed'
      | 'lessons_completed'
      | 'study_streak'
      | 'specific_study'
      | 'word_interactions'
      | 'prayer_engagement'
    count?: number
    studyId?: string
  }
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  unlocked?: boolean
  unlockedAt?: string
}

export interface Achievement {
  badgeId: string
  unlockedAt: string
  progress?: number
}

export const useAchievementsStore = defineStore('achievements', () => {
  const achievements = ref<Record<string, Achievement>>({})
  const progressStore = useStudyProgressStore()

  // Define all available badges
  const allBadges: Badge[] = [
    // Completion Badges
    {
      id: 'first-study',
      title: 'First Steps',
      description: 'Complete your first Bible study',
      icon: '🌱',
      color: 'from-green-500 to-green-600',
      category: 'completion',
      requirement: { type: 'studies_completed', count: 1 },
      rarity: 'common',
    },
    {
      id: 'prayer-warrior',
      title: 'Prayer Warrior',
      description: 'Complete the "How to Study the Bible: Prayer" lesson',
      icon: '🙏',
      color: 'from-blue-500 to-blue-600',
      category: 'completion',
      requirement: { type: 'specific_study', studyId: 'htsb-1' },
      rarity: 'common',
    },
    {
      id: 'scripture-seeker',
      title: 'Scripture Seeker',
      description: 'Complete 3 Bible studies',
      icon: '📖',
      color: 'from-purple-500 to-purple-600',
      category: 'completion',
      requirement: { type: 'studies_completed', count: 3 },
      rarity: 'common',
    },
    {
      id: 'wise-student',
      title: 'Wise Student',
      description: 'Complete the entire "How to Study the Bible" series',
      icon: '🎓',
      color: 'from-amber-500 to-amber-600',
      category: 'completion',
      requirement: { type: 'specific_study', studyId: 'how-to-study-bible' },
      rarity: 'rare',
    },
    {
      id: 'shepherd-follower',
      title: 'Shepherd Follower',
      description: 'Complete the Psalm 23 study',
      icon: '🐑',
      color: 'from-teal-500 to-teal-600',
      category: 'completion',
      requirement: { type: 'specific_study', studyId: 'psalm-23' },
      rarity: 'common',
    },

    // Milestone Badges
    {
      id: 'dedicated-learner',
      title: 'Dedicated Learner',
      description: 'Complete 5 Bible studies',
      icon: '⭐',
      color: 'from-yellow-500 to-yellow-600',
      category: 'milestone',
      requirement: { type: 'studies_completed', count: 5 },
      rarity: 'rare',
    },
    {
      id: 'faithful-scholar',
      title: 'Faithful Scholar',
      description: 'Complete 10 Bible studies',
      icon: '📚',
      color: 'from-indigo-500 to-indigo-600',
      category: 'milestone',
      requirement: { type: 'studies_completed', count: 10 },
      rarity: 'epic',
    },
    {
      id: 'lesson-master',
      title: 'Lesson Master',
      description: 'Complete 50 individual lessons',
      icon: '🎯',
      color: 'from-red-500 to-red-600',
      category: 'milestone',
      requirement: { type: 'lessons_completed', count: 50 },
      rarity: 'epic',
    },

    // Consistency Badges
    {
      id: 'daily-reader',
      title: 'Daily Reader',
      description: 'Study for 7 days in a row',
      icon: '📅',
      color: 'from-emerald-500 to-emerald-600',
      category: 'consistency',
      requirement: { type: 'study_streak', count: 7 },
      rarity: 'rare',
    },
    {
      id: 'faithful-servant',
      title: 'Faithful Servant',
      description: 'Study for 30 days in a row',
      icon: '👑',
      color: 'from-violet-500 to-violet-600',
      category: 'consistency',
      requirement: { type: 'study_streak', count: 30 },
      rarity: 'legendary',
    },

    // Exploration Badges
    {
      id: 'word-explorer',
      title: 'Word Explorer',
      description: 'Click on 25 Hebrew/Greek words to study their meaning',
      icon: '🔍',
      color: 'from-cyan-500 to-cyan-600',
      category: 'exploration',
      requirement: { type: 'word_interactions', count: 25 },
      rarity: 'rare',
    },
    {
      id: 'ancient-linguist',
      title: 'Ancient Linguist',
      description: 'Study 100 Hebrew/Greek words',
      icon: '📜',
      color: 'from-orange-500 to-orange-600',
      category: 'exploration',
      requirement: { type: 'word_interactions', count: 100 },
      rarity: 'epic',
    },

    // Special Badges
    {
      id: 'prayer-champion',
      title: 'Prayer Champion',
      description: 'Engage with prayer prompts in 10 different lessons',
      icon: '💪',
      color: 'from-pink-500 to-pink-600',
      category: 'special',
      requirement: { type: 'prayer_engagement', count: 10 },
      rarity: 'rare',
    },
  ]

  const availableBadges = computed(() => allBadges)

  const unlockedBadges = computed(() => {
    return allBadges.filter((badge) => achievements.value[badge.id]?.unlockedAt)
  })

  const lockedBadges = computed(() => {
    return allBadges.filter((badge) => !achievements.value[badge.id]?.unlockedAt)
  })

  const badgesByCategory = computed(() => {
    const categories: Record<string, Badge[]> = {}
    allBadges.forEach((badge) => {
      if (!categories[badge.category]) {
        categories[badge.category] = []
      }
      categories[badge.category].push({
        ...badge,
        unlocked: !!achievements.value[badge.id]?.unlockedAt,
      })
    })
    return categories
  })

  const totalBadgesEarned = computed(() => unlockedBadges.value.length)

  const checkAchievements = () => {
    const allProgress = progressStore.getAllStudyProgress()
    const studiesCompleted = progressStore.getTotalStudiesCompleted()

    // Get total lessons completed across all studies
    const totalLessonsCompleted = Object.values(allProgress).reduce((total, progress) => {
      return total + progress.completedLessons.length
    }, 0)

    allBadges.forEach((badge) => {
      if (achievements.value[badge.id]?.unlockedAt) return // Already unlocked

      let shouldUnlock = false

      switch (badge.requirement.type) {
        case 'studies_completed':
          shouldUnlock = studiesCompleted >= (badge.requirement.count || 0)
          break

        case 'lessons_completed':
          shouldUnlock = totalLessonsCompleted >= (badge.requirement.count || 0)
          break

        case 'specific_study':
          if (badge.requirement.studyId) {
            const studyProgress = allProgress[badge.requirement.studyId]
            if (studyProgress) {
              // For individual lessons like htsb-1, check if that specific lesson is completed
              if (badge.requirement.studyId.includes('-')) {
                shouldUnlock = studyProgress.completedLessons.includes(badge.requirement.studyId)
              } else {
                // For full studies, check if all lessons are completed
                // This would need study data to determine total lessons
                shouldUnlock = studyProgress.completedLessons.length > 0
              }
            }
          }
          break

        case 'study_streak':
          // Mock streak calculation - in real app this would track consecutive days
          const mockStreak = Math.floor(Math.random() * 35) + 1
          shouldUnlock = mockStreak >= (badge.requirement.count || 0)
          break

        case 'word_interactions':
          // Mock word interactions - in real app this would track actual clicks
          const mockInteractions = Math.floor(Math.random() * 120) + 1
          shouldUnlock = mockInteractions >= (badge.requirement.count || 0)
          break

        case 'prayer_engagement':
          // Mock prayer engagement - in real app this would track prayer interactions
          const mockPrayerEngagement = Math.floor(Math.random() * 15) + 1
          shouldUnlock = mockPrayerEngagement >= (badge.requirement.count || 0)
          break
      }

      if (shouldUnlock) {
        unlockBadge(badge.id)
      }
    })
  }

  const unlockBadge = (badgeId: string) => {
    if (!achievements.value[badgeId]) {
      achievements.value[badgeId] = {
        badgeId,
        unlockedAt: new Date().toISOString(),
      }
      saveToStorage()

      // Show achievement notification
      showAchievementNotification(badgeId)
    }
  }

  const showAchievementNotification = (badgeId: string) => {
    const badge = allBadges.find((b) => b.id === badgeId)
    if (badge) {
      // In a real app, this would trigger a toast notification or modal
      console.log(`🎉 Achievement Unlocked: ${badge.title} - ${badge.description}`)
    }
  }

  const getBadgeProgress = (badgeId: string): number => {
    const badge = allBadges.find((b) => b.id === badgeId)
    if (!badge || achievements.value[badgeId]?.unlockedAt) return 100

    const allProgress = progressStore.getAllStudyProgress()
    const studiesCompleted = progressStore.getTotalStudiesCompleted()

    switch (badge.requirement.type) {
      case 'studies_completed':
        return Math.min(100, (studiesCompleted / (badge.requirement.count || 1)) * 100)

      case 'lessons_completed':
        const totalLessons = Object.values(allProgress).reduce((total, progress) => {
          return total + progress.completedLessons.length
        }, 0)
        return Math.min(100, (totalLessons / (badge.requirement.count || 1)) * 100)

      default:
        return 0
    }
  }

  const saveToStorage = () => {
    localStorage.setItem('biblestem_achievements', JSON.stringify(achievements.value))
  }

  const loadFromStorage = () => {
    const saved = localStorage.getItem('biblestem_achievements')
    if (saved) {
      try {
        achievements.value = JSON.parse(saved)
      } catch (error) {
        console.error('Error loading achievements:', error)
        initializeDemoData()
      }
    } else {
      initializeDemoData()
    }
  }

  const initializeDemoData = () => {
    // Initialize with some demo achievements
    achievements.value = {
      'first-study': {
        badgeId: 'first-study',
        unlockedAt: '2024-01-15T10:00:00Z',
      },
      'prayer-warrior': {
        badgeId: 'prayer-warrior',
        unlockedAt: '2024-01-20T14:30:00Z',
      },
    }
    saveToStorage()
  }

  return {
    achievements,
    availableBadges,
    unlockedBadges,
    lockedBadges,
    badgesByCategory,
    totalBadgesEarned,
    checkAchievements,
    unlockBadge,
    getBadgeProgress,
    loadFromStorage,
    initializeDemoData,
  }
})
