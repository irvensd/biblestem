import { ref, onMounted, onUnmounted } from 'vue'

export function useLazyLoading() {
  const isVisible = ref(false)
  const element = ref<HTMLElement | null>(null)

  const observer = ref<IntersectionObserver | null>(null)

  const observe = (el: HTMLElement) => {
    element.value = el
    if (observer.value) {
      observer.value.observe(el)
    }
  }

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (observer.value) {
              observer.value.unobserve(entry.target)
            }
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    )
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    isVisible,
    observe
  }
}

export function useDynamicImport() {
  const loadComponent = async (componentPath: string) => {
    try {
      const module = await import(/* @vite-ignore */ componentPath)
      return module.default
    } catch (error) {
      console.error('Failed to load component:', error)
      return null
    }
  }

  const loadStudyData = async (studyId: string) => {
    try {
      const module = await import(`../data/studies/${studyId}.ts`)
      return module.default
    } catch (error) {
      console.error('Failed to load study data:', error)
      return null
    }
  }

  return {
    loadComponent,
    loadStudyData
  }
}
