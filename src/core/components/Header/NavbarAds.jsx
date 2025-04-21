import React, { useState } from "react";

const NavbarAds = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full bg-gray-800 py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex justify-center items-center whitespace-nowrap ${
          isHovered ? "paused" : "animate-marquee"
        }`}
      >
        <p className="text-white text-lg">
          Đây là banner quảng cáo của bạn. Nhấp vào để dừng, di chuyển ra ngoài
          để chạy vô tận!
        </p>
      </div>
    </div>
  );
};

export default React.memo(NavbarAds);
