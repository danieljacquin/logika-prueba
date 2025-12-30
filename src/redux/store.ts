import { configureStore } from '@reduxjs/toolkit';

import type { Auth } from '@/types/auth.type';

import { authSlice } from './states/auth';

export interface AppStore {
  auth: Auth;
}

export default configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
  },
});
