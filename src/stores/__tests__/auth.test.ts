import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../auth'

// Mock dependencies
vi.mock('../../lib/supabase', () => ({
  getSupabase: vi.fn(),
  isSupabaseAvailable: vi.fn(),
  handleSupabaseError: vi.fn((error) => ({
    userFriendlyMessage: error.message,
    code: error.code,
  })),
  requiresReAuth: vi.fn(() => false),
}))

vi.mock('../../services/securityService', () => ({
  securityService: {
    checkAuthRateLimit: vi.fn(),
  },
}))

vi.mock('../../utils/logger', () => ({
  logger: {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}))

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  describe('initialization', () => {
    it('should initialize with no user', () => {
      const store = useAuthStore()
      expect(store.user).toBeNull()
      expect(store.isAuthenticated).toBe(false)
      expect(store.isLoading).toBe(false)
    })

    it('should have isAuthenticated computed property', () => {
      const store = useAuthStore()
      expect(store.isAuthenticated).toBe(false)
      
      store.user = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        studiesCompleted: 0,
        joinDate: new Date().toISOString(),
      }
      
      expect(store.isAuthenticated).toBe(true)
    })
  })

  describe('signUp', () => {
    it('should sanitize email and name inputs', async () => {
      const { getSupabase, isSupabaseAvailable } = await import('../../lib/supabase')
      const { securityService } = await import('../../services/securityService')

      const mockSupabase = {
        auth: {
          signUp: vi.fn().mockResolvedValue({
            data: { user: { id: '1', email: 'test@example.com' } },
            error: null,
          }),
        },
        from: vi.fn(() => ({
          insert: vi.fn().mockResolvedValue({ error: null }),
        })),
      }

      vi.mocked(getSupabase).mockReturnValue(mockSupabase as any)
      vi.mocked(isSupabaseAvailable).mockReturnValue(true)
      vi.mocked(securityService.checkAuthRateLimit).mockResolvedValue(undefined)

      const store = useAuthStore()
      const result = await store.signUp(
        '  TEST@EXAMPLE.COM  ',
        'password123',
        '  John Doe  '
      )

      expect(mockSupabase.auth.signUp).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'test@example.com',
          options: expect.objectContaining({
            data: expect.objectContaining({
              name: 'John Doe',
            }),
          }),
        })
      )
    })

    it('should reject invalid email', async () => {
      const { isSupabaseAvailable } = await import('../../lib/supabase')
      const { securityService } = await import('../../services/securityService')

      vi.mocked(isSupabaseAvailable).mockReturnValue(true)
      vi.mocked(securityService.checkAuthRateLimit).mockResolvedValue(undefined)

      const store = useAuthStore()
      const result = await store.signUp('invalid-email', 'password123', 'John Doe')

      expect(result.success).toBe(false)
      expect(result.error).toContain('Invalid email')
    })

    it('should handle rate limiting', async () => {
      const { isSupabaseAvailable } = await import('../../lib/supabase')
      const { securityService } = await import('../../services/securityService')

      vi.mocked(isSupabaseAvailable).mockReturnValue(true)
      vi.mocked(securityService.checkAuthRateLimit).mockRejectedValue(
        new Error('Rate limit exceeded')
      )

      const store = useAuthStore()
      const result = await store.signUp('test@example.com', 'password123', 'John Doe')

      expect(result.success).toBe(false)
      expect(result.error).toContain('Too many signup attempts')
    })

    it('should handle Supabase errors', async () => {
      const { getSupabase, isSupabaseAvailable } = await import('../../lib/supabase')
      const { securityService } = await import('../../services/securityService')

      const mockSupabase = {
        auth: {
          signUp: vi.fn().mockResolvedValue({
            data: { user: null },
            error: { message: 'Email already registered', code: '23505' },
          }),
        },
      }

      vi.mocked(getSupabase).mockReturnValue(mockSupabase as any)
      vi.mocked(isSupabaseAvailable).mockReturnValue(true)
      vi.mocked(securityService.checkAuthRateLimit).mockResolvedValue(undefined)

      const store = useAuthStore()
      const result = await store.signUp('test@example.com', 'password123', 'John Doe')

      expect(result.success).toBe(false)
      expect(result.error).toBeTruthy()
    })
  })

  describe('login', () => {
    it('should call Supabase with email and password', async () => {
      const { getSupabase, isSupabaseAvailable } = await import('../../lib/supabase')
      const { securityService } = await import('../../services/securityService')

      const mockUser = {
        id: '1',
        email: 'test@example.com',
        user_metadata: { name: 'John Doe' },
      }

      const mockSupabase = {
        auth: {
          signInWithPassword: vi.fn().mockResolvedValue({
            data: { user: mockUser, session: { access_token: 'token' } },
            error: null,
          }),
          getSession: vi.fn().mockResolvedValue({
            data: { session: { access_token: 'token' } },
            error: null,
          }),
        },
        from: vi.fn(() => ({
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          single: vi.fn().mockResolvedValue({
            data: {
              id: '1',
              name: 'John Doe',
              email: 'test@example.com',
              studies_completed: 0,
              created_at: new Date().toISOString(),
            },
            error: null,
          }),
        })),
      }

      vi.mocked(getSupabase).mockReturnValue(mockSupabase as any)
      vi.mocked(isSupabaseAvailable).mockReturnValue(true)
      vi.mocked(securityService.checkAuthRateLimit).mockResolvedValue(undefined)

      const store = useAuthStore()
      const result = await store.login('test@example.com', 'password123')

      expect(mockSupabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      })
      expect(result.success).toBe(true)
    })

    it('should reject invalid credentials', async () => {
      const { getSupabase, isSupabaseAvailable } = await import('../../lib/supabase')
      const { securityService } = await import('../../services/securityService')

      const mockSupabase = {
        auth: {
          signInWithPassword: vi.fn().mockResolvedValue({
            data: { user: null, session: null },
            error: { message: 'Invalid credentials', code: 'invalid_credentials' },
          }),
        },
      }

      vi.mocked(getSupabase).mockReturnValue(mockSupabase as any)
      vi.mocked(isSupabaseAvailable).mockReturnValue(true)
      vi.mocked(securityService.checkAuthRateLimit).mockResolvedValue(undefined)

      const store = useAuthStore()
      const result = await store.login('test@example.com', 'wrongpassword')

      expect(result.success).toBe(false)
      expect(result.error).toBeTruthy()
    })
  })

  describe('logout', () => {
    it('should clear user and call Supabase signOut', async () => {
      const { getSupabase, isSupabaseAvailable } = await import('../../lib/supabase')

      const mockSupabase = {
        auth: {
          signOut: vi.fn().mockResolvedValue({ error: null }),
        },
      }

      vi.mocked(getSupabase).mockReturnValue(mockSupabase as any)
      vi.mocked(isSupabaseAvailable).mockReturnValue(true)

      const store = useAuthStore()
      store.user = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        studiesCompleted: 0,
        joinDate: new Date().toISOString(),
      }

      await store.logout()

      expect(mockSupabase.auth.signOut).toHaveBeenCalled()
      expect(store.user).toBeNull()
      expect(store.isAuthenticated).toBe(false)
    })
  })

  describe('clearError', () => {
    it('should clear error state', () => {
      const store = useAuthStore()
      store.setError('Test error', 'TEST_CODE')
      expect(store.error).toBeTruthy()

      store.clearError()
      expect(store.error).toBeNull()
    })
  })
})

