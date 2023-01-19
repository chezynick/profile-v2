import React from "react";
import cn from "classnames";
import UseIsInViewport from "../../hooks/UseIsInViewport";

const MenuDots = ({ refPoints, scrollToComponent }) => {
  const dotStyle =
    " md:h-3 md:w-3 h-2 w-2 rounded-full flex-shrink-0 bg-gray-700";
  return (
    <div className="fixed left-0 z-10 flex flex-col items-center justify-center py-2 ml-1 border border-gray-700 rounded-lg opacity-95 md:ml-2 bottom-1 md:top-1/3 md:bottom-auto">
      {refPoints.map((page) => (
        <button
          key={page.name}
          className="p-2 "
          onClick={() => scrollToComponent(page.mainRef)}
          aria-label={`navigate to ${page.name} page`}
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
