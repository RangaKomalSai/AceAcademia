import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function NewHeader() {
  const location = useLocation();
  return (
    <div className="shadow-md">
      <nav className="navbar flex justify-center items-end px-5 h-14 bg-p-blue">
        <Logo />
        <ul className="flex justify-center gap-6 grow px-20">
          <li
            className={`px-4 py-2 font-semibold font-poppins hover:text-white  ${
              location.pathname === "/home"
                ? "text-white border-solid border-b-2 border-white rounded-t-md"
                : ""
            }`}
          >
            <Link to="/home" className="logo-container">
              Home
            </Link>
          </li>
          <li
            className={`px-4 py-2 font-semibold font-poppins hover:text-white ${
              location.pathname === "/courses"
                ? "text-white border-solid border-b-2 border-white rounded-t-md"
                : ""
            }`}
          >
            <Link to="/courses" className="logo-container">
              Courses
            </Link>
          </li>
          <li
            className={`px-4 py-2 font-semibold font-poppins hover:text-white ${
              location.pathname === "/about"
                ? "text-white border-solid border-b-2 border-white rounded-t-md"
                : ""
            }`}
          >
            <Link to="/about" className="logo-container">
              About
            </Link>
          </li>
          <li
            className={`px-4 py-2 font-semibold font-poppins hover:text-white ${
              location.pathname === "/contact"
                ? "text-white border-solid border-b-2 border-white rounded-t-md"
                : ""
            }`}
          >
            <Link to="/contact" className="logo-container">
              Contact
            </Link>
          </li>
        </ul>
        <Link
          to="/home"
          className="flex flex-nowrap items-center h-full text-white font-semibold px-2"
        >
          Sign up
        </Link>
        {/* <Button text="Log in" path="/home" />
         */}
        <button className="py-1 px-3 my-3 font-bold border border-white text-white hover:bg-white hover:text-p-blue hover:border-transparent rounded transition duration-300">
          Log in
        </button>
      </nav>
    </div>
  );
}

export default NewHeader;
