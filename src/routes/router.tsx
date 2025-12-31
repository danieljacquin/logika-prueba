import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AuthGuard } from '@/guards/AuthGuard';
import Login from '@/pages/auth/Login';
import { Bakanes } from '@/pages/dashboard/bakanes/Bakanes';
import Categories from '@/pages/dashboard/bakanes/categories/Categories';
import Dashboard from '@/pages/dashboard/Dashboard';
import { PrivateRoutes, PublicRoutes } from '@/types/routes.type';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={PrivateRoutes.PRIVATE} />,
  },
  {
    path: PublicRoutes.LOGIN,
    element: <Login />,
  },
  {
    element: <AuthGuard />,
    children: [
      {
        path: `${PrivateRoutes.PRIVATE}/*`,
        element: <Dashboard />,
        children: [
          { index: true, element: <Navigate to={PrivateRoutes.HOME} replace /> },
          { path: PrivateRoutes.HOME, element: <h1>Home</h1> },
          {
            path: PrivateRoutes.BAKANES,
            element: <Bakanes />,
            children: [
              {
                index: true, // Esto captura /dashboard/bakanes
                element: <Navigate to={PrivateRoutes.CATEGORIES} replace />, // Redirige a categorías
              },
              { path: PrivateRoutes.CATEGORIES, element: <Categories /> },
              { path: PrivateRoutes.TYPES, element: <h1>Tipos</h1> },
              { path: PrivateRoutes.EVIDENCES, element: <h1>Evidencias</h1> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <h1>Not Found</h1>,
  },
]);
