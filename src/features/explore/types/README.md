# Explore Types

## Overview

Type definitions untuk feature Explore yang memastikan type safety dan consistency.

## Types

### ExploreItem

Interface untuk item yang dapat dijelajahi dalam aplikasi.

```typescript
interface ExploreItem {
  id: number; // Unique identifier
  title: string; // Judul item
  description: string; // Deskripsi lengkap
  category: string; // Kategori item
  imageUrl?: string; // URL gambar preview (optional)
  author?: string; // Nama author/creator
  createdAt?: string; // Timestamp pembuatan (ISO format)
  tags?: string[]; // Tags untuk filtering (optional)
  views?: number; // Jumlah views (optional)
  likes?: number; // Jumlah likes (optional)
}
```

### ExploreCategory

Interface untuk kategori explore content.

```typescript
interface ExploreCategory {
  id: string; // Unique identifier (slug format)
  name: string; // Nama kategori yang ditampilkan
  count: number; // Jumlah item dalam kategori
  icon?: string; // Icon atau emoji untuk kategori
  color?: string; // Warna tema kategori (hex)
  description?: string; // Deskripsi kategori (optional)
}
```

### SearchFilters

Interface untuk filter pencarian yang advanced.

```typescript
interface SearchFilters {
  query: string; // Search query text
  category?: string; // Filter berdasarkan kategori
  sortBy?: 'newest' | 'oldest' | 'popular' | 'relevant'; // Sorting options
  dateRange?: {
    // Filter berdasarkan tanggal
    from: string;
    to: string;
  };
  tags?: string[]; // Filter berdasarkan tags
}
```

### ExploreState

Interface untuk state management explore feature.

```typescript
interface ExploreState {
  items: ExploreItem[]; // Daftar semua item
  filteredItems: ExploreItem[]; // Item yang sudah difilter
  categories: ExploreCategory[]; // Daftar kategori
  loading: boolean; // Status loading
  error: string | null; // Error message
  filters: SearchFilters; // Current filters
  hasMore: boolean; // Untuk pagination
  page: number; // Current page number
}
```

## Usage

```typescript
import {
  ExploreItem,
  ExploreCategory,
  SearchFilters,
  ExploreState,
} from '@/features/explore/types';

// Dalam component props
interface ExploreScreenProps {
  items: ExploreItem[];
  categories: ExploreCategory[];
  onItemPress: (item: ExploreItem) => void;
}

// Dalam service functions
const getItems = (): Promise<ExploreItem[]> => {
  // implementation
};

// Dalam state management
const [exploreState, setExploreState] = useState<ExploreState>({
  items: [],
  filteredItems: [],
  categories: [],
  loading: false,
  error: null,
  filters: { query: '' },
  hasMore: true,
  page: 1,
});
```

## Type Guards

Utility functions untuk runtime validation:

```typescript
export const isExploreItem = (data: any): data is ExploreItem => {
  return (
    data &&
    typeof data.id === 'number' &&
    typeof data.title === 'string' &&
    typeof data.description === 'string' &&
    typeof data.category === 'string'
  );
};

export const isExploreCategory = (data: any): data is ExploreCategory => {
  return (
    data &&
    typeof data.id === 'string' &&
    typeof data.name === 'string' &&
    typeof data.count === 'number'
  );
};
```

## Constants

Useful constants untuk explore feature:

```typescript
export const EXPLORE_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_DESCRIPTION_LENGTH: 150,
  SEARCH_DEBOUNCE_DELAY: 300,
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
} as const;
```
