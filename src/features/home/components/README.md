# Home Components

## Overview

Komponen-komponen UI yang digunakan dalam feature Home.

## Components

### WelcomeCard

Menampilkan kartu sambutan dengan greeting dinamis berdasarkan waktu.

**Props:**

- `data: WelcomeData` - Data sambutan pengguna

**Features:**

- Greeting dinamis berdasarkan waktu
- Icon yang berubah sesuai waktu hari
- Tanggal dalam format Indonesia

### StatsCard

Menampilkan statistik aplikasi dalam format kartu.

**Props:**

- `stats: HomeStats` - Data statistik aplikasi

**Features:**

- Statistik pengguna, post, dan todo
- Persentase completion rate
- Timestamp update terakhir

### QuickActions

Menampilkan tombol-tombol aksi cepat dalam grid layout.

**Props:**

- `actions: QuickAction[]` - Array aksi cepat
- `onActionPress?: (action: QuickAction) => void` - Callback ketika aksi ditekan

**Features:**

- Grid layout responsif
- Icon dan label untuk setiap aksi
- Touch feedback yang smooth

## Usage

```typescript
import { WelcomeCard, StatsCard, QuickActions } from '@/features/home/components';

// Dalam screen atau komponen lain
<WelcomeCard data={welcomeData} />
<StatsCard stats={homeStats} />
<QuickActions actions={quickActions} onActionPress={handleActionPress} />
```
