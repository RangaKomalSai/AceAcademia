import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <div className="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
