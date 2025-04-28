import React from 'react';
import MainBanner from '../contents/MainBanner.jsx';
import BestestWebs from '../contents/BestestWebs.jsx';

const HomePage = () => {

  return (
    <div>
      <MainBanner/>
      <BestestWebs/>

    </div>
  );
};

export default React.memo(HomePage);