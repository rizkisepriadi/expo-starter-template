import React from 'react';
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../../../shared/components/ThemedText';
import { ThemedView } from '../../../shared/components/ThemedView';
import { QuickActions } from '../components/QuickActions';
import { StatsCard } from '../components/StatsCard';
import { WelcomeCard } from '../components/WelcomeCard';
import { useHomeData } from '../hooks/useHomeData';
import { QuickAction } from '../types';

export const HomeScreen: React.FC = () => {
  const { stats, welcomeData, quickActions, loading, error, refetch } =
    useHomeData();

  const handleQuickAction = (action: QuickAction) => {
    Alert.alert(
      'Quick Action',
      `Navigate to ${action.title}?\n\nRoute: ${action.route}`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Go',
          onPress: () => console.log(`Navigate to ${action.route}`),
        },
      ]
    );
  };

  if (loading && !stats && !welcomeData) {
    return (
      <SafeAreaView className='flex-1 items-center justify-center bg-gray-50 dark:bg-gray-900'>
        <ActivityIndicator size='large' color='#3B82F6' />
        <ThemedText className='mt-4 text-gray-600 dark:text-gray-400'>
          Loading dashboard...
        </ThemedText>
      </SafeAreaView>
    );
  }

  if (error && !stats && !welcomeData) {
    return (
      <SafeAreaView className='flex-1 items-center justify-center bg-gray-50 p-4 dark:bg-gray-900'>
        <ThemedText className='mb-2 text-2xl'>😕</ThemedText>
        <ThemedText className='mb-4 text-center text-lg font-medium text-red-500'>
          Oops! Something went wrong
        </ThemedText>
        <ThemedText className='mb-6 text-center text-gray-600 dark:text-gray-400'>
          {error}
        </ThemedText>
        <TouchableOpacity
          onPress={refetch}
          className='rounded-lg bg-blue-500 px-6 py-3'
        >
          <ThemedText className='font-medium text-white'>Try Again</ThemedText>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className='flex-1 bg-gray-50 dark:bg-gray-900'>
      <ScrollView
        className='flex-1 p-4'
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refetch}
            colors={['#3B82F6']}
            tintColor='#3B82F6'
          />
        }
      >
        <View className='space-y-4'>
          {welcomeData && <WelcomeCard data={welcomeData} />}

          {stats && <StatsCard stats={stats} />}

          {quickActions.length > 0 && (
            <QuickActions
              actions={quickActions}
              onActionPress={handleQuickAction}
            />
          )}

          {error && (
            <ThemedView className='rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20'>
              <ThemedText className='text-center text-red-600 dark:text-red-400'>
                ⚠️ {error}
              </ThemedText>
            </ThemedView>
          )}
        </View>

        {/* Bottom padding */}
        <View className='h-4' />
      </ScrollView>
    </SafeAreaView>
  );
};
