# 🚀 Expo Starter Template

[![Expo](https://img.shields.io/badge/Expo-SDK%2052-4630EB?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.75-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://www.nativewind.dev/)

A production-ready mobile app template with scalable architecture, built-in features, and complete documentation. Perfect for teams or personal projects.

## ✨ Highlights

🏗️ **Production Architecture** – Feature-based modular structure  
🎨 **Modern UI** – NativeWind + Theme support (Light/Dark)  
📱 **Cross Platform** – iOS, Android, Web ready  
🔒 **Type Safe** – Full TypeScript implementation  
🚀 **Real API** – Working examples with JSONPlaceholder  
📚 **Complete Docs** – Full documentation for every feature  
⚡ **Performance** – Optimized for production

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Development Guide](#-development-guide)
- [API Integration](#-api-integration)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app (for device testing)

### Installation

```bash
# 1. Clone or download the template
git clone <repo-url> my-app
cd my-app

# 2. Install dependencies
pnpm install
# or: npm install / yarn install

# 3. Start development server
npx expo start

# 4. Scan the QR code with Expo Go or use an emulator
```

### First Run

After running the app, you will see:

- **Home Tab**: Dashboard with real-time statistics and dynamic greeting
- **Explore Tab**: Example of search and content filtering

---

## 🎯 Features

### 🏠 **Home Dashboard**

- ✅ Welcome card with dynamic greeting (morning/afternoon/evening/night)
- ✅ Real-time statistics from external API
- ✅ Quick actions for fast navigation
- ✅ Pull-to-refresh functionality
- ✅ Elegant loading and error states

### 🔍 **Explore Feature**

- ✅ Search functionality with real-time filtering
- ✅ Category-based filtering
- ✅ Responsive grid layout
- ✅ Empty states and loading indicators

### 🎨 **UI/UX Features**

- ✅ **Theme Support**: Light/Dark mode with auto-detection
- ✅ **NativeWind**: Tailwind CSS for React Native
- ✅ **Typography**: Custom fonts (Urbanist) with consistent scale
- ✅ **Icons**: Platform-specific icons (SF Symbols for iOS)
- ✅ **Animations**: Smooth transitions and micro-interactions

### 🏗️ **Architecture Features**

- ✅ **Feature-based Structure**: Modular and scalable
- ✅ **TypeScript**: Full type safety with strict mode
- ✅ **API Layer**: Centralized with Axios and interceptors
- ✅ **Custom Hooks**: Reusable logic for state management
- ✅ **Error Handling**: Comprehensive error boundaries
- ✅ **Performance**: Optimized rendering and memory management

---

## 📁 Project Structure

```
expo-starter/
├── app/                          # 🛣️ Expo Router (File-based routing)
│   ├── _layout.tsx              # Root layout
│   ├── +not-found.tsx           # 404 page
│   └── (tabs)/                  # Tab navigator
│       ├── _layout.tsx          # Tab layout
│       ├── home.tsx             # Home screen
│       └── explore.tsx          # Explore screen
│
├── src/                         # 🏗️ Main source code
│   ├── api/                     # 🌐 API layer
│   │   ├── client.ts            # Axios configuration
│   │   ├── endpoints.ts         # API endpoints
│   │   └── types.ts             # API type definitions
│   │
│   ├── features/                # 🎯 Feature modules
│   │   ├── home/                # 🏠 Home feature
│   │   │   ├── components/      # UI components
│   │   │   ├── hooks/           # Custom hooks
│   │   │   ├── screens/         # Screen components
│   │   │   ├── services/        # Business logic
│   │   │   └── types/           # Type definitions
│   │   └── explore/             # 🔍 Explore feature
│   │       └── [same structure]
│   │
│   ├── shared/                  # 🔧 Shared resources
│   │   ├── components/          # Reusable UI components
│   │   ├── hooks/               # Global custom hooks
│   │   ├── utils/               # Utility functions
│   │   ├── constants/           # App constants
│   │   └── types/               # Global types
│   │
│   └── navigation/              # 🧭 Navigation configuration
│
├── assets/                      # 📁 Static assets
└── docs/                        # 📚 Documentation
```

### 🎯 Feature-Based Architecture

Each feature has a consistent structure:

```
feature/
├── components/     # Feature-specific UI components
├── hooks/         # Custom hooks for state management
├── screens/       # Screen components
├── services/      # API calls and business logic
├── types/         # Type definitions
└── README.md      # Feature documentation
```

**Benefits:**

- ✅ **Scalable**: Easy to add/remove features
- ✅ **Maintainable**: Clear separation of concerns
- ✅ **Testable**: Isolated and focused testing
- ✅ **Team-friendly**: Multiple developers can work in parallel

---

## 🛠️ Development Guide

### 🎨 Adding New Features

1. **Create Feature Structure**

```bash
src/features/my-feature/
├── components/
├── hooks/
├── screens/
├── services/
├── types/
└── README.md
```

2. **Define Types First**

```typescript
// src/features/my-feature/types/index.ts
export interface MyFeatureData {
  id: string;
  title: string;
  // ... other properties
}
```

3. **Create Service Layer**

```typescript
// src/features/my-feature/services/myFeatureService.ts
import { apiClient } from '../../../api/client';

export const myFeatureService = {
  async getData(): Promise<MyFeatureData[]> {
    const response = await apiClient.get('/my-endpoint');
    return response.data;
  },
};
```

4. **Build Custom Hook**

```typescript
// src/features/my-feature/hooks/useMyFeatureData.ts
import { useState, useEffect } from 'react';

export const useMyFeatureData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // ... implementation
  return { data, loading, error, refetch };
};
```

5. **Create Components**

```typescript
// src/features/my-feature/components/MyComponent.tsx
import React from 'react';
import { ThemedView, ThemedText } from '../../../shared/components';

export const MyComponent = ({ data }) => (
  <ThemedView className="p-4">
    <ThemedText>{data.title}</ThemedText>
  </ThemedView>
);
```

6. **Build Screen**

```typescript
// src/features/my-feature/screens/MyFeatureScreen.tsx
export const MyFeatureScreen = () => {
  const { data, loading, error } = useMyFeatureData();
  // ... screen implementation
};
```

### 🎨 Styling Guidelines

**Using NativeWind:**

```typescript
// ✅ Recommended
<View className="flex-1 p-4 bg-white dark:bg-gray-900">
  <Text className="text-lg font-bold text-gray-900 dark:text-white">
    Hello World
  </Text>
</View>

// ✅ Custom styles when needed
<View style={[styles.container, { backgroundColor: themeColor }]}>...</View>
```

**Theme Support:**

```typescript
import { useThemeColor } from '@/shared/hooks/useThemeColor';

const backgroundColor = useThemeColor(
  { light: '#FFFFFF', dark: '#1F1F1F' },
  'background'
);
```

### 🔧 Custom Hooks Pattern

```typescript
// Template for custom hooks
export const useMyFeature = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const someAction = async () => {
    try {
      setLoading(true);
      setError(null);
      // ... logic
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { state, loading, error, someAction };
};
```

---

## 🌐 API Integration

### Configuration

```typescript
// src/api/client.ts
export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});
```

### Adding New Endpoints

```typescript
// src/api/endpoints.ts
export const API_ENDPOINTS = {
  USERS: '/users',
  MY_NEW_ENDPOINT: '/my-endpoint',
} as const;
```

### Creating API Service

```typescript
// src/features/my-feature/services/myService.ts
import { apiClient } from '../../../api/client';
import { API_ENDPOINTS } from '../../../api/endpoints';

export const myService = {
  async getData() {
    const response = await apiClient.get(API_ENDPOINTS.MY_NEW_ENDPOINT);
    return response.data;
  },
};
```

---

## ⚙️ Customization

### 🎨 Themes & Colors

Edit `src/shared/constants/Colors.ts`:

```typescript
export const Colors = {
  light: {
    primary: '#3B82F6', // Your brand color
    background: '#FFFFFF',
    text: '#000000',
    // ... other colors
  },
  dark: {
    primary: '#60A5FA',
    background: '#000000',
    text: '#FFFFFF',
    // ... other colors
  },
};
```

### 🔧 App Configuration

Edit `app.json`:

```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "scheme": "your-app-scheme"
    // ... other config
  }
}
```

### 📱 Navigation

Add new screens in the `app/` directory:

```typescript
// app/my-new-screen.tsx
export default function MyNewScreen() {
  return <MyScreenComponent />;
}
```

---

## 🚀 Deployment

### 📱 Build for Production

```bash
# Android APK
npx expo build:android

# iOS IPA
npx expo build:ios

# Web build
npx expo export:web
```

### 📦 Expo Application Services (EAS)

```bash
# Setup EAS
npm install -g eas-cli
eas login

# Configure build
eas build:configure

# Build for store
eas build --platform all
```

### 🌐 Web Deployment

```bash
# Build web version
npx expo export:web

# Deploy to Netlify/Vercel
# Upload dist/ folder
```

---

## 📚 Documentation

Each feature has complete documentation:

- 📁 **Feature Docs**: `src/features/[feature-name]/README.md`
- 🧩 **Component Docs**: `src/shared/components/README.md`
- 🔧 **API Docs**: `src/api/README.md`
- 🎣 **Hooks Docs**: `src/shared/hooks/README.md`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- ✅ Follow existing code patterns
- ✅ Add tests for new features
- ✅ Update documentation
- ✅ Use TypeScript with strict mode
- ✅ Follow naming conventions

---

## 📄 License

MIT License – feel free to use this template for personal or commercial projects.

---

**Happy Coding! 🚀**

> This template was made with ❤️ to help developers build production-ready mobile apps quickly and efficiently.
