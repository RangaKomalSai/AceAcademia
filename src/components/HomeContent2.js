import React from "react";
import content2 from "../images/content-3.png";
import content21 from "../images/content-2-1.png";
import content22 from "../images/content-2-2.png";

function HomeContent2() {
  return (
    <div
      style={{ height: "80vh" }}
      className="px-10 py-5 flex justify-center gap-10"
    >
      <div className="h-full">
        <img src={content2} alt="" className="h-full" />
      </div>
      <div className="w-1/2 flex flex-col justify-center gap-10">
        <h1 className="font-bold text-2xl lg:text-5xl text-balance pb-6">
          Premium <span className="text-s-orange">Learning</span> Experience
        </h1>
        <div className="flex my-4">
          <div className="bg-p-blue rounded-lg w-16 h-16 flex justify-center items-center">
            <img src={content21} alt="" className="h-10 w-10" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-medium px-2">Easily Accessible</p>
            <p className="text-gray-600 px-2">
              Learning will feel very comfortable
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-p-blue rounded-lg w-16 h-16 flex justify-center items-center">
            <img src={content22} alt="" className="h-10 w-10" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-medium px-2">Fun Learning</p>
            <p className="text-gray-600 px-2">
              Very interactive mode of teaching
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent2;
