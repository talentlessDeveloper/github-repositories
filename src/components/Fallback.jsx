import { Link } from "react-router-dom";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role='alert' className='fallback'>
      <div className='container flex flex-col items-center justify-center h-screen gap-y-2'>
        <p className='text-zinc-700 text-xl'>Oops! Something is wrong!</p>
        <p style={{ color: "red", maxWidth: "30rem", lineHeight: "28px" }}>
          {error.message}
        </p>
        <button
          onClick={resetErrorBoundary}
          className='bg-gitGreen text-neutral-50 py-2 px-3'
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default Fallback;
