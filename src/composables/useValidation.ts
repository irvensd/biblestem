import { ref, computed, Ref } from 'vue'

export interface ValidationRule {
  test: (value: any) => boolean
  message: string
}

export interface FieldValidation {
  value: Ref<any>
  rules: ValidationRule[]
  error: Ref<string>
  isValid: Ref<boolean>
  validate: () => boolean
  clear: () => void
}

export interface FormValidation {
  fields: Record<string, FieldValidation>
  isValid: Ref<boolean>
  errors: Ref<Record<string, string>>
  validate: () => boolean
  validateField: (fieldName: string) => boolean
  clear: () => void
  clearField: (fieldName: string) => void
}

// Predefined validation rules
export const validationRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    test: (value) => {
      if (typeof value === 'string') return value.trim().length > 0
      return value !== null && value !== undefined && value !== ''
    },
    message
  }),

  email: (message = 'Please enter a valid email address'): ValidationRule => ({
    test: (value) => {
      if (!value) return true // Allow empty (use required rule separately)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    },
    message
  }),

  minLength: (min: number, message?: string): ValidationRule => ({
    test: (value) => {
      if (!value) return true
      return value.length >= min
    },
    message: message || `Must be at least ${min} characters`
  }),

  maxLength: (max: number, message?: string): ValidationRule => ({
    test: (value) => {
      if (!value) return true
      return value.length <= max
    },
    message: message || `Must be no more than ${max} characters`
  }),

  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number'): ValidationRule => ({
    test: (value) => {
      if (!value) return true
      return value.length >= 8 && 
             /[a-z]/.test(value) && 
             /[A-Z]/.test(value) && 
             /\d/.test(value)
    },
    message
  }),

  confirmPassword: (passwordRef: Ref<string>, message = 'Passwords do not match'): ValidationRule => ({
    test: (value) => {
      if (!value || !passwordRef.value) return true
      return value === passwordRef.value
    },
    message
  }),

  pattern: (regex: RegExp, message: string): ValidationRule => ({
    test: (value) => {
      if (!value) return true
      return regex.test(value)
    },
    message
  }),

  custom: (testFn: (value: any) => boolean, message: string): ValidationRule => ({
    test: testFn,
    message
  })
}

export function useFieldValidation(initialValue: any = '', rules: ValidationRule[] = []): FieldValidation {
  const value = ref(initialValue)
  const error = ref('')
  
  const isValid = computed(() => !error.value)
  
  const validate = (): boolean => {
    error.value = ''
    
    for (const rule of rules) {
      if (!rule.test(value.value)) {
        error.value = rule.message
        return false
      }
    }
    
    return true
  }
  
  const clear = () => {
    error.value = ''
  }
  
  return {
    value,
    rules,
    error,
    isValid,
    validate,
    clear
  }
}

export function useFormValidation(fields: Record<string, ValidationRule[]>): FormValidation {
  const fieldValidations: Record<string, FieldValidation> = {}
  
  // Create field validations
  for (const [fieldName, rules] of Object.entries(fields)) {
    fieldValidations[fieldName] = useFieldValidation('', rules)
  }
  
  const isValid = computed(() => {
    return Object.values(fieldValidations).every(field => field.isValid.value)
  })
  
  const errors = computed(() => {
    const errorMap: Record<string, string> = {}
    for (const [fieldName, field] of Object.entries(fieldValidations)) {
      if (field.error.value) {
        errorMap[fieldName] = field.error.value
      }
    }
    return errorMap
  })
  
  const validate = (): boolean => {
    let allValid = true
    
    for (const field of Object.values(fieldValidations)) {
      const fieldValid = field.validate()
      if (!fieldValid) {
        allValid = false
      }
    }
    
    return allValid
  }
  
  const validateField = (fieldName: string): boolean => {
    const field = fieldValidations[fieldName]
    if (field) {
      return field.validate()
    }
    return true
  }
  
  const clear = () => {
    for (const field of Object.values(fieldValidations)) {
      field.clear()
    }
  }
  
  const clearField = (fieldName: string) => {
    const field = fieldValidations[fieldName]
    if (field) {
      field.clear()
    }
  }
  
  return {
    fields: fieldValidations,
    isValid,
    errors,
    validate,
    validateField,
    clear,
    clearField
  }
}

// Utility function for real-time validation
export function useRealtimeValidation(fieldValidation: FieldValidation, delay = 500) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  
  const validateWithDelay = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    
    timeoutId = setTimeout(() => {
      fieldValidation.validate()
    }, delay)
  }
  
  return {
    validateWithDelay
  }
}
