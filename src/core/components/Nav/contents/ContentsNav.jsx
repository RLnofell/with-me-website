import React from 'react';

const ContentsNav = () => {


  const navlinks = [
    { name: 'Phần 1', href: '#section1' },
    { name: 'Phần 2', href: '#section2' },
    { name: 'Phần 3', href: '#section3' },
  ];

  // const contentActive = "#DEDEDE"

  return (
    <>
      <div className="font-medium min-w-20 h-[60px] flex bg-[#3e3e3e] rounded-xl justify-center items-center
      cursor-pointer">
        <div className="flex items-center space-x-2 p-2">
          {navlinks.map((link, index) => (
            <li key={index} className="h-12 min-w-4  border-[#4e4e4e] hover:border-[#a7a7a7]
            border-[0.5px] rounded-lg flex items-center justify-center
            transition-colors duration-300 ease-in-out">
              <a
                href={link.href}
                className="transition-colors px-2 text-[#E9E9E9] text-[13px] font-normal"
              >
                {link.name}
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(ContentsNav);
