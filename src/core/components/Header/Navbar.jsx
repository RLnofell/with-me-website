import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar font-apercu text-sm font-medium text-primary flex items-center justify-between bg-gray-100 px-6 py-3">
      {/* Logo */}
      <div className="text-2xl font-bold">MA</div>

      {/* Menu */}
      <div className="flex items-center gap-4">
        <div className="relative group">
          <button className="flex items-center gap-1">Explore ▼</button>
          <div className="absolute left-0 mt-2 hidden w-40 bg-white shadow-md group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
          </div>
        </div>
        <a href="#">Directory</a>
        <a href="#">Academy <span className="bg-black text-white text-xs px-1 rounded">New</span></a>
        <a href="#">Jobs</a>
        <a href="#">Market</a>
      </div>

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
