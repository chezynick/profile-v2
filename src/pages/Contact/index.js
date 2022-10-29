import React from "react";
import Button from "../../components/Button";
const Contact = ({ forwardRef, midRef, scrollToComponent, topRef }) => {
  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full h-screen text-4xl text-gray-700 bg-gray-100"
    >
      <div>Contact me?</div>
      <Button
        onClick={() => scrollToComponent(topRef)}
        text="Back to top"
        alternate
      />
      <div ref={midRef} className="absolute left-0 top-1/2" />
    </div>
  );
};

export default Contact;
