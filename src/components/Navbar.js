import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function Navbar() {
  const location = useLocation();
  return (
    <div className="shadow-md bg-white">
      <nav className="navbar flex justify-center items-end px-5 h-14">
        <Logo />
        <ul className="flex justify-center gap-6 grow px-20">
          <li
            className={`px-4 py-2 font-semibold font-poppins hover:text-p-blue  ${
              location.pathname === "/home"
                ? "text-p-blue border-solid border-b-2 border-p-blue rounded-t-md"
                : ""
            }`}
          >
            <Link to="/home" className="logo-container">
              Home
            </Link>
          </li>
          <li
            className={`px-4 py-2 font-semibold font-poppins hover:text-p-blue ${
              location.pathname === "/courses"
                ? "text-p-blue border-solid border-b-2 border-p-blue rounded-t-md"
                : ""
            }`}
          >
            <Link to="/courses" className="logo-container">
              Courses
            </Link>
          </li>
          <li
            className={`px-4 py-2 font-semibold font-poppins hover:text-p-blue ${
              location.pathname === "/about"
                ? "text-p-blue border-solid border-b-2 border-p-blue rounded-t-md"
                : ""
            }`}
          >
            <Link to="/about" className="logo-container">
              About
            </Link>
          </li>
          <li
            className={`px-4 py-2 font-semibold font-poppins hover:text-p-blue ${
              location.pathname === "/contact"
                ? "text-p-blue border-solid border-b-2 border-p-blue rounded-t-md"
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
          className="flex flex-nowrap items-center h-full text-p-blue font-semibold px-2"
        >
          Sign up
        </Link>
        <Button text="Log in" path="/home" />
      </nav>
    </div>
  );
}

export default Navbar;
