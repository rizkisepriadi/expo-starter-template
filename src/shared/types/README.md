# Shared Types

## Overview

Type definitions yang digunakan di seluruh aplikasi untuk konsistensi dan type safety.

## Global Types

### Common Utility Types

```typescript
// Utility types untuk common patterns
export type ID = string | number;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Nullable<T> = T | null;

export type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};
```

### Response Types

```typescript
// Standard API response wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    hasMore?: boolean;
  };
}

// Error response
export interface ApiError {
  message: string;
  code?: string | number;
  details?: any;
  timestamp?: string;
}
```

### UI Component Types

```typescript
// Theme types
export type ColorScheme = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  border: string;
  error: string;
  success: string;
}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';
```

### Data Types

```typescript
// User related types
export interface User {
  id: ID;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

// Content types
export interface BaseContent {
  id: ID;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
  tags?: string[];
}
```

## Usage Examples

```typescript
import { ApiResponse, User, AsyncState } from '@/shared/types';

// API response handling
const handleApiResponse = (response: ApiResponse<User[]>) => {
  if (response.success) {
    console.log('Users:', response.data);
  }
};

// Async state management
const [userState, setUserState] = useState<AsyncState<User>>({
  data: null,
  loading: false,
  error: null,
});
```

## Best Practices

1. **Consistent Naming**: Use PascalCase untuk types dan interfaces
2. **Generic Types**: Use generics untuk reusable types
3. **Strict Types**: Avoid `any`, use proper typing
4. **Documentation**: Add JSDoc comments untuk complex types
5. **Exports**: Export semua types dari index file untuk easy imports
