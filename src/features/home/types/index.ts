export interface HomeStats {
  totalUsers: number;
  totalPosts: number;
  totalTodos: number;
  completedTodos: number;
  lastUpdate: string;
}

export interface WelcomeData {
  userName: string;
  greeting: string;
  date: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
  color: string;
}
