import React from "react";

const UnderlineLetter = ({ text }) => {
  return (
    <a className="relative after:bg-black after:absolute after:h-[2px] after:w-0 after:-bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer border-b-2 border-gray-500">
      <span className="text-lg sm:text-xl font-medium ">{text}</span>
    </a>
  );
};

export default React.memo(UnderlineLetter);
