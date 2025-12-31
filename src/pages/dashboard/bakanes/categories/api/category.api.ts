import { actionsApi } from '@/api/axios';
import type { CategoriesResponse } from '@/types/categories.type';

export const getAll = async (
  signal: AbortSignal,
  pageNumber: number,
  pageSize: number
): Promise<CategoriesResponse> => {
  const params = new URLSearchParams();
  if (pageNumber) {
    params.set('pageNumber', pageNumber.toString());
  }

  if (pageSize) {
    params.set('pageSize', pageSize.toString());
  }

  const response = await actionsApi.get<CategoriesResponse>('admin-list', { params, signal });
  return response.data;
};

export const create = async (formData: unknown) => {
  const response = await actionsApi.post('/admin-add', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
