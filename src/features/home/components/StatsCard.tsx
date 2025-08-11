import React from 'react';
import { View } from 'react-native';
import { ThemedText } from '../../../shared/components/ThemedText';
import { ThemedView } from '../../../shared/components/ThemedView';
import { HomeStats } from '../types';

interface StatsCardProps {
  stats: HomeStats;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  const completionRate =
    stats.totalTodos > 0
      ? Math.round((stats.completedTodos / stats.totalTodos) * 100)
      : 0;

  const statItems = [
    { label: 'Total Users', value: stats.totalUsers, icon: '👥' },
    { label: 'Total Posts', value: stats.totalPosts, icon: '📝' },
    { label: 'Todo Items', value: stats.totalTodos, icon: '✅' },
    { label: 'Completion Rate', value: `${completionRate}%`, icon: '📊' },
  ];

  return (
    <ThemedView className='rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
      <ThemedText className='mb-4 text-lg font-semibold text-gray-900 dark:text-white'>
        📈 Statistik Aplikasi
      </ThemedText>

      <View className='space-y-3'>
        {statItems.map((item, index) => (
          <View
            key={index}
            className='flex-row items-center justify-between py-2'
          >
            <View className='flex-1 flex-row items-center'>
              <ThemedText className='mr-3 text-lg'>{item.icon}</ThemedText>
              <ThemedText className='flex-1 text-gray-600 dark:text-gray-400'>
                {item.label}
              </ThemedText>
            </View>
            <ThemedText className='text-lg font-semibold text-gray-900 dark:text-white'>
              {item.value}
            </ThemedText>
          </View>
        ))}
      </View>

      <ThemedText className='mt-4 text-center text-xs text-gray-500 dark:text-gray-400'>
        Last updated: {new Date(stats.lastUpdate).toLocaleTimeString('id-ID')}
      </ThemedText>
    </ThemedView>
  );
};
