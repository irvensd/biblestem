import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { isSupabaseAvailable, getSupabase, handleSupabaseError } from '../lib/supabase'
import { getSyncQueue } from './useSupabaseSync'

export interface StudyCategory {
  id: string
  name: string
  description: string
  color: string
  icon: string
  studyCount: number
  createdAt: Date
  updatedAt: Date
}

export interface StudyBookmark {
  id: string
  studyId: string
  lessonId?: string
  userId: string
  title: string
  description?: string
  tags: string[]
  categoryId?: string
  createdAt: Date
  updatedAt: Date
}

export interface StudyTag {
  id: string
  name: string
  color: string
  studyCount: number
}

export function useStudyOrganization() {
  const authStore = useAuthStore()
  
  // State
  const categories = ref<StudyCategory[]>([])
  const bookmarks = ref<StudyBookmark[]>([])
  const tags = ref<StudyTag[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  // Computed
  const userBookmarks = computed(() => {
    if (!authStore.user) return []
    const userId = authStore.user.id
    return bookmarks.value.filter(bookmark => bookmark.userId === userId)
  })
  
  const bookmarksByCategory = computed(() => {
    const grouped: Record<string, StudyBookmark[]> = {}
    
    userBookmarks.value.forEach(bookmark => {
      const categoryId = bookmark.categoryId || 'uncategorized'
      if (!grouped[categoryId]) {
        grouped[categoryId] = []
      }
      grouped[categoryId].push(bookmark)
    })
    
    return grouped
  })
  
  const allTags = computed(() => {
    const tagMap = new Map<string, StudyTag>()
    
    userBookmarks.value.forEach(bookmark => {
      bookmark.tags.forEach(tagName => {
        if (!tagMap.has(tagName)) {
          tagMap.set(tagName, {
            id: tagName,
            name: tagName,
            color: getTagColor(tagName),
            studyCount: 0
          })
        }
        tagMap.get(tagName)!.studyCount++
      })
    })
    
    return Array.from(tagMap.values()).sort((a, b) => b.studyCount - a.studyCount)
  })
  
  // Methods
  const createCategory = async (categoryData: Omit<StudyCategory, 'id' | 'studyCount' | 'createdAt' | 'updatedAt'>): Promise<StudyCategory> => {
    isLoading.value = true
    error.value = null
    
    try {
      const category: StudyCategory = {
        id: generateId(),
        ...categoryData,
        studyCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      categories.value.push(category)
      await saveCategories()
      
      return category
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to create category'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  const updateCategory = async (id: string, updates: Partial<StudyCategory>): Promise<void> => {
    isLoading.value = true
    error.value = null
    
    try {
      const index = categories.value.findIndex(cat => cat.id === id)
      if (index === -1) {
        throw new Error('Category not found')
      }
      
      categories.value[index] = {
        ...categories.value[index],
        ...updates,
        updatedAt: new Date()
      }
      
      await saveCategories()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update category'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  const deleteCategory = async (id: string): Promise<void> => {
    isLoading.value = true
    error.value = null
    
    try {
      // Move bookmarks to uncategorized
      bookmarks.value.forEach(bookmark => {
        if (bookmark.categoryId === id) {
          bookmark.categoryId = undefined
        }
      })
      
      // Remove category
      categories.value = categories.value.filter(cat => cat.id !== id)
      
      await saveCategories()
      await saveBookmarks()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to delete category'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  // Supabase sync helpers for bookmarks
  const saveBookmarkToSupabase = async (bookmark: StudyBookmark): Promise<void> => {
    const useSupabase = isSupabaseAvailable()
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - using local storage only')
      return
    }

    const supabase = getSupabase()
    if (!supabase) return

    try {
      const { error } = await supabase
        .from('bookmarks')
        .upsert({
          id: bookmark.id,
          user_id: authStore.user.id,
          study_id: bookmark.studyId,
          lesson_id: bookmark.lessonId || null,
          title: bookmark.title,
          description: bookmark.description || null,
          tags: bookmark.tags,
          category_id: bookmark.categoryId || null,
          created_at: bookmark.createdAt.toISOString(),
          updated_at: bookmark.updatedAt.toISOString()
        }, {
          onConflict: 'user_id,study_id,lesson_id'
        })

      if (error) {
        const errorInfo = handleSupabaseError(error, 'save bookmark')
        console.error('Failed to save bookmark to Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If RLS violation, auth error, or network error, queue for later sync
        if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
          console.warn('Queuing bookmark for later sync')
          const syncQueue = getSyncQueue()
          // Use bookmark_create for new bookmarks, bookmark_update will be handled in updateBookmark
          syncQueue.queueOperation('bookmark_create', bookmark)
          return
        }
        
        throw error
      }
      console.log('Bookmark saved to Supabase:', bookmark.id)
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'save bookmark')
      // Queue for offline sync if it's a network/auth/RLS error
      if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
        const syncQueue = getSyncQueue()
        syncQueue.queueOperation('bookmark_create', bookmark)
      }
      throw error
    }
  }

  const updateBookmarkInSupabase = async (bookmark: StudyBookmark): Promise<void> => {
    const useSupabase = isSupabaseAvailable()
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - using local storage only')
      return
    }

    const supabase = getSupabase()
    if (!supabase) return

    try {
      const { error } = await supabase
        .from('bookmarks')
        .upsert({
          id: bookmark.id,
          user_id: authStore.user.id,
          study_id: bookmark.studyId,
          lesson_id: bookmark.lessonId || null,
          title: bookmark.title,
          description: bookmark.description || null,
          tags: bookmark.tags,
          category_id: bookmark.categoryId || null,
          created_at: bookmark.createdAt.toISOString(),
          updated_at: bookmark.updatedAt.toISOString()
        }, {
          onConflict: 'user_id,study_id,lesson_id'
        })

      if (error) {
        const errorInfo = handleSupabaseError(error, 'update bookmark')
        console.error('Failed to update bookmark in Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If RLS violation, auth error, or network error, queue for later sync
        if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
          console.warn('Queuing bookmark update for later sync')
          const syncQueue = getSyncQueue()
          syncQueue.queueOperation('bookmark_update', bookmark)
          return
        }
        
        throw error
      }
      console.log('Bookmark updated in Supabase:', bookmark.id)
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'update bookmark')
      // Queue for offline sync if it's a network/auth/RLS error
      if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
        const syncQueue = getSyncQueue()
        syncQueue.queueOperation('bookmark_update', bookmark)
      }
      throw error
    }
  }
  
  const deleteBookmarkFromSupabase = async (bookmarkId: string): Promise<void> => {
    const useSupabase = isSupabaseAvailable()
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - using local storage only')
      return
    }

    const supabase = getSupabase()
    if (!supabase) return

    try {
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('id', bookmarkId)
        .eq('user_id', authStore.user.id)

      if (error) {
        const errorInfo = handleSupabaseError(error, 'delete bookmark')
        console.error('Failed to delete bookmark from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If RLS violation, auth error, or network error, queue for later sync
        if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
          console.warn('Queuing bookmark deletion for later sync')
          const syncQueue = getSyncQueue()
          syncQueue.queueOperation('bookmark_delete', { bookmarkId })
          return
        }
        
        throw error
      }
      console.log('Bookmark deleted from Supabase:', bookmarkId)
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'delete bookmark')
      // Queue for offline sync if it's a network/auth/RLS error
      if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
        const syncQueue = getSyncQueue()
        syncQueue.queueOperation('bookmark_delete', { bookmarkId })
      }
      throw error
    }
  }

  const addBookmark = async (bookmarkData: Omit<StudyBookmark, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<StudyBookmark> => {
    if (!authStore.user) {
      throw new Error('User must be authenticated to add bookmarks')
    }
    
    isLoading.value = true
    error.value = null
    
    try {
      const bookmark: StudyBookmark = {
        id: generateId(),
        ...bookmarkData,
        userId: authStore.user.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      bookmarks.value.push(bookmark)
      await saveBookmarks()
      
      // Try to sync to Supabase (fire and forget - don't block UI)
      saveBookmarkToSupabase(bookmark).catch((error: unknown) => {
        console.error('Failed to sync bookmark to Supabase:', error)
        // Already queued in saveBookmarkToSupabase if needed
      })
      
      return bookmark
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to add bookmark'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  const updateBookmark = async (id: string, updates: Partial<StudyBookmark>): Promise<void> => {
    isLoading.value = true
    error.value = null
    
    try {
      const index = bookmarks.value.findIndex(bookmark => bookmark.id === id)
      if (index === -1) {
        throw new Error('Bookmark not found')
      }
      
      bookmarks.value[index] = {
        ...bookmarks.value[index],
        ...updates,
        updatedAt: new Date()
      }
      
      await saveBookmarks()
      
      // Try to sync to Supabase (fire and forget - don't block UI)
      updateBookmarkInSupabase(bookmarks.value[index]).catch((error: unknown) => {
        console.error('Failed to sync bookmark update to Supabase:', error)
        // Already queued in updateBookmarkInSupabase if needed
      })
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update bookmark'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  const removeBookmark = async (id: string): Promise<void> => {
    isLoading.value = true
    error.value = null
    
    try {
      bookmarks.value = bookmarks.value.filter(bookmark => bookmark.id !== id)
      await saveBookmarks()
      
      // Try to sync deletion to Supabase (fire and forget - don't block UI)
      deleteBookmarkFromSupabase(id).catch((error: unknown) => {
        console.error('Failed to sync bookmark deletion to Supabase:', error)
        // Already queued in deleteBookmarkFromSupabase if needed
      })
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to remove bookmark'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  const isBookmarked = (studyId: string, lessonId?: string): boolean => {
    return userBookmarks.value.some(bookmark => 
      bookmark.studyId === studyId && 
      (lessonId ? bookmark.lessonId === lessonId : !bookmark.lessonId)
    )
  }
  
  const getBookmark = (studyId: string, lessonId?: string): StudyBookmark | undefined => {
    return userBookmarks.value.find(bookmark => 
      bookmark.studyId === studyId && 
      (lessonId ? bookmark.lessonId === lessonId : !bookmark.lessonId)
    )
  }
  
  const toggleBookmark = async (studyId: string, lessonId?: string, title?: string): Promise<void> => {
    const existingBookmark = getBookmark(studyId, lessonId)
    
    if (existingBookmark) {
      await removeBookmark(existingBookmark.id)
    } else {
      await addBookmark({
        studyId,
        lessonId,
        title: title || `Study ${studyId}`,
        tags: []
      })
    }
  }
  
  const searchBookmarks = (query: string): StudyBookmark[] => {
    const lowercaseQuery = query.toLowerCase()
    
    return userBookmarks.value.filter(bookmark => 
      bookmark.title.toLowerCase().includes(lowercaseQuery) ||
      bookmark.description?.toLowerCase().includes(lowercaseQuery) ||
      bookmark.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }
  
  const filterBookmarksByCategory = (categoryId: string): StudyBookmark[] => {
    return userBookmarks.value.filter(bookmark => bookmark.categoryId === categoryId)
  }
  
  const filterBookmarksByTag = (tag: string): StudyBookmark[] => {
    return userBookmarks.value.filter(bookmark => bookmark.tags.includes(tag))
  }
  
  const getTagColor = (tagName: string): string => {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-yellow-100 text-yellow-800',
      'bg-red-100 text-red-800',
      'bg-purple-100 text-purple-800',
      'bg-pink-100 text-pink-800',
      'bg-indigo-100 text-indigo-800',
      'bg-gray-100 text-gray-800'
    ]
    
    const hash = tagName.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    return colors[Math.abs(hash) % colors.length]
  }
  
  // Storage methods
  const saveCategories = async (): Promise<void> => {
    try {
      localStorage.setItem('biblestem_categories', JSON.stringify(categories.value))
    } catch (err) {
      console.error('Failed to save categories:', err)
    }
  }
  
  const saveBookmarks = async (): Promise<void> => {
    try {
      localStorage.setItem('biblestem_bookmarks', JSON.stringify(bookmarks.value))
    } catch (err) {
      console.error('Failed to save bookmarks:', err)
    }
  }
  
  const loadCategories = async (): Promise<void> => {
    try {
      const stored = localStorage.getItem('biblestem_categories')
      if (stored) {
        categories.value = JSON.parse(stored).map((cat: StudyCategory) => ({
          ...cat,
          createdAt: new Date(cat.createdAt),
          updatedAt: new Date(cat.updatedAt)
        }))
      } else {
        // Create default categories
        await createDefaultCategories()
      }
    } catch (err) {
      console.error('Failed to load categories:', err)
      await createDefaultCategories()
    }
  }
  
  const loadBookmarks = async (): Promise<void> => {
    try {
      const stored = localStorage.getItem('biblestem_bookmarks')
      if (stored) {
        bookmarks.value = JSON.parse(stored).map((bookmark: StudyBookmark) => ({
          ...bookmark,
          createdAt: new Date(bookmark.createdAt),
          updatedAt: new Date(bookmark.updatedAt)
        }))
      }
    } catch (err) {
      console.error('Failed to load bookmarks:', err)
    }
  }
  
  const createDefaultCategories = async (): Promise<void> => {
    const defaultCategories = [
      {
        name: 'Bible Study',
        description: 'General Bible study materials',
        color: 'bg-blue-100 text-blue-800',
        icon: 'book'
      },
      {
        name: 'Devotionals',
        description: 'Daily devotionals and reflections',
        color: 'bg-green-100 text-green-800',
        icon: 'sun'
      },
      {
        name: 'Prophecy',
        description: 'End-time prophecy studies',
        color: 'bg-purple-100 text-purple-800',
        icon: 'eye'
      },
      {
        name: 'History',
        description: 'Biblical history and archaeology',
        color: 'bg-yellow-100 text-yellow-800',
        icon: 'clock'
      },
      {
        name: 'Theology',
        description: 'Doctrinal and theological studies',
        color: 'bg-red-100 text-red-800',
        icon: 'academic-cap'
      }
    ]
    
    for (const categoryData of defaultCategories) {
      await createCategory(categoryData)
    }
  }
  
  const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
  }
  
  const loadBookmarksFromSupabase = async (): Promise<void> => {
    const useSupabase = isSupabaseAvailable()
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - loading from local storage only')
      await loadBookmarks()
      return
    }

    const supabase = getSupabase()
    if (!supabase) {
      await loadBookmarks()
      return
    }

    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', authStore.user.id)
        .order('created_at', { ascending: false })

      if (error) {
        const errorInfo = handleSupabaseError(error, 'load bookmarks')
        console.error('Failed to load bookmarks from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        // Fall back to local storage on any error (graceful degradation)
        await loadBookmarks()
        return
      }

      if (data && data.length > 0) {
        // Convert Supabase data to local format
        const supabaseBookmarks: StudyBookmark[] = data.map((item: any) => ({
          id: item.id,
          studyId: item.study_id,
          lessonId: item.lesson_id || undefined,
          userId: item.user_id,
          title: item.title,
          description: item.description || undefined,
          tags: item.tags || [],
          categoryId: item.category_id || undefined,
          createdAt: new Date(item.created_at),
          updatedAt: new Date(item.updated_at)
        }))

        // Merge with local bookmarks (local takes precedence for conflicts)
        const localBookmarks = loadBookmarksFromLocalStorage()
        
        // Create a map of local bookmarks by key (userId, studyId, lessonId)
        const localMap = new Map<string, StudyBookmark>()
        localBookmarks.forEach(bookmark => {
          const key = `${bookmark.userId}_${bookmark.studyId}_${bookmark.lessonId || ''}`
          localMap.set(key, bookmark)
        })

        // Merge: use local if exists and is newer, otherwise use Supabase
        const merged: StudyBookmark[] = []
        const seen = new Set<string>()
        
        // Add all local bookmarks first (they take precedence)
        localBookmarks.forEach(bookmark => {
          const key = `${bookmark.userId}_${bookmark.studyId}_${bookmark.lessonId || ''}`
          merged.push(bookmark)
          seen.add(key)
        })

        // Add Supabase bookmarks that don't exist locally
        supabaseBookmarks.forEach(bookmark => {
          const key = `${bookmark.userId}_${bookmark.studyId}_${bookmark.lessonId || ''}`
          if (!seen.has(key)) {
            merged.push(bookmark)
            seen.add(key)
          }
        })

        bookmarks.value = merged
        // Save merged bookmarks to localStorage
        await saveBookmarks()
        console.log('Bookmarks loaded and merged from Supabase:', merged.length)
      } else {
        // No bookmarks in Supabase, load from local storage or initialize
        await loadBookmarks()
      }
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'load bookmarks')
      console.error('Failed to load bookmarks from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
      // Fall back to local storage on any error (graceful degradation)
      await loadBookmarks()
    }
  }

  const loadBookmarksFromLocalStorage = (): StudyBookmark[] => {
    try {
      const stored = localStorage.getItem('biblestem_bookmarks')
      if (stored) {
        return JSON.parse(stored).map((bookmark: StudyBookmark) => ({
          ...bookmark,
          createdAt: new Date(bookmark.createdAt),
          updatedAt: new Date(bookmark.updatedAt)
        }))
      }
    } catch (err) {
      console.error('Failed to load bookmarks from localStorage:', err)
    }
    return []
  }

  // Initialize
  const initialize = async (): Promise<void> => {
    await loadCategories()
    await loadBookmarksFromSupabase()
  }
  
  return {
    // State
    categories,
    bookmarks,
    tags,
    isLoading,
    error,
    
    // Computed
    userBookmarks,
    bookmarksByCategory,
    allTags,
    
    // Methods
    createCategory,
    updateCategory,
    deleteCategory,
    addBookmark,
    updateBookmark,
    removeBookmark,
    isBookmarked,
    getBookmark,
    toggleBookmark,
    searchBookmarks,
    filterBookmarksByCategory,
    filterBookmarksByTag,
    getTagColor,
    
    // Initialization
    initialize
  }
}
