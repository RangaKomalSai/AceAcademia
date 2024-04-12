import React from "react";
import BenefitCard from "./BenefitCard";

function HomeBenefits() {
  const benefits = [
    {
      number: "01",
      heading: "Flexible Learning Schedule",
      subheading:
        "Fit your coursework around your existing commitments and obligations.",
    },
    {
      number: "02",
      heading: "Expert Instruction",
      subheading:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      number: "03",
      heading: "Diverse Course Offerings",
      subheading:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      number: "04",
      heading: "Updated Curriculum",
      subheading:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      number: "05",
      heading: "Practical Assignments",
      subheading:
        "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      number: "06",
      heading: "Interactive Learning Environment",
      subheading:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];
  return (
    <div className="flex flex-col px-10 py-10 items-center">
      <h1 className="font-bold text-3xl">Benefits</h1>
      <p className="text-gray-600">Discover the Advantages of Our Services</p>
      {/* <div className="flex flex-wrap items-center justify-center my-3"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center my-3">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.number} {...benefit} />
        ))}
      </div>
    </div>
  );
}

export default HomeBenefits;
