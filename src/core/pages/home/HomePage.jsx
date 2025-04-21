import React from 'react';
import MainBanner from '../contents/MainBanner.jsx';

const HomePage = () => {

  return (
    <div>
      <MainBanner/>
      <h1 className="">Trang chủ</h1>

    </div>
  );
};

export default React.memo(HomePage);