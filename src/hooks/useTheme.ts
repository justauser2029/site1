import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('sleep-app-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to dark theme
      applyTheme('dark');
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const body = document.body;
    
    if (newTheme === 'light') {
      // Light theme classes
      root.classList.remove('dark');
      root.classList.add('light');
      body.className = 'bg-slate-50 transition-colors duration-300';
    } else {
      // Dark theme classes
      root.classList.remove('light');
      root.classList.add('dark');
      body.className = 'bg-slate-950 transition-colors duration-300';
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('sleep-app-theme', newTheme);
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
};