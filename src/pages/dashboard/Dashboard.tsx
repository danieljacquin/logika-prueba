import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>;
      <div className="hidden sm:flex sm:space-x-8">
        <NavLink to="">Home</NavLink>
        <NavLink to="bakanes">Bakanes</NavLink>
      </div>
      ;
      <main className="max-w-7xl mx-auto py-8 px-4">
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
