import React from "react";
import NavbarMenu from './contents/NavbarMenu.jsx';
import NavbarLogo from './contents/NavbarLogo.jsx';
import NavbarSearch from './contents/NavbarSearch.jsx';
import NavbarActions from './contents/NavbarActions.jsx';

const Navbar = () => {
  return (
    <nav className="navbar font-inter-tight text-sm text-primary flex items-center justify-between bg-gray-100 px-[66px] py-2">
      {/* Logo */}
      <NavbarLogo/>

      {/* Menu */}
      <NavbarMenu/>

      {/* Search Bar */}
      <NavbarSearch/>

      {/* Actions */}
      <NavbarActions/>
    </nav>
  );
};

export default React.memo(Navbar);
