# Home Feature

## Overview

Feature utama aplikasi yang menampilkan dashboard dan informasi umum.

## Structure

```
home/
├── components/
│   ├── WelcomeCard.tsx      # Kartu sambutan pengguna
│   ├── StatsCard.tsx        # Kartu statistik aplikasi
│   └── QuickActions.tsx     # Tombol aksi cepat
├── hooks/
│   └── useHomeData.ts       # Hook untuk data home
├── screens/
│   └── HomeScreen.tsx       # Layar utama home
├── services/
│   └── homeService.ts       # Service API untuk home
└── types/
    └── index.ts            # Type definitions untuk home
```

## Features

- Welcome message dengan greeting dinamis
- Statistik aplikasi real-time
- Quick actions untuk navigasi cepat
- Auto refresh data
- Loading dan error handling

## Usage

```typescript
import { HomeScreen } from '@/features/home/screens/HomeScreen';

// Dalam tab navigator
<Tab.Screen name="Home" component={HomeScreen} />
```
