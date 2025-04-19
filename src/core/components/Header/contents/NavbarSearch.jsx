import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const suggestions = [
  "Yoga", "Bơi lội", "Gym", "Fitness cho nữ", "Kickboxing",
  "Zumba", "Tập tại nhà", "Dinh dưỡng", "Giảm cân", "Tăng cơ",
];

const NavbarSearch = ({ isSearching, setIsSearching }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setIsSearching(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      setIsSearching(false);
    }, 150);
  };

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // delete w-[500px] to make it responsive when focus isSearching // set w-[500px] under
    <div className="relative w-[500px]">
      <div
        className={
          isSearching
            ? "w-[700px] h-[42px] bg-white z-50 mx-2 flex items-center justify-center rounded-lg"
            : "font-inter-tight font-extralight text-primary flex items-center h-[42px] mx-2 bg-black/6 rounded-lg"
        }
      >
        <span className="text-primary ml-3 mb-0.5">
          <CiSearch size={18} />
        </span>
        <input
          type="text"
          placeholder="Search by Inspiration"
          className="w-full bg-transparent outline-none px-3 text-[13px] font-inter-tight font-medium placeholder-primary"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={isSearching}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Suggestion Dropdown */}
      {isFocused && (
        <div className="absolute top-[46px] left-2 right-2 bg-white shadow-xl border border-gray-200 rounded-xl z-50 p-3 max-h-[250px] overflow-y-auto">
          {filteredSuggestions.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {filteredSuggestions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition rounded-lg px-3 py-2 cursor-pointer"
                  onMouseDown={() => {
                    setSearchTerm(item);
                    setIsFocused(false);
                    setIsSearching(false);
                  }}
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold uppercase">
                    {item[0]}
                  </div>
                  <div className="text-sm font-medium text-gray-800">{item}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-500">Không tìm thấy kết quả phù hợp.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(NavbarSearch);
