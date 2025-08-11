import React from 'react';
import { View } from 'react-native';
import { ThemedText } from '../../../shared/components/ThemedText';
import { ThemedView } from '../../../shared/components/ThemedView';
import { WelcomeData } from '../types';

interface WelcomeCardProps {
  data: WelcomeData;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ data }) => {
  const getTimeIcon = () => {
    switch (data.timeOfDay) {
      case 'morning':
        return '🌅';
      case 'afternoon':
        return '☀️';
      case 'evening':
        return '🌇';
      case 'night':
        return '🌙';
      default:
        return '🌟';
    }
  };

  return (
    <ThemedView className='rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
      <View className='mb-2 flex-row items-center'>
        <ThemedText className='mr-2 text-2xl'>{getTimeIcon()}</ThemedText>
        <ThemedText className='flex-1 text-sm text-gray-600 dark:text-gray-400'>
          {data.date}
        </ThemedText>
      </View>

      <ThemedText className='text-2xl font-bold text-gray-900 dark:text-white'>
        {data.greeting}, {data.userName}!
      </ThemedText>

      <ThemedText className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
        Selamat datang kembali di aplikasi
      </ThemedText>
    </ThemedView>
  );
};
