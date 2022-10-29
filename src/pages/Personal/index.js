import React from "react";
import PageHeader from "../../components/PageHeader";

const Personal = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="relative flex items-center justify-center w-full h-screen text-4xl text-gray-700 bg-white"
    >
      <PageHeader text="Outside work" />
      <div ref={midRef} className="absolute right-2 top-1/2" />
    </div>
  );
};

export default Personal;
