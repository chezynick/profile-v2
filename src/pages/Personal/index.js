import React from "react";

const Personal = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-white relative text-gray-700 h-screen w-full flex justify-center text-4xl items-center"
    >
      <div>Personal stuff</div>
      <div ref={midRef} className="right-2 absolute top-1/2" />
    </div>
  );
};

export default Personal;
