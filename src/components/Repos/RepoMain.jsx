import { useState } from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utility/Loader";

import RepoCard from "./RepoCard";
import RepoForm from "./RepoForm";

const RepoMain = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");

  const reposPerPage = 8;
  const { data, loading } = useFetch(
    "https://api.github.com/users/talentlessDeveloper/repos"
  );
  let repos = data;

  if (loading) return <Loader />;

  const start = (page - 1) * reposPerPage;
  const end = page * reposPerPage;
  const pageLength = Math.ceil(repos.length / reposPerPage);
  const filteredRepo = repos.filter((repo) =>
    repo.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <main className='md:col-span-2'>
        <RepoForm value={value} setValue={setValue} />
        <ul className='text-repoColor dark:text-[#d9cccc]'>
          {filteredRepo.slice(start, end).map((repo) => {
            return <RepoCard key={repo.id} repo={repo} />;
          })}
        </ul>
        <div
          className={`flex justify-between items-center py-8 border-t border-grey-100  dark:border-neutral-400 ${
            value ? "hidden" : ""
          }`}
        >
          <div className={`flex items-center gap-x-2`}>
            <button
              className='flex items-center gap-x-1 text-sky-500 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:text-neutral-700'
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
            >
              <IoIosArrowBack
                className={`fill-sky-500 mb-0.5 ${
                  page <= 1 ? "fill-neutral-400 dark:fill-neutral-700" : ""
                }`}
              />
              <span className='mb-1  text-sm md:text-base'>Previous</span>
            </button>
            <div className='space-x-2'>
              {Array.from({ length: pageLength }, (_, i) => i + 1).map(
                (btn) => (
                  <button
                    key={`${btn}-i`}
                    className={`${
                      page === btn
                        ? "bg-gitGreen text-neutral-50"
                        : "bg-neutral-200 dark:bg-neutral-700"
                    }  px-3 transition-colors duration-300`}
                    onClick={() => setPage(btn)}
                  >
                    {btn}
                  </button>
                )
              )}
            </div>
            <button
              className='flex items-center gap-x-1 text-sky-500  disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:text-neutral-700'
              disabled={page >= pageLength}
              onClick={() => setPage((p) => p + 1)}
            >
              <span className='mb-1 text-sm md:text-base '>Next</span>
              <IoIosArrowForward
                className={`fill-sky-500 mb-0.5 ${
                  page >= Math.ceil(repos.length / reposPerPage)
                    ? "fill-neutral-400 dark:fill-neutral-700"
                    : ""
                }`}
              />
            </button>
          </div>
          <p className='mb-[7px]'>
            Page {page} of {pageLength}
          </p>
        </div>
      </main>
    </>
  );
};

export default RepoMain;
