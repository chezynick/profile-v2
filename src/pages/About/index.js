import React from "react";

const About = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-gray-100 relative text-gray-700 h-screen w-full flex flex-col justify-center text-4xl items-center"
    >
      <div>About things</div>
      <div ref={midRef} className="right-2 absolute top-1/2" />
    </div>
  );
};

export default About;
