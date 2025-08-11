import { useEffect, useState } from 'react';
import { homeService } from '../services/homeService';
import { HomeStats, QuickAction, WelcomeData } from '../types';

export const useHomeData = () => {
  const [stats, setStats] = useState<HomeStats | null>(null);
  const [welcomeData, setWelcomeData] = useState<WelcomeData | null>(null);
  const [quickActions, setQuickActions] = useState<QuickAction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load stats (async)
      const statsPromise = homeService.getHomeStats();

      // Load other data (sync)
      const welcomeDataResult = homeService.getWelcomeData();
      const quickActionsResult = homeService.getQuickActions();

      setWelcomeData(welcomeDataResult);
      setQuickActions(quickActionsResult);

      // Wait for stats
      const statsData = await statsPromise;
      setStats(statsData);
    } catch (err: any) {
      setError(err?.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    loadHomeData();
  };

  return {
    stats,
    welcomeData,
    quickActions,
    loading,
    error,
    refetch,
  };
};
