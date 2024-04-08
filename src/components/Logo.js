import React from "react";
import logo from "../images/logo-sm.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex h-full items-center overflow-hidden">
      <Link to="/home" className="flex items-center h-full">
        <img src={logo} style={{ objectFit: "contain", height: "60%" }} />
        <h1 className="text-p-blue font-bold text-sm md:text-2xl font-josefin-sans ">
          AceAcademia
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
