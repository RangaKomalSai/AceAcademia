import React from "react";
import Button from "./Button";

function CourseCard({ imgpath, subheading, rating, heading, price }) {
  const stars = [];
  const showStars = (rating) => {
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(true);
      } else {
        stars.push(false);
      }
    }
  };
  const countStars = showStars(rating);
  return (
    <div className="w-1/4 h-96 flex flex-col">
      <div
        style={{ height: "90%" }}
        className="flex flex-col shadow-xl p-2 border-2 border-light-blue rounded-lg cursor-pointer hover:border-p-blue group transition ease-in-out duration-500 hover:scale-105 "
      >
        {/* <div
          style={{
            backgroundImage: `url(${imgpath})`,
            height: "180px",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
            className="rounded-xl bg-center transform group-hover:scale-105 transition duration-300"
        ></div> */}
        <div
          style={{ height: "180px", width: "100%" }}
          class="rounded-xl bg-center relative overflow-hidden"
        >
          <img
            src={`${imgpath}`}
            alt="Image description"
            class="rounded-xl h-full w-full object-cover absolute inset-0 transform group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex justify-between items-center px-2 pt-1">
          <p className="text-gray-400 text-sm">{subheading}</p>
          <div className="flex text-yellow-500 gap-0.5">
            {stars.map((star) =>
              star ? (
                <i class="fi fi-sr-star"></i>
              ) : (
                <i class="fi fi-rr-star"></i>
              )
            )}
          </div>
        </div>
        <div className="px-2 font-semibold">{heading}</div>
        <div className="flex items-end gap-1 px-2 font-semibold text-s-orange">
          <div className="text-md">
            <i class="fi fi-bs-indian-rupee-sign"></i>
          </div>
          <span className="text-lg">{price}</span>
        </div>
        <div className="flex justify-center">
          <Button text="Join Now" path="/courses" />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
