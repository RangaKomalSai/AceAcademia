import React from "react";
import content1 from "../images/content-1.png";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex px-10 py-5">
      <div className="flex flex-col flex-wrap grow justify-center w-1/2">
        <h1 className="font-bold text-5xl text-pretty pb-6 leading-snug tracking-normal">
          Start learning with us now
        </h1>
        <p className=" text-gray-500 text-pretty my-3 pb-5">
          Unlock your potential and embark on a journey of knowledge with our
          comprehensive learning resources.
        </p>
        <Button text="Start Learning" path="/courses" className="w-1/2" />
      </div>
      <div className="w-1/2">
        <img src={content1} />
      </div>
    </div>
  );
}

export default Home;
