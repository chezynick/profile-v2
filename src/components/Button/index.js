import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      className="border border-gray-200 text-xl px-4 py-2 rounded-lg my-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
