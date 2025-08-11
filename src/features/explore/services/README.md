# Explore Services

## Overview

Service layer untuk mengelola data dan business logic dalam feature Explore.

## Services

### exploreService

Service utama untuk mengambil dan mengelola data explore content.

**Methods:**

#### getExploreItems(): Promise<ExploreItem[]>

Mengambil daftar item yang dapat dijelajahi dari API.

**Returns:**

```typescript
ExploreItem[] = {
  id: number;           // Unique identifier
  title: string;        // Judul item
  description: string;  // Deskripsi item
  category: string;     // Kategori item
  imageUrl?: string;    // URL gambar (optional)
  author?: string;      // Nama author
  createdAt?: string;   // Tanggal dibuat
}[]
```

**Features:**

- Parallel API calls untuk optimasi
- Data transformation dan cleaning
- Error handling yang robust
- Response caching

#### getCategories(): Promise<ExploreCategory[]>

Mengambil daftar kategori yang tersedia.

**Returns:**

```typescript
ExploreCategory[] = {
  id: string;     // Unique identifier
  name: string;   // Nama kategori
  count: number;  // Jumlah item dalam kategori
  icon?: string;  // Icon untuk kategori
}[]
```

**Features:**

- Dynamic category generation dari data
- Count calculation otomatis
- Alphabetical sorting

#### searchItems(query: string): Promise<ExploreItem[]>

Melakukan pencarian item berdasarkan query.

**Parameters:**

- `query: string` - Search query

**Returns:**
Filtered array of ExploreItem

**Features:**

- Full-text search di title dan description
- Case-insensitive search
- Relevant result ranking
- Performance optimization

#### getItemsByCategory(categoryId: string): Promise<ExploreItem[]>

Mengambil item berdasarkan kategori tertentu.

**Parameters:**

- `categoryId: string` - ID kategori

**Returns:**
Filtered array of ExploreItem untuk kategori tersebut

## API Integration

Menggunakan:

- JSONPlaceholder API untuk posts data
- Users API untuk author information
- Proper error handling dan retries
- Response caching untuk performance

## Caching Strategy

- In-memory cache untuk kategori
- Time-based cache invalidation
- Smart cache updates
- Offline support preparation

## Usage

```typescript
import { exploreService } from '@/features/explore/services/exploreService';

// Dalam hook atau component
const items = await exploreService.getExploreItems();
const categories = await exploreService.getCategories();
const searchResults = await exploreService.searchItems('react');
const categoryItems = await exploreService.getItemsByCategory('tech');
```
