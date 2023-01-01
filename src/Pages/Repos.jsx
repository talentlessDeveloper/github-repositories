import RepoHeader from "../components/Repos/RepoHeader";
import RepoSticky from "../components/Repos/RepoSticky";
import RepoMain from "../components/Repos/RepoMain";
import { Outlet } from "react-router-dom";
import { useFetchedUrl } from "../hooks/useFetch2";
import Loader from "../utility/Loader";

const Repos = () => {
  const { data: headerData, isLoading: headerLoader } = useFetchedUrl(
    "https://api.github.com/users/talentlessDeveloper",
    "headerData"
  );
  const { data: reposData, isLoading: reposLoader } = useFetchedUrl(
    "https://api.github.com/users/talentlessDeveloper/repos",
    "reposData"
  );

  if (headerLoader || reposLoader) return <Loader />;

  console.log({ headerData, reposData });

  return (
    <section className=' bg-white text-zinc-700 dark:bg-zinc-700 font-sans dark:text-neutral-200  after:content-[""] after:absolute after:w-full after:h-[50px] after:top-[29.25rem]  md:after:top-[6.3rem] after:left-0 after:border-b border-grey-100 dark:after:border-neutral-400'>
      <div className='repo-container md:grid  md:grid-cols-3 md:grid-rows-[auto_1fr] md:gap-x-8 '>
        <RepoHeader data={headerData} />
        <RepoSticky />
        <RepoMain data={reposData} />
      </div>

      <Outlet />
    </section>
  );
};

export default Repos;
