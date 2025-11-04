import { ref, computed } from 'vue'
import { getSupabase, handleSupabaseError } from '../lib/supabase'
import { useStudyCache } from '../composables/useCache'
import type { Study } from '../data/studies'

export interface StudyCategory {
  id: string
  title: string
  order: number
}

export interface StudyWithCount extends Study {
  lessons_count: number
  thumbnail_url?: string
  level?: string
}

export interface CategoryWithStudies extends StudyCategory {
  studies: StudyWithCount[]
}

// Define categories (we'll use logical grouping since we don't have a categories table yet)
const CATEGORIES: StudyCategory[] = [
  { id: 'foundational', title: 'Foundational Studies', order: 1 },
  { id: 'growth', title: 'Growth Studies', order: 2 },
  { id: 'biblical-narrative', title: 'Biblical Narrative', order: 3 },
  { id: 'spiritual-growth', title: 'Spiritual Growth', order: 4 },
  { id: 'advanced', title: 'Advanced Studies', order: 5 },
]

// Map studies to categories based on tags/characteristics
const mapStudyToCategory = (study: Study): string => {
  // Check if it's a supporter study
  if (study.category === 'supporter') {
    return 'advanced'
  }
  
  // Map specific foundational studies
  const foundationalStudyIds = [
    'how-to-study-bible',
    'where-bible-came-from',
    'story-of-the-bible',
    'power-of-the-word',
  ]
  
  if (foundationalStudyIds.includes(study.id)) {
    return 'foundational'
  }
  
  // Map growth studies
  const growthStudyIds = [
    'walking-with-god-daily',
    'victory-over-temptation',
    'faith-that-works',
    'fruit-of-the-spirit',
  ]
  
  if (growthStudyIds.includes(study.id)) {
    return 'growth'
  }
  
  // Categorize based on tags and title for other studies
  const tags = study.tags.map(t => t.toLowerCase())
  const titleLower = study.title.toLowerCase()
  
  // Spiritual growth - transformation, discipleship (check first as it's more specific)
  if (
    tags.includes('spiritual growth') ||
    tags.includes('discipleship') ||
    tags.includes('transformation') ||
    tags.includes('faith') ||
    titleLower.includes('power')
  ) {
    return 'spiritual-growth'
  }
  
  // Biblical narrative - story-based
  if (
    tags.includes('narrative') ||
    tags.includes('story') ||
    tags.includes('creation') ||
    tags.includes('redemption') ||
    tags.includes('restoration')
  ) {
    return 'biblical-narrative'
  }
  
  // Foundational studies - about the Bible itself (canon, inspiration, origin)
  if (
    tags.includes('canon') ||
    tags.includes('inspiration') ||
    tags.includes('foundational') ||
    tags.includes('scripture') ||
    titleLower.includes('bible came from') ||
    titleLower.includes('where bible')
  ) {
    return 'foundational'
  }
  
  // Default to foundational
  return 'foundational'
}

const isLoading = ref(false)
const error = ref<string | null>(null)
const categoriesWithStudies = ref<CategoryWithStudies[]>([])
const studyCache = useStudyCache()

// Helper function to convert Supabase study data to StudyWithCount format
const convertSupabaseStudyToLocal = (supabaseStudy: any, lessonsCount: number = 0): StudyWithCount => {
  return {
    id: supabaseStudy.id,
    title: supabaseStudy.title,
    description: supabaseStudy.description,
    category: supabaseStudy.category,
    totalDuration: supabaseStudy.total_duration,
    difficulty: supabaseStudy.difficulty,
    tags: supabaseStudy.tags || [],
    image: supabaseStudy.image || '',
    color: supabaseStudy.color || '',
    features: supabaseStudy.features || [],
    lessons: [], // Not needed for list view
    lessons_count: lessonsCount,
    thumbnail_url: supabaseStudy.image || '',
    level: supabaseStudy.difficulty,
  }
}

// Helper function to convert local study to StudyWithCount format
const convertLocalStudyToWithCount = (study: Study): StudyWithCount => {
  return {
    ...study,
    lessons_count: study.lessons.length,
    level: study.difficulty,
    thumbnail_url: study.image || '',
  }
}

// Helper function to group studies by category
const groupStudiesByCategory = (studies: StudyWithCount[]): CategoryWithStudies[] => {
  const grouped = new Map<string, StudyWithCount[]>()
  
  // Initialize all categories
  CATEGORIES.forEach(cat => {
    grouped.set(cat.id, [])
  })
  
  // Group studies
  studies.forEach(study => {
    const categoryId = mapStudyToCategory(study as Study)
    const existing = grouped.get(categoryId) || []
    existing.push(study)
    grouped.set(categoryId, existing)
  })
  
  // Convert to array and filter out empty categories
  return CATEGORIES.map(cat => ({
    ...cat,
    studies: grouped.get(cat.id) || [],
  })).filter(cat => cat.studies.length > 0)
}

// Helper function to merge Supabase and local studies
const mergeStudies = (supabaseStudies: StudyWithCount[], localStudies: Study[]): StudyWithCount[] => {
  const merged = new Map<string, StudyWithCount>()
  
  // Add Supabase studies first (they take priority)
  supabaseStudies.forEach(study => {
    merged.set(study.id, study)
  })
  
  // Add local-only studies (not in Supabase)
  localStudies.forEach(study => {
    if (!merged.has(study.id)) {
      merged.set(study.id, convertLocalStudyToWithCount(study))
    }
  })
  
  return Array.from(merged.values())
}

// Helper function to fetch studies from Supabase with lesson counts
const fetchStudiesFromSupabase = async (supabase: any): Promise<StudyWithCount[]> => {
  // Fetch studies
  const { data: studiesData, error: studiesError } = await supabase
    .from('studies')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (studiesError) {
    const errorInfo = handleSupabaseError(studiesError, 'load studies')
    console.error('Failed to load studies from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
    // Don't throw - fall back to local data instead
    return []
  }
  if (!studiesData || studiesData.length === 0) return []
  
  // Fetch lesson counts for all studies using optimized aggregation
  // Get unique study IDs
  const studyIds = studiesData.map((s: any) => s.id)
  
  // Use a more efficient approach: fetch counts directly per study using Supabase's count feature
  // This avoids fetching all lesson rows just to count them
  const lessonCounts = new Map<string, number>()
  
  // For small sets, we can query counts in parallel
  // For larger sets, we could use a database view or function, but this is efficient for typical use
  if (studyIds.length > 0) {
    // Fetch all lessons with just study_id to minimize data transfer
    // Then count client-side (more efficient than N separate count queries)
    const { data: lessonsData, error: lessonsError } = await supabase
      .from('lessons')
      .select('study_id')
      .in('study_id', studyIds)
    
    if (lessonsError) {
      console.warn('Error fetching lessons count:', lessonsError)
    }
    
    // Count lessons per study
    if (lessonsData) {
      lessonsData.forEach((lesson: any) => {
        const count = lessonCounts.get(lesson.study_id) || 0
        lessonCounts.set(lesson.study_id, count + 1)
      })
    }
  }
  
  // Convert to StudyWithCount format
  return studiesData.map((study: any) => 
    convertSupabaseStudyToLocal(study, lessonCounts.get(study.id) || 0)
  )
}

// Helper function to fetch studies from local data only
const fetchStudiesFromLocal = async (): Promise<CategoryWithStudies[]> => {
  const { getAllStudies } = await import('../data/studies')
  const allStudies = getAllStudies()
  
  const studiesWithCount = allStudies.map(convertLocalStudyToWithCount)
  return groupStudiesByCategory(studiesWithCount)
}

export function useStudies() {
  const fetchStudies = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const supabase = getSupabase()
      
      if (!supabase) {
        // Fallback to local data only
        categoriesWithStudies.value = await fetchStudiesFromLocal()
        return
      }
      
      // Check cache first (cache studies list for 5 minutes)
      const cacheKey = 'studies:list'
      const cached = studyCache.getCachedStudy()
      if (cached && Array.isArray(cached)) {
        categoriesWithStudies.value = cached as CategoryWithStudies[]
        isLoading.value = false
        return
      }
      
      // Fetch from Supabase
      const supabaseStudies = await fetchStudiesFromSupabase(supabase)
      
      // Also load local studies for merge
      const { getAllStudies } = await import('../data/studies')
      const localStudies = getAllStudies()
      
      // Merge Supabase and local studies
      const mergedStudies = mergeStudies(supabaseStudies, localStudies)
      
      // Group by category
      const grouped = groupStudiesByCategory(mergedStudies)
      categoriesWithStudies.value = grouped
      
      // Cache the grouped studies list for 5 minutes
      studyCache.cacheStudy(grouped, 5 * 60 * 1000)
      
    } catch (err) {
      console.error('Error fetching studies:', err)
      error.value = err instanceof Error ? err.message : 'Failed to load studies'
      
      // Fallback to local data on error
      try {
        categoriesWithStudies.value = await fetchStudiesFromLocal()
      } catch (fallbackErr) {
        console.error('Fallback to local data also failed:', fallbackErr)
      }
    } finally {
      isLoading.value = false
    }
  }
  
  return {
    categoriesWithStudies: computed(() => categoriesWithStudies.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    fetchStudies,
  }
}
