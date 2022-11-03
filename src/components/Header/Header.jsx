import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

import { BsMoon, BsSunFill } from "react-icons/bs";

import HeaderMenu from "./HeaderMenu";
import HeaderLinks from "./HeaderLinks";
import HeaderMenuBtn from "./HeaderMenuBtn";

const Header = ({ theme, setTheme }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((p) => !p);
  };

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <header
        className={`bg-neutral-50 dark:bg-zinc-700 dark:text-neutral-50 text-zinc-700`}
      >
        <nav className='p-4 md:px-8 flex justify-between items-center '>
          <p className='z-10'>
            <NavLink
              to='/'
              className='text-2xl md:text-4xl font-josefin dark:text-neutral-50'
              end
            >
              tD
            </NavLink>
          </p>

          <HeaderLinks />
          <div className='hidden z-10 px-3 pb-3 relative md:flex justify-center'>
            <button aria-label='toggle theme' onClick={handleTheme}>
              {theme === "light" ? (
                <BsSunFill className='w-8 h-8  ' />
              ) : (
                <BsMoon className='w-6 h-6' />
              )}
            </button>
          </div>
          <HeaderMenuBtn openMenu={openMenu} handleMenu={handleMenu} />
        </nav>
        <HeaderMenu theme={theme} handleTheme={handleTheme} open={openMenu} />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
