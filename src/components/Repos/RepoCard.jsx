import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { dateTime } from "../../utility/convertToDay";
import { useState } from "react";

const RepoCard = ({ repo }) => {
  const colors = {
    JavaScript: "#f1e05a",
    CSS: "#563d7c",
    HTML: "#e34c26",
  };

  const [star, setStar] = useState(false);
  const handleStar = (e) => {
    if (+e.target.dataset.id === repo.id) {
      setStar((p) => !p);
    }
    console.log(e.target);
    console.log({
      id: repo.id,
      data: e.target.dataset.id,
      star,
    });
  };

  return (
    <>
      <li className='py-6 border-t border-grey-100  dark:border-neutral-400 flex justify-between items-center'>
        <div>
          <div className='flex gap-x-2 items-center'>
            <Link
              to={`${repo.name}`}
              className='text-sky-500 text-xl font-semibold'
            >
              {repo.name}
            </Link>
            <p className='text-repoColor text-xs px-[0.4375rem] leading-[1.125rem] border border-grey-100 capitalize rounded-3xl'>
              {repo.visibility}
            </p>
          </div>
          <div>
            <p className='mt-2 pr-4 md:pr-0 text-sm'>{repo.description}</p>
          </div>
          <div className='flex gap-x-4 mt-4 items-center'>
            {repo.language ? (
              <>
                <p className='flex gap-x-1 items-center'>
                  <span
                    className={`w-3 h-3 rounded-full inline-block`}
                    style={
                      repo.language
                        ? { backgroundColor: colors[repo.language] }
                        : {
                            backgroundColor: "#c6538c",
                          }
                    }
                  ></span>
                  <span className='text-sm'> {repo.language} </span>
                </p>
              </>
            ) : null}

            {repo.forks_count > 0 ? (
              <p className='flex gap-x-2 items-center text-sm'>
                <span>
                  <BiGitRepoForked />
                </span>
                <span>{repo.forks}</span>
              </p>
            ) : null}
            {repo.stargazers_count > 0 ? (
              <p className='flex gap-x-2 items-center text-sm'>
                <span>
                  <AiOutlineStar />
                </span>
                <span>{repo.stargazers_count}</span>
              </p>
            ) : null}

            <time className='text-xs' dateTime={repo.pushed_at}>
              {typeof dateTime(repo.pushed_at) === "number"
                ? `Updated ${dateTime(repo.pushed_at)} days ago`
                : `Updated on ${dateTime(repo.pushed_at)}`}
            </time>
          </div>
        </div>
        <button
          className='flex items-center px-4 py-[0.25rem] gap-x-3 bg-neutral-200 rounded-md border border-grey-100 dark:border-neutral-500 dark:bg-neutral-800 transition-all duration-300 hover:bg-neutral-50'
          data-id={repo.id}
          onClick={handleStar}
        >
          <AiFillStar
            className={`pointer-events-none stroke-[4.5rem] transition-all duration-300 ${
              star
                ? "fill-yellow-500 stroke-yellow-500"
                : "fill-neutral-200 stroke-neutral-400 dark:fill-neutral-800"
            }`}
          />
          <span className='text-sm pointer-events-none'>Star</span>
        </button>
      </li>
    </>
  );
};

export default RepoCard;
