import { authApi } from '@/api/axios';

import type { LoginFormData } from '../schema/login.schema';

export const login = async (data: LoginFormData): Promise<string> => {
  const response = await authApi.post<string>('Login', data);
  return response.data;
};
