import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../../shared/components/ThemedText';
import { ThemedView } from '../../../shared/components/ThemedView';
import { QuickAction } from '../types';

interface QuickActionsProps {
  actions: QuickAction[];
  onActionPress?: (action: QuickAction) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  actions,
  onActionPress,
}) => {
  return (
    <ThemedView className='rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
      <ThemedText className='mb-4 text-lg font-semibold text-gray-900 dark:text-white'>
        🚀 Quick Actions
      </ThemedText>

      <View className='flex-row flex-wrap justify-between'>
        {actions.map((action) => (
          <TouchableOpacity
            key={action.id}
            className='mb-3 w-[48%]'
            onPress={() => onActionPress?.(action)}
            activeOpacity={0.7}
          >
            <View className='items-center rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700'>
              <ThemedText className='mb-2 text-2xl'>{action.icon}</ThemedText>
              <ThemedText
                className='text-center text-sm font-medium text-gray-700 dark:text-gray-300'
                numberOfLines={1}
              >
                {action.title}
              </ThemedText>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ThemedView>
  );
};
