import { Link } from "react-router-dom";

import Mark from "../utility/Mark";

function ErrorPage() {
  return (
    <section className='bg-neutral-50 text-zinc-700 dark:bg-zinc-700 dark:text-neutral-50 font-playfair'>
      <div className='repo-container flex flex-col justify-center items-center h-screen'>
        <p className='text-zinc-700 dark:text-neutral-50 flex items-center'>
          <span className='text-8xl md:text-9xl'>4</span>
          <span>
            <Mark />
          </span>
          <span className='text-8xl md:text-9xl'>4</span>
        </p>
        <p className='flex flex-col gap-y-4 items-center text-center gap-x-2 mt-4'>
          <span className='text-xl'> No dey waka illegally,</span>{" "}
          <Link
            to='/'
            className='bg-yellow-400 text-lg block w-36  py-1 hover:bg-zinc-700 hover:text-neutral-50 duration-300 transition-colors'
          >
            Go Back Home
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ErrorPage;
