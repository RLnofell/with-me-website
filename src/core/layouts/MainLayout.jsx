import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import React from 'react';
import FixedNav from '../components/Nav/FixedNav.jsx';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Outlet />
        <FixedNav />
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
