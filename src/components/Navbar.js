import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/home" className="logo-container">
            <img src={logo} className="logo" />
            <p>AceAcademia</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
