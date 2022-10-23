import React from "react";

const Personal = ({ forwardRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-white text-gray-700 h-screen w-full flex justify-center text-4xl items-center"
    >
      Personal stuff
    </div>
  );
};

export default Personal;
