import React from "react";

const Personal = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-white text-gray-700 h-screen w-full flex justify-center text-4xl items-center"
    >
      <div ref={midRef}>Personal stuff</div>
    </div>
  );
};

export default Personal;
