import React from "react";

function AboutCard(props) {
  return (
    <div className="w-[40vw] shadow-md bg-light-orange p-6 flex flex-wrap rounded-lg ">
      <div className="bg-light-blue text-p-blue flex items-center justify-center my-3 h-[50px] w-[50px] border-2 border-light-blue rounded-md text-2xl">
        <i className={props.icon}></i>
      </div>
      <div>
        <h1 className="text-lg font-medium">{props.heading}</h1>
        <p className="text-gray-600 text-sm text-pretty">{props.subheading}</p>
      </div>
    </div>
  );
}

export default AboutCard;
