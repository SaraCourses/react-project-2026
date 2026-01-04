import type { UserType } from '../types/user.types';
import axios from './axios';

const url = 'auth';

export type RegisterType = Omit<UserType & { password: string }, 'id'>;

export const register = async (user: RegisterType) => {
  const response = await axios.post(`${url}/register`, user);
  const data = response.data;
  return data;
};

export type LoginType = { email: string; password: string };

export const login = async (credentials: LoginType) => {
  const response = await axios.post(`${url}/login`, credentials);
  const data = response.data;
  return data;
};

export const loginByToken = async (token: string) => {
  const response = await axios.get(`${url}/getUserByToken`, { headers: { Authorization: `Bearer ${token}` } });
  const data = response.data;
  return data;
};
