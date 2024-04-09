import React from "react";
import CourseDetailCard from "../components/CourseDetailCard";
import c1 from "../images/courses/c1.png";
import c2 from "../images/courses/c2.png";
import c3 from "../images/courses/c3.png";
import c4 from "../images/courses/c4.png";
import c5 from "../images/courses/c5.png";
import c6 from "../images/courses/c6.png";
import c7 from "../images/courses/c7.png";
import c8 from "../images/courses/c8.png";
import c9 from "../images/courses/c9.png";

function Courses() {
  const curriculum = [
    {
      heading: "Web Design Fundamentals",
      subheading:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      one: "Introduction to HTML",
      two: "Styling with CSS",
      three: "Introduction to Responsive Design",
      four: "Design Principles for Web",
      five: "Building a Basic Website",
      img1: c1,
      img2: c2,
      img3: c3,
    },
    {
      heading: "Web Design Fundamentals",
      subheading:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      one: "Introduction to HTML",
      two: "Styling with CSS",
      three: "Introduction to Responsive Design",
      four: "Design Principles for Web",
      five: "Building a Basic Website",
      img1: c4,
      img2: c5,
      img3: c6,
    },
    {
      heading: "Web Design Fundamentals",
      subheading:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      one: "Introduction to HTML",
      two: "Styling with CSS",
      three: "Introduction to Responsive Design",
      four: "Design Principles for Web",
      five: "Building a Basic Website",
      img1: c7,
      img2: c8,
      img3: c9,
    },
  ];
  return (
    <div className="px-20 py-10">
      <div className="flex flex-col items-center mb-3">
        <h1 className="font-bold text-5xl text-balance w-full my-2">
          Online Courses on <span className="text-s-orange">Design</span> and{" "}
          <span className="text-s-orange">Development</span>
        </h1>
        <p className="text-gray-500 text-balance text-sm w-3/4 py-2">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <div className="h-0.5 bg-gray-200"></div>
      <div className="mt-3 flex flex-col gap-3 mb-10">
        {curriculum.map((curr) => (
          <CourseDetailCard {...curr} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
