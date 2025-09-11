import { FaCalendarAlt } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="font-bold text-2xl">WM.</div>

        <div className="space-y-2 text-sm font-medium">
          <p className="hover:underline cursor-pointer">Websites</p>
          <p className="hover:underline cursor-pointer">Collections</p>
          <p className="hover:underline cursor-pointer">Elements</p>
        </div>

        <div className="space-y-2 text-sm font-medium">
          <p className="hover:underline cursor-pointer">Academy</p>
          <p className="hover:underline cursor-pointer">Jobs</p>
          <p className="hover:underline cursor-pointer">Market</p>
        </div>

        <div className="space-y-2 text-sm font-medium">
          <p className="hover:underline cursor-pointer">Directory</p>
          <p className="hover:underline cursor-pointer">Conferences</p>
        </div>

        <div className="space-y-2 text-sm font-medium">
          <p className="hover:underline cursor-pointer">FAQs</p>
          <p className="hover:underline cursor-pointer">About Us</p>
          <p className="hover:underline cursor-pointer">Contact Us</p>
        </div>

        {/* Conferences Box */}
        <div className="md:col-span-5 flex justify-end mt-10">
          <div className="bg-gray-100 rounded-xl px-6 py-4 flex items-center gap-3 shadow-sm w-full md:w-auto">
            <span className="text-sm text-gray-600">Next Conferences</span>
            <FaCalendarAlt className="text-xl text-black" />
            <span className="font-semibold text-black">TP.HCM, VietNam</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-dotted border-t border-gray-300 my-6" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 pb-10 text-sm text-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Legal */}
        <div className="flex flex-wrap gap-6">
          <p className="hover:underline cursor-pointer">Cookies Policy</p>
          <p className="hover:underline cursor-pointer">Legal Terms</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-semibold">Connect:</span>
          {['Instagram', 'LinkedIn', 'Twitter', 'Facebook', 'YouTube', 'TikTok', 'Pinterest'].map(
            (platform, i) => (
              <span key={i} className="hover:underline cursor-pointer">
                {platform}
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
