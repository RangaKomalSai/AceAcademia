import React from "react";
import { Link } from "react-router-dom";

function Button({ text, path }) {
  return (
    <button className="py-1 px-3 my-3 block border-2 border-p-blue text-white bg-p-blue hover:bg-dark-blue hover:border-dark-blue font-bold rounded transition duration-300 flex-nowrap hover:shadow-dark-blue/80 hover:shadow-sm ">
      <Link to={path} className="w-full flex justify-center">
        {text}
      </Link>
    </button>
  );
}

export default Button;
