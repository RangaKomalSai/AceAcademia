import React from "react";
import content1 from "../images/content-1.png";
import Button from "../components/Button";

function HomeContent1() {
  return (
    <div className="flex">
      <div className="flex flex-col flex-wrap grow justify-center w-1/2">
        <div className="font-bold text-5xl text-balance pb-6 leading-snug tracking-normal">
          The<span className="text-s-orange"> Smart</span> Choice for{" "}
          <span className="text-s-orange">Future</span>
        </div>
        <p className=" text-gray-500 text-pretty my-3 pb-5">
          Start Learning with us now! Unlock your potential and embark on a
          journey of knowledge with our comprehensive learning resources.
        </p>
        <Button text="Start Learning" path="/courses" className="w-1/2" />
      </div>
      <div className="w-1/2">
        <img src={content1} />
      </div>
    </div>
  );
}

export default HomeContent1;
