/// <reference types="vite/client" />

interface ImportMetaEnv {
  // API Configuration
  readonly VITE_API_URL: string
  readonly VITE_API_VERSION: string

  // Supabase Configuration
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string

  // Sanity Configuration
  readonly VITE_SANITY_PROJECT_ID: string
  readonly VITE_SANITY_DATASET: string
  readonly VITE_SANITY_API_VERSION: string

  // Environment
  readonly VITE_ENVIRONMENT: 'development' | 'production'
  readonly VITE_IS_MOCK_MODE: string

  // Feature Flags
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_ENABLE_OFFLINE_MODE: string
  readonly VITE_ENABLE_PWA: string

  // External Services
  readonly VITE_ALGOLIA_APP_ID: string
  readonly VITE_ALGOLIA_API_KEY: string
  readonly VITE_ALGOLIA_INDEX_NAME: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_EMAIL_SERVICE_URL: string
  readonly VITE_SENTRY_DSN: string
  readonly VITE_SENTRY_ENVIRONMENT: string
  readonly VITE_SENTRY_DEBUG: string
  readonly VITE_GA_MEASUREMENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
