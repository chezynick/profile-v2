import cn from "classnames";
import React from "react";

const PageHeader = ({ text, light = false }) => {
  return (
    <div className="absolute top-0 left-0 flex justify-center w-full pt-4 ">
      <div className="flex justify-center w-full md:w-3/4 sm:justify-start ">
        <h1
          className={cn("sm:text-3xl text-xl sm:pl-12 md:pl-0  text-gray-700", {
            "text-gray-100": light,
          })}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
