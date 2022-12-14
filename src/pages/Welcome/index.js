import React from "react";
import Button from "../../components/Button";

const Welcome = ({ scrollToComponent, forwardRef, aboutRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full h-screen p-4 text-white bg-gray-800"
    >
      <p className="flex flex-col mb-2 space-y-6 text-4xl sm:flex-row sm:space-y-0">
        <span>Hello, My name is </span>
        <span className="pl-2 text-primaryColor"> Nick Chesterton</span>
      </p>
      <Button
        onClick={() => {
          scrollToComponent(aboutRef);
        }}
        text="About me..."
      />
      <div ref={midRef} className="absolute right-2 top-1/2" />
    </div>
  );
};

export default Welcome;
