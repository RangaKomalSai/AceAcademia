import React from "react";

function BenefitCard({ number, heading, subheading }) {
  return (
    <div className="flex flex-col gap-1 w-1/4 h-72 px-5 py-5 mx-2 my-2 border-2 border-light-blue shadow-xl hover:shadow-light-blue rounded-lg cursor-pointer hover:border-p-blue ">
      <h1 className="flex justify-end font-bold text-3xl">{number}</h1>
      <p className="font-bold">{heading}</p>
      <p className="text-gray-600 text-pretty grow">{subheading}</p>
      <div className="flex justify-end">
        <div className=" bg-gray-300 p-2 rounded-md">
          <i class="fi fi-sr-arrow-up-right"></i>
        </div>
      </div>
    </div>
  );
}

export default BenefitCard;
