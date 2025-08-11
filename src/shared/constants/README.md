# Shared Constants

## Overview

Konstanta-konstanta global yang digunakan di seluruh aplikasi untuk konsistensi dan maintainability.

## Colors

Sistem warna yang mendukung light dan dark theme.

**File:** `Colors.ts`

```typescript
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    border: '#E5E7EB',
    card: '#F9FAFB',
    primary: '#3B82F6',
    secondary: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    border: '#374151',
    card: '#1F2937',
    primary: '#60A5FA',
    secondary: '#9CA3AF',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
  },
};
```

## Usage Examples

```typescript
import { Colors, SPACING, FEATURES, STORAGE_KEYS } from '@/shared/constants';

// Colors dengan theme support
const MyComponent = () => {
  const backgroundColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    'background'
  );

  return (
    <View
      style={{
        backgroundColor,
        padding: 16,
        borderRadius: 8
      }}
    >
      <Text>Themed component</Text>
    </View>
  );
};
```

## Benefits

### Consistency

- Unified color system
- Consistent spacing
- Standard dimensions

### Maintainability

- Centralized configuration
- Easy to update values
- Type safety dengan TypeScript
