import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo-sm.png";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  return (
    <div className="shadow-md">
      <nav className="navbar flex justify-center items-end px-5 h-14">
        <div className="logo-container flex h-full items-center">
          <Link to="/home" className="logo-container flex items-center">
            <img src={logo} className="logo w-10" />
            <h1 className="text-p-blue font-bold text-2xl font-josefin-sans ">
              AceAcademia
            </h1>
          </Link>
        </div>
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
          className="flex items-center h-full text-p-blue font-semibold px-2"
        >
          Sign up
        </Link>
        <button className="border-2 border-p-blue text-white bg-p-blue hover:bg-dark-blue font-bold py-1 px-3 rounded mx-1 my-3 transition duration-300">
          <Link to="/home" className="">
            Log in
          </Link>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
