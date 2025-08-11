# API Layer

## Overview

Folder ini berisi konfigurasi API global dan utilitas untuk komunikasi dengan backend.

## Structure

```
api/
├── client.ts       # Axios client configuration
├── types.ts        # Global API types
└── endpoints.ts    # API endpoints constants
```

## Usage

### Basic API Client

```typescript
import { apiClient } from '@/api/client';

const response = await apiClient.get('/users');
```

### With Types

```typescript
import { apiClient } from '@/api/client';
import { User } from '@/api/types';

const users = await apiClient.get<User[]>('/users');
```

## Features

- Axios interceptors for request/response handling
- Global error handling
- Authentication token management
- TypeScript support for all API responses
