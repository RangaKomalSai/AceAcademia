import React from "react";
import Navbar from "../components/Navbar";
import NewHeader from "../components/NewHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <Navbar />
      <div className="detail ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
