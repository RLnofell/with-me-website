import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FiTrendingUp } from 'react-icons/fi';
import { PiListBulletsBold, PiCpuThin, PiChatsCircle, PiMusicNotesSimple } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { label: 'Trending', icon: <FiTrendingUp size={16} /> },
  { label: 'By Category', icon: <PiListBulletsBold size={16} /> },
  { label: 'By Technology', icon: <PiCpuThin size={16} /> },
  { label: 'Collections', icon: <PiChatsCircle size={16} /> },
  { label: 'Blog', icon: <PiMusicNotesSimple size={16} /> },
];

const suggestions = [
  { title: 'Portfolio Websites', count: 8972 },
  { title: 'Free fonts', count: 288 },
  { title: 'Animated websites', count: 10666 },
  { title: 'Sites of the Day', count: 6452 },
  { title: 'Scrolling', count: 5450 },
  { title: 'One page design', count: 5386 },
  { title: 'UI design', count: 6538 },
  { title: 'E-commerce layouts', count: 5898 },
  { title: 'Architecture websites', count: 2698 },
  { title: 'Photography websites', count: 1342 },
];

const NavbarSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuggestions = suggestions.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-[500px] mx-2">
      <div className="w-full h-[42px] bg-white z-50 flex items-center justify-center rounded-lg border border-gray-200">
        <span className="text-primary ml-3 mb-0.5">
          <CiSearch size={18} />
        </span>
        <input
          type="text"
          placeholder="Search by Inspiration"
          className="w-full bg-transparent outline-none px-3 text-[13px] font-normal placeholder-primary"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[46px] w-[500px] left-0 right-0 bg-[#f5f5f5] rounded-xl border border-gray-200 z-50 flex overflow-hidden"
          >
            {/* Left Sidebar */}
            <div className="w-[180px] border-r border-gray-200 bg-white p-3 space-y-2">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-sm text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </div>
              ))}
            </div>

            {/* Right Content */}
            <div className="flex-1 p-4 grid grid-cols-2 gap-x-10 gap-y-3">
              {filteredSuggestions.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-2 py-2 text-sm hover:bg-white rounded-md cursor-pointer transition"
                >
                  <span className="text-gray-800">{item.title}</span>
                  <span className="text-gray-500 text-xs font-mono">{item.count}</span>
                </div>
              ))}
              {filteredSuggestions.length === 0 && (
                <div className="col-span-2 text-center text-sm text-gray-500 py-4">
                  Không tìm thấy kết quả phù hợp.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarSearch;
