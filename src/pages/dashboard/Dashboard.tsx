import { Outlet } from 'react-router-dom';

import Navbar from '@/components/layout/Navbar';
import SideBar from '@/components/layout/SideBar';

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="flex pt-16 h-screen">
        <SideBar />

        <main className="flex-1 overflow-x-auto py-10 px-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
