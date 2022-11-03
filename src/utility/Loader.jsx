import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='h-[80vh] w-[90vw] md:w-[50vw] flex items-center justify-center'>
      <RotateLoader color='rgb(45, 164, 78)' />
    </div>
  );
};

export default Loader;
