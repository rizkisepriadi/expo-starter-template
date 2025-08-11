# Navigation

## Overview

Konfigurasi dan setup untuk navigation dalam aplikasi menggunakan Expo Router.

## File Structure

```
navigation/
├── README.md           # Dokumentasi navigation
├── types.ts           # Type definitions untuk routes (optional)
└── guards.ts          # Navigation guards dan middleware (optional)
```

## Expo Router Structure

Aplikasi ini menggunakan Expo Router dengan file-based routing:

```
app/
├── _layout.tsx        # Root layout
├── +not-found.tsx     # 404 page
└── (tabs)/           # Tab navigator group
    ├── _layout.tsx   # Tab layout
    ├── home.tsx      # Home tab screen
    └── explore.tsx   # Explore tab screen
```

## Navigation Usage

### Basic Navigation

```typescript
import { router } from 'expo-router';

// Navigate to a route
router.push('/explore');
router.replace('/home');
router.back();

// Navigate dengan parameters
router.push('/profile/123');
router.push({
  pathname: '/profile/[id]',
  params: { id: '123' },
});
```

### Link Component

```typescript
import { Link } from 'expo-router';

const MyComponent = () => (
  <Link href="/explore">
    <Text>Go to Explore</Text>
  </Link>
);
```

## Best Practices

### File Organization

- Group related screens dalam folders
- Use descriptive names untuk routes
- Keep layout files simple dan focused

### Performance

- Use lazy loading untuk heavy screens
- Implement proper loading states
- Optimize navigation transitions

### Type Safety

- Enable typed routes dalam Expo Router
- Define parameter types
- Use TypeScript untuk navigation logic
