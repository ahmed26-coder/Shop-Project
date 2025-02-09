import { Link } from "react-router-dom";

function Faund() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mt-20 mb-10">
        404 Not Found
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10">
        Your visited page not found. You may go home page.
      </p>
      <button className="bg-red-400 py-2 px-6 sm:px-8 md:px-10 text-base sm:text-lg text-white rounded-lg">
        <Link to="/">Back to home page</Link>
      </button>
    </div>
  );
}

export default Faund;
