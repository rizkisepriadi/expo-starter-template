import { apiClient } from '../../../api/client';
import { API_ENDPOINTS } from '../../../api/endpoints';
import { Post, Todo, User } from '../../../api/types';
import { HomeStats, QuickAction, WelcomeData } from '../types';

export const homeService = {
  async getHomeStats(): Promise<HomeStats> {
    try {
      const [usersResponse, postsResponse, todosResponse] = await Promise.all([
        apiClient.get<User[]>(API_ENDPOINTS.USERS),
        apiClient.get<Post[]>(API_ENDPOINTS.POSTS),
        apiClient.get<Todo[]>(API_ENDPOINTS.TODOS),
      ]);

      const todos = todosResponse.data;
      const completedTodos = todos.filter(
        (todo: Todo) => todo.completed
      ).length;

      return {
        totalUsers: usersResponse.data.length,
        totalPosts: postsResponse.data.length,
        totalTodos: todos.length,
        completedTodos,
        lastUpdate: new Date().toISOString(),
      };
    } catch (error: any) {
      console.error('Home stats error:', error);
      throw new Error('Failed to fetch home statistics');
    }
  },

  getWelcomeData(): WelcomeData {
    const now = new Date();
    const hours = now.getHours();
    let greeting = 'Selamat Malam';
    let timeOfDay: WelcomeData['timeOfDay'] = 'night';

    if (hours >= 5 && hours < 12) {
      greeting = 'Selamat Pagi';
      timeOfDay = 'morning';
    } else if (hours >= 12 && hours < 17) {
      greeting = 'Selamat Siang';
      timeOfDay = 'afternoon';
    } else if (hours >= 17 && hours < 21) {
      greeting = 'Selamat Sore';
      timeOfDay = 'evening';
    }

    return {
      userName: 'Developer',
      greeting,
      timeOfDay,
      date: now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  },

  getQuickActions(): QuickAction[] {
    return [
      {
        id: 'explore',
        title: 'Explore',
        icon: '🔍',
        route: '/explore',
        color: '#3B82F6',
      },
      {
        id: 'profile',
        title: 'Profile',
        icon: '👤',
        route: '/profile',
        color: '#10B981',
      },
      {
        id: 'settings',
        title: 'Settings',
        icon: '⚙️',
        route: '/settings',
        color: '#8B5CF6',
      },
      {
        id: 'help',
        title: 'Help',
        icon: '❓',
        route: '/help',
        color: '#F59E0B',
      },
    ];
  },
};
