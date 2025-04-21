import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-[#e5e5e5] w-full text-center px-4 py-8">
      <div className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
        INTO THE AMAZON
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-700">
        <span>Site of the Day</span>
        <span className="border px-2 py-[2px] rounded-md text-xs">Apr 21, 2025</span>
        <span>Score <b>7.4</b> of 10</span>
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-xs">
          G
        </div>
        <span className="text-sm font-medium">Gladeye</span>
      </div>
    </div>
  );
};

export default React.memo(MainBanner);
