import { motion } from "framer-motion";
import { container, item, itemMain } from "../utility/animate";

import img5 from "../assets/img-repo-2.webp";
import Octo3 from "../utility/Octo3";
import Octo2 from "../utility/Octo2";
import Octo from "../utility/Octo";
import Octo4 from "../utility/Octo4";

const EntranceLoader = ({ setLoadEntrance }) => {
  return (
    <motion.section
      className='bg-[#000] h-screen fixed inset-0 z-50'
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      onAnimationComplete={() => setLoadEntrance(false)}
    >
      <motion.figure
        className='absolute top-1/4 left-7 w-36 rotate-6 md:left-1/4 md:w-60 md:top-[15%]'
        variants={item}
      >
        <Octo />
        <figcaption className=' w-full font-playfair absolute top-[4.5rem] p-2  text-neutral-50 whitespace-nowrap md:top-[10rem]'>
          Altschool Assignment
        </figcaption>
      </motion.figure>

      <motion.figure
        className='absolute top-[20%] md:top-1/4 right-7 w-36 md:top-[15%] md:right-1/4 md:w-60 -rotate-6'
        variants={item}
      >
        <Octo2 />
        <figcaption className=' w-full font-playfair absolute top-[4rem] p-2  text-neutral-50 whitespace-nowrap '>
          Expense App
        </figcaption>
      </motion.figure>
      <motion.figure
        className='absolute top-1/2 left-7 w-36 rotate-6  md:left-1/4 md:w-60'
        variants={item}
      >
        <Octo3 />
        <figcaption className=' w-full font-playfair absolute top-[4.5rem] p-2  text-neutral-50 whitespace-nowrap '>
          Hoobank App{" "}
        </figcaption>
      </motion.figure>
      <motion.figure
        className='absolute w-36 top-[60%] right-7 -rotate-6 md:right-1/4 md:w-60'
        variants={item}
      >
        <Octo4 />
        <figcaption className=' w-full font-playfair absolute top-[4.5rem] p-2  text-neutral-50 whitespace-nowrap '>
          Rock paper scissors
        </figcaption>
      </motion.figure>

      <motion.img
        src={img5}
        alt=''
        className='absolute top-[40%] left-[30%] w-36 md:w-60  object-cover aspect-square md:left-[38.5%] md:top-[30%]  '
        variants={itemMain}
        layoutId='entranceImg'
      />
    </motion.section>
  );
};

export default EntranceLoader;
