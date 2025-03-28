import React from 'react';
import { CiSearch } from "react-icons/ci";

const NavbarSearch = () => {
  return(
    <div className="font-inter-tight font-extralight text-primary flex items-center w-[500px] h-[42px] mx-2 bg-black/6 rounded-lg">
      <span className="text-primary ml-3 mb-0.5 "><CiSearch size={18}/></span>
      <input
        type="text"
        placeholder="Search by Inspiration"
        className="w-full bg-transparent outline-none px-3 text-[13px] font-inter-tight font-medium placeholder-primary"
      />
    </div>
  )
}

export default React.memo(NavbarSearch);