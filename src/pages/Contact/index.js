import React from "react";
const Contact = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="bg-white text-gray-700 h-screen w-full flex justify-center text-4xl items-center"
    >
      <div ref={midRef}>Contact me?</div>
    </div>
  );
};

export default Contact;
