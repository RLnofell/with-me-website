import React from 'react';

const LinkButtonNav = () => {
  return (
    <>
      <div
        className="font-medium min-w-20 h-[60px] px-4 flex bg-[#E9E9E9] rounded-xl justify-center items-center
      hover:opacity-80 cursor-pointer"
      >
        <div className="text-primary text-[13px]">Visit Sotd</div>
      </div>
    </>
  );
};

export default React.memo(LinkButtonNav);
