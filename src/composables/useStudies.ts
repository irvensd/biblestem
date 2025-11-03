import { ref, computed } from 'vue'
import { getSupabase } from '../lib/supabase'
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
  { id: 'biblical-narrative', title: 'Biblical Narrative', order: 2 },
  { id: 'spiritual-growth', title: 'Spiritual Growth', order: 3 },
  { id: 'advanced', title: 'Advanced Studies', order: 4 },
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

export function useStudies() {
  const fetchStudies = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const supabase = getSupabase()
      
      if (!supabase) {
        // Fallback to local data if Supabase not available
        const { getAllStudies } = await import('../data/studies')
        const allStudies = getAllStudies()
        
        // Group studies by category
        const grouped = new Map<string, StudyWithCount[]>()
        
        CATEGORIES.forEach(cat => {
          grouped.set(cat.id, [])
        })
        
        allStudies.forEach(study => {
          const categoryId = mapStudyToCategory(study)
          const existing = grouped.get(categoryId) || []
          existing.push({
            ...study,
            lessons_count: study.lessons.length,
            level: study.difficulty,
          })
          grouped.set(categoryId, existing)
        })
        
        categoriesWithStudies.value = CATEGORIES.map(cat => ({
          ...cat,
          studies: grouped.get(cat.id) || [],
        })).filter(cat => cat.studies.length > 0) // Only show categories with studies
        
        isLoading.value = false
        return
      }
      
      // Fetch from Supabase
      const { data: studiesData, error: studiesError } = await supabase
        .from('studies')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (studiesError) throw studiesError
      
      // Fetch lessons count for each study
      const studiesWithCounts: StudyWithCount[] = await Promise.all(
        (studiesData || []).map(async (study: any) => {
          const { count, error: countError } = await supabase
            .from('lessons')
            .select('*', { count: 'exact', head: true })
            .eq('study_id', study.id)
          
          if (countError) {
            console.error('Error counting lessons:', countError)
          }
          
          return {
            id: study.id,
            title: study.title,
            description: study.description,
            category: study.category,
            totalDuration: study.total_duration,
            difficulty: study.difficulty,
            tags: study.tags || [],
            image: study.image || '',
            color: study.color || '',
            features: study.features || [],
            lessons: [], // We don't need full lesson data here
            lessons_count: count || 0,
            thumbnail_url: study.image || '',
            level: study.difficulty,
          }
        })
      )
      
      // Group studies by category
      const grouped = new Map<string, StudyWithCount[]>()
      
      CATEGORIES.forEach(cat => {
        grouped.set(cat.id, [])
      })
      
      studiesWithCounts.forEach(study => {
        const categoryId = mapStudyToCategory(study as Study)
        const existing = grouped.get(categoryId) || []
        existing.push(study)
        grouped.set(categoryId, existing)
      })
      
      categoriesWithStudies.value = CATEGORIES.map(cat => ({
        ...cat,
        studies: grouped.get(cat.id) || [],
      })).filter(cat => cat.studies.length > 0) // Only show categories with studies
      
    } catch (err) {
      console.error('Error fetching studies:', err)
      error.value = err instanceof Error ? err.message : 'Failed to load studies'
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
