import React from 'react';
import LogoNav from './contents/LogoNav.jsx';
import LinkButtonNav from './contents/LinkButtonNav.jsx';
import ContentsNav from './contents/ContentsNav.jsx';

const FixedNav = () => {
  return (
    <nav
      className="hidden md:flex fixed bottom-9 left-1/2 -translate-x-1/2 z-50
                  flex-col min-w-0 max-w-fit p-1.5 rounded-2xl
                 bg-[rgba(34,34,34,0.8)] pointer-events-auto transition-all duration-400"
    >
      <ul className="flex items-center space-x-1.5">
        <LogoNav />
        <ContentsNav/>
        <LinkButtonNav />
      </ul>
    </nav>
  );
};

export default React.memo(FixedNav);
