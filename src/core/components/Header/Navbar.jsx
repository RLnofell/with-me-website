import React, { useState, useEffect } from "react";
import NavbarMenu from "./contents/NavbarMenu.jsx";
import NavbarLogo from "./contents/NavbarLogo.jsx";
import NavbarSearch from "./contents/NavbarSearch.jsx";
import NavbarActions from "./contents/NavbarActions.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserRoundCheck } from "react-icons/lu";
import { debounce } from "lodash";
import clsx from "clsx";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState({
    isIpad: window.innerWidth <= 1270,
    isMobile: window.innerWidth <= 570,
  });

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

  return (
    <nav
      className={clsx(
        "navbar md:px-12 sm:px-7 xs:px-5 s:px-3 font-inter-tight text-sm text-primary flex items-center justify-between bg-gray-100 py-2",
        screenSize.isIpad ? "xl:px-8" : "xl:px-16",
      )}
    >
      {screenSize.isIpad ? (
        <div className="flex items-center">
          <RxHamburgerMenu className="mr-3" size={21} />
          <NavbarLogo />
        </div>
      ) : (
        <>
          <NavbarLogo />
          <NavbarMenu />
        </>
      )}

      <NavbarSearch />

      <div>{screenSize.isMobile ? <LuUserRoundCheck size={21} className="ml-2" /> : <NavbarActions />}</div>
    </nav>
  );
};

export default React.memo(Navbar);
