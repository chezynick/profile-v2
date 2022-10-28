import React from "react";
import cn from "classnames";

const Work = ({ forwardRef, midRef }) => {
  const projects = [
    "bg-gray-400",
    "bg-blue-300",
    "bg-green-200",
    "bg-yellow-300",
    "bg-red-300",
    "bg-lemon-300",
    "bg-blue-600",
    "bg-green-800",
  ];
  return (
    <div
      ref={forwardRef}
      className="bg-gray-100 relative text-gray-700 h-screen w-full flex flex-col justify-center text-4xl items-center"
    >
      <div className="w-[80%] flex justify-start">
        <h1 className="text-gray-700 text-2xl mb-2">Projects</h1>
      </div>

      <div className="w-[80%] h-3/4 overflow-clip flex items-center justify-start flex-wrap ">
        {projects.map((project) => (
          <div
            key={project}
            className={cn(
              "min-w-[200px] h-[200px] flex-shrink-0 flex-grow",
              project
            )}
          />
        ))}
      </div>
      <div ref={midRef} className="right-2 absolute top-1/2" />
    </div>
  );
};

export default Work;
