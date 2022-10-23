import React from "react";
import cn from "classnames";
import UseIsInViewport from "../../hooks/UseIsInViewport";
import { WELCOME } from "../../constants";

const MenuDots = ({ refPoints, scrollToComponent }) => {
  const dotStyle = "m-2 p-1 rounded-full flex-shrink-0 bg-black h-1 w-1";
  return (
    <div className="fixed border opacity-50 border-black rounded-lg p-2 ml-2 flex flex-col justify-center items-center z-20 left-0 top-1/3">
      {refPoints.map((page) => (
        <button
          key={page.name}
          className={cn(dotStyle, {
            " bg-lime-400 ":
              UseIsInViewport(page.midPoint) && page.name !== WELCOME,
          })}
          onClick={() => scrollToComponent(page.mainRef)}
        />
      ))}
    </div>
  );
};

export default MenuDots;
