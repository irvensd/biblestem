# Architecture Improvements

This document outlines the code quality and architecture improvements implemented to address technical debt and improve maintainability.

## ✅ Completed Improvements

### 1. Route Constants (`src/constants/routes.ts`)
**Problem**: Magic strings for route names scattered across components
**Solution**: Centralized route constants with type-safe helpers

**Before**:
```typescript
router.push('/dashboard')
router.push('/study-series')
router.push(`/study-series/${id}`)
```

**After**:
```typescript
import { ROUTES } from '@/constants/routes'

router.push(ROUTES.DASHBOARD)
router.push(ROUTES.STUDY_SERIES)
router.push(ROUTES.STUDY_DETAIL(id))
```

### 2. Supabase Singleton Service (`src/services/supabaseService.ts`)
**Problem**: `getSupabase()` called repeatedly throughout the codebase
**Solution**: Singleton service that provides centralized access

**Before**:
```typescript
const supabase = getSupabase()
if (supabase) {
  const { data, error } = await supabase.from('studies').select('*')
}
```

**After**:
```typescript
import { supabaseService } from '@/services/supabaseService'

const result = await supabaseService.executeQuery(
  (client) => client.from('studies').select('*'),
  'Load studies'
)
```

### 3. Centralized Error Handling (`src/utils/errorHandler.ts`)
**Problem**: Inconsistent error handling patterns across stores
**Solution**: Standardized error handling utility with consistent error types

**Before**:
```typescript
try {
  // operation
} catch (error) {
  console.error(error)
  // inconsistent error handling
}
```

**After**:
```typescript
import { handleError, withErrorHandling } from '@/utils/errorHandler'

const { data, error } = await withErrorHandling(
  async () => {
    // operation
  },
  { context: 'Load data', log: true }
)
```

### 4. API Service Layer (`src/services/apiService.ts`)
**Problem**: Direct Supabase calls everywhere
**Solution**: Clean abstraction layer with specialized services

**Before**:
```typescript
const supabase = getSupabase()
if (supabase) {
  const { data, error } = await supabase
    .from('studies')
    .select('*')
    .eq('id', studyId)
    .single()
}
```

**After**:
```typescript
import { studiesApi } from '@/services/apiService'

const { data, error } = await studiesApi.getStudy(studyId)
```

### 5. Unified Loading Composable (`src/composables/useUnifiedLoading.ts`)
**Problem**: Duplicate loading logic - `isLoading` refs scattered across components
**Solution**: Unified composable that combines best features

**Before**:
```typescript
const isLoading = ref(false)
try {
  isLoading.value = true
  // operation
} finally {
  isLoading.value = false
}
```

**After**:
```typescript
import { useUnifiedLoading } from '@/composables/useUnifiedLoading'

const { isLoading, execute } = useUnifiedLoading('ComponentName')

const result = await execute(
  async () => {
    // operation
  },
  { key: 'load-data', minLoadingTime: 300 }
)
```

### 6. Type Safety Improvements
**Problem**: `any` types used in several places
**Solution**: Replaced all `any` types with proper TypeScript types

**Changes**:
- `error: any` → `error: unknown`
- Proper type guards for error extraction
- Type-safe error handling throughout

## 📝 Migration Guide

### Migrating Components to Use New Services

#### Step 1: Replace Route Strings
```typescript
// Old
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('/dashboard')

// New
import { ROUTES } from '@/constants/routes'
router.push(ROUTES.DASHBOARD)
```

#### Step 2: Replace Direct Supabase Calls
```typescript
// Old
import { getSupabase } from '@/lib/supabase'
const supabase = getSupabase()
if (supabase) {
  const { data, error } = await supabase.from('studies').select('*')
}

// New
import { studiesApi } from '@/services/apiService'
const { data, error } = await studiesApi.getAllStudies()
```

#### Step 3: Use Unified Loading
```typescript
// Old
const isLoading = ref(false)
try {
  isLoading.value = true
  // operation
} finally {
  isLoading.value = false
}

// New
import { useUnifiedLoading } from '@/composables/useUnifiedLoading'
const { isLoading, execute } = useUnifiedLoading('MyComponent')
await execute(async () => {
  // operation
})
```

#### Step 4: Use Centralized Error Handling
```typescript
// Old
try {
  // operation
} catch (error) {
  console.error(error)
  // handle error
}

// New
import { withErrorHandling } from '@/utils/errorHandler'
const { data, error } = await withErrorHandling(
  async () => {
    // operation
  },
  { context: 'Operation name', log: true }
)
```

## 🎯 Benefits

1. **Maintainability**: Centralized logic is easier to maintain and update
2. **Type Safety**: Better TypeScript support catches errors at compile time
3. **Consistency**: Uniform patterns across the codebase
4. **Testability**: Services are easier to mock and test
5. **Performance**: Singleton pattern reduces redundant client initialization
6. **Developer Experience**: Clear APIs and better error messages

## 📚 Next Steps

- [ ] Migrate existing components to use new services
- [ ] Add comprehensive JSDoc comments to all public APIs
- [ ] Create unit tests for new services
- [ ] Update documentation with usage examples

