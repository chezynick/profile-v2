import React from "react";
import cn from "classnames";
import UseIsInViewport from "../../hooks/UseIsInViewport";

const MenuDots = ({ refPoints, scrollToComponent }) => {
  const dotStyle =
    " md:h-3 md:w-3 h-2 w-2 rounded-full flex-shrink-0 bg-gray-700";
  return (
    <div className="fixed border  opacity-95 z-10 py-2  border-gray-700 rounded-lg  md:ml-2  ml-1 flex flex-col justify-center items-center bottom-1 left-0 md:top-1/3 md:bottom-auto">
      {refPoints.map((page) => (
        <button
          key={page.name}
          className="p-2 "
          onClick={() => scrollToComponent(page.mainRef)}
        >
          <div
            className={cn(dotStyle, {
              " bg-primaryColor ": UseIsInViewport(page.midPoint),
            })}
          />
        </button>
      ))}
    </div>
  );
};

export default MenuDots;
