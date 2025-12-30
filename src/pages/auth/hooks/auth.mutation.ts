import { useMutation } from '@tanstack/react-query';

import { login } from '../api/login.api';

export const useAuthMutation = () => {
  const useLoginMutation = useMutation({
    mutationFn: login,
  });

  return useLoginMutation;
};
