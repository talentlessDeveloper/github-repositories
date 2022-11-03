import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <ul className='hidden md:flex justify-center basis-1/2 -mt-1 ml-8 gap-x-6 md:gap-x-8 md:mr-0 text-xl'>
      <motion.li className={`z-10 `}>
        <Link to='/about'>About</Link>
      </motion.li>
      <motion.li className={`z-10`}>
        <Link to='/errorboundary'>ErrorBoundary</Link>
      </motion.li>
      <li className='z-10'>
        <Link to='/repos'>Repos</Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
