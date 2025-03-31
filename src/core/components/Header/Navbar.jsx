import React, { useState, useEffect } from "react";
import NavbarMenu from "./contents/NavbarMenu.jsx";
import NavbarLogo from "./contents/NavbarLogo.jsx";
import NavbarSearch from "./contents/NavbarSearch.jsx";
import NavbarActions from "./contents/NavbarActions.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserRoundCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import clsx from "clsx";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState({
    isIpad: window.innerWidth <= 1270,
    isMobile: window.innerWidth <= 570,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // responsive
  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      setScreenSize({
        isIpad: width <= 1270,
        isMobile: width <= 570,
      });
    }, 100);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  // isMenuOpen == no-scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={clsx(
        "navbar md:px-12 sm:px-7 xs:px-5 s:px-3 font-inter-tight text-sm text-primary flex items-center justify-between bg-gray-100 py-2",
        screenSize.isIpad ? "xl:px-8 z-50" : "xl:px-16",
      )}
    >
      {screenSize.isIpad ? (
        <div className="flex items-center">
          <>
            <RxHamburgerMenu className="mr-3 cursor-pointer" size={21}
                             onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {isMenuOpen && screenSize.isIpad && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed top-[66px] left-0 h-full w-64 bg-white z-10 p-4 flex flex-col gap-4"
              >
                <button
                  className="absolute top-4 right-4 text-gray-700 text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ✕
                </button>
                <NavbarMenu isMobileMenu={true} />
              </motion.div>
            )}
          </>

          <NavbarLogo />
        </div>
      ) : (
        <>
          <NavbarLogo />
          <NavbarMenu isMobileMenu={false} />
        </>
      )}

      <NavbarSearch />

      <div>{screenSize.isMobile ? <LuUserRoundCheck size={21} className="ml-2" /> : <NavbarActions />}</div>
    </nav>
  );
};

export default React.memo(Navbar);
