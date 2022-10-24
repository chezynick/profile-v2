import React from "react";
import Button from "../../components/Button";

const Welcome = ({ scrollToComponent, forwardRef, workRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-gray-800 p-4 relative text-white h-screen w-full flex flex-col justify-center text-4xl items-center"
    >
      <p>
        Hello, My name is{" "}
        <span className="text-primaryColor">Nick Chesterton</span>
      </p>
      <Button
        onClick={() => {
          scrollToComponent(workRef);
        }}
        text="View my work..."
      />
      <div ref={midRef} className="right-2 absolute top-1/2" />
    </div>
  );
};

export default Welcome;
