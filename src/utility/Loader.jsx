import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='h-[80vh] w-full md:w-1/2 flex items-center justify-center'>
      <RotateLoader color='rgb(36, 41, 47)' />
    </div>
  );
};

export default Loader;
