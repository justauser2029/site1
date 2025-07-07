import { useState, useEffect } from 'react';

interface User {
  email: string;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Credenciais válidas
  const VALID_EMAIL = 'cliente713@sonomilitar.com';
  const VALID_PASSWORD = 'c713';

  useEffect(() => {
    // Verificar se há uma sessão salva
    const savedAuth = localStorage.getItem('sleep-app-auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        if (authData.isAuthenticated && authData.email === VALID_EMAIL) {
          setUser(authData);
        }
      } catch (error) {
        // Se houver erro ao parsear, limpar o localStorage
        localStorage.removeItem('sleep-app-auth');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      const userData = {
        email: VALID_EMAIL,
        isAuthenticated: true
      };
      
      setUser(userData);
      localStorage.setItem('sleep-app-auth', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sleep-app-auth');
  };

  const isAuthenticated = (): boolean => {
    return user?.isAuthenticated || false;
  };

  return {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated
  };
};