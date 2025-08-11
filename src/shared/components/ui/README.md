# UI Components

## Overview

Komponen UI khusus yang dioptimalkan untuk platform dan fitur tertentu.

## Platform-Specific Components

### IconSymbol (iOS)

Optimized icon component untuk iOS dengan SF Symbols support.

**File:** `IconSymbol.ios.tsx`

**Features:**

- Native SF Symbols integration
- High-quality vector icons
- System-consistent appearance
- Dynamic type support

**Props:**

```typescript
interface IconSymbolProps {
  name: string; // SF Symbol name
  size?: number; // Icon size
  color?: string; // Icon color
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  scale?: 'small' | 'medium' | 'large';
}
```

### IconSymbol (Default)

Fallback icon component untuk Android dan Web.

**File:** `IconSymbol.tsx`

**Features:**

- Cross-platform compatibility
- Material Design icons
- Emoji fallbacks
- Consistent sizing

### TabBarBackground (iOS)

Advanced tab bar background dengan blur effects untuk iOS.

**File:** `TabBarBackground.ios.tsx`

**Features:**

- Native blur effects
- Dynamic opacity
- System integration
- Performance optimized

### TabBarBackground (Default)

Standard tab bar background untuk Android dan Web.

**File:** `TabBarBackground.tsx`

**Features:**

- Solid color backgrounds
- Theme support
- Cross-platform consistency

## Usage

### Platform-Specific Icons

```typescript
import { IconSymbol } from '@/shared/components/ui/IconSymbol';

// Akan otomatis memilih versi yang sesuai platform
const MyComponent = () => (
  <IconSymbol
    name="house.fill"      // SF Symbol di iOS, fallback di platform lain
    size={24}
    color="#007AFF"
  />
);
```

### Tab Bar Implementation

```typescript
import { TabBarBackground } from '@/shared/components/ui/TabBarBackground';

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarBackground: () => <TabBarBackground />,
    }}
  >
    {/* Tab screens */}
  </Tab.Navigator>
);
```

## Platform Differences

### iOS Advantages

- Native SF Symbols dengan ribuan icons
- Blur effects dan transparency
- System-consistent appearance
- Dynamic type support

### Android/Web Features

- Material Design consistency
- Reliable cross-platform behavior
- Predictable performance
- Standard web compatibility

## Development Guidelines

### Adding New UI Components

1. Create base component (`ComponentName.tsx`)
2. Create iOS-specific version if needed (`ComponentName.ios.tsx`)
3. Metro bundler akan otomatis memilih versi yang tepat
4. Ensure consistent API across platforms

### Best Practices

- Keep platform-specific code minimal
- Use TypeScript untuk type safety
- Test pada semua target platforms
- Document platform differences
- Provide fallbacks untuk missing features
