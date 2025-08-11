# Home Types

## Overview

Type definitions untuk feature Home yang memastikan type safety di seluruh aplikasi.

## Types

### HomeStats

Interface untuk statistik aplikasi yang ditampilkan di dashboard.

```typescript
interface HomeStats {
  totalUsers: number; // Total pengguna terdaftar
  totalPosts: number; // Total post yang dibuat
  totalTodos: number; // Total todo items
  completedTodos: number; // Todo yang sudah diselesaikan
  lastUpdate: string; // Timestamp terakhir update (ISO format)
}
```

### WelcomeData

Interface untuk data sambutan pengguna.

```typescript
interface WelcomeData {
  userName: string; // Nama pengguna
  greeting: string; // Pesan sambutan
  date: string; // Tanggal dalam format lokal
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night'; // Waktu hari
}
```

### QuickAction

Interface untuk aksi cepat yang dapat dilakukan pengguna.

```typescript
interface QuickAction {
  id: string; // Unique identifier
  title: string; // Label yang ditampilkan
  icon: string; // Emoji atau icon name
  route: string; // Route untuk navigasi
  color: string; // Warna tema (hex)
}
```

## Usage

```typescript
import { HomeStats, WelcomeData, QuickAction } from '@/features/home/types';

// Dalam component props
interface HomeScreenProps {
  stats: HomeStats;
  welcome: WelcomeData;
  actions: QuickAction[];
}

// Dalam service return types
const getHomeData = (): Promise<HomeStats> => {
  // implementation
};

// Dalam hook state
const [stats, setStats] = useState<HomeStats | null>(null);
```

## Type Guards

Utility functions untuk runtime type checking:

```typescript
export const isHomeStats = (data: any): data is HomeStats => {
  return (
    data &&
    typeof data.totalUsers === 'number' &&
    typeof data.totalPosts === 'number' &&
    typeof data.totalTodos === 'number' &&
    typeof data.completedTodos === 'number' &&
    typeof data.lastUpdate === 'string'
  );
};
```

## Validation

Menggunakan TypeScript strict mode untuk:

- Null safety
- Property existence checking
- Type inference
- Compile-time error prevention
