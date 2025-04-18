import React from 'react';
import { CiSearch } from "react-icons/ci";

const NavbarSearch = ({ isSearching, setIsSearching }) => {
  return (
    <div
      className={
        isSearching
          ? "w-[700px] h-[42px] bg-white z-50 mx-2 flex items-center justify-center rounded-lg"
          : "font-inter-tight font-extralight text-primary flex items-center w-[500px] h-[42px] mx-2 bg-black/6 rounded-lg"
      }
    >
      <span className="text-primary ml-3 mb-0.5">
        <CiSearch size={18} />
      </span>
      <input
        type="text"
        placeholder="Search by Inspiration"
        className="w-full bg-transparent outline-none px-3 text-[13px] font-inter-tight font-medium placeholder-primary"
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        autoFocus={isSearching}
      />
    </div>
  );
};

export default React.memo(NavbarSearch);
