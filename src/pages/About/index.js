import React from "react";

const About = ({ forwardRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-gray-200 text-gray-700 h-screen w-full flex flex-col justify-center text-4xl items-center"
    >
      About things
    </div>
  );
};

export default About;
