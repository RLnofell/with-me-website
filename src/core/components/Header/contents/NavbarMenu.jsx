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

const NavbarMenu = ({isMobileMenu}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isMobileMenu ? "flex-col" : "gap-5 px-5 items-center"} text-sm font-medium`}
    >
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex items-center ${isMobileMenu ? "justify-start bg-white" : "justify-center"} gap-1 hover:text-primary/80 text-primary relative font-medium`}
        >
          <div className={`flex ${isMobileMenu ? "p-[17px] bg-black/10 w-full border-b-[0.5px] border-black/20" : "p-0 bg-transparent"}`}>
            {/*content*/}
            <p className={`min-w-5`}>{item.name}</p>
            {/*dropdown icon*/}
            {item.icon &&
              <span className={`${isMobileMenu ? "hidden" : "flex mt-0.5 ml-1"}`}>{item.icon}</span>
            }
            {/*new icon*/}
            {item.isNew && (
              <span className="relative flex items-center justify-center ml-1 mt-0.5 bg-black overflow-hidden rounded-sm w-7 h-4">
              <span className={`flex z-10 text-[10px] font-semibold text-white ${isMobileMenu ? "mt-0.5" : "mt-[1px]"}`}>New</span>
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
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default React.memo(NavbarMenu);
