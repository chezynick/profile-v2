import React from "react";
import Button from "../../components/Button";

const Welcome = ({ scrollToComponent, forwardRef, aboutRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-gray-800 p-4 relative text-white h-screen w-full flex flex-col justify-center text-4xl items-center"
    >
      <p className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 mb-2">
        <span>Hello, My name is </span>
        <span className="text-primaryColor pl-2"> Nick Chesterton</span>
      </p>
      <Button
        onClick={() => {
          scrollToComponent(aboutRef);
        }}
        text="About me..."
      />
      <div ref={midRef} className="right-2 absolute top-1/2" />
    </div>
  );
};

export default Welcome;
