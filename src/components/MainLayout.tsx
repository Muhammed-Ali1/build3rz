import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const MainLayout = () => {
  return (
    <div style={{ paddingBottom: '60px' }}>
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default MainLayout;
