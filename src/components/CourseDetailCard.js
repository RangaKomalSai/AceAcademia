import React from "react";
import Button from "./Button";

function CourseDetailCard(props) {
  return (
    <div className="shadow-xl p-10 my-4 border-2 border-gray-300 rounded-xl bg-light-orange">
      <div className="flex gap-2 items-center">
        <div className="w-3/4 grow flex flex-col items-start justify-start">
          <h1 className="font-bold text-2xl">{props.heading}</h1>
          <p className="text-gray-600 text-pretty">{props.subheading}</p>
        </div>
        <div className="w-1/6">
          <Button text="View Course" path="/coursedetail" />
        </div>
      </div>
      <div className="flex gap-2 justify-center py-5">
        <img src={props.img1} alt="" className="w-[31%]" />
        <img src={props.img2} alt="" className="w-[31%]" />
        <img src={props.img3} alt="" className="w-[31%]" />
      </div>
      <div className="flex flex-col ">
        <h1 className=" font-bold text-lg text-gray-800">Curriculum</h1>
        <div className="flex gap-2 h-24 text-balance">
          <div className="bg-white shadow-md px-2 py-1 rounded-lg">
            <h1 className="font-bold text-xl ">01</h1>
            <p>{props.one}</p>
          </div>
          <div className=" bg-white shadow-md px-2 py-1 rounded-lg">
            <h1 className="font-bold text-xl ">02</h1>
            <p>{props.two}</p>
          </div>
          <div className="bg-white shadow-md px-2 py-1  rounded-lg">
            <h1 className="font-bold text-xl ">03</h1>
            <p>{props.three}</p>
          </div>
          <div className="bg-white shadow-md px-2 py-1  rounded-lg">
            <h1 className="font-bold text-xl ">04</h1>
            <p>{props.four}</p>
          </div>
          <div className="bg-white shadow-md px-2 py-1  rounded-lg">
            <h1 className="font-bold text-xl ">05</h1>
            <p>{props.five}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailCard;
