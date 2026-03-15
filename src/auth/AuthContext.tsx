import { createContext, useState, type ReactNode, useEffect } from 'react';
import type { UserType } from '../types/user.types';
import { getSession, setSession } from './auth.utils';
import { loginByToken } from '../services/auth.service';

type AuthStateType = {
  user: UserType | null;
  isInitialized: boolean;
};

type AuthContextType = AuthStateType & {
  setUser: (user: UserType) => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, setAuthState] = useState<AuthStateType>({
    user: null,
    isInitialized: false,
  });

  const setUser = (user: UserType) => {
    setAuthState({ ...authState, user });
  };

  useEffect(() => {
    const initialize = async () => {
      const token = getSession();
      try {
        if (token) {
          const user = await loginByToken(token);
          setSession(token);
          setAuthState((prev) => ({ ...prev, user }));
        }
      } catch (error) {
        console.error('initialize auth failed', error);
      } finally {
        setAuthState((prev) => ({ ...prev, isInitialized: true }));
      }
    };
    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...authState, setUser, isAuthenticated: !!authState.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
