import React from "react";
import cn from "classnames";

const Work = ({ forwardRef, midRef }) => {
  const projects = ["bg-gray-400", "bg-blue-300", "bg-green-200"];
  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full h-screen text-4xl text-gray-700 bg-gray-100"
    >
      <div className="w-[85%] flex justify-center">
        <h1 className="mb-2 text-2xl text-gray-700">Projects</h1>
      </div>

      <div className="w-[85%] h-3/4 gap-8 overflow-y-auto flex items-center justify-center flex-wrap ">
        {projects.map((project) => (
          <div
            key={project}
            className={cn(
              "md:w-[20rem] w-[250px] md:h-[20rem] h-[250px] flex-shrink-0 flex justify-center items-center  relative ",
              project
            )}
          >
            <div>images could go here</div>
            <div className="absolute top-0 w-full h-full opacity-0 hover:opacity-80 hover:bg-white" />
          </div>
        ))}
      </div>
      <div ref={midRef} className="absolute right-2 top-1/2" />
    </div>
  );
};

export default Work;
