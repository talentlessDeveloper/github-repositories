import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const HeaderLinks = () => {
  const activeClassName = "font-bold";
  return (
    <ul className='hidden md:flex justify-center basis-1/2 -mt-1 ml-8 gap-x-6 md:gap-x-8 md:mr-0 text-xl'>
      <motion.li className={`z-10 `}>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          About
        </NavLink>
      </motion.li>
      <li className='z-10'>
        <NavLink
          to='/repos'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Repos
        </NavLink>
      </li>
      <li className='z-10'>
        <NavLink
          to='errorpage'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          404
        </NavLink>
      </li>
      <motion.li className={`z-10`}>
        <NavLink
          to='/errorboundary'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          ErrorBoundary
        </NavLink>
      </motion.li>
    </ul>
  );
};

export default HeaderLinks;
