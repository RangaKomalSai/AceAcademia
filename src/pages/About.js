import React from "react";
import AboutCard from "../components/AboutCard";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const achievements = [
    {
      icon: "fi fi-sr-chess-queen",
      heading: "Trusted by Thousands",
      subheading:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      icon: "fi fi-sr-medal",
      heading: "Award-Winning Courses",
      subheading:
        "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      icon: "fi fi-sr-feedback-review",
      heading: "Positive Student Feedback",
      subheading:
        "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
      icon: "fi fi-sr-square-bolt",
      heading: "Industry Partnerships",
      subheading:
        "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
    },
  ];
  const goals = [
    {
      icon: "fi fi-sr-briefcase",
      heading: "Provide Practical Skills",
      subheading:
        "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
      icon: "fi fi-rr-book-bookmark",
      heading: "Foster Creative Problem-Solving",
      subheading:
        "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
    },
    {
      icon: "fi fi-sr-puzzle-piece",
      heading: "Promote Collaboration and Community",
      subheading:
        "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
    },
    {
      icon: "fi fi-sr-light-emergency-on",
      heading: "Stay Ahead of the Curve",
      subheading:
        "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
    },
  ];
  return (
    <div className="px-20 py-10">
      <div className="flex flex-col gap-2 my-2">
        <h1 className="font-bold text-3xl">About AceAcademia</h1>
        <p className="text-gray-600">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      <div className="h-0.5 bg-gray-200 my-10"></div>
      <div className="flex flex-col gap-2 my-5">
        <h1 className="font-semibold text-xl">Achievements</h1>
        <p className="text-gray-600">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </div>
      <div className="flex flex-wrap gap-3 my-5">
        {achievements.map((card) => (
          <AboutCard {...card} />
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-16">
        <h1 className="font-semibold text-xl">Our Goals</h1>
        <p className="text-gray-600">
          At AceAcademia, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 my-5 mb-10">
        {goals.map((card) => (
          <AboutCard {...card} />
        ))}
      </div>
    </div>
  );
}

export default About;
