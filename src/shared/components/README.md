# Shared Components

## Overview

Komponen-komponen yang dapat digunakan di seluruh aplikasi untuk konsistensi UI dan reusability.

## Core Components

### ThemedText

Text component yang mendukung theme (light/dark mode).

**Props:**

- Extends React Native Text props
- `type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'`

**Usage:**

```typescript
<ThemedText type="title">Judul Halaman</ThemedText>
<ThemedText type="subtitle">Subtitle</ThemedText>
<ThemedText>Text biasa</ThemedText>
```

### ThemedView

View component yang mendukung theme dengan background yang otomatis.

**Props:**

- Extends React Native View props
- Auto-adapts background color berdasarkan theme

**Usage:**

```typescript
<ThemedView className="p-4 rounded-lg">
  <ThemedText>Content di dalam view</ThemedText>
</ThemedView>
```

### HelloWave

Animated wave emoji component untuk greeting.

**Features:**

- Smooth wave animation
- Automatic animation loop
- Optimized performance

### Collapsible

Component untuk konten yang dapat di-collapse/expand.

**Props:**

```typescript
interface CollapsibleProps {
  children: React.ReactNode;
  collapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
}
```

### ExternalLink

Link component untuk membuka URL eksternal.

**Props:**

```typescript
interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  asChild?: boolean;
}
```

### ParallaxScrollView

ScrollView dengan parallax header effect.

**Props:**

```typescript
interface ParallaxScrollViewProps {
  headerBackgroundColor: { dark: string; light: string };
  headerImage: React.ReactElement;
  children: React.ReactNode;
}
```

## UI Components

### HapticTab

Tab component dengan haptic feedback.

**Features:**

- Haptic feedback on press
- Smooth transitions
- Accessibility support

## Icon Components

### IconSymbol

Cross-platform icon component.

**Props:**

```typescript
interface IconSymbolProps {
  name: string;
  size?: number;
  color?: string;
}
```

**Platform Support:**

- iOS: SF Symbols
- Android: Material Icons
- Web: Fallback icons

### TabBarBackground

Custom background untuk tab bar.

**Features:**

- Platform-specific styling
- Theme support
- Blur effects (iOS)

## Usage Examples

### Basic Layout

```typescript
import { ThemedView, ThemedText } from '@/shared/components';

const MyScreen = () => (
  <ThemedView className="flex-1 p-4">
    <ThemedText type="title">Welcome</ThemedText>
    <ThemedText>This is a basic layout example.</ThemedText>
  </ThemedView>
);
```

### Card Component

```typescript
const MyCard = ({ title, children }) => (
  <ThemedView className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
    <ThemedText type="subtitle" className="mb-2">{title}</ThemedText>
    {children}
  </ThemedView>
);
```

## Styling

- Semua komponen mendukung NativeWind classes
- Automatic theme switching
- Consistent spacing dan typography
- Platform-specific optimizations
