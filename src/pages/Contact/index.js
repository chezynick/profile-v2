import React from "react";
const Contact = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-gray-100 relative text-gray-700 h-screen w-full flex justify-center text-4xl items-center"
    >
      <div>Contact me?</div>
      <div ref={midRef} className="right-2 absolute top-1/2" />
    </div>
  );
};

export default Contact;
