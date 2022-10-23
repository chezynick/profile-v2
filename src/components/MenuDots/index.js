import React from "react";
import cn from "classnames";
import { WORK, ABOUT, WELCOME } from "../../constants";

const MenuDots = ({
  workRef,
  contactRef,
  welcomeRef,
  setCurrentPage,
  currentpage,
  personalRef,
  aboutRef,
  scrollToComponent,
}) => {
  const dotStyle = "m-2 p-2 flex-shrink-0 rounded-full bg-black h-2 w-2";
  console.log(currentpage);
  return (
    <div className="fixed border opacity-50 border-black rounded-lg p-2 flex flex-col justify-center items-center z-20 left-0 top-1/3">
      <button
        className={dotStyle}
        onClick={() => {
          setCurrentPage(WELCOME);
          scrollToComponent(welcomeRef);
        }}
      />
      <button
        className={cn(dotStyle, {
          " bg-lime-400": currentpage === WORK,
        })}
        onClick={() => {
          setCurrentPage(WORK);
          scrollToComponent(workRef);
        }}
      />
      <button
        className={cn(dotStyle, {
          "border border-lime-400": currentpage === ABOUT,
        })}
        onClick={() => {
          setCurrentPage(ABOUT);
          scrollToComponent(aboutRef);
        }}
      />
      <button
        className={dotStyle}
        onClick={() => scrollToComponent(personalRef)}
      />
      <button
        className={dotStyle}
        onClick={() => scrollToComponent(contactRef)}
      />
    </div>
  );
};

export default MenuDots;
