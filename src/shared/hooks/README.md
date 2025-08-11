# Shared Hooks

## Overview

Custom hooks yang dapat digunakan di seluruh aplikasi untuk logic yang umum dan reusable.

## Theme Hooks

### useColorScheme

Hook untuk mendeteksi dan mengelola theme (light/dark mode).

**Files:**

- `useColorScheme.ts` - Base implementation
- `useColorScheme.web.ts` - Web-specific implementation

**Returns:**

```typescript
'light' | 'dark' | null;
```

**Features:**

- Auto-detects system theme
- Responds to system theme changes
- Platform-specific optimizations
- Web compatibility

**Usage:**

```typescript
import { useColorScheme } from '@/shared/hooks/useColorScheme';

const MyComponent = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={{
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'
    }}>
      <Text>Current theme: {colorScheme}</Text>
    </View>
  );
};
```

### useThemeColor

Hook untuk mendapatkan warna berdasarkan theme saat ini.

**Parameters:**

```typescript
interface Props {
  light?: string;  // Color untuk light theme
  dark?: string;   // Color untuk dark theme
}
colorName: keyof typeof Colors.light & keyof typeof Colors.dark
```

**Returns:** `string` - Warna yang sesuai dengan theme

**Usage:**

```typescript
import { useThemeColor } from '@/shared/hooks/useThemeColor';

const MyComponent = () => {
  // Menggunakan warna dari konstanta Colors
  const backgroundColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    'background'
  );

  // Atau langsung dengan custom colors
  const textColor = useThemeColor(
    { light: '#000000', dark: '#ffffff' },
    'text'
  );

  return (
    <View style={{ backgroundColor }}>
      <Text style={{ color: textColor }}>Themed text</Text>
    </View>
  );
};
```

## Usage Guidelines

### Best Practices

1. Keep hooks focused dan single-purpose
2. Use TypeScript untuk type safety
3. Provide clear documentation
4. Test hooks thoroughly
5. Handle loading dan error states
6. Optimize untuk performance

### When to Create Custom Hooks

- Logic yang digunakan di multiple components
- Complex state management
- Side effects yang perlu di-abstract
- Performance optimizations
- Platform-specific behaviors
