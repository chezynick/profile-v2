import React from "react";

const Work = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-white text-gray-700 h-screen w-full flex flex-col justify-center text-4xl items-center"
    >
      <div ref={midRef}>work stuff</div>
    </div>
  );
};

export default Work;
