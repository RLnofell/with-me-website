import React from 'react';
import Navbar from './Navbar.jsx';
import NavbarAds from './NavbarAds.jsx';

const Header = () => {
  return (
    <header className="">
      <NavbarAds/>
      <Navbar />
    </header>
  );
};

export default React.memo(Header);
