import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pic from "../assets/img-repo-2.webp";
import { letter, letterContainer } from "../utility/animate";

const Home = () => {
  const line1 = " Hi";
  const line2 = " Welcome to talentlessDeveloper's";
  const line3 = "Repositories";
  return (
    <div>
      <div className=''>
        <div className='dark:bg-[#2C2C2C] bg-neutral-50 flex lg:justify-center items-center  h-screen pl-4 fixed left-0 top-0 w-full md:w-[65%] md:p-0 transition-colors duration-300'>
          <motion.div
            className='pl-4 md:pl-8  mt-24 md:mt-0 '
            variants={letterContainer}
            initial='hidden'
            animate='show'
          >
            <motion.h1
              className='font-playfair dark:text-neutral-50 text-zinc-700  max-w-[22.125rem] text-2xl leading-[2rem] md:max-w-xl md:text-5xl md:leading-[3.75rem] overflow-hidden transition-colors duration-300'
              variants={letterContainer}
              initial='hidden'
              animate='show'
            >
              {line1.split("").map((char, idx) => {
                return (
                  <motion.span key={`${char}-${idx}`} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
              , <br />
              {line2.split("").map((char, idx) => {
                return (
                  <motion.span key={`${char}-${idx}`} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}{" "}
              <br />{" "}
              {line3.split("").map((char, idx) => {
                return (
                  <motion.span key={`${char}-${idx}`} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
            <motion.div className='w-[13rem]' variants={letter}>
              <Link
                to='/repos'
                className='bg-yellow-400 text-center font-playfair text-xl block  px-3 py-2 mt-8 w-full transition-colors duration-500 dark:hover:bg-zinc-700 dark:text-neutral-50 text-zinc-700 hover:text-neutral-50 hover:bg-zinc-700 '
              >
                Go to Repos
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className='bg-yellow-400 w-[45%] fixed right-5 h-[12.5rem] top-[15%] md:w-[35%] md:top-0 md:right-0 md:h-screen '>
          <motion.img
            src={pic}
            alt='Kareem Opeyemi'
            className='w-[26.25rem] object-cover aspect-square  absolute top-[10%] -left-20 md:-left-[10.625rem] md:top-[16%] md:object-contain'
            layoutId='entranceImg'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
