import React from "react";
import cn from "classnames";
import UseIsInViewport from "../../hooks/UseIsInViewport";

const MenuDots = ({ refPoints, scrollToComponent }) => {
  const dotStyle = "m-2 h-3 w-3 rounded-full flex-shrink-0 bg-gray-700";
  return (
    <div className="fixed border  opacity-95 z-10  border-gray-700 rounded-lg p-2 ml-2 flex flex-col justify-center items-center left-0 top-1/3">
      {refPoints.map((page) => (
        <button
          key={page.name}
          className={cn(dotStyle, {
            " bg-primaryColor ": UseIsInViewport(page.midPoint),
          })}
          onClick={() => scrollToComponent(page.mainRef)}
        />
      ))}
    </div>
  );
};

export default MenuDots;
