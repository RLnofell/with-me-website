import React from 'react';
import Navbar from './Navbar.jsx';
import NavbarAds from './NavbarAds.jsx';

const Header = () => {
  return (
    <header className="pt-0 md:pt-[7px] bg-[#e5e5e5]">
      {/*<NavbarAds/>*/}
      <Navbar />
    </header>
  );
};

export default React.memo(Header);
