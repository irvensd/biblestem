/**
 * Composable for accessing user settings across the app
 */

import { ref, readonly } from 'vue'

export interface AppSettings {
  fontSize: number
  showOriginalLanguages: boolean
  autoSaveNotes: boolean
}

const DEFAULT_SETTINGS: AppSettings = {
  fontSize: 16,
  showOriginalLanguages: false,
  autoSaveNotes: true,
}

// Reactive settings state
const settings = ref<AppSettings>({ ...DEFAULT_SETTINGS })

/**
 * Load settings from localStorage
 */
export function useSettings() {
  const loadSettings = (): AppSettings => {
    try {
      const saved = localStorage.getItem('biblestem_settings')
      if (saved) {
        const parsed = JSON.parse(saved)
        return {
          ...DEFAULT_SETTINGS,
          ...parsed,
        }
      }
    } catch (error) {
      console.error('Error loading settings:', error)
    }
    return { ...DEFAULT_SETTINGS }
  }

  const saveSettings = (newSettings: Partial<AppSettings>): void => {
    try {
      settings.value = {
        ...settings.value,
        ...newSettings,
      }
      localStorage.setItem('biblestem_settings', JSON.stringify(settings.value))
    } catch (error) {
      console.error('Error saving settings:', error)
    }
  }

  const updateSetting = <K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K]
  ): void => {
    saveSettings({ [key]: value })
  }

  const resetSettings = (): void => {
    settings.value = { ...DEFAULT_SETTINGS }
    try {
      localStorage.setItem('biblestem_settings', JSON.stringify(settings.value))
    } catch (error) {
      console.error('Error resetting settings:', error)
    }
  }

  // Load settings on first use
  if (JSON.stringify(settings.value) === JSON.stringify(DEFAULT_SETTINGS)) {
    settings.value = loadSettings()
  }

  return {
    settings: readonly(settings),
    loadSettings,
    saveSettings,
    updateSetting,
    resetSettings,
  }
}

