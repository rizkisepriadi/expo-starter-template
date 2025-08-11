import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../../src/shared/components/ThemedText';
import { ThemedView } from '../../src/shared/components/ThemedView';

// Mock data untuk explore
const mockExploreItems = [
  {
    id: 1,
    title: 'Getting Started with React Native',
    description:
      'Learn the basics of React Native development and build your first mobile app.',
    category: 'Tutorial',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Advanced Navigation Patterns',
    description:
      'Explore complex navigation scenarios and best practices for mobile apps.',
    category: 'Guide',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: 'State Management with Redux',
    description:
      'Master state management in React Native applications using Redux.',
    category: 'Tutorial',
    author: 'Mike Johnson',
  },
  {
    id: 4,
    title: 'Performance Optimization Tips',
    description:
      'Learn how to optimize your React Native app for better performance.',
    category: 'Tips',
    author: 'Sarah Wilson',
  },
  {
    id: 5,
    title: 'Building Custom Components',
    description:
      'Create reusable and maintainable custom components for your app.',
    category: 'Guide',
    author: 'Alex Brown',
  },
];

const categories = ['All', 'Tutorial', 'Guide', 'Tips'];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = mockExploreItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleItemPress = (item: any) => {
    Alert.alert(item.title, `Author: ${item.author}\n\n${item.description}`, [
      { text: 'OK' },
    ]);
  };

  const renderExploreItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} activeOpacity={0.7}>
      <ThemedView className='mb-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
        <View className='mb-2 flex-row items-center justify-between'>
          <ThemedText className='text-sm font-medium text-blue-600 dark:text-blue-400'>
            {item.category}
          </ThemedText>
          <ThemedText className='text-xs text-gray-500 dark:text-gray-400'>
            by {item.author}
          </ThemedText>
        </View>

        <ThemedText className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
          {item.title}
        </ThemedText>

        <ThemedText className='leading-5 text-gray-600 dark:text-gray-300'>
          {item.description}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );

  const renderCategoryButton = (category: string) => (
    <TouchableOpacity
      key={category}
      onPress={() => setSelectedCategory(category)}
      className={`mr-2 rounded-full px-4 py-2 ${
        selectedCategory === category
          ? 'bg-blue-500'
          : 'bg-gray-200 dark:bg-gray-700'
      }`}
    >
      <ThemedText
        className={`text-sm font-medium ${
          selectedCategory === category
            ? 'text-white'
            : 'text-gray-700 dark:text-gray-300'
        }`}
      >
        {category}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className='flex-1 bg-gray-50 dark:bg-gray-900'>
      <View className='p-4'>
        {/* Header */}
        <ThemedText className='mb-6 text-2xl font-bold text-gray-900 dark:text-white'>
          🔍 Explore Content
        </ThemedText>

        {/* Search Bar */}
        <View className='mb-4'>
          <TextInput
            className='rounded-lg border border-gray-200 bg-white p-3 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white'
            placeholder='Search tutorials, guides, tips...'
            placeholderTextColor='#9CA3AF'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Category Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='mb-4'
        >
          <View className='flex-row'>
            {categories.map(renderCategoryButton)}
          </View>
        </ScrollView>

        {/* Results Count */}
        <ThemedText className='mb-4 text-sm text-gray-600 dark:text-gray-400'>
          {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}{' '}
          found
        </ThemedText>
      </View>

      {/* Content List */}
      <FlatList
        data={filteredItems}
        renderItem={renderExploreItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingTop: 0 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ThemedView className='items-center p-8'>
            <ThemedText className='mb-4 text-4xl'>🔍</ThemedText>
            <ThemedText className='mb-2 text-center text-lg font-semibold text-gray-900 dark:text-white'>
              No results found
            </ThemedText>
            <ThemedText className='text-center text-gray-600 dark:text-gray-400'>
              Try adjusting your search terms or category filter
            </ThemedText>
          </ThemedView>
        }
      />
    </SafeAreaView>
  );
}
