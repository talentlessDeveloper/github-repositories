import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='bg-neutral-50  text-zinc-700 dark:bg-zinc-700 dark:text-neutral-50 h-screen'
    >
      <div className='repo-container pt-16 pt:mt-24'>
        <h1 className='text-center text-4xl mb-4'>About Project</h1>
        <p className='text-center text-2xl'>
          The Project entails the use of the following:{" "}
        </p>
        <ul className='text-center mt-8 space-y-4 text-xl'>
          <li>Error Boundary</li>
          <li>React Context</li>
          <li>Routing using react router</li>
          <li className='flex justify-center items-center gap-x-2'>
            Fetching of Api from{" "}
            <a
              href='https://docs.github.com/en/rest'
              target='_blank'
              className='bg-yellow-400 dark:text-neutral-50 block w-24 py-1 text-center'
            >
              github api
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default About;
