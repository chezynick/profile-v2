import React from "react";
import Button from "../../components/Button";

const Welcome = ({ scrollToComponent, forwardRef, workRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-black text-white h-screen w-full flex flex-col justify-center text-4xl items-center"
    >
      <p>Hello world</p>
      <Button
        onClick={() => {
          scrollToComponent(workRef);
        }}
        text="My work"
      />
    </div>
  );
};

export default Welcome;
