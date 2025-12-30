import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Auth } from '@/types/auth.type';
import { clearLocalStorage, persistLocalStorage } from '@/utils/localStorage.util';

const authInitialState: Auth = {
  token: '',
};

const keyValue = 'token';

export const authSlice = createSlice({
  name: 'auth',
  initialState: localStorage.getItem(keyValue)
    ? JSON.parse(localStorage.getItem(keyValue) as string)
    : authInitialState,
  reducers: {
    setToken: (state, action: PayloadAction<Auth>) => {
      state.token = action.payload;
      persistLocalStorage<Auth>(keyValue, state);
    },
    clearToken: () => {
      clearLocalStorage(keyValue);
      return authInitialState;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
