# Home Hooks

## Overview

Custom hooks untuk mengelola state dan logic dalam feature Home.

## Hooks

### useHomeData

Hook utama untuk mengelola semua data yang diperlukan di Home screen.

**Returns:**

```typescript
{
  stats: HomeStats | null;           // Statistik aplikasi
  welcomeData: WelcomeData | null;   // Data sambutan
  quickActions: QuickAction[];       // Aksi cepat
  loading: boolean;                  // Status loading
  error: string | null;              // Error message
  refetch: () => void;               // Function untuk refresh data
}
```

**Features:**

- Auto-load data saat component mount
- Error handling yang robust
- Loading state management
- Refresh functionality
- Optimistic updates untuk data sinkron

## Usage

```typescript
import { useHomeData } from '@/features/home/hooks/useHomeData';

const MyComponent = () => {
  const { stats, welcomeData, loading, error, refetch } = useHomeData();

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={refetch} />;

  return (
    <View>
      {welcomeData && <WelcomeCard data={welcomeData} />}
      {stats && <StatsCard stats={stats} />}
    </View>
  );
};
```

## Error Handling

Hook ini menangani berbagai jenis error:

- Network errors
- API response errors
- Timeout errors
- Parsing errors
