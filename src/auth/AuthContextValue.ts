import { createContext } from 'react';
import type { UserType } from '../types/user.types';

type AuthStateType = {
  user: UserType | null;
  isInitialized: boolean;
};

type AuthContextType = AuthStateType & {
  setUser: (user: UserType) => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);
export type { AuthContextType, AuthStateType };
