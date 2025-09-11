import React from 'react';

const LogoNav = () => {
  // const logoImage = "./assets/image/logo.png";

  return (
    <>
      <div className="font-bold text-xl w-[60px] h-[60px] flex bg-primary rounded-xl justify-center items-center">
        <div className="text-[#E9E9E9]">WM</div>
      </div>
    </>
  );
};

export default React.memo(LogoNav);
