import React from "react";
import HomeContent1 from "../components/HomeContent1";
import HomeContent2 from "../components/HomeContent2";
import HomeBenefits from "../components/HomeBenefits";
import HomeCourses from "../components/HomeCourses";
import Newsletter from "../components/Newsletter";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <Newsletter />
    </div>
  );
}

export default Home;
