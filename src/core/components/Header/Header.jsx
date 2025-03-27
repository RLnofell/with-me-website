import React from 'react';
import Navbar from './Navbar.jsx';

const Header = () => {
  return (
    <header className="">
      <Navbar />
    </header>
  );
};

export default React.memo(Header);
