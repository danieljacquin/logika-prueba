import { NavLink, Outlet } from 'react-router-dom';

import { PrivateRoutes } from '@/types/routes.type';

export const Bakanes = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="font-bold text-3xl leading-11 mt-5">Categorias</div>
      <div className="hidden sm:flex w-full my-4">
        <NavLink
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BAKANES}/${PrivateRoutes.CATEGORIES}`}
          className={({ isActive }) =>
            `pr-4 py-2 font-medium text-gray-700
       ${isActive ? 'border-b-3 border-[#1E1B4D]' : 'border-b-2 border-transparent'}`
          }
        >
          Categorias
        </NavLink>

        <NavLink
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BAKANES}/${PrivateRoutes.TYPES}`}
          className={({ isActive }) =>
            `px-4 py-2 font-medium text-gray-700
       ${isActive ? 'border-b-3 border-[#1E1B4D]' : 'border-b-2 border-transparent'}`
          }
        >
          Tipos
        </NavLink>

        <NavLink
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BAKANES}/${PrivateRoutes.EVIDENCES}`}
          className={({ isActive }) =>
            `px-4 py-2 font-medium text-gray-700
       ${isActive ? 'border-b-3 border-[#1E1B4D]' : 'border-b-2 border-transparent'}`
          }
        >
          Evidencias
        </NavLink>
      </div>

      <div className="flex flex-col flex-1 overflow-auto min-h-0">
        <Outlet />
      </div>
    </div>
  );
};
