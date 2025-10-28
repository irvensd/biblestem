/**
 * Supabase Database Types
 * TypeScript definitions for Supabase database schema
 */

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          avatar?: string
          bio?: string
          plan: 'free' | 'premium'
          email_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          avatar?: string
          bio?: string
          plan?: 'free' | 'premium'
          email_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          email?: string
          name?: string
          avatar?: string
          bio?: string
          plan?: 'free' | 'premium'
          email_verified?: boolean
          updated_at?: string
        }
      }
      studies: {
        Row: {
          id: string
          title: string
          description: string
          category: 'free' | 'premium'
          total_duration: number
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          tags: string[]
          image: string
          color: string
          features: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: 'free' | 'premium'
          total_duration: number
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          tags: string[]
          image: string
          color: string
          features: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          description?: string
          category?: 'free' | 'premium'
          total_duration?: number
          difficulty?: 'beginner' | 'intermediate' | 'advanced'
          tags?: string[]
          image?: string
          color?: string
          features?: string[]
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          study_id: string
          title: string
          duration: number
          scripture: string
          description: string
          lesson_order: number
          content: any // JSON content
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          study_id: string
          title: string
          duration: number
          scripture: string
          description: string
          lesson_order: number
          content: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          duration?: number
          scripture?: string
          description?: string
          lesson_order?: number
          content?: any
          updated_at?: string
        }
      }
      study_progress: {
        Row: {
          id: string
          user_id: string
          study_id: string
          completed_lessons: string[]
          current_lesson: string
          total_time_spent: number
          accepted_challenges: string[]
          started_at: string
          last_accessed_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          study_id: string
          completed_lessons?: string[]
          current_lesson?: string
          total_time_spent?: number
          accepted_challenges?: string[]
          started_at?: string
          last_accessed_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          completed_lessons?: string[]
          current_lesson?: string
          total_time_spent?: number
          accepted_challenges?: string[]
          last_accessed_at?: string
          updated_at?: string
        }
      }
      notes: {
        Row: {
          id: string
          user_id: string
          study_id: string
          lesson_id: string
          content: string
          scripture?: string
          tags: string[]
          type: 'general' | 'reflection' | 'question' | 'insight' | 'prayer'
          is_private: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          study_id: string
          lesson_id: string
          content: string
          scripture?: string
          tags?: string[]
          type?: 'general' | 'reflection' | 'question' | 'insight' | 'prayer'
          is_private?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          content?: string
          scripture?: string
          tags?: string[]
          type?: 'general' | 'reflection' | 'question' | 'insight' | 'prayer'
          is_private?: boolean
          updated_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}

