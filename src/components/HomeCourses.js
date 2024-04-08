import React from "react";
import CourseCard from "./CourseCard";
import frontend from "../images/front-end-developer.jpg";
import backend from "../images/backend.webp";
import datascience from "../images/data-science.jpg";

function HomeCourses() {
  const courses = [
    {
      imgpath: frontend,
      subheading: "Front-end ",
      rating: "4",
      heading: "Front End Development",
      price: "999",
    },
    {
      imgpath: backend,
      subheading: "Back-end ",
      rating: "4",
      heading: "Front End Development",
      price: "999",
    },
    {
      imgpath: datascience,
      subheading: "Data Science",
      rating: "4",
      heading: "Data science for Beginners",
      price: "999",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Our Courses</h1>
        <p className="text-gray-600">
          Explore various courses offered by us and upskill yourself
        </p>
      </div>
      <div className="flex justify-around px-10 py-10">
        {courses.map((course) => (
          <CourseCard key={course.heading} {...course} />
        ))}
      </div>
    </div>
  );
}

export default HomeCourses;
