import React from 'react';
import MainBanner from '../contents/MainBanner.jsx';
import BestestWebs from '../contents/BestestWebs.jsx';
import AcademyCourse from '../contents/AcademyCourse.jsx';

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <BestestWebs />
      <AcademyCourse />
    </div>
  );
};

export default React.memo(HomePage);
