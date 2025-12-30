import { NavLink, Outlet } from 'react-router-dom';

export const Bakanes = () => {
  return (
    <>
      <div>Categorias</div>
      <div className="hidden sm:flex sm:space-x-8">
        <NavLink to="categories">Categorias</NavLink>
        <NavLink to="tipos">Tipos</NavLink>
        <NavLink to="evidencias">Evidencias</NavLink>
      </div>
      <Outlet />
    </>
  );
};
