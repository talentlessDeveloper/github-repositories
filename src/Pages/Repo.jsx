import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

import useFetch from "../hooks/useFetch";
import Loader from "../utility/Loader";
import RepoIcon from "../utility/RepoIcon";
import octocat from "../assets/Octocat-removebg-preview.png";
import { useFetchedUrl } from "../hooks/useFetch2";

const Repo = () => {
  const params = useParams();

  const URL = `https://api.github.com/repos/talentlessDeveloper/${params.name}`;
  const { data, isLoading } = useFetchedUrl(URL, "repoData");
  if (isLoading) return <Loader />;

  const {
    full_name,
    visibility,
    html_url,
    created_at,
    updated_at,
    forks_count,
    stargazers_count,
    watchers_count,
    languages,
    parent,
  } = data;

  const convertDate = (date) => {
    const [weekDay, month, day, year] = new Date(date)
      .toDateString()
      .split(" ");
    return `${weekDay}, ${month}, ${day}, ${year}`;
  };

  return (
    <>
      <section className='dark:text-neutral-50 text-zinc-700 dark:bg-zinc-700'>
        <div className='repo-container py-6 md:py-12'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='mt-8 md:w-1/3  '>
              <motion.img
                src={octocat}
                alt='github repo octocat'
                className='w-full object-cover aspect-square md:mt-8'
                layoutId='entranceImg'
              />
            </div>

            <div className='md:w-2/3 mt-4'>
              <div>
                <div className='flex items-center gap-x-2'>
                  <RepoIcon />{" "}
                  <h1 className='text-xl md:text-2xl text-sky-500'>
                    {full_name}
                  </h1>
                  <p className='text-repoColor text-xs px-[0.4375rem] leading-[1.125rem] border border-grey-100 capitalize rounded-3xl'>
                    {visibility}
                  </p>
                </div>
                {parent ? (
                  <p className='text-xs'> {parent.full_name} </p>
                ) : null}
              </div>

              <div className='space-y-4 mt-8'>
                <p className='text-lg'>Created on {convertDate(created_at)}</p>
                <p>Updated on {convertDate(updated_at)}</p>
                <p className='leading-[1.625rem] max-w-3xl'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis nobis accusamus omnis ex exercitationem perspiciatis
                  repellat vitae animi incidunt culpa numquam, eius asperiores
                  ipsa rerum. Ipsa veniam doloremque dolorum architecto? Amet
                  odit illum ab in, doloremque ullam, tenetur illo eos quaerat
                  dicta quis facere, natus aspernatur beatae dolorem quod dolor
                  reiciendis unde. Eaque, consectetur nisi quibusdam atque
                  quisquam deserunt. Quam!
                </p>
                <div className='flex gap-2 items-center'>
                  <p className='flex gap-x-2 items-center  text-3xl md:text-5xl'>
                    <span className=''>
                      <AiOutlineStar />
                    </span>
                    <span className='text-xl md:text-2xl'>
                      {parent ? parent.stargazers_count : stargazers_count}
                    </span>
                  </p>
                  <p className='flex gap-x-2 items-center  text-3xl md:text-5xl'>
                    <span className=''>
                      <FiEye />
                    </span>
                    <span className='text-xl md:text-2xl'>
                      {parent ? parent.watchers_count : watchers_count}
                    </span>
                  </p>
                  <p className='flex gap-x-2 items-center  text-3xl md:text-5xl'>
                    <span className=''>
                      <BiGitRepoForked />
                    </span>
                    <span className='text-xl md:text-2xl'>
                      {parent ? parent.forks_count : forks_count}
                    </span>
                  </p>
                  <p>{languages}</p>
                </div>
              </div>

              <div className='mt-4'>
                <a
                  href={html_url}
                  className='block w-32 text-lg text-center py-2 bg-gitGreen text-neutral-50 hover:bg-gitGreen/25 transition-all duration-300'
                  target='_blank'
                >
                  Visit Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Repo;
