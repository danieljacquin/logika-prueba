import { useMutation, useQueryClient } from '@tanstack/react-query';

import { create } from '../api/category.api';

export const useCategoryMutation = () => {
  const queryClient = useQueryClient();

  const useCreateMutation = useMutation({
    mutationFn: create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return useCreateMutation;
};
