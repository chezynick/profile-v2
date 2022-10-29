import cn from "classnames";
import React from "react";

const PageHeader = ({ text, light = false }) => {
  return (
    <div className="absolute top-0 left-0 flex justify-center w-full pt-4 sm:justify-start">
      <h1
        className={cn("text-3xl text-gray-700  sm:pl-12", {
          "text-gray-100": light,
        })}
      >
        {text}
      </h1>
    </div>
  );
};

export default PageHeader;
