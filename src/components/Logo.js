import React from "react";
import logo from "../images/logo-sm.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex h-full items-center">
      <Link to="/home" className="flex items-center">
        <img src={logo} className="w-10" />
        <h1 className="text-p-blue font-bold text-sm lg:text-2xl font-josefin-sans ">
          AceAcademia
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
