import React from "react";
import HomeContent1 from "../components/HomeContent1";
import HomeContent2 from "../components/HomeContent2";
import HomeBenefits from "../components/HomeBenefits";
import HomeCourses from "../components/HomeCourses";

function Home() {
  return (
    <div className="">
      <div className=" px-10 py-5">
        <HomeContent1 />
      </div>
      <div>
        <HomeCourses />
      </div>
      <div className="bg-light-orange">
        <HomeContent2 />
      </div>
      <HomeBenefits />
    </div>
  );
}

export default Home;
