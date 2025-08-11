# Explore Screens

## Overview

Screen components untuk feature Explore yang menampilkan konten yang dapat dijelajahi.

## Screens

### ExploreScreen

Screen utama untuk menjelajahi konten dengan fitur pencarian dan filtering.

**Features:**

- Search bar dengan real-time filtering
- Category filters horizontal scroll
- Grid/List view untuk explore items
- Pull-to-refresh functionality
- Infinite scroll / pagination (ready for implementation)
- Empty states untuk no results
- Loading skeleton animations

**Layout Structure:**

```
SafeAreaView
└── View
    ├── SearchBar (sticky header)
    ├── CategoryFilter (horizontal scroll)
    └── FlatList (explore items)
        ├── ExploreCard items
        ├── LoadingIndicator (bottom)
        └── EmptyState (when no items)
```

**User Interactions:**

- Search input dengan debouncing
- Category selection filtering
- Item press navigation
- Pull to refresh
- Scroll to load more (future)

**State Management:**

- Search query state
- Selected category state
- Filtered items computation
- Loading dan error states

## Usage

```typescript
import { ExploreScreen } from '@/features/explore/screens/ExploreScreen';

// Dalam tab navigator
<Tab.Screen
  name="Explore"
  component={ExploreScreen}
  options={{
    title: 'Explore',
    tabBarIcon: ({ focused }) => <Icon name="search" focused={focused} />
  }}
/>
```

## Navigation

Screen ini dapat navigate ke:

- Item detail screen
- Category-specific screens
- Search results screen
- User profile (dari item author)

## Performance

- Optimized FlatList rendering
- Memoized filter computations
- Efficient image loading
- Smart re-render prevention
- Memory management untuk large lists
