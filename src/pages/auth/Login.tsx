import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setToken } from '@/redux/states/auth';
import { PrivateRoutes } from '@/types/routes.type';
import { notify } from '@/utils/toast';

import LoginForm from './components/LoginForm';
import { useAuthMutation } from './hooks/auth.mutation';

import type { LoginFormData } from './schema/login.schema';

const Login = () => {
  const useLoginMutation = useAuthMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (data: LoginFormData) => {
    useLoginMutation.mutate(data, {
      onSuccess: (token) => {
        notify.success('Sesión iniciada');
        dispatch(setToken({ token }));
        navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
      },
      onError: (error) => {
        notify.error(String(error));
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/login-bg.svg')] bg-no-repeat bg-cover bg-center">
      <LoginForm onHandleLogin={handleLogin} isSubmiting={useLoginMutation.isPending} />
    </div>
  );
};

export default Login;
