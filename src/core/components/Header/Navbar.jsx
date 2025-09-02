import React, { useState, useEffect } from "react";
import NavbarMenu from "./contents/NavbarMenu.jsx";
import NavbarLogo from "./contents/NavbarLogo.jsx";
import NavbarSearch from "./contents/NavbarSearch.jsx";
import NavbarActions from "./contents/NavbarActions.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import clsx from "clsx";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState({
    isIpad: window.innerWidth <= 1270,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Responsive screen size
  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenSize({ isIpad: window.innerWidth <= 1270 });
    }, 100);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  // Add/remove no-scroll
  useEffect(() => {
    if (isMenuOpen || isSearching) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [isMenuOpen, isSearching]);

  return (
    <nav
      className={clsx(
        "navbar mt-0 md:px-12 sm:px-7 xs:px-5 s:px-3 text-sm " +
        "text-primary flex items-center justify-between bg-[#e5e5e5] py-2",
        screenSize.isIpad ? "xl:px-8 z-50" : "xl:px-16"
      )}
    >
      {screenSize.isIpad ? (
        <div className="flex items-center">
          <>
            <RxHamburgerMenu
              className="mr-3 cursor-pointer"
              size={21}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {!isSearching && isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed top-[65px] left-0 h-full w-full z-10 flex flex-col gap-4 bg-white"
              >
                <NavbarMenu isMobileMenu={true} />
              </motion.div>
            )}
          </>
          <NavbarLogo />
        </div>
      ) : (
        <>
          <NavbarLogo />
          {!isSearching && <NavbarMenu isMobileMenu={false} />}
        </>
      )}

      <NavbarSearch isSearching={isSearching} setIsSearching={setIsSearching} />
      <NavbarActions />
    </nav>
  );
};

export default React.memo(Navbar);
