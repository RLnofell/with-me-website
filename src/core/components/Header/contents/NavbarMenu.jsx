import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const menuItems = [
  { name: "Explore", path: "/explore", icon: <MdOutlineKeyboardArrowDown size={16}/> },
  { name: "Directory", path: "/directory", icon: null },
  { name: "Academy", path: "/academy", icon: null, isNew: true },
  { name: "Jobs", path: "/jobs", icon: null },
  { name: "Market", path: "/market", icon: null },
];

const NavbarMenu = () => {
  return (
    <div className="flex gap-5 text-sm font-inter-tight mx-4">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="flex items-center justify-center gap-1 hover:text-primary/80 text-primary relative font-medium"
        >
          <p className="min-w-5">{item.name}</p>
          {item.icon && <span>{item.icon}</span>}

          {item.isNew && (
            <span className="relative text-[10px] flex items-center justify-center font-semibold text-white bg-black overflow-hidden rounded-sm min-w-[29px] min-h-[15px]">
              <span className="flex z-10 mt-[1px]">New</span>
              <motion.span
                className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
                style={{
                  transform: 'rotate(-45deg)',
                  left: '-100%',
                }}
                animate={{
                  left: ['-100%', '150%'],
                  bottom: ['-100%', '150%' ],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: "easeInOut",
                }}
              />
          </span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default React.memo(NavbarMenu);
