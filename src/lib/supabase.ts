import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database Types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string
          email: string
          avatar_url?: string
          bio?: string
          plan: 'free' | 'premium'
          studies_completed: number
          join_date: string
          created_at: string
          updated_at: string
          email_verified: boolean
          subscription_id?: string
          trial_ends_at?: string
        }
        Insert: {
          id: string
          name: string
          email: string
          avatar_url?: string
          bio?: string
          plan?: 'free' | 'premium'
          studies_completed?: number
          join_date?: string
          created_at?: string
          updated_at?: string
          email_verified?: boolean
          subscription_id?: string
          trial_ends_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          avatar_url?: string
          bio?: string
          plan?: 'free' | 'premium'
          studies_completed?: number
          join_date?: string
          created_at?: string
          updated_at?: string
          email_verified?: boolean
          subscription_id?: string
          trial_ends_at?: string
        }
      }
      study_progress: {
        Row: {
          id: string
          user_id: string
          study_id: string
          completed_lessons: string[]
          current_lesson?: string
          started_at: string
          last_accessed_at: string
          total_time_spent: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          study_id: string
          completed_lessons?: string[]
          current_lesson?: string
          started_at?: string
          last_accessed_at?: string
          total_time_spent?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          study_id?: string
          completed_lessons?: string[]
          current_lesson?: string
          started_at?: string
          last_accessed_at?: string
          total_time_spent?: number
          created_at?: string
          updated_at?: string
        }
      }
      user_notes: {
        Row: {
          id: string
          user_id: string
          study_id: string
          lesson_id?: string
          content: string
          tags?: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          study_id: string
          lesson_id?: string
          content: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          study_id?: string
          lesson_id?: string
          content?: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      achievements: {
        Row: {
          id: string
          user_id: string
          achievement_type: string
          achievement_id: string
          earned_at: string
          metadata?: Record<string, any>
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          achievement_type: string
          achievement_id: string
          earned_at?: string
          metadata?: Record<string, any>
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          achievement_type?: string
          achievement_id?: string
          earned_at?: string
          metadata?: Record<string, any>
          created_at?: string
        }
      }
      memory_card_progress: {
        Row: {
          id: string
          user_id: string
          deck_id: string
          card_id: string
          difficulty_level: number
          last_reviewed: string
          next_review: string
          review_count: number
          success_rate: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          deck_id: string
          card_id: string
          difficulty_level?: number
          last_reviewed?: string
          next_review?: string
          review_count?: number
          success_rate?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          deck_id?: string
          card_id?: string
          difficulty_level?: number
          last_reviewed?: string
          next_review?: string
          review_count?: number
          success_rate?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
