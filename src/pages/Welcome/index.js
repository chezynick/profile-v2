import React from "react";
import Button from "../../components/Button";

const Welcome = ({ scrollToComponent, forwardRef, workRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-gray-800 z-50 opacity-100  text-white h-screen w-full flex flex-col justify-center text-4xl items-center"
    >
      <p ref={midRef}>
        Hello, My name is{" "}
        <span className="text-primaryColor">Nick Chesterton</span>
      </p>
      <Button
        onClick={() => {
          scrollToComponent(workRef);
        }}
        text="View my work..."
      />
    </div>
  );
};

export default Welcome;
