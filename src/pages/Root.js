import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <div className="h-16">
        <Navbar />
      </div>
      <div className="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
