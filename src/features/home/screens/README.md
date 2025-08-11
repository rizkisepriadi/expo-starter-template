# Home Screens

## Overview

Screen components untuk feature Home.

## Screens

### HomeScreen

Screen utama aplikasi yang menampilkan dashboard lengkap.

**Features:**

- Welcome card dengan greeting dinamis
- Statistik aplikasi real-time
- Quick actions untuk navigasi cepat
- Pull-to-refresh functionality
- Loading dan error states yang user-friendly
- Responsive design untuk berbagai ukuran layar

**Layout Structure:**

```
SafeAreaView
└── ScrollView (with RefreshControl)
    └── View (space-y-4)
        ├── WelcomeCard
        ├── StatsCard
        ├── QuickActions
        └── ErrorBanner (conditional)
```

**Error Handling:**

- Network connection issues
- API timeout errors
- Data parsing errors
- Graceful degradation when partial data available

**Loading States:**

- Initial loading dengan spinner dan text
- Refresh loading via pull-to-refresh
- Skeleton loading untuk future enhancement

## Usage

```typescript
import { HomeScreen } from '@/features/home/screens/HomeScreen';

// Dalam navigator
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    title: 'Dashboard',
    headerShown: false // Menggunakan SafeAreaView
  }}
/>
```

## Accessibility

- Proper semantic labels
- Screen reader support
- Touch target sizes sesuai guidelines
- High contrast support

## Performance

- Optimized re-renders
- Efficient data fetching
- Memory leak prevention
- Smooth scroll performance
