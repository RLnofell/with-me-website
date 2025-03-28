import React from 'react';

const NavbarActions = () => {
  return(
    <div className="font-inter-tight flex items-center gap-3 max-h-[42px]">
      <div className="pr-6 gap-3 flex items-center">
        <a href="#" className="text-sm">Log in</a>
        <a href="#" className="text-sm">Sign Up</a>
      </div>

      <button className="bg-black text-white px-4 h-[42px] max-h-[42px] text-sm hover:bg-black/80 rounded-lg">Be Pro</button>
      <button className="border border-black px-4 h-[42px] max-h-[42px] hover:bg-black/80 hover:text-white text-sm rounded-lg">Submit Website</button>
    </div>
  )
}

export default React.memo(NavbarActions);