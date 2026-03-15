import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserType } from '../../types/user.types';

export interface UsersState {
  users: UserType[] | null;
}

const initialState: UsersState = {
  users: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
