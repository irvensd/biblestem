# Testing Documentation

## Overview

BibleStem now has comprehensive test coverage for critical paths. The test suite uses **Vitest** with **Vue Test Utils** for component testing.

## Test Structure

```
src/
├── utils/__tests__/          # Utility function tests
│   ├── validation.test.ts   # Form validation tests
│   └── sanitization.test.ts  # Input sanitization tests
├── stores/__tests__/          # Pinia store tests
│   └── auth.test.ts         # Authentication store tests
├── router/__tests__/         # Router tests
│   └── router.test.ts        # Route guards and navigation tests
├── components/__tests__/    # Component tests
│   └── FormField.test.ts    # FormField component tests
└── test/
    └── setup.ts              # Test setup and mocks
```

## Running Tests

### Run tests in watch mode (development)
```bash
npm run test:unit
```

### Run tests once (CI/CD)
```bash
npm run test:unit:run
```

### Run tests with coverage
```bash
npm run test:coverage
```

## Test Coverage

### ✅ Completed Tests

#### 1. **Utility Tests** (55 tests)
- **Validation** (`src/utils/__tests__/validation.test.ts`): 25 tests
  - Email validation
  - Password validation and strength
  - Name validation
  - Required field validation
  - Password matching validation

- **Sanitization** (`src/utils/__tests__/sanitization.test.ts`): 30 tests
  - Plain text sanitization
  - HTML sanitization
  - Email sanitization
  - URL sanitization
  - SQL injection prevention
  - File name sanitization
  - XSS detection

#### 2. **Store Tests** (10 tests)
- **Auth Store** (`src/stores/__tests__/auth.test.ts`): 10 tests
  - Store initialization
  - User signup with input sanitization
  - User login
  - User logout
  - Error handling
  - Rate limiting

#### 3. **Router Tests** (7 tests)
- **Router** (`src/router/__tests__/router.test.ts`): 7 tests
  - Public route access
  - Protected route guards
  - Authentication redirects
  - Scroll behavior

#### 4. **Component Tests** (7 tests)
- **FormField** (`src/components/__tests__/FormField.test.ts`): 7 tests
  - Label rendering
  - Error message display
  - Helper text
  - Success messages
  - Required indicators
  - Slot content rendering

### 📊 Current Status

- **Total Tests**: 79 tests
- **Passing**: 79 ✅
- **Failing**: 0
- **Coverage**: ~30% (critical paths covered)

## Test Patterns

### Mocking Supabase

```typescript
vi.mock('../../lib/supabase', () => ({
  getSupabase: vi.fn(),
  isSupabaseAvailable: vi.fn(),
  handleSupabaseError: vi.fn(),
}))
```

### Mocking Services

```typescript
vi.mock('../../services/securityService', () => ({
  securityService: {
    checkAuthRateLimit: vi.fn(),
  },
}))
```

### Testing Pinia Stores

```typescript
import { setActivePinia, createPinia } from 'pinia'

beforeEach(() => {
  setActivePinia(createPinia())
})
```

### Testing Vue Components

```typescript
import { mount } from '@vue/test-utils'

const wrapper = mount(Component, {
  props: { /* props */ },
  slots: { /* slots */ },
})
```

## Next Steps

### High Priority
1. **Study Progress Store Tests** - Test progress tracking functionality
2. **Notes Store Tests** - Test note creation and management
3. **More Component Tests** - Test critical UI components

### Medium Priority
1. **Integration Tests** - Test full user flows
2. **E2E Tests** - Test complete user journeys
3. **Performance Tests** - Test component rendering performance

### Coverage Goals
- **Current**: ~30% (critical paths)
- **Target**: 60-70% (production ready)
- **Ideal**: 80%+ (comprehensive)

## Writing New Tests

### Test File Naming
- Unit tests: `*.test.ts` or `*.spec.ts`
- Component tests: `ComponentName.test.ts`
- Store tests: `storeName.test.ts`

### Test Structure
```typescript
import { describe, it, expect, beforeEach } from 'vitest'

describe('Feature Name', () => {
  beforeEach(() => {
    // Setup
  })

  it('should do something', () => {
    // Arrange
    // Act
    // Assert
  })
})
```

### Best Practices
1. **Arrange-Act-Assert** pattern
2. **One assertion per test** (when possible)
3. **Descriptive test names** (should...)
4. **Mock external dependencies**
5. **Clean up after tests**

## CI/CD Integration

Tests run automatically on:
- Pre-commit hooks (recommended)
- Pull requests
- Before deployment

## Troubleshooting

### Tests failing with "Cannot find module"
- Ensure all dependencies are installed: `npm install`
- Check import paths are correct

### Mock not working
- Ensure mocks are defined before imports
- Use `vi.mock()` at the top level

### Component not rendering
- Check Vue Test Utils setup
- Ensure all required props are provided
- Check for required slots

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Testing Vue 3 Components](https://vuejs.org/guide/scaling-up/testing.html)

