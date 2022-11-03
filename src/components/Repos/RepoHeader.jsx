import { CiMail } from "react-icons/ci";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { motion } from "framer-motion";

import profile from "../../assets/img-repo-2.webp";

const RepoHeader = () => {
  return (
    <>
      {" "}
      <div className='aside md:h-screen '>
        <div className='flex gap-x-4 items-center  md:flex-col md:items-start'>
          <motion.img
            src={profile}
            alt='talentless Developer profile'
            className='w-16 aspect-square object-cover rounded-full md:w-64'
            layoutId='entranceImg'
          />
          <div>
            <h1 className='flex flex-col py-4'>
              <span className='text-[1.5rem] font-semibold'>Ope Kareem</span>
              <span>talentlessDeveloper</span>
            </h1>
          </div>
        </div>
        <div className='space-y-3 mt-8'>
          <h2 className='text-xl'>Student at AltSchool Africa</h2>
          <div className='flex gap-x-4 items-center'>
            <CiMail className='mt-[0.4rem]' />
            <a href='mailto:kareemope52@gmail.com'>kareemope52@gmail</a>
          </div>
          <div className='flex gap-x-4 items-center'>
            <AiOutlineUsergroupAdd className='mt-[0.4rem]' />
            <p>8 followers. 8 following</p>
          </div>
        </div>
        <div className='mt-10 pt-4 border-t border-neutral-100 dark:border-neutral-400'>
          <h2 className='font-semibold mb-2'>Achievements</h2>
          <img
            src='https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'
            alt=''
            className='aspect-square rounded-full w-16'
          />
        </div>
      </div>
    </>
  );
};

export default RepoHeader;
