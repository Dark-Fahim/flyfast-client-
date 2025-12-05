import React from "react";
import { Link } from "react-router"; 

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef1f3] px-4">
      <div className="w-full max-w-3xl bg-white rounded-[2rem] shadow-sm flex flex-col items-center py-12">
        {/* Illustration */}
        {/* <img
          src="/images/404-character.png" // <-- put your 404 image path here
          alt="404 character"
          className="w-40 h-40 object-contain mb-6"
        /> */}

        {/* Text */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Error 404
        </h1>

        {/* Button */}
        {/* If using react-router */}
        <Link
          to="/"
          className="px-7 py-2 rounded-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold text-sm transition"
        >
          Go Home
        </Link>

        {/* If not using react-router, replace above Link with:
        <button
          onClick={() => (window.location.href = "/")}
          className="px-7 py-2 rounded-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold text-sm transition"
        >
          Go Home
        </button>
        */}
      </div>
    </div>
  );
};

export default NotFound404;
