import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { PublicRoutes } from '@/types/routes.type';

import type { AppStore } from '../redux/store';

export const AuthGuard = () => {
  const authState = useSelector((store: AppStore) => store.auth);
  return authState.token ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} replace />;
};
