import { ref, computed } from 'vue'

interface CacheItem<T> {
  data: T
  timestamp: number
  expiresAt: number
}

export function useCache() {
  const cache = ref<Map<string, CacheItem<any>>>(new Map())
  const maxAge = 5 * 60 * 1000 // 5 minutes default

  const set = <T>(key: string, data: T, ttl?: number): void => {
    const expiresAt = Date.now() + (ttl || maxAge)
    cache.value.set(key, {
      data,
      timestamp: Date.now(),
      expiresAt
    })
  }

  const get = <T>(key: string): T | null => {
    const item = cache.value.get(key)
    if (!item) return null

    if (Date.now() > item.expiresAt) {
      cache.value.delete(key)
      return null
    }

    return item.data
  }

  const has = (key: string): boolean => {
    const item = cache.value.get(key)
    if (!item) return false

    if (Date.now() > item.expiresAt) {
      cache.value.delete(key)
      return false
    }

    return true
  }

  const remove = (key: string): boolean => {
    return cache.value.delete(key)
  }

  const clear = (): void => {
    cache.value.clear()
  }

  const cleanup = (): void => {
    const now = Date.now()
    for (const [key, item] of cache.value.entries()) {
      if (now > item.expiresAt) {
        cache.value.delete(key)
      }
    }
  }

  const size = computed(() => cache.value.size)

  // Cleanup expired items every minute
  setInterval(cleanup, 60000)

  return {
    set,
    get,
    has,
    remove,
    clear,
    cleanup,
    size
  }
}

export function useStudyCache() {
  const cache = useCache()
  const CACHE_KEYS = {
    STUDIES: 'studies',
    LESSON: (studyId: string, lessonId: string) => `lesson:${studyId}:${lessonId}`,
    PROGRESS: (studyId: string) => `progress:${studyId}`,
    USER_DATA: 'user_data'
  }

  const cacheStudy = (study: any) => {
    cache.set(CACHE_KEYS.STUDIES, study, 10 * 60 * 1000) // 10 minutes
  }

  const getCachedStudy = () => {
    return cache.get(CACHE_KEYS.STUDIES)
  }

  const cacheLesson = (studyId: string, lessonId: string, lesson: any) => {
    cache.set(CACHE_KEYS.LESSON(studyId, lessonId), lesson, 30 * 60 * 1000) // 30 minutes
  }

  const getCachedLesson = (studyId: string, lessonId: string) => {
    return cache.get(CACHE_KEYS.LESSON(studyId, lessonId))
  }

  const cacheProgress = (studyId: string, progress: any) => {
    cache.set(CACHE_KEYS.PROGRESS(studyId), progress, 5 * 60 * 1000) // 5 minutes
  }

  const getCachedProgress = (studyId: string) => {
    return cache.get(CACHE_KEYS.PROGRESS(studyId))
  }

  return {
    cacheStudy,
    getCachedStudy,
    cacheLesson,
    getCachedLesson,
    cacheProgress,
    getCachedProgress,
    clearCache: cache.clear
  }
}
