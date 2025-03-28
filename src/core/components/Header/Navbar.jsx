import React from "react";
import NavbarMenu from '../ui/NavbarMenu.jsx';

const Navbar = () => {
  return (
    <nav className="navbar font-inter-tight text-sm text-primary flex items-center justify-between bg-gray-100 px-6 py-3">
      {/* Logo */}
      <div className="text-2xl font-bold">MA</div>

      {/* Menu */}
      <NavbarMenu/>

      {/* Search Bar */}
      <div className="flex items-center w-80 bg-gray-200 px-3 py-1 rounded-lg">
        <span className="text-gray-500">🔍</span>
        <input
          type="text"
          placeholder="Search by Inspiration"
          className="w-full bg-transparent outline-none px-2 text-sm"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm">Log in</a>
        <a href="#" className="text-sm">Sign Up</a>
        <button className="bg-black text-white px-4 py-1 text-sm rounded-lg">Be Pro</button>
        <button className="border border-black px-4 py-1 text-sm rounded-lg">Submit Website</button>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
