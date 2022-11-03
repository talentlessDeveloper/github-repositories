import profile from "../../assets/img-repo-2.webp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { container, letter } from "../../utility/animate";

const RepoSticky = () => {
  const [stickyProfile, setStickyProfile] = useState(false);
  const profileRef = useRef();

  useEffect(() => {
    let profileTop = profileRef.current.getBoundingClientRect().top;
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > profileTop + 200) {
        setStickyProfile(true);
      } else {
        setStickyProfile(false);
      }
    });

    return () => window.removeEventListener("scroll", () => {});

    // observer.observe(profileRef.current);
  }, []);
  return (
    <>
      <div className='bg-white dark:bg-zinc-700  mt-3 sticky top-0 md:row-start-1 md:row-end-2 md:col-span-4 p-4 gap-x-8 flex md:gap-x-60 items-center'>
        <motion.p
          className='flex gap-x-1 items-center'
          ref={profileRef}
          initial='hidden'
          animate={stickyProfile ? "show" : "hidden"}
          exit='hidden'
          variants={container}
        >
          <motion.img
            src={profile}
            alt='profile'
            className='aspect-square object-cover w-10 rounded-full'
            variants={letter}
          />
          <motion.span className='text-sm font-semibold' variants={letter}>
            talentlessDeveloper
          </motion.span>
        </motion.p>
        <h2 className='relative text-lg  md:text-2xl text-center font-semibold  '>
          Repositories
        </h2>
      </div>
    </>
  );
};

export default RepoSticky;
