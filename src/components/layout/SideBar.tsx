import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { clearToken } from '@/redux/states/auth';
import { PrivateRoutes } from '@/types/routes.type';

const SideBar = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearToken());
  };

  return (
    <div className="w-[230px] h-[calc(100vh-65px)] border-r border-gray-200 shadow-sm  flex flex-col">
      <div className="h-[151px] bg-[url('/sidebar-bg.svg')] flex items-center justify-center">
        <img src="/sidebar-logo.svg" alt="Icono" />
      </div>
      <aside className="flex-1 bg-white text-white flex flex-col justify-between py-6">
        <nav className="flex flex-col">
          <NavLink
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`}
            className={({ isActive }) =>
              ` w-full h-10 block px-3 py-2 text-[#28272A]
            border-l-4 border-transparent
            transition-colors duration-200 ease-in-out
     ${isActive && 'bg-[#EAFFFF] border-l-[#01BABB]'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BAKANES}`}
            className={({ isActive }) =>
              ` w-full h-10 block px-3 py-2 text-[#28272A]
            border-l-4 border-transparent
            transition-colors duration-200 ease-in-out
     ${isActive && 'bg-[#EAFFFF] border-l-[#01BABB]'}`
            }
          >
            Bakanes
          </NavLink>
        </nav>

        <div className="">
          <button
            onClick={logOut}
            className="w-full py-2 hover:bg-[#EAFFFF] text-[#28272A]  text-sm"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
