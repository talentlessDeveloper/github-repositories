import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { liVariants, ulVariants } from "../../utility/animate";

const HeaderMenu = ({ open, theme, handleTheme }) => {
  return (
    <motion.ul
      variants={ulVariants}
      animate={open ? "open" : "closed"}
      className='bg-neutral-300 dark:bg-zinc-700 dark:text-neutral-50 flex flex-col md:hidden fixed z-10 space-y-3 p-6 text-zinc-700 w-36 right-4 rounded-xl mt-4 font-semibold  overflow-hidden '
    >
      <motion.li variants={liVariants} className={`z-10 `}>
        <Link to='/about'>About</Link>
      </motion.li>
      <motion.li variants={liVariants} className={`z-10`}>
        <Link to='/errorboundary'>ErrorBoundary</Link>
      </motion.li>
      <motion.li variants={liVariants} className='z-10'>
        <Link to='/repos'>Repos</Link>
      </motion.li>
      <motion.li variants={liVariants} className='z-10  relative '>
        <button aria-label='toggle theme' onClick={handleTheme}>
          {theme === "light" ? (
            <BsSunFill className='w-5 h-5  ' />
          ) : (
            <BsMoon className='w-5 h-5' />
          )}
        </button>
      </motion.li>
    </motion.ul>
  );
};

export default HeaderMenu;
