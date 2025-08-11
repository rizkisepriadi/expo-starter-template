# Explore Hooks

## Overview

Custom hooks untuk mengelola state dan logic dalam feature Explore.

## Hooks

### useExploreData

Hook utama untuk mengelola data explore dengan fitur pencarian dan filtering.

**Returns:**

```typescript
{
  items: ExploreItem[];              // Daftar item yang terfilter
  categories: ExploreCategory[];     // Daftar kategori
  loading: boolean;                  // Status loading
  error: string | null;              // Error message
  searchQuery: string;               // Query pencarian saat ini
  selectedCategory: string | null;   // Kategori yang dipilih
  setSearchQuery: (query: string) => void;       // Update search query
  setSelectedCategory: (category: string) => void; // Update kategori
  refetch: () => void;               // Refresh data
}
```

**Features:**

- Real-time search dengan debouncing
- Category filtering
- Optimistic updates
- Error handling yang robust
- Auto-refresh capability

### useSearch

Hook khusus untuk implementasi pencarian dengan debouncing.

**Parameters:**

- `initialValue: string` - Nilai awal
- `delay: number` - Delay untuk debouncing (default: 300ms)

**Returns:**

```typescript
{
  value: string;           // Nilai input saat ini
  debouncedValue: string;  // Nilai yang sudah di-debounce
  setValue: (value: string) => void; // Update nilai
}
```

**Features:**

- Automatic debouncing
- Optimized performance
- TypeScript support

## Usage

```typescript
import { useExploreData, useSearch } from '@/features/explore/hooks';

const ExploreScreen = () => {
  const {
    items,
    categories,
    loading,
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
    refetch
  } = useExploreData();

  // Atau untuk search terpisah
  const { value, debouncedValue, setValue } = useSearch('', 500);

  return (
    <View>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ExploreList items={items} loading={loading} />
    </View>
  );
};
```

## Performance Optimizations

- Debounced search untuk mengurangi API calls
- Memoized filtered results
- Efficient re-render prevention
- Smart data caching
