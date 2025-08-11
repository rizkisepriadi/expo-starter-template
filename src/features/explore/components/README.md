# Explore Components

## Overview

Komponen-komponen UI untuk feature Explore yang menampilkan daftar konten yang dapat dijelajahi.

## Components

### ExploreCard

Kartu untuk menampilkan item yang dapat dijelajahi.

**Props:**

```typescript
interface ExploreCardProps {
  item: ExploreItem;
  onPress?: (item: ExploreItem) => void;
}
```

**Features:**

- Layout card yang menarik
- Support untuk image placeholder
- Truncated text untuk description
- Touch feedback yang smooth

### CategoryFilter

Komponen filter berdasarkan kategori.

**Props:**

```typescript
interface CategoryFilterProps {
  categories: ExploreCategory[];
  selectedCategory?: string;
  onSelectCategory: (categoryId: string) => void;
}
```

**Features:**

- Horizontal scroll untuk kategori
- Active state indication
- Smooth selection animation

### SearchBar

Komponen pencarian untuk explore content.

**Props:**

```typescript
interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
}
```

**Features:**

- Debounced search input
- Clear button functionality
- Search icon integration

## Usage

```typescript
import { ExploreCard, CategoryFilter, SearchBar } from '@/features/explore/components';

// Dalam ExploreScreen
<SearchBar value={searchQuery} onChangeText={setSearchQuery} />
<CategoryFilter
  categories={categories}
  selectedCategory={selectedCategory}
  onSelectCategory={setSelectedCategory}
/>
<ExploreCard item={exploreItem} onPress={handleItemPress} />
```
