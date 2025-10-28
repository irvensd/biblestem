/**
 * Application Configuration
 * Centralized configuration management for the BibleStem app
 */

export const config = {
  // API Configuration
  api: {
    url: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    version: import.meta.env.VITE_API_VERSION || 'v1',
    baseUrl: `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/${import.meta.env.VITE_API_VERSION || 'v1'}`,
  },

  // Supabase Configuration
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
    isConfigured: !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY),
  },

  // Sanity Configuration
  sanity: {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
    isConfigured: !!import.meta.env.VITE_SANITY_PROJECT_ID,
  },

  // Environment
  environment: import.meta.env.VITE_ENVIRONMENT || 'development',
  isDevelopment: import.meta.env.VITE_ENVIRONMENT === 'development',
  isProduction: import.meta.env.VITE_ENVIRONMENT === 'production',
  isMockMode: import.meta.env.VITE_IS_MOCK_MODE === 'true',

  // Feature Flags
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    offlineMode: import.meta.env.VITE_ENABLE_OFFLINE_MODE === 'true',
    pwa: import.meta.env.VITE_ENABLE_PWA === 'true',
  },

  // External Services
  services: {
    algolia: {
      appId: import.meta.env.VITE_ALGOLIA_APP_ID || '',
      apiKey: import.meta.env.VITE_ALGOLIA_API_KEY || '',
      indexName: import.meta.env.VITE_ALGOLIA_INDEX_NAME || 'biblestem_studies',
      isConfigured: !!(import.meta.env.VITE_ALGOLIA_APP_ID && import.meta.env.VITE_ALGOLIA_API_KEY),
    },
    stripe: {
      publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
      isConfigured: !!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
    },
    email: {
      url: import.meta.env.VITE_EMAIL_SERVICE_URL || '',
      isConfigured: !!import.meta.env.VITE_EMAIL_SERVICE_URL,
    },
    sentry: {
      dsn: import.meta.env.VITE_SENTRY_DSN || '',
      environment: import.meta.env.VITE_SENTRY_ENVIRONMENT || 'development',
      isConfigured: !!import.meta.env.VITE_SENTRY_DSN,
    },
  },
}

// Validation
export const validateConfig = () => {
  const warnings: string[] = []

  if (config.isProduction && config.isMockMode) {
    warnings.push('Mock mode is enabled in production. Consider disabling it.')
  }

  if (config.isProduction && !config.supabase.isConfigured) {
    warnings.push('Supabase is not configured. Backend features will not work.')
  }

  if (config.features.analytics && !config.services.sentry.isConfigured) {
    warnings.push('Analytics enabled but Sentry is not configured.')
  }

  if (warnings.length > 0) {
    console.warn('Configuration Warnings:', warnings)
  }

  return warnings.length === 0
}

// Helper functions
export const isBackendReady = () => config.supabase.isConfigured
export const isContentReady = () => config.sanity.isConfigured
export const isReadyForProduction = () =>
  !config.isMockMode && (config.supabase.isConfigured || config.sanity.isConfigured)

