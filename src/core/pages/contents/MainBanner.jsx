import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-[#e5e5e5] w-full text-center px-4 pt-14 pb-16">

      {/* day and score */}
      <div className="flex justify-center text-sm text-gray-700 mb-4">
        <div className="flex items-center space-x-2">
          <span>Site of the Day</span>
          <span className="border px-2 py-[2px] rounded-md text-sm font-medium">Apr 21, 2025</span>
          <span>Score <b>7.4</b> of 10</span>
        </div>
      </div>

      {/* title */}
      <div className="text-7xl md:text-9xl font-bold tracking-tight text-gray-900">
        ANDREA DIEGO
      </div>

      {/* creator */}
      <div className="mt-6 flex items-center justify-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs">
          G
        </div>
        <span className="text-xl font-medium">Gladeye</span>
      </div>

      {/*Image Ads*/}
      <img className="mt-16 rounded-lg" src="/src/assets/satoru-gojo-blue-3840x2160-16951.jpg" alt="Description" />

    </div>
  );
};

export default React.memo(MainBanner);
